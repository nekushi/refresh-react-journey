export type AuthPayload = {
  id: string;
  role: UserRole;
};

export type UserRole = "ADMIN" | "USER";
