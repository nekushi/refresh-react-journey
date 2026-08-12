export type TypeUserResultWithTokenResponse = {
  type: "success" | "error";
  message: string;
  user: {
    token: string;
    user: TypeUser;
  };
};

export type TypeUser = {
  _id: number;
  username: string;
  email: string;
  password: string;
};

export type TypeAuthResponse<T> = {
  ok: boolean;
  status: number;
  // type: "success" | "error";
  // message: string;
  // user?: T;
  result?: T;
};

export type TypeAuthErrorResponse = {
  type: "error";
  message: string;
};

export interface TypeAuthLoginError extends TypeAuthErrorResponse {
  ok: boolean;
  status: number;
}

export type TypeResultResponse = Omit<
  TypeAuthResponse<TypeUser>,
  "ok" | "status"
>;

export type TypeAuthDeleteResponse = {
  ok: boolean;
  status: number;
  type?: "error";
  message?: string;
};
