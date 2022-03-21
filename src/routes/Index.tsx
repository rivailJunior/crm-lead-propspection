import { Routes, Route } from "react-router-dom";
import Leads from "../pages/leads/Index";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Leads />} />
    </Routes>
  );
}
