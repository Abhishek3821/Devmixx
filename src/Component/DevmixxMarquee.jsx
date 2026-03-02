import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import {
  Monitor,
  Figma,
  Code2,
  Cpu,
  Layers,
} from "lucide-react";

const items = [
  { label: "Web Design", icon: Monitor },
  { label: "UI/UX Design", icon: Figma },
  { label: "Developer", icon: Code2 },
  { label: "iOS Developer", icon: Cpu },
  { label: "Product Design", icon: Layers },
];

export default function DevmixxMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#1e2023] py-10 border-y border-[#4c4e51]/30">

      {/* Subtle Charcoal Grid */}
      <div className="pointer-events-none absolute inset-0
        bg-[linear-gradient(to_right,rgba(76,78,81,0.1)_1px,transparent_1px)]
        bg-[size:120px_100%] opacity-50"
      />

      {/* MARQUEE */}
      <div className="relative flex overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex min-w-full gap-16 md:gap-24 items-center pr-16 md:pr-24"
        >
          {[...items, ...items, ...items].map((item, index) => (
            <MarqueeItem key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* =========================
   MARQUEE ITEM
========================= */
function MarqueeItem({ label, icon: Icon }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Royal Charcoal subtle glow
  const glow = useMotionTemplate`
    radial-gradient(
      150px at ${mouseX}px ${mouseY}px,
      rgba(76, 78, 81, 0.4),
      transparent 80%
    )
  `;

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      className="group relative flex items-center gap-4 px-6 py-4 rounded-2xl cursor-pointer"
    >
      {/* Mouse reactive glow */}
      <motion.div
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0
                   transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Icon */}
      <Icon
        size={32}
        strokeWidth={1.5}
        className="
          relative z-10
          text-[#4c4e51]
          transition-colors duration-500
          group-hover:text-white
        "
      />

      {/* Text */}
      <span
        className="
          relative z-10
          text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight
          text-gray-500
          transition-colors duration-500
          group-hover:text-white
        "
      >
        {label}
      </span>
    </motion.div>
  );
}