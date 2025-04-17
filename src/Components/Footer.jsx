import React, { useState, useEffect } from 'react';
import { 
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram, 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock,
  FaArrowRight, FaWhatsapp, FaChevronDown, FaChevronUp
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  // Automatically expand on desktop
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    { icon: <FaFacebook size={20} />, url: "#", name: "Facebook" },
    { icon: <FaTwitter size={20} />, url: "#", name: "Twitter" },
    { icon: <FaLinkedin size={20} />, url: "#", name: "LinkedIn" },
    { icon: <FaInstagram size={20} />, url: "#", name: "Instagram" },
    { icon: <FaWhatsapp size={20} />, url: "#", name: "WhatsApp" }
  ];

  const quickLinks = [
    { name: "Home", url: "#" },
    { name: "Products", url: "#" },
    { name: "About Us", url: "#" },
    { name: "Testimonials", url: "#" },
    { name: "Contact", url: "#" }
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
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="flex items-center">
             
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
                <motion.a 
                  key={index}
                  href={social.url}
                  className="bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300"
                  whileHover={{ y: -3 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
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
                <motion.li key={index} variants={itemVariants}>
                  <a 
                    href={link.url} 
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <FaArrowRight className="mr-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Products */}
          <motion.div className="space-y-6" variants={itemVariants}>
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
                <motion.li key={index} variants={itemVariants}>
                  <a 
                    href={product.url} 
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
                  >
                    <FaArrowRight className="mr-2 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-all" />
                    <span>{product.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-xl font-bold text-blue-400 border-b border-blue-600 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-4">
              <motion.div className="flex items-start space-x-4" variants={itemVariants}>
                <div className="bg-blue-600 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  No:1/1103, Kalaignar Street, Gandhi Nagar, Padianallur, Chennai-600 052
                </p>
              </motion.div>
              <motion.div className="flex items-center space-x-4" variants={itemVariants}>
                <div className="bg-blue-600 p-2 rounded-full">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <p className="text-gray-300">+91 893 905 6555</p>
                  <p className="text-gray-300">+91 866 766 2590</p>
                  <p className="text-gray-300">+91 994 030 6579</p>
                </div>
              </motion.div>
              <motion.div className="flex items-center space-x-4" variants={itemVariants}>
                <div className="bg-blue-600 p-2 rounded-full">
                  <FaEnvelope className="text-white" />
                </div>
                <a href="mailto:akrgroups2426@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  akrgroups2426@gmail.com
                </a>
              </motion.div>
              <motion.div className="flex items-center space-x-4" variants={itemVariants}>
                <div className="bg-blue-600 p-2 rounded-full">
                  <FaClock className="text-white" />
                </div>
                <p className="text-gray-300">Mon-Sun: 8:00 AM - 9:30 PM</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg mb-4 md:mb-0">
            &copy; {currentYear} AKR Ladders. All rights reserved.
          </p>
         
        </motion.div>

        {/* Back to Top */}
        <motion.div 
          className="fixed bottom-6 right-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-gray-100 text-blue-950  p-3 rounded-full shadow-lg transition-all hover:shadow-xl mb-8"
            aria-label="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
