import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import cookieparser from "cookie-parser"
import auth from "./routes/auth.js"

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extented: true }));
app.use(cookieparser());
app.use(helmet());
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }

));

app.use("/api/auth", auth);


export default app;