import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHeadset,
  FaBolt,
  FaUsers,
  FaSearch,
  FaArrowRight,
  FaHome
} from "react-icons/fa";
import ContactUsBackgroundImage from "../assets/contact-us-background-image.jpg";

const ContactPage = () => {
  const cards = [
    {
      icon: FaHeadset,
      title: "24/7 Support",
      text: "Round-the-clock assistance for all your needs",
    },
    {
      icon: FaBolt,
      title: "Quick Response",
      text: "Fast and efficient communication",
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      text: "Skilled professionals at your service",
    },
  ];

  return (
    <>
      {/* Top Section with Background Image */}
      <section
        className="position-relative text-white"
        style={{ height: "400px" }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url(${ContactUsBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
          }}
        ></div>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(rgba(35, 68, 111, 0.7), rgba(35, 68, 111, 0.7))",
          }}
        ></div>
        <div className="container position-relative h-100 d-flex flex-column justify-content-center">
          <h1 className="display-4 fw-bold mb-3">Get In Touch</h1>
          <p className="lead mb-4">
            Connect with our team to discuss how we can bring your ideas to
            life.
          </p>
         <button
  className="btn rounded-2 fw-bold"
  style={{
    background: "linear-gradient(90deg, #A4B2FF 0%, #FF9FD3 100%)",
    border: "none",
    color: "#363636",
    fontSize: "1.1rem",
    boxShadow: "0 4px 15px rgba(164, 178, 255, 0.3)",
    padding: "10px 28px",
    alignSelf: "flex-start", 
  }}
>
  Contact Now
</button>


        </div>
      </section>

      {/* Bottom Contact Section */}
<section className="py-5" style={{ backgroundColor: "#fff" }}>
  <div className="container">
    <div className="row align-items-start gy-4">
      {/* Left Contact Info */}
      <div className="col-lg-6 pe-lg-5">
        <h2 className="fw-bold mb-3" style={{ color: "#23446F" }}>
          Contact Us
        </h2>
        <p className="mb-4" style={{ color: "#333", fontSize: "1.05rem" }}>
          Connect with our team to discuss how we can bring your ideas to life.
        </p>

        <div className="d-flex flex-column gap-3">
          {/* Registered Address */}
          <div
            className="d-flex align-items-start p-3 rounded-3 shadow-sm"
            style={{ backgroundColor: "#E8F0FE" }}
          >
            <div
              className="d-flex align-items-center justify-content-center me-3"
              
            >
              <FaHome color="#23446F" size={22} />
            </div>
            <div>
              <h5 className="mb-1" style={{ color: "#23446F" }}>
                Registered Address
              </h5>
              <p className="mb-0" style={{ color: "#333" }}>
                403, Saharsa Heights, Mothi Nagar, Hyderabad 500018
              </p>
            </div>
          </div>

          {/* Company Address */}
          <div
            className="d-flex align-items-start p-3 rounded-3 shadow-sm"
            style={{ backgroundColor: "#E8F0FE" }}
          >
            <div
              className="d-flex align-items-center justify-content-center me-3"
              
            >
              <FaMapMarkerAlt color="#23446F" size={22} />
            </div>
            <div>
              <h5 className="mb-1" style={{ color: "#23446F" }}>
                Company Address
              </h5>
              <p className="mb-0" style={{ color: "#333" }}>
                KBS PVT LTD, Manjeera Trinity Corporate, 1010, 10th floor, KPHB
                Phase 3, Kukatpally, Hyderabad, Telangana 500072
              </p>
            </div>
          </div>

          {/* Phone */}
          <div
            className="d-flex align-items-start p-3 rounded-3 shadow-sm"
            style={{ backgroundColor: "#E8F0FE" }}
          >
            <div
              className="d-flex align-items-center justify-content-center me-3"
              
            >
              <FaPhoneAlt color="#23446F" size={22} />
            </div>
            <div>
              <h5 className="mb-1" style={{ color: "#23446F" }}>
                Phone
              </h5>
              <p className="mb-0" style={{ color: "#333" }}>+91 8750749299</p>
            </div>
          </div>

          {/* Email */}
          <div
            className="d-flex align-items-start p-3 rounded-3 shadow-sm"
            style={{ backgroundColor: "#E8F0FE" }}
          >
            <div
              className="d-flex align-items-center justify-content-center me-3"
              
            >
              <FaEnvelope color="#23446F" size={22} />
            </div>
            <div>
              <h5 className="mb-1" style={{ color: "#23446F" }}>
                Email
              </h5>
              <p className="mb-0" style={{ color: "#333" }}>
                support@creavo.in
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="col-lg-6 ps-lg-5">
        <div
          className="p-4 rounded-3 shadow-lg"
          style={{
            backgroundColor: "#fff",
            border: "1px solid #dee2e6",
          }}
        >
          <h4 className="fw-bold mb-4" style={{ color: "#23446F" }}>
            Send us a Message
          </h4>
          <form>
            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <label className="form-label" style={{ color: "#333" }}>
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control modern-input"
                  placeholder="John Doe"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" style={{ color: "#333" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control modern-input"
                  placeholder="john@email.com"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <label className="form-label" style={{ color: "#333" }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control modern-input"
                  placeholder="+91 555-000-0000"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label" style={{ color: "#333" }}>
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control modern-input"
                  placeholder="Your Company"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#333" }}>
                Select Service
              </label>
              <select className="form-select modern-input">
                <option>Choose a service</option>
                <option>Application Development</option>
                <option>Web Development</option>
                <option>Graphic Design</option>
                <option>Digital Marketing</option>
                <option>QA Testing</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#333" }}>
                Message
              </label>
              <textarea
                className="form-control modern-input"
                rows="4"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "#23446F",
                color: "#fff",
              }}
            >
              Send Message <FaArrowRight className="ms-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Support Cards Section */}
      <section
        className="py-5"
        style={{ backgroundColor: "#fff", color: "#333" }}
      >
        <div className="container">
          <div className="row g-4 justify-content-center">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="col-md-4">
                  <div
                    className="card h-100 text-center p-4 rounded-3 shadow-sm"
                    style={{ backgroundColor: "#F5F8FF", border: "none" }}
                  >
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 mx-auto"
                      style={{
                        width: 80,
                        height: 80,
                        backgroundColor: "#002B5B",
                      }}
                    >
                      <Icon size={40} color="#FFDB4D" />
                    </div>
                    <h5
                      className="fw-bold mb-2"
                      style={{ color: "#002B5B" }}
                    >
                      {card.title}
                    </h5>
                    <p style={{ color: "#556074" }}>{card.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Let's Walk Together Section */}
      <section className="py-5 text-center" style={{ backgroundColor: "#DDE8F3" }}>
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">
            <span style={{ color: "#FF9500" }}>Let's </span>
            <span style={{ color: "#23446F" }}>Walk Together</span>
          </h2>
          <p className="lead mb-4" style={{ color: "#333" }}>
            Join us on a journey to transform your vision into success with our
            expertise and innovation.
          </p>
          <div
            className="d-inline-flex align-items-center w-100"
            style={{
              maxWidth: 560,
              margin: "0 auto",
              background:
                "linear-gradient(90.23deg, rgba(37, 76, 123, 0.99) 0.2%, rgba(35, 88, 152, 0.78) 94.63%)",
              borderRadius: 999,
              padding: "12px 16px",
              boxShadow: "0 6px 18px rgba(3,43,93,0.12)",
            }}
          >
            <input
              type="text"
              placeholder="Search projects..."
              aria-label="Search projects"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                background: "transparent",
                color: "#fff",
                fontSize: "1.1rem",
                paddingLeft: 18,
                paddingTop: 6,
                paddingBottom: 6,
              }}
            />
            <button
              type="button"
              aria-label="Search"
              style={{
                background: "transparent",
                border: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 8,
                cursor: "pointer",
              }}
            >
              <FaSearch color="#fff" size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* Custom styles */}
      <style>{`
        .modern-input {
          border-radius: 0 !important;
          box-shadow: none !important;
          padding-left: 0.5rem !important;
          padding-right: 0.5rem !important;
          font-size: 1rem !important;
          transition: border-color 0.3s ease;
          border: 1px solid #ccc;
        }
        .modern-input:focus {
          border-color: #23446F !important;
          box-shadow: 0 0 0 0.2rem rgba(35, 68, 111, 0.25) !important;
          outline: none !important;
        }
        input::placeholder,
        textarea::placeholder {
          color: rgba(0, 0, 0, 0.5);
        }
        input[placeholder="Search projects..."]::placeholder {
          color: rgba(255, 255, 255, 0.8) !important;
        }
      `}</style>
    </>
  );
};

export default ContactPage;
