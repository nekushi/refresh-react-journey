import { createContext } from "react";
import type { TypeUser } from "../hooks/useLoginForm";

export const AuthContext = createContext<TypeAuthContext | null>(null);

export type TypeAuthContext = {
  user: TypeUser | null;
  setUser: React.Dispatch<React.SetStateAction<TypeUser | null>>;
};
