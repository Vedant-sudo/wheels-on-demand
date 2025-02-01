import { useState, useEffect } from "react";
import { Moon, Sun, Twitter, Instagram, Facebook, X as XIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle dark mode
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
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Quick Links */}
        <div>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/Home" className="hover:underline">Home</Link></li>
              <li><Link to="/Cars" className="hover:underline">Cars</Link></li>
              <li><Link to="/About" className="hover:underline">About</Link></li>
              <li><Link to="/ContactUs" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

        {/* Policies */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Policies</h2>
          <p className="text-sm footer-policies">
            We ensure transparency and clarity in all our rental policies. 
            Please review our terms before booking a rental vehicle.
          </p>
          <div>
            <h3 className="font-semibold text-lg">Policies</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/privacy-policy" className="text-blue-500 dark:text-blue-400 hover:underline">Privacy Policy</Link></li>
              <li><Link to="/rental-agreement" className="text-blue-500 dark:text-blue-400 hover:underline">Rental Agreement</Link></li>
              <li><Link to="/refund-cancellation" className="text-blue-500 dark:text-blue-400 hover:underline">Refund & Cancellation</Link></li>
              <li><Link to="/heading-outstations" className="text-blue-500 dark:text-blue-400 hover:underline">Heading Outstations</Link></li>
              <li><Link to="/terms-and-conditions" className="text-blue-500 dark:text-blue-400 hover:underline">Terms and Conditions</Link></li>
              <li><Link to="/damage-penalties" className="text-blue-500 dark:text-blue-400 hover:underline">Damage Penalties</Link></li>
              <li><Link to="/available-cities" className="text-blue-500 dark:text-blue-400 hover:underline">Our Locations</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>
          <p className="text-sm">
            📍 Address: 123 Car Rental Street, New York, USA <br />
            📧 Email: <a href="mailto:support@wheelsondemand.com" className="text-blue-500 dark:text-blue-400">support@wheelsondemand.com</a><br />
            📞 Phone: <a href="tel:+1234567890" className="text-blue-500 dark:text-blue-400">+1 234 567 890</a><br />
            💬 WhatsApp: <a href="https://wa.me/1234567890" className="text-blue-500 dark:text-blue-400">+1 234 567 890</a>
          </p>
          <br />
        </div>
      </div>
       {/* Follow Us Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-blue-400">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 dark:hover:text-pink-400">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-500">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-500">
              <XIcon className="w-6 h-6" />
            </a>
          </div>
          </div>

      {/* Dark Mode Toggle */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-600" />}
        </button>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center text-sm">
        © {new Date().getFullYear()} Car Rental. All Rights Reserved.
      </div>
    </footer>
  );
}
