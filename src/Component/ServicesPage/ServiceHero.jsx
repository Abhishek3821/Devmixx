import React from "react";
import { ArrowRight, Play } from "lucide-react";

const ServiceHero = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
       
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium text-white mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span>Accepting New Clients for 2025</span>
        </div>

        <h1
          className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          DIGITAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            EVOLUTION
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          We fuse creative strategy with technical precision to build brands that
          dominate the digital landscape.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <button className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="px-8 py-4 glass-panel text-white font-bold text-lg rounded-full hover:bg-white/10 transition flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
              <Play className="w-4 h-4 ml-1 fill-current" />
            </div>
            <span>Showreel</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
};

export default ServiceHero;
