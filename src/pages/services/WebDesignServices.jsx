import React from "react";
import { FaMobileAlt, FaSearch, FaPalette, FaAward } from "react-icons/fa";

const WebDesignServices = () => {
  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f2e6fa" }}>
      {/* Hero Section */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(90deg, #dacef6ff 30%, #fed9f7ff 100%)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <h1
                className="fw-bold mb-3"
                style={{
                  fontSize: "2.3rem",
                  color: "#3b1667",
                  lineHeight: 1.2,
                }}
              >
                Expert Website Design & Development That Elevates Your Brand
              </h1>
              <p
                className="mb-4"
                style={{
                  fontSize: "1.5rem",
                  color: "#6f4b9f",
                  letterSpacing: "0.02em",
                  maxWidth: 1200,
                  margin: "auto",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                A great website does more than look good it embodies your brand values,
                engages your audience, and drives your business forward. Our experienced
                team stays updated with global design trends. We analyze your brand,
                user needs, and goals to craft digital experiences that resonate and convert.
              </p>
              <button
                className="btn fw-semibold"
                style={{
                  background: "#312C9A",
                  color: "#fff",
                  borderRadius: 12,
                  padding: "12px 40px",
                  fontSize: "1.1rem",
                  boxShadow: "0 6px 15px rgba(134, 41, 204, 0.2)",
                  border: "none",
                }}
                onClick={() => window.open("https://app.creavo.in/#/login", "_blank")}
              >
                Get Started with Creavo
              </button>
            </div>
          </div>
        </div>
      </section>

{/* Our Web Design Solutions Section */}
<section className="py-5 position-relative" style={{ background: "#fff" }}>
  <div className="container-fluid text-center position-relative" style={{ zIndex: 2 }}>
    <h2
      className="fw-bold mb-5"
      style={{
        color: "#191348",
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: "0.5px",
      }}
    >
      Our Web Design Solutions
    </h2>

    {/* Dotted Curved Line SVG - Hidden on Mobile */}
    <svg
      className="dotted-svg-line"
      viewBox="0 0 1800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        left: "50%",
        top: "130px",
        width: "88vw",
        minWidth: 330,
        maxWidth: 1700,
        height: 450,
        transform: "translateX(-50%)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <path
        d="M120 380 Q620 500 900 215 Q1200 -100 1700 10"
        stroke="#191348"
        strokeWidth="3"
        strokeDasharray="10 12"
        fill="none"
      />
    </svg>

    <div
      className="d-flex justify-content-center align-items-center gap-5 flex-wrap"
      style={{
        position: "relative",
        zIndex: 2,
        minHeight: 440,
        marginBottom: 10,
        flexDirection: "row",
      }}
    >
      {/* Single-Page Websites */}
      <div
        className="d-flex flex-column align-items-center justify-content-center text-center our-circle"
        style={{
          width: "420px",
          height: "420px",
          backgroundColor: "#21176c",
          borderRadius: "50%",
          boxShadow: "0 6px 24px rgba(27,13,68,0.12)",
          color: "#fff",
          padding: "44px 36px",
          fontWeight: 500,
          fontSize: "1.22rem",
          lineHeight: 1.6,
          userSelect: "none",
          flexShrink: 0,
          transition: "width 0.3s, height 0.3s, font-size 0.3s",
          wordBreak: "break-word",
          overflow: "visible",
        }}
      >
        <h5
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "1.2rem",
            letterSpacing: 0.5,
            transition: "font-size 0.3s",
            wordBreak: "break-word",
          }}
        >
          Single-Page Websites
        </h5>
        <div style={{ fontSize: "1.18rem", transition: "font-size 0.3s" }}>
          Deliver your message in one beautifully designed page.
          Ideal for startups, personal portfolios, or brands that want to make a quick yet impactful online presence.
        </div>
      </div>

      {/* Online Store Design */}
      <div
        className="d-flex flex-column align-items-center justify-content-center text-center our-circle"
        style={{
          width: "420px",
          height: "420px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          boxShadow: "0 6px 18px rgba(22, 17, 72, 0.11)",
          border: "2.5px solid #21176c",
          color: "#21176c",
          padding: "44px 34px",
          fontWeight: 600,
          fontSize: "1.22rem",
          lineHeight: 1.6,
          userSelect: "none",
          flexShrink: 0,
          transition: "width 0.3s, height 0.3s, font-size 0.3s",
          wordBreak: "break-word",
          overflow: "visible",
        }}
      >
        <h5
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#21176c",
            marginBottom: "1.2rem",
            letterSpacing: 0.5,
            transition: "font-size 0.3s",
            wordBreak: "break-word",
          }}
        >
          Online Store Design
        </h5>
        <div style={{ fontSize: "1.18rem", fontWeight: 500, transition: "font-size 0.3s" }}>
          Custom e-commerce platforms designed to boost sales.
          From intuitive product browsing to secure, hassle-free checkout, every element is optimized for conversions.
        </div>
      </div>

      {/* Multi-Page Websites */}
      <div
        className="d-flex flex-column align-items-center justify-content-center text-center our-circle"
        style={{
          width: "420px",
          height: "420px",
          backgroundColor: "#21176c",
          borderRadius: "50%",
          boxShadow: "0 6px 24px rgba(27,13,68,0.12)",
          color: "#fff",
          padding: "44px 36px",
          fontWeight: 500,
          fontSize: "1.22rem",
          lineHeight: 1.6,
          userSelect: "none",
          flexShrink: 0,
          transition: "width 0.3s, height 0.3s, font-size 0.3s",
          wordBreak: "break-word",
          overflow: "visible",
        }}
      >
        <h5
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "1.2rem",
            letterSpacing: 0.5,
            transition: "font-size 0.3s",
            wordBreak: "break-word",
          }}
        >
          Multi-Page Websites
        </h5>
        <div style={{ fontSize: "1.18rem", transition: "font-size 0.3s" }}>
          Engaging, well-structured sites with multiple pages tailored for seamless navigation and user interaction.
          Built with both front-end creativity and back-end stability to ensure long-term growth.
        </div>
      </div>
    </div>
    {/* Responsive CSS */}
    <style>
      {`
      @media (max-width: 1024px) {
        .our-circle {
          width: 260px !important;
          height: 260px !important;
          padding: 20px 10px !important;
        }
        .our-circle h5 {
          font-size: 1.10rem !important;
        }
        .our-circle > div {
          font-size: 0.92rem !important;
        }
      }
      @media (max-width: 700px) {
        .dotted-svg-line {
          display: none;
        }
        .d-flex {
          gap: 16px !important;
        }
        .our-circle {
          width: 220px !important;
          height: 220px !important;
          padding: 10px 4px !important;
          margin: 0 auto 13px auto !important;
        }
        .our-circle h5 {
          font-size: 0.73rem !important;
        }
        .our-circle > div {
          font-size: 0.63rem !important;
        }
        h2.fw-bold {
          font-size: 1.12rem !important;
        }
      }
      `}
    </style>
  </div>
