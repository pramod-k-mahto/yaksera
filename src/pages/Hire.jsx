import { useMemo, useState } from "react";

const jobs = [
  {
    id: 1, dept: "Engineering", level: "Senior", title: "Senior AI Engineer (Data Focused)",
    location: "On Site", exp: "1+ years", type: "Full Time", cat: "Engineering",
    tags: ["Python", "FastAPI", "PostgreSQL", "AWS"], extra: ["ML Pipelines"],
    posted: "3 DAYS AGO", ref: "YAK-AI-024", icon: "doc",
    quote: "We're looking for engineers who love working close to data — building robust APIs, designing scalable models, and shipping AI-driven applications to production.",
    about: "YAKSERA is seeking a Senior Software Engineer with a strong focus on backend development, data engineering, and AI/ML systems. You'll work alongside talented data and ML engineers to design scalable systems that power analytics, AI, and ML-enabled use cases for our partners.",
    resp: ["Design and build robust APIs using FastAPI and Python on AWS infrastructure.", "Architect scalable data models and integrate AI-powered outputs into production systems.", "Collaborate with ML engineers and stakeholders to deliver reliable, maintainable systems.", "Own features end-to-end, from technical design through deployment and monitoring."],
    req: ["Hands-on experience with Python, FastAPI, and PostgreSQL in production.", "Comfort with AWS deployments and modern cloud-native patterns.", "Analytical mindset — you enjoy working in data-heavy, AI-driven environments."],
  },
  {
    id: 2, dept: "Engineering", level: "Intern", title: "Software Engineering Intern",
    location: "Hybrid", exp: "0+ years", type: "Full Time", cat: "Internships",
    tags: ["Python", "FastAPI", "REST API"], extra: ["Git"],
    posted: "5 DAYS AGO", ref: "YAK-SE-018", icon: "code",
    quote: "A practical internship for builders who want to learn production-grade backend development by working on real client projects.",
    about: "You will support engineering teams with API development, testing, documentation, and small production features while learning modern backend practices.",
    resp: ["Build and maintain API endpoints with Python and FastAPI.", "Write clean documentation for internal and client-facing systems.", "Collaborate with senior engineers on debugging, testing, and code reviews.", "Contribute to small production features with guidance from mentors."],
    req: ["Basic understanding of Python and REST APIs.", "Willingness to learn backend development and deployment workflows.", "Good communication and problem-solving habits."],
  },
  {
    id: 3, dept: "Design", level: "Mid-Level", title: "UI/UX Designer",
    location: "Remote", exp: "2+ years", type: "Full Time", cat: "Design",
    tags: ["Figma", "Prototyping", "Wireframing", "Design Systems"], extra: ["Research"],
    posted: "1 WEEK AGO", ref: "YAK-UX-011", icon: "target",
    quote: "We need a designer who can turn complex product ideas into clean, intuitive, and conversion-focused experiences.",
    about: "You will design websites, dashboards, mobile flows, and product experiences for startup and mid-market clients across multiple industries.",
    resp: ["Create wireframes, high-fidelity designs, and interactive prototypes.", "Collaborate with developers to ship responsive and accessible interfaces.", "Maintain design systems and reusable component libraries.", "Use feedback and research to improve user journeys."],
    req: ["Strong portfolio showing UI, UX, and product thinking.", "Experience with Figma, prototyping, and design systems.", "Comfort working directly with technical teams and stakeholders."],
  },
  {
    id: 4, dept: "Engineering", level: "Mid-Level", title: "Full-Stack Developer",
    location: "Hybrid", exp: "3+ years", type: "Full Time", cat: "Engineering",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"], extra: ["APIs"],
    posted: "1 WEEK AGO", ref: "YAK-FS-031", icon: "github",
    quote: "Join a team shipping polished web applications with reliable backend systems and clean frontend architecture.",
    about: "You will build full-stack products using React, Node.js, TypeScript, and PostgreSQL, working across planning, implementation, deployment, and optimization.",
    resp: ["Develop responsive frontend features with React and TypeScript.", "Build backend services, database models, and API integrations.", "Improve performance, reliability, and maintainability across products.", "Work closely with designers, QA, and project stakeholders."],
    req: ["Strong React and Node.js experience.", "Comfort with relational databases and REST APIs.", "Ability to own features from idea to launch."],
  },
  {
    id: 5, dept: "Engineering", level: "Intern", title: "QA Automation Intern",
    location: "Hybrid", exp: "0+ years", type: "Full Time", cat: "Internships",
    tags: ["Selenium", "Cypress", "Python"], extra: ["Testing"],
    posted: "2 WEEKS AGO", ref: "YAK-QA-014", icon: "check",
    quote: "Help us improve quality by building automated tests, finding edge cases, and supporting reliable release workflows.",
    about: "You will assist with manual and automated testing for web applications, APIs, and internal tools while learning professional QA processes.",
    resp: ["Write automated tests using Selenium, Cypress, or Python-based tools.", "Document bugs clearly and verify fixes with engineering teams.", "Support regression testing before releases.", "Improve test coverage for important user flows."],
    req: ["Basic programming knowledge, preferably Python or JavaScript.", "Interest in software testing and product quality.", "Attention to detail and clear communication."],
  },
  {
    id: 6, dept: "Engineering", level: "Intern", title: "DevOps & Cloud Intern",
    location: "Hybrid", exp: "0+ years", type: "Full Time", cat: "Internships",
    tags: ["AWS", "Docker", "CI/CD"], extra: ["Linux"],
    posted: "2 WEEKS AGO", ref: "YAK-DC-009", icon: "db",
    quote: "A hands-on cloud internship for learners who want to understand deployment, automation, monitoring, and infrastructure basics.",
    about: "You will help maintain cloud infrastructure, deployment pipelines, containerized apps, and monitoring workflows with mentorship from senior engineers.",
    resp: ["Assist with Docker-based development and deployment workflows.", "Support CI/CD pipeline setup and maintenance.", "Help monitor application health and infrastructure performance.", "Document repeatable cloud and deployment processes."],
    req: ["Basic understanding of Linux, cloud platforms, or networking.", "Interest in AWS, Docker, and automation.", "Curiosity and willingness to learn infrastructure fundamentals."],
  },
];

