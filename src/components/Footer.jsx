import React from "react";
import logo from "../assets/logo.png";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { scroller } from "react-scroll";

/* Icons */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
  </svg>
);

const services = [
  "Web Development",
  "Mobile Apps",
  "Software Development",
  "UI/UX Design",
];

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Case Studies", path: "/caseStudies" },
  { name: "Our Services", section: "services" }, // ONLY SCROLL
  { name: "Career", path: "/hire" },
];

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ ONLY SCROLL FUNCTION (for services)
  const scrollToSection = (section) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 500,
          offset: -85,
        });
      }, 300);
    } else {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -85,
      });
    }
  };

  return (
    <footer className="bg-[#0d1f4e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* LOGO */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="logo" className="w-44" />
            <p className="mt-5 text-slate-300 text-sm">
              Premium IT outsourcing solutions for businesses worldwide
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-red-500 font-semibold mb-5 uppercase">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-300 text-sm hover:text-white transition cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS (MIXED) */}
          <div>
            <h3 className="text-red-500 font-semibold mb-5 uppercase">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {/* 🔥 SCROLL ONLY FOR SERVICES */}
                  {link.section ? (
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="text-slate-300 text-sm hover:text-white transition"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <NavLink
                      to={link.path}
                      className="text-slate-300 text-sm hover:text-white transition"
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-red-500 font-semibold mb-5 uppercase">
              Contact
            </h3>

            <p className="text-slate-300 text-sm mb-2">
              Email: contact@yaksera.com
            </p>

            <div className="text-slate-300 text-sm mb-4 space-y-1">
              <p>Phone: 9768534410</p>
              <p>Phone: 9712082575</p>
              <p>Phone: 9860267997</p>
            </div>

            <div className="flex gap-3">
              <a href="#" className="p-2 border border-slate-600 rounded">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-700">
        <div className="text-center py-5 text-slate-400 text-sm">
          © 2026 YAKSERA SOLUTIONS PRIVATE LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
