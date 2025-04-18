import React, { useState } from "react";
import isoLogo from "../assets/iso-certificate.jpg";
import { FiAward, FiCheckCircle, FiEye, FiX } from "react-icons/fi";
import { FaBuilding, FaIndustry, FaHardHat } from "react-icons/fa";

const Certification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Section 2 - ISO Certification */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-indigo-950 mt-5">
        CERTIFICATION
      </h2>
      <section className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
        {/* Modal/Popup */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full">
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
              <div className="p-4 border-t border-gray-100 flex justify-center"></div>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-indigo-900 to-blue-950 rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            {/* Certificate Image Container */}
            <div className="md:w-1/3 p-8 md:p-12 flex flex-col items-center justify-center">
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
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
              </div>
            </div>

            {/* Text Content */}
            <div className="md:w-2/3 p-8 md:p-12 text-white space-y-6">
              <div className="flex items-center gap-4">
                <FiAward className="w-10 h-10 text-yellow-500" />
                <h2 className="text-3xl font-bold">ISO 9001:2015 Certified</h2>
              </div>

              <p className="text-indigo-100 text-lg leading-relaxed">
                AKR Scaffolding Ladders proudly maintains ISO 9001:2015
                certification, demonstrating our systematic approach to quality
                management and customer satisfaction. This internationally
                recognized standard validates our commitment to operational
                excellence.
              </p>

              <p className="text-indigo-100 text-lg leading-relaxed">
                Our certification process involved rigorous evaluation of our
                quality management systems, ensuring consistent delivery of
                high-quality scaffolding solutions that meet both regulatory
                requirements and customer expectations.
              </p>

              <div className="pt-2">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-indigo-200">
                    <FiCheckCircle className="w-5 h-5 text-emerald-300" />
                    <span>Quality Assurance</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-200">
                    <FiCheckCircle className="w-5 h-5 text-emerald-300" />
                    <span>Process Improvement</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-200">
                    <FiCheckCircle className="w-5 h-5 text-emerald-300" />
                    <span>Customer Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="max-w-7xl mx-auto my-5 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-indigo-950 mb-12">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaBuilding className="w-10 h-10 text-indigo-800" />,
              title: "Construction",
              description:
                "Supporting high-rise projects and building maintenance with safe access solutions",
            },
            {
              icon: <FaIndustry className="w-10 h-10 text-indigo-800" />,
              title: "Industrial",
              description:
                "Facilitating maintenance and operations in manufacturing plants",
            },
            {
              icon: <FaHardHat className="w-10 h-10 text-indigo-800" />,
              title: "Oil & Gas",
              description:
                "Providing reliable access solutions for refineries and offshore platforms",
            },
            {
              icon: <FiAward className="w-10 h-10 text-indigo-800" />,
              title: "Aviation",
              description:
                "Supporting aircraft maintenance and airport infrastructure projects",
            },
          ].map((industry, index) => (
            <div
              key={index}
              className="bg-purple-50 p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300"
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
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Certification;
