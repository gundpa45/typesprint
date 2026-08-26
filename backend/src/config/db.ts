import mongoose, { connect } from "mongoose"
import config from "./config.js"
async function connectDb (){
    try{
        await mongoose.connect(config.DATABASE_URI)
        .then(()=>{
            console.log("Connected to MongoDB")
        })

    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
}

export default connectDb