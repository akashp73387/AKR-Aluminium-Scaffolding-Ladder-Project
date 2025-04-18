import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const Highlights = () => {
  const features = [
    {
      title: "Heavy-Duty Aluminium Build",
      icon: "🛠️",
      description: "Industrial-grade aluminium construction for maximum durability",
      color: "bg-[#FAF1E6]",
      iconColor: "text-blue-600"
    },
    {
      title: "Quick & Tool-Free Assembly",
      icon: "⚡",
      description: "Patented locking mechanism enables setup in minutes",
      color: "bg-[#FFEDFA]",
      iconColor: "text-yellow-600"
    },
    {
      title: "Weather & Rust Resistant",
      icon: "🌧️",
      description: "Anodized finish protects against corrosion in all conditions",
      color: "bg-[#E8F9FF]",
      iconColor: "text-gray-600"
    },
    {
      title: "Lightweight & Portable",
      icon: "🏗️",
      description: "Easy to transport and maneuver without compromising strength",
      color: "bg-[#E1F0DA]",
      iconColor: "text-green-600"
    },
    {
      title: "Enhanced Safety Features",
      icon: "🛡️",
      description: "Non-slip rungs and secure locking pins for accident prevention",
      color: "bg-[#D2E0FB]",
      iconColor: "text-red-600"
    },
    {
      title: "Custom Heights Available",
      icon: "📏",
      description: "Modular design allows for flexible height configurations",
      color: "bg-[#C6E7FF]",
      iconColor: "text-purple-600"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="features">
      <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Aluminium Scaffolding Ladder{" "}
              <span className="text-[#2f6ce5]">Features</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto pt-4">
              Engineered for safety, flexibility, and strength — our aluminium
              scaffolding ladders are trusted by professionals across
              industries.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${feature.color}`}
              >
                <div className={`text-4xl mb-4 ${feature.iconColor}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
