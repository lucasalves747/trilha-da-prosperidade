import React from 'react';
import { Section } from './ui/Section';
import { Users, Target, ShieldCheck } from 'lucide-react';

export const WhyItWorks: React.FC = () => {
  return (
    <Section className="bg-brand-dark text-white">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-brand-yellow">
            Por que funciona?
          </h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <ShieldCheck className="w-8 h-8 text-brand-yellow flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">Simples e Executável</h4>
                <p className="text-stone-300 text-sm md:text-base">
                  Pensada para a vida real. Tudo o que é aplicado aqui nasce de vivência real, convivendo com os ambientes mais avançados de desenvolvimento.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Users className="w-8 h-8 text-brand-yellow flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">Ambiente e Network</h4>
                <p className="text-stone-300 text-sm md:text-base">
                  Ambiente importa. Você não cresce isolado. Aqui o padrão é mais alto, a mentalidade é expansiva e a execução é valorizada.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-stone-800 p-6 md:p-12 rounded-2xl border border-stone-700 relative overflow-hidden mt-6 lg:mt-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl"></div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-brand-yellow" />
              Resultado Palpável
            </h3>
            <ul className="space-y-4">
              {[
                "Mais energia no dia a dia",
                "Mais clareza mental",
                "Vida financeira organizada",
                "Visão real de crescimento",
                "Posicionamento definido"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-stone-300 border-b border-stone-700 pb-3 last:border-0 last:pb-0 text-sm md:text-base">
                  <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
        </div>
      </div>
    </Section>
  );
};