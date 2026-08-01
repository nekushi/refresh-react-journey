import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { useNavigate } from "react-router-dom";
import type { TypeUser } from "../types/users.type";

export default function useAuth() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  const handleLogin = (user: TypeUser) => {
    auth.setUser(user);

    navigate("/dashboard");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return { auth, handleLogin, handleLogout };
}
