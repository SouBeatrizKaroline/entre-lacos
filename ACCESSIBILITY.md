# Diretrizes de Acessibilidade e Inclusão

O **Entre Laços** foi concebido sob as diretrizes do **WCAG 2.1 nível AA**, garantindo que pessoas com deficiência, baixa visão, neurodivergências ou dificuldades de leitura usufruam da experiência com autonomia e conforto.

---

## 1. Recursos Implementados no Protótipo

### 🔤 Legibilidade e Escala Tipográfica
- Quatro opções de tamanho de fonte: `Normal`, `Grande`, `Extra Grande` e `Máxima`.
- Famílias tipográficas sans-serif legíveis e com espaçamento generoso entre linhas (`line-height >= 1.6`).
- Tipografia ajustável para dislexia disponível nas configurações.

### 🎨 Contraste e Temas
- **Tema Padrão:** Paleta acolhedora com contraste mínimo de 4.5:1 para texto normal e 3:1 para elementos de interface.
- **Modo Alto Contraste:** Paleta com fundo preto absoluto (`#000000`), texto branco puro (`#FFFFFF`) e destaques em amarelo solar (`#FFDE59`) para máxima legibilidade (taxa de contraste superior a 15:1).

### ⏳ Sem Pressão Temporal
- Por padrão, o jogo **não utiliza temporizadores** em escolhas normais de diálogo, prevenindo ansiedade e respeitando tempos individuais de processamento.
- Opção explícita de velocidade de digitação do texto: `Lenta`, `Normal` ou `Instantânea`.

### ⌨️ Navegação Completa por Teclado
- Foco visual evidente com anéis de destaque de 2px a 3px de espessura (`focus-visible:ring`).
- Suporte a atalhos:
  - Teclas numéricas `1`, `2`, `3`, `4` para seleção rápida de opções.
  - Tecla `Espaço` ou `Enter` para avançar falas.
  - Tecla `Esc` para abrir o menu de pausa / configurações.
- Anúncios dinâmicos com `aria-live="polite"` para tecnologias assistivas (leitores de tela como NVDA, Orca e TalkBack).

### 🔇 Descrição Sonora e Redução de Movimento
- Efeitos e pistas emocionais relevantes contam com tags de **Indicação de Som Visual** (ex: `[Som de maçaneta girando com hesitação]`).
- Suporte nativo à preferência do sistema `prefers-reduced-motion` com desativação completa de animações de transição.
