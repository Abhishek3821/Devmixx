import React from "react";
import { motion } from "framer-motion";

/* =========================
   ICONS
========================= */
const QuoteIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 40 40"
    fill="none"
    className="opacity-30"
  >
    <path
      d="M10 28C6.7 28 4 25.3 4 22V12C4 8.7 6.7 6 10 6H18V22C18 25.3 15.3 28 12 28H10Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M26 28C22.7 28 20 25.3 20 22V12C20 8.7 22.7 6 26 6H34V22C34 25.3 31.3 28 28 28H26Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill={filled ? "#38bdf8" : "none"}
    stroke={filled ? "#38bdf8" : "#475569"}
  >
    <path
      d="M10 1L13 7L19 7.75L14.5 12.25L15.5 18.25L10 15.25L4.5 18.25L5.5 12.25L1 7.75L7 7L10 1Z"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

/* =========================
   DATA
========================= */
const TESTIMONIALS = [
  {
    id: 1,
    name: "Joanna Williams",
    role: "Consultant",
    rating: 4,
    content:
      "The IT-Hub database has been one of our best recruitment sources backed by a very experienced team.",
  },
  {
    id: 2,
    name: "Anne Smith",
    role: "Officer",
    rating: 4,
    content:
      "Outstanding professionalism and extremely responsive support throughout the process.",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Director",
    rating: 5,
    content:
      "They truly understand technical requirements better than any other agency we’ve worked with.",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Tech Lead",
    rating: 5,
    content:
      "Exceptional service, deep domain expertise, and fast turnaround time.",
  },
];

/* =========================
   CARD
========================= */
const TestimonialCard = ({ testimonial }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 w-[380px] md:w-[420px] flex-shrink-0 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
  >
    <div className="flex justify-between mb-6">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <StarIcon key={s} filled={s <= testimonial.rating} />
        ))}
      </div>
      <div className="text-cyan-400">
        <QuoteIcon />
      </div>
    </div>

    <p className="text-zinc-400 italic leading-relaxed mb-8 min-h-[90px]">
      {testimonial.content}
    </p>

    <h4 className="text-cyan-400 font-bold uppercase tracking-wide">
      {testimonial.name}
    </h4>
    <p className="text-zinc-500 text-sm mt-1">
      {testimonial.role}
    </p>
  </motion.div>
);

/* =========================
   SECTION
========================= */
const Testimonials = () => {
  return (
    <section className="w-full py-24 bg-[#050617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          What Our Clients Say
        </h2>
        <p className="text-zinc-500 mt-4 max-w-xl mx-auto">
          Trusted by professionals and companies worldwide
        </p>
      </div>

      {/* Desktop Auto Scroll */}
      <div className="hidden md:block relative">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </motion.div>
      </div>

      {/* Mobile Stack */}
      <div className="md:hidden flex flex-col gap-6 px-6">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
