import React, { useState, useEffect } from 'react';
import { 
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram, 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock,
  FaArrowRight, FaWhatsapp, FaChevronDown, FaChevronUp
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AKRLogo from "../assets/Akklogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowQuickLinks(true);
        setShowProducts(true);
      } else {
        setShowQuickLinks(false);
        setShowProducts(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { icon: <FaFacebook size={20} />, url: "#", name: "Facebook" },
    { icon: <FaInstagram size={20} />, url: "#", name: "Instagram" },
    { icon: <FaWhatsapp size={20} />, url: "#", name: "WhatsApp" }
  ];

  const quickLinks = [
    { name: "Home", url: "#home"  },
    { name: "Products", url: "#product" },
    { name: "About Us", url: "/about-page" },
    { name: "Feature", url: "#features" },
    { name: "Our Users", url: "#user" }
  ];

  const products = [
    { name: "Single Width Scaffolding With Stairway", url: "/ISFSW" },
    { name: "Single Width Scaffolding Without Stairway", url: "/ISFS" },
    { name: "Double Width Scaffolding With Stairway", url: "/ISFDW" },
    { name: "Double Width Scaffolding Without Stairway", url: "/ISFD" },
  ];
  
  const legalLinks = [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#091835] to-[#050d22] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
               <img className="h-10 w-auto" src={AKRLogo} alt="Logo" />
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                AKR Ladders
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              AKR Ladders specializes in premium aluminium scaffolding and access solutions. 
              We combine safety, innovation, and durability to deliver exceptional performance 
              for industrial and commercial applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <button 
              onClick={() => setShowQuickLinks(!showQuickLinks)} 
              className="w-full flex justify-between items-center text-xl font-bold text-blue-400 border-b border-blue-600 pb-2 md:cursor-default md:pointer-events-none"
            >
              Quick Links
              <span className="md:hidden">
                {showQuickLinks ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            <ul className={`space-y-3 ${showQuickLinks ? 'block' : 'hidden'} md:block`}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.url.startsWith('#') ? (
                    <a  
                      href={link.url} 
                      onClick={(e) => handleSmoothScroll(e, link.url)}
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
                    >
                      <FaArrowRight className="mr-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
                      <span>{link.name}</span>
                    </a>
                  ) : (
                    <Link 
                      to={link.url}
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
                    >
                      <FaArrowRight className="mr-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="space-y-6">
            <button 
              onClick={() => setShowProducts(!showProducts)} 
              className="w-full flex justify-between items-center text-xl font-bold text-blue-400 border-b border-blue-600 pb-2 md:cursor-default md:pointer-events-none"
            >
              Our Products
              <span className="md:hidden">
                {showProducts ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            <ul className={`space-y-3 ${showProducts ? 'block' : 'hidden'} md:block`}>
              {products.map((product, index) => (
                <li key={index}>
                  <Link 
                    to={product.url} 
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <FaArrowRight className="mr-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
                    <span>{product.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-400 border-b border-blue-600 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  No:1/1103, Kalaignar Street, Gandhi Nagar, Padianallur, Chennai-600 052
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-2 rounded-full">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300">+91 893 905 6555</p>
                  <p className="text-gray-300">+91 866 766 2590</p>
                  <p className="text-gray-300">+91 994 030 6579</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-2 rounded-full">
                  <FaEnvelope className="text-white" />
                </div>
                <a href="mailto:akrgroups2426@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  akrgroups2426@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-2 rounded-full">
                  <FaClock className="text-white" />
                </div>
                <p className="text-gray-300">Mon-Sun: 8:00 AM - 9:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-lg mb-4 md:mb-0">
            &copy; {currentYear} AKR Ladders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
