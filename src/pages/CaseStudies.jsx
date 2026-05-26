import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getAllCaseStudies } from "../services/caseStudies";

/* ───────────────── CASE STUDIES DATA ───────────────── */
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
];

/* ───────────────── CARD ───────────────── */
function CaseStudyCard({ item, index }) {
   const navigate= useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
      }}
      whileHover={{ y: -10 }}
      className="relative overflow-hidden rounded-2xl"
      style={{
        boxShadow: "var(--shadow-lg)",
      }}
    >
      {/* IMAGE */}
      <div className="relative h-[500px] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8 }}
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 w-full p-8 space-y-4">

          <h2
            style={{
              color: "#fff",
              fontSize: "40px",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            {item.title}
          </h2>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3">
            {item.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  backdropFilter: "blur(10px)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* BUTTON */}
          <button

          onClick={()=>{
            navigate("/portfolioDetail")
          }}
            style={{
              marginTop: "10px",
              background: "#fff",
              color: "#0d1f4e",
              fontWeight: 700,
              padding: "12px 22px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
            }}
          >
            View Project ↗
          </button>

        </div>

        {/* BADGE */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "rgba(255,255,255,0.1)",
            color: "#fff",
            padding: "8px 14px",
            borderRadius: "999px",
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          Featured
        </div>

      </div>
    </motion.div>
  );
}

/* ───────────────── MAIN SECTION ───────────────── */
function CaseStudies() {

 const navigate= useNavigate()

 const getData = async () => {
    const data = await getAllCaseStudies();
    console.log(data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section
      style={{
        background: "var(--page-bg)",
        padding: "120px 24px",
        fontFamily: "var(--font-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND BLUR */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >

          <div>
            <span
              style={{
                color: "#e8192c",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              Portfolio
            </span>

            <h1
              style={{
                fontSize: "52px",
                fontWeight: 900,
                lineHeight: 1.1,
                color: "#0d1f4e",
                maxWidth: "700px",
              }}
            >
              Innovative Case Studies &
              <span style={{ color: "#e8192c" }}> Digital Experiences</span>
            </h1>
          </div>

          <p
            style={{
              maxWidth: "420px",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "var(--text-secondary-default)",
            }}
          >
            Explore premium digital solutions crafted with modern UI/UX,
            scalable architecture, and high-performance development.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((item, index) => (
            <CaseStudyCard key={item.title} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default CaseStudies;