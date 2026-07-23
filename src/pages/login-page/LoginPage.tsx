import "./LoginPage.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <>
      <div className="login-form-div">
        <form onSubmit={handleSubmit} className="login-form">
          <h1 className="login-header">LOGIN</h1>
          <label htmlFor="">
            <span className="form-label">Username:</span>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="form-input-box"
            />
          </label>
          <label htmlFor="">
            <span className="form-label">Password:</span>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="form-input-box"
            />
          </label>
          <button
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Login
          </button>
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
