import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import aboutImg from "../assets/Dev2.jpg";
import aiImg from "../assets/Dev3.jpg";

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
  const inView = useInView(statsRef, { once: true, margin: "-120px" });

  const business = useCountUp(240, 1600, inView);
  const satisfaction = useCountUp(100, 1400, inView);

  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">

      {/* Animated background grid */}
      <motion.div
        animate={{ backgroundPositionX: ["0%", "100%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:240px_100%] opacity-20"
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="relative">

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-3 rounded-full
                         bg-white/5 px-4 py-2 text-sm font-semibold tracking-widest text-cyan-400"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              ABOUT US
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              Your Experience Is
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text text-transparent">
                Everything To Us
              </span>
            </motion.h2>

            {/* Description */}
            <p className="mt-8 max-w-xl text-slate-400 leading-relaxed">
              We design, build, and scale digital solutions with one core focus —
              delivering exceptional user experience backed by real results.
            </p>

            {/* Small image card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative mt-14 w-72 overflow-hidden rounded-2xl
                         border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <img src={aiImg} alt="AI" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs tracking-widest text-cyan-400">
                ARTIFICIAL INTELLIGENCE
              </span>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.img
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src={aboutImg}
              alt="Developer"
              className="w-full rounded-2xl object-cover shadow-2xl shadow-blue-500/10"
            />

            {/* floating ring */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute right-10 top-24 h-16 w-16 rounded-full border border-cyan-400/50"
            />
          </motion.div>
        </div>

        {/* STATS */}
        <div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 gap-10 sm:grid-cols-2"
        >
          {/* Stat Card */}
          <StatCard
            value={`${business}+`}
            label="Business Peoples"
            barWidth="35%"
          />

          <StatCard
            value={`${satisfaction}%`}
            label="Customer Satisfaction"
            barWidth="60%"
          />
        </div>
      </div>
    </section>
  );
}

/* =========================
   STAT CARD
========================= */
function StatCard({ value, label, barWidth }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
    >
      <h3 className="text-5xl font-extrabold">{value}</h3>
      <p className="mt-2 text-slate-400">{label}</p>

      <div className="mt-6 h-1 w-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: barWidth }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400"
        />
      </div>
    </motion.div>
  );
}
