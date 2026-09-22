import React from 'react';
import { X, BookOpen, Bookmark } from 'lucide-react';
import { Memory } from '../../types';

interface MemoriesModalProps {
  memories: Memory[];
  onClose: () => void;
}

export const MemoriesModal: React.FC<MemoriesModalProps> = ({ memories, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-memories-title"
    >
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-warm-200 p-6 sm:p-8 space-y-6 animate-fadeIn">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-terracotta/10 text-terracotta-dark">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 id="modal-memories-title" className="font-serif text-2xl font-bold text-navy">
                Memórias Relacionais
              </h2>
              <p className="text-xs text-warm-600">
                Registros biográficos que influenciam diálogos e confiança ao longo do tempo.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-warm-100 text-warm-600 hover:text-navy transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {memories.length === 0 ? (
          <div className="text-center py-12 text-warm-600 space-y-2">
            <Bookmark className="w-8 h-8 text-warm-400 mx-auto" />
            <p className="text-sm">Nenhuma memória acumulada ainda.</p>
            <p className="text-xs text-warm-500">
              Inicie uma nova história e tome decisões para criar registros na memória dos personagens.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {memories.map((mem) => (
              <div
                key={mem.id}
                className="p-4 rounded-xl border border-warm-200 bg-warm-50/60 space-y-1"
              >
                <div className="flex items-center justify-between">
                  <strong className="text-navy font-semibold text-sm sm:text-base">
                    {mem.title}
                  </strong>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-semibold uppercase ${
                      mem.polarity === 'positive'
                        ? 'bg-sage/20 text-emerald-900'
                        : mem.polarity === 'strained'
                        ? 'bg-red-50 text-red-800'
                        : 'bg-warm-200 text-warm-800'
                    }`}
                  >
                    Domínio: {mem.domain}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-warm-800 leading-relaxed">
                  {mem.description}
                </p>
                <div className="text-xs text-warm-500 pt-1">
                  Fase: {mem.agePhase} anos • Perspectiva: {mem.perspective}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-navy hover:bg-navy-dark text-white font-medium text-sm transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
