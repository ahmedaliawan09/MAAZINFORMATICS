// controllers/servicecontroller.js
import jwt from "jsonwebtoken";
import cloudinary from "../config/cloudinaryConfig.js";
import {
    getAllServices,
    getServiceBySlug,
    createService,
    getServiceForEdit,
    updateServiceBasic,
    addFeature,
    addStat,
    addProcessStep,
    addGridItem,
    addFaqItem,
} from "../models/service.js";
import db from "../config/db.js";



// Add new service (basic)
export const addService = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(401).json({ message: "Unauthorized" });

        const { service_name } = req.body;
        if (!service_name?.trim()) {
            return res.status(400).json({ message: "Service name is required" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        const newService = await createService({
            service_name: service_name.trim(),
            user_id: userId,
        });

        res.status(201).json({
            message: "Service added successfully",
            service: newService,
        });
    } catch (error) {
        console.error("Add service error:", error);
        if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Invalid or expired token" });
        }
        if (error.code === "ER_DUP_ENTRY") {
            return res.status(400).json({ message: "Service name or slug already exists" });
        }
        res.status(500).json({ message: "Server error" });
    }
};

export const getServices = async (req, res) => {
    try {
        const services = await getAllServices();
        res.status(200).json({ services });
    } catch (error) {
        console.error("Get services error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getDynamicService = async (req, res) => {
    try {
        const { slug } = req.params;
        if (!slug) return res.status(400).json({ message: "Slug is required" });

        const service = await getServiceBySlug(slug);
        if (!service) return res.status(404).json({ message: "Service not found" });

        res.status(200).json({ service });
    } catch (error) {
        console.error("Get dynamic service error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getServiceContent = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await getServiceForEdit(id);
        if (!service) return res.status(404).json({ message: "Service not found" });
        res.json({ service });
    } catch (err) {
        console.error("Get service content error:", err);
        res.status(500).json({ message: "Server error" });
    }
};


export const saveServiceContent = async (req, res) => {
    let connection = null;
    try {
        connection = await db.promise().getConnection();
        await connection.beginTransaction();

        const { id } = req.params;
        let { basic, sections } = req.body;

        // Parse JSON strings from FormData
        if (typeof basic === "string") basic = JSON.parse(basic);
        if (typeof sections === "string") sections = JSON.parse(sections);
        basic = basic || {};
        sections = Array.isArray(sections) ? sections : [];

        console.log("🔍 Processing update for service", id);
        console.log("📦 Sections to process:", sections.length);
        console.log("📁 Files uploaded:", req.files ? req.files.length : 0);

        // === 1. UPDATE BASIC SERVICE INFO (Only changed fields) ===
        if (Object.keys(basic).length > 0) {
            const updateFields = [];
            const updateValues = [];

            // Always update these fields if provided
            if (basic.service_name !== undefined) {
                updateFields.push("service_name = ?");
                updateValues.push(basic.service_name.trim());

                // Update slug if name changed
                const newSlug = basic.service_name
                    .toLowerCase()
                    .trim()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, "");
                updateFields.push("slug = ?");
                updateValues.push(newSlug);
            }

            const basicFields = [
                'short_description', 'hero_title', 'hero_subtitle',
                'hero_cta_text', 'hero_cta_link', 'icon_name',
                'primary_color', 'gradient_from', 'gradient_to', 'is_active'
            ];

            basicFields.forEach(field => {
                if (basic[field] !== undefined) {
                    updateFields.push(`${field} = ?`);
                    updateValues.push(basic[field]);
                }
            });

            // Handle new image uploads ONLY
            if (req.files) {
                const heroImageFile = req.files.find(f => f.fieldname === 'hero_image');
                const heroBgFile = req.files.find(f => f.fieldname === 'hero_background_image');

                if (heroImageFile) {
                    updateFields.push("hero_image = ?");
                    updateValues.push(heroImageFile.filename);
                    console.log('📸 Updated hero image');
                }
                if (heroBgFile) {
                    updateFields.push("hero_background_image = ?");
                    updateValues.push(heroBgFile.filename);
                    console.log('📸 Updated hero background');
                }
            }

            if (updateFields.length > 0) {
                updateValues.push(id);
                await connection.execute(
                    `UPDATE services SET ${updateFields.join(", ")} WHERE id = ?`,
                    updateValues
                );
                console.log('✅ Updated basic service info');
            }
        }

        // === 2. GET EXISTING SECTIONS FOR COMPARISON ===
        const [existingSections] = await connection.execute(
            "SELECT * FROM service_sections WHERE service_id = ? ORDER BY sort_order",
            [id]
        );

        // Create map of existing sections by id
        const existingSectionMap = {};
        existingSections.forEach(sec => {
            existingSectionMap[sec.id] = sec;
        });

        // === 3. PROCESS SECTIONS SMARTLY ===
        for (let i = 0; i < sections.length; i++) {
            const sec = sections[i];
            const isNewSection = !sec.id || sec.id.toString().startsWith('temp-');

            // Handle section background image upload ONLY if new file
            let background_image = sec.background_image || null;
            if (sec.tempId && req.files) {
                const bgField = `section_bg_${sec.tempId}`;
                const bgFile = req.files.find(f => f.fieldname === bgField);
                if (bgFile) {
                    background_image = bgFile.filename;
                    console.log(`📸 Updated section ${i} background`);
                }
            }

            let sectionId;

            if (isNewSection) {
                // INSERT NEW SECTION
                const [secResult] = await connection.execute(
                    `INSERT INTO service_sections 
                    (service_id, section_type, title, subtitle, background_image, layout_style, 
                     cta_text, cta_link, secondary_cta_text, secondary_cta_link, sort_order)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [
                        id, sec.section_type, sec.title || "", sec.subtitle || "",
                        background_image, sec.layout_style || "default",
                        sec.cta_text || null, sec.cta_link || null,
                        sec.secondary_cta_text || null, sec.secondary_cta_link || null,
                        i
                    ]
                );
                sectionId = secResult.insertId;
                console.log(`➕ Created new section: ${sec.section_type} (ID: ${sectionId})`);
            } else {
                // UPDATE EXISTING SECTION
                sectionId = sec.id;

                // Check if section needs update
                const existingSec = existingSectionMap[sectionId];
                if (existingSec) {
                    const needsUpdate =
                        existingSec.title !== sec.title ||
                        existingSec.subtitle !== sec.subtitle ||
                        existingSec.layout_style !== sec.layout_style ||
                        (background_image && existingSec.background_image !== background_image) ||
                        existingSec.cta_text !== sec.cta_text ||
                        existingSec.cta_link !== sec.cta_link ||
                        existingSec.secondary_cta_text !== sec.secondary_cta_text ||
                        existingSec.secondary_cta_link !== sec.secondary_cta_link ||
                        existingSec.sort_order !== i;

                    if (needsUpdate) {
                        await connection.execute(
                            `UPDATE service_sections 
                            SET title = ?, subtitle = ?, layout_style = ?,
                                cta_text = ?, cta_link = ?, secondary_cta_text = ?, secondary_cta_link = ?,
                                sort_order = ?, updated_at = CURRENT_TIMESTAMP
                            ${background_image ? ', background_image = ?' : ''}
                            WHERE id = ?`,
                            background_image ? [
                                sec.title || "", sec.subtitle || "",
                                sec.layout_style || "default",
                                sec.cta_text || null, sec.cta_link || null,
                                sec.secondary_cta_text || null, sec.secondary_cta_link || null,
                                i, background_image, sectionId
                            ] : [
                                sec.title || "", sec.subtitle || "",
                                sec.layout_style || "default",
                                sec.cta_text || null, sec.cta_link || null,
                                sec.secondary_cta_text || null, sec.secondary_cta_link || null,
                                i, sectionId
                            ]
                        );
                        console.log(`✏️ Updated section: ${sec.section_type}`);
                    }
                }
            }

            // === 4. PROCESS SECTION CONTENT SMARTLY ===
            if (sec.content && Array.isArray(sec.content)) {
                // Get existing content
                const tableMap = {
                    "features": "service_features",
                    "stats": "service_stats",
                    "benefits": "service_stats",
                    "process": "service_process_steps",
                    "industries": "service_grid_items",
                    "technologies": "service_grid_items",
                    "faq": "service_faqs"
                };

                const tableName = tableMap[sec.section_type];
                if (!tableName) continue;

                const [existingContent] = await connection.execute(
                    `SELECT * FROM ${tableName} WHERE section_id = ? ORDER BY sort_order`,
                    [sectionId]
                );

                // Track existing items by id
                const existingContentMap = {};
                existingContent.forEach(item => {
                    existingContentMap[item.id] = item;
                });

                // Process each item
                for (let itemIdx = 0; itemIdx < sec.content.length; itemIdx++) {
                    const item = sec.content[itemIdx];
                    const isNewItem = !item.id || item.id.toString().startsWith('temp-');

                    // Handle item image upload ONLY if new file
                    let itemImage = item.image || null;
                    if (item.tempId && req.files) {
                        const itemField = `item_image_${item.tempId}`;
                        const itemFile = req.files.find(f => f.fieldname === itemField);
                        if (itemFile) {
                            itemImage = itemFile.filename;
                            console.log(`📸 Updated item image in section ${sec.section_type}`);
                        }
                    }

                    if (isNewItem) {
                        // INSERT NEW ITEM
                        try {
                            if (sec.section_type === "features") {
                                await connection.execute(
                                    "INSERT INTO service_features (section_id, icon_name, title, description, highlight, image, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?)",
                                    [sectionId, item.icon_name || "CheckCircle", item.title,
                                        item.description || null, item.highlight || null,
                                        itemImage, itemIdx]
                                );
                            } else if (["stats", "benefits"].includes(sec.section_type)) {
                                await connection.execute(
                                    "INSERT INTO service_stats (section_id, value, label, trend, icon_name, sort_order) VALUES (?, ?, ?, ?, ?, ?)",
                                    [sectionId, item.value, item.label, item.trend || null,
                                        item.icon_name || null, itemIdx]
                                );
                            } else if (sec.section_type === "process") {
                                await connection.execute(
                                    "INSERT INTO service_process_steps (section_id, step_number, title, description, stats, icon_name, image, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                                    [sectionId, item.step_number, item.title,
                                        item.description || null, item.stats || null,
                                        item.icon_name || null, itemImage, itemIdx]
                                );
                            } else if (["industries", "technologies"].includes(sec.section_type)) {
                                await connection.execute(
                                    "INSERT INTO service_grid_items (section_id, icon_name, title, description, stats, color_from, color_to, link, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                                    [sectionId, item.icon_name || null, item.title,
                                        item.description || null, item.stats || null,
                                        item.color_from || null, item.color_to || null,
                                        item.link || null, itemIdx]
                                );
                            } else if (sec.section_type === "faq") {
                                await connection.execute(
                                    "INSERT INTO service_faqs (section_id, question, answer, sort_order) VALUES (?, ?, ?, ?)",
                                    [sectionId, item.question, item.answer || "", itemIdx]
                                );
                            }
                            console.log(`➕ Added new item to ${sec.section_type}`);
                        } catch (itemErr) {
                            console.error(`❌ Error inserting item:`, itemErr.message);
                        }
                    } else {
                        // UPDATE EXISTING ITEM (if it exists)
                        const existingItem = existingContentMap[item.id];
                        if (existingItem) {
                            try {
                                if (sec.section_type === "features") {
                                    await connection.execute(
                                        `UPDATE service_features 
                                         SET icon_name = ?, title = ?, description = ?, highlight = ?, 
                                             sort_order = ?
                                         ${itemImage ? ', image = ?' : ''}
                                         WHERE id = ?`,
                                        itemImage ? [
                                            item.icon_name || "CheckCircle", item.title,
                                            item.description || null, item.highlight || null,
                                            itemIdx, itemImage, item.id
                                        ] : [
                                            item.icon_name || "CheckCircle", item.title,
                                            item.description || null, item.highlight || null,
                                            itemIdx, item.id
                                        ]
                                    );
                                } else if (["stats", "benefits"].includes(sec.section_type)) {
                                    await connection.execute(
                                        `UPDATE service_stats 
                                         SET value = ?, label = ?, trend = ?, icon_name = ?, sort_order = ?
                                         WHERE id = ?`,
                                        [item.value, item.label, item.trend || null,
                                        item.icon_name || null, itemIdx, item.id]
                                    );
                                } else if (sec.section_type === "process") {
                                    await connection.execute(
                                        `UPDATE service_process_steps 
                                         SET step_number = ?, title = ?, description = ?, stats = ?, 
                                             icon_name = ?, sort_order = ?
                                         ${itemImage ? ', image = ?' : ''}
                                         WHERE id = ?`,
                                        itemImage ? [
                                            item.step_number, item.title,
                                            item.description || null, item.stats || null,
                                            item.icon_name || null, itemIdx,
                                            itemImage, item.id
                                        ] : [
                                            item.step_number, item.title,
                                            item.description || null, item.stats || null,
                                            item.icon_name || null, itemIdx,
                                            item.id
                                        ]
                                    );
                                } else if (["industries", "technologies"].includes(sec.section_type)) {
                                    await connection.execute(
                                        `UPDATE service_grid_items 
                                         SET icon_name = ?, title = ?, description = ?, stats = ?, 
                                             color_from = ?, color_to = ?, link = ?, sort_order = ?
                                         WHERE id = ?`,
                                        [item.icon_name || null, item.title,
                                        item.description || null, item.stats || null,
                                        item.color_from || null, item.color_to || null,
                                        item.link || null, itemIdx, item.id]
                                    );
                                } else if (sec.section_type === "faq") {
                                    await connection.execute(
                                        `UPDATE service_faqs 
                                         SET question = ?, answer = ?, sort_order = ?
                                         WHERE id = ?`,
                                        [item.question, item.answer || "", itemIdx, item.id]
                                    );
                                }
                                console.log(`✏️ Updated item ${item.id} in ${sec.section_type}`);
                            } catch (updateErr) {
                                console.error(`❌ Error updating item ${item.id}:`, updateErr.message);
                            }
                        }
                    }
                }

                // DELETE REMOVED ITEMS - FIXED ARRAY HANDLING
                const currentItemIds = sec.content
                    .filter(item => item.id && !item.id.toString().startsWith('temp-'))
                    .map(item => item.id);

                const itemsToDelete = existingContent
                    .filter(item => !currentItemIds.includes(item.id));

                if (itemsToDelete.length > 0) {
                    const deleteIds = itemsToDelete.map(item => item.id);

                    // FIX: Use proper array handling for IN clause
                    if (deleteIds.length === 1) {
                        await connection.execute(
                            `DELETE FROM ${tableName} WHERE id = ?`,
                            [deleteIds[0]]
                        );
                    } else if (deleteIds.length > 1) {
                        const placeholders = deleteIds.map(() => '?').join(',');
                        await connection.execute(
                            `DELETE FROM ${tableName} WHERE id IN (${placeholders})`,
                            deleteIds
                        );
                    }
                    console.log(`🗑️ Deleted ${itemsToDelete.length} items from ${sec.section_type}`);
                }
            }
        }

        // === 5. DELETE REMOVED SECTIONS - FIXED ARRAY HANDLING ===
        const currentSectionIds = sections
            .filter(sec => sec.id && !sec.id.toString().startsWith('temp-'))
            .map(sec => sec.id);

        const sectionsToDelete = existingSections
            .filter(sec => !currentSectionIds.includes(sec.id));

        if (sectionsToDelete.length > 0) {
            const deleteIds = sectionsToDelete.map(sec => sec.id);

            // First delete content in those sections
            const contentTables = ['service_faqs', 'service_features', 'service_stats',
                'service_process_steps', 'service_grid_items'];

            for (const table of contentTables) {
                if (deleteIds.length === 1) {
                    await connection.execute(
                        `DELETE FROM ${table} WHERE section_id = ?`,
                        [deleteIds[0]]
                    );
                } else if (deleteIds.length > 1) {
                    const placeholders = deleteIds.map(() => '?').join(',');
                    await connection.execute(
                        `DELETE FROM ${table} WHERE section_id IN (${placeholders})`,
                        deleteIds
                    );
                }
            }

            // Then delete sections
            if (deleteIds.length === 1) {
                await connection.execute(
                    'DELETE FROM service_sections WHERE id = ?',
                    [deleteIds[0]]
                );
            } else if (deleteIds.length > 1) {
                const placeholders = deleteIds.map(() => '?').join(',');
                await connection.execute(
                    `DELETE FROM service_sections WHERE id IN (${placeholders})`,
                    deleteIds
                );
            }

            console.log(`🗑️ Deleted ${sectionsToDelete.length} sections`);
        }

        // === 6. HANDLE MEDIA FILES SEPARATELY ===
        if (req.files) {
            const mediaFiles = req.files.filter(f => f.fieldname.startsWith('media_'));

            for (const mediaFile of mediaFiles) {
                const match = mediaFile.fieldname.match(/media_(\d+)/);
                if (match) {
                    const index = match[1];
                    const mediaDataField = `media_data_${index}`;

                    if (req.body[mediaDataField]) {
                        const mediaData = JSON.parse(req.body[mediaDataField]);

                        await connection.execute(
                            `INSERT INTO service_media 
                            (service_id, public_id, url, media_type, alt_text, caption)
                            VALUES (?, ?, ?, ?, ?, ?)`,
                            [
                                id,
                                mediaFile.filename,
                                mediaFile.path,
                                mediaData.media_type || 'image',
                                mediaData.alt_text || '',
                                mediaData.caption || ''
                            ]
                        );
                        console.log('➕ Added new media file');
                    }
                }
            }
        }

        await connection.commit();
        console.log('✅ Smart update completed successfully');

        res.json({
            message: "Service content updated successfully",
            updated: true,
            sectionsUpdated: sections.length
        });

    } catch (err) {
        if (connection) {
            try {
                await connection.rollback();
                console.log('🔄 Transaction rolled back');
            } catch (rollbackErr) {
                console.error('Rollback failed:', rollbackErr);
            }
        }

        console.error("💥 Update failed:", err);
        res.status(500).json({
            message: "Update failed",
            error: err.message,
            details: err.sqlMessage
        });
    } finally {
        if (connection) connection.release();
    }
};