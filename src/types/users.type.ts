export type TypeUser = {
  id: number;
  username: string;
  password: string;
};

export type TypeAuthResponse<T> = {
  ok: boolean;
  status: number;
  type: "success" | "error";
  message: string;
  user?: T;
};

export type TypeResultResponse = Omit<
  TypeAuthResponse<TypeUser>,
  "ok" | "status"
>;
