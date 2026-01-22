import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    shortDescription: "Scalable e-commerce app with modern UI",
    description:
      "This project focuses on building a high-performance e-commerce platform with optimized UI/UX, secure payment integration, and scalable architecture. It includes product management, cart, checkout, and admin dashboards.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200",
    highlights: [
      "Responsive modern UI",
      "Optimized performance",
      "Secure payment flow",
      "SEO-friendly structure",
    ],
    live: "#",
    github: "#",
  },
  {
    title: "Corporate Website",
    shortDescription: "High-conversion business website",
    description:
      "A corporate website designed to improve brand presence and lead conversion. Includes CMS-driven content, SEO optimization, CRM integration, and performance tuning.",
    tech: ["React", "Tailwind", "SEO", "CRM"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    highlights: [
      "Clean professional design",
      "SEO optimization",
      "CRM integration",
      "Fast load times",
    ],
    live: "#",
    github: "#",
  },
  {
    title: "Trading Dashboard",
    shortDescription: "Real-time analytics & charts",
    description:
      "A real-time trading dashboard featuring interactive charts, analytics, wallet integration, and API-based live data. Built for performance and scalability.",
    tech: ["React", "TypeScript", "Charts", "APIs"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    highlights: [
      "Live data visualization",
      "Advanced charts",
      "Wallet system",
      "API-driven architecture",
    ],
    live: "#",
    github: "#",
  },
];

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-gray-200 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project Showcase
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Selected case studies highlighting modern UI, smooth animations, and
            scalable frontend solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-neutral-900/70 backdrop-blur rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 blur-xl transition" />

              {/* Card Content */}
              <div className="relative z-10">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
                  >
                    View Case Study →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X />
              </button>

              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {activeProject.title}
                </h2>
                <p className="text-gray-400 mb-6">
                  {activeProject.description}
                </p>

                <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                  {activeProject.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-300 bg-white/5 rounded-lg px-4 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-6">
                  <a
                    href={activeProject.live}
                    className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={activeProject.github}
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
