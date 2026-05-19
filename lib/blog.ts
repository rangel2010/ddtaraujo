export type BlogContent =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'strong'; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  readingMinutes: number;
  coverImage: string;
  coverAlt: string;
  coverCredit: { name: string; url: string };
  content: BlogContent[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'morcegos-em-londrina-riscos-leis-e-como-resolver-definitivamente',
    title: 'Controle de Morcegos em Londrina: riscos, leis e como resolver definitivamente',
    date: '2026-02-24',
    category: 'Manejo de Fauna',
    excerpt:
      'Morcegos no forro, telhado ou galpão envolvem riscos à saúde e normas ambientais específicas. Veja o que é permitido por lei e como funciona o controle profissional.',
    metaTitle: 'Controle de Morcegos em Londrina | Riscos e Soluções | Araújo',
    metaDescription:
      'Controle profissional de morcegos em Londrina e região. Manejo conforme normas ambientais, vedação e exclusão definitiva. Veja riscos e procedimentos.',
    readingMinutes: 3,
    coverImage:
      'https://images.unsplash.com/photo-1685096137221-2be0f743dba4?auto=format&fit=crop&w=1600&q=80',
    coverAlt: 'Morcego pendurado em rocha de caverna',
    coverCredit: { name: 'Ferran Ventura', url: 'https://unsplash.com/@ferranventura' },
    content: [
      {
        type: 'p',
        text: 'Se você está enfrentando problemas com morcegos no forro, telhado ou galpão em Londrina e região, é fundamental agir corretamente. Além dos riscos à saúde, o manejo de morcegos envolve normas ambientais específicas. Neste artigo, explicamos como funciona o controle profissional e o que é permitido por lei.',
      },
      { type: 'h2', text: 'Por que morcegos são um problema?' },
      {
        type: 'ul',
        items: [
          'Transmissão de doenças, incluindo raiva',
          'Acúmulo de fezes e urina no forro',
          'Mau cheiro persistente no ambiente',
          'Ruídos noturnos que prejudicam o sono',
          'Risco operacional para empresas e indústrias',
        ],
      },
      { type: 'h2', text: 'É permitido matar morcegos?' },
      {
        type: 'p',
        text: 'Não. O extermínio é proibido por lei. Os morcegos são protegidos pela legislação ambiental brasileira por seu papel essencial no equilíbrio ecológico (controle de insetos, polinização, dispersão de sementes). O procedimento correto é o manejo ambiental com vedação estratégica e exclusão controlada, seguindo as normas ambientais vigentes.',
      },
      { type: 'h2', text: 'Como funciona o controle profissional de morcegos?' },
      {
        type: 'ul',
        items: [
          'Inspeção técnica detalhada do imóvel',
          'Identificação dos pontos de acesso e abrigo',
          'Descontaminação completa do local',
          'Instalação de dispositivos de exclusão (saída sem retorno)',
          'Vedação definitiva de frestas, telhas e respiros',
          'Monitoramento pós-serviço para garantir o resultado',
        ],
      },
      {
        type: 'p',
        text: 'Se você precisa de controle de morcegos em Londrina ou região, entre em contato para uma avaliação técnica. A Araújo Dedetizadora possui equipe treinada, com vacinação antirrábica em dia, e segue rigorosamente os protocolos ambientais.',
      },
    ],
  },
  {
    slug: 'problemas-com-pulgas',
    title: 'Problemas com pulgas? Entenda os riscos e como proteger sua família',
    date: '2021-04-13',
    category: 'Insetos',
    excerpt:
      'Uma pulga pode pôr até 2 mil ovos e sobreviver 100 dias sem alimentação. Saiba os riscos para pets e humanos — inclusive a peste bubônica — e como agir.',
    metaTitle: 'Problemas com Pulgas? Araújo Resolve | Dedetizadora Londrina',
    metaDescription:
      'Pulgas transmitem vermes intestinais aos pets e podem picar humanos transmitindo peste bubônica. Veja os riscos e como a dedetização resolve.',
    readingMinutes: 2,
    coverImage:
      'https://images.unsplash.com/photo-1769117327556-cb33587c5298?auto=format&fit=crop&w=1600&q=80',
    coverAlt: 'Filhote marrom e branco coçando a orelha na grama',
    coverCredit: { name: 'Helena Lopes', url: 'https://unsplash.com/@helenalopesph' },
    content: [
      {
        type: 'p',
        text: 'As pulgas podem pôr até 2 mil ovos durante a sua existência e sobrevivem por cerca de 100 dias sem alimentação. Por isso, aparecem com frequência nos animais, principalmente naqueles que não tomam qualquer tipo de medicamento antipulgas com regularidade.',
      },
      { type: 'h2', text: 'Risco para pets: Dipylidium caninum' },
      {
        type: 'p',
        text: 'Quando ingeridas pelo cão ou gato ao se coçarem, as pulgas podem transmitir um verme intestinal chamado Dipylidium caninum. A infecção pode acarretar diarreia e perda de peso, entre outros problemas. Pedaços do verme também podem migrar para o final do intestino, levando o animal a esfregar o ânus para tentar eliminá-lo.',
      },
      { type: 'h2', text: 'Risco para humanos: peste bubônica' },
      {
        type: 'p',
        text: 'As pulgas também podem picar o homem e transmitir doenças graves, como a peste bubônica. Embora rara no Brasil hoje, a doença ainda tem focos em algumas regiões e é potencialmente fatal sem tratamento.',
      },
      { type: 'h2', text: 'Como proteger sua família e seu animal' },
      {
        type: 'ul',
        items: [
          'Mantenha o pet em dia com antipulgas tópico ou comprimido',
          'Aspire tapetes, sofás e cantos com frequência',
          'Lave camas, mantas e tecidos do pet em água quente',
          'Cuide do quintal: pulgas se reproduzem em locais sombreados e úmidos',
          'Em caso de infestação, dedetize o ambiente — não basta tratar só o animal',
        ],
      },
      {
        type: 'p',
        text: 'A Araújo Dedetizadora elimina pulgas em ambientes residenciais, sítios e canis com produtos seguros para pets após o período de carência. Faça seu orçamento sem compromisso.',
      },
    ],
  },
  {
    slug: 'problemas-com-formigas',
    title: 'Problemas com formigas? Conheça as duas espécies mais perigosas',
    date: '2021-04-06',
    category: 'Insetos',
    excerpt:
      'Formigas circulam por áreas insalubres carregando bactérias, fungos e vírus. Conheça a formiga doceira e a formiga-faraó — e os riscos reais que elas trazem.',
    metaTitle: 'Problemas com Formigas? Araújo Controle de Pragas',
    metaDescription:
      'Formigas transmitem doenças carregando bactérias e fungos. Saiba sobre a formiga doceira e a formiga-faraó, responsável por infestações em hospitais.',
    readingMinutes: 2,
    coverImage:
      'https://images.unsplash.com/photo-1579278084099-e7593776949e?auto=format&fit=crop&w=1600&q=80',
    coverAlt: 'Macro fotografia de formiga vermelha sobre rocha',
    coverCredit: { name: 'Wolfgang Hasselmann', url: 'https://unsplash.com/@wolfgang_hasselmann' },
    content: [
      {
        type: 'p',
        text: 'As formigas podem transmitir diversas doenças, isso porque elas circulam por áreas insalubres, carregando em seu corpo bactérias, fungos e vírus nocivos à saúde pública. Conheça agora duas espécies que mais causam prejuízos:',
      },
      { type: 'h2', text: '1. Formiga doceira' },
      {
        type: 'p',
        text: 'Representam uma das pragas urbanas mais comuns no nosso cotidiano. Se alimentam de praticamente tudo o que encontram, incluindo animais mortos e outros dejetos nada agradáveis. Suas patas e corpos são contaminados com os mais diversos micróbios, bactérias e fungos. Podem causar intoxicação alimentar, vômito, diarreia e outras doenças gastrointestinais graves quando entram em contato com alimentos.',
      },
      { type: 'h2', text: '2. Formiga-faraó' },
      {
        type: 'p',
        text: 'É a responsável pelas infestações em hospitais, representando um risco real para a saúde pública. Essa pequena praga urbana tem coloração amarela ou marrom claro e é uma das espécies mais difíceis de ser controlada. Nas residências, a formiga-faraó também contamina embalagens, produtos, além de danificar aparelhos eletrônicos (faz ninhos em equipamentos quentes como tomadas e roteadores).',
      },
      { type: 'h2', text: 'Por que matar com inseticida comum não resolve' },
      {
        type: 'p',
        text: 'Quando você pulveriza inseticida sobre as formigas visíveis, mata apenas as operárias — a rainha continua produzindo dentro do ninho. Pior: as formigas se dispersam e podem criar colônias-satélite em outros pontos da casa, espalhando o problema. O controle profissional usa gel iscas atrativas que as próprias formigas levam para a colônia, eliminando o ninho inteiro em 7 a 14 dias.',
      },
      {
        type: 'p',
        text: 'Proteja seu ambiente. Realize seu orçamento com a Araújo Dedetizadora — controle profissional de formigas em Londrina e todo o Paraná.',
      },
    ],
  },
  {
    slug: 'dedetizadora-londrina-controle-especializado-de-pragas',
    title: 'Dedetização residencial em Londrina: controle especializado sem cheiro e sem sair de casa',
    date: '2021-03-28',
    category: 'Dedetização',
    excerpt:
      'Mais de 40 anos de experiência no controle profissional de pragas em Londrina. Produtos sem cheiro, sem manchas e sem necessidade de se ausentar do imóvel.',
    metaTitle: 'Dedetizadora Londrina | Controle Especializado | Araújo',
    metaDescription:
      'Dedetização residencial em Londrina com produtos sem cheiro e sem mancha. Não precisa sair de casa. Mais de 40 anos de experiência. Orçamento sem compromisso.',
    readingMinutes: 1,
    coverImage:
      'https://images.unsplash.com/photo-1747659629851-a92bd71149f6?auto=format&fit=crop&w=1600&q=80',
    coverAlt: 'Pessoa segurando equipamento profissional de pulverização',
    coverCredit: { name: 'MESTO Sprayers', url: 'https://unsplash.com/@mesto_sprayers' },
    content: [
      {
        type: 'p',
        text: 'A Araújo Dedetizadora é uma empresa especializada no controle profissional de pragas há mais de 40 anos, com técnicos qualificados e comprometidos. Atendemos residências, comércios, indústrias e condomínios em Londrina e em todo o Paraná.',
      },
      { type: 'h2', text: 'Dedetização residencial sem incômodo' },
      {
        type: 'p',
        text: 'Utilizamos produtos e equipamentos específicos para residências. Não tem cheiro, não mancha, não suja e você não precisa se ausentar do local em boa parte dos casos. Aplicamos gel inseticida em pontos estratégicos (atrás de eletrodomésticos, em frestas), técnica que permite tratar até cozinhas em uso.',
      },
      { type: 'h2', text: 'O que está incluído' },
      {
        type: 'ul',
        items: [
          'Vistoria técnica gratuita',
          'Plano de ação personalizado conforme a praga e o ambiente',
          'Produtos registrados na ANVISA e baixa toxicidade',
          'GAT — Garantia de Assistência Técnica com laudo',
          'Emissão de certificado para vigilância sanitária',
          'Retorno preventivo durante o período de garantia',
        ],
      },
      {
        type: 'p',
        text: 'Proteja sua residência com a Araújo. Faça seu orçamento sem compromisso pelo WhatsApp (43) 99976-3797 ou ligue (43) 3339-1295.',
      },
    ],
  },
];

export const blogPostsBySlug = Object.fromEntries(
  blogPosts.map((p) => [p.slug, p])
);
