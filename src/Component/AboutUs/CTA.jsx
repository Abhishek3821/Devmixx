import React from "react";

const CTA = () => {
  return (
    <section className="py-10 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto bg-slate-900 dark:bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
        {/* Colorful Mesh */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 dark:bg-purple-700 rounded-full mix-blend-screen blur-[100px] opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600 dark:bg-indigo-700 rounded-full mix-blend-screen blur-[100px] opacity-50"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
            Ready to build <br />
            something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500">
              extraordinary?
            </span>
          </h2>

          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto">
            Join the 500+ companies that trust Nexus to transform their digital
            presence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-10 py-5 bg-white text-slate-900 rounded-full text-lg font-bold hover:bg-slate-100 hover:scale-105 transition-all shadow-xl">
              Get in Touch
            </button>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
