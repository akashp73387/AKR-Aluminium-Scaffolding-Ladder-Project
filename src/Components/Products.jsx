import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Zap, Move3D } from 'lucide-react';

const products = [
  {
    title: 'Single Width Scaffolding With Stairway',
    code: 'ISFSW',
    description:
      'Engineered for efficiency in compact spaces. The built-in stairway ensures secure and effortless vertical access, ideal for maintenance and installation tasks.',
    image:
      'https://4.imimg.com/data4/OJ/KG/MY-6180863/aluminium-scaffolding-ladder-1000x1000.png',
    features: ['Lightweight', 'Built-in Stairs', 'Compact Design', 'OSHA Compliant'],
    rating: 4.8
  },
  {
    title: 'Double Width Scaffolding With Stairway',
    code: 'ISFDW',
    description:
      'Designed for larger teams and heavier loads, this spacious platform combines safety and functionality with easy stairway access for busy sites.',
    image: 'https://www.tsuregroup.com/assets/images/home/p1.png',
    features: ['Extra Wide', 'High Capacity', 'Team Friendly', 'Safety Rails'],
    rating: 4.9
  },
  {
    title: 'Single Width Scaffolding Without Stairway',
    code: 'ISFS',
    description:
      'Compact and lightweight, perfect for quick repairs in tight areas. Built to last with high-strength aluminium frames and anti-slip platforms.',
    image: 'http://www.tsuregroup.com/assets/images/home/3.png',
    features: ['Ultra Light', 'Quick Setup', 'Anti-Slip Surface', 'Modular Design'],
    rating: 4.7
  },
  {
    title: 'Double Width Scaffolding Without Stairway',
    code: 'ISFD',
    description:
      'Offers a broad, stable working surface with minimal footprint. Ideal for construction professionals requiring mobility and reliability.',
    image:
      'https://www.pngkey.com/png/full/349-3497704_youngman-boss-narrow-tower-scaffold-boss-youngman.png',
    features: ['Spacious Platform', 'Heavy-Duty', 'Easy Transport', 'Adjustable Height'],
    rating: 4.8
  },
];

const Products = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#f0f7ff] to-[#e6f0ff] py-24 overflow-hidden" id="product">
    
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
         
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            Engineered for <span className="text-blue-600">Safety & Performance</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our aluminium towers combine lightweight durability with unmatched stability for all your access needs.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: idx * 0.1
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 flex flex-col transition-all duration-300">
                {/* Product image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="absolute w-full h-full object-contain p-6"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="absolute top-4 left-4 bg-blue-700 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                    {product.code}
                  </span>
                  
                  {/* Rating badge */}
                  
                </div>
                
                {/* Product content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 leading-snug">
                      {product.title}
                    </h3>
                    <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {product.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-xs font-medium text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={`/${product.code}`}
                    className="mt-auto w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium px-4 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all group/button"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
       
      </div>
    </section>
  );
};

export default Products;