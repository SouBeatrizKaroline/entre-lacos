import { GameState } from '../types';

/**
 * Gerencia a ativação e retorno de Ecos Intergeracionais.
 */
export interface EchoTransitionResult {
  nextSceneId: string;
  updatedState: Partial<GameState>;
}

export function startEcho(originalSceneId: string, echoSceneId: string): Partial<GameState> {
  return {
    perspective: 'echo_past',
    activeEcho: {
      originalSceneId,
      echoSceneId,
    },
    currentSceneId: echoSceneId,
  };
}

export function endEcho(state: GameState, returnSceneId?: string): Partial<GameState> {
  const original = state.activeEcho?.originalSceneId ?? 'door_02_alex_reaction';
  return {
    perspective: 'caregiver',
    activeEcho: undefined,
    currentSceneId: returnSceneId ?? original,
  };
}
