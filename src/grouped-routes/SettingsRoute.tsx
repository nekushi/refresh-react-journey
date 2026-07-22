import { Route } from "react-router-dom";
import Settings from "../pages/Settings";
import DeepSettings from "../pages/sub-pages/DeepSettings";

export const groupedSettingsRoute = (
  <Route path="/settings" element={<Settings />}>
    <Route path="deep-settings" element={<DeepSettings />} />
  </Route>
);
