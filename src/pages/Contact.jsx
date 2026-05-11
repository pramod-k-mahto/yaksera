import React from "react";

function Contact() {
  return (
    <div className="bg-white min-h-screen font-sans">

      {/* Header */}
      <div className="text-center py-4 border-b border-gray-100 px-4">
        <p className="text-red-600 font-bold text-base sm:text-lg font-montserrat">
          Need Immediate assistance?
        </p>
        <p className="text-gray-500 text-xs sm:text-sm">
          Let's make things happen—your goals, our expertise!
        </p>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">

        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-40 sm:w-72 lg:w-96 h-40 sm:h-56 lg:h-64 bg-blue-50 rounded-full opacity-50 blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-40 sm:w-64 lg:w-80 h-40 sm:h-64 lg:h-80 bg-blue-50 rounded-full opacity-40 blur-3xl -z-10" />

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

          {/* LEFT */}
          <div className="flex-1">

            {/* Icon */}
            <div className="w-14 sm:w-16 h-14 sm:h-16 mb-4">
              <svg viewBox="0 0 80 80" fill="none">
                <path d="M40 10 L70 27 L70 55 L40 72 L10 55 L10 27 Z"
                  stroke="#F4B942" strokeWidth="2" />
                <path d="M40 10 L40 40 M40 40 L70 27 M40 40 L10 27 M40 40 L40 72"
                  stroke="#F4B942" strokeWidth="1.5" opacity="0.6" />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
              Let's Build Something
            </h1>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-red-600 leading-tight mb-6">
              Extraordinary
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              We're here to help you achieve your business goals. Whether you have questions,
              want collaboration, or need guidance, we'd love to hear from you!
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8 sm:mb-10">

              {[
                { icon: "email", text: "yaksera@gmail.com" },
                { icon: "phone", text: "+977-98412345789" },
                { icon: "location", text: "Kathmandu, Nepal" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-gray-600 text-sm">●</span>
                  <span className="font-semibold text-gray-800 text-sm sm:text-base">
                    {item.text}
                  </span>
                </div>
              ))}

            </div>

            {/* Presence */}
            <div className="border border-orange-200 rounded-2xl overflow-hidden w-full max-w-md">

              <div className="p-4 sm:p-5">

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                  Our Presence
                </h3>

                {/* Map */}
                <div className="rounded-xl h-36 sm:h-44 flex items-center justify-center mb-4 bg-gray-800">
                  <div className="w-3 h-3 bg-white rounded-full relative">
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-70" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                  <p className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Nepal / India / UK / Canada / Australia
                  </p>

                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* RIGHT - FORM */}
          <div className="w-full lg:w-[450px] bg-white rounded-3xl shadow-xl p-5 sm:p-8 border border-gray-100">

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
              Contact Form
            </h2>

            <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-7">
              Fill out the form and we'll respond soon.
            </p>

            <div className="space-y-4 sm:space-y-5">

              {/* Name */}
              <input className="w-full border rounded-xl px-4 py-3 text-sm"
                placeholder="Full name *" />

              {/* Email */}
              <input className="w-full border rounded-xl px-4 py-3 text-sm"
                placeholder="Business email *" />

              {/* Phone */}
              <div className="flex gap-2">
                <div className="border rounded-xl px-3 py-3 bg-gray-50 text-sm">
                  +977
                </div>
                <input className="flex-1 border rounded-xl px-4 py-3 text-sm"
                  placeholder="Phone number" />
              </div>

              {/* Budget */}
              <select className="w-full border rounded-xl px-4 py-3 text-sm">
                <option>Select budget</option>
                <option>$500 - $2,000</option>
                <option>$2,000 - $5,000</option>
                <option>$5,000+</option>
              </select>

              {/* Message */}
              <textarea rows={4}
                className="w-full border rounded-xl px-4 py-3 text-sm resize-none"
                placeholder="Project details"
              />

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">

                <button className="flex-1 bg-red-600 text-white py-3 rounded-xl text-sm font-semibold">
                  Send Message
                </button>

                <button className="flex-1 border border-red-600 text-red-600 py-3 rounded-xl text-sm font-semibold">
                  Book a Call
                </button>

              </div>

              <p className="text-center text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest pt-2">
                Response within 12 hours
              </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;