import React from 'react';
import { X, Terminal, ArrowRightCircle } from 'lucide-react';
import { GameState } from '../../types';
import { CHAPTER_DOOR_13_SCENES } from '../../content/chapters/door_13';

interface NarrativeDebugPanelProps {
  state: GameState;
  onJumpToScene: (sceneId: string) => void;
  onClose: () => void;
}

export const NarrativeDebugPanel: React.FC<NarrativeDebugPanelProps> = ({
  state,
  onJumpToScene,
  onClose,
}) => {
  const currentScene = CHAPTER_DOOR_13_SCENES[state.currentSceneId];
  const allSceneKeys = Object.keys(CHAPTER_DOOR_13_SCENES);

  return (
    <aside
      className="fixed bottom-0 right-0 z-40 w-full sm:w-96 max-h-[85vh] bg-navy-dark text-warm-100 border-t sm:border-l border-warm-700/60 shadow-2xl p-4 overflow-y-auto text-xs font-mono rounded-tl-2xl animate-fadeIn"
      aria-label="Painel de Debug Narrativo"
    >
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-warm-700/60">
        <div className="flex items-center gap-2 text-terracotta-light font-bold">
          <Terminal className="w-4 h-4" />
          <span>NARRATIVE DEBUG PANEL (DEV)</span>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-warm-800 rounded text-warm-400 hover:text-white"
          aria-label="Fechar painel de depuração"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {/* Cena Atual & Perspectiva */}
        <div className="p-2 rounded bg-warm-900/60 border border-warm-800 space-y-1">
          <div>
            <span className="text-warm-400">Cena ID:</span>{' '}
            <strong className="text-emerald-400">{state.currentSceneId}</strong>
          </div>
          <div>
            <span className="text-warm-400">Perspectiva:</span>{' '}
            <span className="text-amber-300 font-bold uppercase">{state.perspective}</span>
          </div>
          <div>
            <span className="text-warm-400">Personagem:</span> {currentScene?.speaker.name}
          </div>
          <div>
            <span className="text-warm-400">Janela Reparação:</span>{' '}
            {currentScene?.isRepairOpportunity ? 'SIM (Ativa)' : 'Não'}
          </div>
        </div>

        {/* Variáveis Relacionais Ocultas */}
        <div className="space-y-1.5">
          <div className="text-warm-400 font-semibold uppercase tracking-wider text-[10px]">
            Variáveis Relacionais Ocultas (0-10)
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {Object.entries(state.relationalState).map(([key, val]) => (
              <div
                key={key}
                className="p-1.5 rounded bg-warm-900/40 border border-warm-800 flex justify-between items-center"
              >
                <span className="text-warm-300 truncate mr-1" title={key}>
                  {key}
                </span>
                <span
                  className={`font-bold px-1.5 py-0.5 rounded text-[10px] ${
                    val >= 7
                      ? 'bg-emerald-950 text-emerald-300'
                      : val <= 3
                      ? 'bg-red-950 text-red-300'
                      : 'bg-warm-800 text-warm-200'
                  }`}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Memórias Ativas */}
        <div className="space-y-1">
          <div className="text-warm-400 font-semibold uppercase tracking-wider text-[10px]">
            Memórias Relacionais ({state.memories.length})
          </div>
          {state.memories.length === 0 ? (
            <div className="text-warm-500 italic">Nenhuma memória gravada.</div>
          ) : (
            <ul className="space-y-1 max-h-24 overflow-y-auto">
              {state.memories.map((m) => (
                <li
                  key={m.id}
                  className="p-1 rounded bg-warm-900/50 border border-warm-800/80 text-[10px]"
                >
                  <span className="text-terracotta-light">[{m.domain}]</span> {m.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Saltador Rápido de Cenas (Quick Nav QA) */}
        <div className="space-y-1.5 pt-2 border-t border-warm-800">
          <div className="text-warm-400 font-semibold uppercase tracking-wider text-[10px]">
            Saltar para Cena (QA Testes)
          </div>
          <div className="flex gap-1">
            <select
              value={state.currentSceneId}
              onChange={(e) => onJumpToScene(e.target.value)}
              className="w-full bg-warm-900 border border-warm-700 text-white rounded p-1 text-[11px]"
            >
              {allSceneKeys.map((sId) => (
                <option key={sId} value={sId}>
                  {sId}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
};
