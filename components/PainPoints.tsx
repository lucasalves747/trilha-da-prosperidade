import React from 'react';
import { Section } from './ui/Section';
import { XCircle, AlertTriangle } from 'lucide-react';

// 👉 importa a imagem
import bgYellow from '@/assets/image.png';

export const PainPoints: React.FC = () => {
  return (
    <Section
      className="
        border-t border-stone-100
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: `url(${bgYellow})`,
      }}
    >
      {/* Overlay opcional para manter leitura */}
      <div className="bg-white/80 backdrop-blur-sm">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-12">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Você trabalha.<br/>
              Você se esforça.<br/>
              <span className="text-stone-400">Mas sente que...</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              {[
                "Ganha menos do que poderia e vive apagando incêndio",
                "Não constrói patrimônio real",
                "Vê o tempo, a saúde e a energia indo embora",
                "Sente que corre, corre e não sai do lugar"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400"
                >
                  <XCircle className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />
                  <p className="text-stone-700 font-medium text-sm md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="absolute inset-0 bg-brand-yellow/20 transform rotate-3 rounded-2xl"></div>

            <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-stone-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-brand-gold" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4">
                O problema não é falta de vontade.
              </h3>

              <p className="text-base md:text-lg text-stone-600 mb-6">
                É estar na{' '}
                <strong className="text-stone-900 bg-yellow-100 px-1">
                  trilha errada
                </strong>.
              </p>

              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                Enquanto você continuar tratando os sintomas sem ajustar a base
                (Saúde, Finanças e Posicionamento), o resultado será sempre o mesmo:
                cansaço e estagnação.
              </p>
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};
