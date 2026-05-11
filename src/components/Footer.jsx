import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 5.883zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.79 1.52V6.76a4.85 4.85 0 01-1.03-.07z" />
  </svg>
);

const YakseraLogo = () => (
  <div className="w-52 gap-2">
    <img src={logo} alt="" />
  </div>
);

const socialLinks = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: XIcon, href: "#", label: "X (Twitter)" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: TikTokIcon, href: "#", label: "TikTok" },
];

const services = [
  "Web Development",
  "Mobile Apps",
  "Software Developement",
  "UI/UX Design",
];

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Case Studies", path: "/caseStudies" },
  { name: "Our Services", path: "/services" },
  { name: "Career ", path: "/hire" },
];

function Footer() {
  return (
    <footer className="bg-[#0d1f4e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="sm:col-span-2 lg:col-span-1">
            <YakseraLogo />
            <p className="mt-5 text-slate-300 text-sm leading-relaxed max-w-xs">
              Premium IT outsourcing solutions for businesses worldwide
            </p>
          </div>

          <div>
            <h3 className="text-red-500 font-semibold text-base mb-5 tracking-wide uppercase">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-300 text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-red-500 font-semibold text-base mb-5 tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `relative inline-flex items-center text-sm px-3 py-2 rounded-lg transition-all duration-200
                      ${
                        isActive
                          ? "text-white bg-red-600 shadow-lg shadow-red-500/20"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-red-500 font-semibold text-base mb-5 tracking-wide uppercase">
              Contact
            </h3>

            <div className="space-y-3 mb-6">
              <p className="text-slate-300 text-sm">
                <span className="text-white font-medium">Email : </span>
                <a href="mailto:contact@yaksera@gmail.com" className="hover:text-red-400 transition-colors duration-200">
                  contact@yaksera@gmail.com
                </a>
              </p>

              <p className="text-slate-300 text-sm">
                <span className="text-white font-medium">Phone: </span>
                <a href="tel:97798412347890" className="hover:text-red-400 transition-colors duration-200">
                  977-98412347890
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-slate-600 flex items-center justify-center text-slate-300 hover:text-white hover:border-red-500 hover:bg-red-500/10 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-slate-700/60 mx-6" />

      <div className="max-w-7xl mx-auto px-6 py-5">
        <p className="text-center text-slate-400 text-sm">
          © 2026 YAKSERA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;