import User from "../models/User.ts";

import { users } from "../constants/users.ts";
import type { TypeUser } from "../types/user.type.ts";

export const fetchUsers = async () => {
  return await User.find();
};

export const fetchUser = async (id: string) => {
  return await User.findById(id);
};

export const findUser = (username: string) => {
  console.log(username);

  const matchUsername = users.find((user) => user.username === username);

  if (!matchUsername) return null;

  return matchUsername;
};

export const validateUser = (user: TypeUser | null, password: string) => {
  if (!user) return null;

  const isPasswordMatch = password === user.password;

  if (!isPasswordMatch) return null;

  const foundUser = {
    id: user.id,
    username: user.username,
  };

  return foundUser;
};

export const createNewUser = async (username: string, email: string) => {
  const newUser = {
    username,
    email,
  };

  return await User.create(newUser);
};

export const findUserIndex = (id: string) => {
  const selectedUser = users.findIndex((user) => user.id === Number(id));

  return selectedUser;
};

export const patchCurrentUser = async (
  id: string,
  username: string,
  email: string,
) => {
  const patchedUser = await User.findOneAndUpdate(
    { _id: id },
    {
      username,
      email,
    },
    {
      returnDocument: "after",
    },
  );

  if (!patchedUser) return null;

  return patchedUser;
};

export const deleteCurrentUser = async (id: string) => {
  const deletedUser = await User.findOneAndDelete({ _id: id });

  if (!deletedUser) return null;

  return deletedUser;
};
