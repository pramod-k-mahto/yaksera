import React from "react";

function Contact() {
  return (
    <main
      style={{
        background: "var(--page-bg)",
        fontFamily: "var(--font-primary)",
        color: "var(--text-primary-default)",
      }}
      className="min-h-screen"
    >

      {/* HEADER */}
      <section className="text-center py-10 border-b border-gray-200">

        <h2
          style={{
            color: "var(--text-brand-red-default)",
            fontSize: "18px",
            fontWeight: 800,
          }}

          className="text-red-600"
        >
          Need Immediate Assistance?
        </h2>

        <p
          style={{
            color: "var(--text-secondary-default)",
            fontSize: "14px",
            marginTop: "6px",
          }}
        >
          Let's make things happen — your goals, our expertise!
        </p>

      </section>

      {/* MAIN */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-20 py-20">

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
                color: "var(--text-secondary-default)",
                fontSize: "18px",
                lineHeight: 1.8,
                maxWidth: "500px",
              }}
            >
              We're here to help you achieve your business goals. Whether
              it's collaboration, consulting, or project discussion — we’re ready.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-10 space-y-4">

              {[
                "yaksera@gmail.com",
                "+977-98412345789",
                "Kathmandu, Nepal",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span style={{ color: "#e8192c" }}>●</span>
                  <span style={{ fontWeight: 600 }}>{item}</span>
                </div>
              ))}

            </div>

            {/* PRESENCE CARD */}
            <div
              style={{
                marginTop: "40px",
                background: "var(--white)",
                borderRadius: "24px",
                padding: "24px",
                boxShadow: "var(--shadow-md)",
                maxWidth: "420px",
              }}
            >

              <h3 style={{ fontSize: "20px", fontWeight: 800 }}>
                Our Presence
              </h3>

              <div
                style={{
                  marginTop: "16px",
                  height: "140px",
                  background: "#0d1f4e",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    background: "#fff",
                    borderRadius: "50%",
                    position: "relative",
                  }}
                >
                  <div className="absolute inset-0 animate-ping bg-white rounded-full opacity-60" />
                </div>
              </div>

              <p
                style={{
                  marginTop: "16px",
                  fontSize: "12px",
                  color: "var(--text-secondary-default)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Nepal / India / UK / Canada / Australia
              </p>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div
            style={{
              background: "var(--white)",
              borderRadius: "32px",
              padding: "40px",
              boxShadow: "var(--shadow-lg)",
            }}
          >

            <h2 style={{ fontSize: "24px", fontWeight: 900 }}>
              Contact Form
            </h2>

            <p style={{ color: "var(--text-secondary-default)", marginTop: "6px" }}>
              Fill out the form and we’ll respond soon.
            </p>

            <div className="space-y-4 mt-8">

              <input
                placeholder="Full name"
                style={{
                  width: "100%",
                  height: "56px",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  padding: "0 16px",
                }}
              />

              <input
                placeholder="Business email"
                style={{
                  width: "100%",
                  height: "56px",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  padding: "0 16px",
                }}
              />

              <textarea
                rows={4}
                placeholder="Project details"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                  padding: "16px",
                }}
              />

              {/* BUTTON */}
              <button
                style={{
                  width: "100%",
                  height: "56px",
                  borderRadius: "999px",
                  background: "#e8192c",
                  color: "#fff",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                Send Message
              </button>

              <button
                style={{
                  width: "100%",
                  height: "56px",
                  borderRadius: "999px",
                  border: "1px solid #e8192c",
                  color: "#e8192c",
                  background: "transparent",
                  fontWeight: 700,
                }}
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