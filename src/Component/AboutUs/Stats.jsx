import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Smile,
  Briefcase,
  Award,
  Users,
} from "lucide-react";

/* =======================
   STATS DATA
======================= */
const statsData = [
  {
    label: "Happy Clients",
    value: 250,
    suffix: "+",
    icon: Smile,
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    label: "Projects Completed",
    value: 1200,
    suffix: "+",
    icon: Briefcase,
    gradient: "from-emerald-400 to-cyan-500",
  },
  {
    label: "Awards Won",
    value: 18,
    suffix: "",
    icon: Award,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    label: "Team Members",
    value: 45,
    suffix: "",
    icon: Users,
    gradient: "from-pink-400 to-rose-500",
  },
];

/* =======================
   SINGLE STAT CARD
======================= */
const StatCard = ({ label, value, suffix, icon: Icon, gradient }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    const duration = 1200;
    const step = Math.max(1, Math.floor(value / (duration / 16)));

    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="p-8 rounded-3xl bg-slate-900 border border-white/10 text-center hover:border-white/20 transition-all duration-300"
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="p-4 rounded-2xl bg-white/5">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>

      {/* Number */}
      <div
        className={`text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}
      >
        {count.toLocaleString()}
        {suffix}
      </div>

      {/* Label */}
      <div className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  );
};

/* =======================
   MAIN COMPONENT
======================= */
const Stats = () => {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