const tabs = [
  { label: "All Roles", value: "All", count: "06" },
  { label: "Engineering", value: "Engineering", count: "04" },
  { label: "Design", value: "Design", count: "01" },
  { label: "Internships", value: "Internships", count: "03" },
];

const C = {
  primary: "#0A1F4D", accent: "#E8132F",
  text1: "#0A0F1F", text2: "#5A5F6F",
  surface: "#FFFFFF", border: "rgba(10,31,77,0.10)",
};

function IconSvg({ name, size = 18 }) {
  const p = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round",
    strokeLinejoin: "round", style: { display: "block", flexShrink: 0 },
  };
  const map = {
    doc:    <svg {...p}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 8h10M7 12h6M7 16h8"/></svg>,
    code:   <svg {...p}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    target: <svg {...p}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    github: <svg {...p}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
    check:  <svg {...p}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    db:     <svg {...p}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    loc:    <svg {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    user:   <svg {...p}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    clock:  <svg {...p}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
    search: <svg {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
    arrow:  <svg {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  };
  return map[name] || map.doc;
}

function Tag({ children, variant = "default" }) {
  const styles = {
    default:  { background: "rgba(10,31,77,0.06)", color: C.primary, border: `1px solid ${C.border}` },
    primary:  { background: C.primary, color: "#fff", border: `1px solid ${C.primary}` },
    inverted: { background: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" },
  };
  return (
    <span style={{
      ...styles[variant],
      display: "inline-flex", alignItems: "center",
      padding: "3px 9px", borderRadius: 5,
      fontSize: 10, fontWeight: 600, fontFamily: "monospace",
      letterSpacing: "0.03em", lineHeight: 1.4,
    }}>
      {children}
    </span>
  );
}

function Checklist({ items }) {
  return (
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, padding: 0, margin: 0 }}>
      {items.map((item) => (
        <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, lineHeight: 1.6, color: C.text2 }}>
          <span style={{
            marginTop: 4, width: 14, height: 14, borderRadius: "50%", flexShrink: 0,
            border: "1.5px solid rgba(232,19,47,0.3)", background: "rgba(232,19,47,0.06)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
              <path d="M1 2.5L2.8 4.2L6 1" stroke="#E8132F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionHead({ title }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8, marginBottom: 10,
      fontSize: 10, fontFamily: "monospace", fontWeight: 700,
      letterSpacing: "0.12em", textTransform: "uppercase", color: C.accent,
    }}>
      <span style={{ display: "block", width: 20, height: 1.5, background: C.accent, flexShrink: 0 }} />
      {title}
    </div>
  );
}

export default function JobBoard() {
  const [activeTab, setActiveTab] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return jobs.filter((j) => {
      const matchTab = activeTab === "All" || j.cat === activeTab;
      const text = [j.title, j.dept, j.level, j.location, j.type, ...j.tags, ...j.extra].join(" ").toLowerCase();
      return matchTab && (!q || text.includes(q));
    });
  }, [activeTab, query]);

  const job = jobs.find((j) => j.id === selectedId) || filtered[0] || jobs[0];

  const handleTab = (val) => {
    setActiveTab(val);
    const first = jobs.find((j) => val === "All" || j.cat === val);
    if (first) setSelectedId(first.id);
  };

  const btnBase = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
    padding: "10px 18px", borderRadius: 9999, fontSize: 13, fontWeight: 700,
    fontFamily: "Inter, -apple-system, sans-serif", border: "none", cursor: "pointer",
    textDecoration: "none", transition: "all 0.18s ease", letterSpacing: "0.01em",
    boxSizing: "border-box",
  };

  const sec = (extra = {}) => ({
    padding: "0 24px", maxWidth: 1200, margin: "0 auto",
    boxSizing: "border-box", ...extra,
  });

  return (
    <div style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", color: C.text1, WebkitFontSmoothing: "antialiased" }}>
      {/*
        ✅ FIX: All class names prefixed with "jb__" so they never clash with
        your existing page/header styles.
        ✅ NO global * { margin:0; padding:0 } reset — that was wiping your header.
        ✅ All h1/h2/p/ul elements have explicit margin:0 via inline styles.
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .jb__card { transition: transform 0.18s ease, box-shadow 0.18s ease; }
        .jb__card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(10,31,77,0.10) !important; }
        .jb__card:hover .jb__arr { transform: rotate(-45deg); background: #E8132F !important; color: #fff !important; }
        .jb__card--sel .jb__arr { transform: rotate(-45deg); background: #E8132F !important; color: #fff !important; }
        .jb__arr { transition: transform 0.18s ease, background 0.18s ease, color 0.18s ease; }
        .jb__apbtn:hover { background: #C40D24 !important; transform: translateY(-1px); }
        .jb__tab:hover { background: rgba(10,31,77,0.06); }
        .jb__input { border: none; background: transparent; outline: none; font-size: 12px; color: #0A0F1F; width: 100%; font-family: inherit; }
        .jb__input::placeholder { color: #9ca3af; }
        .jb__body::-webkit-scrollbar { width: 4px; }
        .jb__body::-webkit-scrollbar-thumb { background: rgba(10,31,77,0.2); border-radius: 4px; }

        @media(max-width: 900px) {
          .jb__mgrid { grid-template-columns: 1fr !important; }
          .jb__ctabanner { grid-template-columns: 1fr !important; }
          .jb__aside { position: static !important; }
          .jb__h1 { font-size: 34px !important; }
          .jb__srow { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media(max-width: 600px) {
          .jb__h1 { font-size: 26px !important; }
          .jb__metacells { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={sec({ paddingTop: 56, paddingBottom: 40 })}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: C.surface, border: `1px solid ${C.border}`,
          borderRadius: 9999, padding: "6px 14px",
          fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
          fontFamily: "monospace", color: C.primary,
          boxShadow: "0 1px 4px rgba(10,31,77,0.06)", marginBottom: 20,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: C.accent, boxShadow: "0 0 0 3px rgba(232,19,47,0.2)", display: "inline-block" }} />
          6 Open Positions · Updated this week
        </div>

        <h1 className="jb__h1" style={{
          fontSize: 52, fontWeight: 700, lineHeight: 1.05,
          letterSpacing: "-0.03em", color: C.primary,
          maxWidth: 720, margin: "0 0 28px 0", padding: 0,
        }}>
          Build the future,{" "}
          <span style={{ color: C.accent, fontStyle: "italic", fontWeight: 400 }}>one role</span>{" "}
          at a time.
        </h1>

        <div className="jb__srow" style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          gap: 24, paddingTop: 24, borderTop: `1px solid ${C.border}`, flexWrap: "wrap",
        }}>
          <p style={{ maxWidth: 460, fontSize: 15, lineHeight: 1.7, color: C.text2, margin: 0 }}>
            Join YAKSERA's world-class team of engineers, designers and strategists
            building cutting-edge IT solutions for startups and mid-market businesses worldwide.
          </p>
          <div style={{ display: "flex", gap: 36 }}>
            {[["42+", "Team Members"], ["12", "Countries"], ["4.9★", "Glassdoor"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "right" }}>
                <div style={{ fontSize: 36, fontWeight: 700, color: C.primary, lineHeight: 1, margin: 0 }}>{n}</div>
                <div style={{ marginTop: 4, fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", fontFamily: "monospace", color: C.text2, textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section style={sec({ paddingTop: 20, paddingBottom: 16 })}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div style={{
            display: "inline-flex", padding: 4, gap: 2,
            background: C.surface, border: `1px solid ${C.border}`,
            borderRadius: 9999, boxShadow: "0 1px 4px rgba(10,31,77,0.06)",
          }}>
            {tabs.map((t) => {
              const active = activeTab === t.value;
              return (
                <button key={t.value} className="jb__tab" onClick={() => handleTab(t.value)} style={{
                  padding: "8px 15px", fontSize: 12, fontWeight: 500, fontFamily: "inherit",
                  background: active ? C.primary : "transparent", color: active ? "#fff" : C.text1,
                  borderRadius: 9999, border: "none", cursor: "pointer",
                  display: "inline-flex", alignItems: "center", gap: 5,
                  transition: "background 0.15s, color 0.15s",
                }}>
                  {t.label}
                  <span style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 700, color: active ? "rgba(255,255,255,0.55)" : C.text2 }}>{t.count}</span>
                </button>
              );
            })}
          </div>

          <label style={{
            display: "flex", alignItems: "center", gap: 8,
            background: C.surface, border: `1px solid ${C.border}`,
            borderRadius: 9999, padding: "9px 15px",
            boxShadow: "0 1px 4px rgba(10,31,77,0.06)", width: 260, cursor: "text",
          }}>
            <IconSvg name="search" size={14} />
            <input className="jb__input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search roles, skills, location…" />
          </label>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <section style={sec({ paddingTop: 0, paddingBottom: 56 })}>
        <div className="jb__mgrid" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 16, alignItems: "start" }}>

          {/* Job list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {filtered.length > 0 ? filtered.map((j) => {
              const sel = j.id === selectedId;
              return (
                <article key={j.id} className={`jb__card${sel ? " jb__card--sel" : ""}`} onClick={() => setSelectedId(j.id)} style={{
                  background: sel ? C.primary : C.surface,
                  border: `1px solid ${sel ? C.primary : C.border}`,
                  borderRadius: 14, padding: 18, cursor: "pointer",
                  position: "relative", overflow: "hidden",
                  color: sel ? "#fff" : C.text1,
                  boxShadow: sel ? "0 8px 32px rgba(10,31,77,0.18)" : "0 1px 4px rgba(10,31,77,0.04)",
                  boxSizing: "border-box",
                }}>
                  <div style={{ position: "absolute", left: 0, top: 0, width: 3, height: "100%", background: C.accent, opacity: sel ? 1 : 0, transition: "opacity 0.18s" }} />

                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 10 }}>
                    <div style={{ display: "flex", gap: 10, flex: 1, minWidth: 0 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 9, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: sel ? "rgba(255,255,255,0.12)" : "rgba(10,31,77,0.06)", color: sel ? "#fff" : C.primary }}>
                        <IconSvg name={j.icon} size={17} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: sel ? "rgba(255,255,255,0.5)" : C.text2, marginBottom: 3 }}>{j.dept} · {j.level}</div>
                        <h3 style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.01em", margin: 0, padding: 0 }}>{j.title}</h3>
                      </div>
                    </div>
                    <div className="jb__arr" style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: sel ? C.accent : "rgba(10,31,77,0.06)", color: sel ? "#fff" : C.text2 }}>
                      <IconSvg name="arrow" size={12} />
                    </div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 10, fontSize: 11, color: sel ? "rgba(255,255,255,0.65)" : C.text2 }}>
                    {[["loc", j.location], ["user", j.exp], ["clock", j.type]].map(([icon, val]) => (
                      <span key={icon} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                        <IconSvg name={icon} size={11} />{val}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {j.tags.map((t) => <Tag key={t} variant={sel ? "inverted" : "default"}>{t}</Tag>)}
                  </div>
                </article>
              );
            }) : (
              <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: 28, textAlign: "center", color: C.text2, fontSize: 13 }}>
                No roles found. Try another search.
              </div>
            )}
          </div>

          {/* Detail panel */}
          <aside className="jb__aside" style={{ position: "sticky", top: 16 }}>
            <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 18, overflow: "hidden", boxShadow: "0 4px 24px rgba(10,31,77,0.08)" }}>
              <div style={{ padding: "22px 22px 18px", borderBottom: `1px solid ${C.border}` }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 14, marginBottom: 14, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", gap: 12, flex: 1, minWidth: 0 }}>
                    <div style={{ width: 50, height: 50, borderRadius: 11, flexShrink: 0, background: C.primary, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <IconSvg name={job.icon} size={21} />
                    </div>
                    <div>
                      <div style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.accent, marginBottom: 4 }}>{job.dept} · {job.level} Level</div>
                      <h2 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", color: C.text1, margin: 0, padding: 0 }}>{job.title}</h2>
                    </div>
                  </div>
                  <a href="#apply" style={{ ...btnBase, background: C.primary, color: "#fff", fontSize: 12, flexShrink: 0 }}>Apply →</a>
                </div>

                <div className="jb__metacells" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: C.border, borderRadius: 10, overflow: "hidden", border: `1px solid ${C.border}`, marginBottom: 14 }}>
                  {[["Location", job.location, "loc"], ["Experience", job.exp, "user"], ["Type", job.type, "clock"]].map(([label, val, icon]) => (
                    <div key={label} style={{ background: C.surface, padding: "10px 12px" }}>
                      <div style={{ fontSize: 9, fontFamily: "monospace", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: C.text2, marginBottom: 3 }}>{label}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 600, color: C.text1 }}>
                        <IconSvg name={icon} size={11} />{val}
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {[...job.tags, ...job.extra].map((t, i) => <Tag key={t} variant={i < 2 ? "primary" : "default"}>{t}</Tag>)}
                </div>
              </div>

              <div className="jb__body" style={{ padding: "18px 22px", maxHeight: 380, overflowY: "auto" }}>
                <blockquote style={{ borderLeft: `2px solid ${C.accent}`, paddingLeft: 14, margin: "0 0 18px 0", fontSize: 13, fontStyle: "italic", lineHeight: 1.65, color: C.text2 }}>
                  "{job.quote}"
                </blockquote>
                {[
                  ["About the Role", <p style={{ fontSize: 13, lineHeight: 1.7, color: C.text2, margin: 0 }}>{job.about}</p>],
                  ["What You'll Do", <Checklist items={job.resp} />],
                  ["What We're Looking For", <Checklist items={job.req} />],
                ].map(([title, content], i, arr) => (
                  <div key={title} style={{ marginBottom: i < arr.length - 1 ? 18 : 0 }}>
                    <SectionHead title={title} />
                    {content}
                  </div>
                ))}
              </div>

              <div id="apply" style={{ padding: "14px 22px", borderTop: `1px solid ${C.border}`, background: "linear-gradient(to bottom, rgba(227,207,252,0.15), rgba(227,207,252,0.35))" }}>
                <a href={`mailto:careers@yaksera.com?subject=Application: ${job.title}`} className="jb__apbtn" style={{ ...btnBase, display: "flex", width: "100%", padding: "13px 20px", fontSize: 13, fontWeight: 700, background: C.accent, color: "#fff", boxShadow: "0 4px 14px rgba(232,19,47,0.25)" }}>
                  Apply for this role <IconSvg name="arrow" size={14} />
                </a>
                <div style={{ marginTop: 8, display: "flex", justifyContent: "space-between", fontSize: 10, fontFamily: "monospace", fontWeight: 500, color: C.text2, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                  <span>Posted · {job.posted}</span>
                  <span>Ref · {job.ref}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={sec({ paddingTop: 0, paddingBottom: 56 })}>
        <div className="jb__ctabanner" style={{
          background: C.primary, borderRadius: 22, padding: "44px 44px",
          display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 36,
          alignItems: "center", position: "relative", overflow: "hidden", boxSizing: "border-box",
        }}>
          <div style={{ position: "absolute", right: -60, top: -80, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,19,47,0.22) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", margin: "0 0 10px 0", padding: 0 }}>
              Don't see your{" "}<span style={{ color: "#FF5266", fontStyle: "italic", fontWeight: 400 }}>perfect role?</span>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", maxWidth: 380, margin: 0 }}>
              We're always looking for exceptional talent. Send us your portfolio or résumé and we'll keep you in mind for future openings.
            </p>
          </div>
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 11, padding: "13px 16px" }}>
              <div style={{ fontSize: 9, fontFamily: "monospace", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 3 }}>Drop us a line</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>careers@yaksera.com</div>
            </div>
            <a href="mailto:careers@yaksera.com" className="jb__apbtn" style={{ ...btnBase, display: "flex", padding: "13px 20px", background: C.accent, color: "#fff", fontWeight: 700, boxShadow: "0 4px 14px rgba(232,19,47,0.3)", fontSize: 13 }}>
              Submit Open Application →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}