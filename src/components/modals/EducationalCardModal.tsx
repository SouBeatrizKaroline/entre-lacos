import React from 'react';
import { X, BookOpen, ShieldCheck, AlertCircle } from 'lucide-react';
import { EDUCATIONAL_CARDS } from '../../content/educational/cards';

interface EducationalCardModalProps {
  cardId: string;
  onClose: () => void;
}

export const EducationalCardModal: React.FC<EducationalCardModalProps> = ({
  cardId,
  onClose,
}) => {
  const card = EDUCATIONAL_CARDS[cardId];

  if (!card) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-card-title"
    >
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-warm-200 p-6 sm:p-8 space-y-5 animate-fadeIn">
        {/* Cabeçalho */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-terracotta/10 text-terracotta-dark font-semibold uppercase tracking-wider">
              {card.category === 'ECA' ? 'Estatuto da Criança e do Adolescente' : 'Psicologia do Desenvolvimento'}
            </span>
            <h2 id="modal-card-title" className="font-serif text-xl sm:text-2xl font-bold text-navy">
              {card.title}
            </h2>
            <p className="text-xs text-warm-600 font-medium">
              Fonte Oficial: {card.articleOrSource}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-warm-100 text-warm-600 hover:text-navy transition-colors"
            aria-label="Fechar janela de informação"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Texto Legal / Consenso Científico Citado */}
        <div className="p-4 rounded-xl bg-warm-50 border-l-4 border-terracotta text-warm-800 text-xs sm:text-sm italic leading-relaxed">
          “{card.officialCitation}”
        </div>

        {/* O que isso significa na prática */}
        <div className="space-y-2 text-sm text-navy">
          <div className="flex items-center gap-2 font-semibold text-warm-900">
            <BookOpen className="w-4 h-4 text-sage-dark" />
            <span>O que isso significa no dia a dia da família:</span>
          </div>
          <p className="leading-relaxed text-warm-800">{card.practicalMeaning}</p>
        </div>

        {/* O que NÃO significa (para prevenir permissividade ou má interpretação) */}
        <div className="space-y-2 text-sm text-navy p-4 rounded-xl bg-amber-50/80 border border-amber-200">
          <div className="flex items-center gap-2 font-semibold text-amber-950">
            <AlertCircle className="w-4 h-4 text-amber-700" />
            <span>O que este princípio NÃO significa:</span>
          </div>
          <p className="leading-relaxed text-amber-900 text-xs sm:text-sm">
            {card.whatItIsNot}
          </p>
        </div>

        {/* Botão de Fechamento */}
        <div className="pt-2 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-medium text-sm transition-colors"
          >
            Entendido, voltar ao jogo
          </button>
        </div>
      </div>
    </div>
  );
};
