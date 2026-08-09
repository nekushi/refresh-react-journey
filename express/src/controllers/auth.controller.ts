import type { NextFunction, Request, Response } from "express";
import User from "../models/User.ts";
import { fetchUsers, postValidateRegister } from "../services/auth.service.ts";
import { statusMessages } from "../constants/statusMessages.ts";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const users = await fetchUsers();

  return res
    .status(200)
    .json({ type: "success", message: statusMessages[200], users });
};

export const postAuthRegister = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const user = await postValidateRegister(username, email, password);

  return res
    .status(201)
    .json({ type: "success", message: statusMessages[201], user });
};
