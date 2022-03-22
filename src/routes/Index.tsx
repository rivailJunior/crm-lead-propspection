import { Routes, Route } from "react-router-dom";
import { LeadScore, LeadList } from "../pages/leads";
import ErrorPage from "../pages/error/Index";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LeadScore />} />
      <Route path="user/:userid" element={<LeadList />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
