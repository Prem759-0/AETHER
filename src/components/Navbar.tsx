import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <h1 className="heading-font text-2xl font-semibold tracking-tighter">AETHER</h1>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          <a href="#explore" className="hover:text-purple-400 transition-colors">Explore Nebula</a>
          <a href="#thoughts" className="hover:text-purple-400 transition-colors">Thoughts</a>
          <a href="#features" className="hover:text-purple-400 transition-colors">Experience</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all neon-glow"
        >
          Enter Universe
        </motion.button>
      </div>
    </nav>
  );
}
