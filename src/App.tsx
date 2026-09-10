import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";

import { useTranslation } from "react-i18next";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
