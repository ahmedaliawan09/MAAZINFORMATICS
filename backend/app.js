import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import cookieparser from "cookie-parser"
import auth from "./routes/auth.js"
import service from "./routes/service.js"

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(helmet());
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }

));

app.use("/api/auth", auth);
app.use("/api/service", service);

export default app;