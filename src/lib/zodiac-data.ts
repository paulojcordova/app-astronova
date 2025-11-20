// Dados dos signos do zodíaco

export const zodiacSigns = [
  {
    name: 'Áries',
    symbol: '♈',
    element: 'Fogo',
    dateRange: '21/03 - 19/04',
    essence: 'Pioneiro, corajoso e cheio de energia. Áries é o primeiro signo do zodíaco, representando novos começos e iniciativa.',
    love: 'Apaixonado e direto, busca parceiros que acompanhem sua intensidade e aventura.',
    work: 'Líder natural, prospera em ambientes dinâmicos onde pode tomar iniciativa.',
    tips: ['Pratique a paciência', 'Canalize sua energia em projetos construtivos', 'Ouça mais antes de agir']
  },
  {
    name: 'Touro',
    symbol: '♉',
    element: 'Terra',
    dateRange: '20/04 - 20/05',
    essence: 'Estável, prático e sensual. Touro valoriza segurança, conforto e os prazeres da vida.',
    love: 'Leal e dedicado, busca relacionamentos estáveis e duradouros.',
    work: 'Persistente e confiável, excelente em construir bases sólidas.',
    tips: ['Seja mais flexível às mudanças', 'Evite teimosia excessiva', 'Explore novos horizontes']
  },
  {
    name: 'Gêmeos',
    symbol: '♊',
    element: 'Ar',
    dateRange: '21/05 - 20/06',
    essence: 'Comunicativo, versátil e curioso. Gêmeos adora aprender e compartilhar conhecimento.',
    love: 'Precisa de estímulo mental e conversas profundas para se conectar.',
    work: 'Multitarefa natural, prospera em ambientes que exigem comunicação.',
    tips: ['Foque em uma coisa por vez', 'Aprofunde-se mais', 'Pratique a consistência']
  },
  {
    name: 'Câncer',
    symbol: '♋',
    element: 'Água',
    dateRange: '21/06 - 22/07',
    essence: 'Emotivo, intuitivo e protetor. Câncer valoriza família, lar e conexões emocionais.',
    love: 'Carinhoso e dedicado, busca segurança emocional profunda.',
    work: 'Empático e cuidadoso, excelente em cuidar de pessoas e projetos.',
    tips: ['Estabeleça limites emocionais', 'Não leve tudo para o pessoal', 'Saia da zona de conforto']
  },
  {
    name: 'Leão',
    symbol: '♌',
    element: 'Fogo',
    dateRange: '23/07 - 22/08',
    essence: 'Confiante, generoso e criativo. Leão brilha naturalmente e inspira outros.',
    love: 'Romântico e leal, adora demonstrar afeto e ser admirado.',
    work: 'Líder carismático, prospera quando pode expressar criatividade.',
    tips: ['Pratique a humildade', 'Compartilhe os holofotes', 'Ouça críticas construtivas']
  },
  {
    name: 'Virgem',
    symbol: '♍',
    element: 'Terra',
    dateRange: '23/08 - 22/09',
    essence: 'Analítico, prestativo e perfeccionista. Virgem busca melhorar tudo ao seu redor.',
    love: 'Dedicado e atencioso, demonstra amor através de atos práticos.',
    work: 'Detalhista e eficiente, excelente em organização e análise.',
    tips: ['Aceite imperfeições', 'Não seja tão crítico consigo mesmo', 'Relaxe mais']
  },
  {
    name: 'Libra',
    symbol: '♎',
    element: 'Ar',
    dateRange: '23/09 - 22/10',
    essence: 'Diplomático, harmonioso e justo. Libra busca equilíbrio e beleza em tudo.',
    love: 'Romântico e parceiro, valoriza relacionamentos equilibrados.',
    work: 'Mediador natural, excelente em criar harmonia e resolver conflitos.',
    tips: ['Tome decisões mais rápido', 'Defenda suas opiniões', 'Evite agradar sempre']
  },
  {
    name: 'Escorpião',
    symbol: '♏',
    element: 'Água',
    dateRange: '23/10 - 21/11',
    essence: 'Intenso, transformador e profundo. Escorpião busca verdades ocultas e conexões autênticas.',
    love: 'Apaixonado e leal, busca intimidade emocional profunda.',
    work: 'Determinado e focado, excelente em investigação e transformação.',
    tips: ['Pratique o perdão', 'Confie mais nas pessoas', 'Solte o controle']
  },
  {
    name: 'Sagitário',
    symbol: '♐',
    element: 'Fogo',
    dateRange: '22/11 - 21/12',
    essence: 'Otimista, aventureiro e filosófico. Sagitário busca expandir horizontes e conhecimento.',
    love: 'Livre e honesto, precisa de espaço e aventura no relacionamento.',
    work: 'Visionário e entusiasta, prospera em ambientes que permitem crescimento.',
    tips: ['Seja mais comprometido', 'Pense antes de falar', 'Finalize o que começa']
  },
  {
    name: 'Capricórnio',
    symbol: '♑',
    element: 'Terra',
    dateRange: '22/12 - 19/01',
    essence: 'Ambicioso, disciplinado e responsável. Capricórnio constrói seu sucesso com paciência.',
    love: 'Leal e tradicional, busca relacionamentos sérios e duradouros.',
    work: 'Estrategista nato, excelente em planejamento e execução de longo prazo.',
    tips: ['Permita-se relaxar', 'Não seja tão duro consigo mesmo', 'Aproveite o presente']
  },
  {
    name: 'Aquário',
    symbol: '♒',
    element: 'Ar',
    dateRange: '20/01 - 18/02',
    essence: 'Inovador, independente e humanitário. Aquário pensa no futuro e no coletivo.',
    love: 'Amigo primeiro, precisa de liberdade e conexão intelectual.',
    work: 'Visionário e original, excelente em inovação e trabalho em equipe.',
    tips: ['Conecte-se emocionalmente', 'Seja mais presente', 'Aceite tradições']
  },
  {
    name: 'Peixes',
    symbol: '♓',
    element: 'Água',
    dateRange: '19/02 - 20/03',
    essence: 'Compassivo, intuitivo e sonhador. Peixes vive entre o mundo material e espiritual.',
    love: 'Romântico e empático, busca conexão espiritual profunda.',
    work: 'Criativo e adaptável, excelente em artes e ajudar outros.',
    tips: ['Estabeleça limites', 'Seja mais prático', 'Não fuja da realidade']
  }
];

export function getSignByDate(date: Date): typeof zodiacSigns[0] | null {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return zodiacSigns[0];
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return zodiacSigns[1];
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return zodiacSigns[2];
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return zodiacSigns[3];
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return zodiacSigns[4];
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return zodiacSigns[5];
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return zodiacSigns[6];
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return zodiacSigns[7];
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return zodiacSigns[8];
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return zodiacSigns[9];
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return zodiacSigns[10];
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return zodiacSigns[11];

  return null;
}
