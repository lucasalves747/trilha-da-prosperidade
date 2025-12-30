import React from 'react';
import { Section } from './ui/Section';
import { Heart, Wallet, Smartphone } from 'lucide-react';

export const Pillars: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-stone-50 to-white" id="details">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Os 3 Pilares na Prática</h2>
        <p className="text-stone-500 font-medium tracking-widest uppercase text-sm md:text-base">Metodologia 7 + 7 + 7</p>
      </div>




      <div className="space-y-6 md:space-y-8">
        {/* Pillar 1 - Health */}
        <div className="group relative overflow-hidden bg-white rounded-3xl shadow-xl border border-stone-100 transition-all hover:shadow-2xl">
          <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
          <div className="grid md:grid-cols-12 gap-0">
            {/* Ajuste de padding: p-6 no mobile, p-10 no desktop */}
            <div className="md:col-span-4 bg-green-50/50 p-6 md:p-10 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-stone-100">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 md:mb-6 text-green-600">
                <Heart className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900">Saúde</h3>
              <p className="text-green-700 font-medium mt-1 md:mt-2">Dias 1 a 7</p>
            </div>
            <div className="md:col-span-8 p-6 md:p-10 flex flex-col justify-center">
              <p className="text-base md:text-lg text-stone-600 mb-6">
                Aqui você ajusta o que sustenta tudo. O objetivo não é estética. É operar em outro nível físico e mental.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {['Energia Vital', 'Foco Extremo', 'Controle Emocional', 'Hábitos de Alta Performance'].map((item, i) => (
                  <li key={i} className="flex items-center text-stone-800 font-medium text-sm md:text-base">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pillar 2 - Finance */}
        <div className="group relative overflow-hidden bg-white rounded-3xl shadow-xl border border-stone-100 transition-all hover:shadow-2xl">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
          <div className="grid md:grid-cols-12 gap-0">
            <div className="md:col-span-4 bg-blue-50/50 p-6 md:p-10 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-stone-100">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 md:mb-6 text-blue-600">
                <Wallet className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900">Finanças</h3>
              <p className="text-blue-700 font-medium mt-1 md:mt-2">Dias 8 a 14</p>
            </div>
            <div className="md:col-span-8 p-6 md:p-10 flex flex-col justify-center">
              <p className="text-base md:text-lg text-stone-600 mb-6">
                Você para de viver no improviso e começa a construir riqueza com direção. Organize o jogo.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {['Clareza Financeira', 'Organização Pessoal', 'Visão de Patrimônio', 'Intenção de Investimento'].map((item, i) => (
                  <li key={i} className="flex items-center text-stone-800 font-medium text-sm md:text-base">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Pillar 3 - Digital */}
        <div className="group relative overflow-hidden bg-white rounded-3xl shadow-xl border border-stone-100 transition-all hover:shadow-2xl">
          <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>
          <div className="grid md:grid-cols-12 gap-0">
            <div className="md:col-span-4 bg-purple-50/50 p-6 md:p-10 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-stone-100">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 md:mb-6 text-purple-600">
                <Smartphone className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900">Digital</h3>
              <p className="text-purple-700 font-medium mt-1 md:mt-2">Dias 15 a 21</p>
            </div>
            <div className="md:col-span-8 p-6 md:p-10 flex flex-col justify-center">
              <p className="text-base md:text-lg text-stone-600 mb-6">
                Aqui acontece a aceleração. Quando saúde e finanças estão alinhadas, o digital multiplica resultados.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {['Posicionamento', 'Gerar Visibilidade', 'Atenção em Oportunidade', 'Base para Escala'].map((item, i) => (
                  <li key={i} className="flex items-center text-stone-800 font-medium text-sm md:text-base">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};