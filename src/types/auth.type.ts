import type { TypeUser } from "./users.type";

export type TypeAuthContext = {
  user: TypeUser | null;
  setUser: React.Dispatch<React.SetStateAction<TypeUser | null>>;
};
