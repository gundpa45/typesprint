import app from "./src/app.js"
import config from "./src/config/config.js"

import connectDb from "./src/config/db.js"

connectDb();

app.listen(3000,()=>{
    console.log("server started at port no 3000 :")
})