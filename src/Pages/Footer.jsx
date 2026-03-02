import React from "react";
import { MapPin, Headphones, Mail, Send, ArrowUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const CONTACT_INFO = [
  { icon: <MapPin size={18} />, title: "17504 Carlton Cuevas Rd", sub: "Gulfport, MS, 39503" },
  { icon: <Headphones size={18} />, title: "1-800-555-500", sub: "Mon–Fri 8:30am – 6:30pm" },
  { icon: <Mail size={18} />, title: "hello@ellordigital.com", sub: "24×7 online support" },
];

const QUICK_LINKS = ["Home", "About us", "Services", "Portfolio", "Blog", "Contact"];

const Footer = () => {
  return (
    <footer className="bg-[#1e2023] text-gray-400 py-16 px-6 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* TOP CTA STRIP */}
        <div className="bg-[#1e1f22] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-serif text-white italic">Let’s build amazing.</h2>
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all">
            Start Project
          </button>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-12 text-sm">
          {/* Contacts */}
          <div className="space-y-6">
            <h3 className="text-white font-medium uppercase tracking-widest text-xs">Reach Us</h3>
            {CONTACT_INFO.map((item, i) => (
              <div key={i} className="flex gap-4 group cursor-default">
                <div className="text-gray-600 group-hover:text-white transition-colors">{item.icon}</div>
                <div>
                  <p className="text-gray-200">{item.title}</p>
                  <p className="text-gray-500 text-xs">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Links & Newsletter */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-2">
              {QUICK_LINKS.map(link => (
                <a key={link} href="#" className="hover:text-white transition-colors">{link}</a>
              ))}
            </div>
            <div className="relative">
              <input type="email" placeholder="Email Newsletter" className="w-full bg-black/20 border border-white/10 rounded-full py-3 px-6 outline-none focus:border-white/30 transition-all" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white h-8 w-8 rounded-full flex items-center justify-center text-black"><Send size={14}/></button>
            </div>
          </div>

          {/* Call Center Box */}
          <div className="bg-white/5 border border-white/5 p-8 rounded-[2rem] space-y-4">
            <h3 className="text-white font-serif italic text-lg">Ready to talk?</h3>
            <p className="text-2xl text-white font-medium tracking-tight">1-800-555-500</p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-tighter opacity-50">
              <ShieldCheck size={14}/> Secure & ISO Certified
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest">
          <span className="text-white font-serif italic text-base">EllorDigital</span>
          <p>© {new Date().getFullYear()} — Designed by EllorDigital</p>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-white text-black p-3 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;