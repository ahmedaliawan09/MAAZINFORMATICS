import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import cookieparser from "cookie-parser"

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extented: true }));
app.use(cookieparser());
app.use(helmet());
app.use(cors());


export default app;