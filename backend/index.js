import app from "./app.js"
import "./config/cloudinaryConfig.js"


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});

// Increase server timeout for file uploads (2 minutes)
server.timeout = 120000; // 120 seconds
server.keepAliveTimeout = 120000;
server.headersTimeout = 125000; // Slightly higher than keepAliveTimeout

console.log("⏱️ Server timeout set to 120 seconds for file uploads");