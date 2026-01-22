import React, { useState, useEffect, useCallback } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   FAQ DATA
========================= */
const FAQS = [
  {
    id: 1,
    question: "It turned out to be the Hope Diamond?",
    answer:
      "Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today.",
  },
  {
    id: 2,
    question: "So why do we do it?",
    answer:
      "Because clarity comes from commitment. Once a decision is made, momentum follows.",
  },
  {
    id: 3,
    question: "I am worried about e-mail scams...",
    answer:
      "We use industry-grade security systems to detect, prevent, and mitigate threats.",
  },
  {
    id: 4,
    question: "Why IT Staff Management?",
    answer:
      "It improves productivity, reduces risk, and allows focus on core business.",
  },
  {
    id: 5,
    question: "How secure is our data?",
    answer:
      "Enterprise-grade encryption and constant monitoring ensure safety.",
  },
  {
    id: 6,
    question: "Can we scale easily?",
    answer:
      "Yes, our systems are built for scalability and performance.",
  },
  {
    id: 7,
    question: "What support is included?",
    answer:
      "24/7 monitoring, maintenance, and proactive issue resolution.",
  },
  {
    id: 8,
    question: "Why choose your company?",
    answer:
      "Because we blend strategy, technology, and design for real results.",
  },
];

/* =========================
   FAQ ITEM
========================= */
const FAQItem = ({ item, index, isActive, onToggle }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onToggle}
      className={`
        relative cursor-pointer rounded-2xl overflow-hidden
        border transition-all duration-500
        ${
          isActive
            ? "border-blue-400/60 bg-gradient-to-r from-blue-500/20 to-violet-500/20"
            : "border-white/10 bg-white/[0.02] hover:border-white/20"
        }
      `}
    >
      {/* GLOW */}
      {isActive && (
        <div className="absolute -inset-1 bg-blue-500/20 blur-2xl opacity-60 pointer-events-none" />
      )}

      {/* HEADER */}
      <div className="relative z-10 flex items-center justify-between px-6 py-6">
        <h3 className="text-lg font-semibold text-white">
          <span className="text-blue-400 mr-2">
            {String(index).padStart(2, "0")}
          </span>
          {item.question}
        </h3>

        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          className={`
            w-10 h-10 rounded-full flex items-center justify-center
            border transition-all duration-300
            ${isActive ? "bg-blue-400 text-black" : "border-white/20 text-white"}
          `}
        >
          {isActive ? <Minus size={18} /> : <Plus size={18} />}
        </motion.div>
      </div>

      {/* CONTENT */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative z-10 overflow-hidden"
          >
            <div className="px-6 pb-6 text-sm text-white/80 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* =========================
   FAQ SECTION
========================= */
const FAQSection = () => {
  const [activeId, setActiveId] = useState(null);

  /* Sync from URL hash */
  useEffect(() => {
    const hash = window.location.hash.replace("#faq-", "");
    if (hash) setActiveId(Number(hash));
  }, []);

  const toggleFaq = useCallback((id) => {
    setActiveId((prev) => {
      const next = prev === id ? null : id;
      window.history.replaceState(
        null,
        "",
        next ? `#faq-${next}` : window.location.pathname
      );
      return next;
    });
  }, []);

  return (
    <section className="relative bg-black text-white py-32 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm">
            ✳ FAQ
          </span>
          <h2 className="text-5xl lg:text-7xl font-extrabold mt-4">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-white/60 max-w-xl mx-auto">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {FAQS.slice(0, 4).map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                index={index + 1}
                isActive={activeId === item.id}
                onToggle={() => toggleFaq(item.id)}
              />
            ))}
          </div>

          <div className="space-y-6">
            {FAQS.slice(4).map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                index={index + 5}
                isActive={activeId === item.id}
                onToggle={() => toggleFaq(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
