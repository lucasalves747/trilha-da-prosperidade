import React from 'react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 pt-6 md:pt-20 pb-10">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            A trilha muda.<br/>
            O crescimento é <span className="text-brand-gold">exponencial</span>.
          </h2>
          <p className="text-lg md:text-xl text-stone-600 mb-8">
            Se você sente que 2026 precisa ser diferente, se entende que os próximos anos dependem da trilha que você escolhe agora...
          </p>
          
          <div id="pricing" className="bg-yellow-50 p-6 md:p-8 rounded-3xl border border-yellow-100 shadow-lg max-w-lg mx-auto transform transition-transform md:hover:scale-105">
            <h3 className="text-2xl font-bold mb-2">Trilha da Prosperidade</h3>
            
            
            <ul className="text-left space-y-3 mb-8 bg-white p-5 md:p-6 rounded-xl">
              <li className="flex items-center text-sm font-medium"><span className="text-green-500 mr-2 flex-shrink-0">✓</span> Desafio prático de 21 dias</li>
              <li className="flex items-center text-sm font-medium"><span className="text-green-500 mr-2 flex-shrink-0">✓</span> Conteúdo objetivo + execução diária</li>
              <li className="flex items-center text-sm font-medium"><span className="text-green-500 mr-2 flex-shrink-0">✓</span> Grupo de acompanhamento</li>
              <li className="flex items-center text-sm font-medium"><span className="text-green-500 mr-2 flex-shrink-0">✓</span> Aulas ao vivo com gravações</li>
            </ul>

            <Button
  asChild
  fullWidth
  className="text-base md:text-lg py-3 md:py-4 shadow-yellow-500/20"
>
  <a
    href="https://plataformamiami.com/trilha-checkout"
    target="_blank"
    rel="noopener noreferrer"
  >
    Garantir minha vaga agora
  </a>
</Button>

          </div>
        </div>

        <div className="text-stone-400 text-xs md:text-sm border-t border-stone-100 pt-8">
          <p>&copy; 2025 Trilha da Prosperidade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
