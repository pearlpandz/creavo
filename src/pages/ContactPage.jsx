import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHeadset, FaBolt, FaUsers, FaArrowRight, FaHome } from "react-icons/fa";
import ContactUsBackgroundImage from "../assets/contact-us-background-image.jpg";

const contactItems = [
  { icon: FaHome, title: "Registered Address", text: "403, Saharsa Heights, Mothi Nagar, Hyderabad 500018", gradient: "linear-gradient(135deg,#4a90e2,#2563eb)" },
  { icon: FaMapMarkerAlt, title: "Company Address", text: "KBS PVT LTD, Manjeera Trinity Corporate, 1010, 10th floor, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072", gradient: "linear-gradient(135deg,#d946ef,#9333ea)" },
  { icon: FaPhoneAlt, title: "Phone", text: "+91 8750749299", gradient: "linear-gradient(135deg,#10b981,#059669)" },
  { icon: FaEnvelope, title: "Email", text: "support@creavo.in", gradient: "linear-gradient(135deg,#f59e0b,#f97316)" },
];

const supportCards = [
  { icon: FaHeadset, title: "24/7 Support", text: "Round-the-clock assistance for all your needs", gradient: "linear-gradient(135deg,#4a90e2,#2563eb)" },
  { icon: FaBolt, title: "Quick Response", text: "Fast and efficient communication", gradient: "linear-gradient(135deg,#d946ef,#9333ea)" },
  { icon: FaUsers, title: "Expert Team", text: "Skilled professionals at your service", gradient: "linear-gradient(135deg,#f59e0b,#f97316)" },
];

