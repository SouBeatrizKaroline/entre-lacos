# Arquitetura Técnica do Sistema

Este documento descreve a arquitetura de software, fluxo de dados e decisões de engenharia do **Entre Laços**.

---

## 🏛️ Visão Geral da Arquitetura

O sistema é construído sobre três camadas desacopladas:

```
┌─────────────────────────────────────────────────────────────┐
│                    CAMADA DE APRESENTAÇÃO                   │
│         React 18 + Tailwind CSS + Contextos de A11y         │
│  (UI de Diálogo, Escolhas, Transições de Câmera, Modais)    │
└──────────────────────────────┬──────────────────────────────┘
                               │ Dispara Ações de Escolha
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                     MOTOR NARRATIVO (CORE)                  │
│               Engine Data-Driven Independente               │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Scene Graph Navigator & Condition Evaluator             │ │
│ ├─────────────────────────────────────────────────────────┤ │
│ │ Memory Store (Registros Biográficos & Relacionais)      │ │
│ ├─────────────────────────────────────────────────────────┤ │
│ │ Relational Economy (7 Variáveis Ocultas Multidimensionais)│
│ ├─────────────────────────────────────────────────────────┤ │
│ │ Echo Controller (Disparos Intergeracionais)             │ │
│ ├─────────────────────────────────────────────────────────┤ │
│ │ Repair System (Ciclo de Reconhecimento e Reconciliação) │ │
│ └─────────────────────────────────────────────────────────┘ │
└──────────────────────────────┬──────────────────────────────┘
                               │ Atualiza e Lê Estado
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 CAMADA DE ESTADO E PERSISTÊNCIA             │
│            LocalStorage com Validação e Migração            │
│  (Configurações A11y, Progresso de Capítulos, Save Slots)   │
└─────────────────────────────────────────────────────────────┘
```

---

## 🧩 Componentes do Motor Narrativo

### 1. Schema de Nós de Cena (`SceneNode`)
As histórias não são programadas em componentes React. Elas existem como grafos estruturados:
```typescript
interface SceneNode {
  id: string;
  chapterId: string;
  perspective: 'caregiver' | 'child' | 'echo_past';
  characterId: string;
  location: string;
  dialogue?: string;
  internalMonologue?: string;
  sensoryDetails?: string; // Apoio a acessibilidade e imersão
  choices: SceneChoice[];
  autoNextSceneId?: string;
  soundCue?: string; // Indicador de som descritivo
  educationalCardId?: string; // Card opcional após a cena
  isRepairOpportunity?: boolean;
}
```

### 2. Avaliador de Condições (`ConditionEvaluator`)
Controla ramificações baseando-se em:
- Memórias registradas em cenas passadas (`hasMemory('entered_room_without_knocking')`);
- Faixas de variáveis relacionais (`relationalState.perceivedSafety >= 6`);
- Perspectiva ativa.

### 3. Gerenciador de Economia Emocional (`RelationshipManager`)
Atualiza as 7 variáveis relacionais contínuas:
1. `perceivedSafety` (Segurança Percebida)
2. `truthDisclosureTrust` (Confiança para Revelar a Verdade)
3. `admitMistakeTrust` (Confiança para Admitir Erros)
4. `supportedAutonomy` (Autonomia Apoiada)
5. `predictability` (Previsibilidade das Respostas Adultas)
6. `caregiverLoad` (Sobrecarga Emocional do Cuidador)
7. `accumulatedTension` (Tensão Acumulada no Ambiente)

Nenhum desses números é exibido como barra moral ao jogador durante a experiência principal. O feedback é sempre comportamental (postura, abertura, hesitação, tom).

### 4. Controlador de Ecos (`EchoController`)
Quando uma ação no presente ativa uma correspondência biográfica do cuidador (ex: atrito de porta fechada ⇄ perda da maçaneta aos 13 anos), o motor realiza uma transição sensorial suave para uma micro-cena do passado. Ao retornar, disponibiliza alternativas que permitem quebrar a repetição automática sem julgamento moral.

### 5. Sistema de Reparação (`RepairSystem`)
Permite ao cuidador revisitar momentos de atrito seguindo os 5 passos estruturados:
1. **Reconhecer** o comportamento concreto (sem justificar com "você me fez perder a paciência").
2. **Assumir** a própria responsabilidade emocional.
3. **Escutar** a resposta do outro (incluindo silêncio ou pedido de tempo).
4. **Restabelecer** limites de segurança necessários com respeito.
5. **Sustentar** a postura ao longo de cenas posteriores.

---

## 🔒 Privacidade por Design (Privacy-by-Design)

- **Zero PII (Personally Identifiable Information):** O jogo nunca solicita nomes civis completos, escolas, dados médicos ou histórico familiar real.
- **Armazenamento 100% Local:** O estado do jogo é persistido no `window.localStorage` sob a chave isolada `entre_lacos_save_v1`.
- **Botão de Redefinição Total:** O menu de configurações oferece a exclusão imediata e irreversível de todo o histórico local com um único clique.
