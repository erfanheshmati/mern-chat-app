import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use("/api/auth", authRoute);
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
