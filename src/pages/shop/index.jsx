import React from "react";
import { FaArrowRight, FaPaintBrush } from "react-icons/fa";
import ShopBackgroundImage from "../../assets/shop-background-image.png";
import SocialMediaImage from "../../assets/shop-category-image1.png";
import WebDesignImage from "../../assets/shop-category-image2.png";
import AppDesignImage from "../../assets/shop-category-image3.png";
import LogoDesignImage from "../../assets/shop-category-image4.png";
import VisitingCardImage from "../../assets/shop-category-image5.png";
import HowItWorksImage1 from "../../assets/howitworks-image1.jpg";
import HowItWorksImage2 from "../../assets/howitworks-image2.jpg";
import HowItWorksImage3 from "../../assets/howitworks-image3.png";
import { useNavigate } from "react-router-dom";

const categoryCards = [
  { image: SocialMediaImage, title: "Social Media Marketing", text: "Boost online presence with ready-to-use social media templates.", category: "Social Media Marketing" },
  { image: WebDesignImage, title: "Website Design", text: "Professional, responsive website layouts tailored for your brand.", category: "Website Design" },
  { image: AppDesignImage, title: "App Design", text: "Engaging UI/UX designs to make your app stand out.", category: "App Design" },
  { image: LogoDesignImage, title: "Logo Design", text: "Unique logos that define your brand identity.", category: "Logo Design" },
  { image: VisitingCardImage, title: "Visiting Card Design", text: "Modern and professional business card templates.", category: "Visiting Card Design" },
];

const steps = [
  { img: HowItWorksImage1, number: "01", caption: "Choose a Template", desc: "Browse hundreds of professionally designed templates across every category." },
  { img: HowItWorksImage2, number: "02", caption: "Customize Your Content", desc: "Edit text, colors, images, and branding to make it uniquely yours." },
  { img: HowItWorksImage3, number: "03", caption: "Download or Share Instantly", desc: "Export in multiple formats or share directly to your audience in one click.", actions: true },
];

