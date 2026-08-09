import { Router } from "express";
import { getUsers, postAuthRegister } from "../controllers/auth.controller.ts";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../middleware/user.middleware.ts";

const router = Router();

router.get("/", getUsers);
router.post(
  "/register",
  validateUsername,
  validateEmail,
  validatePassword,
  postAuthRegister,
);

export default router;
