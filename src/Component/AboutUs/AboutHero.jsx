import React from "react";
import { ArrowRight, PlayCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block mb-8 animate-fade-in-up">
          <span className="px-4 py-2 rounded-full bg-white/50 border border-white backdrop-blur-sm text-sm font-bold text-indigo-600 shadow-sm">
            🚀 The Future of Work is Here
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          We build for the <br />
          <span className="text-gradient">bold & ambitious.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 font-medium leading-relaxed">
          Nexus is a design-first technology company. We help brands navigate the
          digital noise with clarity, precision, and a touch of magic.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-8 py-4 text-white bg-slate-900 rounded-full font-bold text-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center">
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>

          <button className="px-8 py-4 text-slate-700 bg-white border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center shadow-sm hover:shadow-md">
            <PlayCircle className="mr-2 w-5 h-5 text-indigo-600" />
            Watch Showreel
          </button>
        </div>

        {/* Hero Image */}
        <div className="mt-20 mx-auto max-w-5xl rounded-[2.5rem] p-4 bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl">
          <div className="rounded-[2rem] overflow-hidden aspect-video relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Team working"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
