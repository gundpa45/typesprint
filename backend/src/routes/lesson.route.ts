import { Router } from "express";
import lessonController from "../controllers/lesson.controller.js"

const router=Router();

// get routess for the lessons 
router.get("/lessons",lessonController.getLessons)
router.get("/lessons/:id",lessonController.getLessonById)



// post routes for the lesson 

router.post("/lessons",lessonController.createLessons)



export default router;