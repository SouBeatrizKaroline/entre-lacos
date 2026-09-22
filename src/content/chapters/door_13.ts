import { SceneNode } from '../../types';

export const CHAPTER_DOOR_13_SCENES: Record<string, SceneNode> = {
  // -------------------------------------------------------------
  // BEAT 1: A CHEGADA NO CORREDOR
  // -------------------------------------------------------------
  door_01_corridor_arrival: {
    id: 'door_01_corridor_arrival',
    chapterId: 'chapter_door_13',
    age: 13,
    perspective: 'caregiver',
    speaker: {
      id: 'alex',
      name: 'Alex',
      role: 'Cuidador Principal',
      avatarStyle: 'intense',
    },
    location: 'Corredor dos quartos — Final da tarde',
    sensoryDetails:
      'A mochila de Lia está encostada na parede do corredor, com o zíper meio aberto. Pela fresta sob a porta do quarto, vê-se a luz acesa e o silêncio tenso. O celular em seu bolso vibrou minutos atrás com um aviso da coordenação da escola.',
    soundCue: '[Sussurro distante de passos e o som seco de uma fechadura estalando]',
    internalMonologue:
      'O e-mail da escola dizia apenas "desentendimento grave entre estudantes no intervalo". Lia passou direto pela cozinha sem sequer largar o casaco. Minhas mãos ainda estão geladas do trânsito.',
    dialogue:
      'Lia? Cheguei agora. A coordenação da escola me mandou uma notificação... Quero conversar com você.',
    choices: [
      {
        id: 'c_door_01_continue',
        text: 'Aguardar a resposta do outro lado da porta.',
        effects: {
          relationalDeltas: { caregiverLoad: +1 },
        },
        nextSceneId: 'door_02_alex_reaction',
      },
    ],
  },

  door_02_alex_reaction: {
    id: 'door_02_alex_reaction',
    chapterId: 'chapter_door_13',
    age: 13,
    perspective: 'caregiver',
    speaker: {
      id: 'lia',
      name: 'Lia',
      role: 'Filha (13 anos)',
      avatarStyle: 'closed',
    },
    location: 'Do outro lado da porta fechada',
    sensoryDetails: 'A voz dela vem abafada pela madeira espessa. Há um tom áspero, quase engasgado.',
    soundCue: '[Som de lençol sendo puxado com força]',
    dialogue: 'Agora não, por favor. Eu só... quero ficar quieta.',
    internalMonologue:
      'O impulso de girar a maçaneta queima nos meus dedos. Ela tem treze anos. Desde quando decidimos o que acontece dentro de um quarto com porta trancada?',
    choices: [
      {
        id: 'choice_open_door_force',
        text: 'Girar a maçaneta imediatamente: "Nessa casa ninguém se tranca. Abre agora para a gente esclarecer."',
        internalIntent: 'Afirmação de autoridade imediata por medo de perder o controle ou por urgência de proteger.',
        effects: {
          relationalDeltas: {
            perceivedSafety: -2,
            supportedAutonomy: -2,
            accumulatedTension: +3,
            truthDisclosureTrust: -2,
          },
          addMemories: [
            {
              id: 'mem_forced_door',
              domain: 'privacy',
              title: 'Porta aberta sem consentimento',
              description: 'Alex entrou no quarto girando a maçaneta sem aguardar autorização aos 13 anos.',
              perspective: 'caregiver',
              agePhase: '11-13',
              polarity: 'strained',
            },
          ],
          triggerEchoId: 'door_echo_past_intro',
        },
        nextSceneId: 'door_echo_past_intro',
      },
      {
        id: 'choice_ultimatum',
        text: 'Bater firme na madeira: "Lia, você tem cinco minutos. Eu preciso ver o que está acontecendo."',
        internalIntent: 'Imposição de prazo rígido para conter a própria ansiedade, limitando o espaço dela.',
        effects: {
          relationalDeltas: {
            accumulatedTension: +2,
            predictability: +1,
            perceivedSafety: -1,
          },
          addMemories: [
            {
              id: 'mem_door_ultimatum',
              domain: 'limit',
              title: 'Prazo imposto sob tensão',
              description: 'Alex estipulou cinco minutos para que a porta fosse aberta.',
              perspective: 'caregiver',
              agePhase: '11-13',
              polarity: 'neutral',
            },
          ],
          triggerEchoId: 'door_echo_past_intro',
        },
        nextSceneId: 'door_echo_past_intro',
      },
      {
        id: 'choice_negotiate_safety_space',
        text: 'Apoiar as costas na parede: "Vou respeitar alguns minutos. Só preciso saber se você está segura e bem fisicamente. Pode me responder só isso?"',
        internalIntent: 'Equilíbrio entre checagem essencial de segurança física e respeito à privacidade emocional.',
        effects: {
          relationalDeltas: {
            perceivedSafety: +2,
            supportedAutonomy: +2,
            predictability: +2,
            accumulatedTension: -1,
            truthDisclosureTrust: +1,
          },
          addMemories: [
            {
              id: 'mem_respected_door_space',
              domain: 'privacy',
              title: 'Verificação de segurança com respeito ao espaço',
              description: 'Alex checou a segurança de Lia e concedeu tempo antes da conversa difícil.',
              perspective: 'caregiver',
              agePhase: '11-13',
              polarity: 'positive',
            },
          ],
          triggerEchoId: 'door_echo_past_intro',
        },
        nextSceneId: 'door_echo_past_intro',
      },
      {
        id: 'choice_withdraw_cold',
        text: 'Afastar-se do corredor em silêncio: "Se não quer falar, não venha me procurar depois."',
        internalIntent: 'Afastamento defensivo do cuidador que interpreta o pedido de espaço como rejeição pessoal.',
        effects: {
          relationalDeltas: {
            perceivedSafety: -2,
            predictability: -2,
            truthDisclosureTrust: -2,
            accumulatedTension: +2,
          },
          addMemories: [
            {
              id: 'mem_cold_withdrawal',
              domain: 'help',
              title: 'Retirada de afeto após porta fechada',
              description: 'Alex afastou-se com frieza interpretando a porta fechada como afronta.',
              perspective: 'caregiver',
              agePhase: '11-13',
              polarity: 'strained',
            },
          ],
          triggerEchoId: 'door_echo_past_intro',
        },
        nextSceneId: 'door_echo_past_intro',
      },
    ],
  },

  // -------------------------------------------------------------
  // BEAT 2: O ECO INTERGERACIONAL (ALEX AOS 13 ANOS)
  // -------------------------------------------------------------
  door_echo_past_intro: {
    id: 'door_echo_past_intro',
    chapterId: 'chapter_door_13',
    age: 13,
    perspective: 'echo_past',
    speaker: {
      id: 'narrator',
      name: 'Memória Intergeracional',
      role: 'Passado',
      avatarStyle: 'reflective',
    },
    location: 'Quarto de Alex — Trinta anos atrás',
    sensoryDetails:
      'O som do presente desaparece. A luz do corredor da casa atual se desvanece em um tom sépia acinzentado. Há cheiro de cera velha e o rangido metálico de uma chave de fenda trabalhando.',
    soundCue: '[Estalo metálico de parafusos caindo sobre o piso de taco]',
    internalMonologue:
      'Por um breve segundo, aquela porta de madeira lembra outra. O estômago aperta da mesmíssima forma.',
    dialogue:
      'Outubro de 1996. Alex tem treze anos e está sentado na beirada da cama, observando a porta do seu próprio quarto.',
    choices: [
      {
        id: 'c_echo_enter',
        text: 'Lembrar do que aconteceu naquele dia.',
        effects: {
          relationalDeltas: { caregiverLoad: -1 },
        },
        nextSceneId: 'door_echo_past_scene',
      },
    ],
  },

  door_echo_past_scene: {
    id: 'door_echo_past_scene',
    chapterId: 'chapter_door_13',
    age: 13,
    perspective: 'echo_past',
    speaker: {
      id: 'caregiver_past',
      name: 'Responsável de Alex (1996)',
      role: 'Figura Parental do Passado',
      avatarStyle: 'intense',
    },
    location: 'Quarto de infância de Alex',
    sensoryDetails:
      'A maçaneta de latão foi desparafusada e repousa no bolso do adulto. Ficou apenas um buraco redondo atravessando a madeira, por onde o vento do corredor assobia.',
    soundCue: '[Voz firme e cortante ressoando no cômodo vazio]',
    dialogue:
      '"Na minha casa não tem filho com segredo. Se fechou a porta para esconder coisa errada da escola, agora vai ficar aberta para todo mundo ver."',
    internalMonologue:
      'Eu me lembro da vergonha. A sensação física de não ter onde me esconder, de trocar de roupa atrás da cortina. Prometi a mim mesmo que nunca faria isso.',
    choices: [
      {
        id: 'choice_echo_recognize_pattern',
        text: 'Respirar fundo e reconhecer: "Eu quase fiz exatamente a mesma coisa agora."',
        internalIntent: 'Quebra de padrão intergeracional pela tomada de consciência.',
        effects: {
          relationalDeltas: {
            repairCapability: +2,
            caregiverLoad: -1,
          },
          addMemories: [
            {
              id: 'mem_echo_break_cycle',
              domain: 'echo',
              title: 'Consciência do padrão herdado',
              description: 'Alex recordou a invasão da maçaneta em 1996 e decidiu agir diferente com Lia.',
              perspective: 'caregiver',
              agePhase: '11-13',
              polarity: 'positive',
            },
          ],
        },
        nextSceneId: 'door_echo_past_return',
      },
      {
        id: 'choice_echo_justify_past',
        text: 'Pensar: "Meus pais eram duros, mas ao menos eu aprendi a ter limites."',
        internalIntent: 'Racionalização da resposta autoritária.',
        effects: {
          relationalDeltas: {
            accumulatedTension: +1,
          },
        },
        nextSceneId: 'door_echo_past_return',
      },
    ],
  },

  door_echo_past_return: {
    id: 'door_echo_past_return',
    chapterId: 'chapter_door_13',
    age: 13,
    perspective: 'caregiver',
    speaker: {
      id: 'alex',
      name: 'Alex',
      role: 'Cuidador Principal',
      avatarStyle: 'reflective',
    },
    location: 'Corredor dos quartos — Presente',
    sensoryDetails:
      'O ar volta ao peito. A maçaneta moderna e intacta de Lia está ali na sua frente. O som do ventilador de teto dentro do quarto continua girando.',
    soundCue: '[Bip suave de uma notificação de celular vindo do interior do quarto]',
    dialogue:
      'O presente volta com nitidez. Lia ainda está do outro lado daquela porta. Mas o que ela está vivenciando lá dentro?',
    choices: [
      {
        id: 'c_switch_to_lia',
        text: 'Mudar a perspectiva para dentro do quarto de Lia.',
        effects: {
          triggerPerspectiveSwitch: {
            targetPerspective: 'child',
            sceneId: 'door_lia_perspective_room',
            narrativeIntro: 'A mesma situação, agora pelo olhar de quem tem treze anos.',
          },
        },
        nextSceneId: 'door_lia_perspective_room',
      },
    ],
  },

  // -------------------------------------------------------------
  // BEAT 3: A SEGUNDA PERSPECTIVA (DENTRO DO QUARTO COM LIA)
  // -------------------------------------------------------------
  door_lia_perspective_room: {
    id: 'door_lia_perspective_room',
    chapterId: 'chapter_door_13',
    age: 13,
    perspective: 'child',
    speaker: {
      id: 'lia',
      name: 'Lia',
      role: 'Lia (13 anos)',
      avatarStyle: 'closed',
    },
    location: 'Dentro do quarto — Sentada no chão contra a cama',
    sensoryDetails:
      'A tela do celular brilha com notificações em cascata de um grupo de mensagens. A camiseta do uniforme está amarrotada e a manga esquerda está úmida de secar o rosto.',
    soundCue: '[Vibrações rápidas e repetitivas de mensagens de texto no colchão]',
    internalMonologue:
      'Eles tiraram uma foto minha chorando no banheiro da escola depois que a Mariana inventou aquela mentira. Se eu contar para o meu responsável agora, ele vai querer ir na escola, fazer escândalo ou confiscar meu celular. Eu só preciso de dez minutos para respirar sem ninguém me olhando.',
    dialogue:
      'Ouço os passos no corredor parando na frente da minha porta. Minha garganta fecha.',
    choices: [
      {
        id: 'c_lia_choice_hide_phone',
        text: 'Desligar a tela do celular e enfiar debaixo do travesseiro: "Não posso deixar ninguém ver essas mensagens agora."',
        internalIntent: 'Proteção de privacidade por medo de julgamento ou reação desproporcional do adulto.',
        effects: {
          relationalDeltas: {
            truthDisclosureTrust: -1,
            perceivedSafety: +1,
          },
          addMemories: [
            {
              id: 'mem_lia_hid_phone',
              domain: 'privacy',
              title: 'Celular escondido por vergonha',
              description: 'Lia escondeu as mensagens com receio de que o cuidador reagisse com punição ou escândalo.',
              perspective: 'child',
              agePhase: '11-13',
              polarity: 'neutral',
            },
          ],
        },
        nextSceneId: 'door_lia_hearing_caregiver',
      },
      {
        id: 'c_lia_choice_draft_note',
        text: 'Pegar uma folha do caderno espiral e escrever: "Eu não fiz nada de errado, mas estou com muita vergonha."',
        internalIntent: 'Busca por canal alternativo de comunicação quando a fala oral é esmagadora.',
        effects: {
          relationalDeltas: {
            truthDisclosureTrust: +2,
            repairCapability: +2,
          },
          addMemories: [
            {
              id: 'mem_lia_wrote_note',
              domain: 'truth',
              title: 'Bilhete escrito em momento de dor',
              description: 'Lia redigiu um desabafo no caderno ao perceber que não conseguia falar em voz alta.',
              perspective: 'child',
              agePhase: '11-13',
              polarity: 'positive',
            },
          ],
        },
        nextSceneId: 'door_lia_hearing_caregiver',
      },
    ],
  },

  door_lia_hearing_caregiver: {
    id: 'door_lia_hearing_caregiver',
    chapterId: 'chapter_door_13',
    age: 13,
    perspective: 'child',
    speaker: {
      id: 'lia',
      name: 'Lia',
      role: 'Lia (13 anos)',
      avatarStyle: 'reflective',
    },
    location: 'Dentro do quarto — Olhando para a maçaneta',
    sensoryDetails:
      'A voz que vem de fora é o que define o próximo minuto: será um interrogatório policial ou um porto seguro?',
    soundCue: '[Silêncio pesado, quebrado pelo som da voz no corredor]',
    internalMonologue:
      'Não é que eu não queira ajuda. Eu quero. Mas não quero que achem que sou fraca ou que a culpa de terem postado aquilo foi minha.',
    dialogue:
      'O que Alex disse lá fora ecoa aqui dentro com um peso triplicado.',
    choices: [
      {
        id: 'c_lia_transition_to_resolution',
        text: 'Aguardar a atitude do cuidador no corredor.',
        effects: {
          educationalCardId: 'eca_art_17_privacy',
        },
        nextSceneId: 'door_repair_opportunity',
      },
    ],
  },

  // -------------------------------------------------------------
  // BEAT 4: O REENCONTRO E A JANELA DE REPARAÇÃO
  // -------------------------------------------------------------
  door_repair_opportunity: {
    id: 'door_repair_opportunity',
    chapterId: 'chapter_door_13',
    age: 13,
    perspective: 'caregiver',
    speaker: {
      id: 'alex',
      name: 'Alex',
      role: 'Cuidador Principal',
      avatarStyle: 'warm',
    },
    location: 'Diante da porta do quarto',
    sensoryDetails:
      'Dez minutos se passaram. A casa está silenciosa. O jantar precisa ser feito, mas o nó no corredor ainda existe.',
    soundCue: '[Duas batidas suaves e compassadas na madeira]',
    internalMonologue:
      'Eu sei como é estar com treze anos do outro lado de uma porta trancada. Não posso agir como se ela fosse minha inimiga.',
    isRepairOpportunity: true,
    dialogue:
      'Lia... Eu pensei aqui fora. Quero te dizer uma coisa antes de qualquer outra decisão.',
    choices: [
      {
        id: 'choice_repair_genuine',
        text: '"Lia, eu te cobrei com pressa porque fiquei muito assustado com o aviso da escola. Eu invadi seu tempo. Só quero que você saiba que estou aqui fora, e quando você quiser conversar, sem bronca, eu te escuto."',
        internalIntent: 'Reparação legítima: reconhece o impacto, não culpa a adolescente e abre canal de escuta.',
        isRepairAction: true,
        effects: {
          relationalDeltas: {
            perceivedSafety: +3,
            truthDisclosureTrust: +3,
            admitMistakeTrust: +2,
            accumulatedTension: -3,
            repairCapability: +2,
          },
          addMemories: [
            {
              id: 'mem_genuine_repair',
              domain: 'mistake',
              title: 'Pedido de desculpas genuíno do cuidador',
              description: 'Alex assumiu a própria pressa e assegurou acolhimento sem bronca imediata.',
              perspective: 'caregiver',
              agePhase: '11-13',
              polarity: 'positive',
            },
          ],
        },
        nextSceneId: 'door_ending_safe_connection',
      },
      {
        id: 'choice_repair_balanced_boundary',
        text: '"Lia, eu vou preparar o jantar. Você tem o direito ao seu espaço para respirar, mas a regra de segurança continua: não vamos dormir com esse assunto pendente. Às 19h30 a gente senta juntos, combinado?"',
        internalIntent: 'Limite firme e respeitoso: não invade a privacidade no pico da crise, mas preserva a rotina e o dever de cuidado.',
        isRepairAction: true,
        effects: {
          relationalDeltas: {
            predictability: +3,
            supportedAutonomy: +2,
            perceivedSafety: +1,
            accumulatedTension: -2,
          },
          addMemories: [
            {
              id: 'mem_balanced_boundary',
              domain: 'limit',
              title: 'Limite pactuado com respeito à privacidade',
              description: 'Alex combinou horário firme para o diálogo sem forçar a abertura imediata da porta.',
              perspective: 'caregiver',
              agePhase: '11-13',
              polarity: 'positive',
            },
          ],
        },
        nextSceneId: 'door_ending_repaired_boundary',
      },
      {
        id: 'choice_repair_defensive_pressure',
        text: '"Eu só estou tentando te proteger! Você acha que eu tenho tempo para esses dramas? Se não me contar agora, vou confiscar seu celular."',
        internalIntent: 'Ameaça e invalidação: coloca a sobrecarga do adulto como justificativa para coerção.',
        isRepairAction: false,
        effects: {
          relationalDeltas: {
            perceivedSafety: -3,
            truthDisclosureTrust: -3,
            accumulatedTension: +4,
            supportedAutonomy: -2,
          },
          addMemories: [
            {
              id: 'mem_threatened_confiscation',
              domain: 'limit',
              title: 'Ameaça coercitiva sobre privacidade digital',
              description: 'Alex ameaçou retirar o celular de Lia sob coerção e invalidação de sentimentos.',
              perspective: 'caregiver',
              agePhase: '11-13',
              polarity: 'strained',
            },
          ],
        },
        nextSceneId: 'door_ending_distant_guarded',
      },
    ],
  },

  // -------------------------------------------------------------
  // DESFECHO 1: CONEXÃO SEGURA E ESCUTA
  // -------------------------------------------------------------
  door_ending_safe_connection: {
    id: 'door_ending_safe_connection',
    chapterId: 'chapter_door_13',
    age: 13,
    perspective: 'caregiver',
    speaker: {
      id: 'lia',
      name: 'Lia',
      role: 'Filha (13 anos)',
      avatarStyle: 'warm',
    },
    location: 'Porta entreaberta — Cozinha em seguida',
    sensoryDetails:
      'O trinco da fechadura estala suavemente. A porta se abre uns vinte centímetros. Lia não sorri, mas seus olhos encontram os de Alex sem o medo defensivo anterior.',
    soundCue: '[Som de água fervendo na chaleira e duas xícaras colocadas sobre a mesa]',
    dialogue:
      '"Foi... a Mariana na escola. Ela tirou uma foto minha chorando e mandou no grupo... Mas eu não fiz o que ela falou."',
    internalMonologue:
      'Não houve mágicas ou aplausos. Houve apenas duas pessoas que aprenderam que um erro de abordagem pode ser reparado antes de virar uma cicatriz.',
    isEnding: true,
    endingType: 'safe_connection',
    educationalCardId: 'who_parenting_guidelines',
    choices: [
      {
        id: 'c_finish_safe',
        text: 'Finalizar capítulo e ver reflexão relacional.',
        effects: {
          setFlags: { chapterFinished: true },
        },
        nextSceneId: 'chapter_reflection_screen',
      },
    ],
  },

  // -------------------------------------------------------------
  // DESFECHO 2: LIMITE PACTUADO E REPARADO
  // -------------------------------------------------------------
  door_ending_repaired_boundary: {
    id: 'door_ending_repaired_boundary',
    chapterId: 'chapter_door_13',
    age: 13,
    perspective: 'caregiver',
    speaker: {
      id: 'lia',
      name: 'Lia',
      role: 'Filha (13 anos)',
      avatarStyle: 'reflective',
    },
    location: 'Corredor — Um bilhete passado por debaixo da porta',
    sensoryDetails:
      'A porta permaneceu fechada pelo tempo acordado. Mas às 19h25, um pedaço dobrado de folha pautada desliza pela fresta do rodapé.',
    soundCue: '[Som seco de papel deslizando pelo chão encerado]',
    dialogue:
      'No bilhete está escrito com letra trêmula: "Obrigada por não arrombar. Estou lavando o rosto. Às 19h30 eu vou para a cozinha."',
    internalMonologue:
      'Dar limites sem humilhação não é fraqueza: é oferecer um corrimão para quem está descendo uma escada no escuro.',
    isEnding: true,
    endingType: 'repaired_boundary',
    educationalCardId: 'eca_art_18_a_cruel_treatment',
    choices: [
      {
        id: 'c_finish_boundary',
        text: 'Finalizar capítulo e ver reflexão relacional.',
        effects: {
          setFlags: { chapterFinished: true },
        },
        nextSceneId: 'chapter_reflection_screen',
      },
    ],
  },

  // -------------------------------------------------------------
  // DESFECHO 3: DISTÂNCIA DEFENSIVA E VIGILÂNCIA
  // -------------------------------------------------------------
  door_ending_distant_guarded: {
    id: 'door_ending_distant_guarded',
    chapterId: 'chapter_door_13',
    age: 13,
    perspective: 'caregiver',
    speaker: {
      id: 'narrator',
      name: 'Narrador',
      role: 'Observador',
      avatarStyle: 'intense',
    },
    location: 'Quarto trancado e corredor silencioso',
    sensoryDetails:
      'A chave foi girada por dentro com força redobrada. Pelo resto da noite, as respostas foram monossilábicas. O jantar esfriou no prato.',
    soundCue: '[Ruído estático distante e porta trancada duas vezes]',
    dialogue:
      'A porta acabou sendo aberta mais tarde, mas a distância aumentou. Lia aprendeu que admitir que estava com problemas resulta em cobranças e ameaças; nas próximas vezes, ela esconderá com mais cuidado.',
    internalMonologue:
      'O cuidador conseguiu obediência forçada, mas perdeu a confiança da adolescente para pedir socorro quando o perigo real chegar.',
    isEnding: true,
    endingType: 'distant_guarded',
    educationalCardId: 'harvard_serve_and_return',
    choices: [
      {
        id: 'c_finish_distant',
        text: 'Finalizar capítulo e ver reflexão relacional.',
        effects: {
          setFlags: { chapterFinished: true },
        },
        nextSceneId: 'chapter_reflection_screen',
      },
    ],
  },
};
