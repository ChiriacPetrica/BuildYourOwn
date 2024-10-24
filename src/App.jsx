import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Support from "./pages/Support";
import About from "./pages/About";
import TestPR from "./pages/TestPR";
import Branch from "./pages/Branch";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<div>Dashboard</div>} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
