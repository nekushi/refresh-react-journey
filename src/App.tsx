import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import MenuDashboardPage from "./pages/menu/dashboard/Dashboard";
import MenuLayout from "./layouts/menu/Layout";
import ImagesPage from "./pages/menu/get-images/GetImages";
import SettingsPage from "./pages/menu/settings/Settings";

import { AuthContext } from "./contexts/AuthContext";
import { useState } from "react";
import type { TypeUser } from "./hooks/useAuth";
import HelloPage from "./pages/hello-page/HelloPage";

export function App() {
  const [user, setUser] = useState<TypeUser | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
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
    </AuthContext.Provider>
  );
}

export default App;
