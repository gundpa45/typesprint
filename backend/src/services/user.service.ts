import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userModel from "../models/user.model.js";
import AppError from "../error/appError.js";
import config from "../config/config.js";

// Register service
async function registerService({
    username,
    email,
    password
}: {
    username: string;
    email: string;
    password: string;
}) {
    // Check whether email already exists
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
        throw new AppError("User already exists", 409);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const newUser = await userModel.create({
        username,
        email,
        password: hashedPassword
    });

    // Never return password
    return {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        xp: newUser.xp,
        level: newUser.level,
        isActive: newUser.isActive,
        createdAt: newUser.createdAt
    };
}


// Login service
async function loginService({
    email,
    password
}: {
    email: string;
    password: string;
}) {
    // Find user
    const user = await userModel.findOne({ email });

    // Don't reveal whether the email exists
    if (!user) {
        throw new AppError("Invalid credentials", 401);
    }

    // Compare password with stored hash
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new AppError("Invalid credentials", 401);
    }

    // Generate JWT only after password is verified
    const token = jwt.sign(
        {
            userId: user._id.toString(),
            role: user.role
        },
        config.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    // Return user + token
    return {
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            xp: user.xp,
            level: user.level,
            isActive: user.isActive,
            createdAt: user.createdAt
        },
        token
    };
}


export default {
    registerService,
    loginService
};