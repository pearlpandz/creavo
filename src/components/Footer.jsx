import React from "react";
import { MdEmail } from "react-icons/md";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container-fluid">
        <div className="row gy-4 py-5">
          {/* Brand Section */}
          <div className="col-md-3 col-12">
            <h3 className="footer-heading">Creavo</h3>
            <p className="text-white footer-text">
              Create and Share Personalized Digital Cards in Seconds
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-6">
            <h5 className="footer-heading mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link
                  to="/about-us"
                  className="text-white text-decoration-none footer-link"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-white text-decoration-none footer-link"
                >
                  Templates
                </a>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-white text-decoration-none footer-link"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact-us"
                  className="text-white text-decoration-none footer-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-md-3 col-6">
            <h5 className="footer-heading mb-3">Support</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link
                  to="/terms-of-service"
                  className="text-white text-decoration-none footer-link"
                >
                  Terms of Service
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/privacy-policy"
                  className="text-white text-decoration-none footer-link"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/refund-policy"
                  className="text-white text-decoration-none footer-link"
                >
                  Refund Ploicy
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-white text-decoration-none footer-link"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Mail Us Section */}
          <div className="col-md-3 col-12">
            <h5 className="footer-heading mb-3">Mail Us</h5>
            <div className="input-group footer-input-group">
              <input
                type="email"
                className="form-control bg-secondary text-white border-0"
                placeholder="Enter your email"
              />
              <a href="mailto:contact@creavo.com" className="btn btn-primary">
                <MdEmail size={22} />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between text-white small footer-bottom">
          <p className="mb-1">© 2025 Creavo. All rights reserved.</p>
          <p className="mb-1">
            Product from{" "}
            <span className="text-white fw-semibold">
              Karthikeya Business Solutions Pvt Ltd
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
