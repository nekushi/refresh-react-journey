import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Settings from "./pages/Settings";
import MainLayout from "./layouts/MainLayout";
import DeepSettings from "./pages/sub-pages/DeepSettings";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/settings" element={<Settings />}>
            <Route path="deep-settings" element={<DeepSettings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
