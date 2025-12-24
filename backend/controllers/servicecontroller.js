// controllers/servicecontroller.js
import jwt from "jsonwebtoken";  // ← ADD THIS LINE
import { getAllServices, createService } from "../models/service.js";

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

        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Now works
        const userId = decoded.id;

        const newService = await createService({ service_name: service_name.trim(), user_id: userId });

        res.status(201).json({ message: "Service added successfully", service: newService });
    } catch (error) {
        console.error("Add service error:", error);  // ← Improve logging
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Invalid or expired token" });
        }
        res.status(500).json({ message: "Server error" });
    }
};

export const getServices = async (req, res) => {
    try {
        const services = await getAllServices();
        res.status(200).json({ services });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};