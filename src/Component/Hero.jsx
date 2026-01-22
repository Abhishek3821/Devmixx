import { motion } from "framer-motion";
import heroImg from "../assets/Dev1.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:160px_160px] opacity-30" />

      {/* Optional left gradient (keep or remove if you want totally clean) */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-900/20 to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center px-6 lg:grid-cols-2">

        {/* LEFT SIDE (IMAGE ONLY) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-start"
        >
          <img
            src={heroImg}
            alt="Hero visual"
            className="w-72 sm:w-96 lg:w-[420px] object-contain"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="relative mt-16 lg:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
          >
            Creative Solutions
            <br />
            <span className="text-white">Real Results</span>
          </motion.h1>

          {/* Animated blue ring */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-6 h-10 w-10 rounded-full border border-blue-400"
          />

          {/* CTA (DESKTOP) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute right-0 top-1/2 hidden lg:block"
          >
            <div className="group relative flex h-40 w-40 cursor-pointer items-center justify-center rounded-full border border-white/20">
              <span className="text-sm font-medium">Get A Quote</span>
              <span className="absolute bottom-6 text-xl">↓</span>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/10 opacity-0 transition group-hover:opacity-100" />
            </div>
          </motion.div>
        </div>7
      </div>
    </section>
  );
}
