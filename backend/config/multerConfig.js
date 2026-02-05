
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinaryConfig.js";

// Configure Cloudinary with extended timeout
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    timeout: 120000, // 120 seconds timeout (2 minutes)
    upload_timeout: 120000,
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
        return {
            folder: "maazinfo_services",
            allowed_formats: ["jpg", "png", "jpeg", "webp"],
            public_id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            transformation: [
                { width: 1200, crop: "limit", quality: 80 } // Fixed quality instead of auto
            ],
            resource_type: "auto",
            timeout: 120000, // 120 seconds for each upload
            chunk_size: 6000000 // 6MB chunks for better reliability
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

// Create multer instance with optimized settings
const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 3 * 1024 * 1024, // Reduced to 3MB per file for better reliability
        files: 5 // Reduced to 5 files at once to prevent timeout
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