import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: "Safe & Reliable Aluminium Scaffolding Ladders",
    description: `Our premium aluminium scaffolding ladders are engineered for durability and stability.  
                  Ideal for industrial and construction use, ensuring top-tier safety on every level.  
                  Lightweight design for easy transportation and setup.`,
    img: "https://assets.sealeyb2b.co.uk/Images/WEBMain/ASCL2_DFC1090969.png",
    alt: "Aluminium ladder in a construction environment"
  },
  {
    title: "Easy Setup, Maximum Reach",
    description: `Quick-to-install scaffolding systems with adjustable height.  
                  Reach high spaces securely with non-slip platforms and sturdy frames.  
                  Designed for professionals who need dependable tools.`,
    img: "https://img1.wsimg.com/isteam/ip/af94a8b8-1c35-4701-b18d-542d7fe65c14/45BE4FEE-E7A0-4B98-88D9-3EE373BD84C5.png",
    alt: "Adjustable scaffolding system in warehouse"
  },
  {
    title: "Built to Withstand Any Job",
    description: `Crafted with high-grade aluminium to endure heavy-duty usage.  
                  Rust-resistant and weather-proof for indoor and outdoor tasks.  
                  Trust us for equipment that performs under pressure.`,
    img: "http://scaffoldking.com.au/site/uploads/2018/01/quickstage-isolated@2x.png",
    alt: "Scaffolding equipment on construction site"
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: {
      duration: 0.2
    }
  })
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.17, 0.67, 0.24, 0.99]
    }
  }
};

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isHovered && !isDragging) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, isDragging]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 50) {
      setDirection(-1);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (info.offset.x < -50) {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    setIsDragging(false);
  };

  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center
       bg-[#0A2647] rounded-2xl mx-4 gap-6 p-6 
       md:p-12 lg:p-16 xl:p-20 shadow-lg lg:h-[80vh] overflow-hidden mt-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Column */}
      <div className="flex-1 text-white text-center md:text-left relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-bold pb-6 md:pb-10 pt-10 md:pt-20"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              {slides[currentSlide].title}
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-5"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              {slides[currentSlide].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Column (Image) */}
      <div className="flex-1 flex justify-center relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <motion.img
              src={slides[currentSlide].img}
              alt={slides[currentSlide].alt}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded-lg"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white p-2 rounded-full bg-black/20 hover:bg-black/50"
        onClick={() => {
          setDirection(-1);
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white p-2 rounded-full bg-black/20 hover:bg-black/50"
        onClick={() => {
          setDirection(1);
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: index === currentSlide ? 1.2 : 1,
              opacity: index === currentSlide ? 1 : 0.6
            }}
            transition={{ type: "spring", stiffness: 500 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
