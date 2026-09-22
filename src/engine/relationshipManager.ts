import { RelationalVariables } from '../types';

/**
 * Limita os valores relacionais ao intervalo [0, 10]
 */
function clamp(val: number, min = 0, max = 10): number {
  return Math.max(min, Math.min(max, val));
}

/**
 * Aplica deltas relacionais preservando limites e sem polarização binária
 */
export function applyRelationalDeltas(
  current: RelationalVariables,
  deltas: Partial<RelationalVariables> | undefined
): RelationalVariables {
  if (!deltas) return { ...current };

  return {
    perceivedSafety: clamp(current.perceivedSafety + (deltas.perceivedSafety ?? 0)),
    truthDisclosureTrust: clamp(current.truthDisclosureTrust + (deltas.truthDisclosureTrust ?? 0)),
    admitMistakeTrust: clamp(current.admitMistakeTrust + (deltas.admitMistakeTrust ?? 0)),
    supportedAutonomy: clamp(current.supportedAutonomy + (deltas.supportedAutonomy ?? 0)),
    predictability: clamp(current.predictability + (deltas.predictability ?? 0)),
    caregiverLoad: clamp(current.caregiverLoad + (deltas.caregiverLoad ?? 0)),
    accumulatedTension: clamp(current.accumulatedTension + (deltas.accumulatedTension ?? 0)),
    repairCapability: clamp(current.repairCapability + (deltas.repairCapability ?? 0)),
  };
}

/**
 * Traduz o estado relacional interno em pistas de comportamento e linguagem corporal.
 * Isso garante que o jogador perceba os efeitos sem uma barra de números.
 */
export function getBehavioralCues(state: RelationalVariables, perspective: string): string[] {
  const cues: string[] = [];

  if (perspective === 'child') {
    if (state.perceivedSafety <= 4) {
      cues.push('Ombros encolhidos e olhar voltado para o chão.');
      cues.push('Hesitação constante antes de cada resposta.');
    } else if (state.perceivedSafety >= 7) {
      cues.push('Postura mais solta, embora ainda visivelmente abalada.');
      cues.push('Olhos nos olhos por breves instantes.');
    }

    if (state.truthDisclosureTrust >= 6) {
      cues.push('Disposição para detalhar o que aconteceu na escola.');
    } else {
      cues.push('Respostas monossilábicas ou evasivas.');
    }

    if (state.accumulatedTension >= 7) {
      cues.push('Respiração curta e dedos contraindo o tecido da blusa.');
    }
  } else {
    // Cuidador
    if (state.caregiverLoad >= 8) {
      cues.push('Sensação de peso nos ombros e pulso acelerado.');
      cues.push('Impulso de resolver tudo em poucos segundos.');
    }
    if (state.accumulatedTension >= 6) {
      cues.push('A madeira da porta parece uma barreira insuperável.');
    }
  }

  return cues;
}
