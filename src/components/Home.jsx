import React, { useState, useEffect } from "react";
import ReviewsCarousel from "./ReviewsCarousel";
import AvaliableOffers from "./AvaliableOffers";
import BackgroundWithLogo from "./BackgroundWithLogo";

export default function Home() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle dark mode and save preference to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="container mx-auto">
      {/* Dark Mode toggle button can be added in Navbar to toggle dark mode */}
      <BackgroundWithLogo
        backgroundImage="/images/home/bg.avif" // Add path to background image
        logoImage="/images/home/wod.png" // Add path to logo image
      />
      <br/><br/><br/>
      <ReviewsCarousel /><br/><br/><br/>
      <AvaliableOffers /><br/><br/><br/>
    </div>
  );
}
