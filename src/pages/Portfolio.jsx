import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    type: "Web Application",
    description: "Full-stack e-commerce solution for retail business",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    type: "Mobile App",
    description: "Secure banking application for iOS & Android",
  },
  {
    id: 3,
    title: "SaaS Management Tool",
    category: "Web Development",
    type: "Web Application",
    description: "Enterprise SaaS platform for project management",
  },
  {
    id: 4,
    title: "HealthPlus Mobile",
    category: "Mobile Development",
    type: "Mobile App",
    description: "AI-powered health tracking and insights app",
  },
  {
    id: 5,
    title: "AI Automation System",
    category: "AI Automation",
    type: "AI Automation",
    description: "Smart AI workflows to automate business operations",
  },
];

const filters = ["All Projects", "Web Application", "Mobile App", "AI Automation"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function Portfolio() {
  const [active, setActive] = useState("All Projects");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const navigate = useNavigate();


  const filtered =
    active === "All Projects"
      ? projects
      : projects.filter((p) => p.type === active);

  return (
    <section className="bg-white px-6 md:px-12 lg:px-20 py-20">

      {/* HEADER */}
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-col lg:flex-row justify-between gap-10 mb-14"
      >

        {/* LEFT */}
        <motion.div variants={fadeUp} className="space-y-3 max-w-xl">

          <span className="text-[#e8192c] border border-[#e8192c]/30 text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
            Our Work
          </span>

          <h2 className="text-3xl lg:text-4xl font-black text-[#0d1f4e] leading-tight">
            Featured{" "}
            <span className="text-[#e8192c]">Success Stories</span>
          </h2>

          <p className="text-gray-600 text-sm leading-6 max-w-md">
            Real results delivered for ambitious companies through modern engineering and clean execution.
          </p>

        </motion.div>

        {/* FILTERS */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 items-start">

          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition border ${
                active === f
                  ? "bg-[#0d1f4e] text-white border-[#0d1f4e]"
                  : "text-[#0d1f4e] border-gray-200 hover:border-[#e8192c] hover:text-[#e8192c]"
              }`}
            >
              {f}
            </button>
          ))}

        </motion.div>

      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >

        {filtered.map((project) => (
          <motion.div

          onClick={()=>{
            navigate('portfolioDetail')
            
          }}
            key={project.id}
            variants={fadeUp}
            className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
          >

            {/* TOP BLOCK */}
            <div className="h-40 bg-gradient-to-br from-[#0d1f4e] via-[#6b0f1a] to-[#e8192c] relative">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-2">

              <h3 className="text-lg font-black text-[#0d1f4e]">
                {project.title}
              </h3>

              <p className="text-sm font-semibold text-[#e8192c]">
                {project.category}
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>

              {/* CTA */}
              <button className="   text-sm font-semibold text-black  flex items-center gap-2 group">
                View Case Study
                <span className="group-hover:translate-x-1 transition">
                  →
                </span>
              </button>

            </div>

          </motion.div>
        ))}

      </motion.div>

    </section>
  );
}

export default Portfolio;