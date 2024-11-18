import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import LandingPage from "./ui/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import Start from "./pages/Start";
import Roadmaps from "./pages/Roadmaps";
import Roadmap from "./pages/Roadmap";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="start" />} />
          <Route path="start" element={<Start />} />
          <Route path="roadmaps" element={<Roadmaps />} />
          <Route path="roadmaps/:id" element={<Roadmap />} />
          <Route path="resources" element={<h1>Resources</h1>} />
          <Route path="community" element={<h1>Community</h1>} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
