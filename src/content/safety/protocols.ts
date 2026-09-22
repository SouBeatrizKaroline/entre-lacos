export interface HelpContact {
  name: string;
  scope: string;
  contact: string;
  details: string;
  hours: string;
  cost: string;
}

export const OFFICIAL_HELP_CONTACTS: HelpContact[] = [
  {
    name: 'Disque 100 — Disque Direitos Humanos',
    scope: 'Nacional (Brasil)',
    contact: '100 (ou WhatsApp: +55 61 99656-5008)',
    details:
      'Serviço público e gratuito que recebe, analisa e encaminha denúncias de violações de direitos humanos relacionadas a crianças, adolescentes e grupos vulneráveis.',
    hours: '24 horas por dia, 7 dias por semana',
    cost: 'Gratuito e anônimo',
  },
  {
    name: 'Conselho Tutelar Municipal',
    scope: 'Local / Municipal',
    contact: 'Consulte a sede do Conselho Tutelar de seu bairro ou município',
    details:
      'Órgão autônomo encarregado pela sociedade de zelar pelo cumprimento dos direitos da criança e do adolescente, atuando na proteção e aplicação de medidas.',
    hours: 'Expediente local e regime de plantão',
    cost: 'Serviço público gratuito',
  },
  {
    name: 'CVV — Centro de Valorização da Vida',
    scope: 'Nacional (Brasil)',
    contact: '188 (ou chat em cvv.org.br)',
    details:
      'Apoio emocional confidencial e prevenção do suicídio para qualquer pessoa que necessite conversar em momentos de angústia ou crise.',
    hours: '24 horas por dia',
    cost: 'Gratuito',
  },
  {
    name: '190 — Polícia Militar / Emergência',
    scope: 'Nacional (Brasil)',
    contact: '190',
    details: 'Para situações de flagrante delito, violência física em andamento ou risco iminente à vida.',
    hours: '24 horas por dia',
    cost: 'Gratuito',
  },
  {
    name: 'SAMU 192 — Serviço de Atendimento Móvel de Urgência',
    scope: 'Nacional (Brasil)',
    contact: '192',
    details: 'Para emergências clínicas, acidentes físicos ou crises médicas agudas.',
    hours: '24 horas por dia',
    cost: 'Gratuito',
  },
];
