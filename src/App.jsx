import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import LandingPage from "./ui/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import Start from "./pages/Start";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="start" />} />
          <Route path="start" element={<Start />} />
          <Route path="roadmap1" element={<h1>Roadmap 1</h1>} />
          <Route path="users" element={<h1>Users</h1>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
