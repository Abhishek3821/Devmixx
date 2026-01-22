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
  { label: "ISO Developer", icon: Cpu },
  { label: "Product Design", icon: Layers },
];

export default function DevmixxMarquee() {
  return (
    <section className="relative overflow-hidden bg-black py-6">

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0
        bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:260px_100%] opacity-20"
      />

      {/* MARQUEE */}
      <div className="relative flex overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex min-w-full gap-20"
        >
          {[...items, ...items].map((item, index) => (
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

  const glow = useMotionTemplate`
    radial-gradient(
      120px at ${mouseX}px ${mouseY}px,
      rgba(56,189,248,0.45),
      transparent 70%
    )
  `;

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      className="group relative flex items-center gap-3 px-4 py-2 rounded-xl"
    >
      {/* Mouse reactive glow */}
      <motion.div
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0
                   transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Icon */}
      <Icon
        size={26}
        className="
          relative z-10
          text-cyan-400
          transition-colors duration-300
          group-hover:text-indigo-400
        "
      />

      {/* Text */}
      <span
        className="
          relative z-10
          text-4xl md:text-5xl font-extrabold tracking-tight
          text-transparent bg-clip-text
          bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500
          transition-all duration-300
          group-hover:from-indigo-400
          group-hover:via-cyan-200
          group-hover:to-blue-500
          drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]
        "
      >
        {label}
      </span>
    </motion.div>
  );
}
