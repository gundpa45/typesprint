import type { Request, Response } from "express";

async function testAuth(req: Request, res: Response) {
    res.status(200).json({
        success: true,
        message: "Authentication successful",
        user: req.user
    });
}

export default {
    testAuth
};