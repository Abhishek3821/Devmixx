import React, { useRef, useState, useEffect } from "react";
import { Facebook, Dribbble, Twitter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import image from "../assets/Dev4.png";
import image2 from "../assets/Dev5.jpg";
import image3 from "../assets/Dev6.png";
import image4 from "../assets/Dev7.jpg";

gsap.registerPlugin(ScrollTrigger);

/* =========================
   TEAM DATA
========================= */
const TEAM = [
  { id: 1, name: "Anne Smith", role: "Officer", image },
  { id: 2, name: "John Doe", role: "Director", image: image2 },
  { id: 3, name: "Mellissa Doe", role: "Analyst", image: image3 },
  { id: 4, name: "Paul Flavius", role: "Coordinator", image: image4 },
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

    let rotateX = -(y - centerY) / 25;
    let rotateY = (x - centerX) / 25;

    rotateX = gsap.utils.clamp(-6, 6, rotateX);
    rotateY = gsap.utils.clamp(-6, 6, rotateY);

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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-lg w-full text-white"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white"
          >
            <X />
          </button>

          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
          />

          <h3 className="text-2xl font-bold text-center">{member.name}</h3>
          <p className="text-slate-400 text-center mb-6">{member.role}</p>

          <p className="text-slate-300 text-center text-sm leading-relaxed">
            Passionate professional focused on creating high-quality digital
            products with modern technologies.
          </p>
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
      {/* Glow */}
      <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 blur-xl opacity-0 group-hover:opacity-100 transition" />

      {/* Glass Card */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-[320px] object-cover rounded-2xl mb-5"
        />

        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <p className="text-slate-400 text-sm mb-4">{member.role}</p>

        <div className="flex gap-3">
          <Icon><Facebook size={16} /></Icon>
          <Icon><Dribbble size={16} /></Icon>
          <Icon><Twitter size={16} /></Icon>
        </div>
      </div>
    </div>
  );
};

const Icon = ({ children }) => (
  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition">
    {children}
  </div>
);

/* =========================
   TEAM SECTION
========================= */
const TeamSection = () => {
  const sectionRef = useRef(null);
  const [activeMember, setActiveMember] = useState(null);

  /* GSAP PARALLAX */
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
        className="relative bg-black text-white py-40 overflow-hidden"
      >
        {/* 🌌 Aurora Background */}
        <div className="absolute inset-0 aurora">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 blur-[120px] animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <h2 className="text-5xl lg:text-7xl font-extrabold mb-24">
            The People
            <br /> Behind the Product
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
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

      {/* Modal */}
      <ProfileModal
        member={activeMember}
        onClose={() => setActiveMember(null)}
      />
    </>
  );
};

export default TeamSection;
