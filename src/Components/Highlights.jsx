import React from "react";

const Highlights = () => {
  return (
    <div className="p-6 bg-white text-black flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto p-10 rounded-3xl shadow-[0_0_60px_#0ea5e950] space-y-8 text-center">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
          Highlights
        </h2>
        <p className="text-blue-200 text-lg max-w-3xl mx-auto">
          Dedicated to innovation, <strong>360 Degree Global</strong> is
          establishing a reputation for high quality mobile work platforms.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
          {[
            "Easy to use",
            "Easy Adjustments",
            "Light Weighted",
            "Time Saving",
            "Cost Effective",
            "Safety at its Max",
          ].map((point, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-blue-800 to-indigo-800 p-6 rounded-xl shadow-lg text-white font-semibold text-lg hover:scale-105 transition-transform duration-300"
            >
              {point}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
