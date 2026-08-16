import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import MenuDashboardPage from "./pages/menu/dashboard/Dashboard";
import MenuLayout from "./layouts/menu/Layout";
import ImagesPage from "./pages/menu/get-images/GetImages";
import SettingsPage from "./pages/menu/settings/Settings";

import { AuthContext } from "./contexts/AuthContext";
import { useEffect, useState } from "react";
import type { TypeUser } from "./types/users.type";
import HelloPage from "./pages/hello-page/HelloPage";
import { getCurrentUser } from "./api/auth/get-current-user";

export function App() {
  const [user, setUser] = useState<TypeUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log(`USER: ${user}`);

  useEffect(() => {
    const restoreAuth = async () => {
      try {
        const res = await getCurrentUser();

        if (res.type === "error") {
          setUser(null);
          throw new Error(res.message);
        }

        console.log(res.ok);
        console.log(res.status);
        console.log(res.type);
        console.log(res.message);
        console.log(res.authUser?.username);

        setUser(res.authUser!);
        console.log(`RESTORED: ${res.authUser}`);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    restoreAuth();
  }, []); // make this a custom hook soon

  // if (isLoading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/hello" element={<HelloPage />} />
            <Route element={<MenuLayout />}>
              <Route path="/dashboard" element={<MenuDashboardPage />} />
              <Route path="/images" element={<ImagesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </AuthContext.Provider>
  );
}

export default App;
