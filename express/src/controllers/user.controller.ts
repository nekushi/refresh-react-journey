import type { Request, Response } from "express";
import type { ReqId } from "../types/reqId.type.ts";
import {
  fetchUsers,
  fetchUser,
  // createNewUser,
  findUserIndex,
  patchCurrentUser,
  deleteCurrentUser,
  findUser,
  validateUser,
} from "../services/user.service.ts";
import { statusMessages } from "../constants/statusMessages.ts";
import { users } from "../constants/users.ts";

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

// export const createUser = (req: Request, res: Response) => {
//   const name = req.body.name;

//   const newUser = createNewUser(name);

//   return res.status(201).json(newUser);
// };

export const patchUser = (req: ReqId, res: Response) => {
  const patchedUser = patchCurrentUser(
    req.id!,
    req.body.username,
    req.body.password,
  );

  return patchedUser
    ? res
        .status(200)
        .json({ type: "success", message: statusMessages[200], patchedUser })
    : res.status(400).json({ type: "error", message: "Something went wrong." });
};

export const deleteUser = (req: ReqId, res: Response) => {
  const userIndex = findUserIndex(req.id!);

  if (userIndex === -1) {
    return res
      .status(404)
      .json({ type: "error", message: statusMessages[404] });
  }

  deleteCurrentUser(userIndex);

  return res.sendStatus(204);
};
