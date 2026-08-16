import type {
  TypeAuthResponse,
  TypeResultResponse,
  TypeUser,
  // TypeUserWithTokenResponse,
} from "../../types/auth.type";

export async function getCurrentUser(): Promise<TypeAuthResponse<TypeUser>> {
  const res = await fetch(`http://localhost:3000/auth/`, {
    method: "GET",
    credentials: "include",
  });

  const result: TypeResultResponse<TypeUser> = await res.json();

  if (!res.ok) {
    return {
      ok: res.ok,
      status: res.status,
      type: "error",
      message: result.message,
    };
  }

  return {
    ok: res.ok,
    status: res.status,
    ...result,
  };
}
