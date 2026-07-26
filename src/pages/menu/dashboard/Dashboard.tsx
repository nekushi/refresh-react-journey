import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export default function MenuDashboardPage() {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h1>This is menu dashboard page. Welcome {auth?.user?.username}</h1>
    </div>
  );
}
