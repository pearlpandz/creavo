import React from "react";
import card1 from "../../assets/hero-card-1.jpg";
import card2 from "../../assets/hero-card-2.jpg";
import card3 from "../../assets/hero-card-3.jpg";
import card4 from "../../assets/hero-card-4.jpg";

const cards = [
  { img: card1, label: "Business Ethics" },
  { img: card2, label: "Good Morning" },
  { img: card3, label: "Quotes" },
  { img: card4, label: "Designing" },
];

const Hero = () => (
  <section
    className="w-100"
    style={{
      minHeight: 420,
      background: "linear-gradient(135deg, #b8dfff 0%, #e8d5ff 50%, #ffe0f8 100%)",
      padding: "48px 0 40px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Decorative blobs */}
    <div style={{
      position: "absolute", top: -80, left: -80, width: 300, height: 300,
      borderRadius: "50%", background: "rgba(74,144,226,0.12)", filter: "blur(60px)", zIndex: 0,
    }} />
    <div style={{
      position: "absolute", bottom: -60, right: -60, width: 260, height: 260,
      borderRadius: "50%", background: "rgba(217,70,239,0.12)", filter: "blur(60px)", zIndex: 0,
    }} />

    <div className="container px-3" style={{ maxWidth: "1440px", position: "relative", zIndex: 1 }}>
      <div className="row align-items-center gx-5 gy-5">
        {/* Hero Content */}
        <div className="col-lg-6">
          {/* Badge */}
          <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill"
            style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)", border: "1px solid rgba(74,144,226,0.3)", fontSize: "0.85rem", color: "#4c2978", fontWeight: 600 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(90deg,#4a90e2,#d946ef)", display: "inline-block" }} />
            Trusted by 10,000+ companies worldwide
          </div>

          <h1 className="fw-bold mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#16112e", lineHeight: 1.2 }}>
            Create & Share{" "}
            <span style={{
              background: "linear-gradient(90deg, #4a90e2, #d946ef)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Digital Cards
            </span>
            <br />That Make an Impact
          </h1>

          <p className="mb-4" style={{ color: "#444", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 480 }}>
            Transform your ideas into stunning digital cards for any occasion. From business communications to social greetings, create professional designs in minutes.
          </p>

          <button
            className="btn fw-semibold px-5 py-3"
            style={{
              background: "linear-gradient(90deg, #4a90e2 0%, #d946ef 100%)",
              color: "#fff",
              borderRadius: 10,
              fontSize: "1rem",
              border: "none",
              boxShadow: "0 6px 24px rgba(74,144,226,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(74,144,226,0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(74,144,226,0.35)"; }}
            onClick={() => window.open("https://app.creavo.in/#/login", "_blank")}
          >
            Start Creating — It's Free
          </button>
        </div>

        {/* Hero Cards */}
        <div className="col-lg-6">
          <div className="row gy-3 gx-3">
            {cards.map(({ img, label }) => (
              <div className="col-12 col-sm-6" key={label}>
                <div
                  className="bg-white rounded-3 shadow d-flex flex-column align-items-center"
                  style={{
                    padding: "14px 14px 10px",
                    minHeight: 210,
                    border: "1px solid rgba(74,144,226,0.15)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "default",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(74,144,226,0.18)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = ""; }}
                >
                  <img
                    src={img}
                    alt={label}
                    style={{ width: "100%", maxWidth: 300, height: 160, borderRadius: "0.4rem", objectFit: "cover" }}
                  />
                  <div className="pt-2 pb-1 small fw-semibold w-100" style={{ color: "#4c2978" }}>
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
