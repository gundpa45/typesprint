import { error } from "node:console";
import lessonModel from "../models/lesson.model.js";
import AppError from "../error/appError.js";

// get lesson
async function getLessons(){
    
    const lessons =await lessonModel.find({})
    return lessons 
}



// get leson by id 

async function getLessonById(id:string){

    const lesson :any =await lessonModel.findById(id);

    if(!lesson){
       throw new AppError("Lesson not found", 404);
    }

    return {
        lesson:{
           id: lesson._id,
            title: lesson.title,
            description: lesson.description,
            difficulty: lesson.difficulty,
            order: lesson.order,
            content: lesson.content
        }
    }

}



async function createLesson(title:string,description:string, difficulty: "beginner" | "intermediate" | "advanced",order:number,content:string){

    const lesson =await lessonModel.create({title,description,difficulty,order,content})
    return lesson
}




// update part of the routes 

    async function updateLesson(id:string, updateData: any){

        const lesson = await lessonModel.findByIdAndUpdate(
        id,
        updateData,
        {
            new: true,
            runValidators: true
        }
    );

    if (!lesson) {
        throw new AppError("Lesson not found", 404);
    }


    return lesson
        
        

        
    }



    async function deleteLesson(id:string){

        const lesson = await lessonModel.findByIdAndDelete(id);
        if(!lesson){
           throw new AppError("Lesson not found", 404);
        }

        return lesson

    }


export default {
    getLessons,
    getLessonById,
    createLesson,
    updateLesson,
    deleteLesson,
};