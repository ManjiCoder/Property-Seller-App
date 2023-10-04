import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to={"/property/london"} />} />
        <Route path="/property/:city" element={<Home />} />
        <Route path="/property/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
