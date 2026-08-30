import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import config from "../config/config.js";
import AppError from "../error/appError.js";
import type { AuthPayload } from "../types/auth.types.js";

function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return next(
            new AppError("Authentication required", 401)
        );
    }

    if (!authHeader.startsWith("Bearer ")) {
        return next(
            new AppError("Invalid authorization format", 401)
        );
    }

    const token = authHeader.substring(7);

    if (!token) {
        return next(
            new AppError("Authentication token missing", 401)
        );
    }

    try {
        const decoded = jwt.verify(
            token,
            config.JWT_SECRET 
        );

        if (typeof decoded === "string") {
            return next(
                new AppError("Invalid token payload", 401)
            );
        }

        const userId = decoded.userId;
        const role = decoded.role;

        if (
            typeof userId !== "string" ||
            (role !== "user" && role !== "admin")
        ) {
            return next(
                new AppError("Invalid token payload", 401)
            );
        }

        const authPayload: AuthPayload = {
            userId,
            role
        };

        req.user = authPayload;

        next();

    } catch {
        return next(
            new AppError("Invalid or expired token", 401)
        );
    }
}

export default authMiddleware;