</section>



{/* Why Invest Section */}
<section
  className="py-5"
  style={{
    background: "#fff",
  }}
>
  <div className="container">
    <h2
      className="fw-bold mb-5 text-center"
      style={{
        color: "#121212",
        fontSize: "2.5rem",
        fontWeight: 700,
      }}
    >
      Why Invest in Creavo's Web Design Service
    </h2>

    <div className="row g-4">
      {/* Responsive & Mobile-First */}
      <div className="col-lg-4 col-md-6">
        <div
          style={{
            borderRadius: 8,
            boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
            backgroundColor: "#fff",
            overflow: "hidden",
            minHeight: 280,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: "100%",
              padding: "30px 50px",
              background: "linear-gradient(90deg, #7478e0 0%, #fc80bb 100%)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.15rem",
              boxSizing: "border-box",
            }}
          >
            Responsive & Mobile-First
          </div>
          <div
            style={{
              padding: "28px 24px",
              color: "#333",
              fontSize: "1rem",
              fontWeight: 400,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 15,
            }}
          >
            <FaMobileAlt color="#5454a6" size={40} />
            <p style={{ margin: 0 }}>
              Your site will look beautiful and function flawlessly on any device.
            </p>
          </div>
        </div>
      </div>

      {/* SEO-Ready Structure */}
      <div className="col-lg-4 col-md-6">
        <div
          style={{
            borderRadius: 8,
            boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
            backgroundColor: "#fff",
            overflow: "hidden",
            minHeight: 280,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: "100%",
              padding: "30px 50px",
              background: "linear-gradient(90deg, #7478e0 0%, #fc80bb 100%)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.15rem",
              boxSizing: "border-box",
            }}
          >
            SEO-Ready Structure
          </div>
          <div
            style={{
              padding: "28px 24px",
              color: "#333",
              fontSize: "1rem",
              fontWeight: 400,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 15,
            }}
          >
            <FaSearch color="#5454a6" size={40} />
            <p style={{ margin: 0 }}>
              Search engines and audiences both love websites designed to perform.
            </p>
          </div>
        </div>
      </div>

      {/* Brand-Focused Customization */}
      <div className="col-lg-4 col-md-6">
        <div
          style={{
            borderRadius: 8,
            boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
            backgroundColor: "#fff",
            overflow: "hidden",
            minHeight: 280,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: "100%",
              padding: "30px 50px",
              background: "linear-gradient(90deg, #7478e0 0%, #fc80bb 100%)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.15rem",
              boxSizing: "border-box",
            }}
          >
            Brand-Focused Customization
          </div>
          <div
            style={{
              padding: "28px 24px",
              color: "#333",
              fontSize: "1rem",
              fontWeight: 400,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 15,
            }}
          >
            <FaPalette color="#5454a6" size={40} />
            <p style={{ margin: 0 }}>
              From color to copy, your website will reflect your brand's identity accurately.
            </p>
          </div>
        </div>
      </div>

      {/* Affordable Quality */}
      <div className="col-lg-4 col-md-6">
        <div
          style={{
            borderRadius: 8,
            boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
            backgroundColor: "#fff",
            overflow: "hidden",
            minHeight: 280,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              width: "100%",
              padding: "30px 50px",
              background: "linear-gradient(90deg, #7478e0 0%, #fc80bb 100%)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.15rem",
              boxSizing: "border-box",
            }}
          >
            Affordable Quality
          </div>
          <div
            style={{
              padding: "28px 24px",
              color: "#333",
              fontSize: "1rem",
              fontWeight: 400,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 15,
            }}
          >
            <FaAward color="#5454a6" size={40} />
            <p style={{ margin: 0 }}>
              Premium design that fits your budget no compromise on the outcome.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default WebDesignServices;
