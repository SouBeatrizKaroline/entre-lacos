# Diretrizes de Contribuição e Pipeline de Validação

Obrigado pelo interesse em contribuir com o **Entre Laços**! Este é um projeto interdisciplinar que une game design, literatura, psicologia do desenvolvimento, neuropsicologia, direito da infância e acessibilidade.

Para garantir que o jogo permaneça seguro, acolhedor, não moralista e fundamentado em evidências e leis consolidadas, todas as contribuições devem seguir o processo descrito abaixo.

---

## 🌿 Modelo de Branching

O repositório adota um fluxo de branches estruturado:

1. `main`: Contém exclusivamente versões estáveis, testadas e demonstráveis (releases e vertical slices aprovados).
2. `develop`: Branch de integração principal. Todas as funcionalidades são integradas aqui antes da homologação para a `main`.
3. `feature/<nome-da-funcionalidade>`: Branches de trabalho individuais ramificadas a partir de `develop` (ex: `feature/repair-system`, `feature/accessibility-screen-reader`).
4. `fix/<nome-do-ajuste>`: Branches pontuais para correções de bugs técnicos ou textuais.

> **Regra:** Nunca realize commits diretos na `main` ou `develop`. Abra sempre um Pull Request (PR) direcionado a `develop`.

---

## 🛡️ Pipeline de Aprovação Interdisciplinar

Diferente de projetos de software convencionais, alterações narrativas e de mecânicas passam por um gate multidisciplinar:

| Etapa | Responsável | Critério de Aceite |
| :--- | :--- | :--- |
| **1. Rascunho Narrativo** | Narrative Designer | Força dramática, autenticidade de diálogos, ausência de tom professoral. |
| **2. Game Design** | Systems / Technical Game Designer | Equilíbrio de escolhas, ausência de respostas "óbvias", integração com o grafo de estados. |
| **3. Revisão Psicológica** | Especialista em Desenvolvimento | Coerência etária, ausência de causalidade determinística ou rótulos diagnósticos. |
| **4. Revisão Legal / ECA** | Especialista em Direitos da Criança | Fidelidade aos arts. 4, 15, 17, 18 e 18-A da Lei 8.069/1990; salvaguardas claras. |
| **5. Revisão de Sensibilidade** | Safety & Ethics Reviewer | Prevenção de revitimização, gatilhos desnecessários, garantia de opções de saída rápida. |
| **6. QA Técnico & Acessibilidade** | Engenharia / Acessibilidade | Testes de regressão, WCAG 2.1 AA, integridade de saves no LocalStorage. |

### Marcador `REVIEW_REQUIRED`
Quando qualquer conteúdo textual, psicológico ou jurídico for inserido sem validação prévia pelo respectivo especialista, o autor **deve** marcá-lo nos metadados ou comentários com a tag:
```typescript
reviewStatus: "REVIEW_REQUIRED"
```
Nenhum conteúdo com essa tag pode ser publicado em releases finais.

---

## ✍️ Padrões de Commit e Código

- **Mensagens de Commit:** Claras, no imperativo, no formato Conventional Commits:
  - `feat(engine): add intergenerational echo trigger condition`
  - `fix(a11y): correct aria-live announcement on dialogue transition`
  - `docs(safety): update Disque 100 referral protocol references`
- **Código:**
  - TypeScript estrito (`strict: true`). Sem uso de `any` injustificado.
  - Separação rigorosa entre regras de negócio narrativo (`src/engine/`) e interface React (`src/components/`).
  - Nenhuma string narrativa embutida hardcoded em componentes visuais. Todo texto deve residir em arquivos de conteúdo data-driven (`src/content/`).

---

## 🤝 Código de Conduta
Valorizamos o respeito mútuo, a escuta empática e a prioridade absoluta à proteção e aos direitos fundamentais de crianças e adolescentes.
