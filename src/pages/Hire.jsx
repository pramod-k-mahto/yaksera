import React, { useMemo, useState } from 'react'

const jobs = [
  {
    id: 1,
    department: 'Engineering',
    level: 'Senior',
    title: 'Senior AI Engineer (Data Focused)',
    location: 'On Site',
    experience: '1+ years',
    type: 'Full Time',
    category: 'Engineering',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'AWS'],
    extraTags: ['ML Pipelines'],
    posted: '3 DAYS AGO',
    ref: 'YAK-AI-024',
    quote:
      "We're looking for engineers who love working close to data — building robust APIs, designing scalable models, and shipping AI-driven applications to production.",
    about:
      "YAKSERA is seeking a Senior Software Engineer with a strong focus on backend development, data engineering, and AI/ML systems. You'll work alongside talented data and ML engineers to design scalable systems that power analytics, AI, and ML-enabled use cases for our partners.",
    responsibilities: [
      'Design and build robust APIs using FastAPI and Python on AWS infrastructure.',
      'Architect scalable data models and integrate AI-powered outputs into production systems.',
      'Collaborate with ML engineers and stakeholders to deliver reliable, maintainable systems.',
      'Own features end-to-end, from technical design through deployment and monitoring.',
    ],
    requirements: [
      'Hands-on experience with Python, FastAPI, and PostgreSQL in production.',
      'Comfort with AWS deployments and modern cloud-native patterns.',
      'Analytical mindset — you enjoy working in data-heavy, AI-driven environments.',
    ],
    icon: 'document',
  },
  {
    id: 2,
    department: 'Engineering',
    level: 'Intern',
    title: 'Software Engineering Intern',
    location: 'Hybrid',
    experience: '0+ years',
    type: 'Full Time',
    category: 'Internships',
    tags: ['Python', 'FastAPI', 'REST API'],
    extraTags: ['Git'],
    posted: '5 DAYS AGO',
    ref: 'YAK-SE-018',
    quote:
      'A practical internship for builders who want to learn production-grade backend development by working on real client projects.',
    about:
      'You will support engineering teams with API development, testing, documentation, and small production features while learning modern backend practices.',
    responsibilities: [
      'Build and maintain API endpoints with Python and FastAPI.',
      'Write clean documentation for internal and client-facing systems.',
      'Collaborate with senior engineers on debugging, testing, and code reviews.',
      'Contribute to small production features with guidance from mentors.',
    ],
    requirements: [
      'Basic understanding of Python and REST APIs.',
      'Willingness to learn backend development and deployment workflows.',
      'Good communication and problem-solving habits.',
    ],
    icon: 'code',
  },
  {
    id: 3,
    department: 'Design',
    level: 'Mid-Level',
    title: 'UI/UX Designer',
    location: 'Remote',
    experience: '2+ years',
    type: 'Full Time',
    category: 'Design',
    tags: ['Figma', 'Prototyping', 'Wireframing', 'Design Systems'],
    extraTags: ['Research'],
    posted: '1 WEEK AGO',
    ref: 'YAK-UX-011',
    quote:
      'We need a designer who can turn complex product ideas into clean, intuitive, and conversion-focused experiences.',
    about:
      'You will design websites, dashboards, mobile flows, and product experiences for startup and mid-market clients across multiple industries.',
    responsibilities: [
      'Create wireframes, high-fidelity designs, and interactive prototypes.',
      'Collaborate with developers to ship responsive and accessible interfaces.',
      'Maintain design systems and reusable component libraries.',
      'Use feedback and research to improve user journeys.',
    ],
    requirements: [
      'Strong portfolio showing UI, UX, and product thinking.',
      'Experience with Figma, prototyping, and design systems.',
      'Comfort working directly with technical teams and stakeholders.',
    ],
    icon: 'target',
  },
  {
    id: 4,
    department: 'Engineering',
    level: 'Mid-Level',
    title: 'Full-Stack Developer',
    location: 'Hybrid',
    experience: '3+ years',
    type: 'Full Time',
    category: 'Engineering',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    extraTags: ['APIs'],
    posted: '1 WEEK AGO',
    ref: 'YAK-FS-031',
    quote:
      'Join a team shipping polished web applications with reliable backend systems and clean frontend architecture.',
    about:
      'You will build full-stack products using React, Node.js, TypeScript, and PostgreSQL, working across planning, implementation, deployment, and optimization.',
    responsibilities: [
      'Develop responsive frontend features with React and TypeScript.',
      'Build backend services, database models, and API integrations.',
      'Improve performance, reliability, and maintainability across products.',
      'Work closely with designers, QA, and project stakeholders.',
    ],
    requirements: [
      'Strong React and Node.js experience.',
      'Comfort with relational databases and REST APIs.',
      'Ability to own features from idea to launch.',
    ],
    icon: 'github',
  },
  {
    id: 5,
    department: 'Engineering',
    level: 'Intern',
    title: 'QA Automation Intern',
    location: 'Hybrid',
    experience: '0+ years',
    type: 'Full Time',
    category: 'Internships',
    tags: ['Selenium', 'Cypress', 'Python'],
    extraTags: ['Testing'],
    posted: '2 WEEKS AGO',
    ref: 'YAK-QA-014',
    quote:
      'Help us improve quality by building automated tests, finding edge cases, and supporting reliable release workflows.',
    about:
      'You will assist with manual and automated testing for web applications, APIs, and internal tools while learning professional QA processes.',
    responsibilities: [
      'Write automated tests using Selenium, Cypress, or Python-based tools.',
      'Document bugs clearly and verify fixes with engineering teams.',
      'Support regression testing before releases.',
      'Improve test coverage for important user flows.',
    ],
    requirements: [
      'Basic programming knowledge, preferably Python or JavaScript.',
      'Interest in software testing and product quality.',
      'Attention to detail and clear communication.',
    ],
    icon: 'check',
  },
  {
    id: 6,
    department: 'Engineering',
    level: 'Intern',
    title: 'DevOps & Cloud Intern',
    location: 'Hybrid',
    experience: '0+ years',
    type: 'Full Time',
    category: 'Internships',
    tags: ['AWS', 'Docker', 'CI/CD'],
    extraTags: ['Linux'],
    posted: '2 WEEKS AGO',
    ref: 'YAK-DC-009',
    quote:
      'A hands-on cloud internship for learners who want to understand deployment, automation, monitoring, and infrastructure basics.',
    about:
      'You will help maintain cloud infrastructure, deployment pipelines, containerized apps, and monitoring workflows with mentorship from senior engineers.',
    responsibilities: [
      'Assist with Docker-based development and deployment workflows.',
      'Support CI/CD pipeline setup and maintenance.',
      'Help monitor application health and infrastructure performance.',
      'Document repeatable cloud and deployment processes.',
    ],
    requirements: [
      'Basic understanding of Linux, cloud platforms, or networking.',
      'Interest in AWS, Docker, and automation.',
      'Curiosity and willingness to learn infrastructure fundamentals.',
    ],
    icon: 'database',
  },
]

