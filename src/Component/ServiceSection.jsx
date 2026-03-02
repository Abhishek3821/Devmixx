import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Database,
  BarChart3,
  Globe,
  Mail,
  Rocket,
  PenTool,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* =========================
   SERVICES DATA
========================= */
const SERVICES = [
  {
    id: 1,
    title: "Information Security",
    description:
      "Enterprise-grade protection ensuring your digital assets and user data remain uncompromised.",
    normalIcon: <Database className="w-10 h-10 text-[#4c4e51]" />,
    hoverIcon: <Shield className="w-24 h-24 text-white/5" />,
  },
  {
    id: 2,
    title: "Process Automation",
    description:
      "Streamlining your operational workflows to maximize efficiency and reduce manual overhead.",
    normalIcon: <Zap className="w-10 h-10 text-[#4c4e51]" />,
    hoverIcon: <Rocket className="w-24 h-24 text-white/5" />,
  },
  {
    id: 3,
    title: "Email Marketing",
    description:
      "Personalized communication flows that convert leads into loyal customers using advanced triggers.",
    normalIcon: <Mail className="w-10 h-10 text-[#4c4e51]" />,
    hoverIcon: <BarChart3 className="w-24 h-24 text-white/5" />,
  },
  {
    id: 4,
    title: "Market Analysis",
    description:
      "Deep dive into industry trends and competitor strategies to find hidden opportunities for growth.",
    normalIcon: <BarChart3 className="w-10 h-10 text-[#4c4e51]" />,
    hoverIcon: <Globe className="w-24 h-24 text-white/5" />,
  },
  {
    id: 5,
    title: "Digital Branding",
    description:
      "We create identities that resonate with your target audience and stand the test of time.",
    normalIcon: <PenTool className="w-10 h-10 text-[#4c4e51]" />,
    hoverIcon: <Zap className="w-24 h-24 text-white/5" />,
  },
  {
    id: 6,
    title: "Performance SEO",
    description:
      "Data-driven search engine optimization to guarantee your brand captures high-intent traffic.",
    normalIcon: <Globe className="w-10 h-10 text-[#4c4e51]" />,
    hoverIcon: <Rocket className="w-24 h-24 text-white/5" />,
  },
];

/* =========================
   SERVICE CARD
========================= */
const ServiceCard = ({ service }) => {
  return (
    <div
      className="
        group relative h-[380px] lg:h-[420px]
        bg-[#1e1f22]
        border border-[#4c4e51]/30
        p-8 lg:p-10
        rounded-[2.5rem]
        transition-all duration-500 ease-out
        hover:border-gray-400/50
        hover:bg-[#1e2023]
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
        flex flex-col justify-between
        overflow-hidden
      "
    >
      {/* Soft Hover Glow (Replacing the neon) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Content */}
      <div className="space-y-6 relative z-10">
        <div className="transition-all duration-500 group-hover:-translate-y-4 group-hover:opacity-0">
          {service.normalIcon}
        </div>

        <div className="space-y-4 transition-transform duration-500 group-hover:-translate-y-10">
          <h3 className="text-2xl lg:text-3xl font-serif text-white leading-tight">
            {service.title.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed max-w-[220px] group-hover:text-gray-300 transition-colors">
            {service.description}
          </p>
        </div>
      </div>

      {/* Hover CTA + Huge Background Icon */}
      <div className="absolute inset-x-8 lg:inset-x-10 bottom-8 lg:bottom-10 flex justify-between items-end">
        
        {/* Animated Circular Button */}
        <div
          className="
            w-12 h-12 rounded-full
            border border-[#4c4e51]/50 bg-[#1e2023]
            flex items-center justify-center
            transition-all duration-500
            group-hover:border-white
            group-hover:bg-white
            -translate-x-10 opacity-0
            group-hover:translate-x-0 group-hover:opacity-100
            z-10
          "
        >
          <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#1e2023] -rotate-45 transition-colors" />
        </div>

        {/* Oversized Background Icon */}
        <div className="absolute -right-4 -bottom-4 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out pointer-events-none">
          {service.hoverIcon}
        </div>
      </div>
    </div>
  );
};

/* =========================
   SERVICES SECTION
========================= */
const ServiceSection = () => {
  return (
    <section className="w-full bg-[#1e2023] py-24 lg:py-32 font-sans border-b border-[#4c4e51]/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-20 relative">
        
        {/* LEFT CONTENT (Sticky) */}
        <div className="lg:w-2/5 lg:sticky lg:top-32 h-fit space-y-8 z-10">
          
          {/* Elegant Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4c4e51]/50 bg-[#1e1f22] px-4 py-2 w-fit">
            <Sparkles size={14} className="text-gray-400" />
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
              Our Expertise
            </span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight">
            Digital solutions that <br />
            <span className="text-gray-400 italic font-light">help you scale.</span>
          </h2>

          <p className="text-gray-400 text-base lg:text-lg max-w-md leading-relaxed">
            We partner with forward-thinking brands to deliver strategy, creativity, and robust technology that converts attention into measurable action.
          </p>

          {/* Solid White CTA Button */}
          <button className="group relative overflow-hidden bg-white text-[#1e2023] px-8 py-4 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Explore All Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* RIGHT CARDS (Staggered Grid) */}
        <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pb-10">
          {SERVICES.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={service.id} 
              className={index % 2 !== 0 ? "md:mt-16 lg:mt-24" : ""}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;