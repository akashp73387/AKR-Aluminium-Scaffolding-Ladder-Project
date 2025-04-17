import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    title: "Single Width Scaffolding With Stairway",
    code: "single-width-scaffolding-with-stairway",
    description:
      "Engineered for efficiency in compact spaces. The built-in stairway ensures secure and effortless vertical access, ideal for maintenance and installation tasks.",
    image:
      "https://4.imimg.com/data4/OJ/KG/MY-6180863/aluminium-scaffolding-ladder-1000x1000.png",
  },
  {
    title: "Double Width Scaffolding With Stairway",
    code: "double-width-scaffolding-with-stairway",
    description:
      "Designed for larger teams and heavier loads, this spacious platform combines safety and functionality with easy stairway access for busy sites.",
    image: "https://www.tsuregroup.com/assets/images/home/p1.png",
  },
  {
    title: "Single Width Scaffolding Without Stairway",
    code: "single-width-scaffolding-without-stairway",
    description:
      "Compact and lightweight, perfect for quick repairs in tight areas. Built to last with high-strength aluminium frames and anti-slip platforms.",
    image: "http://www.tsuregroup.com/assets/images/home/3.png",
  },
  {
    title: "Double Width Scaffolding Without Stairway",
    code: "double-width-scaffolding-without-stairway",
    description:
      "Offers a broad, stable working surface with minimal footprint. Ideal for construction professionals requiring mobility and reliability.",
    image:
      "https://www.pngkey.com/png/full/349-3497704_youngman-boss-narrow-tower-scaffold-boss-youngman.png",
  },
];

const Products = () => {
  return (
    <div className="py-10 bg-[#F2F9FF]" id="product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Premium <span className="text-blue-700">Aluminium Scaffolding</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Lightweight. Durable. Engineered for precision. Our scaffolding
            solutions serve industrial, maintenance, and construction needs with
            top-tier performance.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 ">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f4f5ff]  rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative pt-[120%] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute top-0 left-0 w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#0A2647] text-white text-xs px-3 py-1 rounded-full shadow">
                  {product.code}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 flex-grow mb-6">
                  {product.description}
                </p>
                <Link
                  to={`/${product.code}`}
                  className="mt-auto bg-[#0A2647] hover:bg-[#3A3960] text-white text-sm py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center shadow"
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
