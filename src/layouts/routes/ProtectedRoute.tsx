import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ProtectedRoute() {
  const { auth } = useAuth();

  console.log("ProtectedRoute user:", auth.user);

  if (!auth.user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
