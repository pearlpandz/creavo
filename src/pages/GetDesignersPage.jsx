import React, { useState } from "react";
import {
  FaUserAlt,
  FaAppleAlt,
  FaCheck,
  FaBrain,
  FaCog,
  FaClock,
  FaDollarSign,
  FaEye,
  FaClipboardList,
  FaUsers,
  FaHandsHelping,
  FaFileDownload,
  FaStar,
} from "react-icons/fa";
import GetDesignersImage from "../assets/getdesigners-image1.png"; // Replace with actual image path
import DesignerImage1 from "../assets/designer-image1.jpg";
import DesignerImage2 from "../assets/designer-image2.jpg";
import DesignerImage3 from "../assets/designer-image3.jpg";

const GetDesignersPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPlans = [
    {
      title: "Basic Plan",
      price: "₹295/per month",
      features: [
        "50+ social media image templates",
        "10+ caption ideas",
        "Basic support",
      ],
      background: "#5C28A8",
    },
    {
      title: "Standard",
      price: "₹491/per month",
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
      price: "₹786/per month",
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
      price: "₹2,999/year",
      features: [
        "50+ social media image templates",
        "10+ caption ideas",
        "1 Months Free",
      ],
      background: "#5C28A8",
    },
    {
      title: "Standard",
      price: "₹4,999/year",
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
      price: "₹7,999/year",
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

  const cardData = [
    {
      icon: <FaBrain size={30} />,
      title: "Expertise",
      text: "Our designers specialize in branding, social media, and digital content creation.",
    },
    {
      icon: <FaCog size={30} />,
      title: "Customization",
      text: "Tailored designs to fit your brand identity and campaign goals.",
    },
    {
      icon: <FaClock size={30} />,
      title: "Quick Turnaround",
      text: "Get quality work delivered on time.",
    },
    {
      icon: <FaDollarSign size={30} />,
      title: "Affordable Plans",
      text: "Flexible pricing to suit your budget.",
    },
    {
      icon: <FaEye size={30} />,
      title: "Engaging Visuals",
      text: "Designs that capture attention, connect with your audience, and drive results.",
    },
  ];

  const WorksCardData = [
    {
      icon: <FaClipboardList size={24} />,
      title: "Post Your Requirements",
      text: "Describe your project in detail.",
    },
    {
      icon: <FaUsers size={24} />,
      title: "Connect With Designers",
      text: "Browse profiles or get matched instantly.",
    },
    {
      icon: <FaHandsHelping size={24} />,
      title: "Collaborate & Review",
      text: "Work together, share feedback, and make edits.",
    },
    {
      icon: <FaFileDownload size={24} />,
      title: "Download & Launch",
      text: "Get final files in your preferred formats.",
    },
  ];

  const designers = [
    {
      name: "Sarah Johnson",
      profile: "Branding & Social Media Graphics",
      image: DesignerImage1, // replace with actual path
      rating: 4.9,
      reviews: 128,
      cardBg: "#fff",
    },
    {
      name: "Michael Chen",
      profile: "Website Design",
      image: DesignerImage2,
      rating: 4.9,
      reviews: 128,
      cardBg: "#fff",
    },
    {
      name: "Emma Davis",
      profile: "Branding & Packaging Design",
      image: DesignerImage3,
      rating: 4.9,
      reviews: 128,
      cardBg: "#fff", // yellow background for right card
    },
  ];
  return (
    <>
      {/* 2. Background Section with Heading, Text, and Image */}
      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(90deg, rgba(164, 178, 255, 0.6) 0%, rgba(255, 159, 211, 0.6) 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <h2
                className="display-6 fw-semibold mb-3"
                style={{ color: "#000" }}
              >
                Find the Perfect Designer for Your Project
              </h2>
              <p
                className="lead mb-4"
                style={{ color: "#333", maxWidth: "400px" }}
              >
                Work with skilled professionals to create social media
                templates, digital cards, and branding assets that match your
                vision.
              </p>
              <button
                className="btn px-5 py-3 rounded-2 fw-bold"
                style={{
                  background:
                    "linear-gradient(90deg, #A4B2FF 0%, #FF9FD3 100%)",
                  border: "none",
                  color: "#363636",
                  fontSize: "1.1rem",
                  boxShadow: "0 4px 15px rgba(164, 178, 255, 0.3)",
                }}
                              onClick={() =>
                window.open("https://app.creavo.in/#/signup", "_blank")
              }
              >
                Explore Now
              </button>
            </div>
            <div className="col-md-6">
              <img
                src={GetDesignersImage}
                alt="App Design Example"
                className="img-fluid rounded-3"
                style={{ maxHeight: "400px", width: "85%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <h2
            className="display-6 fw-semibold mb-5 text-center"
            style={{ color: "#000" }}
          >
            Why Work With Our Designers
          </h2>
          <div className="row g-4">
            {cardData.slice(0, 3).map((card, index) => (
              <div key={index} className="col-md-4">
                <div className="p-4 rounded-3 text-start">
                  <div
                    className="mb-3 d-inline-block"
                    style={{
                      backgroundColor: "#fff",
                      padding: "12px",
                      borderRadius: "8px",
                      color: "#312C9A",
                    }}
                  >
                    {card.icon}
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: "#333" }}>
                    {card.title}
                  </h5>
                  <p style={{ color: "#666", fontSize: "0.95rem" }}>
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
            {cardData.slice(3).map((card, index) => (
              <div key={index + 3} className="col-md-4">
                <div className="p-4 rounded-3 text-start">
                  <div
                    className="mb-3 d-inline-block"
                    style={{
                      backgroundColor: "#fff",
                      padding: "12px",
                      borderRadius: "8px",
                      color: "#312C9A",
                    }}
                  >
                    {card.icon}
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: "#333" }}>
                    {card.title}
                  </h5>
                  <p style={{ color: "#666", fontSize: "0.95rem" }}>
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <h2
            className="display-6 fw-semibold mb-5 text-center"
            style={{ color: "#000" }}
          >
            How It Works
          </h2>
          <div className="row g-4 position-relative align-items-stretch">
            {WorksCardData.map((card, index) => (
              <div
                key={index}
                className="col-md-3 position-relative d-flex justify-content-center"
              >
                <div
                  className="p-4 rounded-4 text-center d-flex flex-column justify-content-between"
                  style={{
                    backgroundColor: "#F4F3FF",
                    height: "350px",
                    width: "100%",
                    position: "relative",
                    borderBottomLeftRadius: "2rem",
                    borderBottomRightRadius: "2rem",
                  }}
                >
                  <div
                    className="mb-3"
                    style={{
                      backgroundColor: "#312C9A",
                      width: "80px", // or any desired size (e.g., 60px, 72px)
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "4px", // slightly higher for a more "pill" look, or keep 4px
                      color: "#fff",
                      margin: "0 auto",
                    }}
                  >
                    {card.icon}
                  </div>
                  <h5
                    className="fw-semibold mb-2"
                    style={{ color: "#333", fontSize: "1.8rem" }}
                  >
                    {card.title}
                  </h5>
                  <p style={{ color: "#666", fontSize: "1.25rem" }}>
                    {card.text}
                  </p>
                  {/* Curved bottom line */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "100%",
                      height: "8px",
                      backgroundColor: "#312C9A",
                      borderBottomLeftRadius: "2rem",
                      borderBottomRightRadius: "2rem",
                    }}
                  ></div>
                </div>

                {/* Arrow between cards */}
                {index < WorksCardData.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "-15px",
                      transform: "translateY(-50%)",
                      color: "#312C9A",
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "60px 0" }}>
        <div className="container">
          <h2
            className="fw-semibold text-center mb-4"
            style={{ fontSize: "2.5rem" }}
          >
            Our Designers
          </h2>
          <div className="row justify-content-center g-4">
            {designers.map((designer, idx) => (
              <div key={idx} className="col-md-4 d-flex justify-content-center">
                <div
                  className="shadow rounded-2"
                  style={{
                    background: designer.cardBg,
                    width: "380px",
                    minHeight: "260px",
                    padding: "25px 25px 22px 25px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 4px 18px rgba(0,0,0,.10)",
                  }}
                >
                  {/* Top: Profile image + name/profession */}
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="overflow-hidden"
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        border: "3px solid #fff",
                        boxShadow: "0 2px 6px rgba(60,20,20,.10)",
                      }}
                    >
                      <img
                        src={designer.image}
                        alt={designer.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>
                    <div className="ps-3 text-start">
                      <div
                        className="fw-bold"
                        style={{ fontSize: "1.1rem", color: "#111" }}
                      >
                        {designer.name}
                      </div>
                      <div
                        style={{
                          color: "#444",
                          fontSize: "0.95rem",
                          marginTop: "2px",
                          fontWeight: 500,
                        }}
                      >
                        {designer.profile}
                      </div>
                    </div>
                  </div>
                  {/* Middle: Rating & reviews */}
                  <div
                    className="d-flex align-items-center justify-content-between mb-2"
                    style={{ fontSize: "1rem" }}
                  >
                    <div
                      className="d-flex align-items-center"
                      style={{ color: "#FBAF04", fontWeight: 600 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={14}
                          style={{ marginRight: "3px" }}
                        />
                      ))}
                      <span
                        className="ms-2"
                        style={{
                          color: "#444",
                          fontSize: "1rem",
                          fontWeight: 500,
                        }}
                      >
                        {designer.rating}
                      </span>
                    </div>
                    <div style={{ color: "#888", fontSize: "0.95rem" }}>
                      ({designer.reviews} reviews)
                    </div>
                  </div>
                  {/* Bottom: Centered button */}
                  <div className="d-flex justify-content-center mt-2">
                    <button
                      className="btn rounded-2 px-4 py-2"
                      style={{
                        color: "#312C9A",
                        border: "1px solid #312C9A",
                        fontWeight: 500,
                        fontSize: "1.03rem",
                        background: "#fff",
                        boxShadow: "0 2px 12px rgba(20,20,80,0.06)",
                      }}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
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

export default GetDesignersPage;
