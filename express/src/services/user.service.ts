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

export const createNewUser = (name: string) => {
  const id = generateId();

  const newUser = {
    id,
    name,
  };

  users.push(newUser);

  return newUser;
};

export const findUserIndex = (id: number) => {
  const selectedUser = users.findIndex((user) => user.id === id);

  return selectedUser;
};

export const patchCurrentUser = (id: number, name: string) => {
  const index = findUserIndex(id);

  if (index === -1) {
    return null;
  }

  const patchedUser = (users[index] = {
    id: users[index].id,
    name,
  });

  return patchedUser;
};

export const deleteCurrentUser = (index: number) => {
  const deletedUser = users.splice(index, 1);

  return deletedUser;
};
