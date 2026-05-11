import React from "react";
import { motion } from "framer-motion";

function BlogDetail() {
  return (
    <section className="bg-[#f5f5f5] px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Heading */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-500">
              Vue Js
            </p>

            <h1 className="max-w-4xl text-3xl font-bold leading-tight text-[#071c52] md:text-5xl">
              How is Vuejs Development beneficial for businesses?
            </h1>
          </div>

          {/* Banner */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
              alt="Vue Js Development"
              className="h-full max-h-[420px] w-full object-cover"
            />
          </motion.div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-9 text-gray-600"
          >
            In simple words, Vuejs is an open-source JavaScript framework.
            Vuejs web application development mainly focuses upon single-page
            applications and user interfaces. It is a progressive framework
            that simplifies development through reusable components, reactive
            architecture, and scalable frontend solutions.
          </motion.p>

          {/* Section */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold leading-tight text-[#071c52]">
              Benefits Vuejs Development, the most promising framework in the
              market
            </h2>

            <p className="text-lg leading-9 text-gray-600">
              Vue.js provides a modern ecosystem where developers can build
              highly interactive and scalable applications. It offers smooth
              integration, lightweight architecture, component-based
              development, and excellent performance for enterprise-level
              solutions.
            </p>

            <p className="text-lg leading-9 text-gray-600">
              Businesses prefer Vue.js because of its flexibility, faster
              development cycle, and clean coding structure. It enables teams to
              create seamless user experiences while maintaining excellent
              maintainability.
            </p>
          </div>

          {/* Section */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold leading-tight text-[#071c52]">
              What is the use of Vuejs?
            </h2>

            <p className="text-lg leading-9 text-gray-600">
              Vue.js is widely used for developing dynamic user interfaces,
              dashboards, SaaS applications, admin panels, and modern web
              platforms. Developers can easily create reusable UI components
              with HTML, CSS, and JavaScript.
            </p>

            <p className="text-lg leading-9 text-gray-600">
              It also supports rapid prototyping, smooth API integrations, and
              efficient state management, making it ideal for both startups and
              large-scale enterprise applications.
            </p>
          </div>

          {/* Conclusion */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold leading-tight text-[#071c52]">
              Conclusion
            </h2>

            <p className="text-lg leading-9 text-gray-600">
              Vue.js development provides flexibility, scalability, and modern
              frontend architecture for businesses looking to build high-quality
              digital products. From clean UI experiences to optimized
              performance, Vue.js remains one of the most powerful JavaScript
              frameworks in the modern development ecosystem.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDEBAR */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="sticky top-10 h-fit"
        >
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
            <div className="space-y-5">
              {/* Inputs */}
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-14 rounded-xl border border-gray-200 px-4 text-sm outline-none transition-all focus:border-red-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="h-14 rounded-xl border border-gray-200 px-4 text-sm outline-none transition-all focus:border-red-500"
                />
              </div>

              {/* Select */}
              <select className="h-14 w-full rounded-xl border border-gray-200 px-4 text-sm text-gray-600 outline-none transition-all focus:border-red-500">
                <option>Select Service</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>Digital Marketing</option>
                <option>UI/UX Design</option>
              </select>

              {/* Textarea */}
              <textarea
                rows={6}
                placeholder="Tell us about your project."
                className="w-full rounded-xl border border-gray-200 p-4 text-sm outline-none transition-all focus:border-red-500"
              />

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex h-14 w-full items-center justify-center rounded-xl bg-red-500 text-sm font-semibold text-white shadow-lg transition-all hover:bg-red-600"
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