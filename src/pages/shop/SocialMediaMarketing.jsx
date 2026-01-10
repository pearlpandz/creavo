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
      title: "Basic",
      price: "₹299/per month",
      features: [
        "50+ social media image templates",
        "10+ caption ideas",
        "Basic support",
      ],
      background: "#5C28A8",
    },
    {
      title: "Pro",
      price: "₹499/per month",
      features: [
        "50+ social media image templates",
        "10+ caption ideas",
        "5 cover headers",
        "Priority support",
      ],
      background: "#892364CC",
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "₹799/per month",
      features: [
        "50+ social media image templates",
        "10+ caption ideas",
        "Editable source files (PSD / AI)",
        "24/7 premium support",
      ],
      background: "#5C28A8",
    },
    {
      title: "Premium",
      price: "Contact Us",
      features: [
        "Custom design solutions",
        "Personalized templates",
        "Dedicated account manager",
        "Unlimited revisions",
      ],
      background: "linear-gradient(90deg, #4a90e2 0%, #d946ef 50%)",
      borderColor: "#4a90e2",
      textColor: "#4a90e2",
      isCustom: true,
      isFullWidth: true,
    },
  ];

  const yearlyPlans = [
    {
      title: "Basic",
      price: "₹2,999/year",
      features: [
        "50+ social media image templates",
        "10+ caption ideas",
        "1 Months Free",
      ],
      background: "#5C28A8",
    },
    {
      title: "Pro",
      price: "₹4,999/year",
      features: [
        "50+ social media image templates",
        "10+ caption ideas",
        "5 cover headers",
        "2 Months Free",
      ],
      background: "#892364CC",
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "₹7,999/year",
      features: [
        "50+ social media image templates",
        "10+ caption ideas",
        "Editable source files (PSD / AI)",
        "3 Months Free",
      ],
      background: "#5C28A8",
    },
    {
      title: "Premium",
      price: "Contact Us",
      features: [
        "Custom design solutions",
        "Personalized templates",
        "Dedicated account manager",
        "Unlimited revisions",
      ],
      background: "linear-gradient(90deg, #4a90e2 0%, #d946ef 50%)",
      borderColor: "#4a90e2",
      textColor: "#4a90e2",
      isCustom: true,
      isFullWidth: true,
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
          <div className="row justify-content-center g-4 mb-4">
            <div className="col-12 d-flex justify-content-center">
              <div className="d-flex align-items-end" style={{ gap: "0" }}>
                {planCards.slice(0, 3).map((card, index) => (
                  <div
                    key={index}
                    className="text-center"
                    style={{
                      marginRight: index !== 2 ? "-1px" : "0",
                    }}
                  >
                    <div
                      className="card border-0 overflow-hidden shadow-sm position-relative"
                      style={{
                        borderRadius: "5px",
                        width: "340px",
                        height: card.isPopular ? "430px" : "400px",
                        border: `1px solid ${card.background}`,
                        transform: card.isPopular ? "scale(1.05)" : "scale(1)",
                        zIndex: card.isPopular ? 2 : 1,
                      }}
                    >
                      {card.isPopular && (
                        <div
                          className="position-absolute top-0 start-50 translate-middle-x"
                          style={{
                            backgroundColor: "#ff6b35",
                            color: "#fff",
                            padding: "5px 20px",
                            borderRadius: "0 0 10px 10px",
                            fontSize: "0.8rem",
                            fontWeight: "bold",
                          }}
                        >
                          MOST POPULAR
                        </div>
                      )}
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
                          onClick={() => {
                            if (card.isCustom) {
                              window.open("mailto:support@creavo.in?subject=Custom Plan Inquiry", "_blank");
                            } else {
                              window.open("https://app.creavo.in/#/signup", "_blank");
                            }
                          }}
                        >
                          {card.isCustom ? "Contact Us" : `Choose ${card.title}`}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Premium Plan - Full Width */}
          {planCards.find(card => card.isFullWidth) && (
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10 col-12">
                <div
                  className="card border-0 overflow-hidden shadow-lg mx-auto"
                  style={{
                    borderRadius: "10px",
                    border: `2px solid ${planCards.find(card => card.isFullWidth).borderColor || '#4a90e2'}`,
                    background: `linear-gradient(135deg, #4a90e220, #4a90e210)`,
                  }}
                >
                  <div className="row g-0 align-items-center">
                    <div className="col-md-8">
                      <div className="p-4">
                        <div className="d-flex align-items-center mb-3">
                          <h3 className="fw-bold mb-0 me-3" style={{ color: planCards.find(card => card.isFullWidth).textColor || '#4a90e2' }}>
                            {planCards.find(card => card.isFullWidth).title}
                          </h3>
                          <span
                            className="badge"
                            style={{
                              backgroundColor: planCards.find(card => card.isFullWidth).textColor || '#4a90e2',
                              color: "#fff",
                              fontSize: "0.7rem",
                            }}
                          >
                            CUSTOM SOLUTION
                          </span>
                        </div>
                        <h4 className="fw-bold mb-3" style={{ color: planCards.find(card => card.isFullWidth).textColor || '#4a90e2' }}>
                          {planCards.find(card => card.isFullWidth).price}
                        </h4>
                        <div className="row">
                          {planCards.find(card => card.isFullWidth).features.map((feature, i) => (
                            <div key={i} className="col-md-6 mb-2">
                              <div className="d-flex align-items-center">
                                <FaCheck
                                  style={{
                                    color: planCards.find(card => card.isFullWidth).textColor || '#4a90e2',
                                    marginRight: "8px",
                                    fontSize: "0.9rem",
                                  }}
                                />
                                <span style={{ color: "#333", fontSize: "0.95rem" }}>
                                  {feature}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-4 text-center">
                        <button
                          className="btn fw-bold px-4 py-2 rounded-3"
                          style={{
                            background: planCards.find(card => card.isFullWidth).background,
                            color: "#fff",
                            border: "none",
                            fontSize: "1rem",
                            boxShadow: "0 4px 15px rgba(217, 70, 239, 0.3)",
                          }}
                          onClick={() => window.open("mailto:support@creavo.in?subject=Premium Plan Inquiry", "_blank")}
                        >
                          Choose Premium
                        </button>
                        <p className="small text-muted mt-2 mb-0">
                          Tailored to your specific needs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