const ContactPage = () => (
  <>
    {/* Hero */}
    <section className="position-relative text-white overflow-hidden" style={{ height: 400, display: "flex", alignItems: "center" }}>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: `url(${ContactUsBackgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.8 }} />
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "rgba(0,0,0,0.45)" }} />
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h1 className="display-4 fw-bold mb-3">Get In Touch</h1>
        <p className="lead mb-4" style={{ opacity: 0.9, maxWidth: 500 }}>Connect with our team to discuss how we can bring your ideas to life.</p>
        <button className="btn fw-semibold px-5 py-3"
          style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", color: "#fff", borderRadius: 10, border: "none", boxShadow: "0 6px 24px rgba(74,144,226,0.35)", transition: "transform 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
          Contact Now
        </button>
      </div>
    </section>

    {/* Contact Info + Form */}
    <section className="py-5" style={{ background: "linear-gradient(135deg,#f8faff 0%,#fdf4ff 100%)" }}>
      <div className="container">
        <div className="row align-items-start gy-4">
          {/* Left */}
          <div className="col-lg-6 pe-lg-5">
            <span className="d-inline-block px-3 py-1 rounded-pill mb-3" style={{ background: "linear-gradient(90deg,#e8f0ff,#fce8ff)", color: "#4c2978", fontSize: "0.85rem", fontWeight: 600 }}>
              Reach Us
            </span>
            <h2 className="fw-bold mb-2" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#16112e" }}>
              Contact{" "}
              <span style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Us</span>
            </h2>
            <p className="mb-4" style={{ color: "#555", fontSize: "1rem" }}>Connect with our team to discuss how we can bring your ideas to life.</p>
            <div className="d-flex flex-column gap-3">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="d-flex align-items-start gap-3 p-3 bg-white rounded-4" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid rgba(74,144,226,0.08)" }}>
                    <div className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0" style={{ width: 44, height: 44, background: item.gradient }}>
                      <Icon color="#fff" size={18} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: "#16112e" }}>{item.title}</h6>
                      <p className="mb-0" style={{ color: "#666", fontSize: "0.93rem" }}>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-6">
            <div className="bg-white rounded-4 p-4" style={{ boxShadow: "0 4px 30px rgba(74,144,226,0.12)", border: "1px solid rgba(74,144,226,0.1)" }}>
              <h4 className="fw-bold mb-4" style={{ color: "#16112e" }}>Send us a Message</h4>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label fw-semibold" style={{ color: "#444", fontSize: "0.9rem" }}>Full Name</label>
                    <input type="text" className="form-control modern-input" placeholder="John Doe" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold" style={{ color: "#444", fontSize: "0.9rem" }}>Email Address</label>
                    <input type="email" className="form-control modern-input" placeholder="john@email.com" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="form-label fw-semibold" style={{ color: "#444", fontSize: "0.9rem" }}>Phone Number</label>
                    <input type="tel" className="form-control modern-input" placeholder="+91 555-000-0000" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold" style={{ color: "#444", fontSize: "0.9rem" }}>Company Name</label>
                    <input type="text" className="form-control modern-input" placeholder="Your Company" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold" style={{ color: "#444", fontSize: "0.9rem" }}>Select Service</label>
                  <select className="form-select modern-input">
                    <option>Choose a service</option>
                    <option>Application Development</option>
                    <option>Web Development</option>
                    <option>Graphic Design</option>
                    <option>Digital Marketing</option>
                    <option>QA Testing</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold" style={{ color: "#444", fontSize: "0.9rem" }}>Message</label>
                  <textarea className="form-control modern-input" rows="4" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="btn w-100 fw-semibold py-3"
                  style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", color: "#fff", border: "none", borderRadius: 10, fontSize: "1rem", boxShadow: "0 4px 14px rgba(74,144,226,0.3)" }}>
                  Send Message <FaArrowRight className="ms-2" size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Support Cards */}
    <section className="py-5" style={{ background: "#fff" }}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {supportCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="col-md-4">
                <div className="text-center p-4 rounded-4 h-100"
                  style={{ background: "linear-gradient(135deg,#f8faff,#fdf4ff)", border: "1px solid rgba(74,144,226,0.1)", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transition: "transform 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                  <div className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3" style={{ width: 64, height: 64, background: card.gradient, boxShadow: "0 6px 18px rgba(0,0,0,0.15)" }}>
                    <Icon size={28} color="#fff" />
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: "#16112e" }}>{card.title}</h5>
                  <p style={{ color: "#666", fontSize: "0.93rem" }}>{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Let's Walk Together */}
    <section className="py-5 text-center" style={{ background: "linear-gradient(135deg,#f8faff 0%,#fdf4ff 100%)" }}>
      <div className="container">
        <h2 className="fw-bold mb-3" style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#16112e" }}>
          Let's{" "}
          <span style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Walk Together
          </span>
        </h2>
        <p className="mb-4" style={{ color: "#555", fontSize: "1.05rem" }}>
          Join us on a journey to transform your vision into success with our expertise and innovation.
        </p>
        <div className="d-inline-flex align-items-center w-100 mx-auto"
          style={{ maxWidth: 560, background: "linear-gradient(90deg,#4a90e2,#d946ef)", borderRadius: 999, padding: "1px", boxShadow: "0 6px 24px rgba(74,144,226,0.3)" }}>
          <input type="text" placeholder="Search projects..."
            style={{ flex: 1, border: "none", outline: "none", background: "#fff", color: "#333", fontSize: "1rem", padding: "10px 20px", borderRadius: "999px 0 0 999px" }} />
          <button type="button" style={{ background: "transparent", border: "none", padding: "10px 18px", cursor: "pointer", display: "flex", alignItems: "center" }}>
            <FaArrowRight color="#fff" size={18} />
          </button>
        </div>
      </div>
    </section>

    <style>{`
      .modern-input { border-radius: 8px !important; border: 1px solid #e0e0e0 !important; font-size: 0.95rem !important; transition: border-color 0.3s, box-shadow 0.3s; }
      .modern-input:focus { border-color: #4a90e2 !important; box-shadow: 0 0 0 3px rgba(74,144,226,0.15) !important; outline: none !important; }
      input::placeholder, textarea::placeholder { color: rgba(0,0,0,0.4); }
    `}</style>
  </>
);

export default ContactPage;
