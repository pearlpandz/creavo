import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home"
import WebDesignServices from "./pages/services/WebDesignServices"; 
import AppDesignServices from "./pages/services/AppDesignServices"
import Shop from "./pages/shop" 
import SocialMediaMarketingPage from "./pages/shop/SocialMediaMarketing"
import WebDesignPage from "./pages/shop/WebDesign"
import AppDesingPage from "./pages/shop/AppDesign"
import LogoDesingPage from "./pages/shop/LogoDesign"
import VisitingCardDesign from "./pages/shop/VisitingCardDesign";
import GetDesignersPage from "./pages/GetDesignersPage";
import Services from "./pages/services";
import LogoAndVisitingService from "./pages/services/LogoAndVisitingService";
import ContactPage from "./pages/ContactPage";
import TermsOfService from "./pages/TermsofService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop/social-media-marketing" element={<SocialMediaMarketingPage />} />
            <Route path="/shop/website-design" element={<WebDesignPage />} />
            <Route path="/shop/app-design" element={<AppDesingPage />} />
            <Route path="/shop/logo-design" element={<LogoDesingPage />} />
            <Route path="/shop/visiting-card-design" element={<VisitingCardDesign />} />
            <Route path="/services/website-design-service" element={<WebDesignServices />} />
            <Route path="/services/app-design-service" element={<AppDesignServices />} />
            <Route path="/services/logo-&-visiting-service" element={<LogoAndVisitingService />} />
            <Route path="/get-designers" element={<GetDesignersPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/about-us" element={<AboutUsPage />} />

            {/* Add more routes for other services as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;