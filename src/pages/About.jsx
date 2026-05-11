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

const stats = [
  {
    value: "120+",
    label: "Projects Delivered",
  },
  {
    value: "45+",
    label: "Global Clients",
  },
  {
    value: "6+",
    label: "Years Experience",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
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
    desc: "We build scalable and secure digital systems focused on long-term business growth and performance.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Modern Innovation",
    desc: "Our team leverages modern technologies and design systems to craft future-ready experiences.",
  },
  {
    icon: <Users2 size={28} />,
    title: "Client Partnership",
    desc: "We work closely with businesses to understand their goals and transform ideas into impactful products.",
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

function About() {
  return (
    <main className="overflow-hidden bg-[#f8fafc] text-[#0f172a]">
      {/* HERO SECTION */}
      <section className="relative px-6 pb-24 pt-28 lg:px-10">
        {/* Background Blur */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 shadow-sm">
              <Layers3 size={15} />
              About Our Company
            </span>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
              Building Modern
              <span className="block text-blue-600">
                Digital Solutions
              </span>
              for Future Businesses
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-500">
              We are a technology-driven IT company delivering premium
              web applications, enterprise systems, UI/UX experiences,
              and scalable software solutions for startups, enterprises,
              and growing brands worldwide.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700"
              >
                Explore Services
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-200 hover:text-blue-600"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[38px] border border-white/40 bg-white/60 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                alt="IT Team"
                className="h-[620px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-[#0f172a]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-bold text-white">
                  Creative Team.
                  <br />
                  Smart Technology.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                  Delivering innovative software products with modern
                  development standards and exceptional user experience.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[36px] bg-[#0f172a] p-10 shadow-2xl md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h2 className="text-5xl font-black text-white">
                {item.value}
              </h2>

              <p className="mt-3 text-sm text-slate-300">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-red-200/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] shadow-[0_20px_70px_rgba(0,0,0,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                alt="Office"
                className="h-[600px] w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Who We Are
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
              Transforming Businesses
              <span className="block text-blue-600">
                Through Technology
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-500">
              Our company focuses on delivering innovative digital
              products with clean architecture, modern design, and
              scalable development standards. We specialize in creating
              custom software solutions that help businesses automate
              workflows, improve efficiency, and grow faster.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    size={18}
                    className="text-blue-600"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="rounded-full bg-red-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
              Our Core Values
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group rounded-[32px] border border-slate-200 bg-[#f8fafc] p-8 shadow-sm transition-all duration-300 hover:shadow-2xl"
              >
                <div className="inline-flex rounded-2xl bg-blue-600 p-4 text-white shadow-lg shadow-blue-500/20">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-10 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Technologies
              </span>

              <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
                Modern Technology Stack
              </h2>

              <p className="mt-5 max-w-2xl leading-relaxed text-slate-400">
                We use cutting-edge technologies and modern frameworks
                to deliver scalable, secure, and high-performance
                digital products.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-full bg-white/5 px-5 py-3 backdrop-blur-xl">
              <Globe className="text-blue-400" />
              <span className="text-sm text-slate-300">
                Serving Clients Worldwide
              </span>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.08,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;