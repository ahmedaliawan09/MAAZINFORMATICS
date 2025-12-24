import db from "../config/db.js"
import bcrypt from "bcrypt"

export const findUserByName = async (name) => {

    const [rows] = await db.promise().execute("Select * from users where name = ?", [name]);
    return rows[0];
}
export const findUserById = async (id) => {

    const [rows] = await db.promise().execute("Select * from users where id = ?", [id]);
    return rows[0];
}

export const changePasswordd = async (hashPassword, userId) => {
    const result = await db.promise().execute("UPDATE users SET password = ? where id = ?", [hashPassword, userId]);
    return result;
}
export const CreateUser = async ({ name, email, password, role }) => {

    const hashpassword = await bcrypt.hash(password, 10);
    const [result] = await db.promise().execute(
        " INSERT INTO users (name,email,password,role) VALUES(?,?,?,?)",
        [name, email, hashpassword, role]
    );
    return result;

}
export const getAllUsers = async () => {
    const [rows] = await db.promise().execute(
        "SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC"
    );
    return rows;
}