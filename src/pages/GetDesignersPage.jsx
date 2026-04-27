import React, { useState } from "react";
import {
  FaCheck, FaBrain, FaCog, FaClock, FaRupeeSign, FaEye,
  FaClipboardList, FaUsers, FaHandsHelping, FaFileDownload, FaStar, FaArrowRight,
} from "react-icons/fa";
import GetDesignersImage from "../assets/getdesigners-image1.png";
import DesignerImage1 from "../assets/designer-image1.jpg";
import DesignerImage2 from "../assets/designer-image2.jpg";
import DesignerImage3 from "../assets/designer-image3.jpg";

const GetDesignersPage = () => {
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

  const features = [
    { icon: <FaBrain size={24} />, title: "Expertise", text: "Our designers specialize in branding, social media, and digital content creation.", gradient: "linear-gradient(135deg,#4a90e2,#2563eb)", bg: "#f0f6ff" },
    { icon: <FaCog size={24} />, title: "Customization", text: "Tailored designs to fit your brand identity and campaign goals.", gradient: "linear-gradient(135deg,#d946ef,#9333ea)", bg: "#fdf4ff" },
    { icon: <FaClock size={24} />, title: "Quick Turnaround", text: "Get quality work delivered on time, every time.", gradient: "linear-gradient(135deg,#f59e0b,#f97316)", bg: "#fffbf0" },
    { icon: <FaRupeeSign size={24} />, title: "Affordable Plans", text: "Flexible pricing to suit your budget and business needs.", gradient: "linear-gradient(135deg,#10b981,#059669)", bg: "#f0fdf8" },
    { icon: <FaEye size={24} />, title: "Engaging Visuals", text: "Designs that capture attention, connect with your audience, and drive results.", gradient: "linear-gradient(135deg,#f43f5e,#e11d48)", bg: "#fff0f3" },
  ];

  const workSteps = [
    { icon: <FaClipboardList size={22} />, number: "01", title: "Post Your Requirements", text: "Describe your project in detail.", gradient: "linear-gradient(135deg,#4a90e2,#2563eb)" },
    { icon: <FaUsers size={22} />, number: "02", title: "Connect With Designers", text: "Browse profiles or get matched instantly.", gradient: "linear-gradient(135deg,#d946ef,#9333ea)" },
    { icon: <FaHandsHelping size={22} />, number: "03", title: "Collaborate & Review", text: "Work together, share feedback, and make edits.", gradient: "linear-gradient(135deg,#f59e0b,#f97316)" },
    { icon: <FaFileDownload size={22} />, number: "04", title: "Download & Launch", text: "Get final files in your preferred formats.", gradient: "linear-gradient(135deg,#10b981,#059669)" },
  ];

  const designers = [
    { name: "Sarah Johnson", profile: "Branding & Social Media Graphics", image: DesignerImage1, rating: 4.9, reviews: 128 },
    { name: "Michael Chen", profile: "Website Design", image: DesignerImage2, rating: 4.9, reviews: 128 },
    { name: "Emma Davis", profile: "Branding & Packaging Design", image: DesignerImage3, rating: 4.9, reviews: 128 },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-5 position-relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #b8dfff 0%, #e8d5ff 50%, #ffe0f8 100%)", minHeight: 420, display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", top: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(74,144,226,0.12)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: -60, right: -60, width: 260, height: 260, borderRadius: "50%", background: "rgba(217,70,239,0.12)", filter: "blur(60px)" }} />
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <span className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill"
                style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(8px)", border: "1px solid rgba(74,144,226,0.3)", fontSize: "0.85rem", color: "#4c2978", fontWeight: 600 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "linear-gradient(90deg,#4a90e2,#d946ef)", display: "inline-block" }} />
                Professional Designers On Demand
              </span>
              <h1 className="fw-bold mb-3" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", color: "#16112e", lineHeight: 1.2 }}>
                Find the Perfect{" "}
                <span style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Designer
                </span>{" "}for Your Project
              </h1>
              <p className="mb-4" style={{ color: "#444", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 460 }}>
                Work with skilled professionals to create social media templates, digital cards, and branding assets that match your vision.
              </p>
              <button className="btn fw-semibold px-5 py-3"
                style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", color: "#fff", borderRadius: 10, border: "none", boxShadow: "0 6px 24px rgba(74,144,226,0.35)", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 30px rgba(74,144,226,0.45)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(74,144,226,0.35)"; }}
                onClick={() => window.open("https://app.creavo.in/#/login", "_blank")}>
                Explore Now <FaArrowRight className="ms-2" size={14} />
              </button>
            </div>
            <div className="col-md-6 text-center">
              <img src={GetDesignersImage} alt="Get Designers" className="img-fluid rounded-4"
                style={{ maxHeight: 380, width: "90%", objectFit: "cover", boxShadow: "0 20px 60px rgba(74,144,226,0.2)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Our Designers */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="d-inline-block px-3 py-1 rounded-pill mb-3"
              style={{ background: "linear-gradient(90deg,#e8f0ff,#fce8ff)", color: "#4c2978", fontSize: "0.85rem", fontWeight: 600 }}>
              Why Choose Us
            </span>
            <h2 className="fw-bold mb-2" style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#16112e" }}>
              Why Work With Our{" "}
              <span style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Designers?</span>
            </h2>
          </div>
          <div className="row g-4">
            {features.map((f, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4">
                <div className="h-100 rounded-4 p-4"
                  style={{ background: f.bg, border: "1px solid rgba(0,0,0,0.06)", transition: "transform 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.10)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div className="d-flex align-items-center justify-content-center mb-3 rounded-3"
                    style={{ width: 52, height: 52, background: f.gradient, color: "#fff", boxShadow: "0 6px 18px rgba(0,0,0,0.15)" }}>
                    {f.icon}
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: "#16112e" }}>{f.title}</h5>
                  <p className="mb-0" style={{ color: "#666", fontSize: "0.93rem", lineHeight: 1.65 }}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5" style={{ background: "linear-gradient(135deg,#f8faff 0%,#fdf4ff 100%)" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="d-inline-block px-3 py-1 rounded-pill mb-3"
              style={{ background: "linear-gradient(90deg,#e8f0ff,#fce8ff)", color: "#4c2978", fontSize: "0.85rem", fontWeight: 600 }}>
              Simple Process
            </span>
            <h2 className="fw-bold mb-2" style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#16112e" }}>
              How It{" "}
              <span style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Works?</span>
            </h2>
          </div>
          <div className="row g-4">
            {workSteps.map((step, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-3 position-relative">
                <div className="h-100 bg-white rounded-4 p-4 text-center"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1px solid rgba(74,144,226,0.1)", transition: "transform 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(74,144,226,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)"; }}>
                  <div className="d-flex align-items-center justify-content-center mx-auto mb-3 rounded-3"
                    style={{ width: 56, height: 56, background: step.gradient, color: "#fff", boxShadow: "0 6px 18px rgba(0,0,0,0.15)" }}>
                    {step.icon}
                  </div>
                  <div className="fw-bold mb-1" style={{ fontSize: "0.75rem", color: "#aaa", letterSpacing: 1 }}>STEP {step.number}</div>
                  <h5 className="fw-bold mb-2" style={{ color: "#16112e", fontSize: "1rem" }}>{step.title}</h5>
                  <p className="mb-0" style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.6 }}>{step.text}</p>
                </div>
                {i < workSteps.length - 1 && (
                  <div className="d-none d-lg-flex align-items-center justify-content-center"
                    style={{ position: "absolute", top: "50%", right: -16, transform: "translateY(-50%)", zIndex: 2, width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#4a90e2,#d946ef)", color: "#fff", fontSize: "0.9rem" }}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Designers */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="d-inline-block px-3 py-1 rounded-pill mb-3"
              style={{ background: "linear-gradient(90deg,#e8f0ff,#fce8ff)", color: "#4c2978", fontSize: "0.85rem", fontWeight: 600 }}>
              Our Team
            </span>
            <h2 className="fw-bold mb-2" style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#16112e" }}>
              Meet Our{" "}
              <span style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Designers</span>
            </h2>
          </div>
          <div className="row g-4 justify-content-center">
            {designers.map((d, i) => (
              <div key={i} className="col-md-4">
                <div className="bg-white rounded-4 p-4 h-100"
                  style={{ boxShadow: "0 4px 24px rgba(74,144,226,0.10)", border: "1px solid rgba(74,144,226,0.1)", transition: "transform 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(74,144,226,0.18)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(74,144,226,0.10)"; }}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <img src={d.image} alt={d.name} style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", border: "3px solid #e8f0ff" }} />
                    <div>
                      <div className="fw-bold" style={{ color: "#16112e", fontSize: "1rem" }}>{d.name}</div>
                      <div style={{ color: "#888", fontSize: "0.85rem" }}>{d.profile}</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex gap-1">
                      {[...Array(5)].map((_, j) => <FaStar key={j} size={13} color="#f59e0b" />)}
                      <span className="ms-1 fw-semibold" style={{ color: "#444", fontSize: "0.9rem" }}>{d.rating}</span>
                    </div>
                    <span style={{ color: "#aaa", fontSize: "0.85rem" }}>({d.reviews} reviews)</span>
                  </div>
                  <button className="btn w-100 fw-semibold py-2"
                    style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", color: "#fff", border: "none", borderRadius: 8, fontSize: "0.93rem", boxShadow: "0 4px 14px rgba(74,144,226,0.25)" }}>
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-5 mb-4" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          {/* Header */}
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

          {/* 3 Plan Cards */}
          <div className="plans-wrapper mb-4">
            {planCards.slice(0, 3).map((card, index) => (
              <div
                key={index}
                className={`plan-card-wrap${card.isPopular ? " plan-popular" : ""}`}
              >
                <div className="plan-card position-relative d-flex flex-column h-100">
                  {card.isPopular && (
                    <div
                      className="position-absolute top-0 start-50 translate-middle-x"
                      style={{ backgroundColor: "#ff6b35", color: "#fff", padding: "5px 20px", borderRadius: "0 0 10px 10px", fontSize: "0.8rem", fontWeight: "bold", zIndex: 3, whiteSpace: "nowrap" }}
                    >
                      MOST POPULAR
                    </div>
                  )}
                  {/* Title + Price */}
                  <div style={{ backgroundColor: "#fff", padding: "40px 28px 20px", borderBottom: `3px solid ${card.background}`, border: `2px solid ${card.background}` }}>
                    <h4 className="fw-semibold mb-3" style={{ color: "#000" }}>{card.title}</h4>
                    <h2 className="fw-bold" style={{ color: card.background, margin: 0, fontSize: "clamp(1.2rem, 2vw, 1.7rem)" }}>{card.price}</h2>
                  </div>
                  {/* Features + Button */}
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
                    <button
                      className="btn fw-bold px-4 py-2 rounded-2 w-100"
                      style={{ backgroundColor: "#fff", color: card.background, border: `1px solid ${card.background}`, marginTop: 16 }}
                      onClick={() => window.open("https://app.creavo.in/#/login", "_blank")}
                    >
                      Choose {card.title}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium full-width card */}
          {planCards.find(c => c.isFullWidth) && (
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10 col-12">
                <div className="card border-0 overflow-hidden shadow-lg mx-auto"
                  style={{ borderRadius: "10px", border: `2px solid ${planCards.find(c => c.isFullWidth).borderColor || '#4a90e2'}`, background: "linear-gradient(135deg, #4a90e220, #4a90e210)" }}>
                  <div className="row g-0 align-items-center">
                    <div className="col-md-8">
                      <div className="p-4">
                        <div className="d-flex align-items-center mb-3">
                          <h3 className="fw-bold mb-0 me-3" style={{ color: planCards.find(c => c.isFullWidth).textColor || '#4a90e2' }}>{planCards.find(c => c.isFullWidth).title}</h3>
                          <span className="badge" style={{ backgroundColor: planCards.find(c => c.isFullWidth).textColor || '#4a90e2', color: "#fff", fontSize: "0.7rem" }}>CUSTOM SOLUTION</span>
                        </div>
                        <h4 className="fw-bold mb-3" style={{ color: planCards.find(c => c.isFullWidth).textColor || '#4a90e2' }}>{planCards.find(c => c.isFullWidth).price}</h4>
                        <div className="row">
                          {planCards.find(c => c.isFullWidth).features.map((feature, i) => (
                            <div key={i} className="col-md-6 mb-2">
                              <div className="d-flex align-items-center">
                                <FaCheck style={{ color: planCards.find(c => c.isFullWidth).textColor || '#4a90e2', marginRight: "8px", fontSize: "0.9rem" }} />
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
                          style={{ background: planCards.find(c => c.isFullWidth).background, color: "#fff", border: "none", fontSize: "1rem", boxShadow: "0 4px 15px rgba(217,70,239,0.3)" }}
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

          /* Plans wrapper — desktop: flush side-by-side */
          .plans-wrapper {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            gap: 0;
            margin-bottom: 2rem;
          }
          .plan-card-wrap {
            flex: 1;
            max-width: 340px;
            min-width: 0;
            position: relative;
            z-index: 1;
          }
          .plan-card {
            border-radius: 5px;
            overflow: hidden;
            height: 100%;
          }
          .plan-card-wrap.plan-popular {
            transform: scale(1.05);
            z-index: 2;
          }

          /* Mobile: stack vertically with gaps */
          @media (max-width: 767px) {
            .plans-wrapper {
              flex-direction: column;
              align-items: center;
              gap: 20px;
            }
            .plan-card-wrap {
              width: 100%;
              max-width: 420px;
            }
            .plan-card-wrap.plan-popular {
              transform: scale(1);
            }
          }

          /* Tablet: slight gap but still horizontal */
          @media (min-width: 768px) and (max-width: 991px) {
            .plan-card-wrap {
              max-width: 220px;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default GetDesignersPage;
