import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2, TrendingUp, Zap } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
          O que é a Trilha da Prosperidade?
        </h2>
        <p className="text-xl text-stone-600">
          Um reset real. Aqui não existe "assistir e ver depois".
          <br/>Todos os dias você executa, ajusta e avança.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
            title: "Ajustar a Base",
            desc: "7 dias iniciais para corrigir o que te impede de crescer.",
            bg: "bg-blue-50"
          },
          {
            icon: <Zap className="w-8 h-8 text-yellow-600" />,
            title: "Estruturar",
            desc: "7 dias para criar processos que funcionam sem seu esforço constante.",
            bg: "bg-yellow-50"
          },
          {
            icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
            title: "Alavancar",
            desc: "7 dias finais para multiplicar resultados usando o digital.",
            bg: "bg-purple-50"
          }
        ].map((step, idx) => (
          <div key={idx} className={`group relative p-8 rounded-2xl ${step.bg} transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}>
            <div className="mb-4 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-stone-600">{step.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-flex items-center justify-center px-6 py-2 bg-brand-dark text-white rounded-full text-sm font-semibold tracking-wide">
          👉 O RESULTADO VEM DA AÇÃO DIÁRIA GUIADA
        </div>
      </div>
    </Section>
  );
};