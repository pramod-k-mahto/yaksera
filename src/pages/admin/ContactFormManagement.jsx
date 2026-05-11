import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Building2,
  CalendarDays,
  CircleAlert,
  Search,
  Eye,
  Trash2,
  Download,
  Filter,
} from "lucide-react";

const contacts = [
  {
    id: "#CNT-1021",
    name: "Michael Johnson",
    company: "FinEdge",
    email: "michael@finedge.com",
    phone: "+1 202-555-0181",
    service: "ERP Development",
    date: "11 May 2026",
    status: "New",
  },
  {
    id: "#CNT-1022",
    name: "Sarah Williams",
    company: "HealthFlow",
    email: "sarah@healthflow.io",
    phone: "+44 7700 900123",
    service: "UI/UX Design",
    date: "10 May 2026",
    status: "In Review",
  },
  {
    id: "#CNT-1023",
    name: "David Miller",
    company: "BuildCraft",
    email: "david@buildcraft.com",
    phone: "+971 50 123 4567",
    service: "Mobile App",
    date: "09 May 2026",
    status: "Completed",
  },
  {
    id: "#CNT-1024",
    name: "Emily Brown",
    company: "NovaTech",
    email: "emily@novatech.ai",
    phone: "+61 412 123 555",
    service: "AI Integration",
    date: "08 May 2026",
    status: "Pending",
  },
];

const stats = [
  {
    title: "Total Requests",
    value: "1,248",
    icon: Mail,
  },
  {
    title: "New Leads",
    value: "86",
    icon: CircleAlert,
  },
  {
    title: "In Review",
    value: "34",
    icon: CalendarDays,
  },
  {
    title: "Completed",
    value: "912",
    icon: Building2,
  },
];

function ContactFormManagement() {
  return (
    <div className="space-y-8">
      {/* TOP */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-[30px] md:text-[36px]
              font-black tracking-tight
              text-white
            "
          >
            Contact Form Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="
              mt-2
              max-w-2xl
              text-sm md:text-[15px]
              leading-7
              text-white/50
            "
          >
            Manage all incoming client inquiries, leads, project requests,
            consultation bookings, and support conversations from your website.
          </motion.p>
        </div>

        {/* ACTIONS */}
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-wrap gap-3"
        >
          <button
            className="
              flex items-center gap-2
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              px-5 py-3
              text-sm font-semibold text-white/80
              transition-all duration-300
              hover:border-white/20
              hover:bg-white/[0.05]
              hover:text-white
            "
          >
            <Filter size={16} />
            Filter
          </button>

          <button
            className="
              flex items-center gap-2
              rounded-2xl
              bg-[#e8192c]
              px-5 py-3
              text-sm font-semibold text-white
              shadow-[0_10px_30px_rgba(232,25,44,0.28)]
              transition-all duration-300
              hover:-translate-y-[2px]
              hover:shadow-[0_16px_40px_rgba(232,25,44,0.4)]
            "
          >
            <Download size={16} />
            Export Leads
          </button>
        </motion.div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="
                group relative overflow-hidden
                rounded-[28px]
                border border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
              "
            >
              <div
                className="
                  absolute right-0 top-0
                  h-28 w-28
                  translate-x-10 -translate-y-10
                  rounded-full
                  bg-[#e8192c]/10
                  blur-3xl
                "
              />

              <div
                className="
                  flex h-14 w-14 items-center justify-center
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  text-[#e8192c]
                "
              >
                <Icon size={24} />
              </div>

              <div className="mt-6">
                <p className="text-sm text-white/45">
                  {item.title}
                </p>

                <h2
                  className="
                    mt-2
                    text-3xl font-black tracking-tight
                    text-white
                  "
                >
                  {item.value}
                </h2>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* TABLE */}
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="
          overflow-hidden
          rounded-[30px]
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
        "
      >
        {/* HEADER */}
        <div
          className="
            flex flex-col gap-4
            border-b border-white/10
            px-6 py-5
            lg:flex-row lg:items-center lg:justify-between
          "
        >
          <div>
            <h2 className="text-xl font-bold text-white">
              Client Inquiries
            </h2>

            <p className="mt-1 text-sm text-white/45">
              Track all leads and communication requests.
            </p>
          </div>

          {/* SEARCH */}
          <div
            className="
              flex items-center gap-3
              rounded-2xl
              border border-white/10
              bg-[#0f172a]
              px-4 py-3
              lg:w-[340px]
            "
          >
            <Search size={18} className="text-white/40" />

            <input
              type="text"
              placeholder="Search contact requests..."
              className="
                w-full bg-transparent
                text-sm text-white
                outline-none
                placeholder:text-white/30
              "
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b border-white/10">
              <tr className="text-left">
                {[
                  "Client",
                  "Company",
                  "Contact",
                  "Service",
                  "Date",
                  "Status",
                  "Actions",
                ].map((head) => (
                  <th
                    key={head}
                    className="
                      px-6 py-4
                      text-xs font-bold uppercase tracking-[0.18em]
                      text-white/40
                    "
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact, index) => (
                <motion.tr
                  key={contact.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="
                    border-b border-white/5
                    transition-all duration-300
                    hover:bg-white/[0.03]
                  "
                >
                  {/* CLIENT */}
                  <td className="px-6 py-5">
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {contact.name}
                      </h3>

                      <p className="mt-1 text-xs text-white/35">
                        {contact.id}
                      </p>
                    </div>
                  </td>

                  {/* COMPANY */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <Building2
                        size={16}
                        className="text-white/35"
                      />

                      <span className="text-sm text-white/75">
                        {contact.company}
                      </span>
                    </div>
                  </td>

                  {/* CONTACT */}
                  <td className="px-6 py-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail
                          size={14}
                          className="text-white/30"
                        />

                        <span className="text-sm text-white/65">
                          {contact.email}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Phone
                          size={14}
                          className="text-white/30"
                        />

                        <span className="text-sm text-white/45">
                          {contact.phone}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* SERVICE */}
                  <td className="px-6 py-5">
                    <span
                      className="
                        rounded-full
                        border border-[#e8192c]/20
                        bg-[#e8192c]/10
                        px-3 py-1.5
                        text-xs font-semibold
                        text-[#ff7585]
                      "
                    >
                      {contact.service}
                    </span>
                  </td>

                  {/* DATE */}
                  <td className="px-6 py-5">
                    <span className="text-sm text-white/55">
                      {contact.date}
                    </span>
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-5">
                    <span
                      className={`
                        rounded-full px-3 py-1.5
                        text-xs font-semibold
                        ${
                          contact.status === "New"
                            ? "bg-blue-500/10 text-blue-300"
                            : contact.status === "Completed"
                            ? "bg-emerald-500/10 text-emerald-300"
                            : contact.status === "Pending"
                            ? "bg-yellow-500/10 text-yellow-300"
                            : "bg-purple-500/10 text-purple-300"
                        }
                      `}
                    >
                      {contact.status}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <button
                        className="
                          flex h-10 w-10 items-center justify-center
                          rounded-xl
                          border border-white/10
                          text-white/60
                          transition-all duration-300
                          hover:border-[#e8192c]/30
                          hover:bg-[#e8192c]/10
                          hover:text-[#ff6b81]
                        "
                      >
                        <Eye size={17} />
                      </button>

                      <button
                        className="
                          flex h-10 w-10 items-center justify-center
                          rounded-xl
                          border border-white/10
                          text-white/60
                          transition-all duration-300
                          hover:border-red-500/30
                          hover:bg-red-500/10
                          hover:text-red-300
                        "
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

export default ContactFormManagement;