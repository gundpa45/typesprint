import mongoose, { Types } from "mongoose"
const lessonSchema=new mongoose.Schema({
    id:{type: Types.ObjectId, required: true},
    title:{type: String, required: true},
    description:{type: String, required: true},
    difficulty:{type: String, required: true},
    order:{type: Number, required: true},
    content:{type: String, required: true}
})


const lessonModel= mongoose.model("lesson",lessonSchema);




export default lessonModel;