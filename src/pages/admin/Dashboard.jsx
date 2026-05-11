import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

import {
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
  {
    section: "CONTENT",
    items: [
      { label: "Blog", path: "blogManagement", icon: FileText },
      { label: "Portfolio", path: "portfolioManagement", icon: Briefcase },
      { label: "Projects", path: "projectsManagement", icon: FolderKanban },
      { label: "Case Studies", path: "caseStudiesManagement", icon: Briefcase },
    ],
  },
  {
    section: "USERS",
    items: [
      { label: "Clients", path: "clientsManagement", icon: Users },
      { label: "Staff", path: "staffManagement", icon: Users },
      { label: "Job Applied", path: "jobApplied", icon: BadgeCheck },
    ],
  },
  {
    section: "BUSINESS",
    items: [
      { label: "Services", path: "serviceManagement", icon: Settings },
      { label: "Vacancies", path: "vacancyManagement", icon: Briefcase },
      { label: "Testimonials", path: "testimonialManagement", icon: MessageSquare },
      { label: "Contact", path: "contactFormManagement", icon: MessageSquare },
      { label: "Logos", path: "logoManagement", icon: BadgeCheck },
      { label: "Q&A", path: "qAManagement", icon: MessageSquare },
    ],
  },
];

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(280);

  const min = 80;
  const max = 320;

  const startDrag = (e) => {
    const startX = e.clientX;
    const startWidth = width;

    const onMove = (moveEvent) => {
      const newWidth = startWidth + (moveEvent.clientX - startX);
      if (newWidth >= min && newWidth <= max) {
        setWidth(newWidth);
        if (newWidth < 120) setCollapsed(true);
        else setCollapsed(false);
      }
    };

    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  return (
    <div className="flex h-screen bg-[#0b1220] text-white overflow-hidden">

      {/* SIDEBAR */}
      <motion.aside
        animate={{ width: collapsed ? 80 : width }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative h-full bg-[#0f172a] border-r border-white/10 flex flex-col"
      >

        {/* HEADER */}
        <div className="flex items-center justify-between h-[72px] px-4 border-b border-white/10">
          {!collapsed && (
            <div>
              <h1 className="text-sm font-semibold">Admin</h1>
              <p className="text-xs text-white/40">Panel</p>
            </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white/60 hover:text-white"
          >
            {collapsed ? <Menu size={18} /> : <X size={18} />}
          </button>
        </div>

        {/* NAV (NO SCROLL) */}
        <div className="flex-1 overflow-hidden px-2 py-4 space-y-6">

          {navItems.map((group) => (
            <div key={group.section}>
              {!collapsed && (
                <p className="text-[10px] text-white/30 px-3 mb-2 tracking-widest">
                  {group.section}
                </p>
              )}

              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `
                        flex items-center gap-3 px-3 py-3 rounded-xl
                        transition
                        ${
                          isActive
                            ? "text-[#e8192c]"
                            : "text-white/60 hover:text-white"
                        }
                        `
                      }
                    >
                      <Icon size={18} />

                      {!collapsed && (
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* RESIZE HANDLE */}
        {!collapsed && (
          <div
            onMouseDown={startDrag}
            className="absolute top-0 right-0 h-full w-1 cursor-ew-resize hover:bg-[#e8192c]/40"
          />
        )}
      </motion.aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <div className="h-[72px] border-b border-white/10 flex items-center px-5 justify-between">
          <button
            className="text-white/60 md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>

          <h2 className="text-sm text-white/60">Dashboard</h2>

          <div className="text-xs text-white/40">Admin</div>
        </div>

        {/* CONTENT */}
        <div className="p-6 overflow-hidden">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;