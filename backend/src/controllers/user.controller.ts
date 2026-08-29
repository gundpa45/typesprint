import userService from "../services/user.service.js"

async function registerController(req: any, res: any) {


    const { username, email, password } = req.body;



    const createUser= await userService.registerService({ username, email, password })

    res.status(201).json({ 
        message: "User registered successfully",
         user: createUser 
        })

}



export default {
    register: registerController
}