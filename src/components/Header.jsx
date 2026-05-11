import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scroller } from "react-scroll";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Services", section: "services" },
  { label: "Portfolio", section: "portfolio" },
  { label: "Blog", section: "blog" },
  { label: "Testimonials", section: "testimonials" },
  { label: "Process", section: "process" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // AUTO SCROLL WHEN HASH CHANGES
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const section = location.hash.replace("#", "");

      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -85,
      });
    }
  }, [location]);

  const scrollToSection = (section) => {
    setIsOpen(false);

    // already on homepage
    if (location.pathname === "/") {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -85,
      });

      return;
    }

    // navigate instantly with hash
    navigate(`/#${section}`);
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0f172a]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 md:px-10">

          {/* LOGO */}
          <Link
            to="/"
            className="group flex items-center"
          >
            <img
              src={logo}
              alt="Yaksera"
              className="
                h-9 object-contain md:h-11
                transition-all duration-300
                group-hover:scale-[1.03]
              "
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="
                  group relative text-[14px]
                  font-medium tracking-wide
                  text-white/65
                  transition-all duration-300
                  hover:text-white
                "
              >
                <span className="relative z-10">
                  {item.label}
                </span>

                {/* underline */}
                <span
                  className="
                    absolute -bottom-1 left-0
                    h-[2px] w-0
                    rounded-full
                    bg-[#e8132f]
                    transition-all duration-300
                    group-hover:w-full
                  "
                />

                {/* click glow */}
                <span
                  className="
                    absolute left-1/2 top-1/2
                    h-0 w-0
                    -translate-x-1/2 -translate-y-1/2
                    rounded-full
                    bg-[#e8132f]/20
                    transition-all duration-300
                    group-active:h-12
                    group-active:w-12
                  "
                />
              </button>
            ))}
          </nav>
                    <Link  to='/admin' >Admin</Link>


          {/* CTA */}
          <Link
            to="/contact"
            className="
              hidden md:inline-flex
              items-center gap-2
              rounded-full
              bg-[#e8132f]
              px-5 py-2.5
              text-sm font-semibold text-white
              shadow-[0_10px_30px_rgba(232,19,47,0.25)]
              transition-all duration-300
              hover:-translate-y-[2px]
              hover:shadow-[0_18px_40px_rgba(232,19,47,0.35)]
              active:scale-[0.98]
            "
          >
            Start Project

            <span
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="
              group flex flex-col gap-[5px]
              rounded-xl p-2 md:hidden
            "
          >
            <span
              className="
                h-[2px] w-5 rounded-full bg-white
                transition-all duration-300
                group-hover:w-6
              "
            />

            <span
              className="
                h-[2px] w-5 rounded-full bg-white
              "
            />

            <span
              className="
                h-[2px] w-3 rounded-full bg-white
                transition-all duration-300
                group-hover:w-4
              "
            />
          </button>
        </div>
      </header>

      {/* SPACER */}
      <div className="h-[74px]" />

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 36,
              }}
              className="
                fixed right-0 top-0 z-50
                h-full w-[82%] max-w-sm
                border-l border-white/10
                bg-[#0b1220]
              "
            >
              {/* TOP */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <img
                  src={logo}
                  alt="Yaksera"
                  className="h-8 object-contain"
                />

                <button
                  onClick={() => setIsOpen(false)}
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-xl
                    text-white/70
                    transition-all duration-300
                    hover:rotate-90 hover:text-white
                  "
                >
                  ✕
                </button>
              </div>

              {/* LINKS */}
              <nav className="flex flex-col gap-1 px-4 py-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.section}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    onClick={() => scrollToSection(item.section)}
                    className="
                      group flex items-center justify-between
                      rounded-2xl px-4 py-3.5
                      text-left transition-all duration-300
                      hover:translate-x-1
                    "
                  >
                    <span
                      className="
                        text-[15px] font-medium text-white/65
                        transition-all duration-300
                        group-hover:text-white
                      "
                    >
                      {item.label}
                    </span>

                    <span
                      className="
                        text-white/30
                        transition-all duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#e8132f]
                      "
                    >
                      →
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* CTA */}
              <div className="absolute bottom-0 w-full border-t border-white/10 p-5">
                <Link
                  to="/contact"
                  className="
                    flex items-center justify-center gap-2
                    rounded-2xl bg-[#e8132f]
                    py-3.5 text-sm font-semibold text-white
                    transition-all duration-300
                    hover:-translate-y-[2px]
                  "
                >
                  Start Project →
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;