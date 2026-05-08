import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 mb-6 text-sm tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            NOW IN OPEN BETA
          </div>

          <h1 className="heading-font text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            YOUR MIND,<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              VISUALIZED
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10">
            A living 3D universe for your thoughts, memories, and ideas.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="group px-10 py-5 rounded-2xl bg-white text-black text-lg font-medium flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
          >
            Begin Your Journey
            <ArrowRight className="group-hover:translate-x-1 transition" />
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-[4px] text-white/40 flex flex-col items-center gap-2">
        SCROLL TO EXPLORE
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>
    </section>
  );
}
