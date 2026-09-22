import React from 'react';
import { RotateCcw, BookOpen, Heart, ArrowRight } from 'lucide-react';
import { GameState } from '../../types';
import { EDUCATIONAL_CARDS } from '../../content/educational/cards';

interface ReflectionScreenProps {
  state: GameState;
  onRestartChapter: () => void;
  onOpenMemories: () => void;
  onOpenEducationalCard: (cardId: string) => void;
  onGoHome: () => void;
}

export const ReflectionScreen: React.FC<ReflectionScreenProps> = ({
  state,
  onRestartChapter,
  onOpenMemories,
  onOpenEducationalCard,
  onGoHome,
}) => {
  const getEndingSummary = () => {
    switch (state.currentEnding) {
      case 'safe_connection':
        return {
          title: 'Desfecho: Conexão e Escuta Protegida',
          badgeColor: 'bg-sage/20 text-emerald-900 border-sage/40',
          description:
            'A porta foi destrancada espontaneamente. Ao substituir a coerção pela garantia de escuta sem bronca imediata, o cuidador construiu segurança para que a dor da escola pudesse ser dividida.',
          relationalImpact:
            'Lia aprendeu que mesmo em momentos de crise, seu espaço e sentimentos são respeitados. A confiança para admitir erros e pedir ajuda aumentou significativamente.',
        };
      case 'repaired_boundary':
        return {
          title: 'Desfecho: Limite Firme e Reparado com Respeito',
          badgeColor: 'bg-warm-200 text-warm-900 border-warm-300',
          description:
            'O espaço pessoal foi concedido no momento de alta ativação, mas o dever de proteção permaneceu: um horário combinado e um bilhete mantiveram a família unida na rotina sem violência.',
          relationalImpact:
            'Demonstrou que autoridade e regras não precisam ser exercidas pela força. A previsibilidade das reações adultas foi fortalecida.',
        };
      case 'distant_guarded':
      default:
        return {
          title: 'Desfecho: Obediência sob Tensão e Afastamento',
          badgeColor: 'bg-red-50 text-red-900 border-red-200',
          description:
            'A porta abriu-se sob ameaça ou permaneceu trancada em ressentimento. O adulto obteve alívio imediato para sua ansiedade, mas a adolescente recolheu seus sentimentos em sigilo.',
          relationalImpact:
            'A confiança para revelações espontâneas diminuiu. Em futuras situações difíceis, a tendência será ocultar o problema por medo da reação punitiva.',
        };
    }
  };

  const ending = getEndingSummary();

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-8 animate-fadeIn">
      {/* Cabeçalho da Reflexão */}
      <div className="text-center space-y-3">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-warm-200/80 text-warm-900 tracking-wider uppercase">
          Capítulo Concluído • A Porta Fechada (13 anos)
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-navy">
          Reflexão do Capítulo
        </h1>
        <p className="text-warm-700 text-sm sm:text-base max-w-lg mx-auto">
          No Entre Laços, não existem notas de "bom" ou "mau" cuidador. Há relações humanas, impactos reais e oportunidades constantes de aprendizado.
        </p>
      </div>

      {/* Card Principal do Desfecho */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-sm border border-warm-200 space-y-4">
        <div className="flex items-center justify-between">
          <span className={`text-xs px-3 py-1 rounded-full border font-bold ${ending.badgeColor}`}>
            {ending.title}
          </span>
          <Heart className="w-5 h-5 text-terracotta" />
        </div>

        <p className="text-base sm:text-lg text-navy font-serif leading-relaxed">
          {ending.description}
        </p>

        <div className="p-4 rounded-xl bg-warm-50 border border-warm-200/80 text-sm text-warm-800 space-y-1">
          <strong className="text-warm-900 block font-semibold">Impacto no Vínculo Familiar:</strong>
          <p>{ending.relationalImpact}</p>
        </div>
      </div>

      {/* Memórias Registradas Neste Capítulo */}
      <div className="p-6 rounded-2xl bg-warm-100/70 border border-warm-200 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-navy text-sm sm:text-base">
            Memórias Relacionais Geradas ({state.memories.length})
          </h2>
          <button
            onClick={onOpenMemories}
            className="text-xs font-semibold text-terracotta hover:underline"
          >
            Ver todas as memórias →
          </button>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {state.memories.slice(-4).map((mem) => (
            <div
              key={mem.id}
              className="p-3 rounded-lg bg-white border border-warm-200 text-xs space-y-1"
            >
              <div className="font-semibold text-navy flex items-center justify-between">
                <span>{mem.title}</span>
                <span className="text-warm-500 capitalize">{mem.domain}</span>
              </div>
              <p className="text-warm-700 line-clamp-2">{mem.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cards de Direitos e Psicologia Destacados */}
      <div className="p-6 rounded-2xl bg-white border border-warm-200 shadow-sm space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-terracotta" />
          <h2 className="font-bold text-navy text-sm sm:text-base">
            Fundamentação Teórica e Legal deste Capítulo
          </h2>
        </div>
        <p className="text-xs text-warm-600">
          Acesse os conteúdos oficiais consolidados que orientaram a concepção desta cena:
        </p>

        <div className="grid gap-2 sm:grid-cols-2 pt-2">
          <button
            onClick={() => onOpenEducationalCard('eca_art_17_privacy')}
            className="text-left p-3 rounded-lg bg-warm-50 hover:bg-warm-100 border border-warm-200 text-xs space-y-1 transition-colors"
          >
            <strong className="text-navy block font-semibold">
              Artigo 17 do ECA — Privacidade e Espaço Próprio
            </strong>
            <span className="text-warm-600 block line-clamp-2">
              Direito à preservação da integridade moral, espaços e objetos pessoais na adolescência.
            </span>
          </button>

          <button
            onClick={() => onOpenEducationalCard('eca_art_18_a_cruel_treatment')}
            className="text-left p-3 rounded-lg bg-warm-50 hover:bg-warm-100 border border-warm-200 text-xs space-y-1 transition-colors"
          >
            <strong className="text-navy block font-semibold">
              Artigo 18-A — Cuidado sem Humilhação
            </strong>
            <span className="text-warm-600 block line-clamp-2">
              Lei Menino Bernardo: autoridade e disciplina sem tratamento cruel ou degradante.
            </span>
          </button>
        </div>
      </div>

      {/* Navegação Final */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button
          onClick={onRestartChapter}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-semibold text-sm transition-colors shadow-sm"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Experimentar outras escolhas</span>
        </button>

        <button
          onClick={onGoHome}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-warm-200 hover:bg-warm-300 text-navy font-semibold text-sm transition-colors"
        >
          <span>Voltar ao Menu Principal</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </main>
  );
};
