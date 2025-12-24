// models/service.js
import db from "../config/db.js";

export const createService = async ({ service_name, user_id }) => {
    const [result] = await db.promise().execute(
        "INSERT INTO services (service_name, user_id) VALUES (?, ?)",
        [service_name, user_id]
    );
    return { id: result.insertId, service_name, user_id };
};

export const getAllServices = async () => {
    const [rows] = await db.promise().execute("SELECT id, service_name FROM services ORDER BY service_name");
    return rows;
};