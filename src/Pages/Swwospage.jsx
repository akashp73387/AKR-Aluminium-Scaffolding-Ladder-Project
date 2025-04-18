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
    <div className="w-full ">
      <Navbar />
      {/* Header */}
      <div className="max-w-7xl mx-auto py-6 md:py-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2647] mb-2 md:mb-3">
            Single Width Scaffolding{" "}
            <span className="text-blue-600 block sm:inline">
              Without Stairway
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Professional-grade scaffolding system designed for safe and
            efficient access
          </p>
        </motion.div>
      </div>

      {/* Image + Features */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-6 lg:px-8 pb-8 md:pb-10">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md md:shadow-xl flex flex-col h-full"
        >
          <div className="relative overflow-hidden w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] flex-grow">
            <motion.img
              key={currentImage}
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute bottom-4 left-4 bg-blue-950 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">
              {currentImage + 1}/{images.length}
            </div>
          </div>

          <div className="p-3 md:p-4 grid grid-cols-3 gap-2 md:gap-3 bg-gray-50">
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
                  className={`w-full h-16 sm:h-20 md:h-24 object-cover rounded-lg transition-all duration-300 ${
                    currentImage === index
                      ? "ring-2 md:ring-4 ring-blue-950"
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#0a2647] p-4 md:p-6 rounded-lg shadow-inner h-full overflow-y-auto"
        >
          <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
            Scaffolding Specifications & Features
          </h3>
          <ul className="text-white space-y-4 md:space-y-6 text-xs md:text-sm">
            {[
              "Made of high-quality aluminium alloy with 50mm dia aluminium pipes",
              "Platform size: 2.0m (length) x 0.85m (width); height from 2.2m to 8.2m",
              "The scaffolding can bear maximum load up to 250Kgs.",
              "Stairways and cross bracings ensure all-round safety",
              "No tools required for erection; easy to assemble and dismantle",
              "Claw mechanism spring type bracings for easy fixing and removal",
              "Checkered aluminium platform (open type) with optional toe boards",
              "High quality TIG welding used for durability",
              "Castor wheels with locking mechanism for mobility and safety",
              "Certified to BS EN 1004 standards",
            ].map((feature, index) => (
              <li
                key={index}
                className="relative pl-5 md:pl-6 before:content-['✔'] before:absolute before:left-0"
              >
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="bg-[#F1F5F9] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 rounded-xl shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 border-b border-gray-300 pb-2">
          Single Width Scaffolding Without Stairway
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
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
      <div className="px-4 sm:px-6 lg:px-8 pt-8 md:pt-10 pb-12 md:pb-20">
  <div className="max-w-5xl mx-auto w-full overflow-x-auto"> {/* Responsive max width container */}
    <div className="inline-block min-w-full align-middle">
      <div className="overflow-hidden shadow-sm rounded-lg border border-blue-300">
        <table className="min-w-full table-fixed divide-y divide-blue-200">
          <thead className="bg-blue-50">
            <tr>
              <th
                colSpan={5}
                className="px-4 py-3 text-xl md:text-2xl font-bold text-blue-900 text-center"
              >
                Specifications
              </th>
            </tr>
            <tr className="bg-blue-200">
              <th className="px-3 py-2 text-left text-xs md:text-sm font-semibold text-blue-900 w-1/5">
                Product Code
              </th>
              {["ISFS-002", "ISFS-004", "ISFS-006", "ISFS-008"].map(
                (code, idx) => (
                  <th
                    key={idx}
                    className="px-3 py-2 text-xs md:text-sm font-semibold text-blue-900 text-center w-1/5"
                  >
                    {code}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-200 bg-white">
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
              <tr key={idx} className="hover:bg-blue-50">
                <td className="px-3 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-blue-900 bg-blue-100 w-1/5">
                  {row.label}
                </td>
                {row.values.map((val, i) => (
                  <td
                    key={i}
                    className="px-3 py-2 whitespace-nowrap text-xs md:text-sm text-blue-800 text-center w-1/5"
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
  </div>
</div>


      {/* Extra Accessories Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
          Extra Accessories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {accessories.map((item, index) => {
            const bgColors = ["#FAF1E6", "#FFEDFA", "#E8F9FF", "#E1F0DA"];
            const bgColor = bgColors[index % bgColors.length];

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{ backgroundColor: bgColor }}
                className="border border-gray-200 shadow-sm hover:shadow-md rounded-lg md:rounded-xl p-3 md:p-4 transition duration-300 ease-in-out flex flex-col items-center"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 md:w-28 md:h-28 object-contain mb-3 md:mb-4 rounded-lg"
                />
                <p className="text-center text-xs md:text-sm font-medium text-gray-900">
                  {item.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Swwospage;
