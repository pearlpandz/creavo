import React from "react";
import { FaFolderOpen, FaPencilRuler, FaBolt, FaDownload } from "react-icons/fa";

const WhatWeOffer = () => {
  const cardData = [
    {
      icon: <FaFolderOpen />,
      title: "Vast Library",
      desc: "Access a wide variety of customizable templates for greetings, videos, social media, business branding, and more.",
    },
    {
      icon: <FaPencilRuler />,
      title: "Easy Customization",
      desc: "Our user-friendly tools let you effortlessly change text, colors, and add personal elements to match your brand.",
    },
    {
      icon: <FaBolt />,
      title: "Create Faster",
      desc: "Save valuable time with streamlined design features enabling quick and efficient visual content creation without sacrificing quality.",
    },
    {
      icon: <FaDownload />,
      title: "Easy Download",
      desc: "Export your designs in multiple formats with just a click — no complexity, no delays.",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f9faff" }}>
      <div className="container-fluid">
        <div className="text-center mb-5">
          <h2
            className="fw-bold mb-3"
            style={{ color: "#16112e", fontSize: "2.5rem" }}
          >
            What We Offer?
          </h2>
          <p
            className="lead text-muted"
            style={{ fontSize: "1.25rem" }}
          >
            Design solutions created to elevate. The design space reserved.
          </p>
        </div>

        <div className="row g-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div
                className="card h-100 border-1 shadow-sm rounded-3 p-4 text-start"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#2d336f",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#e3ebff",
                    color: "#397af2ff",
                    fontSize: "1.8rem",
                  }}
                >
                  {card.icon}
                </div>
                <h5 className="fw-bold mb-3">{card.title}</h5>
                <p
                  className="text-muted small mb-0"
                  style={{ lineHeight: "1.6" }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
