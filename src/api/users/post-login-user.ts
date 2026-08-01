import type { TypeAuthResponse, TypeUser } from "../../types/users.type";

export async function loginUser(
  clientUsername: string,
  clientPassword: string,
): Promise<TypeAuthResponse<TypeUser>> {
  const response = await fetch(`http://localhost:3000/users`, {
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
}
