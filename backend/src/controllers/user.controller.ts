

async function registerController(req: any, res: any) {

    res.send("User registered successfully")

}



export default {
    register: registerController
}