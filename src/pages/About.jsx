import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Layers3,
  ShieldCheck,
  Sparkles,
  Users2,
} from "lucide-react";

/* ───────────────── DATA ───────────────── */
const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "45+", label: "Global Clients" },
  { value: "6+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const services = [
  "Custom Web Development",
  "Mobile App Development",
  "UI/UX Product Design",
  "ERP & SaaS Solutions",
  "Cloud & DevOps",
  "AI Automation Solutions",
];

const values = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Reliable Architecture",
    desc: "We build scalable and secure digital systems focused on long-term business growth.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Modern Innovation",
    desc: "We use modern technologies to build future-ready digital experiences.",
  },
  {
    icon: <Users2 size={28} />,
    title: "Client Partnership",
    desc: "We work closely with clients to transform ideas into real products.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "Figma",
];

/* ───────────────── COMPONENT ───────────────── */
function About() {
  return (
    <main style={{ background: "var(--page-bg)", fontFamily: "var(--font-primary)" }}>

      {/* HERO */}
      <section className="px-6 lg:px-20 pt-28 pb-24 relative overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-gray-200/30 blur-3xl" />

        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span
              style={{
                color: "#e8192c",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              About Our Company
            </span>

            <h1
              style={{
                fontSize: "56px",
                fontWeight: 900,
                lineHeight: 1.05,
                color: "#0d1f4e",
              }}
            >
              Building Modern{" "}
              <span style={{ color: "#e8192c" }}>
                Digital Solutions
              </span>{" "}
              for Future Businesses
            </h1>

            <p
              style={{
                marginTop: "24px",
                fontSize: "18px",
                lineHeight: 1.8,
                color: "#6b7280",
              }}
            >
              We are a technology-driven IT company delivering scalable software,
              UI/UX systems, and enterprise solutions worldwide.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">

              <button
                style={{
                  background: "#e8192c",
                  color: "#fff",
                  padding: "14px 26px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  border: "none",
                }}
              >
                Explore Services
              </button>

              <button
                style={{
                  border: "1px solid #0d1f4e",
                  color: "#0d1f4e",
                  padding: "14px 26px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  background: "transparent",
                }}
              >
                Contact Us
              </button>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
              className="rounded-3xl h-[600px] w-full object-cover shadow-2xl"
            />
          </motion.div>

        </div>
      </section>

      {/* STATS */}
      <section className="px-6 lg:px-20">
        <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-6 bg-[#0d1f4e] p-10 rounded-3xl">

          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <h2 className="text-5xl font-black text-white">
                {item.value}
              </h2>
              <p className="text-red-400 mt-2 font-semibold">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 lg:px-20 py-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14">

          <div>
            <h2 className="text-4xl font-black text-[#0d1f4e]">
              What We Build
            </h2>

            <div className="mt-8 grid gap-4">
              {services.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm"
                >
                  <CheckCircle2 size={18} color="#e8192c" />
                  <span className="font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VALUES */}
          <div className="space-y-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 bg-white rounded-3xl shadow-sm">
                <div style={{ color: "#e8192c" }}>{v.icon}</div>
                <h3 className="text-2xl font-bold mt-4 text-[#0d1f4e]">
                  {v.title}
                </h3>
                <p className="text-gray-500 mt-2">{v.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}

export default About;