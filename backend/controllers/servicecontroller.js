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

        console.log("📁 Uploaded files:", req.files ? req.files.length : 0);
        if (req.files) {
            req.files.forEach(file => {
                console.log(`📄 File: ${file.fieldname} -> ${file.path} (ID: ${file.filename})`);
            });
        }

        // === 1. DELETE OLD CONTENT ===
        const contentTables = ['service_faqs', 'service_features', 'service_stats', 'service_process_steps', 'service_grid_items'];
        for (const table of contentTables) {
            await connection.execute(`DELETE FROM ${table} WHERE section_id IN (SELECT id FROM service_sections WHERE service_id = ?)`, [id]);
        }
        await connection.execute('DELETE FROM service_sections WHERE service_id = ?', [id]);

        // === 2. UPDATE BASIC INFO WITH IMAGES ===
        if (Object.keys(basic).length > 0) {
            // Handle hero images if uploaded
            if (req.files) {
                const heroImageFile = req.files.find(f => f.fieldname === 'hero_image');
                const heroBgFile = req.files.find(f => f.fieldname === 'hero_background_image');

                if (heroImageFile) {
                    basic.hero_image = heroImageFile.filename; // Cloudinary public_id
                    console.log('✅ Hero image saved:', basic.hero_image);
                }
                if (heroBgFile) {
                    basic.hero_background_image = heroBgFile.filename; // Cloudinary public_id
                    console.log('✅ Hero background saved:', basic.hero_background_image);
                }
            }

            await updateServiceBasic(id, basic, connection);
            console.log('✅ Updated basic info');
        }

        // === 3. INSERT SECTIONS ===
        for (let i = 0; i < sections.length; i++) {
            const sec = sections[i];

            // Handle section background image
            let background_image = sec.background_image || null;
            if (sec.tempId) {
                const bgField = `section_bg_${sec.tempId}`;
                const bgFile = req.files?.find(f => f.fieldname === bgField);
                if (bgFile) {
                    background_image = bgFile.filename; // Cloudinary public_id
                    console.log(`✅ Section ${i} background:`, background_image);
                }
            }

            // Insert section
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
            const sectionId = secResult.insertId;

            // === 4. INSERT SECTION CONTENT WITH IMAGES ===
            if (sec.content && Array.isArray(sec.content)) {
                for (const item of sec.content) {
                    let itemImage = item.image || null;

                    // Handle item image if uploaded
                    if (item.tempId) {
                        const itemField = `item_image_${item.tempId}`;
                        const itemFile = req.files?.find(f => f.fieldname === itemField);
                        if (itemFile) {
                            itemImage = itemFile.filename; // Cloudinary public_id
                            console.log(`✅ Item image for ${sec.section_type}:`, itemImage);
                        }
                    }

                    try {
                        if (sec.section_type === "features") {
                            await addFeature(sectionId, { ...item, image: itemImage }, connection);
                        } else if (["stats", "benefits"].includes(sec.section_type)) {
                            await addStat(sectionId, item, connection);
                        } else if (sec.section_type === "process") {
                            await addProcessStep(sectionId, { ...item, image: itemImage }, connection);
                        } else if (["industries", "technologies"].includes(sec.section_type)) {
                            await addGridItem(sectionId, item, connection);
                        } else if (sec.section_type === "faq") {
                            await addFaqItem(sectionId, item, connection);
                        }
                    } catch (itemErr) {
                        console.error(`Item error:`, itemErr.message);
                    }
                }
            }
        }

        // === 5. SAVE SERVICE MEDIA FILES ===
        if (req.files) {
            // Find all media files (uploaded via media tab)
            const mediaFiles = req.files.filter(f => f.fieldname.startsWith('media_'));

            for (const mediaFile of mediaFiles) {
                // Extract media index from fieldname
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
                                mediaFile.filename, // Cloudinary public_id
                                mediaFile.path, // Cloudinary URL
                                mediaData.media_type || 'image',
                                mediaData.alt_text || '',
                                mediaData.caption || ''
                            ]
                        );
                        console.log('✅ Saved media file:', mediaFile.filename);
                    }
                }
            }
        }

        await connection.commit();
        console.log('🎉 All content saved successfully');
        res.json({
            message: "Service content saved successfully",
            uploadedFiles: req.files ? req.files.length : 0
        });

    } catch (err) {
        if (connection) {
            try {
                await connection.rollback();
            } catch (rollbackErr) {
                console.error('Rollback failed:', rollbackErr);
            }
        }

        console.error("💥 Save failed:", err);
        res.status(500).json({
            message: "Save failed",
            error: err.message,
            details: err.stack
        });
    } finally {
        if (connection) connection.release();
    }
};
