import { useState } from "react";
import { motion } from "framer-motion";
// import Card from "../../components/admin/Card";

function PortfolioManagement() {
  const [projects] = useState([
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      status: "Live",
    },
    {
      title: "AI SaaS Dashboard",
      category: "SaaS Product",
      status: "In Progress",
    },
    {
      title: "Mobile Banking App",
      category: "Fintech",
      status: "Completed",
    },
    {
      title: "Company Website",
      category: "Corporate",
      status: "Live",
    },
  ]);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-white text-xl font-bold">
            Portfolio Management
          </h1>
          <p className="text-white/50 text-sm">
            Manage all company projects and case studies
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-red-600 hover:bg-red-700 transition">
          + Add Project
        </button>
      </motion.div>

      {/* CARD WRAPPER */}
      {/* <Card title="All Projects"> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="
                rounded-2xl p-4
                border border-white/10
                bg-[#111b2e]
                hover:border-white/20
                transition-all duration-300
              "
            >

              {/* TITLE */}
              <h3 className="text-white font-semibold text-base">
                {project.title}
              </h3>

              {/* CATEGORY */}
              <p className="text-white/50 text-sm mt-1">
                {project.category}
              </p>

              {/* FOOTER */}
              <div className="mt-4 flex items-center justify-between">

                {/* STATUS */}
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium border ${
                    project.status === "Live"
                      ? "text-green-400 border-green-500/30 bg-green-500/10"
                      : project.status === "In Progress"
                      ? "text-yellow-400 border-yellow-500/30 bg-yellow-500/10"
                      : "text-blue-400 border-blue-500/30 bg-blue-500/10"
                  }`}
                >
                  {project.status}
                </span>

                {/* ACTIONS */}
                <div className="flex gap-2">

                  <button className="text-xs px-3 py-1 rounded-lg text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 transition">
                    Edit
                  </button>

                  <button className="text-xs px-3 py-1 rounded-lg text-red-300 bg-red-500/10 hover:bg-red-500/20 transition">
                    Delete
                  </button>

                </div>
              </div>

            </motion.div>
          ))}

        </div>

      {/* </Card> */}
    </div>
  );
}

export default PortfolioManagement;