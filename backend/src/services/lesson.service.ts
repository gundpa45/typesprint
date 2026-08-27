import lessonModel from "../models/lesson.model.js";

// get lesson
async function getLessons(){
    
    const lessons =await lessonModel.find({})
    return lessons 
}



// get leson by id 

async function getLessonById(id:string){

    const lesson :any =await lessonModel.findById(id);

    if(!lesson){
        throw new Error("Lesson not found")
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



async function createLesson(title:string,description:string,difficulty:string,order:number,content:string){

    const lesson =await lessonModel.create({title,description,difficulty,order,content})
    return lesson
}


export default {
    getLessons,
    getLessonById,
    createLesson,
};