import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import MenuDashboardPage from "./pages/menu/dashboard/Dashboard";
import MenuLayout from "./layouts/menu/Layout";
import ImagesPage from "./pages/menu/get-images/GetImages";
import SettingsPage from "./pages/menu/settings/Settings";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
      </Routes>
      <Routes>
        <Route element={<MenuLayout />}>
          <Route path="/dashboard" element={<MenuDashboardPage />} />
          <Route path="/images" element={<ImagesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
