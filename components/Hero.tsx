import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

// Vídeo de fundo desktop
import bgVideo from '@/assets/IMG_2450.mp4';
// Imagem de fundo mobile
import bgImageMobile from '@/assets/image.png';

export const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* VIDEO PARA DESKTOP */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-container z-0"
      >
        <source src={bgVideo} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      {/* IMAGEM PARA MOBILE */}
      <div
        className="md:hidden absolute inset-0 w-full h-full bg-center bg-cover z-0"
        style={{ backgroundImage: `url(${bgImageMobile})` }}
      ></div>

      {/* CONTEÚDO */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        {/* Tag do desafio */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1.5 bg-yellow-400/20 text-stone-900 font-semibold rounded-full text-sm uppercase tracking-wider"
        >
          🔥 O Desafio de 21 Dias
        </motion.div>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold  mb-6 leading-tight"
        >
          Trilha da{' '}
          <span className="relative z-10 inline-block">
            Prosperidade
            <span className="absolute bottom-2 left-0 w-full h-2 md:h-3 bg-yellow-400/60 -z-10 skew-x-6" />
          </span>
        </motion.h1>

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl text-black/90 mb-8 max-w-3xl mx-auto font-light leading-relaxed px-2"
        >
          <span className="font-bold">2026</span> é o ano que muda a trilha da sua vida e define o nível dos seus resultados pelos próximos anos.
        </motion.p>

        {/* Botão */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="px-4"
        >
          <Button
            onClick={scrollToPricing}
            className="w-full sm:w-auto text-base md:text-lg px-6 py-4 md:px-10 md:py-5"
          >
            Quero começar 2026 na trilha certa
          </Button>

          <p className="mt-4 text-xs md:text-sm text-black/80 max-w-lg mx-auto">
            Um desafio prático e personalizado de 21 dias, criado para gerar resultados reais no curto prazo.
          </p>
        </motion.div>
      </div>
    </div>
  );
};
