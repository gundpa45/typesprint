import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod";

function validate(schema: ZodSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: result.error.issues
            });

            return;
        }

        req.body = result.data;

        next();
    };
}

export default validate;