import React from "react";
import { motion } from "framer-motion";

/* =========================
   ICONS (Scaled Down)
========================= */
const QuoteIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 40 40"
    fill="none"
    className="text-[#4c4e51] opacity-40"
  >
    <path
      d="M10 28C6.7 28 4 25.3 4 22V12C4 8.7 6.7 6 10 6H18V22C18 25.3 15.3 28 12 28H10Z"
      fill="currentColor"
    />
    <path
      d="M26 28C22.7 28 20 25.3 20 22V12C20 8.7 22.7 6 26 6H34V22C34 25.3 31.3 28 28 28H26Z"
      fill="currentColor"
    />
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 20 20"
    fill={filled ? "#e5e7eb" : "none"}
    stroke={filled ? "#e5e7eb" : "#4c4e51"}
  >
    <path
      d="M10 1L13 7L19 7.75L14.5 12.25L15.5 18.25L10 15.25L4.5 18.25L5.5 12.25L1 7.75L7 7L10 1Z"
      strokeWidth="1.5"
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
    rating: 5,
    content:
      "The database has been one of our best recruitment sources backed by a very experienced team. The technical precision is unmatched.",
  },
  {
    id: 2,
    name: "Anne Smith",
    role: "Chief Operations Officer",
    rating: 4,
    content:
      "Outstanding professionalism and extremely responsive support throughout the entire digital transformation process.",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Director of Product",
    rating: 5,
    content:
      "They truly understand high-end technical requirements and UI/UX harmony better than any other agency we’ve worked with.",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Tech Lead",
    rating: 5,
    content:
      "Exceptional service, deep domain expertise, and a fast turnaround time that kept our launch perfectly on schedule.",
  },
];

/* =========================
   COMPACT CARD
========================= */
const TestimonialCard = ({ testimonial }) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
    className="
      bg-[#1e1f22] border border-[#4c4e51]/30 
      rounded-[2rem] p-6 md:p-8 
      w-[300px] md:w-[350px] lg:w-[380px] flex-shrink-0 
      hover:border-gray-400/50 hover:bg-[#1e2023] 
      hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]
      transition-colors duration-500
      flex flex-col justify-between
    "
  >
    <div>
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((s) => (
          <StarIcon key={s} filled={s <= testimonial.rating} />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-300 font-serif italic text-sm md:text-base leading-relaxed mb-8 min-h-[90px]">
        "{testimonial.content}"
      </p>
    </div>

    {/* Footer: Author & Icon */}
    <div className="flex justify-between items-end border-t border-[#4c4e51]/20 pt-4 mt-auto">
      <div>
        <h4 className="text-white font-medium text-sm tracking-wide">
          {testimonial.name}
        </h4>
        <p className="text-gray-500 text-xs mt-1">
          {testimonial.role}
        </p>
      </div>
      <div className="translate-y-1">
        <QuoteIcon />
      </div>
    </div>
  </motion.div>
);

/* =========================
   SECTION
========================= */
const Testimonials = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#1e2023] overflow-hidden font-sans border-t border-[#4c4e51]/30">
      
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 mb-12 lg:mb-16 text-center flex flex-col items-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4c4e51]/50 bg-[#1e1f22] px-3 py-1.5 w-fit">
          <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gray-300 uppercase">
            Client Stories
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-[1.2]">
          What our partners <br className="hidden md:block" />
          <span className="italic font-light text-gray-400">have to say.</span>
        </h2>
      </div>

      {/* Desktop Auto Scroll Marquee */}
      <div className="hidden md:flex relative overflow-hidden">
        <motion.div
          className="flex gap-4 lg:gap-6 w-max pl-4 lg:pl-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {/* Tripled for perfectly smooth infinite looping on ultra-wide screens */}
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </motion.div>
      </div>

      {/* Mobile Stack */}
      <div className="md:hidden flex flex-col gap-4 px-4 sm:px-6">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="w-full">
            <TestimonialCard testimonial={t} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;