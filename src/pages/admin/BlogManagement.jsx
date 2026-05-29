import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
  Calendar,
  User,
  MoreHorizontal,
} from "lucide-react";

const blogs = [
  {
    title: "Future of AI in Software Development",
    category: "Artificial Intelligence",
    author: "Admin",
    status: "Published",
    date: "May 10, 2026",
    views: "12.4K",
  },
  {
    title: "How We Build Enterprise SaaS Platforms",
    category: "Development",
    author: "Yaksera Team",
    status: "Draft",
    date: "May 08, 2026",
    views: "8.2K",
  },
  {
    title: "Modern UI/UX Trends in 2026",
    category: "Design",
    author: "Design Team",
    status: "Published",
    date: "May 04, 2026",
    views: "18.9K",
  },
  {
    title: "Scaling FastAPI for Large Applications",
    category: "Backend",
    author: "Engineering",
    status: "Review",
    date: "May 01, 2026",
    views: "5.7K",
  },
];

function BlogManagement() {
  const navigate = useNavigate();
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
            CONTENT MANAGEMENT
          </span>

          <h1
            className="
              mt-4 text-3xl font-black tracking-tight
              md:text-5xl
            "
          >
            Blog Management
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45">
            Create, manage, edit and publish company blogs, articles and SEO
            content from one professional dashboard.
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
              placeholder="Search blogs..."
              className="
                bg-transparent text-sm
                outline-none
                placeholder:text-white/30
              "
            />
          </div>

          {/* BUTTON */}
          <motion.button
            onClick={() => {
              navigate("/admin/addNewBlog");
            }}
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
            Add New Blog
          </motion.button>
        </div>
      </div>

      {/* STATS */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
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
          <p className="text-sm text-white/45">Total Blogs</p>

          <h2 className="mt-4 text-5xl font-black">96</h2>

          <p className="mt-3 text-sm text-green-400">+12% this month</p>
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
          <p className="text-sm text-white/45">Published Articles</p>

          <h2 className="mt-4 text-5xl font-black">72</h2>

          <p className="mt-3 text-sm text-blue-400">Active SEO Content</p>
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
          <p className="text-sm text-white/45">Total Views</p>

          <h2 className="mt-4 text-5xl font-black">240K</h2>

          <p className="mt-3 text-sm text-[#ff4d67]">Blog traffic growing</p>
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
        {/* TABLE HEADER */}
        <div
          className="
            flex items-center justify-between
            border-b border-white/10
            px-6 py-5
          "
        >
          <div>
            <h2 className="text-xl font-bold">Blog Articles</h2>

            <p className="mt-1 text-sm text-white/40">
              Manage all published and draft blogs
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

        {/* TABLE CONTENT */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Blog
                </th>

                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Category
                </th>

                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Author
                </th>

                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Status
                </th>

                <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.15em] text-white/35">
                  Views
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
              {blogs.map((blog, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="
                    border-b border-white/5
                    transition-all duration-300
                    hover:bg-white/[0.03]
                  "
                >
                  {/* BLOG */}
                  <td className="px-6 py-5">
                    <div className="flex items-start gap-4">
                      {/* IMAGE */}
                      <div
                        className="
                          h-14 w-20 rounded-2xl
                          bg-gradient-to-br
                          from-[#e8192c]
                          to-[#ff4d67]
                        "
                      />

                      <div>
                        <h3 className="max-w-[260px] text-sm font-semibold leading-6">
                          {blog.title}
                        </h3>

                        <p className="mt-1 text-xs text-white/35">
                          SEO optimized article
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* CATEGORY */}
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
                      {blog.category}
                    </span>
                  </td>

                  {/* AUTHOR */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <User size={14} />
                      {blog.author}
                    </div>
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-5">
                    <span
                      className={`
                        rounded-full px-3 py-1 text-xs font-semibold
                        ${
                          blog.status === "Published"
                            ? "bg-green-500/10 text-green-400"
                            : blog.status === "Draft"
                              ? "bg-yellow-500/10 text-yellow-400"
                              : "bg-blue-500/10 text-blue-400"
                        }
                      `}
                    >
                      {blog.status}
                    </span>
                  </td>

                  {/* VIEWS */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-white/65">
                      <Eye size={14} />
                      {blog.views}
                    </div>
                  </td>

                  {/* DATE */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-white/55">
                      <Calendar size={14} />
                      {blog.date}
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
    </div>
  );
}

export default BlogManagement;
