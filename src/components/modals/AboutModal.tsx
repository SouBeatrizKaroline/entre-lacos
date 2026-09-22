import React from 'react';
import { X, Info, Shield, Scale, Heart } from 'lucide-react';

interface AboutModalProps {
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-about-title"
    >
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-warm-200 p-6 sm:p-8 space-y-5 animate-fadeIn">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-warm-100 text-navy">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h2 id="modal-about-title" className="font-serif text-2xl font-bold text-navy">
                Sobre o Entre Laços
              </h2>
              <span className="text-xs text-warm-600">
                Protótipo v0.1.0 • Pré-produção interdisciplinar
              </span>
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

        <div className="text-sm text-warm-800 space-y-3 leading-relaxed">
          <p>
            <strong>Entre Laços</strong> é um jogo narrativo sobre vínculos familiares, desenvolvimento infantil e parentalidade responsável, projetado para permitir que cuidadores e jovens experimentem os efeitos relacionais de suas escolhas.
          </p>

          <div className="p-3.5 rounded-xl bg-warm-50 border border-warm-200 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-navy text-xs uppercase tracking-wider">
              <Scale className="w-4 h-4 text-terracotta" />
              <span>Bases Científicas e Normativas</span>
            </div>
            <ul className="list-disc list-inside text-xs text-warm-700 space-y-1">
              <li>Estatuto da Criança e do Adolescente (Lei Federal nº 8.069/1990)</li>
              <li>Lei Menino Bernardo / Não Violência (Lei nº 13.010/2014)</li>
              <li>Diretrizes de Parentalidade Protetiva da Organização Mundial da Saúde (OMS, 2023/2024)</li>
              <li>Center on the Developing Child — Harvard University (Serve & Return)</li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1 text-xs text-amber-950">
            <div className="flex items-center gap-2 font-semibold">
              <Shield className="w-4 h-4 text-amber-700" />
              <span>Aviso de Limites Clínicos</span>
            </div>
            <p>
              Este jogo não realiza avaliação psicológica, diagnóstico de transtornos mentais nem aconselhamento médico ou jurídico individual. Trata-se de uma obra de ficção com propósitos reflexivos e socioeducativos.
            </p>
          </div>
        </div>

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
