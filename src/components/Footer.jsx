import React from "react";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row gy-3 py-3">
          {/* Brand Section */}
          <div className="col-md-3 col-12">
            <img src={logo} alt="Creavo" className="footer-logo" />
            <p className="footer-text">
              Transform ideas into stunning digital cards and designs that captivate and engage your audience effortlessly.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-6">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li className="mb-2">
                <Link
                  to="/about-us"
                  className="footer-link"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="footer-link"
                >
                  Templates
                </a>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="footer-link"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact-us"
                  className="footer-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-md-3 col-6">
            <h5 className="footer-heading">Support</h5>
            <ul className="footer-links">
              <li className="mb-2">
                <Link
                  to="/terms-of-service"
                  className="footer-link"
                >
                  Terms of Service
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/privacy-policy"
                  className="footer-link"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/refund-policy"
                  className="footer-link"
                >
                  Refund Policy
                </Link>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="footer-link"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Mail Us Section */}
          <div className="col-md-3 col-12">
            <h5 className="footer-heading">Mail Us</h5>
            <div className="footer-input-group input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <a href="mailto:contact@creavo.com" className="btn">
                <MdEmail size={22} />
              </a>
            </div>
            <div className="footer-address">
              <p className="footer-address-text">
                KBS PVT LTD, Manjeera Trinity Corporate, 1010, 10th floor, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between">
          <p className="footer-company">© 2025 Creavo. All rights reserved.</p>
          <p>
            Product from{" "}
            <span className="footer-company">
              Karthikeya Business Solutions Pvt Ltd
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
