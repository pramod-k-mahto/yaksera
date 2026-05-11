import { motion } from "framer-motion";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Calendar,
  TrendingUp,
  Globe,
  MoreHorizontal,
  ArrowUpRight,
} from "lucide-react";

const caseStudies = [
  {
    title: "Enterprise ERP Platform",
    client: "Finext Corporation",
    industry: "Finance",
    tech: "React • FastAPI • PostgreSQL",
    growth: "+240%",
    status: "Published",
    date: "May 10, 2026",
  },
  {
    title: "AI Recruitment Automation",
    client: "HireFlow",
    industry: "AI SaaS",
    tech: "Next.js • OpenAI • Node",
    growth: "+180%",
    status: "Draft",
    date: "May 08, 2026",
  },
  {
    title: "Healthcare Management System",
    client: "MediCare Pro",
    industry: "Healthcare",
    tech: "React • Django • Redis",
    growth: "+320%",
    status: "Published",
    date: "May 05, 2026",
  },
  {
    title: "Global Logistics Dashboard",
    client: "MoveChain",
    industry: "Logistics",
    tech: "Vue • FastAPI • Docker",
    growth: "+150%",
    status: "Review",
    date: "May 02, 2026",
  },
];

function CaseStudiesManagement() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* HEADER */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        
        {/* LEFT */}
        <div>
          <span
            className="
              inline-flex rounded-full
              border border-[#e8192c]/20
              bg-[#e8192c]/10
              px-4 py-1.5
              text-[11px] font-semibold
              tracking-[0.2em]
              text-[#ff4d67]
            "
          >
            CASE STUDIES CMS
          </span>

          <h1
            className="
              mt-4 text-3xl font-black tracking-tight
              md:text-5xl
            "
          >
            Case Studies Management
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45">
            Manage success stories, enterprise projects,
            business growth reports and detailed client results.
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap items-center gap-4">
          
          {/* SEARCH */}
          <div
            className="
              flex items-center gap-3
              rounded-2xl border border-white/10
              bg-white/5
              px-4 py-3
            "
          >
            <Search size={18} className="text-white/40" />

            <input
              type="text"
              placeholder="Search case studies..."
              className="
                bg-transparent text-sm
                outline-none
                placeholder:text-white/30
              "
            />
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="
              flex items-center gap-2
              rounded-2xl
              bg-[#e8192c]
              px-5 py-3
              text-sm font-semibold
              shadow-[0_12px_30px_rgba(232,25,44,0.28)]
              transition-all duration-300
              hover:shadow-[0_18px_40px_rgba(232,25,44,0.38)]
            "
          >
            <Plus size={18} />
            Add Case Study
          </motion.button>
        </div>
      </div>

      {/* STATS */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
        
        {/* CARD */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
            rounded-[28px]
            border border-white/10
            bg-[#0f172a]
            p-6
          "
        >
          <p className="text-sm text-white/45">
            Total Studies
          </p>

          <h2 className="mt-4 text-5xl font-black">
            48
          </h2>

          <p className="mt-3 text-sm text-green-400">
            +8 this month
          </p>
        </motion.div>

        {/* CARD */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
            rounded-[28px]
            border border-white/10
            bg-[#0f172a]
            p-6
          "
        >
          <p className="text-sm text-white/45">
            Published
          </p>

          <h2 className="mt-4 text-5xl font-black">
            34
          </h2>

          <p className="mt-3 text-sm text-blue-400">
            Public portfolio
          </p>
        </motion.div>

        {/* CARD */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
            rounded-[28px]
            border border-white/10
            bg-[#0f172a]
            p-6
          "
        >
          <p className="text-sm text-white/45">
            Client Growth
          </p>

          <h2 className="mt-4 text-5xl font-black">
            +240%
          </h2>

          <p className="mt-3 text-sm text-[#ff4d67]">
            Avg performance
          </p>
        </motion.div>

        {/* CARD */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
            rounded-[28px]
            border border-white/10
            bg-[#0f172a]
            p-6
          "
        >
          <p className="text-sm text-white/45">
            Industries
          </p>

          <h2 className="mt-4 text-5xl font-black">
            12
          </h2>

          <p className="mt-3 text-sm text-yellow-400">
            Global sectors
          </p>
        </motion.div>
      </div>

      {/* TABLE */}
      <div
        className="
          mt-10 overflow-hidden
          rounded-[32px]
          border border-white/10
          bg-[#0f172a]
        "
      >
        {/* TABLE TOP */}
        <div
          className="
            flex items-center justify-between
            border-b border-white/10
            px-6 py-5
          "
        >
          <div>
            <h2 className="text-xl font-bold">
              Case Studies
            </h2>

            <p className="mt-1 text-sm text-white/40">
              Manage all published enterprise projects
            </p>
          </div>

          <button
            className="
              rounded-xl border border-white/10
              bg-white/5 px-4 py-2
              text-sm transition-all duration-300
              hover:bg-white/10
            "
          >
            Filter
          </button>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Project
                </th>

                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Client
                </th>

                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Industry
                </th>

                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Tech Stack
                </th>

                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Growth
                </th>

                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Status
                </th>

                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Date
                </th>

                <th className="px-6 py-5 text-right text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {caseStudies.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  className="
                    border-b border-white/5
                    transition-all duration-300
                    hover:bg-white/[0.03]
                  "
                >
                  {/* PROJECT */}
                  <td className="px-6 py-5">
                    <div className="flex items-start gap-4">
                      
                      <div
                        className="
                          h-16 w-24 rounded-2xl
                          bg-gradient-to-br
                          from-[#e8192c]
                          via-[#ff4d67]
                          to-[#ff8ea1]
                        "
                      />

                      <div>
                        <h3 className="max-w-[250px] text-sm font-semibold leading-6">
                          {item.title}
                        </h3>

                        <div className="mt-2 flex items-center gap-2 text-xs text-white/35">
                          <Globe size={12} />
                          Enterprise Digital Solution
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* CLIENT */}
                  <td className="px-6 py-5">
                    <span className="text-sm text-white/70">
                      {item.client}
                    </span>
                  </td>

                  {/* INDUSTRY */}
                  <td className="px-6 py-5">
                    <span
                      className="
                        rounded-full
                        border border-white/10
                        bg-white/5
                        px-3 py-1
                        text-xs text-white/70
                      "
                    >
                      {item.industry}
                    </span>
                  </td>

                  {/* TECH */}
                  <td className="px-6 py-5">
                    <span className="text-sm text-white/55">
                      {item.tech}
                    </span>
                  </td>

                  {/* GROWTH */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-green-400">
                      <TrendingUp size={14} />
                      <span className="text-sm font-semibold">
                        {item.growth}
                      </span>
                    </div>
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-5">
                    <span
                      className={`
                        rounded-full px-3 py-1 text-xs font-semibold
                        ${
                          item.status === "Published"
                            ? "bg-green-500/10 text-green-400"
                            : item.status === "Draft"
                            ? "bg-yellow-500/10 text-yellow-400"
                            : "bg-blue-500/10 text-blue-400"
                        }
                      `}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* DATE */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-white/55">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-end gap-2">
                      
                      <button
                        className="
                          flex h-10 w-10 items-center justify-center
                          rounded-xl
                          bg-white/5
                          text-white/60
                          transition-all duration-300
                          hover:bg-white/10
                          hover:text-white
                        "
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        className="
                          flex h-10 w-10 items-center justify-center
                          rounded-xl
                          bg-white/5
                          text-white/60
                          transition-all duration-300
                          hover:bg-[#e8192c]/15
                          hover:text-[#ff4d67]
                        "
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        className="
                          flex h-10 w-10 items-center justify-center
                          rounded-xl
                          bg-white/5
                          text-white/60
                          transition-all duration-300
                          hover:bg-red-500/15
                          hover:text-red-400
                        "
                      >
                        <Trash2 size={16} />
                      </button>

                      <button
                        className="
                          flex h-10 w-10 items-center justify-center
                          rounded-xl
                          bg-white/5
                          text-white/60
                          transition-all duration-300
                          hover:bg-white/10
                          hover:text-white
                        "
                      >
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FEATURED SECTION */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        
        {/* FEATURE CARD */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
            relative overflow-hidden
            rounded-[32px]
            border border-white/10
            bg-gradient-to-br
            from-[#0f172a]
            to-[#111827]
            p-8
          "
        >
          <div
            className="
              absolute right-[-60px] top-[-60px]
              h-40 w-40 rounded-full
              bg-[#e8192c]/20 blur-3xl
            "
          />

          <div className="relative z-10">
            <span
              className="
                inline-flex rounded-full
                bg-[#e8192c]/10
                px-3 py-1
                text-xs font-semibold text-[#ff4d67]
              "
            >
              FEATURED CASE
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight">
              AI Powered ERP System
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-white/55">
              Enterprise-grade ERP platform with AI automation,
              analytics and smart workflow optimization for
              modern businesses.
            </p>

            <button
              className="
                mt-6 flex items-center gap-2
                rounded-2xl
                bg-[#e8192c]
                px-5 py-3
                text-sm font-semibold
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              View Details
              <ArrowUpRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* PERFORMANCE CARD */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
            rounded-[32px]
            border border-white/10
            bg-[#0f172a]
            p-8
          "
        >
          <h2 className="text-2xl font-bold">
            Performance Overview
          </h2>

          <div className="mt-8 space-y-6">
            
            {[
              {
                label: "Client Satisfaction",
                value: "96%",
              },
              {
                label: "Revenue Growth",
                value: "240%",
              },
              {
                label: "Conversion Increase",
                value: "180%",
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-white/55">
                    {item.label}
                  </span>

                  <span className="text-sm font-semibold">
                    {item.value}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: item.value }}
                    transition={{
                      duration: 1,
                      delay: index * 0.2,
                    }}
                    className="
                      h-full rounded-full
                      bg-gradient-to-r
                      from-[#e8192c]
                      to-[#ff4d67]
                    "
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CaseStudiesManagement;