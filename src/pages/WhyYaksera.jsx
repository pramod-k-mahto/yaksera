import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import people from "../assets/whyyaksera/people.png";

const features = [
  { icon: "⚙️", title: "Quality First", desc: "Rigorous QA & testing standards." },
  { icon: "🔄", title: "Agile Approach", desc: "Rapid iterations and delivery." },
  { icon: "💰", title: "Cost Effective", desc: "Optimized offshore delivery." },
  { icon: "🏆", title: "Elite Talent", desc: "Top 3% engineering expertise." },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function WhyYaksera() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-14 sm:py-20 bg-white"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* LEFT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-6"
        >
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight"
          >
            Why Choose <span className="text-red-600">YAKSERA?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md"
          >
            We combine deep technical expertise with a{" "}
            <span className="text-red-600 font-medium">transparent, collaborative</span>{" "}
            approach to deliver{" "}
            <span className="text-red-600 font-medium">software</span> that drives real business results.
          </motion.p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="flex gap-3 items-start"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-red-50 border text-sm shrink-0">
                  {f.icon}
                </div>

                <div>
                  <p className="text-sm font-medium text-red-600">
                    {f.title}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 leading-snug">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative w-full"
        >
          <div className="rounded-2xl overflow-hidden relative">

            {/* IMAGE */}
            <img
              src={people}
              alt="Team collaboration"
              className="w-full h-[260px] sm:h-[320px] lg:h-[420px] object-cover"
            />

            {/* BADGE */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 bg-red-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl shadow-lg"
            >
              <p className="text-xl sm:text-3xl font-bold leading-none">
                98%
              </p>
              <p className="text-[9px] sm:text-[10px] tracking-widest mt-1 opacity-90">
                CLIENT RETENTION
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyYaksera;