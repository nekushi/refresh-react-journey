import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import type { Role } from "../../types/auth.type";

const childrenStyle: React.CSSProperties = {
  height: "100%",
};

export default function RequireRole({ roles }: { roles: Role[] }) {
  const { auth } = useAuth();

  if (!roles.includes(auth.user!.role)) {
    console.log(`forb`);

    return <Navigate to="/images" replace />;
  }

  return (
    <Outlet
      context={{
        childrenStyle,
      }}
    />
  );
}
