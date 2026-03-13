import express from "express";
import {
  createQuietTime,
  getQuietTimeEntries,
} from "../controllers/meditation/quietTimeController.js";

const router = express.Router();

router.post("/quiettime", createQuietTime);
router.get("/quiettime", getQuietTimeEntries);

export default MeditationRoutes;
