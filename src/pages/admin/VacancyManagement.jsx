import React from "react";
import { motion } from "framer-motion";

function VacancyManagement() {
  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full Time",
      location: "Remote",
      experience: "2+ Years",
      status: "Open",
    },
    {
      title: "Backend Developer",
      type: "Full Time",
      location: "Kathmandu",
      experience: "3+ Years",
      status: "Open",
    },
    {
      title: "UI/UX Designer",
      type: "Contract",
      location: "Remote",
      experience: "1+ Year",
      status: "Closed",
    },
    {
      title: "Project Manager",
      type: "Full Time",
      location: "Kathmandu",
      experience: "4+ Years",
      status: "Open",
    },
  ];

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
          Vacancy Management
        </h1>

        <button className="px-4 py-2 text-sm font-medium text-white bg-[#e8132f] rounded-lg hover:bg-[#c40d24] transition">
          + Add Vacancy
        </button>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm text-white/60 max-w-2xl">
        Manage job openings, hiring positions, and recruitment status for your company.
      </p>

      {/* TABLE */}
      <div className="border border-white/10 rounded-xl overflow-hidden">
        {/* HEADER ROW */}
        <div className="grid grid-cols-5 bg-white/5 text-white/70 text-xs font-medium px-4 py-3">
          <span>Job Title</span>
          <span>Type</span>
          <span>Location</span>
          <span>Experience</span>
          <span>Status</span>
        </div>

        {/* ROWS */}
        {jobs.map((job, i) => (
          <div
            key={i}
            className="grid grid-cols-5 px-4 py-4 text-sm text-white/80 border-t border-white/10 hover:bg-white/5 transition"
          >
            <span className="font-medium text-white">{job.title}</span>
            <span>{job.type}</span>
            <span>{job.location}</span>
            <span>{job.experience}</span>

            <span
              className={`text-xs font-semibold ${
                job.status === "Open"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {job.status}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default VacancyManagement;