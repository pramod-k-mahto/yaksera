import  { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import website from "../assets/demo/website.gif";

import ani from "../assets/demo/ani.gif";
import computer from "../assets/demo/computer.gif";
import box from "../assets/demo/box.gif";

/* ─── fade-up preset ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
});

/* ══════════════════════════════════════════
   CARD — REAL ESTATE (only coded card)
══════════════════════════════════════════ */
function RealEstateCard() {
  const listings = [
    { name: "Lagonia Apartment", price: "$998,500", tag: "Luxury", color: "#e53935" },
    { name: "Marina Heights", price: "$1,240,000", tag: "New", color: "#1e88e5" },
    { name: "Greenview Villa", price: "$750,000", tag: "Sale", color: "#43a047" },
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % listings.length), 2400);
    return () => clearInterval(t);
  }, []);
  const l = listings[active];

  return (
    <motion.div
      {...fadeUp(0.18)}
      style={{
        overflow: "hidden",
        borderRadius: 28,
        minHeight: 260,
        background: "#fff",
        border: "1.5px solid #f0f0f0",
        boxShadow: "0 4px 40px rgba(0,0,0,0.06)",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* Nav */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #f3f3f3",
          padding: "9px 14px",
        }}
      >
        <span style={{ fontSize: 8, fontWeight: 800, color: "#222", letterSpacing: "0.04em" }}>
          BN Apartments
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          {["Home", "About", "Contact"].map((n) => (
            <span key={n} style={{ fontSize: 5.5, color: "#bbb" }}>
              {n}
            </span>
          ))}
        </div>
        <span style={{ fontSize: 13 }}>🔍</span>
      </div>

      {/* Content */}
      <div style={{ display: "flex", gap: 12, padding: "14px 14px 10px" }}>
        <div style={{ flex: 1 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <h2
                style={{
                  fontSize: 14,
                  fontWeight: 900,
                  lineHeight: 1.2,
                  color: "#111",
                  margin: "0 0 5px",
                  letterSpacing: "-0.02em",
                }}
              >
                Buy an elite
                <br />
                Real Estate
              </h2>
              <p style={{ fontSize: 6.5, color: "#bbb", lineHeight: 1.6, margin: "0 0 10px" }}>
                A Right Media Mix Can
                <br />
                Make The Difference
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                animate={{ borderColor: l.color, color: l.color }}
                transition={{ duration: 0.4 }}
                style={{
                  border: "1.5px solid",
                  padding: "4px 10px",
                  borderRadius: 7,
                  fontSize: 6.5,
                  fontWeight: 700,
                  background: "none",
                  cursor: "pointer",
                }}
              >
                VIEW ESTATE →
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Building */}
        <div
          style={{
            width: 84,
            flexShrink: 0,
            overflow: "hidden",
            borderRadius: 14,
            background: "linear-gradient(160deg, #2c3e50, #4a5568)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <span style={{ fontSize: 36, marginBottom: 4 }}>🏢</span>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
              padding: 6,
              opacity: 0.4,
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, delay: i * 0.12, repeat: Infinity }}
                style={{ borderRadius: 2, background: "#fef08a" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 5, paddingBottom: 10 }}>
        {listings.map((ll, i) => (
          <motion.div
            key={i}
            animate={{ width: i === active ? 20 : 6, background: i === active ? ll.color : "#e5e7eb" }}
            transition={{ duration: 0.35 }}
            style={{ height: 4, borderRadius: 99 }}
          />
        ))}
      </div>

      {/* Bottom colour bar */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, background: l.color }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 6,
                color: "rgba(255,255,255,0.65)",
                margin: "0 0 1px",
                letterSpacing: "0.1em",
              }}
            >
              SPECIAL PRICE
            </p>
            <p style={{ fontSize: 9, fontWeight: 800, color: "#fff", margin: 0 }}>{l.name}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 11, fontWeight: 900, color: "#fff", margin: "0 0 3px" }}>
              {l.price}
            </p>
            <span
              style={{
                borderRadius: 999,
                background: "rgba(255,255,255,0.2)",
                padding: "2px 8px",
                fontSize: 5.5,
                color: "#fff",
              }}
            >
              {l.tag}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   ROOT
══════════════════════════════════════════ */
export default function Demo() {
  return (
    <section className="min-h-screen px-6 py-16 font-sans">
      <div className="mx-auto max-w-6xl">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-red-200 px-4 py-1.5 text-[11px] font-semibold tracking-widest text-red-500"
            >
              DEMO
            </motion.span>
            <h1 className="max-w-lg text-4xl font-bold leading-tight text-[#1d4ed8] lg:text-5xl">
              Explore Our Diverse
              <br />
              Industry Expertise!
            </h1>
          </div>
          <div className="max-w-sm text-right">
            <p className="text-sm leading-relaxed text-gray-400">
              We partner with diverse sectors like tech, healthcare, finance,
              and education to deliver customized solutions.
            </p>
          </div>
        </motion.div>

        {/* ── Grid ── */}
        <div className="p-4">

          {/* Row 1 — two GIFs */}
          <div className="grid grid-cols-2 mb-4">
            <motion.div {...fadeUp(0.05)} className="w-[400px] h-[400px] p-10">
              <img src={website} alt="Website demo" className="w-full h-full object-contain" />
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="w-[500px]">
              <img src={computer} alt="Computer demo" className="w-full h-full object-contain" />
            </motion.div>
          </div>

          {/* Row 2 — two GIFs + Real Estate card */}
          <div className="grid grid-cols-[1.1fr_0.85fr_0.85fr] gap-4 items-start">
            <motion.div {...fadeUp(0.08)} className="w-[500px]">
              <img src={ani} alt="Animation demo" className="w-full object-contain" />
            </motion.div>
            <motion.div {...fadeUp(0.14)} className="w-[300px]">
              <img src={box} alt="Box demo" className="w-[400px] object-contain" />
            </motion.div>
            <RealEstateCard />
          </div>

        </div>
      </div>
    </section>
  );
}