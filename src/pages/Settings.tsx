import { Outlet } from "react-router-dom";

export default function Settings() {
  return (
    <div>
      <h3>This is settings.</h3>
      <Outlet />
    </div>
  );
}
