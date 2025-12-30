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

// controllers/servicecontroller.js
// controllers/servicecontroller.js - BULLETPROOF VERSION
export const saveServiceContent = async (req, res) => {
    let connection = null;
    try {
        // Get dedicated connection
        connection = await db.promise().getConnection();
        await connection.beginTransaction(); // SINGLE TRANSACTION ONLY

        const { id } = req.params;
        let { basic, sections } = req.body;

        // Parse JSON strings from FormData
        if (typeof basic === "string") basic = JSON.parse(basic);
        if (typeof sections === "string") sections = JSON.parse(sections);
        basic = basic || {};
        sections = Array.isArray(sections) ? sections : [];

        console.log(`🚀 Saving service ${id}: ${sections.length} sections`);

        // === 1. SIMPLE & FAST DELETE (no JOINs, no locks) ===
        const contentTables = ['service_faqs', 'service_features', 'service_stats', 'service_process_steps', 'service_grid_items'];
        for (const table of contentTables) {
            await connection.execute(`DELETE FROM ${table} WHERE section_id IN (SELECT id FROM service_sections WHERE service_id = ?)`, [id]);
        }
        console.log('✅ Deleted all section content');

        // Then delete sections
        await connection.execute('DELETE FROM service_sections WHERE service_id = ?', [id]);
        console.log('✅ Deleted all sections');

        // === 2. Update basic info ===
        if (Object.keys(basic).length > 0) {
            await updateServiceBasic(id, basic, connection);
            console.log('✅ Updated basic info');
        }

        // === 3. Insert new sections ===
        for (let i = 0; i < sections.length; i++) {
            const sec = sections[i];

            // Upload section background image (with safe check)
            let background_image = sec.background_image || null;
            const bgField = `section_bg_${sec.tempId}`;
            if (req.files && req.files[bgField] && req.files[bgField].length > 0) {
                background_image = req.files[bgField][0].public_id || req.files[bgField][0].filename;
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
            console.log(`Created section ${sec.section_type} (ID: ${sectionId})`);

            // === 4. Insert section content ===
            if (!sec.content || !Array.isArray(sec.content)) continue;

            for (const item of sec.content) {
                // Upload item image (with safe check)
                let itemImage = item.image || null;
                const itemField = `item_image_${item.tempId}`;
                if (req.files && req.files[itemField] && req.files[itemField].length > 0) {
                    itemImage = req.files[itemField][0].public_id || req.files[itemField][0].filename;
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
                    console.log(`Added ${sec.section_type} item`);
                } catch (itemErr) {
                    console.error(`Item error (${sec.section_type}):`, itemErr.message);
                }
            }
        }

        // Hero images (update after sections to avoid lock conflicts)
        if (req.files && req.files.hero_image && req.files.hero_image.length > 0) {
            const heroImg = req.files.hero_image[0].public_id || req.files.hero_image[0].filename;
            await connection.execute('UPDATE services SET hero_image = ? WHERE id = ?', [heroImg, id]);
            console.log('Saved hero image:', heroImg);
        }

        if (req.files && req.files.hero_background_image && req.files.hero_background_image.length > 0) {
            const heroBg = req.files.hero_background_image[0].public_id || req.files.hero_background_image[0].filename;
            await connection.execute('UPDATE services SET hero_background_image = ? WHERE id = ?', [heroBg, id]);
            console.log('Saved hero background:', heroBg);
        }

        await connection.commit();
        console.log('🎉 ALL SAVED SUCCESSFULLY');
        res.json({ message: "Service content saved successfully" });

    } catch (err) {
        if (connection) {
            try {
                await connection.rollback();
                console.log('🔄 Rolled back transaction');
            } catch (rollbackErr) {
                console.error('Rollback failed:', rollbackErr);
            }
        }

        console.error("💥 Save service content FAILED:", err);

        if (err.code === 'ER_LOCK_WAIT_TIMEOUT') {
            return res.status(429).json({
                message: "Database is busy. Please wait 10 seconds and try again.",
                tip: "Close all tabs editing this service. Only one save at a time."
            });
        }
        res.status(500).json({ message: "Save failed", error: err.message });
    } finally {
        if (connection) connection.release();
    }
};