import { GameState, RelationalVariables, AccessibilitySettings } from '../types';

export const INITIAL_RELATIONAL_STATE: RelationalVariables = {
  perceivedSafety: 6,
  truthDisclosureTrust: 5,
  admitMistakeTrust: 5,
  supportedAutonomy: 5,
  predictability: 6,
  caregiverLoad: 7, // Carga inicial típica de quem volta cansado do trabalho
  accumulatedTension: 4,
  repairCapability: 7,
};

export const INITIAL_ACCESSIBILITY_SETTINGS: AccessibilitySettings = {
  fontSize: 'normal',
  highContrast: false,
  reducedMotion: false,
  textSpeed: 'normal',
  soundIndicators: true,
  noTimePressure: true,
  dyslexicFont: false,
};

export const INITIAL_GAME_STATE: GameState = {
  chapterId: 'chapter_door_13',
  currentSceneId: 'door_01_corridor_arrival',
  perspective: 'caregiver',
  agePhase: '11-13',
  relationalState: INITIAL_RELATIONAL_STATE,
  memories: [],
  flags: {},
  seenSceneIds: [],
  repairWindowActive: false,
  repairAttempted: false,
  repairSuccessful: false,
  chapterFinished: false,
  unlockedEducationalCards: [],
  history: [],
  accessibility: INITIAL_ACCESSIBILITY_SETTINGS,
};

const STORAGE_KEY = 'entre_lacos_game_save_v1';
const A11Y_STORAGE_KEY = 'entre_lacos_a11y_v1';

export class StateManager {
  private state: GameState;
  private listeners: Array<(state: GameState) => void> = [];

  constructor() {
    this.state = this.loadState();
  }

  public getState(): GameState {
    return this.state;
  }

  public subscribe(listener: (state: GameState) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify(): void {
    this.saveState();
    this.listeners.forEach((listener) => listener(this.state));
  }

  public updateState(updater: (prevState: GameState) => GameState): void {
    this.state = updater(this.state);
    this.notify();
  }

  public updateAccessibility(settings: Partial<AccessibilitySettings>): void {
    this.state = {
      ...this.state,
      accessibility: {
        ...this.state.accessibility,
        ...settings,
      },
    };
    try {
      localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(this.state.accessibility));
    } catch {
      // Falha silenciosa em caso de restrição no localStorage
    }
    this.notify();
  }

  public resetGame(): void {
    const savedA11y = this.state.accessibility;
    this.state = {
      ...INITIAL_GAME_STATE,
      accessibility: savedA11y,
    };
    this.notify();
  }

  private loadState(): GameState {
    try {
      const savedA11yRaw = localStorage.getItem(A11Y_STORAGE_KEY);
      const a11y: AccessibilitySettings = savedA11yRaw
        ? { ...INITIAL_ACCESSIBILITY_SETTINGS, ...JSON.parse(savedA11yRaw) }
        : INITIAL_ACCESSIBILITY_SETTINGS;

      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          ...INITIAL_GAME_STATE,
          ...parsed,
          accessibility: a11y,
        };
      }
      return {
        ...INITIAL_GAME_STATE,
        accessibility: a11y,
      };
    } catch (e) {
      console.warn('Erro ao carregar estado do localStorage, iniciando com padrão.', e);
      return INITIAL_GAME_STATE;
    }
  }

  private saveState(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Não foi possível persistir no localStorage:', e);
    }
  }
}

export const stateManager = new StateManager();
