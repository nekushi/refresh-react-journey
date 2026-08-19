export type TypeAuthContext = {
  user: TypeUser | null;
  setUser: React.Dispatch<React.SetStateAction<TypeUser | null>>;
};

export type Role = "ADMIN" | "USER";

export type TypeUser = {
  _id: number;
  username: string;
  email: string;
  password: string;
  role: Role;
};

export type TypeUserResponse = {
  user: TypeUser;
};

export type TypeResultResponse<T> = {
  type: "success" | "error";
  message: string;
  authUser?: T;
};

export interface TypeAuthResponse<T> extends TypeResultResponse<T> {
  ok: boolean;
  status: number;
}

// export type TypeAuthResponse<T> = {
//   ok: boolean;
//   status: number;
//   type: "success" | "error";
//   message: string;
//   user?: T;
// };
