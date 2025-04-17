import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Swwspage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: image1, alt: "Scaffolding overview" },
    { src: image2, alt: "Scaffolding close-up" },
    { src: image3, alt: "Scaffolding in use" },
  ];

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  };

  const accessories = [
    {
      name: "Ringlock Scaffolding System",
      img: "https://360degreeglobal.com/uploads/accessories/home/1528030601producthome-Ringlock-Scaffolding-System.jpg",
    },
    {
      name: "Scaffolding Accessories Casters",
      img: "https://360degreeglobal.com/uploads/accessories/home/producthome-8.jpg",
    },
    {
      name: "Scaffold Coupler Girder Beam",
      img: "https://360degreeglobal.com/uploads/accessories/home/producthome-9.jpg",
    },
    {
      name: "Scaffold Coupler Swivel Coupler",
      img: "https://360degreeglobal.com/uploads/accessories/home/producthome-10.jpg",
    },
  ];

  // Table data
  const tableData = [
    { label: "Product Code", values: ["ISFSW-002", "ISFSW-004", "ISFSW-006", "ISFSW-008"] },
    { label: "Length", values: ["2m", "2m", "2m", "2m"] },
    { label: "Width", values: ["0.85m", "0.85m", "0.85m", "0.85m"] },
    { label: "Platform Height", values: ["2.2m", "4.2m", "6.2m", "8.2m"] },
    { label: "Tower Height", values: ["3m", "5m", "7m", "9m"] },
    { label: "Safe Working Load", values: ["250 kg", "250 kg", "250 kg", "250 kg"] },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-950 mb-6 leading-tight">
            Single Width Scaffolding <span className="text-blue-600">With Stairway</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Professional-grade scaffolding system with integrated stairway for
            safe and efficient access at any height
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Image + Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative aspect-w-16 aspect-h-9 w-full h-auto min-h-[300px] sm:min-h-[400px]">
              <motion.img
                key={currentImage}
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-full object-contain p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute bottom-4 left-4 bg-blue-900/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {currentImage + 1}/{images.length}
              </div>
            </div>

            <div className="p-4 grid grid-cols-3 gap-3 bg-gray-50 border-t border-gray-200">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="focus:outline-none"
                  onClick={() => handleThumbnailClick(index)}
                  aria-label={`View ${image.alt}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-24 object-cover rounded-lg transition-all duration-200 ${
                      currentImage === index
                        ? "ring-4 ring-blue-600 shadow-md"
                        : "opacity-80 hover:opacity-100"
                    }`}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-xl p-6 lg:p-8 text-white overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-blue-800/20"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Specifications & Features
              </h2>
              
              <ul className="space-y-4">
                {[
                  "Made of high-quality aluminium alloy with 50mm dia aluminium pipes",
                  "Platform size: 2.0m (length) x 0.85m (width); height from 2.2m to 8.2m",
                  "Maximum load capacity: 150 Kgs",
                  "Stairways and cross bracings ensure all-round safety",
                  "No tools required for erection; easy to assemble and dismantle",
                  "Claw mechanism spring type bracings for easy fixing and removal",
                  "Checkered aluminium platform (open type) with optional toe boards",
                  "High quality TIG welding used for durability",
                  "Castor wheels with locking mechanism for mobility and safety",
                  "Certified to BS EN 1004 standards",
                ].map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                    className="flex items-start"
                  >
                    <svg className="flex-shrink-0 w-5 h-5 text-blue-300 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-blue-100">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Description Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-md p-8 mb-16 border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200 flex items-center">
            <svg className="w-8 h-8 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Single Width Scaffolding with Stairway
          </h2>
          <div className="prose prose-blue max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              The <strong>Instafit Single Width Scaffolding With Stairway</strong> is the ideal and safe option while working at heights where space is limited. Designed for compact areas, it ensures maximum functionality without compromising on safety.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The integrated stairway system offers effortless access between levels, making it incredibly user-friendly—especially when carrying tools or equipment. Its ergonomic design minimizes strain and increases productivity for professionals working at elevated heights.
            </p>
            <p className="text-lg leading-relaxed">
              Constructed from lightweight yet durable aluminium, the scaffold is easy to transport and quick to assemble without the need for special tools. The stable platform and anti-slip stairs provide confidence and balance, even during extended work sessions. Whether you're in construction, maintenance, or installation, this scaffolding solution offers a secure and practical setup that's both efficient and compliant with industry standards.
            </p>
          </div>
        </motion.section>

        {/* Responsive Table Section */}
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            Technical Specifications
          </motion.h2>
          
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-50">
                  <tr>
                    <th colSpan={5} className="px-6 py-4 text-center">
                      <h3 className="text-2xl font-bold text-blue-900">Product Specifications</h3>
                    </th>
                  </tr>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-900 uppercase tracking-wider">
                      Specification
                    </th>
                    {tableData[0].values.map((code, idx) => (
                      <th key={idx} scope="col" className="px-6 py-3 text-center text-xs font-medium text-blue-900 uppercase tracking-wider">
                        {code}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tableData.slice(1).map((row, rowIdx) => (
                    <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">
                        {row.label}
                      </td>
                      {row.values.map((value, colIdx) => (
                        <td key={colIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {tableData[0].values.map((code, productIdx) => (
              <motion.div
                key={productIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + (productIdx * 0.1) }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
              >
                <div className="bg-blue-600 px-4 py-3">
                  <h3 className="text-lg font-bold text-white">{code}</h3>
                </div>
                <div className="p-4">
                  <ul className="divide-y divide-gray-200">
                    {tableData.slice(1).map((row, rowIdx) => (
                      <li key={rowIdx} className="py-3 flex justify-between">
                        <span className="text-sm font-medium text-gray-900">{row.label}</span>
                        <span className="text-sm text-gray-700">{row.values[productIdx]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Accessories Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-3xl font-bold text-gray-800 mb-8 text-center"
          >
            <span className="relative inline-block">
              <span className="relative z-10">Recommended Accessories</span>
       
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((item, index) => {
              const bgColors = ["bg-orange-50", "bg-pink-50", "bg-blue-50", "bg-green-50"];
              const borderColors = ["border-orange-200", "border-pink-200", "border-blue-200", "border-green-200"];
              const textColors = ["text-orange-800", "text-pink-800", "text-blue-800", "text-green-800"];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + (index * 0.15) }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className={`rounded-xl overflow-hidden border ${borderColors[index]} ${bgColors[index]} transition-all duration-300 flex flex-col h-full`}
                >
                  <div className="p-6 flex-grow flex flex-col items-center">
                    <div className="w-full h-48 mb-4 flex items-center justify-center bg-white rounded-lg p-4 shadow-inner">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className={`text-lg font-semibold ${textColors[index]} text-center mb-2`}>
                      {item.name}
                    </h3>
                  </div>
                  
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Swwspage;