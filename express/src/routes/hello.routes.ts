import { Router } from "express";
import { sayHelloFromBackend } from "../controllers/hello.controller.ts";

const router = Router();

router.get("/", sayHelloFromBackend);

export default router;
