import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";

// Local Assets
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const { scrollYProgress } = useScroll();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      // Hide navbar when scrolling down, show when scrolling up
      setHidden(current > lastScrollY.current && current > 80);
      setScrolled(current > 10);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      {/* 1. Scroll Progress Bar (Royal Charcoal Accent) */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 z-[70] h-[2px] origin-left bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.2)]"
      />

      {/* 2. Navbar Wrapper */}
      <motion.div
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 sm:top-6 z-50 w-full flex justify-center px-4 sm:px-6 md:px-8"
      >
        <motion.header
          className={`
            w-full max-w-7xl rounded-full bg-[#1e1f22]/80 backdrop-blur-xl border border-[#4c4e51]/40 transition-all duration-500
            ${scrolled ? "shadow-[0_20px_40px_rgba(0,0,0,0.4)] py-1" : "shadow-lg py-2"}
          `}
        >
          <div className="flex h-12 sm:h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
            
            {/* LOGO AREA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => goTo("/")}
              className="flex items-center gap-3 cursor-pointer select-none group"
            >
              <div className="relative">
                <img 
                  src={Logo} 
                  alt="EllorDigital" 
                  className="h-30 sm:h-35 w-auto pt-3 object-contain transition-transform duration-300 group-hover:rotate-[1deg]" 
                />
                {/* Subtle Glow behind logo on scroll */}
                {scrolled && (
                  <div className="absolute inset-0 bg-white/10 blur-xl rounded-full -z-10" />
                )}
              </div>
              <span className="hidden xs:block text-lg lg:text-xl font-serif italic font-medium tracking-tight text-white">
                EllorDigital
              </span>
            </motion.div>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex items-center">
              {/* Nav Links */}
              <div className="flex items-center gap-6 lg:gap-8 mr-8 lg:mr-10">
                {navItems.map((item) => (
                  <NavLink 
                    key={item.name} 
                    to={item.path}
                    className={({ isActive }) => `
                      relative text-xs lg:text-sm font-medium transition-colors duration-300
                      ${isActive ? "text-white" : "text-gray-400 hover:text-gray-200"}
                    `}
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        {isActive && (
                          <motion.div 
                            layoutId="navUnderline"
                            className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white/50"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#1e1f22" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo("/contact")}
                className="flex items-center gap-2 rounded-full border border-[#4c4e51] px-5 py-2 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300"
              >
                Sign In
                <ArrowRight size={14} />
              </motion.button>
            </nav>

            {/* MOBILE TOGGLE */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-white p-2 rounded-full bg-[#4c4e51]/20 border border-[#4c4e51]/40"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </motion.header>
      </motion.div>

      {/* 3. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#1e2023]/95 backdrop-blur-2xl md:hidden flex flex-col justify-center px-8 sm:px-12"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.button
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ delay: i * 0.1, ease: "easeOut" }}
                  key={item.name}
                  onClick={() => goTo(item.path)}
                  className="text-3xl sm:text-4xl font-serif italic text-left text-gray-500 hover:text-white transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-10 border-t border-[#4c4e51]/30"
              >
                <button
                  onClick={() => goTo("/contact")}
                  className="w-full rounded-full bg-white py-4 font-bold text-[#1e1f22] text-lg shadow-xl"
                >
                  Get Started
                </button>
                <p className="text-center text-gray-500 mt-6 text-sm">
                  hello@ellordigital.com
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}