import type { Request, Response } from "express";
import type { ReqId } from "../types/reqId.type.ts";
import {
  fetchUsers,
  fetchUser,
  createNewUser,
  findUserIndex,
  patchCurrentUser,
  deleteCurrentUser,
} from "../services/user.service.ts";
import { statusMessages } from "../constants/statusMessages.ts";

export const getUsers = (req: Request, res: Response) => {
  const users = fetchUsers();

  return res.status(200).json(users);
};

export const getUser = (req: ReqId, res: Response) => {
  const user = fetchUser(req.id!);

  return user
    ? res.status(200).json(user)
    : res.status(404).json({ message: "No user found." });
};

export const createUser = (req: Request, res: Response) => {
  const name = req.body.name;

  const newUser = createNewUser(name);

  return res.status(201).json(newUser);
};

export const patchUser = (req: ReqId, res: Response) => {
  const patchedUser = patchCurrentUser(req.id!, req.body.name);

  if (!patchedUser) {
    return res.status(404).json({ message: statusMessages[404] });
  }

  return res.status(200).json(patchedUser);
};

export const deleteUser = (req: ReqId, res: Response) => {
  const userIndex = findUserIndex(req.id!);

  if (userIndex === -1) {
    return res.status(404).json({ message: statusMessages[404] });
  }

  const deletedUser = deleteCurrentUser(userIndex);

  return res.sendStatus(204);
};
