import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import isoLogo from "../assets/iso-certificate.jpg";
import iso14001Logo from "../assets/iso-14001-certificate.jpg";
import { FiAward, FiCheckCircle, FiShield, FiTrendingUp, FiEye, FiX } from "react-icons/fi";
import { FaHardHat, FaTools, FaBuilding, FaIndustry } from "react-icons/fa";

const Aboutpage = () => {
 
   const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [isFullScreen, setIsFullScreen] = useState(false);
  
    const openModal = (img, fullScreen = false) => {
      setSelectedCertificate(img);
      setIsFullScreen(fullScreen);
      setIsModalOpen(true);
    };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-indigo-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-800 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-950 mb-6">
            About <span className="text-indigo-700">AKR Aluminium</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering excellence in aluminium scaffolding solutions since our inception
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            {/* Text Content */}
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-4xl font-bold text-indigo-800 mb-6">
                AKR ALUMINIUM SCAFFOLDING
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Aluminum scaffolding is a versatile and reliable solution for working at heights,
                offering unparalleled benefits across construction, maintenance, and industrial applications.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <FiCheckCircle className="w-6 h-6" />, text: "Lightweight yet durable" },
                  { icon: <FaTools className="w-6 h-6" />, text: "Easy to assemble" },
                  { icon: <FiShield className="w-6 h-6" />, text: "Corrosion resistant" },
                  { icon: <FiTrendingUp className="w-6 h-6" />, text: "Boosts productivity" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-indigo-600">{feature.icon}</span>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
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
      </section>

      {/* Section 2 - ISO Certification */}
      <section className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
        {isModalOpen && (
                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
                   <button
                     onClick={() => setIsModalOpen(false)}
                     className="absolute top-4 right-4 text-white hover:text-indigo-300 transition-colors z-50"
                   >
                     <FiX className="w-8 h-8" />
                   </button>
                   <img
                     src={selectedCertificate}
                     alt="Certificate Fullscreen"
                     className={`${
                       isFullScreen
                         ? "max-w-full max-h-full object-contain"
                         : "max-w-md w-full h-auto object-contain p-6 bg-white rounded-xl shadow-xl"
                     }`}
                   />
                 </div>
               )}

        <div className="bg-gradient-to-r from-indigo-900 to-blue-950 rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="flex flex-col md:flex-row items-center">
            {/* Certificate Image */}
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

            {/* Text */}
            <div className="md:w-2/3 p-8 md:p-12 text-white space-y-6">
              <div className="flex items-center gap-4">
                <FiAward className="w-10 h-10 text-yellow-500" />
                <h2 className="text-3xl font-bold">ISO 9001:2015 Certified</h2>
              </div>

              <p className="text-indigo-100 text-lg leading-relaxed">
                AKR Scaffolding Ladders proudly maintains ISO 9001:2015 certification,
                demonstrating our systematic approach to quality management and customer satisfaction.
              </p>

              <p className="text-indigo-100 text-lg leading-relaxed">
                Our certification process involved rigorous evaluation of our quality management systems,
                ensuring consistent delivery of high-quality scaffolding solutions.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {["Quality Assurance", "Process Improvement", "Customer Focus"].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 text-indigo-200">
                    <FiCheckCircle className="w-5 h-5 text-emerald-500" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="bg-gradient-to-r from-indigo-900 to-blue-950 rounded-3xl shadow-2xl overflow-hidden ">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 p-8 md:p-12 flex flex-col items-center justify-center">
                      <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
                        <div className="relative w-48 h-48 flex items-center justify-center">
                          <img
                            src={iso14001Logo}
                            alt="ISO 14001:2015"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 bg-indigo-500/10 rounded-full animate-pulse pointer-events-none"></div>
                        </div>
                        <div className="mt-6 flex justify-center">
                          <button
                            onClick={() => openModal(iso14001Logo, true)}
                            className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 
                            rounded-lg font-medium hover:bg-indigo-50 transition-colors
                             duration-300 shadow-md hover:shadow-lg"
                          >
                            <FiEye className="w-5 h-5" />
                            View Certificate
                          </button>
                        </div>
                      </div>
                    </div>
        
                    <div className="md:w-2/3 p-8 md:p-12 text-white space-y-6">
                      <div className="flex items-center gap-4">
                        <FiAward className="w-8 h-8 md:w-10 md:h-10 text-yellow-500"/>
                        <h2 className="text-1xl md:text-3xl font-bold">
                        Aluminium Test Certificate
                        </h2>
                      </div>
                      <p className="text-indigo-100 text-lg leading-relaxed">
                      This Aluminium Test Certificate validates the physical and mechanical
                      properties of the aluminium materials used in our scaffolding ladders.
                      </p>
                      <p className="text-indigo-100 text-lg leading-relaxed">
                      Each batch is rigorously tested for tensile strength, elongation, and
                chemical composition, ensuring full compliance with industry standards
                and customer specifications.
                      </p>
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-indigo-200">
                            <FiCheckCircle className="w-5 h-5 text-emerald-300" />
                            <span>Tensile & Yield Strength Tested</span>
                          </div>
                          <div className="flex items-center gap-2 text-indigo-200">
                            <FiCheckCircle className="w-5 h-5 text-emerald-300" />
                            <span>Chemical Composition Verified</span>
                          </div>
                          <div className="flex items-center gap-2 text-indigo-200">
                            <FiCheckCircle className="w-5 h-5 text-emerald-300" />
                            <span>Conforms to IS Standards</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

      </section>

      {/* Industries Section */}
      <section className="max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-indigo-900 mb-12">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaBuilding className="w-10 h-10 text-indigo-600" />,
              title: "Construction",
              description: "Supporting high-rise projects and building maintenance",
            },
            {
              icon: <FaIndustry className="w-10 h-10 text-indigo-600" />,
              title: "Industrial",
              description: "Facilitating maintenance in manufacturing plants",
            },
            {
              icon: <FaHardHat className="w-10 h-10 text-indigo-600" />,
              title: "Oil & Gas",
              description: "Reliable access solutions for refineries and platforms",
            },
            {
              icon: <FiAward className="w-10 h-10 text-indigo-600" />,
              title: "Aviation",
              description: "Aircraft maintenance and airport infrastructure",
            },
          ].map((industry, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-indigo-50 rounded-full mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-indigo-900">Why Choose AKR Aluminium Scaffolding?</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Our commitment to quality and safety sets us apart in the industry
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Premium Materials",
                description: "We use the highest grade aluminium alloys",
                icon: "🛠️",
              },
              {
                title: "Safety First",
                description: "Our products exceed international safety standards",
                icon: "🛡️",
              },
              {
                title: "Expert Support",
                description: "Guidance from selection to installation",
                icon: "👷",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aboutpage;
