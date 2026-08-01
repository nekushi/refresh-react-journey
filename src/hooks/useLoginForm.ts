import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import type { TypeAuthResponse, TypeUser } from "../types/users.type";
import useAuth from "./useAuth";
import { loginUser } from "../api/users/post-login-user";

export default function useLoginForm() {
  const { handleLogin } = useAuth();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsPending(true);

    try {
      const result = await loginUser(username, password);

      console.log(result);

      if (!result.user) return;

      handleLogin(result.user!);
    } catch (err) {
      console.error(`ERROR: ${err}`);
    } finally {
      setIsPending(false);
    }
  };

  return {
    usernameChange: { value: username, onChange: handleUsernameChange },
    passwordChange: { value: password, onChange: handlePasswordChange },
    isPending,
    handleSubmit,
  };
}
