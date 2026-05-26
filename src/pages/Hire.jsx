import { useEffect, useMemo, useState } from "react";
import { getJobApplications } from "../services/jobApplication";
const jobs = [
  {
    id: 1,
    title: "Senior AI Engineer",
    dept: "Engineering",
    type: "Full Time",
    location: "On Site",
    exp: "1+ years",
    tags: ["Python", "FastAPI", "AWS", "PostgreSQL"],
    description:
      "Build scalable AI systems, backend APIs, and production-grade machine learning infrastructure.",
    do: [
      "Design and deploy ML models to production",
      "Build robust REST and GraphQL APIs with FastAPI",
      "Architect scalable data pipelines on AWS",
      "Collaborate with product to define AI-driven features",
    ],
    req: [
      "1+ year in Python and ML engineering",
      "Experience with AWS (EC2, S3, Lambda)",
      "Familiarity with PostgreSQL or similar",
      "Strong debugging and code review skills",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    dept: "Engineering",
    type: "Full Time",
    location: "Hybrid",
    exp: "2+ years",
    tags: ["React", "Node.js", "TypeScript"],
    description:
      "Create modern applications with clean architecture and excellent user experience.",
    do: [
      "Build responsive UIs in React and TypeScript",
      "Develop and maintain Node.js backend services",
      "Write clean, tested, and documented code",
      "Participate in architecture and design reviews",
    ],
    req: [
      "2+ years with React and Node.js",
      "Strong TypeScript skills",
      "Experience with REST APIs",
      "Good eye for UI detail and performance",
    ],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    dept: "Design",
    type: "Remote",
    location: "Worldwide",
    exp: "2+ years",
    tags: ["Figma", "Design Systems", "Research"],
    description:
      "Design clean and conversion-focused interfaces for modern startups.",
    do: [
      "Own end-to-end design from research to handoff",
      "Build and maintain a scalable design system",
      "Run user interviews and usability tests",
      "Work closely with engineers to ensure pixel-perfect output",
    ],
    req: [
      "2+ years of product design experience",
      "Expert-level Figma skills",
      "Portfolio showing shipped products",
      "Ability to communicate design decisions clearly",
    ],
  },
  {
    id: 4,
    title: "DevOps Intern",
    dept: "Internship",
    type: "Internship",
    location: "Hybrid",
    exp: "0+ years",
    tags: ["Docker", "CI/CD", "AWS"],
    description:
      "Learn cloud infrastructure, deployment pipelines, and automation workflows.",
    do: [
      "Assist with building and maintaining CI/CD pipelines",
      "Learn container orchestration with Docker",
      "Monitor cloud infrastructure and flag issues",
      "Help automate repetitive deployment tasks",
    ],
    req: [
      "Currently studying CS, Engineering, or similar",
      "Basic understanding of Linux and shell scripting",
      "Curiosity and willingness to learn",
      "Good communication in a remote-first team",
    ],
  },
];

const tabs = ["All", "Engineering", "Design", "Internship"];

function BulletItem({ text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mt-0.5 shrink-0">
        <div className="w-2 h-2 rounded-full bg-red-500" />
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function MetaPill({ text }) {
  return (
    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
      {text}
    </span>
  );
}

export default function Careers() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(jobs[0]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const data = await getJobApplications();
    console.log(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const matchTab = active === "All" || job.dept === active;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.tags.join(" ").toLowerCase().includes(q) ||
        job.dept.toLowerCase().includes(q);
      return matchTab && matchSearch;
    });
  }, [active, search]);

  function handleSelect(job) {
    setSelected(job);
  }

  const displaySelected =
    filtered.find((j) => j.id === selected.id) || filtered[0] || selected;

  return (
    <section className="w-full bg-[#f8fafc]">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
            {jobs.length} Open Positions
          </span>
        </div>

        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-none text-slate-900 mb-8">
            <span  className="text-red-600" >            Build products</span>
  
            <br />
            people remember.
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
            Join a small team of engineers and designers building modern digital
            products for startups and growing businesses worldwide.
          </p>
        </div>
      </div>

      {/* FILTERS */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === tab
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="w-full lg:w-[320px]">
            <input
              type="text"
              placeholder="Search roles or skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-900/10"
            />
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8">
          {/* LEFT — Job List */}
          <div className="space-y-4">
            {filtered.length === 0 && (
              <div className="text-center py-16 text-slate-400 text-sm">
                No roles match your search.
              </div>
            )}
            {filtered.map((job) => {
              const isActive = displaySelected?.id === job.id;
              return (
                <div
                  key={job.id}
                  onClick={() => handleSelect(job)}
                  className={`group cursor-pointer rounded-3xl p-6 transition-all duration-300 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-2xl"
                      : "bg-white hover:-translate-y-1 hover:shadow-xl border border-slate-100"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <p
                        className={`text-xs uppercase tracking-[0.18em] font-semibold mb-3 ${
                          isActive ? "text-white/50" : "text-slate-400"
                        }`}
                      >
                        {job.dept}
                      </p>
                      <h3 className="text-xl font-bold tracking-tight">
                        {job.title}
                      </h3>
                    </div>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-red-500"
                          : "bg-slate-100 group-hover:bg-slate-900 group-hover:text-white"
                      }`}
                    >
                      →
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-5 text-sm">
                    {[job.location, job.exp, job.type].map((item, i, arr) => (
                      <>
                        <span
                          key={item}
                          className={isActive ? "text-white/70" : "text-slate-500"}
                        >
                          {item}
                        </span>
                        {i < arr.length - 1 && (
                          <span
                            key={`sep-${i}`}
                            className={isActive ? "text-white/30" : "text-slate-300"}
                          >
                            •
                          </span>
                        )}
                      </>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT — Detail Panel */}
          {displaySelected && (
            <div className="lg:sticky lg:top-10 h-fit">
              <div className="bg-white rounded-[32px] shadow-2xl shadow-slate-200/60 overflow-hidden border border-slate-100">
                {/* Top */}
                <div className="p-8 border-b border-slate-100">
                  <div className="flex items-start justify-between gap-5 mb-8">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-red-500 font-semibold mb-4">
                        {displaySelected.dept}
                      </p>
                      <h2 className="text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                        {displaySelected.title}
                      </h2>
                    </div>
                    <button className="bg-slate-900 hover:bg-black text-white px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-200">
                      Apply
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {displaySelected.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="p-8">
                  <p className="text-slate-500 text-lg leading-relaxed mb-10">
                    {displaySelected.description}
                  </p>

                  <div className="space-y-8">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold mb-4">
                        What you'll do
                      </p>
                      <div className="space-y-4">
                        {displaySelected.do.map((item) => (
                          <BulletItem key={item} text={item} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold mb-4">
                        Requirements
                      </p>
                      <div className="space-y-4">
                        {displaySelected.req.map((item) => (
                          <BulletItem key={item} text={item} />
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold mb-4">
                        Details
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <MetaPill text={displaySelected.location} />
                        <MetaPill text={displaySelected.exp} />
                        <MetaPill text={displaySelected.type} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-8 border-t border-slate-100 bg-slate-50">
                  <button className="w-full bg-red-500 hover:bg-red-600 active:scale-[0.99] text-white font-semibold py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-red-200">
                    Apply for this Role
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-24">
        <div className="relative overflow-hidden rounded-[40px] bg-[#0f172a] px-8 md:px-14 py-16">
          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-red-500/20 blur-3xl rounded-full" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/50 text-sm uppercase tracking-[0.2em] font-semibold mb-5">
                Open Application
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
                Don't see your
                <br />
                perfect role?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg">
                We're always looking for exceptional people who care deeply
                about design, engineering, and building impactful products.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-green-400" />
                </span>
                <span className="text-xs uppercase tracking-[0.18em] font-semibold text-white/50">
                  We are hiring
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Send us your résumé
              </h3>
              <p className="text-white/60 leading-relaxed mb-8">
                Tell us what you're passionate about and what kind of work
                excites you.
              </p>
              <button className="w-full bg-red-500 hover:bg-red-600 active:scale-[0.99] text-white font-semibold py-4 rounded-2xl transition-all duration-200 shadow-xl shadow-red-500/20">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}