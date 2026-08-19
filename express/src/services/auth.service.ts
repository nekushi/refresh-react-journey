import { env } from "../config/env.ts";
import User from "../models/User.ts";
import { AppError } from "../utils/AppError.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const fetchUser = async (id: string) => {
  return await User.findById(id, { password: 0 });
};

export const postValidateLogin = async (
  username: string,
  email: string,
  clientPassword: string,
) => {
  const foundUser = await User.findOne({ $and: [{ username }, { email }] });

  if (!foundUser) throw new AppError(404, "User not found.");

  console.log(foundUser);

  const isPasswordValid = await bcrypt.compare(
    clientPassword,
    foundUser.password as string,
  );

  if (!isPasswordValid) throw new AppError(401, "Invalid credentials.");

  const token = jwt.sign(
    {
      id: foundUser._id.toString(),
      role: foundUser.role,
    },
    env.jwtSecret!,
    {
      expiresIn: "5m",
    },
  );

  const userObj = foundUser.toObject();

  const { password, ...user } = userObj;

  return { token, user };
};

export const postValidateRegister = async (
  username: string,
  email: string,
  password: string,
) => {
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });

  if (existingUser) throw new AppError(409, "Username or email is taken.");

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
