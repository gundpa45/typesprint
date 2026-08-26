import { Router } from "express";
import lessonController from "../controllers/lesson.controller.js"

const router=Router();

router.get("/lessons",lessonController.getLessons)
router.get("/lessons/:id",lessonController.getLessonById)


export default router;