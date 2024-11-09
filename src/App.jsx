import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./ui/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            path="/dashboard"
            element={<Navigate to="/dashboard/start" />}
          />
          <Route index path="start" element={<h1>Welcome to Dashboard</h1>} />
          <Route path="roadmap1" element={<h1>Roadmap 1</h1>} />
          <Route path="users" element={<h1>Users</h1>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
