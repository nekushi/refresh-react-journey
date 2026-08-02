import type { TypeAuthDeleteResponse } from "../../types/users.type";

export async function deleteUser(id: number): Promise<TypeAuthDeleteResponse> {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const result: { message: string } = await response.json();

    return {
      ok: response.ok,
      status: response.status,
      ...result,
    };
  }

  return {
    ok: response.ok,
    status: response.status,
  };
}
