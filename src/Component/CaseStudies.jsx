import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

/* =========================
   DATA
========================= */
const CASE_STUDIES = [
  {
    id: 1,
    name: "Gozzby",
    description:
      "Some people will tell you there are four while others may tell you there are eight thing.",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200",
  },
  {
    id: 2,
    name: "Petfluent",
    description:
      "Some people will tell you there are four while others may tell you there are eight thing.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
  },
  {
    id: 3,
    name: "Mobifluent",
    description:
      "Some people will tell you there are four while others may tell you there are eight thing.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
  },
  {
    id: 4,
    name: "Financeoont",
    description:
      "Some people will tell you there are four while others may tell you there are eight thing.",
    image:
      "https://images.unsplash.com/photo-1556742049-908d9d1d74b0?q=80&w=1200",
  },
  {
    id: 5,
    name: "Educatgenix",
    description:
      "Some people will tell you there are four while others may tell you there are eight thing.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200",
  },
];

/* =========================
   MAIN COMPONENT
========================= */
export default function CaseStudies() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* SCROLL PROGRESS */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* MAP SCROLL → SLIDE */
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(
      CASE_STUDIES.length - 1,
      Math.floor(v * CASE_STUDIES.length)
    );
    setActiveIndex(index);
  });

  const goToIndex = (index) => {
    if (!containerRef.current) return;
    window.scrollTo({
      top:
        containerRef.current.offsetTop +
        index * window.innerHeight,
      behavior: "smooth",
    });
  };

  const activeCase = CASE_STUDIES[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: `${CASE_STUDIES.length * 100}vh` }}
    >
      {/* =========================
          STICKY HEADER
      ========================= */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-10 py-1 grid grid-cols-[1.5fr_1fr_160px] gap-12 items-center h-[90px]">
          <div>
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
              Case Studies
            </span>
            <h2 className="mt-4 text-6xl font-black text-white leading-tight">
              Projects For Our <br /> Amazing Clients
            </h2>
          </div>

        </div>
      </div>

      {/* =========================
          STICKY SLIDES
      ========================= */}
      <div
        ref={containerRef}
        className="sticky top-[220px] h-[calc(70vh-160px)] flex items-center"
      >
        <div className="max-w-[1400px] mx-auto px-10 w-full grid grid-cols-[1.2fr_1fr] gap-24">

          {/* LEFT – TEXT */}
          <div className="flex flex-col justify-center">
            <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
              Case Study {activeIndex + 1}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-6xl font-black text-white mb-6">
                  {activeCase.name}
                </h3>

                <p className="text-slate-400 max-w-xl leading-relaxed mb-10">
                  {activeCase.description}
                </p>

                <button className="group inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest text-xs">
                  View Case Study
                  <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white transition">
                    <ArrowRight className="w-4 h-4 group-hover:text-black transition rotate-[-45deg] group-hover:rotate-0" />
                  </span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.image}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={activeCase.image}
                  alt={activeCase.name}
                  className="w-full h-[560px] object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* =========================
          PROGRESS DOTS
      ========================= */}
      
    </section>
  );
}
