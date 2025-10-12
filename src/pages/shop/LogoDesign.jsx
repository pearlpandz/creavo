import React from "react";
import { FaRegGem, FaPaintBrush, FaBullseye , FaCheck  } from "react-icons/fa";
import LogoDesignImage from "../../assets/logodesign-image1.png"; // Replace with actual image path

const LogoDesign = () => {
    const planCards = [
    {
      title: "Basic Plan",
      price: "$29/per month",
      features: ["50+ social media image templates", "10+ caption ideas", "Basic support"],
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
  return (
    <>
      {/* 1. Transform Your Digital Presence Section */}
      <section className="py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <h2 className="display-6 fw-semibold mb-3 text-center" style={{ color: "#5C28A8" }}>
            Distinctive Logos That Define Your Brand
          </h2>
          <p className="lead mb-5 text-center" style={{ color: "#333" }}>
           We craft logos that capture your brand’s personality and make a strong visual statement.
          </p>
          <div className="row g-4">
            {[
              {
                icon: <FaRegGem  size={30} />,
                title: "Memorable Brand Identity",
                text: "Your logo becomes the face of your business, leaving a lasting impression on your audience.",
              },
              {
                icon: <FaPaintBrush  size={30} />,
                title: "Creative & Timeless",
                text: "We design with originality and timelessness in mind so your brand never feels outdated.",
              },
              {
                icon: <FaBullseye  size={30} />,
                title: " Purpose-Driven Design",
                text: "Every element is chosen to reflect your mission, values, and target market.",
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
                A Logo That Speaks Your Brand
              </h2>
              <p className="lead mb-4" style={{ color: "#333", maxWidth: "400px" }}>
Your logo captures your brand’s essence, leaving a lasting impression across digital and print platforms.              </p>
            </div>
            <div className="col-md-6">
              <img
                src={LogoDesignImage}
                alt="Logo Design Image"
                className="img-fluid rounded-3"
                style={{ maxHeight: "320px", width: "85%", objectFit: "cover", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
              />
            </div>
          </div>
        </div>
      </section>
       {/* ========== Plans Section ========== */}
      <section className="py-5 mb-4" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <h2
            className="display-6 fw-semibold text-center mb-4"
            style={{ color: "#000" }}
          >
            Choose Your Plan
          </h2>
      
          <p
            className="text-center mb-5"
            style={{ fontSize: "1.5rem" }}
          >
            Choose a plan tailored to your campaign goals from social posts to full branding kits.
          </p>
      
          <div
            className="row justify-content-center align-items-end g-0"
            style={{
              margin: "0 auto",
              gap: "0", // extra spacing between columns
            }}
          >
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
                    <h4
                      className="fw-semibold mb-3"
                      style={{ color: "#000" }}
                    >
                      {card.title}
                    </h4>
                    <h2
                      className="fw-bold"
                      style={{ color: card.background, margin: 0 }}
                    >
                      {card.price}
                    </h2>
                  </div>
      
                  {/* Colored bottom section */}
                  <div
                    style={{
                      backgroundColor: card.background,
                      color: "#fff",
                      padding: "20px 25px",
                      height: "100%",
                    }}
                  >
                    <ul
                      className="list-unstyled text-start mb-4"
                      style={{ paddingLeft: "10px" }}
                    >
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
      </section>
    </>
  );
};

export default LogoDesign;