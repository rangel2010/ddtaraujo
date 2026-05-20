// Conteúdo expandido para páginas de serviço com mais texto e detalhes.
// Adicione novas entradas usando o slug do serviço como chave.

export type RichSection = {
  title: string;
  paragraphs?: string[];
  list?: { items: string[]; ordered?: boolean };
  closingParagraphs?: string[];
};

export const richContent: Record<string, RichSection[]> = {
  'controle-de-morcegos-em-londrina': [
    {
      title: 'Morcegos no telhado ou no forro',
      paragraphs: [
        'Muitos clientes entram em contato quando percebem sinais da presença de morcegos em suas residências ou empresas. Quando uma colônia se instala em uma estrutura, ela pode permanecer no local por muito tempo se não houver intervenção adequada. Os sinais mais comuns incluem:',
      ],
      list: {
        items: [
          'Barulho no telhado ou forro durante a noite',
          'Presença de fezes no chão ou próximas às paredes',
          'Manchas escuras próximas a entradas no telhado',
          'Odor forte causado pelo acúmulo de guano (fezes de morcegos)',
          'Visualização de morcegos saindo do telhado ao entardecer',
        ],
      },
    },
    {
      title: 'Problemas causados por morcegos',
      paragraphs: [
        'Embora desempenhem papel importante no equilíbrio ecológico, os morcegos podem causar diversos problemas quando se instalam em edificações urbanas. Entre os principais estão:',
      ],
      list: {
        items: [
          'Acúmulo de fezes (guano)',
          'Odor forte no ambiente',
          'Contaminação de superfícies',
          'Presença de parasitas associados',
          'Risco de transmissão de doenças',
        ],
      },
      closingParagraphs: [
        'Além disso, o acúmulo de fezes pode deteriorar estruturas e gerar condições insalubres no ambiente.',
      ],
    },
    {
      title: 'Onde os morcegos costumam se instalar',
      paragraphs: [
        'Em áreas urbanas, os morcegos costumam utilizar locais protegidos para abrigo durante o dia. Os mais comuns são:',
      ],
      list: {
        items: [
          'Telhados de residências',
          'Forros de madeira ou PVC',
          'Sótãos',
          'Galpões industriais',
          'Vãos estruturais',
          'Estruturas metálicas',
          'Marquises e beirais',
        ],
      },
    },
    {
      title: 'Controle de morcegos dentro da legislação',
      paragraphs: [
        'Os morcegos são animais silvestres protegidos pela legislação ambiental brasileira. O manejo desses animais deve seguir normas específicas e ser realizado por profissionais capacitados.',
        'A Araújo realiza o controle de morcegos respeitando as diretrizes ambientais e utilizando métodos apropriados para o desalojamento seguro das colônias. O objetivo do serviço é afastar os morcegos da estrutura sem causar danos aos animais, garantindo também a segurança dos moradores ou ocupantes do imóvel.',
      ],
    },
    {
      title: 'Onde atendemos',
      paragraphs: [
        'A Araújo atende Londrina e todo o estado do Paraná com serviços especializados de controle de morcegos e desalojamento de colônias. Nossa equipe realiza avaliação técnica do local para identificar o tipo de infestação e definir a melhor solução para cada caso. Atendemos:',
      ],
      list: {
        items: [
          'Residências',
          'Condomínios',
          'Empresas',
          'Galpões industriais',
          'Estabelecimentos comerciais',
          'Prédios e estruturas urbanas',
        ],
      },
    },
  ],

  'limpeza-de-caixas-de-agua-em-londrina': [
    {
      title: 'Por que a limpeza de caixa de água é tão importante?',
      paragraphs: [
        'Com o tempo, os reservatórios acumulam diversos contaminantes — mesmo quando a água vem tratada da rede pública, a caixa pode se tornar um ponto de contaminação se não houver manutenção periódica. Entre os principais resíduos acumulados:',
      ],
      list: {
        items: [
          'Lodo e sedimentos',
          'Ferrugem',
          'Microrganismos (bactérias, fungos e algas)',
          'Insetos e resíduos orgânicos',
          'Contaminação cruzada por vedação inadequada',
        ],
      },
      closingParagraphs: [
        'A limpeza periódica previne riscos à saúde e evita problemas como doenças gastrointestinais, mau cheiro na água, alteração de cor ou sabor e entupimentos na rede hidráulica.',
      ],
    },
    {
      title: 'Documentação que você recebe após o serviço',
      paragraphs: [
        'Todos os equipamentos são higienizados antes e após o procedimento. Ao final, o cliente recebe:',
      ],
      list: {
        items: [
          'Laudo técnico assinado',
          'Relatório do procedimento executado',
          'Registro fotográfico do antes e depois',
          'Comprovação conforme normas sanitárias',
          'Procedimentos operacionais utilizados',
        ],
      },
    },
    {
      title: 'Também realizamos',
      list: {
        items: [
          'Limpeza de cisternas',
          'Higienização de reservatórios industriais',
          'Manutenção preventiva em sistemas de armazenamento',
        ],
      },
    },
    {
      title: 'Atendemos Londrina e todo o Paraná',
      paragraphs: [
        'Com mais de 40 anos de experiência, a Araújo é referência em serviços de higienização técnica e controle sanitário. Realizamos limpeza de caixa de água em Londrina e em todo o Paraná, atendendo:',
      ],
      list: {
        items: [
          'Residências',
          'Condomínios',
          'Escolas',
          'Hospitais',
          'Indústrias',
          'Comércios',
        ],
      },
    },
  ],

  'descupinizacao': [
    {
      title: 'As duas espécies que atacam imóveis urbanos',
      paragraphs: [
        'O tratamento contra cupins depende inteiramente de qual espécie está infestando o imóvel. As duas mais comuns em ambiente urbano têm comportamentos completamente diferentes — confundir uma com a outra significa aplicar o tratamento errado.',
      ],
      list: {
        items: [
          'Cupim de madeira seca (Cryptotermes brevis) — ataca diretamente móveis, portas, rodapés, armários, batentes e estruturas de madeira. Vive dentro da própria madeira infestada, sem precisar de contato com solo. Forma colônias menores e mais discretas, que podem permanecer ocultas por anos. O sinal mais característico é a presença de pequenos grânulos (parecidos com pó ou serragem fina) próximos aos móveis infestados.',
          'Cupim subterrâneo (Coptotermes) — vive no solo e constrói túneis de terra para alcançar fontes de madeira. Invade edificações através de fundações, rachaduras ou pontos de contato direto com o solo. Forma colônias gigantes (centenas de milhares de indivíduos) e pode comprometer estruturas inteiras em poucos meses. É a espécie mais perigosa em obras e construções.',
        ],
      },
    },
    {
      title: 'Por que cupim é mais perigoso que outras pragas',
      paragraphs: [
        'Diferente de baratas, ratos ou formigas — que você vê e sabe que tem —, o cupim trabalha em silêncio absoluto. Quando a infestação fica visível, o estrago já está avançado.',
      ],
      list: {
        items: [
          'Atacam de dentro pra fora — madeira parece intacta por fora, mas pode estar oca por dentro',
          'Comprometem estrutura física do imóvel (vigas, batentes, escadas, telhado)',
          'Danificam móveis caros, antiguidades e armários planejados',
          'Atacam documentos, livros, papelão e outros materiais de celulose',
          'Reduzem o valor de revenda do imóvel quando descobertos por compradores',
          'Em casos avançados, podem causar desabamentos parciais',
          'A infestação raramente é detectada antes de 6 meses a 2 anos após o início',
        ],
      },
    },
    {
      title: 'Os três níveis de tratamento contra cupins',
      paragraphs: [
        'Dependendo do estágio da infestação e da espécie identificada, aplicamos um ou mais dos três tipos de tratamento.',
      ],
      list: {
        items: [
          'Tratamento curativo focal — para infestações localizadas em móveis ou pontos específicos. Aplicação direta nos furos de saída do cupim, com produto cupinicida transmissível pela colônia. Eficaz contra cupim de madeira seca em itens individuais.',
          'Barreira química preventiva no solo — aplicada em obras novas (durante ou logo após o contrapiso) ou ao redor de estruturas existentes em risco. Impede o cupim subterrâneo de chegar à madeira. É o tratamento que recebe garantia estendida de até 5 anos em contratos preventivos.',
          'Tratamento estrutural — para infestações já estabelecidas no imóvel. Combina pulverização, injeção em vigas e batentes, aplicação de gel/iscas e, quando necessário, barreira química perimetral. Indicado para casas antigas, imóveis com madeira de lei e edifícios históricos.',
        ],
      },
      closingParagraphs: [
        'Em todos os casos, a Araújo emite laudo técnico detalhado com os produtos utilizados (registros ANVISA), espécie identificada e prazos de garantia aplicáveis ao caso específico.',
      ],
    },
    {
      title: 'Para quem é o serviço de descupinização',
      paragraphs: [
        'Atendemos todo tipo de imóvel onde há madeira, móveis ou contato direto com solo — que é praticamente qualquer construção.',
      ],
      list: {
        items: [
          'Residências (especialmente casas antigas e em bairros arborizados)',
          'Apartamentos com móveis planejados ou estruturas de madeira',
          'Casas de madeira (perfil comum em bairros como Vila Casoni)',
          'Imóveis de alto padrão com madeira de lei',
          'Obras em construção (tratamento preventivo no solo)',
          'Galpões, depósitos e estruturas com madeira',
          'Edifícios históricos e imóveis tombados',
          'Empresas com móveis planejados ou estoques em paletes',
        ],
      },
      closingParagraphs: [
        'Para imóveis em construção, recomendamos fortemente a aplicação preventiva de barreira química no solo antes do contrapiso — é o investimento mais econômico contra cupim subterrâneo, e a única forma de receber a garantia estendida de até 5 anos.',
      ],
    },
  ],

  'controle-de-pombos-em-londrina': [
    {
      title: 'Por que os pombos viraram problema urbano',
      paragraphs: [
        'Embora pareçam inofensivos, os pombos urbanos causam impactos significativos quando se instalam em edificações. Os danos vão de estruturais a sanitários — e tendem a piorar com o tempo se nada for feito.',
      ],
      list: {
        items: [
          'Danificam telhados ao mover telhas e pisar em estruturas frágeis',
          'Entopem calhas com penas, ninhos e fezes acumuladas',
          'Constroem ninhos em locais inadequados (sacadas, ar-condicionado, sótãos)',
          'Produzem grande quantidade de fezes (cada pombo expele até 12 kg por ano)',
          'Causam mau cheiro persistente em áreas com colônias estabelecidas',
          'Deterioram pintura, concreto e metal pela acidez das fezes',
          'Geram desconforto sonoro com arrulhos contínuos',
        ],
      },
    },
    {
      title: 'Doenças e parasitas que os pombos trazem',
      paragraphs: [
        'Os pombos não são só um problema visual. São vetores de doenças graves e carregam consigo um ecossistema de parasitas que migra para o ambiente humano.',
      ],
      list: {
        items: [
          'Criptococose — causada por fungos presentes nas fezes secas. Pode afetar pulmões e sistema nervoso, especialmente em pessoas imunossuprimidas.',
          'Histoplasmose — doença respiratória causada pela inalação de esporos liberados quando fezes secas são removidas sem proteção adequada.',
          'Salmonelose — infecção bacteriana por contaminação ambiental ou de alimentos próximos.',
          'Ornitose / Psitacose — doença respiratória transmissível por inalação de poeira contaminada.',
        ],
      },
      closingParagraphs: [
        'Além das doenças, os pombos transportam carrapatos, pulgas, ácaros e piolhos — quando o ninho é abandonado, esses parasitas procuram novos hospedeiros no ambiente. Por isso o manejo profissional sempre inclui descontaminação do local após a exclusão das aves.',
      ],
    },
    {
      title: 'Métodos de exclusão e manejo profissional',
      paragraphs: [
        'O controle de pombos é feito por exclusão estrutural — ou seja, tornar o local inacessível ou desconfortável para pouso e nidificação, sem causar danos aos animais. Conforme normas ambientais, não usamos métodos letais.',
      ],
      list: {
        items: [
          'Espículas anti-pouso — hastes finas em aço inox instaladas em platibandas, beirais e topos de muros. Impedem o pouso sem ferir.',
          'Telas de proteção — fechamento de vãos, sacadas e respiros com tela específica anti-pombo (malha calculada para a espécie).',
          'Sistema de fios anti-pouso — fios tensionados em paralelo, ideais para fachadas onde espículas seriam visíveis.',
          'Barreiras físicas — vedação de pontos de acesso a ninhos (frestas em telhados, ar-condicionado, dutos).',
          'Repelentes em gel ou ultrassônicos — usados em ambientes específicos como complemento aos sistemas físicos.',
          'Captura e manejo seguro — em casos de colônia já estabelecida, com soltura em área apropriada.',
        ],
      },
      closingParagraphs: [
        'Cada projeto é avaliado individualmente — escolhemos o método (ou combinação) que melhor se adapta à arquitetura do imóvel e ao orçamento. Os sistemas são discretos, eficazes, e contam com garantia escrita de 1 a 5 anos conforme a solução instalada.',
      ],
    },
    {
      title: 'Onde fazemos manejo de pombos',
      paragraphs: [
        'Atendemos todo tipo de estrutura onde pombos costumam se instalar.',
      ],
      list: {
        items: [
          'Edifícios residenciais (fachadas, sacadas, ar-condicionado)',
          'Condomínios verticais e horizontais (áreas comuns, garagens)',
          'Galpões industriais e armazéns',
          'Indústrias alimentícias (questão sanitária crítica)',
          'Estabelecimentos comerciais (vitrines, marquises, fachadas)',
          'Igrejas, templos e prédios históricos',
          'Escolas, hospitais e clínicas',
          'Estações, terminais e estruturas públicas',
        ],
      },
      closingParagraphs: [
        'Para imóveis com colônias muito estabelecidas, recomendamos primeiro a descontaminação completa do local (remoção de fezes, ninhos e resíduos) antes da instalação dos sistemas de exclusão — garantindo ambiente saudável e impedindo retorno.',
      ],
    },
  ],

  'dedetizacao-para-escorpioes-em-londrina': [
    {
      title: 'As duas espécies de escorpião que preocupam no Brasil',
      paragraphs: [
        'Existem cerca de 160 espécies de escorpiões no Brasil, mas duas concentram quase todos os acidentes graves registrados. Conhecê-las ajuda a entender o risco e a urgência do controle.',
      ],
      list: {
        items: [
          'Tityus serrulatus (escorpião amarelo) — espécie mais comum em Londrina e responsável pela MAIORIA dos acidentes graves no Brasil. Possui veneno potente e — agravante — se reproduz por partenogênese: fêmeas geram filhotes sem precisar de macho, o que acelera dramaticamente a infestação. Uma única fêmea em ambiente favorável vira colônia em pouco tempo.',
          'Tityus bahiensis (escorpião marrom) — também encontrado na região, com veneno menos potente que o amarelo, mas ainda assim perigoso. Comportamento mais "tradicional" (reprodução sexuada), com colônias menores.',
        ],
      },
      closingParagraphs: [
        'Os dois são animais peçonhentos — possuem veneno que pode ser inoculado pelo ferrão. Em casos não tratados rapidamente com soro antiescorpiônico, o envenenamento pode levar à morte, especialmente em crianças e idosos.',
      ],
    },
    {
      title: 'Por que a infestação cresce a cada ano',
      paragraphs: [
        'Casos de acidente com escorpião subiram consistentemente nas últimas duas décadas em Londrina e em todo o Brasil. Cinco fatores combinados explicam essa escalada urbana.',
      ],
      list: {
        items: [
          'Urbanização desordenada — esgoto exposto, terrenos baldios com entulho e construções abandonadas criam abrigos ideais',
          'Aumento da população de baratas urbanas — barata é alimento principal do escorpião amarelo. Onde tem barata, escorpião encontra restaurante 24h',
          'Capacidade reprodutiva única — Tityus serrulatus se reproduz por partenogênese (sem macho), o que duplica ou quadruplica colônias em poucos meses',
          'Mudanças climáticas — verões mais quentes e úmidos favorecem reprodução',
          'Falta de controle profissional preventivo — moradores tentam soluções caseiras que afastam o problema temporariamente sem eliminá-lo',
        ],
      },
    },
    {
      title: 'Sintomas da picada e primeiros socorros',
      paragraphs: [
        'Saber reconhecer os sintomas e agir rápido pode salvar uma vida — principalmente quando a vítima é criança, idoso ou cardiopata. Em qualquer caso de picada confirmada, vá imediatamente ao pronto-socorro.',
      ],
      list: {
        items: [
          'Dor intensa imediata no local da picada (queimação que irradia)',
          'Formigamento e inchaço ao redor',
          'Sudorese e taquicardia',
          'Náuseas e vômitos',
          'Em crianças: agitação, choro inconsolável e palidez',
          'Casos graves: complicações neurológicas e cardíacas em poucas horas',
        ],
      },
      closingParagraphs: [
        'O que fazer: Vá ao pronto-socorro IMEDIATAMENTE — não espere os sintomas piorarem. Se possível, leve o animal (mesmo morto) para identificação correta da espécie. O que NÃO fazer: torniquete, sucção, corte, álcool ou qualquer "receita caseira" — só atrasam o atendimento. O tratamento envolve soro antiescorpiônico em casos indicados pelo médico, e o tempo é crítico.',
      ],
    },
    {
      title: 'Onde fazemos controle de escorpiões',
      paragraphs: [
        'Atendemos qualquer local com histórico ou risco de presença de escorpiões. Em todos os casos, o protocolo integra pulverização seletiva + controle de baratas (alimento principal) + orientação de vedação — tratar só os escorpiões sem cuidar das baratas é deixar a porta aberta para retorno.',
      ],
      list: {
        items: [
          'Residências com histórico de avistamento',
          'Casas próximas a terrenos baldios ou áreas verdes',
          'Condomínios verticais e horizontais',
          'Áreas industriais e comerciais',
          'Construções com madeira armazenada ou entulho',
          'Escolas, creches e clínicas (prioridade absoluta pela presença de crianças)',
          'Áreas rurais e sítios',
        ],
      },
      closingParagraphs: [
        'Para regiões com alto histórico de acidentes (bairros que estão em listas de incidências da vigilância sanitária), recomendamos contrato de manutenção preventiva trimestral — o custo é baixo comparado ao risco de um acidente grave em casa.',
      ],
    },
  ],

  'desratizacao': [
    {
      title: 'As três principais espécies de ratos urbanos',
      paragraphs: [
        'Conhecer a espécie é parte essencial do controle. Em ambientes urbanos brasileiros, três espécies dominam o cenário — cada uma com comportamento, abrigo e estratégias de controle diferentes.',
      ],
      list: {
        items: [
          'Rato de telhado (Rattus rattus): conhecido como rato preto, de paiol ou de navio. Corpo esguio, cauda longa, hábil escalador. Habita forros, sótãos, paióis e telhados. Raio de ação em torno de 60 metros. Prefere legumes, frutas e grãos.',
          'Ratazana / Rato de esgoto (Rattus norvegicus): também conhecida como gabiru. Corpo robusto, orelhas pequenas. Habita tocas e galerias no solo, próximo a córregos, lixões e interior de edificações. Hábil nadadora e escavadora. Raio de ação de cerca de 50 metros. Onívora, com preferência por grãos, carnes e frutas.',
          'Camundongo (Mus musculus): conhecido como catita ou rato de gaveta. Corpo pequeno e esguio, orelhas proeminentes. Faz ninhos no fundo de gavetas e armários pouco utilizados. Pode permanecer longo período sem ser notado. Raio de ação curto, raramente ultrapassa 3 metros.',
        ],
      },
    },
    {
      title: 'Sinais que indicam infestação',
      paragraphs: [
        'Ratos são noturnos e cautelosos — você raramente vê o animal antes que a colônia esteja grande. Os sinais que eles deixam é o que denuncia a presença.',
      ],
      list: {
        items: [
          'Fezes espalhadas pelo local (forma e tamanho ajudam a identificar a espécie)',
          'Embalagens roídas, sacos de ração ou papel com marcas',
          'Barulhos em forros ou paredes durante a madrugada',
          'Marcas de gordura nas paredes (trilhas onde o pelo encosta)',
          'Trilhas ou caminhos frequentes em locais com poeira',
          'Odores fortes em locais fechados (urina acumulada)',
        ],
      },
      closingParagraphs: [
        'Ao perceber qualquer um desses sinais, é importante procurar uma empresa especializada. Quanto mais cedo a ação, mais simples e barato é o controle.',
      ],
    },
    {
      title: 'Doenças e prejuízos causados pelos ratos',
      paragraphs: [
        'Os ratos não são só incômodo — representam risco real à saúde e ao patrimônio.',
      ],
      list: {
        items: [
          'Leptospirose — transmitida pela urina, comum em alagamentos',
          'Salmonelose — contaminação por alimentos',
          'Hantavirose — doença respiratória grave por aerossol de fezes secas',
          'Tifo Murino — transmitido por pulgas dos ratos',
          'Febre da mordedura do rato — direta, em casos de mordida',
          'Contaminação direta de alimentos armazenados',
          'Danos em fiações elétricas (risco real de incêndio)',
          'Prejuízos em estoques, embalagens e mercadorias',
          'Deterioração de estruturas (madeira, isolamento, drywall)',
        ],
      },
    },
    {
      title: 'Para quem é o serviço de desratização profissional',
      paragraphs: [
        'Atuamos no controle de roedores em todos os segmentos, com abordagens específicas para cada tipo de ambiente.',
      ],
      list: {
        items: [
          'Residências e condomínios',
          'Restaurantes, lanchonetes e padarias',
          'Supermercados e mercados de bairro',
          'Indústrias alimentícias e armazéns',
          'Hospitais, clínicas e farmácias',
          'Hotéis e pousadas',
          'Escolas e creches',
          'Empresas com programa de qualidade (ISO 22000, BRC, FSSC 22000)',
        ],
      },
      closingParagraphs: [
        'Para estabelecimentos com fiscalização sanitária frequente, recomendamos o contrato CIPV (Controle Integrado de Pragas e Vetores) com visitas programadas e documentação técnica completa para auditorias.',
      ],
    },
  ],

  'controle-de-pragas-em-londrina': [
    {
      title: 'A metodologia do CIPV em 6 pilares',
      paragraphs: [
        'Diferente de uma dedetização que executa e vai embora, o CIPV é um sistema operacional que roda continuamente no seu estabelecimento. Seis pilares sustentam o programa.',
      ],
      list: {
        items: [
          'Inspeção contínua de pontos críticos — vistorias técnicas periódicas em áreas externas, internas, áreas de produção, estoque, refeitório, banheiros, lixeiras e perímetro do imóvel',
          'Monitoramento com dispositivos específicos — porta-iscas lacrados com chave, armadilhas luminosas para insetos voadores, armadilhas adesivas, dispositivos de captura por espécie identificada',
          'Aplicações direcionadas (não em massa) — uso de produto apenas onde houver indicação técnica, com foco em redução de impacto ambiental e químico',
          'Análise estrutural — identificação de pontos de entrada, frestas, vedações precárias, áreas com umidade, fontes de atração — com plano de correção orientado',
          'Documentação técnica completa — laudos, mapas de monitoramento, relatórios de visita, registro de produtos com concentrações e registros ANVISA, manuais de procedimentos',
          'Treinamento da equipe interna do cliente — orientação para que funcionários reconheçam sinais, reportem ocorrências e atuem como "olhos extras" entre as visitas técnicas',
        ],
      },
    },
    {
      title: 'Quem é obrigado a ter CIPV ativo',
      paragraphs: [
        'Por exigência regulatória da ANVISA, das vigilâncias sanitárias estaduais e municipais, e das principais certificações de qualidade, certos segmentos não podem operar legalmente sem programa contínuo de controle de pragas.',
      ],
      list: {
        items: [
          'Indústrias alimentícias — frigoríficos, panificadoras industriais, fábricas de alimentos, laticínios',
          'Estabelecimentos com manipulação de alimentos — restaurantes, lanchonetes, padarias, supermercados (RDC 622/2022 da ANVISA exige periodicidade mínima mensal)',
          'Hospitais, clínicas, laboratórios e farmácias — pela presença de pacientes vulneráveis e exigência sanitária',
          'Hotéis, pousadas e resorts — pelo fluxo de público e exigência das classificações',
          'Empresas com certificação ISO 22000, BRC, FSSC 22000 ou HACCP — controle de pragas é item de auditoria obrigatório',
          'Escolas, creches e universidades — por proteger crianças e adolescentes',
          'Indústria farmacêutica e cosmética — controle ambiental crítico para produção',
          'Centros logísticos e armazéns gerais — exigência de clientes corporativos e seguradoras',
        ],
      },
      closingParagraphs: [
        'Auditoria sem CIPV ativo significa autuação garantida e, em casos graves, suspensão de alvará ou interdição da operação. Não vale o risco.',
      ],
    },
    {
      title: 'CIPV x dedetização pontual: a diferença na prática',
      paragraphs: [
        'Muitos gestores começam achando que dedetização contratada esporadicamente já cumpre a função. Não cumpre. A diferença vai muito além de "mais visitas".',
      ],
      list: {
        items: [
          'Postura: reativa x preventiva — dedetização ataca quando a praga aparece. CIPV impede que apareça.',
          'Frequência: pontual x contínua — dedetização é evento isolado. CIPV é processo permanente com cronograma fixo',
          'Documentação: laudo simples x dossiê completo — dedetização emite um laudo do serviço. CIPV mantém histórico técnico, mapa de pontos, relatórios mensais e documentação para auditoria externa',
          'Custo total: cada chamada x contrato previsível — chamadas emergenciais somadas podem custar mais que um contrato CIPV ao longo do ano, e ainda deixam o estabelecimento exposto entre uma e outra',
          'Risco regulatório: alto x baixo — sem CIPV ativo, qualquer fiscalização surpresa pega o estabelecimento em descumprimento',
          'Imagem perante clientes corporativos — empresas grandes exigem que fornecedores tenham CIPV ativo. Sem programa, você perde contratos antes mesmo de propor',
        ],
      },
    },
    {
      title: 'Onde implantamos CIPV em Londrina e região',
      paragraphs: [
        'Operamos CIPV há mais de quatro décadas em todos os segmentos onde o programa é exigido ou recomendado.',
      ],
      list: {
        items: [
          'Frigoríficos e abatedouros',
          'Panificadoras industriais e padarias com produção própria',
          'Fábricas de alimentos, bebidas e laticínios',
          'Hospitais, clínicas, postos de saúde e laboratórios',
          'Supermercados, mercados e atacadistas',
          'Restaurantes, lanchonetes e redes de fast food',
          'Hotéis, pousadas, motéis e resorts',
          'Escolas, creches, universidades e centros de pesquisa',
          'Indústria farmacêutica, cosmética e veterinária',
          'Centros logísticos, armazéns e depósitos gerais',
          'Empresas com certificação ISO 22000, BRC, FSSC 22000 ou HACCP',
          'Condomínios verticais de grande porte com restaurantes ou áreas comerciais',
        ],
      },
      closingParagraphs: [
        'Cada operação tem um plano sob medida — a periodicidade (semanal, quinzenal ou mensal), os dispositivos instalados, os relatórios entregues e o escopo do contrato são desenhados a partir do diagnóstico inicial do seu estabelecimento. Solicite uma visita técnica para receber proposta personalizada.',
      ],
    },
  ],
};
