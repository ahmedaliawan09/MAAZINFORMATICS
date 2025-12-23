import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { findUserByName, CreateUser } from "../models/users.js";

export const login = async (req, res) => {

    try {
        const { name, password } = req.body;
        if (!name || !password) {
            return res.status(400).json({ message: "name or password is missing" });
        }
        const user = await findUserByName(name);
        if (!user) {
            return res.status(401).json({ message: "Inavalid credentials" });
        }
        const validpassword = await bcrypt.compare(password, user.password);
        if (!validpassword) {
            return res.status(401).json({ message: "Invalid Password" });
        }
        const token = jwt.sign(
            { id: user.id, user: user.name, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" },
        );
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "development",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        })

        return res.status(200).json({ message: "login successfull", user: { id: user.id, name: user.name, role: user.role } });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "server error" });
    }

};

export const createUser = async (req, res) => {
    try {

        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existinguUser = await findUserByName(name);
        if (existinguUser) {
            return res.status(400).json({ message: "user already exists" });
        }
        const newUser = await CreateUser({ name, email, password, role });
        res.status(201).json({ message: "user created successfuly" });

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" })
    }
};

export const logout = async () => {

    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "development",
            sameSite: "strict",
        });
        res.json({ message: "user logout successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" });
    }
};

export const checkAuth = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ authenticated: false });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return res.status(200).json({ authenticated: true, user: decoded });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "server error" });
    }
}