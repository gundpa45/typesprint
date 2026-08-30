import type { Request, Response } from "express";

import userService from "../services/user.service.js";


// Register controller
async function registerController(
    req: Request,
    res: Response
) {
    const {
        username,
        email,
        password
    } = req.body;

    const createUser = await userService.registerService({
        username,
        email,
        password
    });

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: createUser
    });
}


// Login controller
async function loginController(
    req: Request,
    res: Response
) {
    const {
        email,
        password
    } = req.body;

    const loginUser = await userService.loginService({
        email,
        password
    });

    res.status(200).json({
        success: true,
        message: "User logged in successfully",
        user: loginUser.user,
        token: loginUser.token
    });
}


export default {
    register: registerController,
    login: loginController
};