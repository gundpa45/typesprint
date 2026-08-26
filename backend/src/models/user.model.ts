import mongoose from "mongoose"


const userSchema=new mongoose.Schema({
    id:{
        Type:String,
        require:true
    }
})



const userModel=mongoose.model("user",userSchema)



export default userModel