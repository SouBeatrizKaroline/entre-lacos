import React from 'react';
import { X, Users, Sparkles, Shield, HeartHandshake } from 'lucide-react';

interface FamilyModeModalProps {
  onClose: () => void;
}

export const FamilyModeModal: React.FC<FamilyModeModalProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-family-title"
    >
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-warm-200 p-6 sm:p-8 space-y-6 animate-fadeIn">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sage/20 text-sage-dark">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h2 id="modal-family-title" className="font-serif text-2xl font-bold text-navy">
                Modo Família (Jogar Juntos)
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-sage/20 text-emerald-900 font-semibold uppercase">
                Arquitetura Preparada (Milestone M5)
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

        <p className="text-sm text-warm-800 leading-relaxed">
          O modo <strong>Jogar Juntos</strong> foi desenhado para ser jogado em parceria (cuidador e jovem no mesmo dispositivo ou em telas complementares), estimulando o diálogo real sem forçar intimidade.
        </p>

        {/* Pilares do Modo Família */}
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-warm-50 border border-warm-200 space-y-1">
            <div className="flex items-center gap-2 font-semibold text-navy text-sm">
              <Sparkles className="w-4 h-4 text-terracotta" />
              <span>1. Informações Assimétricas</span>
            </div>
            <p className="text-xs text-warm-700 leading-relaxed">
              O cuidador vê as responsabilidades e preocupações de segurança; o jovem recebe cartas privadas com os sentimentos e o contexto dos colegas que ainda não foram revelados.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-warm-50 border border-warm-200 space-y-1">
            <div className="flex items-center gap-2 font-semibold text-navy text-sm">
              <HeartHandshake className="w-4 h-4 text-sage-dark" />
              <span>2. Momento "O que cada um viu?"</span>
            </div>
            <p className="text-xs text-warm-700 leading-relaxed">
              Antes da escolha conjunta, o jogo convida os dois a compartilharem o que perceberam na cena: "O que Lia parece estar precisando agora?".
            </p>
          </div>

          <div className="p-4 rounded-xl bg-warm-50 border border-warm-200 space-y-1">
            <div className="flex items-center gap-2 font-semibold text-navy text-sm">
              <Shield className="w-4 h-4 text-terracotta" />
              <span>3. Privacidade e Proteção do Jovem</span>
            </div>
            <p className="text-xs text-warm-700 leading-relaxed">
              O jogo nunca funciona como ferramenta de vigilância secreta. Nenhuma resposta privada do adolescente é exposta ao adulto sem consentimento explícito.
            </p>
          </div>
        </div>

        <div className="text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-navy hover:bg-navy-dark text-white font-medium text-sm transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
