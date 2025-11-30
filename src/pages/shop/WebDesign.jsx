import React, {useState} from "react";
import { FaPalette, FaTabletAlt, FaShieldAlt, FaCheck  } from "react-icons/fa";
import WebDesignImage from "../../assets/webdesign-image1.png"; // Replace with actual image path

const WebDesign = () => {
    const [isYearly, setIsYearly] = useState(false);

const monthlyPlans = [
    {
      title: "Basic Plan",
      price: "$29/per month",
      features: [
        "50+ social media image templates",
        "10+ caption ideas",
        "Basic support",
      ],
      background: "#5C28A8",
    },
    {
      title: "Standard",
      price: "$35/per month",
      features: [
        "50+ social media image templates",
        "10+ caption ideas",
        "5 cover headers",
        "Priority support",
      ],
      background: "#892364CC",
    },
    {
      title: "Premium",
      price: "$50/per month",
      features: [
        "50+ social media image templates",
        "10+ caption ideas",
        "Editable source files (PSD / AI)",
        "24/7 premium support",
      ],
      background: "#5C28A8",
    },
  ];

  const yearlyPlans = [
    {
      title: "Basic Plan",
      price: "$290/year",
      features: [
        "50+ social media image templates",
        "10+ caption ideas",
        "1 Months Free",
      ],
      background: "#5C28A8",
    },
    {
      title: "Standard",
      price: "$350/year",
      features: [
        "50+ social media image templates",
        "10+ caption ideas",
        "5 cover headers",
        "2 Months Free",
      ],
      background: "#892364CC",
    },
    {
      title: "Premium",
      price: "$500/year",
      features: [
        "50+ social media image templates",
        "10+ caption ideas",
        "Editable source files (PSD / AI)",
        "3 Months Free",
      ],
      background: "#5C28A8",
    },
  ];

  const planCards = isYearly ? yearlyPlans : monthlyPlans;
  return (
    <>
      {/* 1. Transform Your Digital Presence Section */}
      <section className="py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <h2 className="display-6 fw-semibold mb-3 text-center" style={{ color: "#5C28A8" }}>
            Transform Your Digital Presence
          </h2>
          <p className="lead mb-5 text-center" style={{ color: "#333" }}>
            Professional website design that drives results and elevates your brand.
          </p>
          <h3 className="h4 fw-semibold mb-4 text-center" style={{ color: "#000" }}>
            Comprehensive Web Solutions
          </h3>
          <div className="row g-4">
            {[
              {
                icon: <FaPalette  size={30} />,
                title: "Professional Design",
                text: "Stunning visuals that capture your brand's essence and engage visitors",
              },
              {
                icon: <FaTabletAlt  size={30} />,
                title: "Mobile-First Design",
                text: "Perfect adaptation across all devices, ensuring seamless user experience",
              },
              {
                icon: <FaShieldAlt  size={30} />,
                title: "Enterprise Security",
                text: "Top-tier protection for your website and visitors",
              },
            ].map((card, index) => (
              <div key={index} className="col-md-4">
                <div
                  className="p-4 rounded-3 text-left"
                  style={{
                    backgroundColor: "#fff",
                    
                  }}
                >
                  <div
                    className="mb-3 d-inline-block"
                    style={{
                      backgroundColor: "#FFEDFE",
                      padding: "12px",
                      borderRadius: "4px",
                      color: "#5C28A8",
                    }}
                  >
                    {card.icon}
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: "#5C28A8" }}>
                    {card.title}
                  </h5>
                  <p style={{ color: "#666", fontSize: "0.95rem" }}>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Background Section with Heading, Text, and Image */}
      <section className="py-5" style={{ backgroundColor: "#FFEDFE" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <h2 className="display-6 fw-semibold mb-3" style={{ color: "#000" }}>
                Responsive Design That Works Everywhere
              </h2>
              <p className="lead mb-4" style={{ color: "#333", maxWidth: "400px" }}>
                Your website looks and performs beautifully on every device, from smartphones to desktops.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src={WebDesignImage}
                alt="Web Design Example"
                className="img-fluid rounded-3"
                style={{ maxHeight: "320px", width: "85%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
       {/* ========== Plans Section ========== */}
<section className="py-5 mb-4" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          {/* Heading */}
          <div className="d-flex align-items-center mb-3 position-relative">
            <h2
              className="display-6 fw-semibold text-center flex-grow-1"
              style={{ color: "#000", margin: 0 }}
            >
              Choose Your Plan
            </h2>

            {/* Toggle Switch */}
            <div className="position-absolute end-0 d-flex align-items-center">
              <span className="me-2 fw-semibold" style={{ color: "#000" }}>
                Monthly
              </span>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={isYearly}
                  onChange={() => setIsYearly(!isYearly)}
                />
                <span className="slider"></span>
              </label>

              <span className="ms-2 fw-semibold" style={{ color: "#000" }}>
                Yearly
              </span>
            </div>
          </div>

          <p className="text-center mb-5" style={{ fontSize: "1.5rem" }}>
            Choose a plan tailored to your campaign goals from social posts to
            full branding kits.
          </p>

          {/* Cards */}
          <div className="row justify-content-center align-items-end g-0">
            {planCards.map((card, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-8 col-10 text-center p-0"
                style={{
                  transform: index === 1 ? "scale(1.1)" : "scale(0.95)",
                  zIndex: index === 1 ? 2 : 1,
                  transition: "transform 0.3s ease",
                }}
              >
                <div
                  className="card border-0 overflow-hidden shadow-sm mx-auto"
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                    maxWidth: "340px",
                    height: index === 1 ? "430px" : "400px",
                    border: `1px solid ${card.background}`,
                    marginRight: index !== 2 ? "-1px" : "0",
                  }}
                >
                  {/* Upper white section */}
                  <div
                    style={{
                      backgroundColor: "#fff",
                      padding: "40px 30px",
                      borderBottom: `3px solid ${card.background}`,
                      border: `2px solid ${card.background}`,
                    }}
                  >
                    <h4 className="fw-semibold mb-3" style={{ color: "#000" }}>
                      {card.title}
                    </h4>
                    <h2
                      className="fw-bold"
                      style={{ color: card.background, margin: 0 }}
                    >
                      {card.price}
                    </h2>
                  </div>

                  {/* Bottom colored section */}
                  <div
                    style={{
                      backgroundColor: card.background,
                      color: "#fff",
                      padding: "20px 25px",
                      height: "100%",
                    }}
                  >
                    <ul className="list-unstyled text-start mb-4">
                      {card.features.map((feature, i) => (
                        <li
                          key={i}
                          className="mb-3 d-flex align-items-center"
                          style={{ fontSize: "0.95rem" }}
                        >
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              backgroundColor: "#fff",
                              marginRight: "8px",
                            }}
                          >
                            <FaCheck
                              style={{
                                color: "#000",
                                fontSize: "0.8rem",
                              }}
                            />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      className="btn fw-bold px-4 py-2 rounded-2"
                      style={{
                        backgroundColor: "#fff",
                        color: card.background,
                        border: `1px solid ${card.background}`,
                      }}
                    >
                      Choose {card.title.split(" ")[0]}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Toggle Switch CSS */}
        <style>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 55px;
          height: 28px;
        }

        .switch input {
          display: none;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          inset: 0;
          background: #ccc;
          border-radius: 34px;
          transition: 0.4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 22px;
          width: 22px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #5C28A8;
        }

        input:checked + .slider:before {
          transform: translateX(26px);
        }
      `}</style>
      </section>
    </>
  );
};

export default WebDesign;