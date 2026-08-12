import type {
  TypeAuthResponse,
  TypeResultResponse,
  TypeUserWithTokenResponse,
} from "../../types/auth.type";

export async function postLogin(
  username: string,
  email: string,
  password: string,
): Promise<TypeAuthResponse<TypeUserWithTokenResponse>> {
  const res = await fetch(`http://localhost:3000/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result: TypeResultResponse<TypeUserWithTokenResponse> =
    await res.json();

  if (!res.ok) {
    return {
      ok: res.ok,
      status: res.status,
      type: "success",
      message: result.message,
    };
  }

  return {
    ok: res.ok,
    status: res.status,
    ...result,
  };
}
