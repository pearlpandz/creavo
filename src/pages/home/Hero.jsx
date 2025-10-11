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
    className="w-100 py-4"
    style={{
      minHeight: 370,
      background: "linear-gradient(90deg, #b8dfff 0%, #ffe0f8 50%)",
      padding: "20px 0",
    }}
  >
    <div className="container px-3" style={{ padding: "0 15px", maxWidth: "1440px" }}>
      <div className="row align-items-center gx-5 gy-5">
        {/* Hero Content */}
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4" style={{ fontSize: "2.5rem", color: "#16112e", marginBottom: "1rem", fontWeight:"bold" }}>
            Create & Share Digital Cards That<br />Make an Impact
          </h2>
          <p className="mb-4" style={{ color: "#222", marginBottom: "1.5rem" }}>
            Transform your ideas into stunning digital cards for any occasion. <br/>From business communications to social greetings, create professional designs in minutes.
          </p>
          <button
            className="btn px-4 py-2 mb-4 fw-semibold"
            style={{
              background: "linear-gradient(90deg, #b9c6ff 0%, #fcafe7 100%)",
              color: "#4c2978",
              borderRadius: 8,
              fontSize: "1rem",
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.04)",
              border: "none",
              marginBottom: "1rem",
            }}
          >
            Start Creating - It's Free
          </button>
          <div className="small mt-1" style={{ color: "#222", marginTop: "0.5rem" }}>
            Trusted by 10,000+ companies worldwide
          </div>
        </div>
        {/* Hero Cards */}
        <div className="col-lg-6">
          <div className="row gy-3 gx-3">
            {cards.map(({ img, label }) => (
              <div className="col-12 col-sm-6" key={label}>
                <div
                  className="bg-white rounded-2 shadow-sm h-100 d-flex flex-column align-items-center"
                  style={{
                    padding: "18px 14px 10px 14px", // Top, right, bottom, left
                    minHeight: 210,
                  }}
                >
                  <img
                    src={img}
                    alt={label}
                    style={{
                      width: "100%",
                      maxWidth: 300,
                      height: 160,
                      borderRadius: "0.25rem",
                      objectFit: "cover",
                    }}
                  />
                  <div className="pt-3 pb-2 small fw-medium w-100" style={{ color: "#2d336f" }}>
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