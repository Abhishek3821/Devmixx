import React from "react";

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 "></div>

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop"
          alt="CTA Background"
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 max-w-4xl">
          Ready to start your <br /> next big project?
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl">
          Join hundreds of successful companies that trust Nova Digital to lead
          their digital transformation.
        </p>

        <button className="px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-gray-100 transition shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105">
          Start a Project
        </button>
      </div>
    </section>
  );
};

export default CTASection;
