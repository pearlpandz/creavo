import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeout = useRef(null);

  const handleToggle = () => setMenuOpen((open) => !open);

  const handleMouseEnter = () => {
    if (window.innerWidth >= 992) {
      clearTimeout(hoverTimeout.current);
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 992) {
      // small delay to prevent flicker
      hoverTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
    }
  };

  const handleDropdownClick = () => {
    if (window.innerWidth < 992) setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    return () => clearTimeout(hoverTimeout.current);
  }, []);

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
        <a className="d-flex align-items-center" href="#" style={{ gap: 10 }}>
          <img src={logo} alt="Creavo" style={{ height: 52, marginRight: 8 }} />
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
              transform: menuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "rotate(0deg)",
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
              transform: menuOpen
                ? "rotate(-45deg) translate(7px, -7px)"
                : "rotate(0deg)",
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

            {/* Services Dropdown */}
            <li
              ref={dropdownRef}
              className="dropdown"
              style={{ position: "relative" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                onClick={handleDropdownClick}
                style={{
                  color: "#312C9A",
                  textDecoration: "none",
                  fontSize: 16,
                  letterSpacing: 0.5,
                  padding: menuOpen ? "8px 0" : "0",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                Services{" "}
                {dropdownOpen ? (
                  <FaChevronUp size={12} color="#312C9A" />
                ) : (
                  <FaChevronDown size={12} color="#312C9A" />
                )}
              </div>

              {dropdownOpen && (
                <ul
                  className="dropdown-menu show"
                  style={{
                    position: window.innerWidth >= 992 ? "absolute" : "static",
                    top: window.innerWidth >= 992 ? "100%" : "auto",
                    left: 0,
                    marginTop: 6,
                    background: "#fff",
                    borderRadius: 10,
                    boxShadow:
                      "0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.05)",
                    padding: "12px 0",
                    minWidth: 240,
                    zIndex: 100,
                  }}
                >
                  {[
                    {
                      to: "/services/website-design-service",
                      text: "Web Design Services",
                    },
                    {
                      to: "/services/app-design-service",
                      text: "App Design Services",
                    },
                    {
                      to: "/services/logo-&-visiting-service",
                      text: "Logo & Visiting Card Design",
                    },
                  ].map(({ to, text }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        className="dropdown-item"
                        style={{
                          color: "#312C9A",
                          textDecoration: "none",
                          padding: "10px 18px",
                          display: "block",
                          transition: "0.3s",
                        }}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
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
            <li>
              <Link
                to="/contact-us"
                style={{
                  color: "#312C9A",
                  textDecoration: "none",
                  fontSize: 16,
                  letterSpacing: 0.5,
                  padding: menuOpen ? "8px 0" : "0",
                }}
              >
                Contact
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
                cursor: "pointer",
              }}
              onClick={() =>
                window.open("https://app.creavo.in/#/signup", "_blank")
              }
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
                cursor: "pointer",
              }}
              onClick={() =>
                window.open("https://app.creavo.in/#/signup", "_blank")
              }
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        @media (max-width: 992px) {
          .container-fluid { padding: 0 1rem !important; }
          .navbar-collapse { display: none !important; }
          .navbar-collapse.open { display: flex !important; }
          .dropdown-menu.show {
            box-shadow: none !important;
            border-radius: 0 !important;
            width: 100% !important;
            padding-left: 1rem;
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
          .dropdown-menu.show a:hover {
            background: #f8f9ff;
            color: #4F46E5;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
