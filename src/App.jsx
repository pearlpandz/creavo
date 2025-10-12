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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/social-media-marketing" element={<SocialMediaMarketingPage />} />
            <Route path="/shop/website-design" element={<WebDesignPage />} />
            <Route path="/shop/app-design" element={<AppDesingPage />} />
            <Route path="/shop/logo-design" element={<LogoDesingPage />} />
            <Route path="/shop/visiting-card-design" element={<VisitingCardDesign />} />
            <Route path="/services/web-design-services" element={<WebDesignServices />} />
            <Route path="/services/app-design-services" element={<AppDesignServices />} />
            <Route path="/get-designers" element={<GetDesignersPage />} />
            {/* Add more routes for other services as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;