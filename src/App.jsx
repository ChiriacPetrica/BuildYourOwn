import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./ui/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
