import { motion } from "framer-motion";

export default function DevmixxHeroText() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-32">

      {/* Animated grid background */}
      <motion.div
        animate={{ backgroundPositionX: ["0%", "100%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)]
          bg-[size:220px_100%] opacity-20"
      />

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

      {/* TEXT */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
          relative z-10
          select-none whitespace-nowrap
          pl-6
          font-extrabold tracking-tight leading-none
          text-[22vw]
        "
      >
        {/* Gradient animated text */}
        <motion.span
          animate={{
            backgroundPositionX: ["0%", "200%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            bg-gradient-to-r
            from-blue-400 via-cyan-300 to-indigo-500
            bg-[length:200%_100%]
            bg-clip-text text-transparent
            drop-shadow-[0_0_30px_rgba(56,189,248,0.35)]
          "
        >
          Devmixx
        </motion.span>

        {/* Outline stroke (depth effect) */}
        <span
          className="
            absolute inset-0
            text-transparent
            [-webkit-text-stroke:2px_rgba(255,255,255,0.15)]
            pointer-events-none
          "
        >
          Devmixx
        </span>
      </motion.h1>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
