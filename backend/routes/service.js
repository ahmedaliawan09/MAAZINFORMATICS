
import { addService, getServices, getDynamicService, getServiceContent, saveServiceContent } from "../controllers/servicecontroller.js";
import { handleCloudinaryUpload } from "../config/multerConfig.js"; // Updated import
import express from "express"
import db from "../config/db.js";

const router = express.Router();

router.get("/getservices", getServices);
router.get("/service/:slug", getDynamicService);
router.post("/addservices", addService);
router.get("/content/:id", getServiceContent);

// Use the new middleware for file uploads
router.put(
    "/content/:id",
    handleCloudinaryUpload,  // Use the new middleware
    saveServiceContent
);

router.put("/updateservice/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { service_name } = req.body;
        if (!service_name?.trim()) {
            return res.status(400).json({ message: "Service name required" });
        }

        const [result] = await db.promise().execute(
            "UPDATE services SET service_name = ? WHERE id = ?",
            [service_name.trim(), id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Service not found" });
        }

        res.json({ message: "Updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

router.delete("/deleteservice/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.promise().execute(
            "DELETE FROM services WHERE id = ?",
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Service not found" });
        }

        res.json({ message: "Deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
