import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-50/50 skew-x-12 transform origin-top-right" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center pt-24 md:pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1.5 bg-brand-yellow/20 text-brand-dark font-semibold rounded-full text-sm uppercase tracking-wider"
        >
          🔥 O Desafio de 21 Dias
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-brand-dark mb-6 leading-tight"
        >
          Trilha da <span className="relative z-10 inline-block">
            Prosperidade
            <span className="absolute bottom-2 left-0 w-full h-2 md:h-3 bg-brand-yellow/60 -z-10 skew-x-6"></span>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl text-stone-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed px-2"
        >
          <span className="font-bold text-brand-dark">2026</span> é o ano que muda a trilha da sua vida e define o nível dos seus resultados pelos próximos anos.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 mb-10 text-stone-800 font-medium text-sm md:text-base"
        >
          <div className="flex items-center justify-center gap-4 sm:gap-4">
            <span className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Saúde</span>
            <span className="hidden sm:block text-stone-300">•</span>
            <span className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Finanças</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="hidden sm:block text-stone-300">•</span>
            <span className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Digital</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="px-4"
        >
          <Button onClick={scrollToPricing} withIcon className="w-full sm:w-auto text-base md:text-lg px-6 py-4 md:px-10 md:py-5">
            Quero começar 2026 na trilha certa
          </Button>
          <p className="mt-4 text-xs md:text-sm text-stone-500 max-w-xs md:max-w-lg mx-auto">
            Um desafio prático e personalizado de 21 dias, criado para gerar resultados reais no curto prazo.
          </p>
        </motion.div>
      </div>

      {/* Floating Elements (Subtle Movement) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-2 md:left-20 w-12 h-12 md:w-16 md:h-16 border-4 border-brand-yellow/30 rounded-full opacity-50"
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-2 md:right-20 w-16 h-16 md:w-24 md:h-24 bg-brand-yellow/10 rounded-full opacity-50"
      />
    </div>
  );
};