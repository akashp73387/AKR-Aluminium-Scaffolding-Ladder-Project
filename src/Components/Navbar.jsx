import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import AKRLogo from "../assets/Akklogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Smooth scroll function
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  // Add scroll event listener for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-[#091835] shadow-md sticky w-full z-20 top-0 left-0 border-b border-gray-200 p-1 transition-all duration-300 ${
        scrolled ? "bg-opacity-95" : "bg-opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img className="h-14 w-auto" src={AKRLogo} alt="Logo" />
              <span className="text-white text-2xl">AKR Groups </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-4 md:space-x-8">
              <Link to={'/'}
                onClick={() => smoothScroll("home")}
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium no-underline transition-colors duration-300"
              >
                Home
              </Link>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-300"
                >
                  Product
                  {dropdownOpen ? (
                    <FaChevronUp className="ml-2 transition-transform duration-200" />
                  ) : (
                    <FaChevronDown className="ml-2 transition-transform duration-200" />
                  )}
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 w-64 bg-[#142850] shadow-lg mt-2 rounded-md z-10 transition-all duration-300 transform origin-top">
                    <Link
                      to="/ISFSW"
                      className="block px-4 py-2 text-sm text-white hover:bg-indigo-900 transition-colors duration-200"
                    >
                      Single Width Scaffolding With Stairway
                    </Link>
                    <Link
                      to="/ISFS"
                      className="block px-4 py-2 text-sm text-white hover:bg-indigo-900 transition-colors duration-200"
                    >
                      Single Width Scaffolding Without Stairway
                    </Link>
                    <Link
                      to="/ISFDW"
                      className="block px-4 py-2 text-sm text-white hover:bg-indigo-900 transition-colors duration-200"
                    >
                      Double Width Scaffolding With Stairway
                    </Link>
                    <Link
                      to="/ISFD"
                      className="block px-4 py-2 text-sm text-white hover:bg-indigo-900 transition-colors duration-200"
                    >
                      Double Width Scaffolding Without Stairway
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about-page"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium no-underline transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
              to={'/'} 
              
                onClick={() => smoothScroll("features")}
                

                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium no-underline transition-colors duration-300"
              >
                Features
              </Link>
              <Link
              to={'/'}
                onClick={() => smoothScroll("user")}
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium no-underline transition-colors duration-300"
              >
                Our Users
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-600 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6 transition-transform duration-300" />
              ) : (
                <FaBars className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#142850] shadow-lg transition-all duration-300 ease-in-out transform origin-top">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 no-underline transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about-page"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 no-underline transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 flex items-center w-full transition-colors duration-300"
              >
                Product
                {dropdownOpen ? (
                  <FaChevronUp className="ml-2 transition-transform duration-200" />
                ) : (
                  <FaChevronDown className="ml-2 transition-transform duration-200" />
                )}
              </button>
              {dropdownOpen && (
                <div className="bg-[#142850] shadow-lg mt-2 rounded-md transition-all duration-300 transform origin-top">
                  <Link
                    to="/ISFSW"
                    className="block px-4 py-2 text-sm text-white hover:bg-indigo-900 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Single Width Scaffolding With Stairway
                  </Link>
                  <Link
                    to="/ISFS"
                    className="block px-4 py-2 text-sm text-white hover:bg-indigo-900 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Single Width Scaffolding Without Stairway
                  </Link>
                  <Link
                    to="/ISFDW"
                    className="block px-4 py-2 text-sm text-white hover:bg-indigo-900 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Double Width Scaffolding With Stairway
                  </Link>
                  <Link
                    to="/ISFD"
                    className="block px-4 py-2 text-sm text-white hover:bg-indigo-900 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Double Width Scaffolding Without Stairway
                  </Link>
                </div>
              )}
            </div>

            <button
              onClick={() => {
                smoothScroll("features");
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 no-underline w-full text-left transition-colors duration-300"
            >
              Features
            </button>
            <button
              onClick={() => {
                smoothScroll("user");
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 no-underline w-full text-left transition-colors duration-300"
            >
              Our Users
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
