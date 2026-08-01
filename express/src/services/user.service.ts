import { users } from "../constants/users.ts";
import type { TypeUser } from "../types/user.type.ts";
import { generateId } from "../utils/generateId.ts";

export const fetchUsers = () => {
  return users;
};

export const fetchUser = (id: number) => {
  const result = users.find((user: TypeUser) => user.id === id);

  return result;
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

// export const createNewUser = (name: string) => {
//   const id = generateId();

//   const newUser = {
//     id,
//     name,
//   };

//   users.push(newUser);

//   return newUser;
// };

export const findUserIndex = (id: number) => {
  const selectedUser = users.findIndex((user) => user.id === id);

  return selectedUser;
};

export const patchCurrentUser = (
  id: number,
  username: string,
  password: string,
) => {
  const index = findUserIndex(id);

  if (index === -1) {
    return null;
  }

  users[index] = {
    id: users[index].id,
    username,
    password,
  };

  const patchedUser = { id: users[index].id, username };

  return patchedUser;
};

export const deleteCurrentUser = (index: number) => {
  const deletedUser = users.splice(index, 1);

  return deletedUser;
};
