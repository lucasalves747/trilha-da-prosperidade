import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 mt-10 pb-10 flex items-center justify-center overflow-hidden">
      {/* 🎥 VIDEO */}
      <video
  autoPlay
  muted
  playsInline
  className="absolute mt-12 inset-0 w-full h-full z-0"
>
        <source
          src="https://storage.googleapis.com/msgsndr/dkM0aNpySiIFf3uusFTa/media/695451319e7c130232167652.mp4"
          type="video/mp4"
        />
        Seu navegador não suporta vídeo.
      </video>

      {/* 🌓 OVERLAY para contraste */}
      <div className="absolute inset-0 bg-white/60 md:bg-white/40 z-10" />

      {/* 🧠 CONTEÚDO */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1.5 bg-yellow-400/30 text-stone-900 font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wider"
        >
          🔥 O Desafio de 14 Dias
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="
            text-3xl sm:text-5xl md:text-7xl
            font-serif font-bold mb-6 leading-tight
          "
        >
          Trilha da{' '}
          <span className="relative inline-block">
            Prosperidade
            <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-yellow-400/70 -z-10 skew-x-6" />
          </span>
        </motion.h1>

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="
            text-base sm:text-lg md:text-2xl
            text-black/90 mb-8
            max-w-3xl mx-auto
            font-light leading-relaxed
          "
        >
          <span className="font-bold">2026</span> é o ano que muda a trilha da sua vida
          e define o nível dos seus resultados pelos próximos anos.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Button
            onClick={scrollToPricing}
            className="
              w-full sm:w-auto
              text-base md:text-lg
              px-0 py-0 md:px-10 md:py-5
            "
          >
            Quero começar 2026 na trilha certa
          </Button>

          <p className="mt-4 text-xs sm:text-sm text-black/80 max-w-lg mx-auto">
            Um desafio prático e personalizado de 14 dias, criado para gerar resultados reais no curto prazo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
