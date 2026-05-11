import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    type: "Web Application",
    description: "Full-stack e-commerce solution for retail business",
    gradient: "from-[#0d1b3e] via-[#6b0f1a] to-[#c0392b]",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    type: "Mobile App",
    description: "Secure banking application for iOS & Android",
    gradient: "from-[#1a0533] via-[#7b1020] to-[#c0392b]",
  },
  {
    id: 3,
    title: "SaaS Management Tool",
    category: "Web Development",
    type: "Web Application",
    description: "Enterprise SaaS platform for project management",
    gradient: "from-[#c0392b] via-[#7b1020] to-[#0d1b3e]",
  },
  {
    id: 4,
    title: "HealthPlus Mobile",
    category: "Mobile Development",
    type: "Mobile App",
    description: "AI-powered health tracking and insights app",
    gradient: "from-[#1a0533] via-[#6b0f1a] to-[#1a0533]",
  },

  // ✅ FIX: AI Automation added
  {
    id: 5,
    title: "AI Automation System",
    category: "AI Automation",
    type: "AI Automation",
    description: "Smart AI workflows to automate business operations",
    gradient: "from-[#0f172a] via-[#1e293b] to-[#0ea5e9]",
  },
];

const filters = [
  "All Projects",
  "Web Application",
  "Mobile App",
  "AI Automation",
];

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function Portfolio() {
  const [active, setActive] = useState("All Projects");

  // ✅ FIXED FILTER LOGIC
  const filtered =
    active === "All Projects"
      ? projects
      : projects.filter(
          (p) => p.type === active || p.category === active
        );

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20 font-sans">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">

          {/* LEFT */}
          <div className="space-y-3">
            <span className="inline-block border border-red-500 text-red-500 rounded-full px-4 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase">
              Our Work
            </span>

            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] leading-tight">
              Featured{" "}
              <span className="text-red-500">Success Stories</span>
            </h1>

            <p className="text-gray-500 text-sm max-w-md">
              Real results delivered for ambitious companies worldwide.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                  active === f
                    ? "bg-[#0f172a] text-white border-[#0f172a]"
                    : "text-[#0f172a] border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filtered.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* TOP GRADIENT */}
              <div
                className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-2">

                <h3 className="text-lg font-bold text-[#0f172a]">
                  {project.title}
                </h3>

                <p className="text-sm font-medium text-red-500">
                  {project.category}
                </p>

                <p className="text-sm text-gray-500 leading-relaxed min-h-[40px]">
                  {project.description}
                </p>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-red-500 group"
                >
                  View Case Study
                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Portfolio;