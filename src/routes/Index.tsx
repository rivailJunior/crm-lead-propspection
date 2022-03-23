import { Routes, Route } from "react-router-dom";
import { LeadScore, LeadList } from "../pages/leads";
import ErrorPage from "../pages/error/Index";

export default function PageRoutes() {
  return (
    <Routes>
      <Route index element={<LeadList />} />
      <Route path="/leads" element={<LeadList />} />
      <Route path="/lead/:userid" element={<LeadScore />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
