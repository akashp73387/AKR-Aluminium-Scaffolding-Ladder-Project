import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AKRLogo from "../assets/Akklogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["home", "features", "user"];
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`bg-[#091835] shadow-md sticky w-full z-20 top-0 left-0 border-b border-gray-200 p-1 transition-all duration-300 ${scrolled ? "bg-opacity-95" : "bg-opacity-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center">
              <img className="h-14 w-auto" src={AKRLogo} alt="Logo" />          
              <span className="text-white text-2xl">AKR Groups </span>
            </NavLink>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-4 md:space-x-8">
              <NavLink
                to="/"
                onClick={() => smoothScroll("home")}
                className={`px-3 py-2 text-sm font-medium no-underline transition-colors duration-300 ${activeSection === "home" ? "text-blue-400" : "text-white hover:text-blue-400"}`}
              >
                Home
              </NavLink>

              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-300"
                >
                  Product
                  {dropdownOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 w-64 bg-[#142850] shadow-lg mt-2 rounded-md z-10">
                    <NavLink to="/ISFSW" className={({ isActive }) => `block px-4 py-2 text-sm transition-colors duration-200 ${isActive ? "text-blue-400" : "text-white hover:bg-indigo-900"}`}>Single Width Scaffolding With Stairway</NavLink>
                    <NavLink to="/ISFS" className={({ isActive }) => `block px-4 py-2 text-sm transition-colors duration-200 ${isActive ? "text-blue-400" : "text-white hover:bg-indigo-900"}`}>Single Width Scaffolding Without Stairway</NavLink>
                    <NavLink to="/ISFDW" className={({ isActive }) => `block px-4 py-2 text-sm transition-colors duration-200 ${isActive ? "text-blue-400" : "text-white hover:bg-indigo-900"}`}>Double Width Scaffolding With Stairway</NavLink>
                    <NavLink to="/ISFD" className={({ isActive }) => `block px-4 py-2 text-sm transition-colors duration-200 ${isActive ? "text-blue-400" : "text-white hover:bg-indigo-900"}`}>Double Width Scaffolding Without Stairway</NavLink>
                  </div>
                )}
              </div>

              <NavLink
                to="/about-page"
                className={({ isActive }) => `px-3 py-2 text-sm font-medium no-underline transition-colors duration-300 ${isActive ? "text-blue-400" : "text-white hover:text-blue-400"}`}
              >
                About Us
              </NavLink>

              <NavLink
                to="/"
                onClick={() => smoothScroll("features")}
                className={`px-3 py-2 text-sm font-medium no-underline transition-colors duration-300 ${activeSection === "features" ? "text-blue-400" : "text-white hover:text-blue-400"}`}
              >
                Features
              </NavLink>

              <NavLink
                to="/"
                onClick={() => smoothScroll("user")}
                className={`px-3 py-2 text-sm font-medium no-underline transition-colors duration-300 ${activeSection === "user" ? "text-blue-400" : "text-white hover:text-blue-400"}`}
              >
                Our Users
              </NavLink>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-600 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#142850] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about-page" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600" onClick={() => setIsOpen(false)}>About Us</NavLink>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 flex items-center w-full"
              >
                Product
                {dropdownOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
              </button>
              {dropdownOpen && (
                <div className="bg-[#142850] shadow-lg mt-2 rounded-md">
                  <NavLink to="/ISFSW" className="block px-4 py-2 text-sm text-white hover:bg-indigo-900" onClick={() => setIsOpen(false)}>Single Width Scaffolding With Stairway</NavLink>
                  <NavLink to="/ISFS" className="block px-4 py-2 text-sm text-white hover:bg-indigo-900" onClick={() => setIsOpen(false)}>Single Width Scaffolding Without Stairway</NavLink>
                  <NavLink to="/ISFDW" className="block px-4 py-2 text-sm text-white hover:bg-indigo-900" onClick={() => setIsOpen(false)}>Double Width Scaffolding With Stairway</NavLink>
                  <NavLink to="/ISFD" className="block px-4 py-2 text-sm text-white hover:bg-indigo-900" onClick={() => setIsOpen(false)}>Double Width Scaffolding Without Stairway</NavLink>
                </div>
              )}
            </div>

            <button onClick={() => { smoothScroll("features"); setIsOpen(false); }} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-300 ${activeSection === "features" ? "text-blue-400" : "text-white hover:text-indigo-600"}`}>Features</button>
            <button onClick={() => { smoothScroll("user"); setIsOpen(false); }} className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-300 ${activeSection === "user" ? "text-blue-400" : "text-white hover:text-indigo-600"}`}>Our Users</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
