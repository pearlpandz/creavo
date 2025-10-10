import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Dr. Priya Mehta",
    quote:
      "Creavo transformed our online presence! The website design was not only visually stunning but also incredibly user-friendly. Our traffic and inquiries have doubled since launch.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Arjun Malhotra",
    quote:
      "Working with Creavo was a breeze. They understood our vision from day one and delivered a modern, responsive website that perfectly represents our brand.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Sneha Kapoor",
    quote:
      "Their design approach is fantastic — professional yet creative. We received great feedback from our clients about the new site look.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Rohit Sharma",
    quote:
      "Creavo’s attention to detail and post-launch support were outstanding. Definitely recommend them for any digital project!",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  // handle responsive grouping
  const updateSlides = () => {
    const isMobile = window.innerWidth < 768;
    const groupSize = isMobile ? 1 : 2;
    const grouped = [];
    for (let i = 0; i < testimonials.length; i += groupSize) {
      grouped.push(testimonials.slice(i, i + groupSize));
    }
    setSlides(grouped);
    setCurrentSlide(0);
  };

  useEffect(() => {
    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="py-5"
      style={{
        background: "#fff",
        marginBottom: "4rem", // extra space to prevent collision with footer
      }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <h3
              className="fw-semibold mb-2"
              style={{
                color: "#16112e",
                fontSize: "1.5rem",
                letterSpacing: "0.5px",
              }}
            >
              Testimonials
            </h3>
            <h3
              className="fw-bold mb-4"
              style={{
                color: "#16112e",
                fontSize: "2.5rem",
                letterSpacing: "0.5px",
              }}
            >
              Our Success Stories
            </h3>
          </div>
        </div>

        {slides.length > 0 && (
          <div
            className="position-relative"
            style={{
              maxWidth: 980,
              margin: "0 auto",
              padding: "0 20px",
            }}
          >
            {/* Carousel Controls */}
            <button
              onClick={handlePrev}
              className="position-absolute top-50 translate-middle-y d-none d-md-flex"
              type="button"
              style={{
                left: "-44px",
                zIndex: 2,
                width: "58px",
                height: "58px",
                background: "#5b48e7",
                border: "none",
                borderRadius: "5px",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(76,41,120,.08)",
                cursor: "pointer",
              }}
            >
              <FaChevronLeft size={22} color="#fff" />
            </button>

            <button
              onClick={handleNext}
              className="position-absolute top-50 translate-middle-y d-none d-md-flex"
              type="button"
              style={{
                right: "-44px",
                zIndex: 2,
                width: "58px",
                height: "58px",
                background: "#5b48e7",
                border: "none",
                borderRadius: "5px",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(76,41,120,.08)",
                cursor: "pointer",
              }}
            >
              <FaChevronRight size={22} color="#fff" />
            </button>

            {/* Mobile buttons below */}
            <div
              className="d-flex justify-content-center gap-4 mt-4 d-md-none"
            >
              <button
                onClick={handlePrev}
                style={{
                  width: "46px",
                  height: "46px",
                  background: "#5b48e7",
                  border: "none",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px rgba(76,41,120,.15)",
                  cursor: "pointer",
                }}
              >
                <FaChevronLeft size={18} color="#fff" />
              </button>
              <button
                onClick={handleNext}
                style={{
                  width: "46px",
                  height: "46px",
                  background: "#5b48e7",
                  border: "none",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px rgba(76,41,120,.15)",
                  cursor: "pointer",
                }}
              >
                <FaChevronRight size={18} color="#fff" />
              </button>
            </div>

            {/* Testimonials Grid */}
            <div className="row justify-content-center g-4 mt-3">
              {slides[currentSlide].map((testimonial) => (
                <div
                  className="col-12 col-md-6"
                  key={testimonial.id}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="bg-white rounded-4 shadow-sm h-100 p-4 d-flex flex-column align-items-center"
                    style={{
                      borderRadius: "1rem",
                      border: "1.5px solid #f2f2f2",
                      minHeight: 240,
                      position: "relative",
                      boxShadow: "0 1px 12px rgba(76,41,120,0.07)",
                      paddingBottom: "70px",
                      maxWidth: "420px",
                      width: "100%",
                    }}
                  >
                    <p
                      className="mb-3"
                      style={{
                        color: "#3a3751",
                        fontSize: "1.06rem",
                        fontWeight: 400,
                        textAlign: "center",
                        lineHeight: "1.55",
                        marginBottom: "1.8rem",
                      }}
                    >
                      {testimonial.quote}
                    </p>
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#191820",
                        fontSize: "1.2rem",
                        textAlign: "center",
                        marginBottom: "0.7rem",
                      }}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className="position-absolute start-50 translate-middle-x"
                      style={{
                        bottom: "-36px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        style={{
                          width: "72px",
                          height: "72px",
                          objectFit: "cover",
                          borderRadius: "100%",
                          boxShadow: "0 2px 16px rgba(110,96,191,0.18)",
                          border: "3px solid #fff",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
