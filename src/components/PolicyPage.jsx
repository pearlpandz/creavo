import React from "react";

const PolicyPage = ({ title, subtitle, icon, children }) => (
  <div style={{ background: "#f8f9ff", minHeight: "100vh" }}>
    {/* Hero */}
    <div style={{
      background: "linear-gradient(135deg, #b8dfff 0%, #e8d5ff 50%, #ffe0f8 100%)",
      padding: "60px 20px 50px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: -60, left: -60, width: 220, height: 220, borderRadius: "50%", background: "rgba(74,144,226,0.12)", filter: "blur(50px)" }} />
      <div style={{ position: "absolute", bottom: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(217,70,239,0.12)", filter: "blur(50px)" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 64, height: 64, borderRadius: "50%",
          background: "linear-gradient(135deg, #4a90e2, #d946ef)",
          color: "#fff", fontSize: "1.4rem", marginBottom: 16,
          boxShadow: "0 8px 24px rgba(74,144,226,0.35)",
        }}>{icon}</div>
        <h1 style={{
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, margin: "0 0 10px",
          background: "linear-gradient(135deg, #4a90e2 0%, #d946ef 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        }}>{title}</h1>
        {subtitle && <p style={{ color: "#555", fontSize: "0.95rem", margin: 0 }}>{subtitle}</p>}
      </div>
    </div>

    {/* Content */}
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 20px 60px" }}>
      {children}
    </div>
  </div>
);

export const PolicySection = ({ title, children }) => (
  <div style={{
    background: "#fff", borderRadius: 16, padding: "28px 32px", marginBottom: 20,
    boxShadow: "0 2px 12px rgba(74,144,226,0.07)", border: "1px solid rgba(74,144,226,0.1)",
  }}>
    {title && (
      <h2 style={{
        fontSize: "1.2rem", fontWeight: 700, color: "#16112e",
        marginBottom: 14, paddingBottom: 10,
        borderBottom: "2px solid", borderImage: "linear-gradient(90deg,#4a90e2,#d946ef) 1",
      }}>{title}</h2>
    )}
    {children}
  </div>
);

export const PolicySubSection = ({ title, children }) => (
  <div style={{ marginTop: 16 }}>
    {title && <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#4c2978", marginBottom: 8 }}>{title}</h3>}
    {children}
  </div>
);

export const PolicyText = ({ children }) => (
  <p style={{ color: "#444", lineHeight: 1.75, margin: "8px 0", fontSize: "0.95rem" }}>{children}</p>
);

export const PolicyList = ({ items }) => (
  <ul style={{ paddingLeft: 20, margin: "8px 0" }}>
    {items.map((item, i) => (
      <li key={i} style={{ color: "#444", lineHeight: 1.75, fontSize: "0.95rem", marginBottom: 4 }}>{item}</li>
    ))}
  </ul>
);

export default PolicyPage;
