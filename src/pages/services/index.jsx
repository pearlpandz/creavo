import React from "react";
import { FaArrowRight, FaPaintBrush  } from "react-icons/fa";
import ShopBackgroundImage from "../../assets/services-background-image.png"; // Replace with your actual background image
import WebDesignImage from "../../assets/services-category-image1.jpg"; // Replace with actual template images
import AppDesignImage from "../../assets/services-category-image2.jpg";
import LogoDesignImage from "../../assets/services-category-image3.jpg";
import HowItWorksImage1 from "../../assets/howitworks-image1.jpg";
import HowItWorksImage2 from "../../assets/howitworks-image2.jpg";
import HowItWorksImage3 from "../../assets/howitworks-image3.png";
import { useNavigate } from "react-router-dom";



const Services = () => {
    const navigate = useNavigate();
    const handleViewPlans = (category) => {
  // Example: navigate to /shop/website-design, /shop/logo-design, etc.
  const formattedCategory = category.toLowerCase().replace(/\s+/g, "-");
  navigate(`/services/${formattedCategory}`);
};


  // Array for Browse by Category Cards
  const categoryCards = [
    {
      image: WebDesignImage,
      title: "Website Design Services",
      text: "Create stunning, responsive websites that bring your brand to life online.",
      category: "Website Design Service",
    },
    {
      image: AppDesignImage,
      title: "App Design Service",
      text: "Build powerful, user-friendly apps that keep your audience connected anytime, anywhere.",
      category: "App Design Service",
    },
    {
      image: LogoDesignImage,
      title: "Logo & Visiting Card Design",
      text: "Design unique, memorable logos & Visiting card  that define your brand’s identity.",
      category: "Logo & Visiting Service",
    }
  ];

  const steps = [
  {
    img: HowItWorksImage1, // Choose a Template
    caption: "Choose a Template",
  },
  {
    img: HowItWorksImage2, // Customize Your Content
    caption: "Customize Your Content",
  },
  {
    img: HowItWorksImage3, // Download or Share Instantly
    caption: "Download or Share Instantly",
    actions: [
      { label: "Share", variant: "primary" },
      { label: "Download", variant: "secondary" },
    ],
  },
];

  return (
    <>
      {/* 1. Explore Creavo Templates Section */}
      <section
  className="py-5 position-relative text-start text-white overflow-hidden"
  style={{
    height: "50vh",
    minHeight: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {/* ✅ Blurred background image layer */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      backgroundImage: `url(${ShopBackgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(2px)", // control blur intensity here
      transform: "scale(1.1)", // prevent blur edges
      zIndex: -2,
    }}
  ></div>

  {/* ✅ Dark overlay for better text contrast */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background: "rgba(0, 0, 0, 0.45)",
      zIndex: -1,
    }}
  ></div>
        <div className="container position-relative">
          <h1 className="display-5 fw-semibold mb-4" style={{ color: "#fff" }}>
           Complete Branding, Web & App Services
          </h1>
          <p className="lead mb-4" style={{ color: "#fff", fontSize: "1.3rem" }}>
            Build your online identity with stunning websites, engaging mobile apps, unique logo designs, and professional visiting cards
          </p>
          <button
            className="btn px-5 py-3 rounded-2 fw-bold"
            style={{
              background: "linear-gradient(90deg, #A4B2FF 0%, #FF9FD3 100%)",
              border: "none",
              color: "#363636",
              fontSize: "1.1rem",
              boxShadow: "0 4px 15px rgba(164, 178, 255, 0.3)",
            }}
                          onClick={() =>
                window.open("https://app.creavo.in/#/login", "_blank")
              }
          >
            Explore Now
          </button>
        </div>
      </section>

     {/* 2. Browse by Category Section */}
<section className="py-5" style={{ backgroundColor: "#fff" }}>
  <div className="container">
    <h2
      className="display-6 fw-bold mb-5 text-start"
      style={{ color: "#5C28A8" }}
    >
      Browse by Category
    </h2>

    <div className="row g-4">
      {categoryCards.map((card, index) => (
        <div key={index} className="col-md-4 col-sm-6">
          <div
            className="d-flex flex-column justify-content-between position-relative text-center rounded-3"
            style={{
              border: "2px solid #5C28A8",
              padding: "20px",
              backgroundColor: "#fff",
              height: "100%",
              transition: "transform 0.3s ease",
            }}
          >
            <div>
              <img
                src={card.image}
                alt={card.title}
                className="img-fluid mb-3 rounded"
                style={{
                  height: "150px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <h5 className="fw-bold mb-2" style={{ color: "#5C28A8" }}>
                {card.title}
              </h5>
              <p className="mb-4" style={{ color: "#333", fontSize: "0.95rem" }}>
                {card.text}
              </p>
            </div>

            <div
              className="position-absolute start-50 translate-middle-x"
              style={{ bottom: "-15px" }}
            >
              <button
  className="btn btn-sm rounded-pill px-4 py-2"
  style={{
    background: "linear-gradient(90deg, #A4B2FF 0%, #FF9FD3 100%)",
    border: "none",
    color: "#000",
    fontSize: "0.85rem",
    boxShadow: "0 2px 6px rgba(164, 178, 255, 0.4)",
  }}
  onClick={() => handleViewPlans(card.category)}
>
  View <FaArrowRight size={12} className="ms-1" />
</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 3. Ready to get started? Section */}
      <section
        className="py-5 position-relative text-center"
        style={{
          background: "linear-gradient(94.09deg, #F7E2F5 0.4%, #DCE2FE 93.89%)",
          minHeight: "300px",
        }}
      >
        <div className="container position-relative">
          <h2 className="display-5 fw-bold mb-4" style={{ color: "#000" }}>
            Ready to get started?
          </h2>
          <p className="lead mb-5" style={{ color: "#000" }}>
            Select any template to start creating, download directly, or customize with your brand colors and logo in no time!
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button
              className="btn px-4 py-3 rounded-2 fw-bold"
              style={{
                backgroundColor: "#312C9A",
                border: "none",
                color: "#fff",
                fontSize: "1.1rem",
                boxShadow: "0 4px 15px rgba(49, 44, 154, 0.3)",
              }}
            >
              <FaPaintBrush size={20} className="me-2" /> Customize Now
            </button>
            <button
              className="btn px-4 py-3 rounded-2 fw-bold"
              style={{
                backgroundColor: "#312C9A",
                border: "none",
                color: "#fff",
                fontSize: "1.1rem",
                boxShadow: "0 4px 15px rgba(49, 44, 154, 0.3)",
              }}
            >
              <FaArrowRight size={20} className="me-2" /> Download
            </button>
          </div>
        </div>
      </section>
      <section className="py-4">
    <div className="container-fluid">
      {/* Heading */}
      <h2
        className="fw-bold text-center mb-4"
        style={{ color: "#292933", fontSize: "2.5rem", marginTop: "1rem" }}
      >
        How It Works?
      </h2>

      {/* Steps */}
      <div className="row justify-content-center mb-0">
        {steps.map((step, idx) => (
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center mb-4 mb-lg-0" key={step.caption}>
            <div
              className="bg-light rounded-2 shadow-sm mb-3"
              style={{ borderRadius: "1rem", padding: "14px", width: "100%", maxWidth: "455px" }}
            >
              <img
                src={step.img}
                alt={step.caption}
                className="w-100"
                style={{
                  height: 300,
                  objectFit: "cover",
                  borderRadius: "0.25rem",
                  marginBottom: 8,
                  background: "#ededed"
                }}
              />
              {/* Action buttons for third step only */}
              {step.actions && (
                <div className="d-flex flex-row justify-content-center gap-2 mb-2 mt-2">
                  <button
                    className="btn btn-primary px-4 py-1"
                    style={{
                      borderRadius: 4,
                      background: "#312C9A",
                      border: "none",
                      fontWeight: 500,
                    }}
                  >
                    Share
                  </button>
                  <button
                    className="btn btn-primary px-4 py-1"
                    style={{
                      borderRadius: 4,
                      background: "#312C9A",
                      color: "#fff",
                      border: "none",
                      fontWeight: 500,
                    }}
                  >
                    Download
                  </button>
                </div>
              )}
            </div>

            <div className="text-center" style={{ fontWeight: 600, fontSize: "1.14rem", color: "#191820", marginTop: 0 }}>
              {step.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

    </>
  );
};

export default Services;