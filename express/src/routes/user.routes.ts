import { Router } from "express";

import {
  getUser,
  getUsers,
  // createUser,
  patchUser,
  deleteUser,
  postLogin,
} from "../controllers/user.controller.ts";
import { validateId, validateName } from "../middleware/user.middleware.ts";

const router = Router();

router.get("/", getUsers);
router.get("/:id", validateId, getUser);
router.post("/", validateName, postLogin);
router.patch("/:id", validateId, validateName, patchUser);
router.delete("/:id", validateId, deleteUser);

export default router;
