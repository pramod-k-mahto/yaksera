import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Services from "../pages/Services"
import Portfolio from "../pages/Portfolio"
import Blog from "../pages/Blog"
import Testimonials from "../pages/Testimonials"
import Contact from "../pages/Contact"
import Process from "../pages/Process"
import Hire from "../pages/Hire"
import CaseStudies from "../pages/CaseStudies"
import About from "../pages/About"
import BlogDetail from "../pages/BlogDetail"
// import ExpertiseAreas from "../pages/ExpertiseAreas"

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route   path="/"  element={<Home/>} />
        <Route   path="/services"  element={<Services/>} />
        <Route   path="/portfolio"  element={<Portfolio/>} />
        <Route   path="/process"  element={<Process/>} />
        <Route   path="/blog"  element={<Blog/>} />
        <Route   path="/blogDetail"  element={<BlogDetail/>} />
        <Route   path="/testimonials"  element={<Testimonials/>} />
        <Route   path="/contact"  element={<Contact/>} />
        <Route   path="/caseStudies"  element={<CaseStudies/>} />
        <Route   path="/hire"  element={<Hire/>} />
        <Route   path="/about"  element={<About/>} />
        {/* <Route   path="/expertiseAreas"  element={<ExpertiseAreas/>} /> */}
      </Routes>
    </div>
  )
}

export default AppRoutes
