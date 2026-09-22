import { GameState, SceneCondition } from '../types';

/**
 * Avalia se as condições de uma escolha ou cena são satisfeitas pelo estado atual.
 */
export function evaluateCondition(condition: SceneCondition | undefined, state: GameState): boolean {
  if (!condition) return true;

  // 1. Verificação de memórias exigidas
  if (condition.hasMemories && condition.hasMemories.length > 0) {
    const existingMemoryIds = new Set(state.memories.map((m) => m.id));
    const hasAll = condition.hasMemories.every((id) => existingMemoryIds.has(id));
    if (!hasAll) return false;
  }

  // 2. Verificação de memórias proibidas
  if (condition.lacksMemories && condition.lacksMemories.length > 0) {
    const existingMemoryIds = new Set(state.memories.map((m) => m.id));
    const hasAnyProhibited = condition.lacksMemories.some((id) => existingMemoryIds.has(id));
    if (hasAnyProhibited) return false;
  }

  // 3. Verificação de parâmetros relacionais
  if (condition.minSafety !== undefined && state.relationalState.perceivedSafety < condition.minSafety) {
    return false;
  }

  if (condition.maxTension !== undefined && state.relationalState.accumulatedTension > condition.maxTension) {
    return false;
  }

  if (condition.minTrust !== undefined && state.relationalState.truthDisclosureTrust < condition.minTrust) {
    return false;
  }

  if (condition.minAutonomy !== undefined && state.relationalState.supportedAutonomy < condition.minAutonomy) {
    return false;
  }

  // 4. Flags booleanas
  if (condition.requiredFlag && !state.flags[condition.requiredFlag]) {
    return false;
  }

  if (condition.prohibitedFlag && state.flags[condition.prohibitedFlag]) {
    return false;
  }

  return true;
}
