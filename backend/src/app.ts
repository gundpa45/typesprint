import express from "express"
import authRoute from "../src/routes/auth.route.js"
import router from "../src/routes/auth.route.js";
import lessonRoute from "./routes/lesson.route.js"
import errorMiddleware from "./middleware/error.middleware.js";
const app=express();

app.get("/hello",(req,res)=>{
    res.status(200).json({
        msg:"hello everyone "
    })
})
app.use(express.json());
app.use(router)
app.use("/api/v1",authRoute)
app.use("/api/v1",lessonRoute)
app.use(errorMiddleware)

export default app ;