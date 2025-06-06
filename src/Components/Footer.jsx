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

  const [showProducts, setShowProducts] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowProducts(true);
        setShowContact(true);
      } else {
        setShowProducts(false);
        setShowContact(false);
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
          
          </div>

          {/* Google Map */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-400 border-b border-blue-600 pb-2 inline-block">
              Our Location
            </h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-700">
              <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.9338616588802!2d80.16472557512668!3d13.195742887140607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d014a011219%3A0x998ff364b0826210!2sAKR%20Groups%20Ladders!5e1!3m2!1sen!2sin!4v1745046239165!5m2!1sen!2sin"
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                title="AKR Ladders Location"
                className="w-full h-full"
              ></iframe>
             


            </div>
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
            <button 
              onClick={() => setShowContact(!showContact)} 
              className="w-full flex justify-between items-center text-xl font-bold text-blue-400 border-b border-blue-600 pb-2 md:cursor-default md:pointer-events-none"
            >
              Contact Us
              <span className="md:hidden">
                {showContact ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            <div className={`space-y-4 ${showContact ? 'block' : 'hidden'} md:block`}>
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