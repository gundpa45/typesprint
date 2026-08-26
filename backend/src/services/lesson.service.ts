import lessonModel from "../models/lesson.model.js";
async function getLessons(){
    
    const lessons =await lessonModel.find({})
    return lessons 
}





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


export default {
    getLessons,
    getLessonById
};