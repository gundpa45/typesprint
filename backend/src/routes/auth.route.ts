import { Router } from "express";

import authcontroller from "../controllers/user.controller.js";

import authTestController from "../controllers/auth-test.controller.js";
import authMiddleware from "../middleware/auth.midlleware.js";

const router = Router();

router.post("/register", authcontroller.register);

router.post("/login", authcontroller.login);

// Protected test route
router.get(
    "/test-auth",
    authMiddleware,
    authTestController.testAuth
);

export default router;