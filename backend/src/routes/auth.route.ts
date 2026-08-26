import {Router} from "express"
import authcontroller from "../controllers/user.controller.js"
const router = Router();

router.get("/base", authcontroller.register)


export default router;