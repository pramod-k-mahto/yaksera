import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Hire from "../pages/Hire";
import About from "../pages/About";
import BlogDetail from "../pages/BlogDetail";
import CaseStudies from "../pages/CaseStudies";
import Dashboard from "../pages/admin/Dashboard";
import BlogManagement from "../pages/admin/BlogManagement";
import ClientsManagement from "../pages/admin/ClientsManagement";
import ContactFormManagement from "../pages/admin/ContactFormManagement";
import JobApplied from "../pages/admin/JobApplied";
import LogoManagement from "../pages/admin/LogoManagement";
import PortfolioManagement from "../pages/admin/PortfolioManagement";
import ProjectsManagement from "../pages/admin/ProjectsManagement";
import QAManagement from "../pages/admin/QAManagement";
import ServiceManagement from "../pages/admin/ServiceManagement";
import StaffManagement from "../pages/admin/StaffManagement";
import TestimonialManagement from "../pages/admin/TestimonialManagement";
import VacancyManagement from "../pages/admin/VacancyManagement";
import CaseStudiesManagement from "../pages/admin/CaseStudiesManagement";
import Login from "../pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import PortfolioDetail from "../pages/PortfolioDetail";

function AppRoutes() {
  return (
    <Routes>
      {/* HOME */}
      <Route path="/" element={<Home />} />

      {/* REAL PAGES */}
      <Route path="/about" element={<About />} />
      <Route path="/hire" element={<Hire />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/caseStudies" element={<CaseStudies />} />
      <Route path="/blogDetail" element={<BlogDetail />} />
      <Route path="/portfolioDetail" element={<PortfolioDetail />} />
      <Route path="/login" element={<Login />} />

      {/* Admin */}

      <Route
        path="/admin/"
        element={<ProtectedRoutes comp={<Dashboard />} />}
      >
        <Route path="logoManagement" element={<LogoManagement />} />
        <Route index element={<LogoManagement />} />

        <Route path="blogManagement" element={<BlogManagement />} />
        <Route
          path="caseStudiesManagement"
          element={<CaseStudiesManagement />}
        />
        <Route path="clientsManagement" element={<ClientsManagement />} />
        <Route
          path="contactFormManagement"
          element={<ContactFormManagement />}
        />
        <Route path="jobApplied" element={<JobApplied />} />
        <Route path="portfolioManagement" element={<PortfolioManagement />} />
        <Route path="projectsManagement" element={<ProjectsManagement />} />
        <Route path="qAManagement" element={<QAManagement />} />
        <Route path="serviceManagement" element={<ServiceManagement />} />
        <Route path="staffManagement" element={<StaffManagement />} />
        <Route
          path="testimonialManagement"
          element={<TestimonialManagement />}
        />
        <Route path="vacancyManagement" element={<VacancyManagement />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
