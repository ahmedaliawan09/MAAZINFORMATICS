import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

console.log("🔧 Cloudinary Config Check:");
console.log("🌐 Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("🔑 API Key exists:", !!process.env.CLOUDINARY_API_KEY);
console.log("🔒 API Secret exists:", !!process.env.CLOUDINARY_API_SECRET);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    timeout: 120000, // 120 seconds timeout
    upload_timeout: 120000,
});

// Test Cloudinary connection
cloudinary.api.ping()
    .then(result => console.log("✅ Cloudinary connection successful:", result))
    .catch(error => console.error("❌ Cloudinary connection failed:", error));

export default cloudinary;