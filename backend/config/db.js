import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "maazinfo",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000,
    acquireTimeout: 10000,
    timeout: 10000,
});

const testDatabase = async () => {
    try {
        const connection = await pool.promise().getConnection();
        console.log("Connected to MySQL maazinfo database");
        connection.release();
    } catch (err) {
        console.error("Database connection failed:", err.message);
    }
};

testDatabase();

export default pool;
