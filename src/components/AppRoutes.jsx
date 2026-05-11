import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Hire from "../pages/Hire";
import About from "../pages/About";
import BlogDetail from "../pages/BlogDetail";
import CaseStudies from "../pages/CaseStudies";

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

    </Routes>
  );
}

export default AppRoutes;