import express from "express";
import MeController from "../app/controllers/MeController.js";

const router = express.Router();
const meController = MeController;

router.get("/stored/courses", meController.storedCourses);
router.get("/trash/courses", meController.trashCourses);

export default router;
