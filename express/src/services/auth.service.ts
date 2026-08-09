import User from "../models/User.ts";
import { AppError } from "../utils/AppError.ts";
import bcrypt from "bcrypt";

export const fetchUsers = async () => {
  return await User.find({}, { password: 0 });
};

// export const postValidateLogin = async (
//   username: string,
//   email: string,
//   password: string,
// ) => {
//   const user = await User.findOne({ username, email });

//   if (!user) throw new AppError(404, "User not found.");

//   console.log(user);

//   const isPasswordMatch = await bcrypt.hash(password, user.password as string);

//   if (!isPasswordMatch) throw new AppError(401, "Invalid credentials.");

//   const userObj = user.toObject();
//   delete userObj.password;

//   return userObj;
// };

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
