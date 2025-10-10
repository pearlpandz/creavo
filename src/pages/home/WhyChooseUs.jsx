import React from "react";
import { FaRegHeart, FaGlobeAmericas } from "react-icons/fa"; // React icons

const WhyChooseUs = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2
            className="fw-bold mb-2"
            style={{ color: "#1b143f", fontSize: "2.5rem" }}
          >
            Why Choose Creavo..?
          </h2>
          <p className="text-muted" style={{ fontSize: "1.1rem" }}>
            Powerful features to help you create stunning digital cards
          </p>
        </div>

        {/* Feature Cards */}
        <div className="row justify-content-center g-4">
          {/* Creativity Card */}
          <div className="col-12 col-md-6">
            <div
              className="p-4 rounded-2 h-100 shadow-sm"
              style={{
                background: "linear-gradient(90deg, #ffe0f8 0%, #b8dfff 100%)",
                borderRadius: "16px",
                transition: "transform 0.3s ease",
              }}
            >
              <div className="d-flex align-items-start gap-3">

                <div>
                                    <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{
                    backgroundColor: "rgba(251, 188, 188, 1)0f8",
                    width: "60px",
                    height: "60px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    flexShrink: 0,
                  }}
                >
                  <FaRegHeart color="#ff4d6d" size={40} />
                </div>
                  <h5 className="fw-bold mb-2" style={{ color: "#1b143f" }}>
                    Creativity
                  </h5>
                  <p className="text-muted mb-0" style={{ lineHeight: "1.6" }}>
                    Express big emotions through beautifully designed digital
                    cards that capture your message perfectly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Card */}
          <div className="col-12 col-md-6">
            <div
              className="p-4 rounded-2 h-100 shadow-sm"
              style={{
               background: "linear-gradient(90deg, #b8dfff 0%, #ffe0f8 50%)",
                borderRadius: "16px",
                transition: "transform 0.3s ease",
              }}
            >
              <div className="d-flex align-items-start gap-3">
                <div>
                                    <div
                  className="d-flex align-items-center justify-content-center mb-4"
                  style={{
                    backgroundColor: "#aedaffff",
                    width: "60px",
                    height: "60px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    flexShrink: 0,
                  }}
                >
                  <FaGlobeAmericas color="#239bf7ff" size={40} />
                </div>
                  <h5 className="fw-bold mb-2" style={{ color: "#1b143f" }}>
                    Connection
                  </h5>
                  <p className="text-muted mb-0" style={{ lineHeight: "1.6" }}>
                    Bridge the gap with customers, friends, and partners through
                    meaningful digital communications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
