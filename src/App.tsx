import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import MenuDashboardPage from "./pages/menu/dashboard/Dashboard";
import MenuLayout from "./layouts/menu/Layout";
import ImagesPage from "./pages/menu/get-images/GetImages";
import SettingsPage from "./pages/menu/settings/Settings";

import { AuthContext } from "./contexts/AuthContext";
import { useContext, useState } from "react";
import type { TypeUser } from "./hooks/useAuth";

export function App() {
  // const userContext = useContext(AuthContext);
  const [user, setUser] = useState<TypeUser | null>(null);

  // const user = userContext?.user
  // const setUser = userContext?.setUser

  return (
    // <AuthContext.Provider value={{ name, setName }}>
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
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
