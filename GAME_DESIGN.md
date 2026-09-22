# Game Design Document (GDD)

**Projeto:** Entre Laços  
**Gênero:** Jogo narrativo interativo / Visual Novel contemporânea com exploração doméstica leve  
**Plataforma:** Web (Navegadores modernos, Desktop e Mobile/Tablet)  
**Tese Criativa:** *"Às vezes, a mesma história parece completamente diferente do outro lado."*

---

## 1. Visão Geral e Propósito

Entre Laços nasce para preencher uma lacuna crítica: discussões sobre parentalidade, limites e direitos da infância frequentemente chegam em formatos de palestras, cartilhas punitivas ou questionários que geram culpa e defensividade.

Ao transformar conflitos familiares cotidianos em mecânicas jogáveis de dupla perspectiva e consequências relacionais, o jogo permite que cuidadores, jovens e educadores vivenciem a diferença concreta entre a **intenção** de quem cuida e o **impacto** em quem é cuidado.

---

## 2. Pilares de Experiência

| Pilar | Descrição |
| :--- | :--- |
| **Perspectiva antes de Julgamento** | O jogador experimenta a cena primeiro como cuidador, agindo sob incerteza e preocupação, e depois troca para o ponto de vista da criança/adolescente, descobrindo fatores ocultos. |
| **Feedback Comportamental, Não Numérico** | O vínculo não é uma barra verde/vermelha. A resposta vem no olhar do personagem, na porta que se abre um pouco mais, no bilhete deixado na mesa ou na mentira defensiva. |
| **O Erro como Oportunidade (Reparação)** | Nenhum cuidador perde o jogo por ter se exaltado ou tomado uma decisão impulsiva. A habilidade mais nobre no jogo é a capacidade de reparar o vínculo. |
| **Limites sem Degradação** | Firmeza não é violência. O jogo valoriza o dever de proteção, rotinas consistentes e intervenções necessárias para resguardar a integridade física e emocional. |
| **Acolhimento da Carga Adulta** | Cuidadores também se cansam, sentem medo e têm limites. O jogo valida momentos de pausa e autocuidado sem romantizar a negligência. |

---

## 3. Core Loop de Gameplay

1. **Vida Cotidiana:** Interação leve com o ambiente doméstico, pequenas rotinas e pistas sutis do clima familiar.
2. **Gatilho de Tensão:** Surge uma recusa, um objeto quebrado, uma porta fechada, uma mensagem no celular ou uma nota baixa.
3. **Tomada de Decisão (Cuidador):** Escolha de tom, postura corporal, palavras ou tempo de resposta.
4. **Reação Imediata:** Resposta física e verbal do dependente.
5. **Inversão de Perspectiva:** A cena é revisitada ou complementada pelo olhar da criança/adolescente.
6. **Eco Intergeracional:** Disparo opcional de uma memória correlata do passado do próprio cuidador.
7. **Janela de Reparação:** Oportunidade de retomar a conversa com escuta e humildade.
8. **Fechamento e Reflexão:** Resumo dos fatos ocorridos (sem notas morais) e acesso voluntário a cards do ECA e da psicologia.

---

## 4. O Sistema de Perspectivas: "A Porta Fechada"

No primeiro Vertical Slice, o conflito se dá aos 13 anos:
- **Visão de Alex (Cuidador):** Mensagem da escola sobre briga. Medo de que Lia esteja em perigo, sofrendo bullying grave ou escondendo algo perigoso. A porta trancada gera sensação de perda de autoridade ou urgência de proteção.
- **Visão de Lia (13 anos):** Constrangimento extremo por ter chorado na frente de colegas após uma discussão injusta. Necessidade visceral de alguns minutos de silêncio para se recompor antes de ter que responder a interrogatórios.
- **O Aprendizado Empírico:** O jogador compreende que bater na porta e acordar um tempo para conversar ("Vou respeitar 15 minutos; só preciso saber se você está segura fisicamente") atende tanto à segurança quanto à dignidade da adolescente.

---

## 5. Modos de Jogo

1. **Modo Solo (Disponível no MVP):** O jogador comanda alternadamente os personagens na narrativa.
2. **Modo Família / Jogar Juntos (Arquitetura preparada para M5):** Dois participantes (cuidador e jovem) jogam no mesmo dispositivo ou em telas complementares, respondendo individualmente a percepções antes de comparar como cada um enxergou o momento.
