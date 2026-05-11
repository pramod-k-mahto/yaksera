import React from "react";
import { motion } from "framer-motion";

function BlogDetail() {
  return (
    <section
      style={{
        background: "var(--page-bg)",
        fontFamily: "var(--font-primary)",
      }}
      className="px-6 md:px-12 lg:px-20 py-16"
    >
      <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-[1.4fr_0.8fr]">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-12"
        >

          {/* CATEGORY */}
          <div className="flex items-center gap-3">
            <svg width="50" height="14" viewBox="0 0 60 16">
              <path
                d="M0 8 Q10 2 20 8 Q30 14 40 8 Q50 2 60 8"
                fill="none"
                stroke="#0d1f4e"
                strokeWidth="2"
              />
            </svg>

            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.25em",
                color: "#0d1f4e",
                textTransform: "uppercase",
              }}
            >
              Vue.js Development
            </span>
          </div>

          {/* TITLE (Hero Style) */}
          <h1
            style={{
              fontSize: "52px",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#0d1f4e",
            }}
          >
            How Vue.js Development is{" "}
            <span style={{ color: "#e8192c" }}>beneficial</span> for businesses?
          </h1>

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="rounded-xl overflow-hidden"
            style={{
              boxShadow: "var(--shadow-md)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
              className="w-full h-[420px] object-cover"
              alt="Vue"
            />
          </motion.div>

          {/* INTRO */}
          <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8 }}>
            Vue.js is a modern JavaScript framework that helps developers build
            fast, scalable and interactive web applications with clean structure.
          </p>

          {/* SECTION 1 */}
          <div className="space-y-4">
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#0d1f4e" }}>
              Why businesses choose Vue.js
            </h2>

            <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8 }}>
              Vue.js reduces development complexity and allows faster delivery of
              scalable applications using reusable components.
            </p>

            <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8 }}>
              It is widely used in startups and enterprise systems due to its
              flexibility and performance.
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="space-y-4">
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#0d1f4e" }}>
              Use cases of Vue.js
            </h2>

            <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8 }}>
              Used in dashboards, SaaS platforms, admin panels and enterprise
              web systems.
            </p>

            <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8 }}>
              Supports fast API integration and real-time application features.
            </p>
          </div>

          {/* CONCLUSION */}
          <div className="space-y-4">
            <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#0d1f4e" }}>
              Conclusion
            </h2>

            <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8 }}>
              Vue.js is one of the most powerful frameworks for building modern,
              scalable and high-performance applications.
            </p>
          </div>

        </motion.div>

        {/* RIGHT SIDEBAR */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="sticky top-10 h-fit"
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "40px",
              boxShadow: "var(--shadow-lg)",
            }}
          >

            <div className="space-y-5">

              <input
                placeholder="Full Name"
                className="w-full h-14 px-4 rounded-xl border"
              />

              <input
                placeholder="Email"
                className="w-full h-14 px-4 rounded-xl border"
              />

              <select className="w-full h-14 px-4 rounded-xl border">
                <option>Select Service</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>UI/UX Design</option>
              </select>

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full p-4 rounded-xl border"
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full h-14 rounded-xl font-bold text-white"
                style={{ background: "#e8192c" }}
              >
                Send Inquiry
              </motion.button>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default BlogDetail;