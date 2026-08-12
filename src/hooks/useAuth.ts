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

export default function useAuth() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  // const handleLogin = async (user: TypeUser) => {
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

    localStorage.setItem("token", result.authUser.token);

    auth.setUser(result.authUser.user);

    navigate("/dashboard");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return { auth, handleLogin, handleLogout };
}
