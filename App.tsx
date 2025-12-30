import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Process } from './components/Process';
import { Pillars } from './components/Pillars';
import { WhyItWorks } from './components/WhyItWorks';
import { Footer } from './components/Footer';
import { Button } from './components/ui/Button';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900">
      {/* Sticky Header */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100 transition-all">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-serif font-bold text-xl tracking-tight">Trilha da Prosperidade</span>
          <Button onClick={scrollToPricing} variant="primary" className="text-sm px-2 py-1">
            Entrar no Desafio
          </Button>
        </div>
      </nav>

      <main>
        <Hero />
        <PainPoints />
        <Process />
        <Pillars />
        <WhyItWorks />
        <Footer />
      </main>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-brand-dark text-brand-yellow rounded-full shadow-lg hover:bg-stone-800 transition-colors"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;