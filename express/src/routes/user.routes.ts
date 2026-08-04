import { Router } from "express";

import {
  getUser,
  getUsers,
  createUser,
  patchUser,
  deleteUser,
  postLogin,
} from "../controllers/user.controller.ts";
import {
  validateEmail,
  validateUsername,
} from "../middleware/user.middleware.ts";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
// router.post("/", validateUsername, validateEmail, postLogin);
router.post("/", validateUsername, validateEmail, createUser);
router.patch("/:id", validateUsername, validateEmail, patchUser);
router.delete("/:id", deleteUser);

export default router;
