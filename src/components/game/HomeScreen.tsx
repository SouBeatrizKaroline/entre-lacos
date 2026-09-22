import React from 'react';
import { Play, Sparkles, Users, BookOpen, Settings, Info } from 'lucide-react';

interface HomeScreenProps {
  hasSavedGame: boolean;
  onContinue: () => void;
  onNewStory: () => void;
  onOpenFamilyMode: () => void;
  onOpenMemories: () => void;
  onOpenSettings: () => void;
  onOpenAbout: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  hasSavedGame,
  onContinue,
  onNewStory,
  onOpenFamilyMode,
  onOpenMemories,
  onOpenSettings,
  onOpenAbout,
}) => {
  return (
    <main className="min-h-[calc(100vh-65px)] flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Elementos visuais sutis de fundo (Acolhimento e laços) */}
      <div
        className="absolute w-96 h-96 -top-20 -left-20 bg-terracotta/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute w-96 h-96 -bottom-20 -right-20 bg-sage/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-xl w-full text-center space-y-8 z-10">
        {/* Título Principal Minimalista */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warm-200/70 border border-warm-300/60 text-xs font-medium text-warm-900 tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            Protótipo Jogável • Vertical Slice
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-navy">
            ENTRE LAÇOS
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-warm-700 max-w-md mx-auto leading-relaxed">
            “Às vezes, a mesma história parece completamente diferente do outro lado.”
          </p>
        </div>

        {/* Menu de Ações Principais */}
        <nav
          className="flex flex-col gap-3 max-w-sm mx-auto pt-4"
          aria-label="Navegação principal do jogo"
        >
          {hasSavedGame && (
            <button
              onClick={onContinue}
              className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-terracotta text-white font-semibold text-base shadow-sm hover:bg-terracotta-dark transition-all transform hover:-translate-y-0.5 focus:ring-4 focus:ring-terracotta/30"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Continuar</span>
            </button>
          )}

          <button
            onClick={onNewStory}
            className={`w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-base transition-all transform hover:-translate-y-0.5 focus:ring-4 ${
              hasSavedGame
                ? 'bg-warm-100 hover:bg-warm-200 text-navy border border-warm-300 focus:ring-warm-400'
                : 'bg-terracotta text-white hover:bg-terracotta-dark shadow-sm focus:ring-terracotta/30'
            }`}
          >
            <Play className="w-5 h-5" />
            <span>Nova história</span>
          </button>

          <button
            onClick={onOpenFamilyMode}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-warm-100/90 hover:bg-warm-200 text-navy border border-warm-300 font-medium text-sm sm:text-base transition-colors focus:ring-2 focus:ring-terracotta"
          >
            <Users className="w-4 h-4 text-sage-dark" />
            <span>Jogar juntos (Modo Família)</span>
          </button>

          <button
            onClick={onOpenMemories}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-warm-100/90 hover:bg-warm-200 text-navy border border-warm-300 font-medium text-sm sm:text-base transition-colors focus:ring-2 focus:ring-terracotta"
          >
            <BookOpen className="w-4 h-4 text-terracotta" />
            <span>Memórias relacionais</span>
          </button>

          <button
            onClick={onOpenSettings}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-warm-100/90 hover:bg-warm-200 text-navy border border-warm-300 font-medium text-sm sm:text-base transition-colors focus:ring-2 focus:ring-terracotta"
          >
            <Settings className="w-4 h-4 text-warm-700" />
            <span>Configurações & Acessibilidade</span>
          </button>

          <button
            onClick={onOpenAbout}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-transparent hover:bg-warm-200/50 text-warm-800 font-medium text-xs sm:text-sm transition-colors"
          >
            <Info className="w-4 h-4 text-warm-600" />
            <span>Sobre o projeto & Limites éticos</span>
          </button>
        </nav>

        {/* Rodapé Informativo */}
        <footer className="pt-6 border-t border-warm-200/80 text-xs text-warm-600 max-w-sm mx-auto">
          Inspirado em neuropsicologia do desenvolvimento e nos princípios do ECA (Lei 8.069/1990).
          Experiência narrativa fictícia sem diagnóstico clínico.
        </footer>
      </div>
    </main>
  );
};
