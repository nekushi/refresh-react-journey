import { Router } from "express";
import {
  checkUser,
  sayHelloFromBackend,
} from "../controllers/hello.controller.ts";
import { validateUsername } from "../middleware/user.middleware.ts";

const router = Router();

router.get("/", sayHelloFromBackend);
router.post("/", validateUsername, checkUser);

export default router;
