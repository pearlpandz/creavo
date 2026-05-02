import React from "react";
import creavovideo from "../../assets/creavo-video.mp4";

const TemplatesThatSpeak = () => (
  <section style={{ background: "#fff", padding: "40px 0" }}>
    <div
      className="mx-auto position-relative"
      style={{
        maxWidth: "1800px",
        width: "100%",
        height: "800px",
        borderRadius: "2px",
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <source src={creavovideo} type="video/mp4" />
      </video>

      {/* Overlay card */}
      {/* <div
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
            color: "#299187",
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
                  window.open("https://app.creavo.in/#/login", "_blank")
                }
        >
          Explore Templates
        </button>
      </div> */}
    </div>

    {/* Responsive CSS for mobile */}
    <style>
      {`
        @media (max-width: 768px) {
          .mx-auto.position-relative {
            height: 600px !important;
          }
          .overlay-card {
            position: absolute !important;
            left: 50% !important;
            top: 50% !important;
            transform: translate(-50%, -50%) !important;
            min-width: 300px !important;
            max-width: 90% !important;
          }
        }
      `}
    </style>
  </section>
);

export default TemplatesThatSpeak;
