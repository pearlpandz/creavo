import React from "react";

const steps = [
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=220&fit=crop", // Choose a Template
    caption: "Choose a Template",
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=220&fit=crop", // Customize Your Content
    caption: "Customize Your Content",
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=220&fit=crop", // Download or Share Instantly
    caption: "Download or Share Instantly",
    actions: [
      { label: "Share", variant: "primary" },
      { label: "Download", variant: "secondary" },
    ],
  },
];

const HowItWorks = () => (
  <section className="py-4">
    <div className="container-fluid">
      {/* Heading */}
      <h2
        className="fw-bold text-center mb-4"
        style={{ color: "#292933", fontSize: "2.5rem", marginTop: "1rem" }}
      >
        How It Works?
      </h2>

      {/* Steps */}
      <div className="row justify-content-center mb-0">
        {steps.map((step, idx) => (
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center mb-4 mb-lg-0" key={step.caption}>
            <div
              className="bg-light rounded-2 shadow-sm mb-3"
              style={{ borderRadius: "1rem", padding: "14px", width: "100%", maxWidth: "455px" }}
            >
              <img
                src={step.img}
                alt={step.caption}
                className="w-100"
                style={{
                  height: 300,
                  objectFit: "cover",
                  borderRadius: "0.25rem",
                  marginBottom: 8,
                  background: "#ededed"
                }}
              />
              {/* Action buttons for third step only */}
              {step.actions && (
                <div className="d-flex flex-row justify-content-center gap-2 mb-2 mt-2">
                  <button
                    className="btn btn-primary px-4 py-1"
                    style={{
                      borderRadius: 4,
                      background: "#312C9A",
                      border: "none",
                      fontWeight: 500,
                    }}
                  >
                    Share
                  </button>
                  <button
                    className="btn btn-primary px-4 py-1"
                    style={{
                      borderRadius: 4,
                      background: "#312C9A",
                      color: "#fff",
                      border: "none",
                      fontWeight: 500,
                    }}
                  >
                    Download
                  </button>
                </div>
              )}
            </div>

            <div className="text-center" style={{ fontWeight: 600, fontSize: "1.14rem", color: "#191820", marginTop: 0 }}>
              {step.caption}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Gradient Card */}
      <div
        className="mx-auto mt-5 p-4 p-md-5 rounded-2"
        style={{
          background: "linear-gradient(90deg, #e6ebff 0%, #f8dafe 100%)",
          maxWidth: "1200px",
          boxShadow: "0 2px 20px rgba(76,41,120,0.07)",
          textAlign: "center",
        }}
      >
        <h2 className="fw-bold mb-2" style={{ color: "#191820", fontSize: "2.45rem" }}>
          Ready to Start Your Digital Journey?
        </h2>
        <div className="mb-4" style={{ color: "#191820", fontSize: "1.06rem" }}>
          Let's create your customized digital strategy
        </div>
        <button
          className="btn px-4 py-2"
          style={{
            background: "#6156e4",
            color: "#fff",
            borderRadius: 8,
            fontWeight: 500,
            fontSize: "1.1rem",
            boxShadow: "0 1px 8px rgba(76,41,120,0.10)"
          }}
          onClick={() => window.open("https://app.creavo.in/#/signup", "_blank")}
        >
          Get Started
        </button>
      </div>
    </div>
  </section>
);

export default HowItWorks;
