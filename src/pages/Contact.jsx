import React from "react";

function Contact() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: "#f9fafb",
        fontFamily: "Inter, sans-serif",
        color: "#111827",
      }}
    >

      {/* HEADER */}
      <section className="text-center py-10 border-b border-gray-200">

        <h2
          style={{
            color: "#e8192c",
            fontSize: "18px",
            fontWeight: 800,
          }}
        >
          Need Immediate Assistance?
        </h2>

        <p
          style={{
            color: "#6b7280",
            fontSize: "14px",
            marginTop: "6px",
          }}
        >
          Let's make things happen — your goals, our expertise!
        </p>

      </section>

      {/* MAIN */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-20 py-20 overflow-hidden">

        {/* BACKGROUND BLOBS */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gray-200/30 blur-3xl rounded-full" />

        <div className="relative grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <div>

            <h1
              style={{
                fontSize: "56px",
                fontWeight: 900,
                lineHeight: 1.05,
                color: "#0d1f4e",
              }}
            >
              Let's Build Something
              <span style={{ color: "#e8192c", display: "block" }}>
                Extraordinary
              </span>
            </h1>

            <p
              style={{
                marginTop: "20px",
                color: "#6b7280",
                fontSize: "18px",
                lineHeight: 1.8,
                maxWidth: "500px",
              }}
            >
              We're here to help you achieve your business goals.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-10 space-y-4">

              {[
                "yaksera@gmail.com",
                "+977-98412345789",
                "Kathmandu, Nepal",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span style={{ color: "#e8192c" }}>●</span>
                  <span style={{ fontWeight: 600 }}>{item}</span>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT FORM */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "32px",
              padding: "40px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >

            <h2 style={{ fontSize: "24px", fontWeight: 900 }}>
              Contact Form
            </h2>

            <p style={{ color: "#6b7280", marginTop: "6px" }}>
              Fill out the form and we’ll respond soon.
            </p>

            <div className="space-y-4 mt-8">

              <input
                placeholder="Full name"
                className="w-full h-[56px] px-4 border border-gray-300 rounded-xl"
              />

              <input
                placeholder="Business email"
                className="w-full h-[56px] px-4 border border-gray-300 rounded-xl"
              />

              <textarea
                rows={4}
                placeholder="Project details"
                className="w-full p-4 border border-gray-300 rounded-xl"
              />

              <button
                className="w-full h-[56px] rounded-full bg-[#e8192c] text-white font-bold"
              >
                Send Message
              </button>

              <button
                className="w-full h-[56px] rounded-full border border-[#e8192c] text-[#e8192c] font-bold"
              >
                Book a Call
              </button>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;