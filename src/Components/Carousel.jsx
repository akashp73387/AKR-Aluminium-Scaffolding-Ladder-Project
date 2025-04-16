import React, { useState } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Mobile Scaffolding Towers",
      description:
        "Professional-grade scaffolding solutions for all your construction needs",
      buttonText: "Get Started",
      image:
        "https://store.youngman.co.in/cdn/shop/products/SSS_2048x2048.jpg?v=1683190614",
    },
    {
      title: "Foldable Aluminium Ladders",
      description:
        "Lightweight yet durable ladders for professional and home use",
      buttonText: "Learn More",
      image:
        "https://nexriseindia.in/wp-content/uploads/2022/08/7.2M-Aluminium-Scaffolding-4R-Ladder-Frame-Version.jpg",
    },
    {
      title: "Heavy-Duty Industrial Ladders",
      description:
        "Robust solutions for industrial environments with enhanced safety features",
      buttonText: "Sign Up",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/4/407701429/CK/ZX/RR/116321880/stabilizer-mobile-scaffold-tower.jpg",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[activeIndex];

  return (
    <div className="p-6 bg-white text-black min-h-[90vh] flex items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-6 md:p-10 rounded-3xl shadow-[0_0_60px_#0ea5e950] transition-shadow duration-500 gap-y-8 md:gap-x-[10%]">
        {/* Text Section */}
        <div className="w-full md:w-[35%] text-center md:text-left space-y-6">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            {slide.title}
          </h2>
          <p className="text-blue-200 text-lg">{slide.description}</p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
            {slide.buttonText}
          </button>
        </div>

        {/* Image with Arrows */}
        <div className="w-full md:w-[35%] mt-10 md:mt-0 flex items-center justify-center gap-4 relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 bg-black hover:bg-white/20 p-3 rounded-full text-white z-10"
          >
            &#8592;
          </button>

          <img
            src={slide.image}
            alt={slide.title}
            className="h-[360px] w-auto object-contain rounded-xl shadow-2xl transition-transform duration-500"
          />

          <button
            onClick={handleNext}
            className="absolute right-0 bg-black hover:bg-white/20 p-3 rounded-full text-white z-10"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
