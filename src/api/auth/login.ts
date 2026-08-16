import type {
  TypeAuthResponse,
  TypeResultResponse,
  TypeUserResponse,
} from "../../types/auth.type";

export async function postLogin(
  username: string,
  email: string,
  password: string,
): Promise<TypeAuthResponse<TypeUserResponse>> {
  const res = await fetch(`http://localhost:3000/auth/login`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: TypeResultResponse<TypeUserResponse> = await res.json();

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
