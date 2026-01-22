import React from "react";

const MapSection = () => {
  return (
    <div className="bg-slate-950 text-slate-200 py-10">
    <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 h-96 relative bg-slate-900 group">
      
      {/* Background Image */}
      <img
        src="https://picsum.photos/1600/600?grayscale&blur=2"
        alt="Map Location"
        className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500 mix-blend-overlay"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

      {/* Center Card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          
          <div className="bg-indigo-500 p-2 rounded-full text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
          </div>

          <div>
            <p className="font-bold text-white">Our Headquarters</p>
            <p className="text-sm text-slate-400">
              123 Innovation Drive, Tech City
            </p>
          </div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default MapSection;
