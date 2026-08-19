import useAuth from "../../hooks/useAuth";
import "./Layout.css";

import { Outlet, useNavigate } from "react-router-dom";

// const childrenStyle: React.CSSProperties = {
//   height: "100%",
// };

export default function MenuLayout() {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className="menu-layout">
        <aside className="menu-aside">
          <h2>This is menu layout.</h2>
          <nav className="menu-nav-layout">
            {navLists.map((navList) => {
              return (
                <button
                  key={navList.name}
                  onClick={() => {
                    navigate(navList.href);
                  }}
                >
                  {navList.name}
                </button>
              );
            })}
          </nav>
          <button onClick={handleLogout} className="logout">
            Logout
          </button>
        </aside>
        <div className="outlets">
          <Outlet
          // context={{
          //   childrenStyle,
          // }}
          />
        </div>
      </div>
    </>
  );
}

const navLists = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Images",
    href: "/images",
  },
  {
    name: "Settings",
    href: "/settings",
  },
] as const;
