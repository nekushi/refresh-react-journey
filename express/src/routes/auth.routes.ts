import { Router } from "express";
import {
  getUser,
  postAuthLogin,
  postAuthLogout,
  postAuthRegister,
} from "../controllers/auth.controller.ts";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../middleware/user.middleware.ts";
import { asyncHandler } from "../utils/asyncHandler.ts";
import { authenticate } from "../middleware/auth.middleware.ts";
import { requireRole } from "../middleware/auth.middleware.ts";

const router = Router();

router.get("/", asyncHandler(authenticate), getUser);
router.post(
  "/login",
  validateUsername,
  validateEmail,
  validatePassword,
  postAuthLogin,
);
router.post(
  "/register",
  validateUsername,
  validateEmail,
  validatePassword,
  postAuthRegister,
);
router.post("/logout", postAuthLogout);

export default router;
