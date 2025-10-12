import React, { useState } from "react";

const PopularTemplates = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Templates" },
    { id: "greetings", label: "Greetings" },
    { id: "motivation", label: "Motivation" },
    { id: "promotions", label: "Promotions" },
    { id: "holidays", label: "Holidays" },
    { id: "quotes", label: "Quotes" },
  ];

  // Placeholder images matching the themes in the image (using Unsplash placeholders)
  const templateImages = [
    // Row 1
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop", // Flowers
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop", // Book "Live Life"
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop", // Person on cliff
    // Row 2
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop", // Pencils
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop", // Presentation
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop", // Graphs
    // Row 3
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=300&h=300&fit=crop", // Mountains
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop", // Meeting
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop", // Laptop work
  ];


  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Title and Subtitle */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-3" style={{ color: "#16112e", fontSize: "2.5rem" }}>
              Popular Templates
            </h2>
            <p className="lead text-muted" style={{ fontSize: "1.1rem" }}>
              Explore what's trending! Discover our most sought-after categories for daily inspiration
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
    activeTab === tab.id ? "active text-white" : "text-muted border border-secondary-subtle"
  }`}
  style={{
    fontSize: "0.95rem",
    transition: "all 0.3s ease",
    backgroundColor: activeTab === tab.id ? "#312C9A" : "transparent", // Set custom background color for active tab
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
          {templateImages.slice(0, 12).map((img, idx) => (
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
                  className="card-img-top"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTemplates;