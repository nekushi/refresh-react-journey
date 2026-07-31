import { Router } from "express";
import {
  checkUser,
  sayHelloFromBackend,
} from "../controllers/hello.controller.ts";
import { validateName } from "../middleware/user.middleware.ts";

const router = Router();

router.get("/", sayHelloFromBackend);
router.post("/", validateName, checkUser);

export default router;
