import { motion } from 'framer-motion';
import { Brain, Zap, Share2, Sparkles } from 'lucide-react';

const features = [
  { icon: Brain, title: "Living Orbs", desc: "Thoughts that breathe, connect and evolve" },
  { icon: Zap, title: "Emotional Reactivity", desc: "Real-time sentiment lighting" },
  { icon: Share2, title: "Constellations", desc: "Discover hidden connections" },
  { icon: Sparkles, title: "Cinematic Export", desc: "Export your mind as video" },
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="heading-font text-6xl font-bold text-center mb-20">A New Way To Think</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-purple-500/30 transition-all duration-500"
            >
              <feature.icon className="w-10 h-10 mb-6 text-purple-400 group-hover:scale-110 transition" />
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
