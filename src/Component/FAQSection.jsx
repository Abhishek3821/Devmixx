import React, { useState, useEffect, useCallback } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   FAQ DATA
========================= */
const FAQS = [
  {
    id: 1,
    question: "Do you offer custom digital solutions?",
    answer:
      "Yes, every project is tailored specifically to your brand's unique needs, target audience, and long-term goals.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on complexity, but a standard digital transformation or web platform takes roughly 4 to 8 weeks from strategy to launch.",
  },
  {
    id: 3,
    question: "I am worried about data security...",
    answer:
      "We use industry-grade, enterprise-level encryption and continuous monitoring to ensure your data and customer information remain strictly confidential.",
  },
  {
    id: 4,
    question: "Do you provide post-launch support?",
    answer:
      "Absolutely. We offer tailored maintenance packages including 24/7 monitoring, regular updates, and proactive issue resolution.",
  },
  {
    id: 5,
    question: "Can our systems scale as we grow?",
    answer:
      "Yes, our architecture is built with scalability in mind, allowing your platforms to handle increased traffic and new features effortlessly.",
  },
  {
    id: 6,
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing structures including project-based flat fees and retainer models, depending on the scope of your ongoing needs.",
  },
  {
    id: 7,
    question: "Do you handle content and copywriting?",
    answer:
      "Yes, our team includes expert digital copywriters who ensure your brand voice is consistent and optimized for conversions.",
  },
  {
    id: 8,
    question: "Why choose EllorDigital?",
    answer:
      "Because we blend high-end design aesthetics with robust engineering to deliver digital experiences that actually drive business growth.",
  },
];

/* =========================
   FAQ ITEM (Compact Bento Style)
========================= */
const FAQItem = ({ item, index, isActive, onToggle }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        relative overflow-hidden rounded-[1.5rem]
        border transition-all duration-500
        ${
          isActive
            ? "border-gray-400/50 bg-[#1e2023] shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            : "border-[#4c4e51]/30 bg-[#1e1f22] hover:border-[#4c4e51]/80"
        }
      `}
    >
      {/* HEADER */}
      <div 
        onClick={onToggle}
        className="relative z-10 flex items-center justify-between px-5 py-4 md:px-6 md:py-5 cursor-pointer select-none"
      >
        <h3 className="text-sm md:text-base font-medium text-white flex items-center pr-4">
          <span className="text-gray-500 font-serif italic mr-4 text-xs md:text-sm">
            {String(index).padStart(2, "0")}
          </span>
          {item.question}
        </h3>

        {/* Toggle Icon */}
        <motion.div
          animate={{ rotate: isActive ? 180 : 0 }}
          className={`
            flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
            border transition-all duration-300
            ${isActive ? "bg-white border-white text-[#1e2023]" : "border-[#4c4e51]/50 text-gray-400 bg-[#1e2023]"}
          `}
        >
          {isActive ? <Minus size={16} /> : <Plus size={16} />}
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
            <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-xs md:text-sm text-gray-400 leading-relaxed ml-7 md:ml-8">
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
    <section className="relative bg-[#1e2023] text-white py-16 lg:py-24 overflow-hidden border-t border-[#4c4e51]/30 font-sans">
      
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 flex flex-col items-center"
        >
          {/* Elegant Pill Tag */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4c4e51]/50 bg-[#1e1f22] px-3 py-1.5 w-fit">
            <span className="text-[10px] md:text-xs font-semibold tracking-widest text-gray-300 uppercase">
              Support
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-[1.2]">
            Frequently Asked <br className="hidden sm:block" />
            <span className="italic font-light text-gray-400">Questions.</span>
          </h2>
        </motion.div>

        {/* COMPACT GRID */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-6">
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

          {/* Right Column */}
          <div className="flex flex-col gap-4 md:gap-6">
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