const Shop = () => {
  const navigate = useNavigate();
  const handleViewPlans = (category) => navigate(`/shop/${category.toLowerCase().replace(/\s+/g, "-")}`);

  return (
    <>
      {/* Hero */}
      <section className="position-relative text-white overflow-hidden" style={{ minHeight: 420, display: "flex", alignItems: "center" }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: `url(${ShopBackgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", filter: "blur(2px)", transform: "scale(1.05)", zIndex: 0 }} />
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.45)", zIndex: 1 }} />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-5 fw-semibold mb-4" style={{ color: "#fff" }}>Explore Creavo Templates</h1>
          <p className="lead mb-4" style={{ color: "#fff", fontSize: "1.3rem" }}>Choose a category and find ready-to-use designs for your business.</p>
          <button className="btn fw-semibold px-5 py-3"
            style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", color: "#fff", borderRadius: 10, border: "none", boxShadow: "0 6px 24px rgba(74,144,226,0.35)", transition: "transform 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            onClick={() => window.open("https://app.creavo.in/#/login", "_blank")}>
            Explore Now <FaArrowRight className="ms-2" size={14} />
          </button>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-5" style={{ background: "linear-gradient(135deg,#f8faff 0%,#fdf4ff 100%)" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="d-inline-block px-3 py-1 rounded-pill mb-3" style={{ background: "linear-gradient(90deg,#e8f0ff,#fce8ff)", color: "#4c2978", fontSize: "0.85rem", fontWeight: 600 }}>
              Categories
            </span>
            <h2 className="fw-bold mb-2" style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#16112e" }}>
              Browse by{" "}
              <span style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Category</span>
            </h2>
          </div>
          <div className="row g-4">
            {categoryCards.map((card, i) => (
              <div key={i} className="col-md-4 col-sm-6">
                <div
                  className="bg-white rounded-4 overflow-hidden h-100"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1px solid rgba(74,144,226,0.1)", transition: "transform 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(74,144,226,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)"; }}
                >
                  <img src={card.image} alt={card.title} style={{ width: "100%", height: 160, objectFit: "cover" }} />
                  <div className="p-4">
                    <h5 className="fw-bold mb-2" style={{ color: "#16112e" }}>{card.title}</h5>
                    <p className="mb-4" style={{ color: "#666", fontSize: "0.93rem", lineHeight: 1.6 }}>{card.text}</p>
                    <button
                      className="btn btn-sm fw-semibold px-4 py-2 rounded-pill"
                      style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", color: "#fff", border: "none", boxShadow: "0 4px 14px rgba(74,144,226,0.3)", fontSize: "0.88rem" }}
                      onClick={() => handleViewPlans(card.category)}
                    >
                      View Plans <FaArrowRight size={11} className="ms-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container">
          <div className="rounded-4 p-5 text-center position-relative overflow-hidden"
            style={{ background: "linear-gradient(135deg,#4a90e2 0%,#9333ea 50%,#d946ef 100%)", boxShadow: "0 8px 40px rgba(74,144,226,0.3)" }}>
            <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
            <div style={{ position: "absolute", bottom: -30, left: -30, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
            <h2 className="fw-bold text-white mb-2" style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", position: "relative" }}>Ready to get started?</h2>
            <p className="text-white mb-4" style={{ opacity: 0.9, position: "relative" }}>Select any template to start creating, download directly, or customize with your brand colors.</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap" style={{ position: "relative" }}>
              <button className="btn fw-semibold px-4 py-2" style={{ background: "#fff", color: "#4c2978", borderRadius: 8, border: "none", boxShadow: "0 4px 14px rgba(0,0,0,0.12)" }}
                onClick={() => window.open("https://app.creavo.in/#/login", "_blank")}>
                <FaPaintBrush className="me-2" size={14} /> Customize Now
              </button>
              <button className="btn fw-semibold px-4 py-2" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", borderRadius: 8, border: "1px solid rgba(255,255,255,0.4)" }}>
                <FaArrowRight className="me-2" size={14} /> Download
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5" style={{ background: "linear-gradient(135deg,#f8faff 0%,#fdf4ff 100%)" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="d-inline-block px-3 py-1 rounded-pill mb-3" style={{ background: "linear-gradient(90deg,#e8f0ff,#fce8ff)", color: "#4c2978", fontSize: "0.85rem", fontWeight: 600 }}>
              Simple Process
            </span>
            <h2 className="fw-bold mb-2" style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#16112e" }}>
              How It{" "}
              <span style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Works?</span>
            </h2>
          </div>
          <div className="row g-4 justify-content-center">
            {steps.map((step, idx) => (
              <div className="col-12 col-md-4" key={idx}>
                <div className="bg-white rounded-4 overflow-hidden h-100"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid rgba(74,144,226,0.12)", transition: "transform 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(74,144,226,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)"; }}
                >
                  <div style={{ position: "relative" }}>
                    <img src={step.img} alt={step.caption} style={{ width: "100%", height: 200, objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: 12, left: 12, background: "linear-gradient(135deg,#4a90e2,#d946ef)", color: "#fff", fontWeight: 800, fontSize: "1rem", width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(74,144,226,0.4)" }}>
                      {step.number}
                    </div>
                  </div>
                  <div className="p-4">
                    <h5 className="fw-bold mb-2" style={{ color: "#16112e" }}>{step.caption}</h5>
                    <p className="mb-0" style={{ color: "#666", fontSize: "0.93rem", lineHeight: 1.65 }}>{step.desc}</p>
                    {step.actions && (
                      <div className="d-flex gap-2 mt-3">
                        <button className="btn btn-sm fw-semibold px-3" style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", color: "#fff", border: "none", borderRadius: 6 }}>Share</button>
                        <button className="btn btn-sm fw-semibold px-3" style={{ background: "transparent", color: "#4a90e2", border: "1px solid #4a90e2", borderRadius: 6 }}>Download</button>
                      </div>
                    )}
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

export default Shop;
