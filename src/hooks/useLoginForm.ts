import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function useLoginForm() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const isUsernameExisting = dummyUser.find(
        (user) => user.username === username,
      );

      if (!isUsernameExisting) return;

      const isPasswordMatch = password === isUsernameExisting.password;

      if (!isPasswordMatch) return;

      auth?.setUser(isUsernameExisting);

      navigate("/dashboard");
    } catch (err) {
      console.error(`ERROR: ${err}`);
    }
  };

  return {
    usernameChange: { value: username, onChange: handleUsernameChange },
    passwordChange: { value: password, onChange: handlePasswordChange },
    handleSubmit,
  };
}

const dummyUser = [
  {
    id: 0,
    username: "admin",
    password: "admin",
  },
  {
    id: 1,
    username: "manager",
    password: "manager",
  },
  {
    id: 2,
    username: "other",
    password: "other",
  },
] as const;

export type TypeUser = {
  id: number;
  username: string;
  password: string;
};
