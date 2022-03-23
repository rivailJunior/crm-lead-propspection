import { Routes, Route } from "react-router-dom";
import { LeadScore, LeadList } from "../pages/leads";
import ErrorPage from "../pages/error/Index";
import { Header } from "../components/Index";

export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<LeadList />} />
        <Route path="/leads" element={<LeadList />} />
        <Route path="/lead/:userid" element={<LeadScore />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
