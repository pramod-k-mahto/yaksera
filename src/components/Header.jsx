import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const navItems = ["services", "portfolio", "blog", "testimonials", "process"];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close drawer on route change
  useEffect(() => setIsOpen(false), [location]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0d1f4e] border-b border-white/10 shadow-lg">
        <div className="flex items-center justify-between h-[68px] px-5 md:px-10 max-w-7xl mx-auto">

          {/* Logo */}
          <NavLink to="/" className="flex items-center shrink-0">
            <img src={logo} alt="Yaksera Logo" className="h-9 md:h-12 object-contain" />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                className={({ isActive }) =>
                  `relative text-sm font-semibold tracking-wide transition-colors duration-200 pb-0.5 group ${
                    isActive ? "text-[#e8192c]" : "text-white/80 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item[0].toUpperCase() + item.slice(1)}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#e8192c] rounded transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <NavLink
            to="/contact"
            className="hidden md:flex items-center gap-1.5 bg-[#e8192c] text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[#c8001e] transition-colors duration-200 shadow-md"
          >
            Start Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </NavLink>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] rounded-lg hover:bg-white/10 transition"
          >
            <span className="w-5 h-[2px] bg-white rounded" />
            <span className="w-5 h-[2px] bg-white rounded" />
            <span className="w-3 h-[2px] bg-white rounded self-start ml-1" />
          </button>
        </div>
      </header>

      {/* Spacer so content doesn't hide under fixed header */}
      <div className="h-[68px]" />

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer panel slides in from right */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[78vw] max-w-[320px] bg-[#0a1628] flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-[68px] border-b border-white/10 shrink-0">
                <img src={logo} alt="Yaksera Logo" className="h-8 object-contain" />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-4 pt-6 gap-1 flex-1 overflow-y-auto">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.055, duration: 0.3 }}
                  >
                    <NavLink
                      to={`/${item}`}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-colors duration-150 ${
                          isActive
                            ? "bg-[#e8192c]/15 text-[#e8192c]"
                            : "text-white/75 hover:bg-white/8 hover:text-white"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{item[0].toUpperCase() + item.slice(1)}</span>
                          {isActive ? (
                            <span className="w-2 h-2 rounded-full bg-[#e8192c]" />
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-30">
                              <path d="M4 7h6M7 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Divider + CTA pinned to bottom */}
              <div className="px-6 pb-8 pt-4 border-t border-white/10 shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38, duration: 0.3 }}
                >
                  <p className="text-white/40 text-xs font-medium mb-4 tracking-widest uppercase">
                    Ready to build?
                  </p>
                  <NavLink
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-[#e8192c] hover:bg-[#c8001e] text-white font-bold text-sm py-3.5 rounded-xl transition-colors duration-200 shadow-lg"
                  >
                    Start Your Project
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;