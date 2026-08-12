import type { NextFunction, Request, Response } from "express";
import User from "../models/User.ts";
import {
  fetchUser,
  postValidateLogin,
  postValidateRegister,
} from "../services/auth.service.ts";
import { statusMessages } from "../constants/statusMessages.ts";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id: string = req.user.id;

  const user = await fetchUser(id);

  return res
    .status(200)
    .json({ type: "success", message: statusMessages[200], authUser: user });
};

export const postAuthLogin = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const user = await postValidateLogin(username, email, password);

  return res
    .status(200)
    .json({ type: "success", message: statusMessages[200], authUser: user });
};

export const postAuthRegister = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const user = await postValidateRegister(username, email, password);

  return res
    .status(201)
    .json({ type: "success", message: statusMessages[201], user });
};
