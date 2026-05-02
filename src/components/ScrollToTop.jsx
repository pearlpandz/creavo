import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTopOnNav = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #4a90e2 0%, #d946ef 100%)",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(74,144,226,0.45)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.8)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        pointerEvents: visible ? "auto" : "none",
        zIndex: 9999,
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1.1)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(74,144,226,0.55)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(74,144,226,0.45)"; }}
    >
      <FaArrowUp size={18} />
    </button>
  );
};

export default ScrollToTopButton;
