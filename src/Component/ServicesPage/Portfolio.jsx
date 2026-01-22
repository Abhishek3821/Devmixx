import React from "react";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="work" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-blue-500 font-bold tracking-wider text-sm uppercase mb-2 block">
              Selected Work
            </span>
            <h2 className="text-5xl font-bold">Visual Excellence</h2>
          </div>

          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-white border-b border-white pb-1 hover:text-gray-300 transition"
          >
            View All Projects <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
          {/* Item 1 - Large */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
              alt="Project 1"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-3xl font-bold">Fintech App</h3>
            </div>
          </div>

          {/* Item 2 */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e0b7a8?q=80&w=800&auto=format&fit=crop"
              alt="Project 2"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-xl font-bold">Rebrand</h3>
            </div>
          </div>

          {/* Item 3 */}
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
              alt="Project 3"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-2xl font-bold">Campaign</h3>
            </div>
          </div>

          {/* Item 4 */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
              alt="Project 4"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-xl font-bold">Future Tech</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
