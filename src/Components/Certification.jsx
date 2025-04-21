import React, { useState } from "react";
import isoLogo from "../assets/iso-certificate.jpg";
import iso14001Logo from "../assets/iso-14001-certificate.jpg";
import { FiAward, FiCheckCircle, FiEye, FiX } from "react-icons/fi";
import { FaBuilding, FaIndustry, FaHardHat } from "react-icons/fa";

const Certification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openModal = (img, fullScreen = false) => {
    setSelectedCertificate(img);
    setIsFullScreen(fullScreen);
    setIsModalOpen(true);
  };

  return (
    <>
      <h2 className="text-3xl md:text-5xl font-bold text-center text-indigo-950 mt-5">
        CERTIFICATION
      </h2>

      <section className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
        {/* Modal */}
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

        {/* Certificate 1 */}
        <div className="bg-gradient-to-r from-indigo-900 to-blue-950 rounded-3xl shadow-2xl overflow-hidden mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 p-8 md:p-12 flex flex-col items-center justify-center">
              <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <img
                    src={isoLogo}
                    alt="ISO 9001:2015"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-indigo-500/10 rounded-full animate-pulse pointer-events-none"></div>
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => openModal(isoLogo, false)}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-lg font-medium hover:bg-indigo-50 transition-colors duration-300 shadow-md hover:shadow-lg"
                  >
                    <FiEye className="w-5 h-5" />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 p-8 md:p-12 text-white space-y-6">
              <div className="flex items-center gap-4">
                <FiAward className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
                <h2 className="text-1xl md:text-3xl font-bold">
                  ISO 9001:2015 Certified
                </h2>
              </div>
              <p className="text-indigo-100 text-lg leading-relaxed">
                AKR Scaffolding Ladders proudly maintains ISO 9001:2015
                certification, demonstrating our systematic approach to quality
                management and customer satisfaction.
              </p>
              <p className="text-indigo-100 text-lg leading-relaxed">
                This standard validates our commitment to operational excellence
                through rigorous evaluation and quality assurance systems.
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

        {/* Certificate 2 */}
        <div className="bg-gradient-to-r from-indigo-900 to-blue-950 rounded-3xl shadow-2xl overflow-hidden">
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
                <FiAward className="w-8 h-8 md:w-10 md:h-10 text-yellow-500" />
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
