import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-28 px-6 bg-black text-white">
      {/* Gradient Orbs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute top-20 -right-32 h-96 w-96 rounded-full bg-pink-500/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-white/10 text-gray-300">
            UI • Frontend • Case Studies
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Crafting Modern
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>

          <p className="text-gray-400 max-w-xl mb-8">
            I design and build high-performance websites and applications with
            modern UI, smooth animations, and scalable frontend architecture.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 p-1">
            <div className="rounded-3xl bg-neutral-900 p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="h-3 w-1/3 rounded bg-white/10" />
                <div className="h-3 w-2/3 rounded bg-white/10" />
                <div className="h-3 w-1/2 rounded bg-white/10" />
                <div className="h-32 rounded-xl bg-gradient-to-br from-indigo-500/30 to-pink-500/30" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
