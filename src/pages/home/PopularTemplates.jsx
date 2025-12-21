import React, { useState } from "react";

// 🖼️ Import all template images
import PopularTemplatesImage1 from "../../assets/popular-templates-image1.png";
import PopularTemplatesImage2 from "../../assets/popular-templates-image2.jpg";
import PopularTemplatesImage3 from "../../assets/popular-templates-image3.jpg";
import PopularTemplatesImage4 from "../../assets/popular-templates-image4.jpg";
import PopularTemplatesImage5 from "../../assets/popular-templates-image5.png";
import PopularTemplatesImage6 from "../../assets/popular-templates-image6.jpg";
import PopularTemplatesImage7 from "../../assets/popular-templates-image7.jpg";
import PopularTemplatesImage8 from "../../assets/popular-templates-image8.jpg";

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

const PopularTemplates = () => {
  const [activeTab, setActiveTab] = useState("all");

  // 🧭 Tabs configuration
  const tabs = [
    { id: "all", label: "All Templates" },
    { id: "greetings", label: "Greetings" },
    { id: "motivation", label: "Motivation" },
    { id: "promotions", label: "Promotions" },
    { id: "holidays", label: "Holidays" },
    { id: "quotes", label: "Quotes" },
  ];

  // 🧩 Templates grouped by category
  const templates = {
    all: [
      PopularTemplatesImage1,
      PopularTemplatesImage2,
      PopularTemplatesImage3,
      PopularTemplatesImage4,
      PopularTemplatesImage5,
      PopularTemplatesImage6,
      PopularTemplatesImage7,
      PopularTemplatesImage8,
    ],
    greetings: [
      GreetingsTemplateImage1,
      GreetingsTemplateImage2,
      GreetingsTemplateImage3,
      GreetingsTemplateImage4,
    ],
    motivation: [
      MotivationTemplateImage1,
      MotivationTemplateImage2,
      MotivationTemplateImage3,
      MotivationTemplateImage4,
    ],
    promotions: [
      PromotionsTemplateImage1,
      PromotionsTemplateImage2,
      PromotionsTemplateImage3,
      PromotionsTemplateImage4,
    ],
    holidays: [HolidaysTemplateImage1, HolidaysTemplateImage2],
    quotes: [
      QuotesTemplateImage1,
      QuotesTemplateImage2,
      QuotesTemplateImage3,
      QuotesTemplateImage4,
    ],
  };

  const displayedImages = templates[activeTab] || [];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Title and Subtitle */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2
              className="fw-bold mb-3"
              style={{ color: "#16112e", fontSize: "2.5rem" }}
            >
              Popular Templates
            </h2>
            <p className="lead text-muted" style={{ fontSize: "1.1rem" }}>
              Explore what's trending! Discover our most sought-after categories
              for daily inspiration
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="row justify-content-center mb-4">
          <div className="col-12">
            <ul className="nav nav-pills justify-content-center flex-wrap gap-3">
              {tabs.map((tab) => (
                <li className="nav-item" key={tab.id}>
                  <button
                    className={`nav-link fw-medium px-4 py-2 ${
                      activeTab === tab.id
                        ? "active text-white"
                        : "text-muted border border-secondary-subtle"
                    }`}
                    style={{
                      fontSize: "0.95rem",
                      transition: "all 0.3s ease",
                      backgroundColor:
                        activeTab === tab.id ? "#312C9A" : "transparent",
                    }}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="row g-4">
          {displayedImages.length > 0 ? (
            displayedImages.map((img, idx) => (
              <div className="col-12 col-sm-6 col-md-4" key={idx}>
                <div
                  className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden"
                  style={{
                    backgroundColor: "#fff",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <img
                    src={img}
                    alt={`Template ${idx + 1}`}
                    className="card-img-top"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center text-muted py-5">
              <p>No templates available for this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularTemplates;
