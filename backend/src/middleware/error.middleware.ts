import type { Request, Response, NextFunction } from "express";
import AppError from "../error/appError.js";


function errorMiddleware(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(err);

    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            success: false,
            message: err.message
        });

        return;
    }

    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
}

export default errorMiddleware;