import { Routes, Route } from "react-router-dom";
import Leads from "../pages/leads/Index";
import ErrorPage from "../pages/error/Index";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Leads />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
