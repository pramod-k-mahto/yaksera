import React from "react";
import { motion } from "framer-motion";

function ServiceManagement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="space-y-6"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold text-white">
          Service Management
        </h1>

        <button className="px-4 py-2 text-sm font-medium text-white bg-[#e8132f] rounded-lg hover:bg-[#c40d24] transition">
          + Add Service
        </button>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
        Manage all IT services offered by your company such as Web Development,
        Mobile Apps, UI/UX Design, and Cloud Solutions. You can add, edit, or
        remove services anytime.
      </p>

      {/* CONTENT AREA */}
      <div className="border border-white/10 rounded-xl p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-white">
            All Services
          </h2>

          <input
            type="text"
            placeholder="Search services..."
            className="bg-transparent border border-white/10 text-sm text-white/70 px-3 py-2 rounded-lg outline-none focus:border-white/30 transition"
          />
        </div>

        {/* EMPTY STATE */}
        <div className="mt-10 text-center text-white/40 text-sm">
          No services added yet. Click “Add Service” to create your first one.
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceManagement;