import React from "react";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container-fluid">
        <div className="row gy-4 py-5">
          <div className="col-md-3 col-12">
            <h3 className="footer-heading">Creavo</h3>
            <p className="text-white footer-text">
              Create and Share Personalized Digital Cards in Seconds
            </p>
          </div>

          <div className="col-md-3 col-6">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#" className="text-white text-decoration-none footer-link">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none footer-link">Templates</a></li>
              <li><a href="#" className="text-white text-decoration-none footer-link">Services</a></li>
              <li><a href="#" className="text-white text-decoration-none footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-6">
            <h5 className="footer-heading">Support</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#" className="text-white text-decoration-none footer-link">Terms of Service</a></li>
              <li><a href="#" className="text-white text-decoration-none footer-link">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none footer-link">FAQ</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-12">
            <h5 className="footer-heading">Mail Us</h5>
            <div className="input-group footer-input-group">
              <input
                type="email"
                className="form-control bg-secondary text-white border-0"
                placeholder="Enter your email"
              />
              <button className="btn btn-primary">
                <MdEmail size={22} />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between text-white small footer-bottom">
          <p className="mb-1">© 2025 Creavo. All rights reserved.</p>
          <p className="mb-1">
            Product from <span className="text-white fw-semibold">Karthikeya Business Solutions Pvt Ltd</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
