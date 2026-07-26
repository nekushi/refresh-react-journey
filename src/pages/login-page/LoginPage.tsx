import "./LoginPage.css";

import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  // const navigate = useNavigate();

  // const [username, setUsername] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUsername(e.target.value);
  // };

  // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(e.target.value);
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   try {
  //     // const isUsernameExisting = dummyUser.find(
  //     //   (user) => user.username === username,
  //     // );

  //     // if (!isUsernameExisting) return;

  //     // const isPasswordMatch = password === isUsernameExisting.password;

  //     // if (!isPasswordMatch) return;

  //     navigate("/dashboard");
  //   } catch (err) {
  //     console.error(`ERROR: ${err}`);
  //   }
  // };

  const user = useAuth();

  return (
    <>
      <div className="login-form-div">
        <form onSubmit={user.handleSubmit} className="login-form">
          <h1 className="login-header">LOGIN</h1>
          <label htmlFor="">
            <span className="form-label">Username:</span>
            <input
              type="text"
              // value={username}
              // onChange={handleUsernameChange}
              value={user.usernameChange.value}
              onChange={user.usernameChange.onChange}
              className="form-input-box"
            />
          </label>
          <label htmlFor="">
            <span className="form-label">Password:</span>
            <input
              type="password"
              // value={password}
              // onChange={handlePasswordChange}
              value={user.passwordChange.value}
              onChange={user.passwordChange.onChange}
              className="form-input-box"
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
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
