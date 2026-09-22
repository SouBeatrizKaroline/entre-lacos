/**
 * Tipos fundamentais do motor e domínio do jogo Entre Laços
 */

export type CharacterId = 'alex' | 'lia' | 'rafa' | 'nico' | 'alex_past' | 'caregiver_past' | 'narrator';

export type Perspective = 'caregiver' | 'child' | 'echo_past';

export type AgePhase = '2-4' | '5-7' | '8-10' | '11-13' | '14-17' | '18+';

export type EndingType = 'safe_connection' | 'distant_guarded' | 'repaired_boundary';

/**
 * Variáveis relacionais multidimensionais (Ocultas por padrão da UI principal).
 * Variam de 0 a 10. Representam estados sistêmicos e nunca uma moral binária.
 */
export interface RelationalVariables {
  /** Sentimento de que errar ou discordar não causará humilhação ou dano */
  perceivedSafety: number;
  /** Confiança para antecipar informações e dizer a verdade espontaneamente */
  truthDisclosureTrust: number;
  /** Confiança de que admitir um erro resultará em apoio e reparação */
  admitMistakeTrust: number;
  /** Espaço legítimo para exercer escolhas e privacidade conforme a idade */
  supportedAutonomy: number;
  /** Clareza e consistência nas regras e reações dos cuidadores */
  predictability: number;
  /** Carga de estresse e cansaço atual do cuidador */
  caregiverLoad: number;
  /** Tensão e conflito não resolvido acumulados no ambiente doméstico */
  accumulatedTension: number;
  /** Prontidão e qualidade do vínculo para processos de reparação */
  repairCapability: number;
}

/**
 * Famílias de memórias relacionais que persistem entre cenas e capítulos
 */
export type MemoryDomain = 'privacy' | 'mistake' | 'truth' | 'help' | 'promise' | 'limit' | 'echo';

export interface Memory {
  id: string;
  domain: MemoryDomain;
  title: string;
  description: string;
  timestamp: number;
  perspective: Perspective;
  agePhase: AgePhase;
  polarity: 'positive' | 'neutral' | 'strained';
}

/**
 * Condição para liberação de escolhas ou nós
 */
export interface SceneCondition {
  hasMemories?: string[];
  lacksMemories?: string[];
  minSafety?: number;
  maxTension?: number;
  minTrust?: number;
  minAutonomy?: number;
  requiredFlag?: string;
  prohibitedFlag?: string;
}

/**
 * Efeitos provocados por uma escolha do jogador
 */
export interface ChoiceEffect {
  relationalDeltas?: Partial<RelationalVariables>;
  addMemories?: Omit<Memory, 'timestamp'>[];
  setFlags?: Record<string, boolean>;
  triggerEchoId?: string;
  triggerPerspectiveSwitch?: {
    targetPerspective: Perspective;
    sceneId: string;
    narrativeIntro?: string;
  };
  educationalCardId?: string;
  soundEffectCue?: string;
}

/**
 * Opção de escolha oferecida ao jogador
 */
export interface SceneChoice {
  id: string;
  text: string;
  internalIntent?: string; // Para revisão de design e debug
  condition?: SceneCondition;
  effects: ChoiceEffect;
  nextSceneId: string;
  isRepairAction?: boolean;
}

/**
 * Nó narrativo atômico do grafo da história
 */
export interface SceneNode {
  id: string;
  chapterId: string;
  age: number;
  perspective: Perspective;
  speaker: {
    id: CharacterId;
    name: string;
    role: string;
    avatarStyle?: 'warm' | 'intense' | 'reflective' | 'closed';
  };
  location: string;
  dialogue?: string;
  internalMonologue?: string;
  sensoryDetails?: string; // Descrição de ambiente e acessibilidade
  soundCue?: string; // Indicador de som visual (ex: [Passos no corredor])
  choices: SceneChoice[];
  autoNextSceneId?: string;
  educationalCardId?: string;
  isRepairOpportunity?: boolean;
  isEchoSequence?: boolean;
  isEnding?: boolean;
  endingType?: EndingType;
}

/**
 * Card informativo opcional ("Entenda Melhor")
 */
export interface EducationalCard {
  id: string;
  title: string;
  category: 'ECA' | 'PSYCHOLOGY' | 'DEVELOPMENT';
  articleOrSource: string;
  officialCitation: string;
  summary: string;
  practicalMeaning: string;
  whatItIsNot: string;
  reviewStatus: 'APPROVED' | 'REVIEW_REQUIRED';
}

/**
 * Preferências de Acessibilidade
 */
export interface AccessibilitySettings {
  fontSize: 'sm' | 'normal' | 'large' | 'extra-large';
  highContrast: boolean;
  reducedMotion: boolean;
  textSpeed: 'slow' | 'normal' | 'instant';
  soundIndicators: boolean;
  noTimePressure: boolean;
  dyslexicFont: boolean;
}

/**
 * Estado completo do jogo
 */
export interface GameState {
  chapterId: string;
  currentSceneId: string;
  perspective: Perspective;
  agePhase: AgePhase;
  relationalState: RelationalVariables;
  memories: Memory[];
  flags: Record<string, boolean>;
  seenSceneIds: string[];
  activeEcho?: {
    originalSceneId: string;
    echoSceneId: string;
  };
  repairWindowActive: boolean;
  repairAttempted: boolean;
  repairSuccessful: boolean;
  chapterFinished: boolean;
  currentEnding?: EndingType;
  unlockedEducationalCards: string[];
  history: Array<{
    sceneId: string;
    speakerName: string;
    text: string;
    chosenOptionText?: string;
  }>;
  accessibility: AccessibilitySettings;
}
