import { Router } from "express";
import lessonController from "../controllers/lesson.controller.js"
import validate from "../middleware/validate.middleware.js";
import { createLesson ,updateLesson} from "../validators/lessons.validators.js";



const router=Router();

// get routess for the lessons 
router.get("/lessons",lessonController.getLessons)
router.get("/lesson/:id",lessonController.getLessonById)



// post routes for the lesson 

router.post("/create-lesson", validate(createLesson), lessonController.createLesson)



// patch routes eg:" update teh lesoons details "
router.patch("/lesson/:id", validate(updateLesson), lessonController.updateLesson)
router.delete("/lesson/:id",lessonController.deleteLesson)



export default router;