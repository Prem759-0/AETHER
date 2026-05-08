import { useEffect } from 'react';
import Hero from './components/Hero';
import CanvasScene from './components/CanvasScene';
import Features from './components/Features';
import ThoughtGallery from './components/ThoughtGallery';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import { LenisProvider } from './hooks/useLenis';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <LenisProvider>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background Glow */}
        <div className="fixed inset-0 bg-[radial-gradient(at_50%_30%,rgba(120,80,255,0.15),transparent_70%)] pointer-events-none" />

        <Hero />
        <CanvasScene />
        <Features />
        <ThoughtGallery />
        <Footer />

        <CommandPalette />
      </div>
    </LenisProvider>
  );
}

export default App;
