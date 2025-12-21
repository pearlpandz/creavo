import React from "react";
import TemplateImage1 from "../../assets/template-image1.png";
import TemplateImage2 from "../../assets/template-image2.png";
import TemplateImage3 from "../../assets/template-image3.png";
import TemplateImage4 from "../../assets/template-image4.png";

const templateImages = [
  TemplateImage2, TemplateImage4, TemplateImage3, TemplateImage1,
  TemplateImage2, TemplateImage4, TemplateImage3, TemplateImage1,
];

const TemplatesThatSpeak = () => (
  <section style={{ background: "#fff", padding: "40px 0" }}>
    <div
      className="mx-auto position-relative"
      style={{
        maxWidth: "1200px",
        width: "100%",
        height: "900px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        gap: 0,
        borderRadius: "2px",
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      }}
    >
      {templateImages.map((img, idx) => (
        <div
          key={idx}
          style={{
            width: "100%",
            height: "100%",
            // Mobile: full width, auto height
            gridColumn: "auto",
            gridRow: "auto",
          }}
          className="template-grid-item"
        >
          <img
            src={img}
            alt={`template card ${idx + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      ))}

      {/* Overlay card */}
      <div
        className="shadow px-4 py-4 overlay-card"
        style={{
          position: "absolute",
          left: "73%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: 420,
          maxWidth: 480,
          background: "#fff",
          borderRadius: "18px",
          zIndex: 2,
          boxShadow: "0 6px 32px rgba(0,0,0,0.18)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            color: "#295187",
            fontSize: "1.42rem",
            marginBottom: 10,
            letterSpacing: "0.5px",
          }}
        >
          Templates that Speak
        </div>
        <div style={{ fontSize: "1.05rem", color: "#444", marginBottom: 22 }}>
          Explore our latest card designs made to <br />
          connect, celebrate, and engage.
        </div>
        <button
          className="btn"
          style={{
            background: "#2C53A2",
            border: "none",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "10px",
            fontSize: "1rem",
            padding: "10px 28px",
            boxShadow: "0 1px 6px rgba(44,83,162,0.08)",
          }}
                          onClick={() =>
                  window.open("https://app.creavo.in/#/signup", "_blank")
                }
        >
          Explore Templates
        </button>
      </div>
    </div>

    {/* Responsive CSS for mobile */}
    <style>
      {`
        @media (max-width: 768px) {
          .mx-auto.position-relative {
            display: flex !important;
            flex-direction: column;
            height: auto !important;
          }
          .template-grid-item {
            width: 100% !important;
            height: auto !important;
          }
          .overlay-card {
            position: relative !important;
            left: 50% !important;
            top: auto !important;
            transform: translateX(-50%) !important;
            margin-top: 20px;
          }
        }
      `}
    </style>
  </section>
);

export default TemplatesThatSpeak;
