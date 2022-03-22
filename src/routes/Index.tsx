import { Routes, Route } from "react-router-dom";
import { LeadScore, LeadList } from "../pages/leads";
import ErrorPage from "../pages/error/Index";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LeadList />} />
      <Route path="user/:userid" element={<LeadScore />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
