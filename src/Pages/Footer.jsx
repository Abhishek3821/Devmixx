import React from "react";
import {
  MapPin,
  Headphones,
  Mail,
  Send,
  ArrowUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* =========================
   SOCIAL BUTTON
========================= */
const SocialBtn = ({ label }) => (
  <button
    className="
      w-10 h-10 rounded-full border border-white/20
      text-sm text-white/70
      hover:text-cyan-400 hover:border-cyan-400
      hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
      transition-all duration-300
    "
  >
    {label}
  </button>
);

/* =========================
   FOOTER
========================= */
const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-32 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[200px]" />

      {/* CTA STRIP */}
      <div className="relative max-w-7xl mx-auto px-6 mb-24">
        <div
          className="
          rounded-3xl p-10
          bg-gradient-to-r from-cyan-500/20 to-violet-500/20
          border border-white/10
          backdrop-blur-xl
          flex flex-col lg:flex-row items-center justify-between gap-6
        "
        >
          <div className="flex items-center gap-4">
            <Sparkles className="text-cyan-400" />
            <h3 className="text-2xl font-bold">
              Let’s build something amazing together
            </h3>
          </div>
          <button
            className="
            px-8 py-4 rounded-full bg-white text-black font-bold text-sm
            hover:scale-105 transition
          "
          >
            Start a Project
          </button>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid lg:grid-cols-3 gap-20 pb-24 border-b border-white/10">
          {/* WHERE TO FIND US */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold">Where To Find Us</h3>

            <div className="flex gap-4 group">
              <MapPin className="text-cyan-400 mt-1 group-hover:scale-110 transition" />
              <div>
                <p className="font-semibold">17504 Carlton Cuevas Rd</p>
                <p className="text-slate-400 text-sm">Gulfport, MS, 39503</p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <Headphones className="text-cyan-400 mt-1 group-hover:scale-110 transition" />
              <div>
                <p className="font-semibold">001123456789</p>
                <p className="text-slate-400 text-sm">
                  Mon–Fri 8:30am – 6:30pm
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <Mail className="text-cyan-400 mt-1 group-hover:scale-110 transition" />
              <div>
                <p className="font-semibold">info@example.com</p>
                <p className="text-slate-400 text-sm">24×7 online support</p>
              </div>
            </div>
          </div>

          {/* NEWSLETTER + QUICK LINKS */}
          <div className="space-y-12">
            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-5">Newsletter</h3>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="
                    w-full bg-black border border-white/20
                    rounded-lg py-4 pl-5 pr-14 text-sm
                    outline-none focus:border-cyan-400
                    focus:shadow-[0_0_20px_rgba(34,211,238,0.4)]
                    transition
                  "
                />
                <button
                  className="
                  absolute right-4 top-1/2 -translate-y-1/2
                  text-cyan-400 hover:scale-110 transition
                "
                >
                  <Send size={18} />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <div className="grid grid-cols-3 gap-y-3 text-sm">
                {[
                  "Home",
                  "About us",
                  "Team",
                  "Team Single",
                  "Service",
                  "Service Single",
                  "Blog",
                  "Blog Single",
                  "Contact",
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-slate-400 hover:text-cyan-400 transition"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CALL CENTER */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold">Call Center</h3>

            <p className="text-3xl font-extrabold tracking-wide">
              1-800-555-500
            </p>

            <p className="text-slate-400">and get a free estimate</p>

            {/* TRUST BADGE */}
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <ShieldCheck className="text-cyan-400" />
              Secure & ISO Certified
            </div>

            <div className="flex gap-3 pt-6">
              <SocialBtn label="FB" />
              <SocialBtn label="DR" />
              <SocialBtn label="TW" />
              <SocialBtn label="BE" />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-8 gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 text-xl font-bold">
            <div className="w-8 h-8 border-2 border-cyan-400 rounded-md rotate-45" />
            Devmixx
          </div>

          {/* Credit */}
          <p className="text-sm text-slate-400">
            Develop and design by{" "}
            <span className="text-cyan-400">Potenza Global Solutions</span>
          </p>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="
          fixed bottom-6 right-6 w-12 h-12 rounded-full
          border border-cyan-400 text-cyan-400
          flex items-center justify-center
          hover:bg-cyan-400 hover:text-black
          shadow-[0_0_30px_rgba(34,211,238,0.6)]
          animate-pulse
          transition
        "
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
