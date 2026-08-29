import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";
import AppError from "../error/appError.js";

async function registerService({
    username,
    email,
    password
}: {
    username: string;
    email: string;
    password: string;
}) {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
        throw new AppError("User already exists", 409);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await userModel.create({
        username,
        email,
        password: hashedPassword
    });

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

export default {
    registerService
};