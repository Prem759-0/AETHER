import { useEffect } from 'react';
import Hero from './components/Hero';
import CanvasScene from './components/CanvasScene';
import Features from './components/Features';
import ThoughtGallery from './components/ThoughtGallery';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import Navbar from './components/Navbar';
import { LenisProvider } from './hooks/useLenis';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <LenisProvider>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Dynamic Background Gradient */}
        <div className="fixed inset-0 bg-[radial-gradient(at_40%_20%,rgba(168,85,247,0.18),transparent_50%)]" />
        <div className="fixed inset-0 bg-[radial-gradient(at_70%_70%,rgba(236,72,153,0.12),transparent_60%)]" />

        <Navbar />
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
