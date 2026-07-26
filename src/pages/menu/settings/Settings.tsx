import { useContext } from "react";
import {
  AuthContext,
  type TypeAuthContext,
} from "../../../contexts/AuthContext";

export default function SettingsPage() {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h1>This is settings page. Welcome, {auth?.user?.username}</h1>
    </div>
  );
}
