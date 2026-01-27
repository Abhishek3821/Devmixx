import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const lastScrollY = useRef(0);
  const { scrollYProgress } = useScroll();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/project" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  /* ======================
     SCROLL LOGIC
  ====================== */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScrollY.current && current > 80);
      setScrolled(current > 10);
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ======================
     CURSOR GLOW
  ====================== */
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const goTo = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      {/* SCROLL PROGRESS */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600"
      />

      {/* NAVBAR WRAPPER */}
      <motion.div
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed top-4 z-50 w-full flex justify-center px-4"
      >
        {/* PILL NAVBAR */}
        <motion.header
          onMouseMove={handleMouseMove}
          className={`
            relative w-full max-w-6xl
            rounded-full
            bg-black/60 backdrop-blur-2xl
            border border-white/10
            overflow-hidden
            transition-shadow duration-300
            ${scrolled ? "shadow-xl shadow-black/40" : "shadow-md shadow-black/20"}
          `}
        >
          {/* CURSOR GLOW */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(
                400px at ${cursor.x}px ${cursor.y}px,
                rgba(59,130,246,0.18),
                transparent 70%
              )`,
            }}
          />

          <div className="relative px-8">
            <div className="flex h-14 items-center justify-between">

              {/* LOGO */}
              <div
                onClick={() => goTo("/")}
                className="cursor-pointer select-none"
              >
                <span className="
                  text-lg font-extrabold tracking-wide
                  bg-gradient-to-r from-blue-400 to-cyan-400
                  bg-clip-text text-transparent
                ">
                  Devmixx
                </span>
              </div>

              {/* DESKTOP NAV */}
              <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
                {navItems.map((item) => (
                  <NavLink key={item.name} to={item.path}>
                    {({ isActive }) => (
                      <div className="relative group">
                        <span
                          className={`transition-colors ${
                            isActive
                              ? "text-blue-400"
                              : "text-gray-300 group-hover:text-blue-400"
                          }`}
                        >
                          {item.name}
                        </span>

                        {/* INDICATOR */}
                        <span
                          className={`
                            absolute -bottom-2 left-0 h-[2px] w-full
                            origin-left scale-x-0
                            bg-gradient-to-r from-blue-400 to-cyan-400
                            transition-transform duration-300
                            ${isActive ? "scale-x-100" : "group-hover:scale-x-100"}
                          `}
                        />
                      </div>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* CTA */}
              <div className="hidden lg:block">
                <button
                  onClick={() => goTo("/contact")}
                  className="
                    rounded-full
                    bg-gradient-to-r from-blue-500 to-cyan-500
                    px-5 py-2 text-sm font-semibold text-white
                    shadow-lg shadow-blue-500/30
                    transition hover:scale-105
                  "
                >
                  Get in Touch
                </button>
              </div>

              {/* MOBILE TOGGLE */}
              <button
                className="lg:hidden text-gray-200"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </motion.header>
      </motion.div>

      {/* MOBILE MENU (UNCHANGED FUNCTIONALITY) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col px-6 pt-28 text-lg"
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => goTo(item.path)}
                  className="py-4 text-left text-gray-300 hover:text-blue-400 transition"
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => goTo("/contact")}
                className="
                  mt-8 rounded-full
                  bg-gradient-to-r from-blue-500 to-cyan-500
                  py-3 font-semibold text-white
                "
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
