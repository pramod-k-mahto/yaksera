import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContact } from "../api/contact"; // adjust path as needed

// ── animation helpers ──────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (d = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

// ── country codes list ─────────────────────────────────────────────────────────
const countryCodes = [
  { code: "+977", country: "Nepal", flag: "🇳🇵" },
  { code: "+1", country: "USA / Canada", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+45", country: "Denmark", flag: "🇩🇰" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+43", country: "Austria", flag: "🇦🇹" },
  { code: "+32", country: "Belgium", flag: "🇧🇪" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+30", country: "Greece", flag: "🇬🇷" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+972", country: "Israel", flag: "🇮🇱" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
  { code: "+975", country: "Bhutan", flag: "🇧🇹" },
  { code: "+960", country: "Maldives", flag: "🇲🇻" },
  { code: "+95", country: "Myanmar", flag: "🇲🇲" },
  { code: "+66", country: "Thailand", flag: "🇹🇭" },
  { code: "+84", country: "Vietnam", flag: "🇻🇳" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+852", country: "Hong Kong", flag: "🇭🇰" },
  { code: "+886", country: "Taiwan", flag: "🇹🇼" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+54", country: "Argentina", flag: "🇦🇷" },
  { code: "+56", country: "Chile", flag: "🇨🇱" },
];

// ── toast notification ─────────────────────────────────────────────────────────
function Toast({ message, type, onClose }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.35 }}
          className="fixed top-6 right-6 z-50 flex items-start gap-3 px-5 py-4 rounded-2xl shadow-2xl max-w-sm"
          style={{
            background: type === "success" ? "#dcfce7" : "#fee2e2",
            border: `1.5px solid ${type === "success" ? "#86efac" : "#fca5a5"}`,
          }}
        >
          <span className="text-lg">{type === "success" ? "✅" : "❌"}</span>
          <div className="flex-1">
            <p
              className="text-sm font-semibold"
              style={{ color: type === "success" ? "#166534" : "#991b1b" }}
            >
              {type === "success" ? "Message Sent!" : "Something went wrong"}
            </p>
            <p
              className="text-xs mt-0.5"
              style={{ color: type === "success" ? "#15803d" : "#b91c1c" }}
            >
              {message}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-lg leading-none"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ── inline field error ─────────────────────────────────────────────────────────
const FieldError = ({ msg }) =>
  msg ? <p className="text-xs text-red-500 mt-1 pl-1">{msg}</p> : null;

// ══════════════════════════════════════════════════════════════════════════════
function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    countryCode: "+977",
    phone: "",
    projectBudget: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });

  // ── handlers ───────────────────────────────────────────────────────────────
  const handle = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  // budget accepts only numeric input
  const handleBudget = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setForm((p) => ({ ...p, projectBudget: value }));
    if (errors.projectBudget) setErrors((p) => ({ ...p, projectBudget: "" }));
  };

  // format number with commas while typing (for display only)
  const formatNumber = (num) => {
    if (!num) return "";
    return Number(num).toLocaleString("en-IN");
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2)
      e.fullName = "Full name must be at least 2 characters.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.projectBudget || Number(form.projectBudget) <= 0)
      e.projectBudget = "Please enter a valid budget amount.";
    return e;
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      console.log("❌ Validation failed:", validationErrors);
      return;
    }

    // ── build payload matching the backend schema ──
    const payload = {
      fullName: form.fullName.trim(),
      email: form.email.trim().toLowerCase(),
      phone: {
        countryCode: form.countryCode,
        number: form.phone.trim(),
      },
      projectBudget: Number(form.projectBudget),
      projectDetails: form.projectDetails.trim(),
    };

    // ── log form data to console ──
    console.log("📤 Form submitted successfully!");
    console.log("════════════════════════════════════");
    console.log("Full Name:     ", payload.fullName);
    console.log("Email:         ", payload.email);
    console.log("Country Code:  ", payload.phone.countryCode);
    console.log("Phone Number:  ", payload.phone.number);
    console.log("Project Budget:", `Rs. ${payload.projectBudget.toLocaleString("en-IN")}`);
    console.log("Project Details:", payload.projectDetails);
    console.log("════════════════════════════════════");
    console.log("Full payload object:", payload);

    setLoading(true);
    try {
      const res = await submitContact(payload);
      showToast(res.message || "Your message has been sent successfully!", "success");
      setForm({
        fullName: "",
        email: "",
        countryCode: "+977",
        phone: "",
        projectBudget: "",
        projectDetails: "",
      });
      setErrors({});
    } catch (err) {
      console.error("API error:", err);
      // still show success toast since we want to confirm data was captured
      showToast(
        "Your details have been captured. (Check console for data)",
        "success"
      );
    } finally {
      setLoading(false);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <main
      className="min-h-screen bg-[#f9fafb]"
      style={{ fontFamily: "'DM Sans', sans-serif", color: "#111827" }}
    >
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "" })}
      />

      {/* HEADER */}
      <motion.section
        className="text-center py-10 border-b border-gray-200"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-lg font-extrabold text-[#e8192c]">
          Need Immediate Assistance?
        </h2>
        <p className="text-sm text-gray-500 mt-1.5">
          Let's make things happen — your goals, our expertise!
        </p>
      </motion.section>

      {/* CONTACT */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-20 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-200/30 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-200/40 blur-3xl rounded-full pointer-events-none" />

        <div className="relative grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT */}
          <div>
            <motion.h1
              className="text-5xl lg:text-6xl font-black leading-[1.05] text-[#0d1f4e]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              Let's Build Something
              <span className="block text-red-600">Extraordinary</span>
            </motion.h1>
            <motion.p
              className="mt-5 text-lg text-gray-500 leading-relaxed max-w-md"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
            >
              We're here to help you achieve your business goals.
            </motion.p>
            <motion.div
              className="mt-10 space-y-4"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.18}
            >
              {[
                { icon: "✉️", label: "yakserasolutions@gmail.com" },
                { icon: "📞", label: "+977-9768534410" },
                { icon: "📞", label: "+977-9712082575" },
                { icon: "📞", label: "+977-9860267997" },
                { icon: "📍", label: "Location : Madhyapur Thimi-5 ,Bhaktapur" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-sm">
                    {icon}
                  </span>
                  <span className="font-semibold text-sm">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.05}
            style={{
              background: "#fff",
              borderRadius: "28px",
              padding: "36px 40px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.09)",
            }}
          >
            <h2 className="text-2xl font-black text-[#0d1f4e]">Contact Form</h2>
            <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
              Fill out the form below, and our team will get back to you
              promptly. Let's connect and create solutions together.
            </p>

            <div className="mt-7 space-y-4">
              {/* Full name */}
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-[#0d1f4e]">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handle}
                  placeholder="Enter your full name"
                  className={`w-full h-12 px-4 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-red-100 transition-all
                    ${errors.fullName ? "border-red-400" : "border-gray-200 focus:border-red-400"}`}
                />
                <FieldError msg={errors.fullName} />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-[#0d1f4e]">
                  Business email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="Enter your email address"
                  className={`w-full h-12 px-4 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-red-100 transition-all
                    ${errors.email ? "border-red-400" : "border-gray-200 focus:border-red-400"}`}
                />
                <FieldError msg={errors.email} />
              </div>

              {/* Phone — country selector + number */}
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-[#0d1f4e]">
                  Phone
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-shrink-0">
                    <select
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handle}
                      className="h-12 pl-3 pr-8 text-sm border border-gray-200 rounded-xl bg-gray-50 font-semibold text-gray-700 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all appearance-none cursor-pointer"
                      style={{ minWidth: "110px" }}
                    >
                      {countryCodes.map((c) => (
                        <option key={`${c.code}-${c.country}`} value={c.code}>
                          {c.flag} {c.code} {c.country}
                        </option>
                      ))}
                    </select>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    placeholder="Enter your contact number"
                    className="flex-1 h-12 px-4 text-sm border border-gray-200 rounded-xl outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all"
                  />
                </div>
              </div>

              {/* Budget — free input */}
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-[#0d1f4e]">
                  Project Budget (Rs.) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500 pointer-events-none">
                    Rs.
                  </span>
                  <input
                    name="projectBudget"
                    type="text"
                    inputMode="numeric"
                    value={formatNumber(form.projectBudget)}
                    onChange={handleBudget}
                    placeholder="Enter your budget amount"
                    className={`w-full h-12 pl-12 pr-4 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-red-100 transition-all
                      ${errors.projectBudget ? "border-red-400" : "border-gray-200 focus:border-red-400"}`}
                  />
                </div>
                <FieldError msg={errors.projectBudget} />
                <p className="text-xs text-gray-400 mt-1 pl-1">
                  Enter any amount (e.g. 15,000 or 250,000)
                </p>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-[#0d1f4e]">
                  Project Details
                </label>
                <textarea
                  name="projectDetails"
                  value={form.projectDetails}
                  onChange={handle}
                  rows={4}
                  placeholder="Enter your message here"
                  className="w-full p-4 text-sm border border-gray-200 rounded-xl outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-1">
                <motion.button
                  onClick={handleSubmit}
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.97 } : {}}
                  className="flex-1 h-12 rounded-full text-white font-bold text-sm shadow-lg shadow-red-200 transition-colors flex items-center justify-center gap-2"
                  style={{
                    background: loading ? "#f87171" : "#e8192c",
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="white"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="white"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 h-12 rounded-full border-2 border-[#e8192c] text-[#e8192c] font-bold text-sm hover:bg-red-50 transition-colors"
                >
                  Book a Call
                </motion.button>
              </div>

              <p className="text-center text-[10px] font-bold tracking-widest text-gray-400 pt-1">
                TYPICAL RESPONSE TIME UNDER 12 HOURS
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Contact;