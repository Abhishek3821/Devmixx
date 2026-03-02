import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sparkles, Users, Award } from "lucide-react";

// You can swap these back to your local imports:
// import aboutImg from "../assets/Dev2.jpg";
// import aiImg from "../assets/Dev3.jpg";

/* =========================
   COUNT UP HOOK
========================= */
function useCountUp(end, duration = 1600, start) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return count;
}

export default function AboutExperience() {
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true, margin: "-100px" });

  const business = useCountUp(240, 1600, inView);
  const satisfaction = useCountUp(100, 1400, inView);

  // High-end placeholder images (Replace with aboutImg / aiImg)
  const mainImage = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop";
  const smallImage = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop";

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

  return (
    <section className="relative overflow-hidden bg-[#1e2023] py-6 sm:py-6 font-sans text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6"
        >
          {/* =========================================
              LEFT CONTENT (Typography & Intro)
              Col Span: 7
          ========================================= */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 bg-[#1e1f22] rounded-[2.5rem] lg:rounded-[3.5rem] p-8 lg:p-14 border border-[#4c4e51]/30 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Elegant Tag */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#4c4e51]/50 bg-[#1e2023] px-4 py-2 w-fit">
              <Sparkles size={14} className="text-gray-400" />
              <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
                About Us
              </span>
            </div>

            {/* Typography matching the Cmouse serif style */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight tracking-tight mb-6">
              Your experience is <br />
              <span className="italic font-light text-gray-400">everything to us.</span>
            </h2>

            <p className="max-w-md text-gray-400 text-sm lg:text-base leading-relaxed">
              We design, build, and scale digital solutions with one core focus — delivering exceptional user experiences backed by real, measurable results.
            </p>
          </motion.div>

          {/* =========================================
              RIGHT CONTENT (Main Image)
              Col Span: 5
          ========================================= */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 h-[400px] lg:h-auto rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border border-[#4c4e51]/30 relative group"
          >
            <img 
              src={mainImage} 
              alt="Our Workspace" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80" 
            />
            {/* Subtle inner shadow for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e2023]/80 via-transparent to-transparent" />
          </motion.div>

          {/* =========================================
              BOTTOM LEFT (Stats Container)
              Col Span: 8
          ========================================= */}
          <motion.div 
            ref={statsRef}
            variants={itemVariants}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
          >
            {/* Stat Card 1 */}
            <div className="bg-[#1e1f22] rounded-[2.5rem] p-8 border border-[#4c4e51]/30 flex flex-col justify-between">
              <div className="bg-[#1e2023] w-12 h-12 rounded-full flex items-center justify-center border border-[#4c4e51]/50 mb-6">
                <Users size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-5xl font-serif text-white mb-2">{business}+</h3>
                <p className="text-sm text-gray-400 font-medium">Business Partners</p>
                <div className="mt-6 h-1 w-full bg-[#1e2023] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "35%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-[#1e1f22] rounded-[2.5rem] p-8 border border-[#4c4e51]/30 flex flex-col justify-between">
              <div className="bg-[#1e2023] w-12 h-12 rounded-full flex items-center justify-center border border-[#4c4e51]/50 mb-6">
                <Award size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-5xl font-serif text-white mb-2">{satisfaction}%</h3>
                <p className="text-sm text-gray-400 font-medium">Customer Satisfaction</p>
                <div className="mt-6 h-1 w-full bg-[#1e2023] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-[#4c4e51]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================================
              BOTTOM RIGHT (Small AI Image Card)
              Col Span: 4
          ========================================= */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 bg-[#1e1f22] rounded-[2.5rem] p-4 border border-[#4c4e51]/30 flex flex-col relative overflow-hidden group min-h-[250px]"
          >
            <div className="w-full h-32 rounded-2xl overflow-hidden mb-4 relative">
              <img 
                src={smallImage} 
                alt="Artificial Intelligence" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 mix-blend-luminosity"
              />
            </div>
            <div className="px-2 pb-2">
              <h4 className="text-white font-serif text-lg mb-1">AI Integration</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Automating workflows and scaling operations with cutting-edge artificial intelligence.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}