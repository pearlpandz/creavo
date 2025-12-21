import React from "react";
import GetDesignersImage from "../assets/getdesigners-image1.png"; // Replace with actual image path

const AboutUsPage = () => {
  return (
    <>
      {/* 2. Background Section with Heading, Text, and Image */}
      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(90deg, rgba(164, 178, 255, 0.6) 0%, rgba(255, 159, 211, 0.6) 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              <h2
                className="display-6 fw-semibold mb-3"
                style={{ color: "#000" }}
              >
                Design. Build. Elevate.
              </h2>
              <p
                className="lead mb-4"
                style={{ color: "#333", maxWidth: "600px" }}
              >
                At Creavo, we craft digital experiences that empower brands and connect them with their audience. Our mission is simple to turn creative ideas into meaningful, user-focused designs that inspire action and growth.
              </p>
              <button
                className="btn px-5 py-3 rounded-2 fw-bold"
                style={{
                  background:
                    "linear-gradient(90deg, #A4B2FF 0%, #FF9FD3 100%)",
                  border: "none",
                  color: "#363636",
                  fontSize: "1.1rem",
                  boxShadow: "0 4px 15px rgba(164, 178, 255, 0.3)",
                }}
                onClick={() =>
                  window.open("https://app.creavo.in/#/signup", "_blank")
                }
              >
                Explore Now
              </button>
            </div>
            <div className="col-md-6">
              <img
                src={GetDesignersImage}
                alt="App Design Example"
                className="img-fluid rounded-3"
                style={{ maxHeight: "400px", width: "85%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are + Mission & Vision Section */}
      <section className="py-5" style={{ background: "#F0F4FF" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold">Who We Are</h2>
            <p className="lead mx-auto" style={{ maxWidth: "900px" }}>
              Creavo is a digital design and development company that blends creativity, technology, and strategy to build impactful solutions. We specialize in UI/UX design, web development, app design, and digital marketing, delivering products that are visually engaging, user-friendly, and performance-driven. Our team of designers, developers, and strategists collaborate to transform ideas into experiences that drive business success.
            </p>
          </div>

          <div className="row justify-content-center g-5">
            <div className="col-lg-5">
              <div
                className="p-5 rounded-3 shadow-sm text-center h-100 d-flex flex-column justify-content-center"
                style={{ background: "#FFFFFF" }}
              >
                <h4 className="fw-bold mb-3">Our Mission</h4>
                <p className="mb-0">
                  We create modern digital solutions that help businesses grow, build strong customer connections, and stand out in today's competitive market.
                </p>
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="p-5 rounded-3 shadow-sm text-center h-100 d-flex flex-column justify-content-center position-relative"
                style={{ background: "#FFFFFF" }}
              >

                <h4 className="fw-bold mb-3 mt-4">Our Vision</h4>
                <p className="mb-0">
                  To be a leading creative tech partner known for delivering innovative, intuitive, and user-centered experiences worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Creavo Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="display-6 fw-bold text-center mb-5">Why Choose Creavo</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div
                className="p-4 rounded-3 shadow-sm h-100"
                style={{
                  background: "rgba(247, 244, 255, 1)",
                  borderLeft: "5px solid rgba(49, 44, 154, 1)",
                }}
              >
                <h4 className="fw-bold mb-3">One-Stop Solution</h4>
                <p>
                  Design, development, and marketing all under one roof for seamless collaboration and consistent results.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="p-4 rounded-3 shadow-sm h-100"
                style={{
                  background: "rgba(247, 244, 255, 1)",
                  borderLeft: "5px solid rgba(49, 44, 154, 1)",
                }}
              >
                <h4 className="fw-bold mb-3">User-Centric Approach</h4>
                <p>
                  Every decision is driven by understanding your user's needs, ensuring solutions that truly resonate.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="p-4 rounded-3 shadow-sm h-100"
                style={{
                  background: "rgba(247, 244, 255, 1)",
                  borderLeft: "5px solid rgba(49, 44, 154, 1)",
                }}
              >
                <h4 className="fw-bold mb-3">Scalable Designs</h4>
                <p>
                  Our solutions grow with your business, adapting to changing needs and market demands.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="p-4 rounded-3 shadow-sm h-100"
                style={{
                  background: "rgba(247, 244, 255, 1)",
                  borderLeft: "5px solid rgba(49, 44, 154, 1)",
                }}
              >
                <h4 className="fw-bold mb-3">Trusted Partnership</h4>
                <p>
                  From startups to established brands, we're committed to delivering excellence every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-5" style={{ background: "#FFFFFF" }}>
        <div className="container">
          <div className="text-center mb-5 position-relative">
            <h2 className="display-6 fw-bold">Our Core Values</h2>

            {/* Overlapping V and C Circles */}
            <div
              className="d-inline-flex justify-content-center align-items-center position-absolute"
              style={{ top: "50px", left: "50%", transform: "translateX(-50%)" }}
            >
            </div>
          </div>

          <div className="row g-4 justify-content-center mt-5">
            <div className="col-md-6 col-lg-3">
              <div
                className="text-start p-4 rounded-3 shadow-sm h-100 d-flex flex-column"
                style={{ background: "rgba(244, 243, 255, 1)", borderTop: "5px solid rgba(49, 44, 154, 1)" }}
              >
                <div className="mb-4" style={{ fontSize: "3.5rem", color: "#FF9FD3" }}>
                  🎨
                </div>
                <h4 className="fw-bold mb-3">Creativity</h4>
                <p className="mb-0 flex-grow-1">
                  We believe every design tells a story and strive to make it impactful.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div
                className="text-start p-4 rounded-3 shadow-sm h-100 d-flex flex-column"
                style={{ background: "rgba(244, 243, 255, 1)", borderTop: "5px solid rgba(49, 44, 154, 1)" }}
              >
                <div className="mb-4" style={{ fontSize: "3.5rem", color: "#A4B2FF" }}>
                  💡
                </div>
                <h4 className="fw-bold mb-3">Innovation</h4>
                <p className="mb-0 flex-grow-1">
                  We embrace emerging technology to deliver forward-thinking solutions.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div
                className="text-start p-4 rounded-3 shadow-sm h-100 d-flex flex-column"
                style={{ background: "rgba(244, 243, 255, 1)", borderTop: "5px solid rgba(49, 44, 154, 1)" }}
              >
                <div className="mb-4" style={{ fontSize: "3.5rem", color: "#FF9FD3" }}>
                  🤝
                </div>
                <h4 className="fw-bold mb-3">Collaboration</h4>
                <p className="mb-0 flex-grow-1">
                  Teamwork drives our success with clients and within our crew.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div
                className="text-start p-4 rounded-3 shadow-sm h-100 d-flex flex-column"
                style={{ background: "rgba(244, 243, 255, 1)", borderTop: "5px solid rgba(49, 44, 154, 1)" }}
              >
                <div className="mb-4" style={{ fontSize: "3.5rem", color: "#A4B2FF" }}>
                  ⚡
                </div>
                <h4 className="fw-bold mb-3">Excellence</h4>
                <p className="mb-0 flex-grow-1">
                  We deliver quality with every pixel and every interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;