import type { Request, Response } from "express";
import { findUser, validateUser } from "../services/hello.service.ts";
import { statusMessages } from "../constants/statusMessages.ts";

export const sayHelloFromBackend = (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Hello from Express!",
  });
};

export const checkUser = (req: Request, res: Response) => {
  const { username, password } = req.body;

  const matchUsername = findUser(username);

  const user = validateUser(matchUsername, password);

  return user
    ? res
        .status(200)
        .json({ type: "success", message: statusMessages[200], user })
    : res.status(401).json({ type: "error", message: "Invalid credentials." });
};
