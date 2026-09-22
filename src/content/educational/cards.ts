import { EducationalCard } from '../../types';

export const EDUCATIONAL_CARDS: Record<string, EducationalCard> = {
  eca_art_17_privacy: {
    id: 'eca_art_17_privacy',
    title: 'Artigo 17 do ECA — Direito à Privacidade, Imagem e Espaço Próprio',
    category: 'ECA',
    articleOrSource: 'Lei Federal nº 8.069/1990 (ECA), Art. 17',
    officialCitation:
      'O direito ao respeito consiste na inviolabilidade da integridade física, psíquica e moral da criança e do adolescente, abrangendo a preservação da imagem, da identidade, da autonomia, dos valores, idéias e crenças, dos espaços e objetos pessoais.',
    summary:
      'O Estatuto da Criança e do Adolescente estabelece que o respeito à integridade envolve também a preservação de espaços e objetos pessoais.',
    practicalMeaning:
      'Na adolescência, ter momentos de privacidade no quarto ou espaço pessoal não é rebeldia, mas uma necessidade típica do desenvolvimento e da construção da identidade. O dever de cuidado e proteção dos responsáveis exige saber se há perigo concreto, mas essa supervisão deve ser proporcional e respeitosa, sem transformar a casa em um regime de vigilância irrestrita.',
    whatItIsNot:
      'Privacidade não significa abandono ou omissão. Se houver suspeita fundamentada de risco físico, psíquico ou situação de perigo iminente, o adulto tem o dever legal de intervir para proteger.',
    reviewStatus: 'APPROVED',
  },

  eca_art_18_a_cruel_treatment: {
    id: 'eca_art_18_a_cruel_treatment',
    title: 'Artigo 18-A do ECA — Cuidado e Educação sem Tratamento Cruel ou Degradante',
    category: 'ECA',
    articleOrSource: 'Lei Federal nº 8.069/1990 (ECA), Art. 18-A (incluído pela Lei nº 13.010/2014 - Lei Menino Bernardo)',
    officialCitation:
      'A criança e o adolescente têm o direito de ser educados e cuidados sem o uso de castigo físico ou de tratamento cruel ou degradante, como formas de correção, disciplina, educação ou qualquer outro pretexto, pelos pais, pelos integrantes da família ampliada, pelos responsáveis...',
    summary:
      'A legislação brasileira veda expressamente o uso de castigos físicos, humilhação, ameaça grave ou ridicularização como métodos disciplinares.',
    practicalMeaning:
      'Gritar, ridicularizar a dor do jovem ou usar de força física para impor autoridade não ensina autocontrole; ensina submissão pelo medo ou revolta. A autoridade parental efetiva constrói-se pela previsibilidade, pelo diálogo firme e pela constância de limites justos.',
    whatItIsNot:
      'Educação sem violência não significa ausência de regras ou permissividade. Dizer "não", retirar privilégios de forma proporcional e negociada ou estabelecer horários são deveres fundamentais do cuidado.',
    reviewStatus: 'APPROVED',
  },

  eca_art_15_16_autonomy: {
    id: 'eca_art_15_16_autonomy',
    title: 'Artigos 15 e 16 do ECA — Liberdade de Opinião, Expressão e Busca de Refúgio',
    category: 'ECA',
    articleOrSource: 'Lei Federal nº 8.069/1990 (ECA), Arts. 15 e 16',
    officialCitation:
      'Art. 15: A criança e o adolescente têm direito à liberdade, ao respeito e à dignidade como pessoas humanas em processo de desenvolvimento. Art. 16: O direito à liberdade compreende os seguintes aspectos: II - opinião e expressão; VII - buscar refúgio, auxílio e orientação.',
    summary:
      'Crianças e adolescentes são sujeitos de direitos e não objetos de tutela passiva. Têm o direito de expressar sentimentos, discordar e pedir ajuda.',
    practicalMeaning:
      'Permitir que o adolescente expresse sua discordância de maneira respeitosa fortalece a autonomia moral. Quando os jovens sabem que serão ouvidos sem serem punidos pela discordância, sentem-se muito mais seguros para revelar erros graves.',
    whatItIsNot:
      'Liberdade de expressão não autoriza agressões verbais entre familiares. O foco está no aprendizado compartilhado de convivência.',
    reviewStatus: 'APPROVED',
  },

  who_parenting_guidelines: {
    id: 'who_parenting_guidelines',
    title: 'Diretrizes da OMS sobre Parentalidade Protetiva e Redução de Conflitos',
    category: 'PSYCHOLOGY',
    articleOrSource: 'World Health Organization (WHO), 2023. Guidelines on parenting interventions.',
    officialCitation:
      'WHO guidelines on parenting interventions to prevent maltreatment and enhance parent-child relationships with children aged 0-17 years (Geneva, 2023).',
    summary:
      'Consensos internacionais destacam que relações baseadas em calor humano, comunicação clara e resolução pacífica de conflitos protegem a saúde mental ao longo da vida.',
    practicalMeaning:
      'Cuidadores que praticam a escuta ativa, validam sentimentos antes de exigir soluções e mantêm limites calmos constroem maior resiliência nos filhos. Reconhecer o próprio cansaço e pedir desculpas quando erram ensina às crianças que relacionamentos saudáveis são construídos pela responsabilidade e pela reparação.',
    whatItIsNot:
      'Não se exige do cuidador um estado permanente de paciência irreal. O estresse é natural na vida familiar; a diferença está em não usar a criança como válvula de escape.',
    reviewStatus: 'APPROVED',
  },

  harvard_serve_and_return: {
    id: 'harvard_serve_and_return',
    title: 'Neurodesenvolvimento: Relações Responsivas e Co-regulação',
    category: 'DEVELOPMENT',
    articleOrSource: 'Center on the Developing Child at Harvard University (Guide to Serve & Return, 2023).',
    officialCitation:
      'Interações responsivas de ida e volta (serve and return) e ambientes seguros funcionam como amortecedores essenciais contra o estresse tóxico na infância e adolescência.',
    summary:
      'O cérebro em desenvolvimento aprende a autorregular emoções a partir da experiência de co-regulação com adultos de referência.',
    practicalMeaning:
      'Quando o adolescente está sobrecarregado por conflitos na escola, seu cérebro está em estado de alerta. Tentar impor conversas longas e cobranças lógicas imediatas raramente funciona. Primeiro, oferece-se segurança e previsibilidade; depois que o estresse baixa, o diálogo racional torna-se possível.',
    whatItIsNot:
      'A neurociência do desenvolvimento não produz diagnósticos automáticos nem afirma que um erro isolado de um pai "destrói" o cérebro do filho. A plasticidade e a capacidade de reparação humana são constantes.',
    reviewStatus: 'APPROVED',
  },
};
