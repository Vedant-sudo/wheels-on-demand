/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  // Toggle Dark Mode
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
    <nav className="bg-blue-600 dark:bg-gray-900 text-white p-4 sticky top-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Wheels On Demand
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/cars" className="hover:text-gray-300">Cars</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="focus:outline-none"
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${isOpen ? "max-h-60" : "max-h-0 overflow-hidden"}`}
      >
        <ul className="bg-blue-700 dark:bg-gray-800 text-center py-2 space-y-2">
          <li><Link to="/" className="block py-2 hover:bg-blue-800 dark:hover:bg-gray-700">Home</Link></li>
          <li><Link to="/cars" className="block py-2 hover:bg-blue-800 dark:hover:bg-gray-700">Cars</Link></li>
          <li><Link to="/about" className="block py-2 hover:bg-blue-800 dark:hover:bg-gray-700">About</Link></li>
          <li><Link to="/contact" className="block py-2 hover:bg-blue-800 dark:hover:bg-gray-700">Contact</Link></li>
          <li><Link to="/privacy-policy" className="block py-2 hover:bg-blue-800 dark:hover:bg-gray-700">Privacy Policy</Link></li>
        </ul>
      </div>
    </nav>
  );
}
