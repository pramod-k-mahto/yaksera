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

// ── pricing data ───────────────────────────────────────────────────────────────
const plans = [
  {
    title: "Web Development",
    subtitle: "Landing pages, dashboards, SaaS platforms.",
    price: "Rs.10,000–Rs.25,000+",
    popular: true,
    dark: true,
    features: [
      "Front-end development",
      "Back-end development",
      "User experience",
      "Visual assets",
      "Layout and navigation",
      "Engaging content",
      "Front-end development",
      "Back-end development",
    ],
  },
  {
    title: "Mobile App Development",
    subtitle: "MVMs, full apps, Flutter/React Native.",
    price: "Rs.10,000–Rs.25,000+",
    features: [
      "User-Centric Design",
      "Robust Security Measures",
      "Scalability and Flexibility",
      "Visual assets",
      "Layout and navigation",
      "Engaging content",
      "Front-end development",
      "Back-end development",
    ],
  },
  {
    title: "Software Development",
    subtitle: "Enterprise systems, integrations, APIs.",
    price: "Rs.50,000–Rs.75,000+",
    features: [
      "User-Centric Design",
      "Robust Security Measures",
      "Scalability and Flexibility",
      "Visual assets",
      "Layout and navigation",
      "Engaging content",
      "Front-end development",
      "Back-end development",
    ],
  },
  {
    title: "Digital Marketing",
    subtitle: "Enterprise systems, integrations, APIs.",
    price: "Rs.50,000–Rs.75,000+",
    features: [
      "User-Centric Design",
      "Robust Security Measures",
      "Scalability and Flexibility",
      "Visual assets",
      "Layout and navigation",
      "Engaging content",
      "Front-end development",
      "Back-end development",
    ],
  },
  {
    title: "Mobile App Development",
    subtitle: "MVMs, full apps, Flutter/React Native.",
    price: "Rs.10,000–Rs.25,000+",
    features: [
      "User-Centric Design",
      "Robust Security Measures",
      "Scalability and Flexibility",
      "Visual assets",
      "Layout and navigation",
      "Engaging content",
      "Front-end development",
      "Back-end development",
    ],
  },
  {
    title: "Software Development",
    subtitle: "Enterprise systems, integrations, APIs.",
    price: "Rs.50,000–Rs.75,000+",
    features: [
      "User-Centric Design",
      "Robust Security Measures",
      "Scalability and Flexibility",
      "Visual assets",
      "Layout and navigation",
      "Engaging content",
      "Front-end development",
      "Back-end development",
    ],
  },
];

// ── chevron icon ───────────────────────────────────────────────────────────────
const Chevron = ({ dark }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
    stroke={dark ? "#fff" : "#e8192c"}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 4l4 4-4 4" />
  </svg>
);

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

// ── pricing card ───────────────────────────────────────────────────────────────
function PricingCard({ plan, index }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index * 0.08}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="relative rounded-3xl overflow-hidden flex flex-col"
      style={{
        background: plan.dark ? "#0d1f4e" : "#fff",
        border: plan.dark ? "none" : "1.5px solid #e5e7eb",
        boxShadow: plan.dark
          ? "0 20px 50px rgba(13,31,78,0.25)"
          : "0 4px 20px rgba(0,0,0,0.06)",
      }}
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="bg-red-600 text-white text-[10px] font-black tracking-widest px-5 py-1 rounded-b-full">
            Most Popular
          </div>
        </div>
      )}
      <div className="p-6 pt-10 flex flex-col flex-1">
        <h3
          className="text-base font-extrabold text-center"
          style={{ color: plan.dark ? "#fff" : "#0d1f4e" }}
        >
          {plan.title}
        </h3>
        <p
          className="text-xs text-center mt-1 mb-3"
          style={{ color: plan.dark ? "#94a3b8" : "#6b7280" }}
        >
          {plan.subtitle}
        </p>
        <p
          className="text-center font-black text-lg mb-4"
          style={{ color: plan.dark ? "#fff" : "#0d1f4e" }}
        >
          {plan.price}
        </p>
        <div className="flex gap-2 mb-5">
          <button
            className="flex-1 h-9 rounded-full text-xs font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: "#e8192c" }}
          >
            Get Quote
          </button>
          <button
            className="flex-1 h-9 rounded-full text-xs font-bold border transition-colors hover:bg-red-50"
            style={{
              border: plan.dark ? "1.5px solid #fff" : "1.5px solid #e8192c",
              color: plan.dark ? "#fff" : "#e8192c",
            }}
          >
            Learn More
          </button>
        </div>
        <div
          className="mb-4"
          style={{
            height: "1px",
            background: plan.dark ? "rgba(255,255,255,0.1)" : "#f3f4f6",
          }}
        />
        <ul className="space-y-2 flex-1">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <Chevron dark={plan.dark} />
              <span
                className="text-xs leading-relaxed"
                style={{ color: plan.dark ? "#cbd5e1" : "#374151" }}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
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

  const validate = () => {
    const e = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2)
      e.fullName = "Full name must be at least 2 characters.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.projectBudget) e.projectBudget = "Please select a budget range.";
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
      return;
    }

    setLoading(true);
    try {
      // ── build payload matching the backend schema ──
      const payload = {
        fullName: form.fullName.trim(),
        email: form.email.trim().toLowerCase(),
        phone: {
          countryCode: "+977",
          number: form.phone.trim(),
        },
        projectBudget: form.projectBudget,
        projectDetails: form.projectDetails.trim(),
      };

      const res = await submitContact(payload);
      showToast(res.message, "success");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        projectBudget: "",
        projectDetails: "",
      });
      setErrors({});
    } catch (err) {
      showToast(err.message || "Failed to send. Please try again.", "error");
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

      {/* PRICING */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <motion.div
          className="text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center border border-red-400 rounded-full px-4 py-1 text-xs text-red-600 font-semibold mb-3">
            Pricing Plans
          </span>
          <h2 className="text-3xl font-extrabold text-[#0d1f4e]">
            Choose the Right Plan
          </h2>
          <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
            Transparent pricing for every stage of your business journey.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <PricingCard key={`${plan.title}-${i}`} plan={plan} index={i} />
          ))}
        </div>
      </section>

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
                { icon: "✉", label: "yaksera@gmail.com" },
                { icon: "📞", label: "+977-98412345789" },
                { icon: "📍", label: "Kathmandu, Nepal" },
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

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-[#0d1f4e]">
                  Phone
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 h-12 px-3 border border-gray-200 rounded-xl bg-gray-50 text-sm font-semibold text-gray-600 flex-shrink-0">
                    +977
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="w-3 h-3"
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

              {/* Budget */}
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-[#0d1f4e]">
                  Project Budget <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    name="projectBudget"
                    value={form.projectBudget}
                    onChange={handle}
                    className={`w-full h-12 px-4 pr-10 text-sm border rounded-xl outline-none focus:ring-2 focus:ring-red-100 transition-all appearance-none bg-white
                      ${errors.projectBudget ? "border-red-400 text-gray-700" : "border-gray-200 focus:border-red-400 text-gray-500"}`}
                  >
                    <option value="">Select a range</option>
                    <option>Rs. 10,000 – Rs. 25,000</option>
                    <option>Rs. 25,000 – Rs. 50,000</option>
                    <option>Rs. 50,000 – Rs. 75,000</option>
                    <option>Rs. 75,000+</option>
                  </select>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                    stroke="#9ca3af"
                    strokeWidth="2"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <FieldError msg={errors.projectBudget} />
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
