import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Digital Products",
    tags: ["UI/UX Design", "Web Development"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Modern Real Estate",
    tags: ["Web Application", "Brand Identity"],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Healthcare Platform",
    tags: ["Healthcare", "Dashboard UI"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Finance Management",
    tags: ["Fintech", "Mobile App"],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Creative Agency",
    tags: ["Branding", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "E-Commerce Store",
    tags: ["E-Commerce", "Frontend Development"],
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Restaurant Booking",
    tags: ["Booking System", "Web App"],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Education Platform",
    tags: ["E-Learning", "Dashboard"],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Travel Experience",
    tags: ["Travel App", "UI Design"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Fitness Mobile App",
    tags: ["Fitness", "App Development"],
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
  },
];
function CaseStudyCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-[38px] shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
    >
      {/* IMAGE */}
      <div className="relative h-[520px] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8 }}
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* LIGHT EFFECT */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
        </div>

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 z-20 w-full p-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              {item.title}
            </h2>

            <div className="flex flex-wrap gap-3">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-red-500 hover:text-white"
            >
              View Project
              <span>↗</span>
            </motion.button>
          </motion.div>
        </div>

        {/* CORNER BADGE */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-6 top-6 z-20 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
            Featured
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f7] px-6 py-20 lg:px-10">
      {/* BACKGROUND BLUR */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <span className="mb-4 inline-flex rounded-full border border-red-200 bg-red-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
              Portfolio
            </span>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[#0f172a] md:text-6xl">
              Innovative Case Studies &
              <span className="text-red-500"> Digital Experiences</span>
            </h1>
          </div>

          <p className="max-w-md text-base leading-relaxed text-slate-500">
            Explore premium digital solutions crafted with modern UI/UX,
            scalable architecture, and high-performance development for
            businesses worldwide.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((item, index) => (
            <CaseStudyCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;