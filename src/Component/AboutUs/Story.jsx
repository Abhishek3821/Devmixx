import React from "react";
import { CheckCircle2 } from "lucide-react";

const Story = () => {
  return (
    <section
      id="story"
      className="py-24 bg-white dark:bg-slate-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-orange-200 dark:bg-orange-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-2xl"></div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-200 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-2xl"></div>

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
              alt="Meeting"
              className="relative rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-wide uppercase text-sm mb-4">
              Our Journey
            </h2>

            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Making complex things <br />
              <span className="underline decoration-indigo-400 decoration-4 underline-offset-4">
                simple.
              </span>
            </h3>

            <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 mb-8">
              <p>
                We started Nexus with a pencil, a sketchbook, and a shared
                frustration: software was becoming too complicated. We wanted to
                bring back the joy of simplicity.
              </p>
              <p>
                Ten years later, we are still obsessed with pixels, interactions,
                and the human side of technology.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Human-centric Design",
                "Sustainable Code",
                "Radical Transparency",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-3 text-lg font-bold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="text-green-500 w-6 h-6" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
