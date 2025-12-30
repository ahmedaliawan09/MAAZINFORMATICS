
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinaryConfig.js";

// Configure Cloudinary with timeout
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    timeout: 60000, // 60 seconds timeout
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
        return {
            folder: "maazinfo_services",
            allowed_formats: ["jpg", "png", "jpeg", "webp"],
            public_id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            transformation: [
                { width: 1200, crop: "limit", quality: "auto" }
            ],
            resource_type: "auto",
            timeout: 60000 // 60 seconds for each upload
        };
    },
});

const fileFilter = (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only images are allowed."), false);
    }
};

// Create multer instance with longer timeout
const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB per file
        files: 10 // Max 10 files at once
    }
});

// Custom middleware with better error handling
const handleCloudinaryUpload = (req, res, next) => {
    upload.any()(req, res, (err) => {
        if (err) {
            console.error("📛 Upload error details:", {
                message: err.message,
                name: err.name,
                code: err.code,
                http_code: err.http_code
            });

            // Handle timeout specifically
            if (err.name === 'TimeoutError' || err.http_code === 499) {
                return res.status(408).json({
                    message: "Upload timeout. Please try again with smaller images or check your internet connection.",
                    tip: "Try images under 2MB each"
                });
            }

            return res.status(400).json({
                message: err.message || "Upload failed",
                details: err.name
            });
        }

        // Log successful uploads
        if (req.files && req.files.length > 0) {
            console.log("✅ Uploaded files:", req.files.map(f => ({
                field: f.fieldname,
                name: f.originalname,
                size: f.size,
                public_id: f.filename,
                url: f.path
            })));
        } else {
            console.log("ℹ️ No files were uploaded");
        }

        next();
    });
};

export { upload, handleCloudinaryUpload };