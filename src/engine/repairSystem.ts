import { GameState, RelationalVariables } from '../types';
import { applyRelationalDeltas } from './relationshipManager';

/**
 * Gerencia a lógica do ciclo de reparação:
 * Conflito -> Afastamento -> Reflexão -> Retorno -> Reconhecimento -> Escuta -> Mudança sustentada
 */
export interface RepairAttemptResult {
  success: boolean;
  relationalDeltas: Partial<RelationalVariables>;
  narrativeFeedback: string;
}

export function evaluateRepairStep(
  approach: 'genuine_apology_and_space' | 'forced_hug_or_minimization' | 'clear_boundary_with_respect',
  state: GameState
): RepairAttemptResult {
  switch (approach) {
    case 'genuine_apology_and_space':
      return {
        success: true,
        relationalDeltas: {
          perceivedSafety: +2,
          admitMistakeTrust: +2,
          predictability: +1,
          accumulatedTension: -2,
          repairCapability: +1,
        },
        narrativeFeedback:
          'Lia não correu para seus braços imediatamente, mas os ombros dela relaxaram perceptivelmente. O silêncio deixou de ser um muro e virou respiro.',
      };

    case 'clear_boundary_with_respect':
      return {
        success: true,
        relationalDeltas: {
          perceivedSafety: +1,
          predictability: +2,
          supportedAutonomy: +1,
          accumulatedTension: -1,
        },
        narrativeFeedback:
          'O limite sobre o uso do celular e a checagem da segurança foi mantido, mas com calma e respeito. Lia entendeu que a regra protege, sem humilhar.',
      };

    case 'forced_hug_or_minimization':
    default:
      return {
        success: false,
        relationalDeltas: {
          perceivedSafety: -1,
          truthDisclosureTrust: -1,
          accumulatedTension: +1,
        },
        narrativeFeedback:
          'Dizer "não foi nada demais" fez Lia recolher as mãos. Desculpas que exigem consolo imediato geram mais afastamento do que alívio.',
      };
  }
}