const tabs = [
  { label: 'All Roles', value: 'All', count: '06' },
  { label: 'Engineering', value: 'Engineering', count: '04' },
  { label: 'Design', value: 'Design', count: '01' },
  { label: 'Internships', value: 'Internships', count: '03' },
]

function Icon({ name, className = 'h-5 w-5' }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
  }

  const icons = {
    document: (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 8h10M7 12h6M7 16h8" />
      </svg>
    ),
    code: (
      <svg {...common}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    target: (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    github: (
      <svg {...common}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    database: (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    location: (
      <svg {...common}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    user: (
      <svg {...common}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    clock: (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    search: (
      <svg {...common}>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    ),
  }

  return icons[name] || icons.document
}

function Hire() {
  const [activeTab, setActiveTab] = useState('All')
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState(jobs[0].id)

  const filteredJobs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return jobs.filter((job) => {
      const matchesTab = activeTab === 'All' || job.category === activeTab
      const searchableText = [
        job.title,
        job.department,
        job.level,
        job.location,
        job.experience,
        job.type,
        ...job.tags,
        ...job.extraTags,
      ]
        .join(' ')
        .toLowerCase()

      return matchesTab && (!normalizedQuery || searchableText.includes(normalizedQuery))
    })
  }, [activeTab, query])

  const selectedJob = jobs.find((job) => job.id === selectedId) || filteredJobs[0] || jobs[0]

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#fafaf7] font-sans text-[#0a0f1f] antialiased">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(10,31,77,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,31,77,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      <main className="relative z-10">
        <section className="px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1320px]">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#e6e4dc] bg-white px-4 py-2 font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#2a2f3f] shadow-sm">
              <span className="relative flex h-2 w-2 rounded-full bg-[#e8132f] before:absolute before:inset-0 before:animate-ping before:rounded-full before:bg-[#e8132f]" />
              6 Open Positions · Updated this week
            </div>

            <h1 className="mt-7 max-w-5xl font-serif text-6xl font-normal leading-[0.95] tracking-[-0.04em] text-[#0a0f1f] md:text-8xl lg:text-[112px]">
              Build the future,
              <br />
              <span className="font-light italic text-[#e8132f]">one role</span> at a time.
            </h1>

            <div className="mt-10 flex flex-col gap-8 border-t border-[#e6e4dc] pt-8 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-xl text-base leading-7 text-[#2a2f3f] md:text-[17px]">
                Join YAKSERA's world-class team of engineers, designers and strategists building cutting-edge IT solutions for startups and mid-market businesses worldwide.
              </p>

              <div className="grid grid-cols-3 gap-7 md:gap-12">
                {[
                  ['42+', 'Team Members'],
                  ['12', 'Countries'],
                  ['4.9★', 'Glassdoor'],
                ].map(([number, label]) => (
                  <div key={label} className="lg:text-right">
                    <div className="font-serif text-4xl leading-none tracking-[-0.03em] text-[#0a1f4d] md:text-5xl">
                      {number}
                    </div>
                    <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#5a5f6f]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 md:px-8">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex overflow-x-auto rounded-full border border-[#e6e4dc] bg-white p-1.5 shadow-sm">
                {tabs.map((tab) => (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.value)
                      const firstJob = jobs.find((job) => tab.value === 'All' || job.category === tab.value)
                      if (firstJob) setSelectedId(firstJob.id)
                    }}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                      activeTab === tab.value
                        ? 'bg-[#0a1f4d] text-white'
                        : 'text-[#2a2f3f] hover:bg-[#f4f3ee]'
                    }`}
                  >
                    {tab.label}
                    <span
                      className={`font-mono text-[11px] ${
                        activeTab === tab.value ? 'text-white/60' : 'text-[#5a5f6f]'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              <label className="flex w-full items-center gap-2.5 rounded-full border border-[#e6e4dc] bg-white px-4 py-3 shadow-sm lg:w-[280px]">
                <Icon name="search" className="h-4 w-4 text-[#5a5f6f]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  type="text"
                  placeholder="Search roles, skills, location…"
                  className="w-full bg-transparent text-sm text-[#0a0f1f] outline-none placeholder:text-[#5a5f6f]"
                />
              </label>
            </div>
          </div>
        </section>

        <section className="px-5 pb-16 md:px-8 lg:pb-24">
          <div className="mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div className="flex flex-col gap-3">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => {
                  const isSelected = selectedJob.id === job.id

                  return (
                    <article
                      key={job.id}
                      onClick={() => setSelectedId(job.id)}
                      className={`group relative cursor-pointer overflow-hidden rounded-[20px] border p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(10,31,77,0.06)] ${
                        isSelected
                          ? 'border-[#0a1f4d] bg-[#0a1f4d] text-white'
                          : 'border-[#e6e4dc] bg-white text-[#0a0f1f] hover:border-[#d8d6cc]'
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-0 h-full w-[3px] origin-top bg-[#e8132f] transition-transform duration-300 ${
                          isSelected ? 'scale-y-100' : 'scale-y-0'
                        }`}
                      />

                      <div className="mb-4 flex items-start justify-between gap-4">
                        <div className="flex flex-1 gap-3.5">
                          <div
                            className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition ${
                              isSelected ? 'bg-white/10 text-white' : 'bg-[#f4f3ee] text-[#0a1f4d]'
                            }`}
                          >
                            <Icon name={job.icon} className="h-5.5 w-5.5" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div
                              className={`mb-1.5 font-mono text-[11px] uppercase tracking-[0.1em] ${
                                isSelected ? 'text-white/50' : 'text-[#5a5f6f]'
                              }`}
                            >
                              {job.department} · {job.level}
                            </div>
                            <h3 className="font-serif text-[22px] font-medium leading-tight tracking-[-0.02em]">
                              {job.title}
                            </h3>
                          </div>
                        </div>

                        <div
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition duration-300 group-hover:-rotate-45 group-hover:bg-[#e8132f] group-hover:text-white ${
                            isSelected ? '-rotate-45 bg-[#e8132f] text-white' : 'bg-[#f4f3ee] text-[#5a5f6f]'
                          }`}
                        >
                          <Icon name="arrow" className="h-3.5 w-3.5" />
                        </div>
                      </div>

                      <div
                        className={`mb-4 flex flex-wrap gap-4 text-[13px] ${
                          isSelected ? 'text-white/70' : 'text-[#2a2f3f]'
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5">
                          <Icon name="location" className="h-3.5 w-3.5 opacity-70" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Icon name="user" className="h-3.5 w-3.5 opacity-70" />
                          {job.experience}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Icon name="clock" className="h-3.5 w-3.5 opacity-70" />
                          {job.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-md border px-2.5 py-1 font-mono text-[11px] font-medium tracking-[0.02em] ${
                              isSelected
                                ? 'border-white/10 bg-white/10 text-white/90'
                                : 'border-[#e6e4dc] bg-[#f4f3ee] text-[#2a2f3f]'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  )
                })
              ) : (
                <div className="rounded-3xl border border-[#e6e4dc] bg-white p-8 text-center text-[#5a5f6f]">
                  No roles found. Try another search.
                </div>
              )}
            </div>

            <aside className="lg:sticky lg:top-8 lg:self-start">
              <div className="overflow-hidden rounded-3xl border border-[#e6e4dc] bg-white shadow-[0_4px_32px_rgba(10,31,77,0.04)]">
                <div className="border-b border-[#e6e4dc] bg-[radial-gradient(circle_at_100%_0%,rgba(232,19,47,0.04),transparent_50%)] p-6 md:p-8">
                  <div className="mb-6 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="grid h-[58px] w-[58px] shrink-0 place-items-center rounded-2xl bg-[#0a1f4d] text-white">
                        <Icon name={selectedJob.icon} className="h-6.5 w-6.5" />
                      </div>
                      <div>
                        <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.12em] text-[#e8132f]">
                          {selectedJob.department} · {selectedJob.level} Level
                        </div>
                        <h2 className="font-serif text-3xl font-medium leading-tight tracking-[-0.02em] text-[#0a0f1f]">
                          {selectedJob.title}
                        </h2>
                      </div>
                    </div>

                    <a
                      href="#apply"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#0a0f1f] px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#e8132f]"
                    >
                      Apply <span>→</span>
                    </a>
                  </div>

                  <div className="mb-5 grid overflow-hidden rounded-2xl border border-[#e6e4dc] bg-[#e6e4dc] md:grid-cols-3">
                    {[
                      ['Location', selectedJob.location, 'location'],
                      ['Experience', selectedJob.experience, 'user'],
                      ['Type', selectedJob.type, 'clock'],
                    ].map(([label, value, icon]) => (
                      <div key={label} className="bg-[#fafaf7] p-4">
                        <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[#5a5f6f]">
                          {label}
                        </div>
                        <div className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0a0f1f]">
                          <Icon name={icon} className="h-3.5 w-3.5" />
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {[...selectedJob.tags, ...selectedJob.extraTags].map((tag, index) => (
                      <span
                        key={tag}
                        className={`rounded-md px-3 py-1.5 font-mono text-[11px] font-medium ${
                          index < 2
                            ? 'bg-[#0a1f4d] text-white'
                            : 'border border-[#e6e4dc] bg-[#f4f3ee] text-[#0a0f1f]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="mb-8 border-l-2 border-[#e8132f] pl-5 font-serif text-lg italic leading-7 text-[#2a2f3f]">
                    “{selectedJob.quote}”
                  </p>

                  <DetailSection title="About the Role">
                    <p className="text-[15px] leading-7 text-[#2a2f3f]">{selectedJob.about}</p>
                  </DetailSection>

                  <DetailSection title="What You'll Do">
                    <Checklist items={selectedJob.responsibilities} />
                  </DetailSection>

                  <DetailSection title="What We're Looking For" className="mb-0">
                    <Checklist items={selectedJob.requirements} />
                  </DetailSection>
                </div>

                <div id="apply" className="border-t border-[#e6e4dc] bg-gradient-to-b from-[#fafaf7] to-[#f4f3ee] p-6 md:p-8">
                  <a
                    href="mailto:careers@yaksera.com"
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-[#e8132f] px-6 py-4 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(232,19,47,0.25)] transition hover:-translate-y-0.5 hover:bg-[#c40d24] hover:shadow-[0_12px_32px_rgba(232,19,47,0.35)]"
                  >
                    Apply for this role
                    <Icon name="arrow" className="h-4.5 w-4.5" />
                  </a>
                  <div className="mt-3 flex justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.05em] text-[#5a5f6f]">
                    <span>Posted · {selectedJob.posted}</span>
                    <span>Ref · {selectedJob.ref}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-5 pb-16 md:px-8">
          <div className="mx-auto max-w-[1320px]">
            <div className="relative grid overflow-hidden rounded-[32px] bg-[#0a1f4d] p-8 text-white before:absolute before:-right-16 before:-top-40 before:h-[500px] before:w-[500px] before:bg-[radial-gradient(circle,rgba(232,19,47,0.25)_0%,transparent_60%)] md:p-14 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-12">
              <div className="relative z-10">
                <h2 className="mb-4 font-serif text-4xl font-normal leading-tight tracking-[-0.03em] md:text-5xl">
                  Don't see your <span className="italic text-[#ff3a52]">perfect role?</span>
                </h2>
                <p className="max-w-xl text-base leading-7 text-white/70">
                  We're always looking for exceptional talent. Send us your portfolio or résumé and we'll keep you in mind for future openings that match your skills.
                </p>
              </div>

              <div className="relative z-10 mt-8 flex flex-col gap-3 lg:mt-0">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <div className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">
                    Drop us a line
                  </div>
                  <div className="text-lg font-medium text-white">careers@yaksera.com</div>
                </div>

                <a
                  href="mailto:careers@yaksera.com"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#e8132f] px-6 py-4 text-sm font-medium text-white shadow-[0_4px_14px_rgba(232,19,47,0.3)] transition hover:-translate-y-0.5 hover:bg-[#c40d24] hover:shadow-[0_8px_20px_rgba(232,19,47,0.4)]"
                >
                  Submit Open Application
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function DetailSection({ title, children, className = '' }) {
  return (
    <section className={`mb-7 ${className}`}>
      <div className="mb-3.5 flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#e8132f] before:h-px before:w-6 before:bg-[#e8132f]">
        {title}
      </div>
      {children}
    </section>
  )
}

function Checklist({ items }) {
  return (
    <ul className="flex list-none flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="relative pl-7 text-[14.5px] leading-6 text-[#2a2f3f]">
          <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border border-[#e6e4dc] bg-[#f4f3ee] after:absolute after:left-[5px] after:top-[5px] after:h-[3px] after:w-[6px] after:-rotate-45 after:border-b-[1.5px] after:border-l-[1.5px] after:border-[#e8132f]" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default Hire