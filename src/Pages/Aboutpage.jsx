import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import isoLogo from "../assets/iso-certificate.jpg";
import { FiAward, FiCheckCircle, FiShield, FiTrendingUp, FiEye, FiX, FiDownload  } from "react-icons/fi";
import { FaHardHat, FaTools, FaBuilding, FaIndustry } from "react-icons/fa";

const Aboutpage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-indigo-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-800 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900 mb-6">
              About <span className="text-indigo-600">AKR Aluminium</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering excellence in aluminium scaffolding solutions since our
              inception
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 1 */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleUp}
        className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            {/* Text Content */}
            <div className="md:w-1/2 p-8 md:p-12">
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold text-indigo-800 mb-6"
              >
                AKR ALUMINIUM SCAFFOLDING
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-gray-700 leading-relaxed text-lg mb-6"
              >
                Aluminum scaffolding is a versatile and reliable solution for
                working at heights, offering unparalleled benefits across
                construction, maintenance, and industrial applications.
              </motion.p>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-4 mt-8"
              >
                {[
                  {
                    icon: <FiCheckCircle className="w-6 h-6" />,
                    text: "Lightweight yet durable",
                  },
                  {
                    icon: <FaTools className="w-6 h-6" />,
                    text: "Easy to assemble",
                  },
                  {
                    icon: <FiShield className="w-6 h-6" />,
                    text: "Corrosion resistant",
                  },
                  {
                    icon: <FiTrendingUp className="w-6 h-6" />,
                    text: "Boosts productivity",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <span className="text-indigo-600">{feature.icon}</span>
                    <span className="text-gray-700">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Image */}
            <div className="md:w-1/2 relative">
              <img
                src="https://img.freepik.com/premium-vector/woman-builder-reading-plan-construction-site-isolated-white-background-vector-illustration_136875-5110.jpg"
                alt="Aluminium Scaffolding"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/20 to-indigo-800/5"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 2 - ISO Certification */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8"
      >
        {/* Modal/Popup */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative bg-white rounded-xl shadow-xl max-w-md w-full"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-indigo-600 transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
              <img
                src={isoLogo}
                alt="ISO 9001:2015 Certificate"
                className="w-full h-auto object-contain p-6"
              />
              <div className="p-4 border-t border-gray-100 flex justify-center">
             
              </div>
            </motion.div>
          </div>
        )}

        <div className="bg-gradient-to-r from-indigo-700 to-indigo-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            {/* Certificate Image Container */}
            <div className="md:w-1/3 p-8 md:p-12 flex flex-col items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg"
              >
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <img
                    src={isoLogo}
                    alt="ISO 9001:2015 Certified"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-indigo-500/10 rounded-full animate-pulse pointer-events-none"></div>
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    <FiEye className="w-5 h-5" />
                    View Certificate
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Text Content */}
            <div className="md:w-2/3 p-8 md:p-12 text-white">
              <motion.div variants={containerVariants} className="space-y-6">
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <FiAward className="w-10 h-10 text-indigo-200" />
                  <h2 className="text-3xl font-bold">
                    ISO 9001:2015 Certified
                  </h2>
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="text-indigo-100 text-lg leading-relaxed"
                >
                  AKR Scaffolding Ladders proudly maintains ISO 9001:2015
                  certification, demonstrating our systematic approach to
                  quality management and customer satisfaction. This
                  internationally recognized standard validates our commitment
                  to operational excellence.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-indigo-100 text-lg leading-relaxed"
                >
                  Our certification process involved rigorous evaluation of our
                  quality management systems, ensuring consistent delivery of
                  high-quality scaffolding solutions that meet both regulatory
                  requirements and customer expectations.
                </motion.p>

                <motion.div variants={itemVariants} className="pt-2">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-indigo-200">
                      <FiCheckCircle className="w-5 h-5" />
                      <span>Quality Assurance</span>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-200">
                      <FiCheckCircle className="w-5 h-5" />
                      <span>Process Improvement</span>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-200">
                      <FiCheckCircle className="w-5 h-5" />
                      <span>Customer Focus</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center text-indigo-900 mb-12"
        >
          Industries We Serve
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaBuilding className="w-10 h-10 text-indigo-600" />,
              title: "Construction",
              description:
                "Supporting high-rise projects and building maintenance with safe access solutions",
            },
            {
              icon: <FaIndustry className="w-10 h-10 text-indigo-600" />,
              title: "Industrial",
              description:
                "Facilitating maintenance and operations in manufacturing plants",
            },
            {
              icon: <FaHardHat className="w-10 h-10 text-indigo-600" />,
              title: "Oil & Gas",
              description:
                "Providing reliable access solutions for refineries and offshore platforms",
            },
            {
              icon: <FiAward className="w-10 h-10 text-indigo-600" />,
              title: "Aviation",
              description:
                "Supporting aircraft maintenance and airport infrastructure projects",
            },
          ].map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-indigo-50 rounded-full mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="bg-indigo-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-900">
              Why Choose AKR Aluminium Scaffolding?
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              Our commitment to quality and safety sets us apart in the industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Materials",
                description:
                  "We use only the highest grade aluminium alloys for durability and strength",
                icon: "🛠️",
              },
              {
                title: "Safety First",
                description:
                  "All our scaffolding meets and exceeds international safety standards",
                icon: "🛡️",
              },
              {
                title: "Expert Support",
                description:
                  "Our team provides comprehensive guidance from selection to installation",
                icon: "👷",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Aboutpage;
