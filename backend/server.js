import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json()); // to parse the requests with JSON payloads (from req.body)
app.use("/api/auth", authRoute);
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
