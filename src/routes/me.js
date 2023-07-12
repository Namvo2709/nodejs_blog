import express from "express";
import MeController from "../app/controllers/MeController.js";

const router = express.Router();
const meController = MeController;

router.get("/stored/courses", meController.storedCourses);

export default router;
