import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from "react-icons/fa";
import ArunKumar from "../../assets/arunkumar-landvest.jpeg";
import Chaitanya from "../../assets/chaitanya-flybyte.jpeg";
import Prakash from "../../assets/prakash-desisafai.jpeg";
import Manohar from "../../assets/manohar-mdigimart.jpeg";
import Hitesh from "../../assets/hitesh-desidukan.jpeg";
import Shyam from "../../assets/Shyam-mdgpay.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Founder & Managing Director, Landvest",
    avatar: ArunKumar,
    quote: "Creavo has transformed how Landvest markets properties online. Our daily listing posts, project launches, and festive greetings look premium and on-brand every time. Buyer inquiries through social media have gone up noticeably since we started using it.",
  },
  {
    id: 2,
    name: "K. Krishna Chaitanya",
    role: "Director, Flybyte",
    avatar: Chaitanya,
    quote: "As a tech company, we needed designs that looked sharp and modern. Creavo delivers exactly that — clean templates, easy customization, and consistent quality every single day. It's become an essential tool for our marketing team.",
  },
  {
    id: 3,
    name: "K. Satya Prakash",
    role: "Director, Desi Safai",
    avatar: Prakash,
    quote: "Creavo made it incredibly easy for us to maintain a strong social media presence without hiring a full-time designer. The business-specific templates are spot on and the language options help us connect with our local audience.",
  },
  {
    id: 4,
    name: "Manohar",
    role: "Director, Mdigimart",
    avatar: Manohar,
    quote: "We've tried many design tools but Creavo stands out for its simplicity and the sheer variety of templates. From festive greetings to promotional posts, everything is covered. Our clients love the quality of our social media content now.",
  },
  {
    id: 5,
    name: "R. Hitesh Nandan",
    role: "Director, Desi Dukaan",
    avatar: Hitesh,
    quote: "Creavo is a game-changer for small businesses like ours. The daily poster feature keeps our brand visible every day without any extra effort. The templates are fresh, relevant, and perfectly suited for our audience.",
  },
  {
    id: 6,
    name: "Shyam",
    role: "Director, Mdgpay",
    avatar: Shyam,
    quote: "In the fintech space, trust and professionalism are everything. Creavo helps us put out polished, credible content daily — from payment feature highlights to festive offers. It's made our brand look far more established on social media.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [groupSize, setGroupSize] = useState(2);

  useEffect(() => {
    const update = () => { setGroupSize(window.innerWidth < 768 ? 1 : 2); setCurrent(0); };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const slides = [];
  for (let i = 0; i < testimonials.length; i += groupSize) slides.push(testimonials.slice(i, i + groupSize));

  const prev = () => setCurrent(c => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === slides.length - 1 ? 0 : c + 1));

  const NavBtn = ({ onClick, children }) => (
    <button onClick={onClick} style={{
      width: 46, height: 46, borderRadius: "50%", border: "none", cursor: "pointer",
      background: "linear-gradient(135deg, #4a90e2, #d946ef)",
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 4px 14px rgba(74,144,226,0.35)", transition: "transform 0.2s",
    }}
      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >{children}</button>
  );

  return (
    <section className="py-5" style={{ background: "linear-gradient(135deg, #f8faff 0%, #fdf4ff 100%)" }}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="d-inline-block px-3 py-1 rounded-pill mb-3"
            style={{ background: "linear-gradient(90deg,#e8f0ff,#fce8ff)", color: "#4c2978", fontSize: "0.85rem", fontWeight: 600 }}>
            Testimonials
          </span>
          <h2 className="fw-bold mb-2" style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", color: "#16112e" }}>
            Our{" "}
            <span style={{ background: "linear-gradient(90deg,#4a90e2,#d946ef)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Success Stories
            </span>
          </h2>
          <p className="text-muted" style={{ fontSize: "1.05rem" }}>What our customers say about us</p>
        </div>

        {slides.length > 0 && (
          <>
            <div className="row g-4 justify-content-center mb-4">
              {slides[current].map(t => (
                <div className="col-12 col-md-6" key={t.id}>
                  <div className="h-100 bg-white rounded-4 p-4" style={{ boxShadow: "0 4px 24px rgba(74,144,226,0.10)", border: "1px solid rgba(74,144,226,0.1)" }}>
                    <div className="mb-3" style={{ color: "#4a90e2", opacity: 0.4 }}>
                      <FaQuoteLeft size={28} />
                    </div>
                    <div className="d-flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => <FaStar key={i} size={14} color="#f59e0b" />)}
                    </div>
                    <p className="mb-4" style={{ color: "#444", fontSize: "0.97rem", lineHeight: 1.7 }}>{t.quote}</p>
                    <div className="d-flex align-items-center gap-3">
                      <img src={t.avatar} alt={t.name} style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover", objectPosition: "top", border: "2px solid #e8f0ff" }} />
                      <div>
                        <div className="fw-bold" style={{ color: "#16112e", fontSize: "0.97rem" }}>{t.name}</div>
                        <div style={{ color: "#888", fontSize: "0.83rem" }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-center align-items-center gap-3">
              <NavBtn onClick={prev}><FaChevronLeft size={16} /></NavBtn>
              <div className="d-flex gap-2">
                {slides.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} style={{
                    width: i === current ? 24 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer",
                    background: i === current ? "linear-gradient(90deg,#4a90e2,#d946ef)" : "#ddd",
                    transition: "all 0.3s",
                  }} />
                ))}
              </div>
              <NavBtn onClick={next}><FaChevronRight size={16} /></NavBtn>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
