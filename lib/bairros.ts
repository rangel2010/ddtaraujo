// Bairros e regiões atendidas em Londrina — usado nas landing pages /atendimento/[slug]
// Cada bairro tem conteúdo único focado no perfil predominante daquela região.

export type Bairro = {
  slug: string;
  name: string;
  fullName: string; // título completo, com cidade
  zone: 'central' | 'norte' | 'sul' | 'leste' | 'oeste' | 'industrial';
  profile: string; // descrição curta do perfil
  intro: string; // parágrafo de abertura único (~150-200 palavras)
  body: string; // parágrafo complementar com características específicas
  serviceHighlights: { slug: string; reason: string }[]; // serviços mais relevantes pro bairro
  nearbyAreas: string[]; // bairros vizinhos (pra inter-linking)
  metaTitle: string;
  metaDescription: string;
};

export const bairros: Bairro[] = [
  {
    slug: 'centro',
    name: 'Centro',
    fullName: 'Centro de Londrina',
    zone: 'central',
    profile: 'Comercial denso — restaurantes, padarias e lojas',
    intro:
      'O Centro de Londrina concentra a maior densidade comercial da cidade — restaurantes, padarias, lanchonetes, cafeterias, lojas, escritórios e edifícios mistos disputam espaço em poucas quadras. Para esses estabelecimentos, controle de pragas não é luxo: é exigência da vigilância sanitária. A RDC 622/22 da ANVISA determina periodicidade mínima mensal para todo estabelecimento que manipula alimentos, e a fiscalização no Centro é mais ativa que em outras regiões.',
    body:
      'A Araújo atende o Centro há mais de 40 anos com programa CIPV (Controle Integrado de Pragas e Vetores) sob medida para o ritmo do comércio: aplicações fora do horário comercial (madrugada ou fim de tarde), técnicos uniformizados com identificação visível, laudos técnicos para apresentação à vigilância sanitária. Para padarias e cozinhas industriais, usamos gel inseticida em vez de pulverização — atende sem precisar fechar o ponto.',
    serviceHighlights: [
      { slug: 'controle-de-pragas-em-londrina', reason: 'Programa contínuo CIPV obrigatório para comércio com alimentos (RDC 622/22)' },
      { slug: 'dedetizacao-de-baratas', reason: 'Controle especializado em padarias, cozinhas e áreas com gordura' },
      { slug: 'desratizacao', reason: 'Ratos atraídos por lixo comercial — porta-iscas lacrados em áreas externas' },
      { slug: 'sanitizacao-de-ambientes-londrina', reason: 'Higienização periódica para estabelecimentos com público' },
    ],
    nearbyAreas: ['vila-casoni', 'igapo', 'jardim-quebec'],
    metaTitle: 'Dedetização no Centro de Londrina | Araújo (40 anos)',
    metaDescription:
      'Controle de pragas no Centro de Londrina para restaurantes, padarias e lojas. CIPV conforme RDC 622/22 da ANVISA. Atendimento fora do horário comercial.',
  },
  {
    slug: 'gleba-palhano',
    name: 'Gleba Palhano',
    fullName: 'Gleba Palhano — Londrina',
    zone: 'sul',
    profile: 'Alto padrão vertical — condomínios e apartamentos consolidados',
    intro:
      'A Gleba Palhano é a região mais valorizada da Zona Sul de Londrina — sede do Catuaí Shopping e do Aurora Shopping, com alta concentração de prédios residenciais. Muitos dos apartamentos da região já têm 15-25 anos de construção, e essa idade traz desafios específicos para controle de pragas: frestas em rodapés que se abriram com o tempo, tubulações com falhas estruturais, áreas comuns (garagem, lixeiras, salão de festas, áreas verdes) que acumulam histórico de infestações.',
    body:
      'A Araújo atende condomínios da Gleba Palhano com programa CIPV especializado para prédios verticais maduros: vistoria detalhada das áreas comuns (com mapa de pontos críticos atualizado a cada visita), porta-iscas lacrados em áreas externas, controle integrado de baratas e ratos, monitoramento da fauna sinantrópica (pombos em fachadas e sacadas). Síndicos da região contratam pela documentação completa para apresentação em assembleia e pela equipe identificada que entra no condomínio com crachá e uniforme.',
    serviceHighlights: [
      { slug: 'dac-divisao-de-atendimento-a-condominios', reason: 'Programa específico para síndicos com relatórios para AGO/AGE' },
      { slug: 'controle-de-pragas-em-londrina', reason: 'CIPV contínuo para prédios verticais com áreas comuns múltiplas' },
      { slug: 'controle-de-pombos-em-londrina', reason: 'Manejo de pombos em sacadas, fachadas e telhados' },
      { slug: 'limpeza-de-caixas-de-agua-em-londrina', reason: 'Limpeza semestral conforme ANVISA — obrigação dos condomínios' },
    ],
    nearbyAreas: ['aurora', 'terra-bonita', 'bela-suica'],
    metaTitle: 'Dedetização na Gleba Palhano — Condomínios | Araújo Londrina',
    metaDescription:
      'Controle de pragas em condomínios da Gleba Palhano em Londrina. Programa CIPV especializado para prédios verticais. Documentação completa para síndicos.',
  },
  {
    slug: 'aurora',
    name: 'Aurora',
    fullName: 'Aurora — Londrina',
    zone: 'sul',
    profile: 'Residencial em transformação — condomínios novos de alto nível',
    intro:
      'O bairro Aurora vive um momento de transformação acelerada — tradicionalmente residencial com casas grandes, vem recebendo investimentos massivos em novos condomínios de alto padrão. Essa fase de obra e ocupação inicial é o momento ideal para implantar barreira química preventiva contra cupins subterrâneos antes da entrega das unidades. Tratamento preventivo em construção custa muito menos que tratar infestação anos depois.',
    body:
      'A Araújo atende construtoras e empreendimentos em fase de obra na Aurora com aplicação de barreira química no solo antes da contrapiso — protege a estrutura por até 5 anos com garantia escrita. Para condomínios recém-entregues, oferecemos contrato CIPV personalizado para o primeiro ano de ocupação, fase em que a chance de aparecimento de pragas é maior (mudanças, embalagens, transição de moradores). Também atendemos as residências tradicionais do bairro com dedetização preventiva e descupinização.',
    serviceHighlights: [
      { slug: 'descupinizacao', reason: 'Barreira química preventiva em obras novas — garantia estendida até 5 anos' },
      { slug: 'dac-divisao-de-atendimento-a-condominios', reason: 'Contrato inicial para condomínios recém-entregues' },
      { slug: 'dedetizacao-em-londrina', reason: 'Dedetização preventiva em residências tradicionais do bairro' },
      { slug: 'controle-de-pragas-em-londrina', reason: 'CIPV especializado para empreendimentos novos' },
    ],
    nearbyAreas: ['gleba-palhano', 'bela-suica', 'terra-bonita'],
    metaTitle: 'Dedetização no Aurora — Condomínios Novos | Araújo Londrina',
    metaDescription:
      'Controle de pragas no Aurora em Londrina. Barreira química preventiva em obras novas e CIPV para condomínios recém-entregues. 40 anos de experiência.',
  },
  {
    slug: 'bela-suica',
    name: 'Jardim Bela Suíça',
    fullName: 'Jardim Bela Suíça — Londrina',
    zone: 'sul',
    profile: 'Alto padrão horizontal — casas antigas com madeira nobre',
    intro:
      'O Jardim Bela Suíça é um dos endereços mais nobres de Londrina, com casas grandes em terrenos amplos, ruas arborizadas e construções que muitas vezes têm décadas de história. Esse perfil traz um desafio específico e silencioso: cupins. Casas antigas costumam ter abundância de madeira nobre — vigas, batentes, rodapés, móveis planejados, escadas — e tudo isso é cardápio para cupim de madeira seca (Cryptotermes brevis) e cupim subterrâneo (Coptotermes), que pode comprometer estruturas inteiras sem que ninguém perceba até o estrago aparecer.',
    body:
      'A Araújo atende as residências do Jardim Bela Suíça com descupinização especializada: vistoria detalhada de toda a estrutura de madeira, identificação da espécie pelo tipo de pó/grânulo expelido, tratamento focal (injeção pontual) em móveis e batentes, e barreira química perimetral contra cupim subterrâneo. Atendimento agendado discreto, equipe uniformizada, sem cheiro forte e sem precisar esvaziar cômodos. Para clientes da região, oferecemos também contrato de manutenção preventiva com vistoria anual da estrutura.',
    serviceHighlights: [
      { slug: 'descupinizacao', reason: 'Especialidade em casas antigas com madeira nobre — vigas, batentes, móveis' },
      { slug: 'dedetizacao-em-londrina', reason: 'Dedetização periódica em residências de alto padrão' },
      { slug: 'dedetizacao-de-formigas', reason: 'Formigas em paredes antigas e jardins extensos' },
      { slug: 'dedetizacao-para-escorpioes-em-londrina', reason: 'Casas com jardins amplos e quintal — risco aumenta' },
    ],
    nearbyAreas: ['gleba-palhano', 'aurora', 'jardim-quebec'],
    metaTitle: 'Descupinização no Jardim Bela Suíça | Araújo Londrina',
    metaDescription:
      'Descupinização e controle de pragas em casas antigas do Jardim Bela Suíça em Londrina. Especialistas em cupim de madeira seca e subterrâneo. 40 anos.',
  },
  {
    slug: 'cinco-conjuntos',
    name: 'Cinco Conjuntos',
    fullName: 'Cinco Conjuntos — Londrina',
    zone: 'norte',
    profile: 'Residencial popular — região mais populosa da Zona Norte',
    intro:
      'Os Cinco Conjuntos compõem a região mais populosa de Londrina, formados pelos conjuntos habitacionais Milton Gavetti, Parigot de Souza I e II, Aquiles Stenguel, João Paz, Semíramis Barros Braga, entre outros. São milhares de famílias em residências horizontais, com infraestrutura comercial própria. Pragas mais comuns na região: baratas (atraídas por restos de comida e tubulações compartilhadas), formigas, ratos e, em meses quentes, escorpiões em terrenos baldios e construções abandonadas.',
    body:
      'A Araújo atende os Cinco Conjuntos com dedetização residencial acessível e atendimento rápido — geralmente em até 24-48 horas. Usamos produtos sem cheiro forte, sem necessidade de sair de casa em boa parte dos casos, e oferecemos GAT (Garantia de Assistência Técnica) escrita: se a praga voltar dentro do prazo, retornamos sem custo. Trabalhamos com produtos antialérgicos sob demanda para famílias com crianças pequenas e pets. Atendimento agendado por WhatsApp.',
    serviceHighlights: [
      { slug: 'dedetizacao-em-londrina', reason: 'Dedetização residencial com garantia escrita e atendimento rápido' },
      { slug: 'dedetizacao-de-baratas', reason: 'Combate especializado a baratas em residências' },
      { slug: 'desratizacao', reason: 'Controle de ratos com porta-iscas seguros para crianças e pets' },
      { slug: 'dedetizacao-para-escorpioes-em-londrina', reason: 'Atenção especial a escorpiões em terrenos baldios próximos' },
    ],
    nearbyAreas: ['aeroporto', 'centro'],
    metaTitle: 'Dedetização nos Cinco Conjuntos — Londrina | Araújo',
    metaDescription:
      'Dedetização residencial nos Cinco Conjuntos em Londrina com garantia escrita. Atendimento rápido em até 48h. Produtos seguros para família e pets.',
  },
  {
    slug: 'vila-casoni',
    name: 'Vila Casoni',
    fullName: 'Vila Casoni — Londrina',
    zone: 'central',
    profile: 'Tradicional — muitas casas de madeira',
    intro:
      'A Vila Casoni é um dos bairros mais tradicionais de Londrina, conhecido pela tranquilidade, segurança e vizinhança consolidada. Uma característica marcante da região é a presença de muitas casas com elementos estruturais em madeira — desde construções antigas inteiras feitas de madeira de lei até casas de alvenaria com vigas, telhados, varandas e detalhes em madeira. Esse perfil torna a descupinização um serviço crítico para os moradores: cupim em casa de madeira é questão de tempo se não houver tratamento preventivo.',
    body:
      'A Araújo atende a Vila Casoni com descupinização especializada em estruturas de madeira: vistoria completa identificando focos ativos e zonas de risco, tratamento curativo com injeção em pontos de saída do cupim, barreira química no solo contra cupim subterrâneo e contrato preventivo anual para evitar reinfestação. Para as construções inteiramente de madeira (típicas da região), oferecemos protocolo especial que respeita a integridade da madeira e usa produtos cupinicidas de longa duração com garantia escrita.',
    serviceHighlights: [
      { slug: 'descupinizacao', reason: 'Atenção máxima — casas de madeira são alvo principal de cupim' },
      { slug: 'dedetizacao-em-londrina', reason: 'Dedetização preventiva geral em residências tradicionais' },
      { slug: 'dedetizacao-de-formigas', reason: 'Formigas em construções antigas com paredes vazadas' },
      { slug: 'desratizacao', reason: 'Ratos em forros e estruturas com madeira velha' },
    ],
    nearbyAreas: ['centro', 'igapo', 'jardim-quebec'],
    metaTitle: 'Descupinização na Vila Casoni — Casas de Madeira | Araújo',
    metaDescription:
      'Descupinização e controle de pragas na Vila Casoni em Londrina. Especialistas em casas de madeira — proteção contra cupim subterrâneo e madeira seca.',
  },
  {
    slug: 'terra-bonita',
    name: 'Jardim Terra Bonita',
    fullName: 'Jardim Terra Bonita — Londrina',
    zone: 'sul',
    profile: 'Residencial alto + comércio sofisticado próximo ao Catuaí',
    intro:
      'O Jardim Terra Bonita combina o melhor de dois mundos: ambiente residencial tranquilo com acesso imediato a serviços sofisticados do Catuaí Shopping (lojas, cafeterias, restaurantes, mercados). Essa proximidade comercial atrai um perfil de morador exigente — famílias e profissionais que valorizam serviços bem prestados, agendamento preciso e equipe capacitada. Pragas comuns na região variam de baratas em residências e estabelecimentos comerciais a formigas em jardins residenciais.',
    body:
      'A Araújo atende o Jardim Terra Bonita com dedetização residencial premium e serviços para o comércio próximo: técnicos uniformizados, agendamento pontual, produtos sem cheiro forte, opção de aplicação com gel em ambientes sensíveis. Para condomínios residenciais da região, oferecemos contrato CIPV com cronograma fixo. Para estabelecimentos comerciais próximos ao shopping, atendimento fora do horário de pico para não atrapalhar a operação.',
    serviceHighlights: [
      { slug: 'dedetizacao-em-londrina', reason: 'Dedetização residencial com produtos premium sem cheiro' },
      { slug: 'dac-divisao-de-atendimento-a-condominios', reason: 'Atendimento a condomínios residenciais da região' },
      { slug: 'controle-de-pragas-em-londrina', reason: 'CIPV para estabelecimentos comerciais próximos ao Catuaí' },
      { slug: 'sanitizacao-de-ambientes-londrina', reason: 'Higienização periódica para ambientes climatizados' },
    ],
    nearbyAreas: ['gleba-palhano', 'aurora', 'bela-suica'],
    metaTitle: 'Dedetização no Jardim Terra Bonita | Araújo Londrina',
    metaDescription:
      'Controle de pragas no Jardim Terra Bonita em Londrina. Atendimento residencial premium e comercial próximo ao Catuaí Shopping. 40 anos de experiência.',
  },
  {
    slug: 'aeroporto',
    name: 'Aeroporto',
    fullName: 'Aeroporto — Londrina',
    zone: 'leste',
    profile: 'Mix residencial + comercial, próximo ao Aeroporto José Richa',
    intro:
      'A região do Aeroporto, próxima ao Aeroporto Governador José Richa, combina perfil residencial tranquilo com estabelecimentos comerciais e proximidade a importantes vias de acesso. Uma característica peculiar da região: a presença constante de pombos atraídos por estruturas altas (torres do aeroporto, prédios, postes). Pombos em quantidade significam fezes acumuladas em telhados, calhas entupidas, e a fauna de parasitas que eles trazem (carrapatos, pulgas, ácaros).',
    body:
      'A Araújo atende a região do Aeroporto com foco específico em manejo de pombos: instalação de espículas anti-pouso em platibandas, telas de exclusão em vãos e respiros, fios anti-pouso em fachadas, limpeza e desinfecção de áreas com acúmulo de fezes. O serviço é executado conforme normas ambientais (manejo, não extermínio). Também atendemos as residências e comércios da região com dedetização padrão, com agendamento adaptado ao perfil de cada cliente.',
    serviceHighlights: [
      { slug: 'controle-de-pombos-em-londrina', reason: 'Foco na região — estruturas altas atraem grande número de pombos' },
      { slug: 'dedetizacao-em-londrina', reason: 'Dedetização residencial e comercial para a região' },
      { slug: 'dedetizacao-de-carrapatos', reason: 'Pombos trazem carrapatos como praga associada' },
      { slug: 'controle-de-pragas-em-londrina', reason: 'CIPV para estabelecimentos comerciais da região' },
    ],
    nearbyAreas: ['cinco-conjuntos', 'centro'],
    metaTitle: 'Controle de Pombos no Aeroporto Londrina | Araújo',
    metaDescription:
      'Manejo de pombos e dedetização na região do Aeroporto em Londrina. Espículas, telas e exclusão estrutural conforme normas ambientais. 40 anos.',
  },
  {
    slug: 'jardim-quebec',
    name: 'Jardim Quebec',
    fullName: 'Jardim Quebec — Londrina',
    zone: 'central',
    profile: 'Residencial família — ruas arborizadas, ambiente tranquilo',
    intro:
      'O Jardim Quebec é um bairro predominantemente residencial onde famílias buscam segurança, tranquilidade e ruas arborizadas. Essa arborização generosa é parte da identidade do bairro — mas também atrai pragas urbanas que se beneficiam de árvores e jardins extensos: escorpiões em entulho de poda, formigas que invadem casas vindas dos jardins, carrapatos trazidos por animais de estimação que brincam em áreas verdes. O perfil familiar exige cuidado redobrado com produtos seguros para crianças e pets.',
    body:
      'A Araújo atende o Jardim Quebec com dedetização residencial focada em famílias: produtos antialérgicos sob demanda, técnicas que não exigem sair de casa, gel inseticida em ambientes sensíveis, atendimento agendado com pontualidade. Para o problema específico de escorpiões na região (que cresce em períodos quentes), oferecemos atendimento emergencial em até 24 horas e protocolo integrado: pulverização nos pontos de acesso + controle de baratas (alimento dos escorpiões) + orientação para vedação de ralos e frestas.',
    serviceHighlights: [
      { slug: 'dedetizacao-em-londrina', reason: 'Dedetização residencial premium com produtos antialérgicos' },
      { slug: 'dedetizacao-para-escorpioes-em-londrina', reason: 'Bairros arborizados têm risco aumentado — atendimento 24h' },
      { slug: 'dedetizacao-de-formigas', reason: 'Formigas vêm dos jardins — gel iscas eliminam a colônia toda' },
      { slug: 'dedetizacao-de-carrapatos', reason: 'Famílias com pets e jardins amplos = controle de carrapatos' },
    ],
    nearbyAreas: ['vila-casoni', 'centro', 'igapo'],
    metaTitle: 'Dedetização no Jardim Quebec — Famílias | Araújo Londrina',
    metaDescription:
      'Controle de pragas no Jardim Quebec em Londrina. Dedetização residencial com produtos seguros para crianças e pets. Atendimento emergencial 24h.',
  },
  {
    slug: 'igapo',
    name: 'Igapó',
    fullName: 'Igapó — Londrina',
    zone: 'central',
    profile: 'Próximo ao Lago Igapó — vida noturna e umidade',
    intro:
      'O bairro Igapó (também conhecido como Jardim Igapó) fica em uma das regiões mais bonitas de Londrina, cortado pela Avenida Inglaterra e próximo ao Lago Igapó e ao Parque Municipal Arthur Thomas. Tem perfil misto residencial + estabelecimentos de vida noturna (bares, restaurantes, lanchonetes). A proximidade do lago traz uma realidade peculiar: umidade ambiente elevada, e com isso uma população alta de mosquitos (Culex e, em alguns períodos, Aedes), além de moscas em quantidade superior aos outros bairros. Estabelecimentos com cozinha e atendimento ao público sofrem mais com isso.',
    body:
      'A Araújo atende o Igapó com soluções específicas para a realidade local: controle de mosquitos com larvicidas em ralos e caixas de gordura, instalação de armadilhas luminosas em estabelecimentos comerciais, programa CIPV para restaurantes e bares com fiscalização frequente da vigilância sanitária. Para residências, oferecemos dedetização periódica com foco em controle de insetos voadores e atendimento fora do horário comercial nos estabelecimentos. Trabalhamos também com sanitização de ambientes climatizados.',
    serviceHighlights: [
      { slug: 'controle-de-pragas-em-londrina', reason: 'CIPV para bares e restaurantes — conformidade RDC 622/22' },
      { slug: 'dedetizacao-em-londrina', reason: 'Dedetização residencial com foco em mosquitos e moscas' },
      { slug: 'sanitizacao-de-ambientes-londrina', reason: 'Higienização periódica em ambientes com público' },
      { slug: 'dedetizacao-de-baratas', reason: 'Baratas em estabelecimentos com fluxo de alimentos' },
    ],
    nearbyAreas: ['centro', 'jardim-quebec', 'vila-casoni'],
    metaTitle: 'Dedetização no Igapó — Lago Igapó | Araújo Londrina',
    metaDescription:
      'Controle de pragas no Igapó em Londrina, próximo ao Lago Igapó e Avenida Inglaterra. Atendimento residencial e CIPV para bares e restaurantes. 40 anos.',
  },
  {
    slug: 'distrito-industrial',
    name: 'Distrito Industrial',
    fullName: 'Distrito Industrial — Londrina',
    zone: 'industrial',
    profile: 'B2B — indústrias com exigências sanitárias e auditoria',
    intro:
      'O Distrito Industrial de Londrina concentra grande parte das indústrias da cidade — frigoríficos, panificadoras industriais, fábricas de alimentos, depósitos, centros logísticos, indústria farmacêutica e empresas de transformação. Para esses estabelecimentos, controle de pragas não é opcional: é exigência regulatória da ANVISA (RDC 622/22), das vigilâncias sanitárias estadual (SESA 1153/2024) e municipal, e das certificações de qualidade (ISO 22000, BRC, FSSC 22000, HACCP). Auditoria sem programa CIPV ativo significa autuação garantida.',
    body:
      'A Araújo opera CIPV no Distrito Industrial há mais de quatro décadas, com equipe técnica dedicada e documentação completa para todas as auditorias. Nosso programa inclui: diagnóstico inicial detalhado, mapa de pontos de controle, visitas técnicas com periodicidade contratada (semanal, quinzenal ou mensal), porta-iscas lacrados e identificados em áreas externas e internas, armadilhas luminosas em áreas com alimentos, monitoramento técnico contínuo, laudos para auditoria interna e externa, atendimento emergencial sem custo adicional. Nossos relatórios atendem ISO 22000, BRC, FSSC 22000 e demais certificações alimentares.',
    serviceHighlights: [
      { slug: 'controle-de-pragas-em-londrina', reason: 'CIPV obrigatório para indústrias — base do nosso atendimento B2B' },
      { slug: 'desratizacao', reason: 'Porta-iscas industriais e monitoramento contínuo' },
      { slug: 'sanitizacao-de-ambientes-londrina', reason: 'Sanitização de áreas de produção e estoque' },
      { slug: 'controle-de-pombos-em-londrina', reason: 'Manejo de pombos em galpões e áreas externas' },
    ],
    nearbyAreas: ['aeroporto', 'cinco-conjuntos'],
    metaTitle: 'CIPV no Distrito Industrial de Londrina | Araújo',
    metaDescription:
      'Controle Integrado de Pragas (CIPV) no Distrito Industrial de Londrina. Documentação para ISO 22000, BRC, FSSC 22000 e ANVISA. 40 anos atendendo indústrias.',
  },
];

export const bairrosBySlug = Object.fromEntries(bairros.map((b) => [b.slug, b]));

export const zoneLabels: Record<Bairro['zone'], string> = {
  central: 'Zona Central',
  norte: 'Zona Norte',
  sul: 'Zona Sul',
  leste: 'Zona Leste',
  oeste: 'Zona Oeste',
  industrial: 'Zona Industrial',
};
