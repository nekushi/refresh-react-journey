import type { Request, Response } from "express";
import type { ReqId } from "../types/reqId.type.ts";
import {
  fetchUsers,
  fetchUser,
  createNewUser,
  findUserIndex,
  patchCurrentUser,
  deleteCurrentUser,
  findUser,
  validateUser,
} from "../services/user.service.ts";
import { statusMessages } from "../constants/statusMessages.ts";

export const getUsers = async (req: Request, res: Response) => {
  const users = await fetchUsers();

  return res
    .status(200)
    .json({ type: "success", message: statusMessages[200], users });
};

export const getUser = async (req: Request, res: Response) => {
  const user = await fetchUser(req.params.id as string);

  return user
    ? res
        .status(200)
        .json({ type: "success", message: statusMessages[200], user })
    : res.status(404).json({ type: "error", message: "No user found." });
};

export const postLogin = (req: Request, res: Response) => {
  // const foundUsername = req.body.username;
  const foundUsername = findUser(req.body.username);

  const user = validateUser(foundUsername, req.body.password);

  return user
    ? res
        .status(200)
        .json({ type: "success", message: statusMessages[200], user })
    : res.status(401).json({ type: "error", message: "Invalid credentials." });

  // const

  // const newUser = createNewUser(name);

  // return res.status(201).json(newUser);
};

export const createUser = async (req: Request, res: Response) => {
  const { username, email } = req.body;

  const user = await createNewUser(username, email);

  return res
    .status(201)
    .json({ type: "success", message: statusMessages[201], user });
};

export const patchUser = async (req: Request, res: Response) => {
  const userId = req.params.id as string;
  const { username, email } = req.body;

  const patchedUser = await patchCurrentUser(userId, username, email);

  return patchedUser
    ? res
        .status(200)
        .json({ type: "success", message: statusMessages[200], patchedUser })
    : res.status(404).json({ type: "error", message: statusMessages[404] });
};

export const deleteUser = async (req: Request, res: Response) => {
  const deletedUser = await deleteCurrentUser(req.params.id as string);

  return !deletedUser
    ? res.status(404).json({ type: "error", message: statusMessages[404] })
    : res.sendStatus(204);
};
