import React, { useRef } from "react";
import {
  ShoppingBag,
  Code2,
  Cloud,
  Layout,
  Smartphone,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

/* =========================
   SERVICES DATA
========================= */
const IT_SERVICES = [
  {
    id: 1,
    title: "E-Commerce Solutions",
    description:
      "High-converting online stores built on headless architecture for speed, security, and seamless user experience.",
    icon: <ShoppingBag />,
  },
  {
    id: 2,
    title: "Static Web Apps",
    description:
      "Lightning-fast static sites generated with Next.js or Astro, perfect for SEO and instant page loads.",
    icon: <Layout />,
  },
  {
    id: 3,
    title: "Cloud Architecture",
    description:
      "Scalable infrastructure on AWS and Azure designed for 99.9% uptime and global distribution.",
    icon: <Cloud />,
  },
  {
    id: 4,
    title: "Custom SaaS Dev",
    description:
      "Bespoke software platforms engineered with robust multi-tenant security.",
    icon: <Code2 />,
  },
  {
    id: 5,
    title: "Mobile App Hub",
    description:
      "Cross-platform iOS and Android applications that feel native.",
    icon: <Smartphone />,
  },
  {
    id: 6,
    title: "Cyber Security",
    description:
      "Advanced penetration testing and real-time threat detection.",
    icon: <ShieldCheck />,
  },
];

/* =========================
   ENHANCED SERVICE CARD
========================= */
const ServiceCard = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        group relative h-[460px]
        rounded-[3rem]
        p-[1px]
        bg-gradient-to-br from-white/10 via-white/5 to-white/10
        hover:from-cyan-400/40 hover:via-violet-500/30 hover:to-cyan-400/40
        transition-all duration-700
      "
    >
      {/* INNER GLASS CARD */}
      <div
        className="
          relative h-full rounded-[2.9rem]
          bg-white/[0.03]
          backdrop-blur-xl
          border border-white/10
          p-10
          flex flex-col justify-between
          overflow-hidden
          transition-all duration-700
          group-hover:bg-white/[0.06]
          group-hover:-translate-y-3
        "
      >
        {/* GRADIENT SWEEP */}
        <div className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-r from-transparent via-white/[0.06] to-transparent
          -translate-x-full group-hover:translate-x-full
          transition-all duration-1000
        " />

        {/* SOFT GLOW */}
        <div className="
          absolute -inset-24 opacity-0 group-hover:opacity-100
          bg-cyan-400/10 blur-[140px]
          transition-opacity duration-700
        " />

        <div className="relative z-10 space-y-8">
          {/* ICON */}
          <div className="
            w-16 h-16 rounded-2xl
            bg-white/5 border border-white/10
            flex items-center justify-center
            transition-all duration-500
            group-hover:bg-cyan-400
            group-hover:shadow-[0_0_50px_rgba(34,211,238,0.6)]
          ">
            {React.cloneElement(service.icon, {
              className:
                "w-8 h-8 text-white group-hover:text-black transition-all duration-500",
            })}
          </div>

          {/* TEXT */}
          <div>
            <h3 className="
              text-3xl font-black text-white mb-4
              group-hover:text-cyan-400 transition-colors duration-500
            ">
              {service.title}
            </h3>

            <p className="
              text-slate-400 leading-relaxed max-w-sm
              group-hover:text-slate-200 transition-colors duration-500
            ">
              {service.description}
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="
            text-xs tracking-widest font-bold uppercase
            text-slate-500 group-hover:text-white transition
          ">
            Learn More
          </span>

          <div className="
            relative w-14 h-14 rounded-full
            border border-white/10
            flex items-center justify-center
            transition-all duration-500
            group-hover:bg-cyan-400
            group-hover:border-cyan-400
          ">
            <ArrowRight
              className="
                w-6 h-6 text-white
                -rotate-45 group-hover:rotate-0
                group-hover:text-black
                transition-all duration-500
              "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* =========================
   MAIN SECTION
========================= */
export default function ServicesSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#02030d] py-32"
    >
      <div className="max-w-[1440px] mx-auto px-8 flex gap-24 relative">

        {/* SCROLL PROGRESS BAR */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-white/10">
          <motion.div
            style={{ height: progressHeight }}
            className="w-full bg-cyan-400 origin-top"
          />
        </div>

        {/* LEFT – SCROLLING CARDS */}
        <div className="w-[60%] grid grid-cols-1 md:grid-cols-2 gap-14">
          {IT_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={index % 2 === 0 ? "md:mt-32" : ""}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* RIGHT – STICKY CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[40%] sticky top-24 h-fit space-y-10"
        >
          <span className="text-cyan-400 text-xs tracking-widest font-bold uppercase">
            Our Services
          </span>

          <h2 className="text-6xl font-black leading-tight text-white">
            Digital Marketing <br />
            Services That <br />
            <span className="text-slate-400 italic">
              Help You Grow.
            </span>
          </h2>

          <p className="text-slate-400 max-w-md leading-relaxed">
            We help brands grow with strategy, creativity, and
            technology that converts attention into action.
          </p>

          <button className="px-10 py-5 rounded-full bg-white text-black font-bold tracking-wide text-xs uppercase hover:scale-105 transition">
            Explore Services
          </button>
        </motion.div>

      </div>
    </section>
  );
}
