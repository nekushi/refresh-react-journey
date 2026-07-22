import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainLayout from "./layouts/MainLayout";
import { groupedSettingsRoute } from "./grouped-routes/SettingsRoute";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          {groupedSettingsRoute}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
