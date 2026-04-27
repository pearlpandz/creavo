import React, { useState } from "react";
import PopularTemplatesImage1 from "../../assets/additional-image1.png";
import PopularTemplatesImage2 from "../../assets/additional-image2.png";
import PopularTemplatesImage3 from "../../assets/additional-image3.png";
import PopularTemplatesImage4 from "../../assets/additional-image4.png";
import PopularTemplatesImage5 from "../../assets/additional-image5.png";
import PopularTemplatesImage6 from "../../assets/additional-image6.png";
import PopularTemplatesImage7 from "../../assets/additional-image7.png";
import PopularTemplatesImage8 from "../../assets/additional-image8.png";
import GreetingsTemplateImage1 from "../../assets/greetings-template1.png";
import GreetingsTemplateImage2 from "../../assets/greetings-template2.jpg";
import GreetingsTemplateImage3 from "../../assets/greetings-template3.png";
import GreetingsTemplateImage4 from "../../assets/greetings-template4.png";
import MotivationTemplateImage1 from "../../assets/motivation-template1.png";
import MotivationTemplateImage2 from "../../assets/motivation-template2.png";
import MotivationTemplateImage3 from "../../assets/motivation-template3.png";
import MotivationTemplateImage4 from "../../assets/motivation-template4.png";
import PromotionsTemplateImage1 from "../../assets/promotions-template1.png";
import PromotionsTemplateImage2 from "../../assets/promotions-template2.png";
import PromotionsTemplateImage3 from "../../assets/promotions-template3.png";
import PromotionsTemplateImage4 from "../../assets/promotions-template4.png";
import HolidaysTemplateImage1 from "../../assets/holidays-template1.png";
import HolidaysTemplateImage2 from "../../assets/holidays-template2.png";
import QuotesTemplateImage1 from "../../assets/quotes-template1.png";
import QuotesTemplateImage2 from "../../assets/quotes-template2.png";
import QuotesTemplateImage3 from "../../assets/quotes-template3.png";
import QuotesTemplateImage4 from "../../assets/quotes-template4.png";

const tabs = [
  { id: "all", label: "All Templates" },
  { id: "greetings", label: "Greetings" },
  { id: "motivation", label: "Motivation" },
  { id: "promotions", label: "Promotions" },
  { id: "holidays", label: "Holidays" },
  { id: "quotes", label: "Quotes" },
];

const templates = {
  all: [PopularTemplatesImage1, PopularTemplatesImage2, PopularTemplatesImage3, PopularTemplatesImage4, PopularTemplatesImage5, PopularTemplatesImage6, PopularTemplatesImage7, PopularTemplatesImage8],
  greetings: [GreetingsTemplateImage1, GreetingsTemplateImage2, GreetingsTemplateImage3, GreetingsTemplateImage4],
  motivation: [MotivationTemplateImage1, MotivationTemplateImage2, MotivationTemplateImage3, MotivationTemplateImage4],
  promotions: [PromotionsTemplateImage1, PromotionsTemplateImage2, PromotionsTemplateImage3, PromotionsTemplateImage4],
  holidays: [HolidaysTemplateImage1, HolidaysTemplateImage2],
  quotes: [QuotesTemplateImage1, QuotesTemplateImage2, QuotesTemplateImage3, QuotesTemplateImage4],
};

const PopularTemplates = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="py-5" style={{ background: "#fff" }}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="d-inline-block px-3 py-1 rounded-pill mb-3"
            style={{ background: "linear-gradient(90deg,#e8f0ff,#fce8ff)", color: "#4c2978", fontSize: "0.85rem", fontWeight: 600 }}>
            Templates
          </span>
          <h2 className="fw-bold mb-2" style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#16112e" }}>
            Popular{" "}
            <span style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Templates
            </span>
          </h2>
          <p className="text-muted" style={{ fontSize: "1.05rem" }}>
            Explore what's trending — discover our most sought-after categories
          </p>
        </div>

        {/* Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "8px 20px", borderRadius: 999, fontWeight: 600, fontSize: "0.88rem",
                border: "none", cursor: "pointer", transition: "all 0.25s",
                background: activeTab === tab.id ? "linear-gradient(90deg,#4a90e2,#d946ef)" : "#f3f4f6",
                color: activeTab === tab.id ? "#fff" : "#555",
                boxShadow: activeTab === tab.id ? "0 4px 14px rgba(74,144,226,0.3)" : "none",
              }}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="row g-4">
          {(templates[activeTab] || []).map((img, idx) => (
            <div className="col-12 col-sm-6 col-md-4" key={idx}>
              <div
                className="rounded-4 overflow-hidden"
                style={{
                  boxShadow: hoveredIdx === idx ? "0 20px 40px rgba(74,144,226,0.18)" : "0 2px 16px rgba(0,0,0,0.07)",
                  transform: hoveredIdx === idx ? "translateY(-8px)" : "translateY(0)",
                  transition: "all 0.3s",
                  border: hoveredIdx === idx ? "1.5px solid rgba(74,144,226,0.25)" : "1.5px solid transparent",
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <img src={img} alt={`Template ${idx + 1}`} style={{ width: "100%", height: 250, objectFit: "cover", display: "block" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTemplates;
