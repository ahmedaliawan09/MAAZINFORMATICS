import { login, createUser, logout, checkAuth, changePassword } from "../controllers/authcontroller.js"
import express from "express"

const router = express.Router();

router.post("/login", login);
router.post("/create-user", createUser);
router.post("/logout", logout);
router.get("/check", checkAuth);
router.post("/change-password", changePassword);

export default router;