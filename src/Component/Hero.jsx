import React from "react";
import { motion } from "framer-motion";
import { Search, Star, Code, Megaphone, Smartphone, PenTool, Instagram, Facebook, ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // High-end agency portrait for the right-side bento box
  const heroImage = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";

  return (
    <section className="min-h-screen w-full bg-[#1e2023] pt-32 pb-12 px-4 sm:px-6 lg:px-8 font-sans">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6"
      >
        
        {/* =========================================
            TOP LEFT BLOCK (Large Typography & Search) 
            Col Span: 8
        ========================================= */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-8 bg-[#1e1f22] rounded-[2.5rem] lg:rounded-[3.5rem] p-8 lg:p-14 border border-[#4c4e51]/30 flex flex-col justify-between relative overflow-hidden"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight mb-6">
              Digital comes first, <br />
              <span className="italic font-light text-gray-300">success follows every step.</span>
            </h1>
            <p className="text-gray-400 max-w-md text-sm lg:text-base leading-relaxed mb-10">
              Whether it's a quick audit or a full digital transformation, we're here to bring your unique vision to life with precision code and design.
            </p>
          </div>

          {/* Search Bar / Action Area matching the Cmouse style */}
          <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
            <div className="flex bg-[#1e2023] rounded-full p-2 border border-[#4c4e51]/50 w-full max-w-lg items-center justify-between">
              <div className="flex items-center gap-2 px-2">
                <button className="bg-[#4c4e51] text-white text-xs sm:text-sm px-4 py-2 rounded-full transition hover:bg-[#47484c]">
                  Projects
                </button>
                <button className="text-gray-400 text-xs sm:text-sm px-4 py-2 rounded-full hover:text-white transition">
                  Agency
                </button>
              </div>
              <div className="flex items-center border-l border-[#4c4e51]/50 pl-4 w-full">
                <input 
                  type="text" 
                  placeholder="Search services" 
                  className="bg-transparent text-white text-sm outline-none w-full placeholder-gray-500"
                />
                <button className="bg-[#4c4e51] hover:bg-[#47484c] text-white p-3 rounded-full ml-2 transition">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="flex items-center gap-3 bg-[#1e2023] border border-[#4c4e51]/50 px-4 py-2 rounded-full mt-4 sm:mt-0 sm:ml-auto">
              <div className="bg-[#4c4e51] p-1.5 rounded-full text-[#1e2023]">
                <Star size={14} fill="currentColor" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="text-white italic">On Trusted Pilot</span>
                <span className="text-gray-400 font-bold">150+ Reviews</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            TOP RIGHT BLOCK (Large Portrait Image)
            Col Span: 4
        ========================================= */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4 rounded-[2.5rem] lg:rounded-[3.5rem] relative overflow-hidden h-[400px] lg:h-auto border border-[#4c4e51]/30 group"
        >
          <img 
            src={heroImage} 
            alt="Agency Portrait" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Glassmorphism Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-[#1e2023]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5">
            <h3 className="text-white font-serif text-xl mb-3">Recommended</h3>
            <div className="border-t border-white/20 pt-3">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white font-medium text-sm">Full-Stack Development</span>
                <span className="text-gray-300 text-xs flex items-center gap-1">
                  <Star size={12} className="text-[#4c4e51]" fill="currentColor" /> (2.3k+)
                </span>
              </div>
              <p className="text-gray-400 text-xs leading-tight">
                EllorDigital Studio <br/> Custom Web Applications
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            BOTTOM LEFT BLOCK (CTA & Socials)
            Col Span: 5
        ========================================= */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-5 bg-[#1e1f22] rounded-[2.5rem] p-8 border border-[#4c4e51]/30 flex flex-col justify-between"
        >
          <h2 className="text-3xl lg:text-4xl font-serif text-white italic mb-8">
            Innovation and <br /> Strategy
          </h2>
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-3 bg-gradient-to-r from-[#4c4e51] to-[#47484c] text-white px-6 py-3 rounded-full font-medium text-sm hover:shadow-[0_0_15px_rgba(76,78,81,0.5)] transition border border-[#4c4e51]">
              Book Now
              <ArrowRight size={16} />
            </button>
            <div className="flex items-center gap-2">
              <button className="p-3 border border-[#4c4e51]/50 rounded-full text-gray-400 hover:text-white hover:bg-[#4c4e51] transition">
                <Instagram size={18} />
              </button>
              <button className="p-3 border border-[#4c4e51]/50 rounded-full text-gray-400 hover:text-white hover:bg-[#4c4e51] transition">
                <Facebook size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            BOTTOM RIGHT BLOCK (Category Icons Grid)
            Col Span: 7
        ========================================= */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 h-full"
        >
          {[
            { name: "Development", icon: Code },
            { name: "Marketing", icon: Megaphone },
            { name: "Mobile Apps", icon: Smartphone },
            { name: "UI/UX Design", icon: PenTool },
          ].map((service, idx) => (
            <div 
              key={idx} 
              className="bg-[#1e1f22] rounded-[2rem] border border-[#4c4e51]/20 p-6 flex flex-col items-center justify-center gap-4 hover:bg-[#1e2023] hover:border-[#4c4e51] transition-all cursor-pointer group"
            >
              <div className="text-[#4c4e51] group-hover:text-white transition-colors">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <span className="text-gray-300 text-sm font-medium">{service.name}</span>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}