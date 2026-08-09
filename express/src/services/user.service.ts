import User from "../models/User.ts";

import { users } from "../constants/users.ts";
import type { TypeUser } from "../types/user.type.ts";
import { AppError } from "../utils/AppError.ts";

import bcrypt from "bcrypt";

export const fetchUsers = async () => {
  return await User.find();
};

export const fetchUser = async (id: string) => {
  const user = await User.findById(id);

  if (!user) throw new AppError(404, "User not found.");

  return user;
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

export const createNewUser = async (
  username: string,
  email: string,
  password: string,
) => {
  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = {
    username,
    email,
    password: hashedPassword,
  };

  const user = await User.create(newUser);
  const userObj = user.toObject();
  delete userObj.password;

  return userObj;
};

export const findUserIndex = (id: string) => {
  const selectedUser = users.findIndex((user) => user.id === Number(id));

  return selectedUser;
};

export const patchCurrentUser = async (
  id: string,
  username: string,
  email: string,
  password: string,
) => {
  const hashedPassword = await bcrypt.hash(password, 12);

  const patchedUser = await User.findOneAndUpdate(
    { _id: id },
    {
      username,
      email,
      password: hashedPassword,
    },
    {
      returnDocument: "after",
    },
  );

  if (!patchedUser) throw new AppError(404, "User not found.");

  const userObj = patchedUser.toObject();
  delete userObj.password;

  return userObj;
};

export const deleteCurrentUser = async (id: string) => {
  const deletedUser = await User.findOneAndDelete({ _id: id });

  if (!deletedUser) throw new AppError(404, "User not found.");

  return deletedUser;
};
