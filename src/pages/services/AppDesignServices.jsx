import React from "react";
import { FaMobileAlt, FaCodeBranch, FaUserFriends, FaDollarSign, FaMoneyBillWave, FaHospital, FaBuilding, FaUtensils, FaShoppingCart, FaBookOpen } from "react-icons/fa";
import AppDesingServiceImage from "../../assets/app-desing-services-image.png";


const AppDesignServices = () => {
  return (
    <div className="min-vh-100" style={{ backgroundColor: "#f2e6fa" }}>
      {/* Hero Section */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(90deg, #dacef6ff 30%, #fed9f7ff 100%)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <h1
                className="fw-bold mb-3"
                style={{
                  fontSize: "2.3rem",
                  color: "#3b1667",
                  lineHeight: 1.2,
                }}
              >
                App Design Services That Redefine User Experience
              </h1>
              <p
                className="mb-4"
                style={{
                  fontSize: "1.5rem",
                  color: "#6f4b9f",
                  letterSpacing: "0.02em",
                  maxWidth: 1200,
                  margin: "auto",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                Elevate your mobile presence with custom app design and development services. Our expert team creates intuitive, visually stunning apps tailored to your brand, ensuring seamless user experiences across iOS and Android platforms.
              </p>
              <button
                className="btn fw-semibold"
                style={{
                  background: "#312C9A",
                  color: "#fff",
                  borderRadius: 12,
                  padding: "12px 40px",
                  fontSize: "1.1rem",
                  boxShadow: "0 6px 15px rgba(134, 41, 204, 0.2)",
                  border: "none",
                }}
                onClick={() => window.open("https://app.creavo.in/#/login", "_blank")}
              >
                Get Started with Creavo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our App Design? Section */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2
                className="fw-bold mb-4"
                style={{
                  color: "#191348",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: "0.5px",
                }}
              >
                Why Choose Our App Design?
              </h2>
              <p
                style={{
                  fontSize: "1.4rem",
                  color: "#333",
                  lineHeight: 1.6,
                  marginBottom: "1.8rem",
                }}
              >
                At Creavo, we create mobile app designs that balance beauty, usability, and performance. Whether you're building for Android, iOS, or cross-platform, our designs deliver engaging layouts and intuitive navigation flow that keep users coming back.
              </p>
              <p
                style={{
                  fontSize: "1.4rem",
                  color: "#333",
                  lineHeight: 1.6,
                }}
              >
                We believe an app should not only look stunning but also perform seamlessly. That's why our designs are research-driven, user-centric, and optimized for speed and scalability.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src={AppDesingServiceImage}
                alt="App Desing Service Image"
                className="img-fluid rounded-2 shadow"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our App Desing Offfers */}
      <section
        className="py-5"
        style={{
          background: "#fff",
        }}
      >
        <div className="container">
          <h2
            className="fw-bold mb-5 text-center"
            style={{
              color: "#121212",
              fontSize: "2.5rem",
              fontWeight: 700,
            }}
          >
            Our App Design Offers
          </h2>

          <div className="row g-4">
            {/* Responsive & Mobile-First */}
            <div className="col-lg-4 col-md-6">
              <div
                style={{
                  borderRadius: 8,
                  boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    padding: "30px 50px",
                    background: "linear-gradient(90deg, #7478e0 0%, #fc80bb 100%)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1.15rem",
                    boxSizing: "border-box",
                  }}
                >
                  Native App Desing
                </div>
                <div
                  style={{
                    padding: "28px 24px",
                    color: "#333",
                    fontSize: "1rem",
                    fontWeight: 400,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 15,
                  }}
                >
                  <FaMobileAlt color="#5454a6" size={40} />
                  <p style={{ margin: 0 }}>
                    Tailor-made designs for iOS and Android, optimized for platform guidelines and smooth user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Cross-Platform Compatibility */}
            <div className="col-lg-4 col-md-6">
              <div
                style={{
                  borderRadius: 8,
                  boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    padding: "30px 50px",
                    background: "linear-gradient(90deg, #7478e0 0%, #fc80bb 100%)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1.15rem",
                    boxSizing: "border-box",
                  }}
                >
                  UI/UX Wireframing
                </div>
                <div
                  style={{
                    padding: "28px 24px",
                    color: "#333",
                    fontSize: "1rem",
                    fontWeight: 400,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 15,
                  }}
                >
                  <FaCodeBranch color="#5454a6" size={40} />
                  <p style={{ margin: 0 }}>
                    Research-driven layouts and wireframes to ensure intuitive user journeys before visual design begins.
                  </p>
                </div>
              </div>
            </div>

            {/* User-Centric UI/UX */}
            <div className="col-lg-4 col-md-6">
              <div
                style={{
                  borderRadius: 8,
                  boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    padding: "30px 50px",
                    background: "linear-gradient(90deg, #7478e0 0%, #fc80bb 100%)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1.15rem",
                    boxSizing: "border-box",
                  }}
                >
                  Prototyping & Testing
                </div>
                <div
                  style={{
                    padding: "28px 24px",
                    color: "#333",
                    fontSize: "1rem",
                    fontWeight: 400,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 15,
                  }}
                >
                  <FaUserFriends color="#5454a6" size={40} />
                  <p style={{ margin: 0 }}>
                    Interactive prototypes to test app flows, gather feedback, and refine before launch.
                  </p>
                </div>
              </div>
            </div>

            {/* Cost-Effective Solutions */}
            <div className="col-lg-4 col-md-6">
              <div
                style={{
                  borderRadius: 8,
                  boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    padding: "30px 50px",
                    background: "linear-gradient(90deg, #7478e0 0%, #fc80bb 100%)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1.15rem",
                    boxSizing: "border-box",
                  }}
                >
                  Custom App Branding
                </div>
                <div
                  style={{
                    padding: "28px 24px",
                    color: "#333",
                    fontSize: "1rem",
                    fontWeight: 400,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 15,
                  }}
                >
                  <FaDollarSign color="#5454a6" size={40} />
                  <p style={{ margin: 0 }}>
                    Unique themes, icons, and style guides aligned with your brand identity.
                  </p>
                </div>
              </div>
            </div>
                        {/* Cost-Effective Solutions */}
            <div className="col-lg-4 col-md-6">
              <div
                style={{
                  borderRadius: 8,
                  boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  minHeight: 280,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    padding: "30px 50px",
                    background: "linear-gradient(90deg, #7478e0 0%, #fc80bb 100%)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1.15rem",
                    boxSizing: "border-box",
                  }}
                >
                  Design Systems
                </div>
                <div
                  style={{
                    padding: "28px 24px",
                    color: "#333",
                    fontSize: "1rem",
                    fontWeight: 400,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 15,
                  }}
                >
                  <FaDollarSign color="#5454a6" size={40} />
                  <p style={{ margin: 0 }}>
                    Comprehensive design systems that ensure consistency across your digital products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5" style={{ backgroundColor: "#fff" }}>
  <div className="container">
    <h2 className="fw-bold mb-5 text-center" style={{ color: "#121212", fontSize: "2.5rem", fontWeight: 700 }}>
      Industries We Serve
    </h2>
    <div className="row g-4 justify-content-start">
      {/* Finance Apps */}
      <div className="col-12 col-md-6 col-lg-3">
        <div
          className="d-flex flex-column justify-content-start align-items-start p-4 rounded-3"
          style={{
            backgroundColor: "#e9ecef",
            boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
            minHeight: "190px",
            height: "100%",
            width: "100%",
          }}
        >
          <FaMoneyBillWave size={48} color="#5454a6" className="mb-3" />
          <h6 className="fw-bold mb-0 mt-2" style={{ color: "#16112e", fontSize: "1.2rem", textAlign: "left" }}>
            Finance Apps
          </h6>
        </div>
      </div>
      {/* Healthcare & Dentist Apps */}
      <div className="col-12 col-md-6 col-lg-3">
        <div
          className="d-flex flex-column justify-content-start align-items-start p-4 rounded-3"
          style={{
            backgroundColor: "#e9ecef",
            boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
            minHeight: "190px",
            height: "100%",
            width: "100%",
          }}
        >
          <FaHospital size={48} color="#5454a6" className="mb-3" />
          <h6 className="fw-bold mb-0 mt-2" style={{ color: "#16112e", fontSize: "1.2rem", textAlign: "left" }}>
            Healthcare & Dentist Apps
          </h6>
        </div>
      </div>
      {/* Real Estate Apps */}
      <div className="col-12 col-md-6 col-lg-3">
        <div
          className="d-flex flex-column justify-content-start align-items-start p-4 rounded-3"
          style={{
            backgroundColor: "#e9ecef",
            boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
            minHeight: "190px",
            height: "100%",
            width: "100%",
          }}
        >
          <FaBuilding size={48} color="#5454a6" className="mb-3" />
          <h6 className="fw-bold mb-0 mt-2" style={{ color: "#16112e", fontSize: "1.2rem", textAlign: "left" }}>
            Real Estate Apps
          </h6>
        </div>
      </div>
      {/* Food Delivery Apps */}
      <div className="col-12 col-md-6 col-lg-3">
        <div
          className="d-flex flex-column justify-content-start align-items-start p-4 rounded-3"
          style={{
            backgroundColor: "#e9ecef",
            boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
            minHeight: "190px",
            height: "100%",
            width: "100%",
          }}
        >
          <FaUtensils size={48} color="#5454a6" className="mb-3" />
          <h6 className="fw-bold mb-0 mt-2" style={{ color: "#16112e", fontSize: "1.2rem", textAlign: "left" }}>
            Food Delivery Apps
          </h6>
        </div>
      </div>
      {/* E-Commerce & Retail Apps */}
      <div className="col-12 col-md-6 col-lg-3">
        <div
          className="d-flex flex-column justify-content-start align-items-start p-4 rounded-3"
          style={{
            backgroundColor: "#e9ecef",
            boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
            minHeight: "190px",
            height: "100%",
            width: "100%",
          }}
        >
          <FaShoppingCart size={48} color="#5454a6" className="mb-3" />
          <h6 className="fw-bold mb-0 mt-2" style={{ color: "#16112e", fontSize: "1.2rem", textAlign: "left" }}>
            E-Commerce & Retail Apps
          </h6>
        </div>
      </div>
      {/* Education & E-Learning Apps */}
      <div className="col-12 col-md-6 col-lg-3">
        <div
          className="d-flex flex-column justify-content-start align-items-start p-4 rounded-3"
          style={{
            backgroundColor: "#e9ecef",
            boxShadow: "0 3px 6px rgba(0,0,0,0.12)",
            minHeight: "190px",
            height: "100%",
            width: "100%",
          }}
        >
          <FaBookOpen size={48} color="#5454a6" className="mb-3" />
          <h6 className="fw-bold mb-0 mt-2" style={{ color: "#16112e", fontSize: "1.2rem", textAlign: "left" }}>
            Education & E-Learning Apps
          </h6>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default AppDesignServices;