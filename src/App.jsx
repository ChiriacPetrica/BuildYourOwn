import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./ui/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
