
    import type { Response,Request } from "express";
    import lessonService  from "../services/lesson.service.js";

    async function getLessons(req:Request,res:Response){
        const lessons= await lessonService.getLessons();

        res.status(200).json({
            msg:"here are all the lessons availble one the club ",
            success:true,
            lessons
        })


    }
    async function getLessonById(req:Request,res:Response){
        
         const id : any = req.params.id;
        const lesson : any= await lessonService.getLessonById(id);
        


        res.status(200).json({
            msg:"particualr lesson data has been pulled out ",
            success:true,
            lesson:lesson
        })

        
        
    }
    export default {
        getLessons:getLessons,
        getLessonById:getLessonById,
    };