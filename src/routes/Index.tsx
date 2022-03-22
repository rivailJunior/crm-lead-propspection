import { Routes, Route } from "react-router-dom";
import Leads from "../pages/leads/Index";
import ErrorPage from "../pages/error/Index";
import Lead from "../pages/leads/user";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Leads />} />
      <Route path="user/:userid" element={<Lead />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
