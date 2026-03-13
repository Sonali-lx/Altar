import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import meditationRoutes from "./routes/meditationRoutes.js";

dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 5001;

connectDB();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/meditation", meditationRoutes);

app.listen(PORT, () => console.log(`Server is runnig on Port ${PORT}`));
