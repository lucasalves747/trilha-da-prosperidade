import React from 'react';
import { Section } from './ui/Section';
import { XCircle, AlertTriangle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <Section className="bg-[#FACC15]">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 md:p-12">

        {/* Coluna esquerda */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-stone-900">
            Você trabalha.<br />
            Você se esforça.<br />
            <span className="text-stone-700 font-normal">Mas sente que...</span>
          </h2>

          <div className="space-y-4 md:space-y-6">
            {[
              'Ganha menos do que poderia e vive apagando incêndio',
              'Não constrói patrimônio real',
              'Vê o tempo, a saúde e a energia indo embora',
              'Sente que corre, corre e não sai do lugar',
            ].map((item, index) => (
              <div
                key={index}
                className="
                  flex items-start
                  bg-amber-50
                  p-4
                  rounded-xl
                  shadow-sm
                  border-l-4 border-amber-400
                "
              >
                <XCircle className="w-6 h-6 text-amber-700 mr-4 flex-shrink-0" />
                <p className="text-stone-800 font-medium text-sm md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna direita */}
        <div className="relative mt-8 md:mt-0">
          <div className="absolute inset-0 bg-amber-300/40 rotate-3 rounded-2xl" />

          <div className="relative bg-amber-50 p-6 md:p-8 rounded-2xl shadow-xl border border-amber-200">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-amber-200 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-amber-800" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-stone-900">
              O problema não é falta de vontade.
            </h3>

            <p className="text-base md:text-lg text-stone-700 mb-6">
              É estar na{' '}
              <strong className="bg-amber-200 px-1 text-stone-900">
                trilha errada
              </strong>.
            </p>

            <p className="text-stone-700 leading-relaxed text-sm md:text-base">
              Enquanto você continuar tratando os sintomas sem ajustar a base
              (Saúde, Finanças e Posicionamento), o resultado será sempre o
              mesmo: cansaço e estagnação.
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
};
