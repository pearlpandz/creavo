import React from "react";
import { FaFolderOpen, FaPencilRuler, FaBolt, FaDownload } from "react-icons/fa";

const cardData = [
  {
    icon: <FaFolderOpen size={24} />,
    title: "Vast Library",
    desc: "Access a wide variety of customizable templates for greetings, videos, social media, business branding, and more.",
    gradient: "linear-gradient(135deg, #4a90e2, #2563eb)",
    accent: "#4a90e2",
  },
  {
    icon: <FaPencilRuler size={24} />,
    title: "Easy Customization",
    desc: "Our user-friendly tools let you effortlessly change text, colors, and add personal elements to match your brand.",
    gradient: "linear-gradient(135deg, #d946ef, #9333ea)",
    accent: "#d946ef",
  },
  {
    icon: <FaBolt size={24} />,
    title: "Create Faster",
    desc: "Save valuable time with streamlined design features enabling quick and efficient visual content creation.",
    gradient: "linear-gradient(135deg, #f59e0b, #f97316)",
    accent: "#f59e0b",
  },
  {
    icon: <FaDownload size={24} />,
    title: "Easy Download",
    desc: "Export your designs in multiple formats with just a click — no complexity, no delays.",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    accent: "#10b981",
  },
];

const WhatWeOffer = () => (
  <section className="py-5" style={{ background: "linear-gradient(135deg, #f8faff 0%, #fdf4ff 100%)" }}>
    <div className="container">
      <div className="text-center mb-5">
        <span className="d-inline-block px-3 py-1 rounded-pill mb-3"
          style={{ background: "linear-gradient(90deg,#e8f0ff,#fce8ff)", color: "#4c2978", fontSize: "0.85rem", fontWeight: 600 }}>
          Our Features
        </span>
        <h2 className="fw-bold mb-2" style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#16112e" }}>
          What We{" "}
          <span style={{
            background: "linear-gradient(90deg,#4a90e2,#d946ef)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>Offer?</span>
        </h2>
        <p className="text-muted mx-auto" style={{ fontSize: "1.05rem", maxWidth: 480 }}>
          Design solutions created to elevate your brand presence.
        </p>
      </div>

      <div className="row g-4">
        {cardData.map((card, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-3">
            <div
              className="h-100 bg-white rounded-4 p-4"
              style={{
                borderLeft: `4px solid ${card.accent}`,
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "default",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.10)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)"; }}
            >
              <div className="d-flex align-items-center justify-content-center mb-4 rounded-3"
                style={{ width: 54, height: 54, background: card.gradient, color: "#fff", boxShadow: `0 6px 18px rgba(0,0,0,0.15)` }}>
                {card.icon}
              </div>
              <h5 className="fw-bold mb-2" style={{ color: "#16112e" }}>{card.title}</h5>
              <p className="mb-0" style={{ color: "#666", fontSize: "0.93rem", lineHeight: 1.65 }}>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeOffer;
