import "./LoginPage.css";

import useLoginForm from "../../hooks/useLoginForm";

export default function LoginPage() {
  const user = useLoginForm();

  return (
    <>
      <div className="login-form-div">
        <form onSubmit={user.handleSubmit} className="login-form">
          <h1 className="login-header">LOGIN</h1>
          <label htmlFor="">
            <span className="form-label">Username:</span>
            <input
              type="text"
              value={user.usernameChange.value}
              onChange={user.usernameChange.onChange}
              className="form-input-box"
            />
          </label>
          <label htmlFor="">
            <span className="form-label">Password:</span>
            <input
              type="password"
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
