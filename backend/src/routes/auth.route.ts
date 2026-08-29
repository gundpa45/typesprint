import {Router} from "express"
import authcontroller from "../controllers/user.controller.js"
const router = Router();

router.post("/register", authcontroller.register)


export default router;