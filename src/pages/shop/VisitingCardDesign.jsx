import React, {useState} from "react";
import { FaRulerCombined, FaPrint, FaHandshake, FaCheck  } from "react-icons/fa";
import VisitingCardDesignImage from "../../assets/visitingcarddesign-image1.png"; // Replace with actual image path

const VisitingCardDesign = () => {
    const [isYearly, setIsYearly] = useState(false);

  const monthlyPlans = [
    { title: "Basic", price: "₹299/per month", features: ["Daily 1 Poster", "Business Categories 1", "Language Categories 1", "Trending, Events, Good Morning", "Motivational, Offers, Leader Quotes", "Business Ethics"], background: "#5C28A8" },
    { title: "Pro", price: "₹499/per month", features: ["Daily 3 Posters", "Business Categories 3", "Language Categories 3", "Trending, Events, Good Morning", "Motivational, Offers, Leader Quotes", "Business Ethics"], background: "#892364CC", isPopular: true },
    { title: "Enterprise", price: "₹799/per month", features: ["Daily 10 Posters", "Business Categories 10", "Language Categories 10", "Trending, Events, Good Morning", "Motivational, Offers, Leader Quotes", "Business Ethics"], background: "#5C28A8" },
    { title: "Premium", price: "Contact Us", features: ["Tailored as per business requirements", "Personalized templates", "Dedicated Desginer", "Priority Support"], background: "linear-gradient(90deg, #4a90e2 0%, #d946ef 50%)", borderColor: "#4a90e2", textColor: "#4a90e2", isCustom: true, isFullWidth: true },
  ];

  const yearlyPlans = [
    { title: "Basic", price: "₹2,999/year", features: ["Daily 1 Poster", "Business Categories 1", "Language Categories 1", "Trending, Events, Good Morning", "Motivational, Offers, Leader Quotes", "Business Ethics"], background: "#5C28A8" },
    { title: "Pro", price: "₹4,999/year", features: ["Daily 3 Posters", "Business Categories 3", "Language Categories 3", "Trending, Events, Good Morning", "Motivational, Offers, Leader Quotes", "Business Ethics"], background: "#892364CC", isPopular: true },
    { title: "Enterprise", price: "₹7,999/year", features: ["Daily 10 Posters", "Business Categories 10", "Language Categories 10", "Trending, Events, Good Morning", "Motivational, Offers, Leader Quotes", "Business Ethics"], background: "#5C28A8" },
    { title: "Premium", price: "Contact Us", features: ["Tailored as per business requirements", "Personalized templates", "Dedicated Desginer", "Priority Support"], background: "linear-gradient(90deg, #4a90e2 0%, #d946ef 50%)", borderColor: "#4a90e2", textColor: "#4a90e2", isCustom: true, isFullWidth: true },
  ];

  const planCards = isYearly ? yearlyPlans : monthlyPlans;
  return (
    <>
      {/* 1. Transform Your Digital Presence Section */}
      <section className="py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <h2 className="display-6 fw-semibold mb-3 text-center" style={{ color: "#5C28A8" }}>
            Professional Cards That Make You Unforgettable
          </h2>
          <p className="lead mb-5 text-center" style={{ color: "#333" }}>
          We design visiting cards that blend elegance, clarity, and brand consistency.</p>
          <div className="row g-4">
            {[
              {
                icon: <FaRulerCombined  size={30} />,
                title: "Perfectly Structured Layouts",
                text: "Every detail – from font size to spacing – is optimized for visual balance.",
              },
              {
                icon: <FaPrint  size={30} />,
                title: "Print-Ready Precision",
                text: "Your card will be ready for high-quality printing with perfect alignment and crisp details.",
              },
              {
                icon: <FaHandshake  size={30} />,
                title: "Leave a Lasting Impression",
                text: "Hand over a card that speaks professionalism and sparks conversations.",
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
                First Impressions That Last
              </h2>
              <p className="lead mb-4" style={{ color: "#333", maxWidth: "400px" }}>
Your visiting card blends style and professionalism, ensuring you stand out and stay memorable. </p>            </div>
            <div className="col-md-6">
              <img
                src={VisitingCardDesignImage}
                alt="Visiting Card Design Image"
                className="img-fluid rounded-2"
                style={{ maxHeight: "320px", // decreased from 400px
    width: "85%", // slightly smaller width
    objectFit: "contain",
     }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* ========== Plans Section ========== */}
      <section className="py-5 mb-4" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="text-center mb-2">
            <h2 className="fw-bold mb-2" style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#16112e" }}>
Choose Your{" "}
<span style={{
            background: "linear-gradient(90deg,#4a90e2,#d946ef)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>Plan</span>
</h2>
          </div>
          <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
            <span className="fw-semibold" style={{ color: "#000" }}>Monthly</span>
            <label className="switch">
              <input type="checkbox" checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
              <span className="slider"></span>
            </label>
            <span className="fw-semibold" style={{ color: "#000" }}>Yearly</span>
          </div>
          <p className="text-center mb-5" style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)", color: "#555" }}>
            Choose a plan tailored to your campaign goals from social posts to full branding kits.
          </p>

          <div className="plans-wrapper mb-4">
            {planCards.slice(0, 3).map((card, index) => (
              <div key={index} className={`plan-card-wrap${card.isPopular ? " plan-popular" : ""}`}>
                <div className="plan-card position-relative d-flex flex-column h-100">
                  {card.isPopular && (
                    <div className="position-absolute top-0 start-50 translate-middle-x"
                      style={{ backgroundColor: "#ff6b35", color: "#fff", padding: "5px 20px", borderRadius: "0 0 10px 10px", fontSize: "0.8rem", fontWeight: "bold", zIndex: 3, whiteSpace: "nowrap" }}>
                      MOST POPULAR
                    </div>
                  )}
                  <div style={{ backgroundColor: "#fff", padding: "40px 28px 20px", borderBottom: `3px solid ${card.background}`, border: `2px solid ${card.background}` }}>
                    <h4 className="fw-semibold mb-3" style={{ color: "#000" }}>{card.title}</h4>
                    <h2 className="fw-bold" style={{ color: card.background, margin: 0, fontSize: "clamp(1.2rem, 2vw, 1.7rem)" }}>{card.price}</h2>
                  </div>
                  <div className="d-flex flex-column flex-grow-1" style={{ backgroundColor: card.background, color: "#fff", padding: "20px 24px 24px", border: `2px solid ${card.background}`, borderTop: "none" }}>
                    <ul className="list-unstyled text-start flex-grow-1" style={{ margin: 0 }}>
                      {card.features.map((feature, i) => (
                        <li key={i} className="mb-3 d-flex align-items-start" style={{ fontSize: "0.93rem" }}>
                          <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 20, height: 20, borderRadius: "50%", backgroundColor: "#fff", marginRight: 8, marginTop: 2, flexShrink: 0 }}>
                            <FaCheck style={{ color: "#000", fontSize: "0.7rem" }} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="btn fw-bold px-4 py-2 rounded-2 w-100"
                      style={{ backgroundColor: "#fff", color: card.background, border: `1px solid ${card.background}`, marginTop: 16 }}
                      onClick={() => window.open("https://app.creavo.in/#/login", "_blank")}>
                      Choose {card.title}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {planCards.find(card => card.isFullWidth) && (
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10 col-12">
                <div className="card border-0 overflow-hidden shadow-lg mx-auto"
                  style={{ borderRadius: "10px", border: `2px solid ${planCards.find(card => card.isFullWidth).borderColor || '#4a90e2'}`, background: "linear-gradient(135deg, #4a90e220, #4a90e210)" }}>
                  <div className="row g-0 align-items-center">
                    <div className="col-md-8">
                      <div className="p-4">
                        <div className="d-flex align-items-center mb-3">
                          <h3 className="fw-bold mb-0 me-3" style={{ color: planCards.find(card => card.isFullWidth).textColor || '#4a90e2' }}>{planCards.find(card => card.isFullWidth).title}</h3>
                          <span className="badge" style={{ backgroundColor: planCards.find(card => card.isFullWidth).textColor || '#4a90e2', color: "#fff", fontSize: "0.7rem" }}>CUSTOM SOLUTION</span>
                        </div>
                        <h4 className="fw-bold mb-3" style={{ color: planCards.find(card => card.isFullWidth).textColor || '#4a90e2' }}>{planCards.find(card => card.isFullWidth).price}</h4>
                        <div className="row">
                          {planCards.find(card => card.isFullWidth).features.map((feature, i) => (
                            <div key={i} className="col-md-6 mb-2">
                              <div className="d-flex align-items-center">
                                <FaCheck style={{ color: planCards.find(card => card.isFullWidth).textColor || '#4a90e2', marginRight: "8px", fontSize: "0.9rem" }} />
                                <span style={{ color: "#333", fontSize: "0.95rem" }}>{feature}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-4 text-center">
                        <button className="btn fw-bold px-4 py-2 rounded-3"
                          style={{ background: planCards.find(card => card.isFullWidth).background, color: "#fff", border: "none", fontSize: "1rem", boxShadow: "0 4px 15px rgba(217,70,239,0.3)" }}
                          onClick={() => window.open("mailto:support@creavo.in?subject=Premium Plan Inquiry", "_blank")}>
                          Choose Premium
                        </button>
                        <p className="small text-muted mt-2 mb-0">Tailored to your specific needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <style>{`
          .switch { position: relative; display: inline-block; width: 55px; height: 28px; }
          .switch input { display: none; }
          .slider { position: absolute; cursor: pointer; inset: 0; background: #ccc; border-radius: 34px; transition: 0.4s; }
          .slider:before { position: absolute; content: ""; height: 22px; width: 22px; left: 3px; bottom: 3px; background-color: white; transition: 0.4s; border-radius: 50%; }
          input:checked + .slider { background: linear-gradient(90deg,#4a90e2,#d946ef); }
          input:checked + .slider:before { transform: translateX(26px); }
          .plans-wrapper { display: flex; align-items: flex-end; justify-content: center; gap: 0; margin-bottom: 2rem; }
          .plan-card-wrap { flex: 1; max-width: 340px; min-width: 0; position: relative; z-index: 1; }
          .plan-card { border-radius: 5px; overflow: hidden; height: 100%; }
          .plan-card-wrap.plan-popular { transform: scale(1.05); z-index: 2; }
          @media (max-width: 767px) {
            .plans-wrapper { flex-direction: column; align-items: center; gap: 20px; }
            .plan-card-wrap { width: 100%; max-width: 420px; }
            .plan-card-wrap.plan-popular { transform: scale(1); }
          }
          @media (min-width: 768px) and (max-width: 991px) {
            .plan-card-wrap { max-width: 220px; }
          }
        `}</style>
      </section>
    </>
  );
};

export default VisitingCardDesign;