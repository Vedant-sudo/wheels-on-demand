import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer
import PrivacyPolicy from "./components/PrivacyPolicy"; // Import Privacy Policy page
import RentalAgreement from "./components/RentalAgreement";
import RefundCancellation from "./components/RefundCancellation";
import ScrollToTop from "./components/ScrollToTop";
import HeadingOutstations from "./components/HeadingOutstations";
import TermsAndConditions from "./components/TermsAndConditions";
import DamagePenalties from "./components/DamagePenalties";
import AvailableCities from "./components/AvaliableCities";
import Home from "./components/Home";
import LoginOrSignup from "./components/LoginOrSignup";
import ContactUs from "./components/ContactUs";
import Profile from "./components/Profile";
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <ScrollToTop />
        {/* Navbar appears on all pages */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/rental-agreement" element={<RentalAgreement />} />
            <Route path="/refund-cancellation" element={<RefundCancellation />} />
            <Route path="/heading-outstations" element={<HeadingOutstations />} /> 
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/damage-penalties" element={<DamagePenalties />} />
            <Route path="/available-cities" element={<AvailableCities />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginOrSignup />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
