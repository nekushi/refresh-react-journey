import { createContext } from "react";
import type { TypeAuthContext } from "../types/auth.type";

export const AuthContext = createContext<TypeAuthContext | null>(null);
