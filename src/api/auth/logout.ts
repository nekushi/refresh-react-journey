export const postLogout = async () => {
  const res = await fetch(`http://localhost:3000/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  const result = await res.json();

  return {
    ok: res.ok,
    status: res.status,
    type: result.type,
    message: result.message,
  };
};
