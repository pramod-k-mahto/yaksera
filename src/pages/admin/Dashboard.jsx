import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

import {
  LayoutDashboard,
  FileText,
  Users,
  Briefcase,
  MessageSquare,
  Settings,
  FolderKanban,
  BadgeCheck,
  Menu,
  X,
} from "lucide-react";

const navItems = [
//   {
//     section: "MAIN",
//     items: [
//       {
//         label: "Dashboard",
//         path: "/admin",
//         icon: LayoutDashboard,
//       },
//     ],
//   },

  {
    section: "CONTENT",
    items: [
      {
        label: "Blog Management",
        path: "blogManagement",
        icon: FileText,
      },
      {
        label: "Portfolio",
        path: "portfolioManagement",
        icon: Briefcase,
      },
      {
        label: "Projects",
        path: "projectsManagement",
        icon: FolderKanban,
      },
      {
        label: "Case Studies",
        path: "caseStudiesManagement",
        icon: Briefcase,
      },
    ],
  },

  {
    section: "USERS",
    items: [
      {
        label: "Clients",
        path: "clientsManagement",
        icon: Users,
      },
      {
        label: "Staff",
        path: "staffManagement",
        icon: Users,
      },
      {
        label: "Job Applied",
        path: "jobApplied",
        icon: BadgeCheck,
      },
    ],
  },

  {
    section: "BUSINESS",
    items: [
      {
        label: "Services",
        path: "serviceManagement",
        icon: Settings,
      },
      {
        label: "Vacancies",
        path: "vacancyManagement",
        icon: Briefcase,
      },
      {
        label: "Testimonials",
        path: "testimonialManagement",
        icon: MessageSquare,
      },
      {
        label: "Contact Forms",
        path: "contactFormManagement",
        icon: MessageSquare,
      },
      {
        label: "Logos",
        path: "logoManagement",
        icon: BadgeCheck,
      },
      {
        label: "Q&A Management",
        path: "qAManagement",
        icon: MessageSquare,
      },
    ],
  },
];

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0b1220] text-white overflow-hidden">

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed inset-0 z-40
            bg-black/50 backdrop-blur-sm
            md:hidden
          "
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          h-screen w-[280px]
          border-r border-white/10
          bg-[#0f172a]
          transition-transform duration-300
          md:translate-x-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* TOP */}
        <div
          className="
            flex h-[72px] items-center justify-between
            border-b border-white/10
            px-6
          "
        >
          <div>
            <h1 className="text-lg font-semibold tracking-wide">
              Yaksera Admin
            </h1>

            <p className="text-xs text-white/40 mt-0.5">
              Management Panel
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              text-white/60
              transition-all duration-200
              hover:bg-white/5
              hover:text-white
              md:hidden
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav
          className="
            h-[calc(100vh-72px)]
            overflow-y-auto
            px-4 py-6
            space-y-7
          "
        >
          {navItems.map((group) => (
            <div key={group.section}>

              {/* SECTION TITLE */}
              <p
                className="
                  mb-2 px-4
                  text-[11px]
                  font-semibold
                  tracking-[0.2em]
                  text-white/30
                "
              >
                {group.section}
              </p>

              {/* ITEMS */}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.path === "/admin"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `
                        group flex items-center gap-3
                        rounded-2xl px-4 py-3
                        transition-all duration-200
                        ${
                          isActive
                            ? "bg-[#e8192c]/15 text-[#e8192c]"
                            : "text-white/65 hover:bg-white/[0.04] hover:text-white"
                        }
                        `
                      }
                    >
                      <Icon
                        size={18}
                        className="
                          transition-all duration-200
                          group-hover:scale-110
                        "
                      />

                      <span
                        className="
                          text-[14px]
                          font-medium
                          tracking-[0.01em]
                        "
                      >
                        {item.label}
                      </span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className="flex flex-1 flex-col md:ml-[280px]">

        {/* HEADER */}
        <header
          className="
            sticky top-0 z-30
            flex h-[72px] items-center justify-between
            border-b border-white/10
            bg-[#0b1220]/95
            px-5 md:px-8
            backdrop-blur-xl
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(true)}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                text-white/70
                transition-all duration-200
                hover:bg-white/5
                hover:text-white
                md:hidden
              "
            >
              <Menu size={20} />
            </button>

            <div>
              <h2 className="text-[15px] font-semibold">
                Dashboard
              </h2>

              <p className="text-xs text-white/40 mt-0.5">
                Welcome back, Admin
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">

            {/* PROFILE */}
            <div
              className="
                flex items-center gap-3
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                px-3 py-2
              "
            >
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  bg-[#e8192c]
                  text-sm font-bold
                "
              >
                A
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-medium">
                  Admin
                </p>

                <p className="text-xs text-white/40">
                  Super Admin
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main
          className="
            flex-1
            p-5 md:p-8 lg:p-10
          "
        >
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-[#0f172a]
              p-6 md:p-8
              min-h-[calc(100vh-140px)]
            "
          >

            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;