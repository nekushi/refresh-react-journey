import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { useNavigate } from "react-router-dom";
import type {
  TypeAuthLoginError,
  TypeAuthResponse,
  TypeUser,
  TypeUserResultWithTokenResponse,
} from "../types/users.type";
import { postLogin } from "../api/auth/login";
import { postLogout } from "../api/auth/logout";

export default function useAuth() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  const handleLogin = async (
    username: string,
    email: string,
    password: string,
  ) => {
    const result = await postLogin(username, email, password);

    if (!result.authUser) {
      return;
    }

    console.log(result.authUser?.user);

    auth.setUser(result.authUser);

    navigate("/dashboard");
  };

  const handleLogout = async () => {
    try {
      await postLogout();

      auth.setUser(null);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return { auth, handleLogin, handleLogout };
}
