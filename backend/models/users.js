import db from "../config/db.js"
import bcrypt from "bcrypt"

export const findUserByName = async (name) => {

    const [rows] = await db.promise().execute("Select * from users where name = ?", [name]);
    return rows[0];
}

export const CreateUser = async ({ name, email, password, role }) => {

    const hashpassword = await bcrypt.hash(password, 10);
    const [result] = await db.promise().execute(
        " INSERT INTO users (name,email,password,role) VALUES(?,?,?,?)",
        [name, email, hashpassword, role]
    );
    return result;

}