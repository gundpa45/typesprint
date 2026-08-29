
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
    async function createLesson(req:Request,res:Response){

        const {title,description, difficulty,order,content}=req.body;
            // console.log(req.body)
        const lesson=await lessonService.createLesson(title,description,difficulty,order,content);

        res.status(201).json({
            msg:"Lesson created successfully",
            success:true,
            lesson

        })

    }






    //  this is the patch controller part 


    async function updatelessons(req:Request,res:Response){

        const id :any=req.params.id
        const updateData = req.body;
        const update = await lessonService.updateLesson(id, updateData)

        res.status(200).json({
            msg:"Lesson update successfully",
            success:true,
            update
        })


        
    }

    // this is the delete post that i ahvve created 
        async function deleteLesson(req:Request,res:Response){

            const id :any= req.params.id
            const deletelesson :any=await lessonService.deleteLesson(id)

            res.status(200).json({
                msg:" this lesson is delete successfully "
            })
        }


    export default {
        getLessons:getLessons,
        getLessonById:getLessonById,
        createLesson:createLesson,
        updateLesson:updatelessons,
        deleteLesson:deleteLesson
    };