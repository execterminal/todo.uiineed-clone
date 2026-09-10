import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";

console.log("starting app.tsx");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    // <h1>App.tsx</h1>
  );
}

export default App;
