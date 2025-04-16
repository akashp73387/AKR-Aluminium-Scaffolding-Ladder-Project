import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#091835] shadow-md sticky w-full z-20 top-0 left-0 border-b border-gray-200 p-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo (left side) */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <img 
                className="h-8 w-auto" 
                src="https://logodix.com/logo/343253.png" 
                alt="Logo"
              />
             
            </a>
          </div>

          {/* Desktop Navigation (center to right) */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-4 md:space-x-8">
              <a 
                href="#home" 
                className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium no-underline"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium no-underline"
              >
                About Us
              </a>
              <a 
                href="#product" 
                className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium no-underline"
              >
                Product
              </a>
              <a 
                href="#service" 
                className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium no-underline"
              >
                Service
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-indigo-600 px-3 py-2 text-sm font-medium no-underline"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-indigo-600 focus:outline-none"
              aria-expanded="false"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#142850] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 no-underline"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 no-underline"
            >
              About Us
            </a>
            <a
              href="#product"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 no-underline"
            >
              Product
            </a>
            <a
              href="#service"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 no-underline"
            >
              Service
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-indigo-600 no-underline"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;