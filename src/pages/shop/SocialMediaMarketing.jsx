import React, {useState} from "react";
import { FaCheck } from "react-icons/fa";
import SocialMediaMarketingImage1 from "../../assets/socialmediamarketing-image1.png";
import SocialMediaMarketingImage2 from "../../assets/socialmediamarketing-image2.png";
import SocialMediaMarketingImage3 from "../../assets/socialmediamarketing-image3.png";
import SocialMediaMarketingImage4 from "../../assets/socialmediamarketing-image4.png";
import SocialMediaMarketingImage5 from "../../assets/socialmediamarketing-image5.png";

const SocialMediaMarketingPage = () => {
    const [isYearly, setIsYearly] = useState(false);

  const templateCards = [
    {
      image: SocialMediaMarketingImage1,
      title: "Social Media for Financial Advisors",
      text: "Professional, trust-building posts to promote financial services and educate your audience.",
    },
    {
      image: SocialMediaMarketingImage2,
      title: "Social Media for Dentists",
      text: "Engage patients and promote your clinic with creative, patient-friendly designs.",
    },
    {
      image: SocialMediaMarketingImage3,
      title: "Social Media for Real Estate",
      text: "Eye-catching posts to showcase properties and attract potential buyers.",
    },
    {
      image: SocialMediaMarketingImage4,
      title: "Social Media for Restaurants & Cafes",
      text: "Delicious designs to promote your menu, offers, and events.",
    },
    {
      image: SocialMediaMarketingImage5,
      title: "Social Media for Health & Wellness",
      text: "Inspiring posts to connect with your fitness and wellness audience.",
    },
  ];

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
      {/* ========== Templates Section ========== */}
      <section className="py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <h2
            className="display-6 fw-bold mb-4 text-center"
            style={{ color: "#000" }}
          >
            Social Media Marketing Templates
          </h2>
          <p className="text-center mb-5" style={{fontSize:"1.5rem"}}>
            Ready-to-use, industry-specific designs to boost your online
            presence. Choose your category and start creating.
          </p>

          {/* First 3 cards row */}
          <div className="row g-4 justify-content-center">
            {templateCards.slice(0, 3).map((card, index) => (
              <div key={index} className="col-md-4 col-sm-6">
                <div
                  className="card h-100 shadow-sm border-0"
                  style={{
                    backgroundColor: "#FFEAFE",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-img-top"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-semibold" style={{ color: "#000" }}>
                      {card.title}
                    </h5>
                    <p style={{ color: "#333", fontSize: "0.95rem" }}>
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second row with 2 cards */}
          <div className="row g-4 justify-content-start mt-2">
            {templateCards.slice(3).map((card, index) => (
              <div key={index + 3} className="col-md-4 col-sm-6">
                <div
                  className="card h-100 shadow-sm border-0"
                  style={{
                    backgroundColor: "#FFEAFE",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-img-top"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-semibold" style={{ color: "#000" }}>
                      {card.title}
                    </h5>
                    <p style={{ color: "#333", fontSize: "0.95rem" }}>
                      {card.text}
                    </p>
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

export default SocialMediaMarketingPage;
