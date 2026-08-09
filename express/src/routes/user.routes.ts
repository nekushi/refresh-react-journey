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
  validateObjectId,
  validatePassword,
  validateUsername,
} from "../middleware/user.middleware.ts";
import { asyncHandler } from "../utils/asyncHandler.ts";

const router = Router();

router.param("id", validateObjectId);

router.get("/", asyncHandler(getUsers));
router.get("/:id", asyncHandler(getUser));
router.post(
  "/",
  validateUsername,
  validateEmail,
  validatePassword,
  asyncHandler(createUser),
);
// router.post("/", validateUsername, validateEmail, postLogin);
router.patch(
  "/:id",
  validateUsername,
  validateEmail,
  validatePassword,
  asyncHandler(patchUser),
);
// router.delete("/:id", deleteUser);
router.delete("/:id", asyncHandler(deleteUser));

export default router;
