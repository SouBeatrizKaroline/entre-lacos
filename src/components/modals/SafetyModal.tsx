import React from 'react';
import { X, ShieldAlert, PhoneCall, ExternalLink } from 'lucide-react';
import { OFFICIAL_HELP_CONTACTS } from '../../content/safety/protocols';

interface SafetyModalProps {
  onClose: () => void;
}

export const SafetyModal: React.FC<SafetyModalProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-safety-title"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-red-200 p-6 sm:p-8 space-y-6 animate-fadeIn">
        {/* Cabeçalho */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-100 text-red-700">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h2 id="modal-safety-title" className="font-serif text-xl sm:text-2xl font-bold text-navy">
                Canais Oficiais de Ajuda e Proteção
              </h2>
              <p className="text-xs sm:text-sm text-warm-600">
                Se você ou alguém que você conhece está enfrentando violência, negligência ou perigo iminente:
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-warm-100 text-warm-600 hover:text-navy transition-colors"
            aria-label="Fechar canais de ajuda"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lista de Contatos Governamentais e Redes Oficiais */}
        <div className="space-y-3">
          {OFFICIAL_HELP_CONTACTS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-warm-200 bg-warm-50/70 hover:bg-warm-100/80 transition-colors space-y-1.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <strong className="text-navy font-semibold text-sm sm:text-base">
                  {item.name}
                </strong>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 font-bold">
                  {item.contact}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-warm-800 leading-relaxed">
                {item.details}
              </p>
              <div className="flex items-center gap-4 text-xs text-warm-600 pt-1">
                <span>🕒 {item.hours}</span>
                <span>💰 {item.cost}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Aviso de Privacidade */}
        <div className="p-3.5 rounded-xl bg-warm-100 text-xs text-warm-700 leading-relaxed border border-warm-200">
          <strong>Aviso de Privacidade e Ética:</strong> O Entre Laços não registra seus cliques nestes canais nem recolhe qualquer informação pessoal ou relato do usuário. Os contatos acima integram a rede pública brasileira de proteção à infância e à juventude.
        </div>

        <div className="text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-navy hover:bg-navy-dark text-white font-medium text-sm transition-colors"
          >
            Fechar janela
          </button>
        </div>
      </div>
    </div>
  );
};
