import { users } from "../constants/users.ts";
import type { TypeUser } from "../types/user.type.ts";

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
