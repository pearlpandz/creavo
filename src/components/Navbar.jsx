import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom"; // Add this import at the top

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);

  return (
    <nav
      className="border-b"
      style={{
        background: "#fff",
        width: "100%",
        padding: "0.5rem 0",
        boxShadow: "0 0 0 1px #eee",
        position: "relative",
        zIndex: 50,
      }}
    >
      <div
        className="container-fluid d-flex align-items-center justify-content-between"
        style={{
          width: "100%",
          margin: "0 auto",
          padding: "0 2rem",
          minHeight: 60,
        }}
      >
        {/* Logo */}
        <a
          className="d-flex align-items-center"
          href="#"
          style={{ gap: 10 }}
        >
          <img
            src={logo}
            alt="Creavo"
            style={{ height: 52, marginRight: 8 }}
          />
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="d-lg-none"
          aria-label="Toggle navigation"
          onClick={handleToggle}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            marginLeft: "auto",
            padding: 8,
            transition: "transform 0.3s ease",
            transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
          }}
        >
          <span
            style={{
              display: "block",
              width: 28,
              height: 3,
              background: "#312C9A",
              borderRadius: 2,
              marginBottom: 6,
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0deg)",
            }}
          />
          <span
            style={{
              display: "block",
              width: 28,
              height: 3,
              background: "#312C9A",
              borderRadius: 2,
              marginBottom: 6,
              transition: "transform 0.3s ease, opacity 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 28,
              height: 3,
              background: "#312C9A",
              borderRadius: 2,
              transition: "transform 0.3s ease",
              transform: menuOpen ? "rotate(-45deg) translate(7px, -7px)" : "rotate(0deg)",
            }}
          />
        </button>

        {/* Full menu - desktop and open mobile */}
        <div
          className={`navbar-collapse d-flex align-items-center justify-content-between ${
            menuOpen ? "open" : ""
          }`}
          style={{
            flex: 1,
            display: menuOpen ? "flex" : "",
            flexDirection: menuOpen ? "column" : "row",
            alignItems: menuOpen ? "flex-start" : "center",
            top: 60,
            left: 0,
            width: "100%",
            background: menuOpen ? "#fff" : undefined,
            position: menuOpen ? "absolute" : "static",
            boxShadow: menuOpen ? "0 8px 18px -6px #ddd" : "none",
            padding: menuOpen ? "1rem 2rem" : "0",
          }}
        >
          <ul
            className="d-flex align-items-center"
            style={{
              gap: menuOpen ? 20 : 30,
              margin: 0,
              padding: 0,
              listStyle: "none",
              flex: 1,
              justifyContent: menuOpen ? "flex-start" : "center",
              fontWeight: 500,
              flexDirection: menuOpen ? "column" : "row",
              width: menuOpen ? "100%" : "auto",
            }}
          >
            <li>
              <Link
                to="/"
                style={{
                  color: "#312C9A",
                  textDecoration: "none",
                  fontSize: 16,
                  letterSpacing: 0.5,
                  padding: menuOpen ? "8px 0" : "0",
                }}
              >
                Home
              </Link>
            </li>
            <li className="dropdown" style={{ position: "relative" }}>
              <a
                href="#"
                style={{
                  color: "#312C9A",
                  textDecoration: "none",
                  fontSize: 16,
                  letterSpacing: 0.5,
                  padding: menuOpen ? "8px 0" : "0",
                }}
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              <ul
                className="dropdown-menu"
                style={{
                  fontSize: 20,
                  minWidth: 260,
                  minHeight:150
                }}
              >
                <li>
                  <Link className="dropdown-item" to="/services/web-design-services">
      Web Design Services
    </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/services/app-design-services">
      App Design Services
    </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/logo-design">
      Logo & Visiting Card Design
    </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/shop"
                style={{
                  color: "#312C9A",
                  textDecoration: "none",
                  fontSize: 16,
                  letterSpacing: 0.5,
                  padding: menuOpen ? "8px 0" : "0",
                }}
              >
                Shop
              </Link>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#312C9A",
                  textDecoration: "none",
                  fontSize: 16,
                  letterSpacing: 0.5,
                  padding: menuOpen ? "8px 0" : "0",
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <Link
                to="/get-designers"
                style={{
                  color: "#312C9A",
                  textDecoration: "none",
                  fontSize: 16,
                  letterSpacing: 0.5,
                  padding: menuOpen ? "8px 0" : "0",
                }}
              >
                Get Designers
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div
            className="d-flex"
            style={{
              gap: 14,
              flexDirection: menuOpen ? "column" : "row",
              marginTop: menuOpen ? 18 : 0,
              width: menuOpen ? "100%" : "auto",
            }}
          >
            <button
              style={{
                border: "1.5px solid #312C9A",
                background: "#fff",
                color: "#312C9A",
                borderRadius: 8,
                padding: "6px 16px",
                fontWeight: 500,
                fontSize: 15,
                width: menuOpen ? "100%" : "auto",
                marginBottom: menuOpen ? 10 : 0,
              }}
            >
              Sign Up
            </button>
            <button
              style={{
                background: "#4F46E5",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "6px 18px",
                fontWeight: 500,
                fontSize: 15,
                boxShadow: "0 1px 2px 0 #eee",
                width: menuOpen ? "100%" : "auto",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* simple media queries */}
      <style>{`
        @media (max-width: 992px) {
          .container-fluid {
            padding: 0 1rem !important;
          }
          .navbar-collapse {
            display: none !important;
          }
          .navbar-collapse.open {
            display: flex !important;
          }
        }
        @media (min-width: 992px) {
          .d-lg-none { display: none !important; }
          .navbar-collapse {
            display: flex !important;
            position: static !important;
            box-shadow: none !important;
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            background: transparent !important;
            width: auto !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;