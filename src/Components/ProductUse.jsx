import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const usageAreas = [
  {
    title: "Railway Terminals",
    description: "Our products ensure safety and efficiency in high-traffic railway environments with durable, weather-resistant solutions.",
    icon: "🚆"
  },
  {
    title: "Fuel Stations",
    description: "Explosion-proof and fire-resistant designs specifically engineered for hazardous fuel station environments.",
    icon: "⛽"
  },
  {
    title: "Events/Exhibitions",
    description: "Modular and temporary solutions that provide both safety and aesthetic appeal for event spaces.",
    icon: "🎪"
  },
  {
    title: "Airports",
    description: "High-performance lighting and signaling systems that meet strict aviation safety standards.",
    icon: "✈️"
  },
  {
    title: "Cinema Hall Production",
    description: "Specialized acoustic and lighting solutions tailored for entertainment venues.",
    icon: "🎬"
  },
  {
    title: "Apartment Hotels & Restaurants",
    description: "Elegant yet functional designs that enhance hospitality environments.",
    icon: "🏨"
  },
  {
    title: "Industrial Sites & Factories",
    description: "Robust, heavy-duty products designed for demanding industrial applications.",
    icon: "🏭"
  },
  {
    title: "Harbours",
    description: "Corrosion-resistant marine-grade solutions for port and harbor installations.",
    icon: "⚓"
  },
  {
    title: "Warehouses",
    description: "High-efficiency lighting and safety systems optimized for large storage facilities.",
    icon: "📦"
  },
];

const bgColors = [
  "bg-[#F6F0F0]",
  "bg-[#EFF3EA]",
  "bg-yellow-50",
  "bg-[#F5EFFF]",
  "bg-teal-50",
  "bg-blue-50",
  "bg-indigo-50",
  "bg-purple-50",
  "bg-pink-50"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

function ProductUse() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <div className="px-4 md:px-10 py-16 bg-gradient-to-br from-blue-50 to-gray-100" id='user'>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Product <span className="text-blue-600">Usage Areas</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the diverse environments where our products excel, providing safety, efficiency, and reliability across industries.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {usageAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                bgColors[index % bgColors.length]
              } ${expandedCard === index ? 'ring-2 ring-blue-800' : 'hover:shadow-lg'}`}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-start justify-between">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <button 
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    aria-label={expandedCard === index ? "Collapse card" : "Expand card"}
                  >
                    {expandedCard === index ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                  </button>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{area.title}</h3>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedCard === index ? 'auto' : 0,
                    opacity: expandedCard === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 pt-2">{area.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ProductUse;
