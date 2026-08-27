
    import type { Response,Request } from "express";
    import lessonService  from "../services/lesson.service.js";

    // this is the get off the lesssons 
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

    // thiss is the post of the 
    async function createLessons(req:Request,res:Response){

        const {title,description,difficulty,order,content}=req.body;

        const lesson=await lessonService.createLesson({title,description,difficulty,order,content});

        res.status(200).json({
            msg:"hello ",
            success:true,
            lesson

        })

    }




    export default {
        getLessons:getLessons,
        getLessonById:getLessonById,
        createLessons:createLessons
    };