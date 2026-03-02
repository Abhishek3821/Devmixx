import React, { useRef, useState, useEffect } from "react";
import { Facebook, Dribbble, Twitter, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Assuming these are your local imports. 
import image from "../assets/Dev4.png";
import image2 from "../assets/Dev5.jpg";
import image3 from "../assets/Dev6.png";
import image4 from "../assets/Dev7.jpg";

gsap.registerPlugin(ScrollTrigger);

/* =========================
   TEAM DATA
========================= */
const TEAM = [
  { id: 1, name: "Anne Smith", role: "Chief Executive Officer", image },
  { id: 2, name: "John Doe", role: "Creative Director", image: image2 },
  { id: 3, name: "Mellissa Doe", role: "Lead Analyst", image: image3 },
  { id: 4, name: "Paul Flavius", role: "Project Coordinator", image: image4 },
];

/* =========================
   ULTRA-SMOOTH 3D TILT
========================= */
const useTilt = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      gsap.set(ref.current, { transformPerspective: 1200 });
    }
  }, []);

  const onMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    let rotateX = -(y - centerY) / 30; // Softened the tilt slightly for a more premium feel
    let rotateY = (x - centerX) / 30;

    rotateX = gsap.utils.clamp(-8, 8, rotateX);
    rotateY = gsap.utils.clamp(-8, 8, rotateY);

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const onMouseLeave = () => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power4.out",
    });
  };

  return { ref, onMouseMove, onMouseLeave };
};

/* =========================
   MODAL
========================= */
const ProfileModal = ({ member, onClose }) => (
  <AnimatePresence>
    {member && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e2023]/80 backdrop-blur-md p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative bg-[#1e1f22] border border-[#4c4e51]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white bg-[#4c4e51]/20 hover:bg-[#4c4e51]/50 transition-colors rounded-full p-2"
          >
            <X size={20} />
          </button>

          {/* Modal Content */}
          <div className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 object-cover border border-[#4c4e51]/30 shadow-xl"
            />
            <h3 className="text-3xl font-serif font-bold text-center mb-1">{member.name}</h3>
            <p className="text-[#4c4e51] font-medium tracking-wide text-center uppercase text-xs mb-6">{member.role}</p>

            <p className="text-gray-400 text-center text-sm md:text-base leading-relaxed px-4">
              A passionate professional focused on creating high-quality digital
              products, blending modern technologies with timeless design principles to elevate the brand experience.
            </p>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/* =========================
   TEAM CARD
========================= */
const TeamCard = ({ member, onClick }) => {
  const tilt = useTilt();

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onClick={onClick}
      className="relative cursor-pointer group will-change-transform"
    >
      {/* Glass Card - Bento Style */}
      <div className="relative bg-[#1e1f22] border border-[#4c4e51]/30 rounded-[2rem] p-4 shadow-lg transition-colors duration-500 hover:bg-[#1e2023] hover:border-gray-400/50">
        
        <div className="overflow-hidden rounded-[1.5rem] mb-6 relative">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-[280px] lg:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e1f22] to-transparent opacity-60" />
        </div>

        <div className="px-2 pb-2">
          <h3 className="text-xl md:text-2xl font-serif text-white mb-1">{member.name}</h3>
          <p className="text-gray-500 text-xs md:text-sm font-medium mb-6">{member.role}</p>

          <div className="flex gap-2">
            <Icon><Facebook size={16} /></Icon>
            <Icon><Dribbble size={16} /></Icon>
            <Icon><Twitter size={16} /></Icon>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Icon Component matching the Charcoal theme */
const Icon = ({ children }) => (
  <div className="w-10 h-10 rounded-full border border-[#4c4e51]/40 flex items-center justify-center text-gray-400 hover:text-[#1e2023] hover:bg-white hover:border-white transition-all duration-300">
    {children}
  </div>
);

/* =========================
   TEAM SECTION
========================= */
const TeamSection = () => {
  const sectionRef = useRef(null);
  const [activeMember, setActiveMember] = useState(null);

  /* GSAP PARALLAX (Subtle Charcoal Gradient) */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".aurora",
        { y: 0 },
        {
          y: -150,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-[#1e2023] text-white py-24 lg:py-32 overflow-hidden border-t border-[#4c4e51]/30 font-sans"
      >
        {/* Subtle Charcoal Ambient Glow */}
        <div className="absolute inset-0 aurora pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4c4e51]/10 blur-[150px] rounded-full" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* Header Section */}
          <div className="mb-16 lg:mb-24 flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4c4e51]/50 bg-[#1e1f22] px-4 py-2 w-fit">
              <Sparkles size={14} className="text-gray-400" />
              <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
                Our Leadership
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-[1.1] tracking-tight">
              The minds behind <br />
              <span className="italic font-light text-gray-400">the masterpiece.</span>
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {TEAM.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                onClick={() => setActiveMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      <ProfileModal
        member={activeMember}
        onClose={() => setActiveMember(null)}
      />
    </>
  );
};

export default TeamSection;