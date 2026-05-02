import React from "react";

const steps = [
  {
    number: "01",
    caption: "Choose a Template",
    desc: "Browse hundreds of professionally designed templates across every category.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=220&fit=crop",
  },
  {
    number: "02",
    caption: "Customize Your Content",
    desc: "Edit text, colors, images, and branding to make it uniquely yours.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=220&fit=crop",
  },
  {
    number: "03",
    caption: "Download or Share Instantly",
    desc: "Export in multiple formats or share directly to your audience in one click.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=220&fit=crop",
    actions: true,
  },
];

const HowItWorks = () => (
  <section className="py-5" style={{ background: "#fff" }}>
    <div className="container">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="d-inline-block px-3 py-1 rounded-pill mb-3"
          style={{ background: "linear-gradient(90deg,#e8f0ff,#fce8ff)", color: "#4c2978", fontSize: "0.85rem", fontWeight: 600 }}>
          Simple Process
        </span>
        <h2 className="fw-bold mb-2" style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#16112e" }}>
          How It{" "}
          <span style={{
            background: "linear-gradient(90deg,#4a90e2,#d946ef)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>Works?</span>
        </h2>
        <p className="text-muted mx-auto" style={{ fontSize: "1.05rem", maxWidth: 480 }}>
          Get started in three simple steps — no design skills required.
        </p>
      </div>

      {/* Steps */}
      <div className="row g-4 justify-content-center mb-5">
        {steps.map((step, idx) => (
          <div className="col-12 col-md-4" key={step.caption}>
            <div
              className="h-100 bg-white rounded-4 overflow-hidden"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                border: "1px solid rgba(74,144,226,0.12)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(74,144,226,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)"; }}
            >
              <div style={{ position: "relative" }}>
                <img src={step.img} alt={step.caption} style={{ width: "100%", height: 200, objectFit: "cover" }} />
                {/* Step number badge */}
                <div style={{
                  position: "absolute", top: 12, left: 12,
                  background: "linear-gradient(135deg,#4a90e2,#d946ef)",
                  color: "#fff", fontWeight: 800, fontSize: "1rem",
                  width: 40, height: 40, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(74,144,226,0.4)",
                }}>
                  {step.number}
                </div>
              </div>
              <div className="p-4">
                <h5 className="fw-bold mb-2" style={{ color: "#16112e" }}>{step.caption}</h5>
                <p className="mb-0" style={{ color: "#666", fontSize: "0.93rem", lineHeight: 1.65 }}>{step.desc}</p>
                {step.actions && (
                  <div className="d-flex gap-2 mt-3">
                    <button className="btn btn-sm fw-semibold px-3"
                      style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", color: "#fff", border: "none", borderRadius: 6 }}>
                      Share
                    </button>
                    <button className="btn btn-sm fw-semibold px-3"
                      style={{ background: "transparent", color: "#4a90e2", border: "1px solid #4a90e2", borderRadius: 6 }}>
                      Download
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div
        className="rounded-4 p-5 text-center"
        style={{
          background: "linear-gradient(135deg, #4a90e2 0%, #9333ea 50%, #d946ef 100%)",
          boxShadow: "0 8px 40px rgba(74,144,226,0.3)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", top: -60, right: -60, width: 200, height: 200,
          borderRadius: "50%", background: "rgba(255,255,255,0.08)",
        }} />
        <div style={{
          position: "absolute", bottom: -40, left: -40, width: 160, height: 160,
          borderRadius: "50%", background: "rgba(255,255,255,0.08)",
        }} />
        <h2 className="fw-bold mb-2 text-white" style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", position: "relative" }}>
          Ready to Start Your Digital Journey?
        </h2>
        <p className="text-white mb-4" style={{ opacity: 0.9, fontSize: "1.05rem", position: "relative" }}>
          Let's create your customized digital strategy
        </p>
        <button
          className="btn fw-semibold px-5 py-3"
          style={{
            background: "#fff",
            color: "#4c2978",
            borderRadius: 10,
            fontSize: "1rem",
            border: "none",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            position: "relative",
            transition: "transform 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          onClick={() => window.open("https://app.creavo.in/#/login", "_blank")}
        >
          Get Started — It's Free
        </button>
      </div>
    </div>
  </section>
);

export default HowItWorks;
