import app from "./app.js"
import "./config/cloudinaryConfig.js"


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
})