import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import UI from "../assets/services/UI/UX.png";
const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and applications built to perform. We craft responsive, scalable solutions using modern frameworks and best practices.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    wide: true,
    tall: true,
  },
  {
    title: "SAAS Development",
    description: "End-to-end SaaS platforms that scale with your business.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    wide: false,
    tall: false,
  },
  {
    title: "AI & Automation",
    description: "Intelligent automation to eliminate repetitive work.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    wide: false,
    tall: false,
  },
  {
    title: "UI/UX Design",
    description:
      "Human-centered design that converts and delights users at every touchpoint.",
    image: UI,
    wide: true,
    tall: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Single Service Card ── */
function ServiceCard({ service }) {
  const isWide = service.wide;
  const isTall = service.tall;

  return (
    <motion.div
      variants={cardVariants}
      className={`relative overflow-hidden rounded-2xl cursor-pointer group
        ${isWide ? "lg:col-span-2" : ""}
        ${isTall ? "row-span-2" : ""}
      `}
    >
      {/* Background image */}
      <motion.img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Default dark gradient — always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

      {/* Hover gradient — deeper, covers more */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* ── DEFAULT STATE: just the title at bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
        <h3
          className={`text-white font-bold ${isWide ? "text-3xl" : "text-xl"}`}
        >
          {service.title}
        </h3>
        {/* Red underline bar */}
        <div className="w-8 h-[3px] bg-red-500 mt-2 rounded-full" />
      </div>

      {/* ── HOVER STATE: title + description + button slide up ── */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        {/* Title */}
        <motion.h3
          className={`text-white font-bold mb-3 opacity-0 translate-y-8 transition-all duration-500 ease-out
            group-hover:opacity-100 group-hover:translate-y-0
            ${isWide ? "text-3xl" : "text-xl"}`}
          style={{ transitionDelay: "0ms" }}
        >
          {service.title}
        </motion.h3>

        {/* Description */}
        <p
          className={`text-white/80 leading-relaxed mb-5 opacity-0 translate-y-8 transition-all duration-500 ease-out
            group-hover:opacity-100 group-hover:translate-y-0
            ${isWide ? "text-base" : "text-sm"}`}
          style={{ transitionDelay: "60ms" }}
        >
          {service.description}
        </p>

        {/* Learn More button */}
        <div
          className="opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0"
          style={{ transitionDelay: "120ms" }}
        >
          <button className="flex items-center gap-2 bg-[#1a2e5a] hover:bg-[#1e3566] text-white text-sm font-bold py-3 px-6 rounded-lg transition-colors duration-200">
            Learn More
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="mt-px"
            >
              <path
                d="M4 9h10M9 4l5 5-5 5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Section ── */
function Services() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section className="w-full bg-white px-6 py-20 md:px-12 lg:px-20">
      {/* ── Header ── */}
      <motion.div
        ref={headerRef}
        className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14"
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Left */}
        <motion.div className="max-w-xl" variants={headerVariants}>
          <motion.span
            className="inline-block border border-red-500 text-red-500 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5"
            initial={{ opacity: 0, x: -14 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            What We Do
          </motion.span>
          <h2 className="text-4xl md:text-[35px] font-black  leading-14 text-[#0a1628]">
            Engineering Solutions to Drive
            <br />
            Your{" "}
            <motion.span
              className="text-red-500  inline-block"
              initial={{ opacity: 0, y: 10 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.22 }}
            >
              Business Forward
            </motion.span>
          </h2>
        </motion.div>

        {/* Right */}
        <motion.div
          className="lg:max-w-sm lg:pt-16  flex flex-col p-2 text-justify    "
          variants={headerVariants}
        >
          <p className="text-gray-500 text-sm md:text-base w-[400px] text-justify  leading-relaxed mb-5">
            We deliver end-to-end development with senior engineers, modern tech, and a strong focus on quality.
            {/* Dot pattern */}
            <motion.div
              className="flex flex-wrap gap-x-2 gap-y-1.5 w-fit  w-full  mt-3"
              initial="hidden"
              animate={headerInView ? "visible" : "hidden"}
              variants={{
                visible: { transition: { staggerChildren: 0.02 } },
              }}
            >
              {Array.from({ length: 28 }).map((_, i) => (
                <motion.span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full   ${
                    i % 5 === 0 ? "bg-red-500" : "bg-gray-200"
                  }`}
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.25 },
                    },
                  }}
                />
              ))}
            </motion.div>
          </p>
        </motion.div>
      </motion.div>

      {/* ── Bento Grid ── */}
      <motion.div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4
                   auto-rows-[220px] lg:auto-rows-[240px]"
        initial="hidden"
        animate={gridInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </motion.div>
    </section>
  );
}

export default Services;
