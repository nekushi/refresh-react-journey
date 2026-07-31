import { useEffect, useState } from "react";

// export default function HelloPage() {
//   const [name] = useState("Ivan");

//   const postName = async (clientName: string) => {
//     const response = await fetch(`http://localhost:3000/hello`, {
//       method: "POST",
//       body: JSON.stringify({
//         name: clientName,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) return response.status;

//     const result = await response.json();

//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(result);
//   };

//   useEffect(() => {
//     postName(name);
//   }, []);

//   return (
//     <div>
//       <h1>This is hello page.</h1>
//     </div>
//   );
// }

import "../login-page/LoginPage.css";

// import useLoginForm from "../../hooks/useLoginForm";

export default function HelloPage() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [isSending, setIsSending] = useState(false);

  const login = async (clientUsername: string, clientPassword: string) => {
    const response = await fetch(`http://localhost:3000/hello`, {
      method: "POST",
      body: JSON.stringify({
        username: clientUsername,
        password: clientPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    return {
      ok: response.ok,
      status: response.status,
      ...result,
    };
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);

    try {
      const user = await login(username, password);

      console.log(user);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="login-form-div">
        <form onSubmit={handleFormSubmit} className="login-form">
          <h1 className="login-header">LOGIN</h1>
          <label htmlFor="">
            <span className="form-label">Username:</span>
            <input
              type="text"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(username);

                setusername(e.target.value);
              }}
              className="form-input-box"
            />
          </label>
          <label htmlFor="">
            <span className="form-label">Password:</span>
            <input
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(password);

                setPassword(e.target.value);
              }}
              className="form-input-box"
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
