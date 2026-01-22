import React from "react";
import { Heart, Zap, Globe, Smile } from "lucide-react";

const Values = () => {
  return (
    <section
      id="values"
      className="py-24 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            What Drives Us
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Our core values aren't just words on a wall. They are the principles
            we live by every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Large */}
          <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-[2rem] p-10 shadow-sm border border-slate-100 dark:border-white/10 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div className="bg-indigo-100 dark:bg-indigo-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
              <Heart size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Empathy Above All
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We believe that great software starts with understanding people.
                We listen, we observe, and we care deeply about the user
                experience.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2rem] p-10 text-white shadow-lg flex flex-col justify-between">
            <Zap size={32} className="mb-6" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Move Fast</h3>
              <p className="text-white/80">
                Innovation waits for no one. We iterate quickly and learn
                faster.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-10 shadow-sm border border-slate-100 dark:border-white/10 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div className="bg-orange-100 dark:bg-orange-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
              <Globe size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Global Mindset
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Boundaries are imaginary. We work with talent from everywhere.
              </p>
            </div>
          </div>

          {/* Card 4 - Large */}
          <div className="md:col-span-2 bg-slate-900 dark:bg-slate-800 rounded-[2rem] p-10 text-white shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="bg-slate-800 dark:bg-slate-700 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-yellow-400">
                <Smile size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Joy in Craft</h3>
              <p className="text-slate-300 leading-relaxed">
                We take immense pride in the quality of our work. Details matter.
                Micro-interactions matter. Quality is our love language.
              </p>
            </div>

            <div className="w-full md:w-1/3 aspect-square bg-slate-800 dark:bg-slate-700 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-yellow-400 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
