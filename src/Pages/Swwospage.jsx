
import React, { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Swwospage = () => {
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

  return (
    <div className="w-full">
      <Navbar/>
      {/* Header */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-8 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl  font-extrabold text-[#0A2647] mb-3">
            Single Width Scaffolding <span className="text-blue-600">Without Stairway</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Professional-grade scaffolding system designed for safe and
            efficient access
          </p>
        </motion.div>
      </div>

      {/* Image + Features */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-8 md:px-12 lg:px-24 pb-10">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-xl flex flex-col h-full"
        >
          <div className="relative overflow-hidden w-full h-[500px] flex-grow">
            <motion.img
              key={currentImage}
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute bottom-4 left-4 bg-blue-950 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentImage + 1}/{images.length}
            </div>
          </div>

          <div className="p-4 grid grid-cols-3 gap-3 bg-gray-50">
            {images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-24 object-cover rounded-lg transition-all duration-300 ${
                    currentImage === index
                      ? "ring-4 ring-blue-950"
                      : "opacity-70 hover:opacity-100"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-gray-50 p-6 rounded-lg shadow-inner h-full overflow-y-auto"
          style={{ backgroundColor: "#0a2647" }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Scaffolding Specifications & Features
          </h3>
          <ul className="text-white space-y-8 text-sm">
            <li className="relative pl-6 before:content-['✔️'] before:absolute before:left-0">
              Made of high-quality aluminium alloy with 50mm dia aluminium pipes
            </li>
            <li className="relative pl-6 before:content-['✔️'] before:absolute before:left-0">
              Platform size: 2.0m (length) x 0.85m (width); height from 2.2m to
              8.2m
            </li>
            <li className="relative pl-6 before:content-['✔️'] before:absolute before:left-0">
              The scaffolding can bear maximum load up to 250Kgs.
            </li>
            <li className="relative pl-6 before:content-['✔️'] before:absolute before:left-0">
              Stairways and cross bracings ensure all-round safety
            </li>
            <li className="relative pl-6 before:content-['✔️'] before:absolute before:left-0">
              No tools required for erection; easy to assemble and dismantle
            </li>
            <li className="relative pl-6 before:content-['✔️'] before:absolute before:left-0">
              Claw mechanism spring type bracings for easy fixing and removal
            </li>
            <li className="relative pl-6 before:content-['✔️'] before:absolute before:left-0">
              Checkered aluminium platform (open type) with optional toe boards
            </li>
            <li className="relative pl-6 before:content-['✔️'] before:absolute before:left-0">
              High quality TIG welding used for durability
            </li>
            <li className="relative pl-6 before:content-['✔️'] before:absolute before:left-0">
              Castor wheels with locking mechanism for mobility and safety
            </li>
            <li className="relative pl-6 before:content-['✔️'] before:absolute before:left-0">
              Certified to BS EN 1004 standards
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="bg-[#F1F5F9] max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-24 py-10 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-2">
          Single Width Scaffolding Without Stairway
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          Instafit Single Width Scaffolding Without Stairway is the perfect
          solution for working safely at heights in tight or restricted spaces.
          Engineered for durability and stability, this scaffolding system is
          built with lightweight yet strong materials, making it easy to
          assemble, transport, and reposition without compromising safety. Its
          compact single-width design allows it to fit through narrow passages
          and doorways, making it ideal for indoor maintenance, facility work,
          or areas with limited floor space. Equipped with anti-slip platforms
          and lockable caster wheels, it ensures both mobility and secure
          placement during use. Whether for construction, repair, or
          installation tasks, the Instafit Single Width Scaffolding offers a
          reliable and space-efficient solution without the need for integrated
          stairways — keeping your operations efficient and compliant with
          safety standards.
        </p>
      </div>

      {/* Table Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-24 pt-10 pb-20">
        <div className="flex justify-center">
          <table className="table-auto w-full max-w-4xl bg-blue-50 shadow-lg rounded-lg border-separate border-spacing-0 ring-1 ring-blue-300">
            <thead>
              <tr>
                <th
                  colSpan={5}
                  className="px-4 py-4 text-2xl font-bold text-blue-900 text-center bg-blue-50"
                >
                  Specifications
                </th>
              </tr>
              <tr className="bg-blue-200 text-left border-b-2 border-blue-300">
                <th className="px-3 py-2 text-sm font-semibold text-blue-900">
                  Product Code
                </th>
                {["ISFS-002", "ISFS-004", "ISFS-006", "ISFS-008"].map(
                  (code, idx) => (
                    <th
                      key={idx}
                      className="px-4 py-2 text-sm font-semibold text-blue-900"
                    >
                      {code}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Length", values: ["2m", "2m", "2m", "2m"] },
                {
                  label: "Width",
                  values: ["0.7m", "0.7m", "0.7m", "0.7m"],
                },
                {
                  label: "Platform Height",
                  values: ["2.2m", "4.2m", "6.2m", "8.2m"],
                },
                { label: "Tower Height", values: ["3m", "5m", "7m", "9m"] },
                {
                  label: "Safe Working Load",
                  values: ["250 kg", "250 kg", "250 kg", "250 kg"],
                },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-blue-200">
                  <td className="px-4 py-3 border-r border-blue-200 text-sm font-medium text-blue-900 bg-blue-100">
                    {row.label}
                  </td>
                  {row.values.map((val, i) => (
                    <td
                      key={i}
                      className={`px-4 py-3 ${
                        i < row.values.length - 1
                          ? "border-r border-blue-100"
                          : ""
                      } text-sm text-blue-800`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Extra Accessories Heading */}
     <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Extra Accessories
            </h2>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {accessories.map((item, index) => {
                const bgColors = ["#FAF1E6", "#FFEDFA", "#E8F9FF", "#E1F0DA"];
                const bgColor = bgColors[index % bgColors.length];
    
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ backgroundColor: bgColor }}
                    className="border border-gray-200 shadow-md hover:shadow-xl rounded-2xl p-4 transition duration-300 ease-in-out flex flex-col items-center"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-28 h-28 object-contain mb-4 rounded-lg "
                    />
                    <p className="text-center text-sm font-semibold text-gray-900">
                      {item.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
       <Footer/>  
    </div>
  );
};

export default Swwospage;
