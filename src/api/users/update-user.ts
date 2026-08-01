import type {
  TypeAuthResponse,
  TypeResultResponse,
  TypeUser,
} from "../../types/users.type";

export async function updateUser(
  id: string,
  username: string,
  password: string,
): Promise<TypeAuthResponse<TypeUser>> {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: TypeResultResponse = await response.json();

  return {
    ok: response.ok,
    status: response.status,
    ...result,
  };
}
