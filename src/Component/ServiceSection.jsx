import React from "react";
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
} from "lucide-react";

/* =========================
   SERVICES DATA
========================= */
const SERVICES = [
  {
    id: 1,
    title: "Information Security",
    description:
      "Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow",
    normalIcon: <Database className="w-10 h-10 text-slate-400" />,
    hoverIcon: <Shield className="w-16 h-16 text-cyan-400/20" />,
  },
  {
    id: 2,
    title: "Process Automation",
    description:
      "It must come from the natural product of your desire to achieve something and your belief that you are capable.",
    normalIcon: <Zap className="w-10 h-10 text-slate-400" />,
    hoverIcon: <Rocket className="w-16 h-16 text-cyan-400/20" />,
  },
  {
    id: 3,
    title: "Email Marketing",
    description:
      "Personalized communication flows that convert leads into loyal customers using advanced behavioral triggers.",
    normalIcon: <Mail className="w-10 h-10 text-slate-400" />,
    hoverIcon: <BarChart3 className="w-16 h-16 text-cyan-400/20" />,
  },
  {
    id: 4,
    title: "Market Analysis",
    description:
      "Deep dive into your industry trends and competitor strategies to find the hidden opportunities for growth.",
    normalIcon: <BarChart3 className="w-10 h-10 text-slate-400" />,
    hoverIcon: <Globe className="w-16 h-16 text-cyan-400/20" />,
  },
  {
    id: 5,
    title: "Digital Branding",
    description:
      "We create identities that resonate with your target audience and stand the test of time in a crowded market.",
    normalIcon: <PenTool className="w-10 h-10 text-slate-400" />,
    hoverIcon: <Zap className="w-16 h-16 text-cyan-400/20" />,
  },
  {
    id: 6,
    title: "Email Marketing",
    description:
      "Personalized communication flows that convert leads into loyal customers using advanced behavioral triggers.",
    normalIcon: <Mail className="w-10 h-10 text-slate-400" />,
    hoverIcon: <BarChart3 className="w-16 h-16 text-cyan-400/20" />,
  },
];

/* =========================
   SERVICE CARD
========================= */
const ServiceCard = ({ service }) => {
  return (
    <div
      className="
        group relative h-[420px]
        bg-[#050617]
        border border-white/10
        p-10
        rounded-3xl
        transition-all duration-500
        hover:border-cyan-400/70
        hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
        flex flex-col justify-between
        overflow-hidden
        bg-[#050617]
      "
    >
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Content */}
      <div className="space-y-6">
        <div className="transition-all duration-500 group-hover:-translate-y-4 group-hover:opacity-0">
          {service.normalIcon}
        </div>

        <div className="space-y-4 transition-transform duration-500 group-hover:-translate-y-10">
          <h3 className="text-3xl font-bold leading-tight">
            {service.title.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed max-w-[220px] group-hover:text-slate-300 transition-colors">
            {service.description}
          </p>
        </div>
      </div>

      {/* Hover CTA + Icon */}
      <div className="absolute inset-x-10 bottom-10 flex justify-between items-end">
        <div
          className="
            w-12 h-12 rounded-full
            border border-white/15
            flex items-center justify-center
            transition-all duration-500
            group-hover:border-cyan-400
            group-hover:bg-cyan-400/10
            -translate-x-10 opacity-0
            group-hover:translate-x-0 group-hover:opacity-100
          "
        >
          <ArrowRight className="w-5 h-5 text-cyan-400 -rotate-45" />
        </div>

        <div className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {service.hoverIcon}
        </div>
      </div>

      {/* Corner Accent */}
      <div
        className="
          absolute top-0 right-0 w-24 h-24
          border-t-2 border-r-2
          border-cyan-400/0
          rounded-tr-[36px]
          transition-all duration-500
          group-hover:border-cyan-400/50
          translate-x-4 -translate-y-4
          group-hover:translate-x-0 group-hover:translate-y-0
        "
      />

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-transparent to-cyan-400/0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none" />
    </div>
  );
};

/* =========================
   SERVICES SECTION
========================= */
const ServiceSection = () => {
  return (
    <section className="max-w-9xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-20 relative text-white py-20 bg-[#050617]">
      
      {/* LEFT CONTENT */}
      <div className="lg:w-2/5 lg:sticky lg:top-20 h-fit space-y-8">
        <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">
          Our Steps
        </span>

        <h2 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tighter">
          Digital Marketing Services That <br />
          <span className="text-slate-500 italic">Help You Grow.</span>
        </h2>

        <p className="text-slate-400 text-lg max-w-md">
          We help brands grow with strategy, creativity, and technology that
          converts attention into action.
        </p>

        <button className="group relative overflow-hidden bg-black/5 border border-white/10 px-8 py-4 rounded-full font-bold text-sm hover:border-cyan-400">
          <span className="relative z-10">EXPLORE SERVICES</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        </button>
      </div>

      {/* RIGHT CARDS */}
      <div className="lg:w-3/6 grid grid-cols-2 md:grid-cols-2 gap-11 pb-20">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={index % 2 === 0 ? "md:mt-16" : ""}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
