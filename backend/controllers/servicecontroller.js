// controllers/servicecontroller.js
import jwt from "jsonwebtoken";
import {
    getAllServices,
    getServiceBySlug,
    createService,
    getServiceForEdit,        // ← ADD THIS
    updateServiceBasic,       // ← ADD THIS
    createSection,            // ← ADD THIS
    deleteSection,            // ← ADD THIS
    addFeature,
    addStat,
    addProcessStep,
    addGridItem,
    deleteContentRow,
} from "../models/service.js";
import db from "../config/db.js"

export const addService = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

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
            return res.status(400).json({ message: "Service name already exists" });
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

// New: Dynamic service page data
export const getDynamicService = async (req, res) => {
    try {
        const { slug } = req.params;

        if (!slug) {
            return res.status(400).json({ message: "Slug is required" });
        }

        const service = await getServiceBySlug(slug);

        if (!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        res.status(200).json({ service });
    } catch (error) {
        console.error("Get dynamic service error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Add to your existing controller

export const getServiceContent = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await getServiceForEdit(id);
        if (!service) return res.status(404).json({ message: "Service not found" });
        res.json({ service });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

// Save basic info + new sections + content
export const saveServiceContent = async (req, res) => {
    try {
        const { id } = req.params
        const { basic, sections } = req.body

        // Update basic info
        if (basic) await updateServiceBasic(id, basic)

        // Handle sections (clear old ones and add new – simple way)
        if (sections) {
            // Optional: delete all old sections first (careful!)
            await db.promise().execute("DELETE FROM service_sections WHERE service_id = ?", [id])

            for (let sec of sections) {
                const [secResult] = await db.promise().execute(
                    "INSERT INTO service_sections (service_id, section_type, title, subtitle) VALUES (?, ?, ?, ?)",
                    [id, sec.section_type, sec.title || "", sec.subtitle || ""]
                )
                const sectionId = secResult.insertId

                for (let item of sec.content) {
                    if (sec.section_type === "features") {
                        await addFeature(sectionId, item)
                    } else if (["stats", "benefits"].includes(sec.section_type)) {
                        await addStat(sectionId, item)
                    } else if (sec.section_type === "process") {
                        await addProcessStep(sectionId, item)
                    } else if (["industries", "technologies"].includes(sec.section_type)) {  // ← FIXED HERE
                        await addGridItem(sectionId, item)
                    }
                }
            }
        }

        res.json({ message: "All content saved successfully" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Save failed" })
    }
}