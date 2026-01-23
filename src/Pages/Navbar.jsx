import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  /* ======================
     SCROLL PROGRESS
  ====================== */
  const { scrollYProgress } = useScroll();

  /* ======================
     ROUTE BASED COLOR
  ====================== */
  const routeTheme = {
    "/": "bg-black/70",
    "/services": "bg-black/70",
    "/projects": "bg-neutral-900/70",
    "/aboutUs": "bg-zinc-900/70",
    "/contact": "bg-slate-900/70",
  };

  const currentBg =
    routeTheme[Object.keys(routeTheme).find((r) =>
      location.pathname.startsWith(r)
    )] || "bg-black/70";

  /* ======================
     HIDE / SHOW ON SCROLL
  ====================== */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScrollY.current && current > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/project" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Contact", path: "/contact" },
  ];

  const goTo = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-blue-500"
      />

      {/* NAVBAR */}
      <motion.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`fixed top-0 z-50 w-full backdrop-blur-xl border-b border-white/10 ${currentBg}`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">

            {/* LOGO */}
            <div
              onClick={() => goTo("/")}
              className="flex cursor-pointer items-center gap-2 text-xl font-bold select-none"
            >
              <div className="flex gap-1 text-blue-500">
                <span className="h-4 w-4 rotate-45 border-2 border-blue-500" />
                <span className="h-4 w-4 -rotate-45 border-2 border-blue-500" />
              </div>
              <span className="tracking-wide text-blue-500">
                Devmixx
              </span>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative transition-colors duration-300 ${
                      isActive
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-blue-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => goTo("/contact")}
                className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition"
              >
                Get in Touch
              </button>
            </div>

            {/* MOBILE */}
            <button
              className="lg:hidden text-gray-200"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 z-40 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 lg:hidden"
          >
            <div className="flex flex-col px-6 py-6 text-sm">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => goTo(item.path)}
                  className="border-b border-white/10 py-4 text-left text-gray-300 hover:text-blue-400 transition"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
