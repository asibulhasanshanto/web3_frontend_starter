import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<h1>about</h1>} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}
