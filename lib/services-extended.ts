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
          'Geram desconforto sonoro com barulhos contínuos',
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

  'dedetizacao-de-percevejos-em-londrina': [
    {
      title: 'Como identificar uma infestação de percevejos',
      paragraphs: [
        'Percevejos de cama são minúsculos (4-5mm), achatados e cor de café — perfeitamente camuflados em colchões e tecidos escuros. Você raramente vê o animal antes de identificar os sinais que ele deixa. Saber reconhecê-los rápido é o que separa uma infestação resolvível de um pesadelo de meses.',
      ],
      list: {
        items: [
          'Picadas na pele em fileiras ou agrupadas (geralmente em braços, pernas e pescoço) — aparecem após dormir',
          'Coceira intensa e vermelhidão no local da picada (algumas pessoas têm reação alérgica forte)',
          'Manchas pretas pequenas em lençóis, colchões e cabeceiras (fezes secas)',
          'Manchas de sangue no lençol (animal esmagado durante o sono)',
          'Cascas/exúvias claras encontradas em cantos do colchão (mudas durante o crescimento)',
          'Ovos brancos minúsculos (1mm) agrupados em frestas e costuras de móveis',
          'Odor característico adocicado em ambientes com infestação grande',
          'Insetos visíveis em costuras de colchões, cabeceiras, tomadas e atrás de quadros (geralmente à noite)',
        ],
      },
      closingParagraphs: [
        'A diferença entre uma picada de percevejo e de pernilongo é o padrão: percevejos picam várias vezes seguidas formando linhas ou agrupamentos. Pernilongos picam dispersos. Se as picadas aparecem só após dormir e seguem um padrão linear, há altíssima chance de infestação.',
      ],
    },
    {
      title: 'Como os percevejos entram em casa',
      paragraphs: [
        'Percevejos não vêm "do nada". Eles são transportados — quase sempre involuntariamente pelo próprio morador ou visitante. Conhecer os vetores ajuda a prevenir reincidência.',
      ],
      list: {
        items: [
          'Hospedagens infestadas — hotéis, pousadas, motéis e Airbnbs. Os insetos entram na bagagem',
          'Móveis e colchões usados — compra de segunda mão sem inspeção rigorosa é a principal causa em residências',
          'Visitas e hóspedes — pessoas que estiveram em ambientes infestados podem trazer em roupas e bagagem',
          'Mudanças e carregamento — caminhões e empresas de mudança que transportam móveis de imóveis infestados',
          'Viagens de avião e ônibus — assentos e compartimentos de bagagem podem hospedar temporariamente',
          'Compartilhamento de paredes — em apartamentos, podem migrar entre unidades por tomadas e rachaduras',
        ],
      },
      closingParagraphs: [
        'Ao voltar de uma viagem suspeita: lave todas as roupas em água quente (acima de 60°C) ou coloque na secadora em alta temperatura por 30 minutos. Inspecione a bagagem antes de levar pra dentro de casa.',
      ],
    },
    {
      title: 'Por que percevejos exigem protocolo especial',
      paragraphs: [
        'Percevejos são a praga mais difícil de eliminar em ambiente doméstico — não por falta de produto eficaz, mas por características biológicas que tornam o controle desafiador.',
      ],
      list: {
        items: [
          'Resistência crescente — populações modernas desenvolveram resistência a vários inseticidas comuns. Por isso usamos combinação de técnicas (química + térmica + mecânica)',
          'Ovos não são atingidos por produto comum — a casca dos ovos protege contra a maioria dos químicos. Por isso o RETORNO obrigatório em 14 a 21 dias é essencial: mata as ninfas que eclodiram depois da primeira aplicação',
          'Esconderijos múltiplos — colchões, cabeceiras, rodapés, tomadas, atrás de quadros, costuras de poltronas. Uma única omissão na inspeção compromete tudo',
          'Sobrevivência longa sem alimento — adultos sobrevivem até 1 ano sem se alimentar, esperando o ambiente "esvaziar"',
          'Ciclo de vida resiliente — ovo → ninfa → adulto em 30-45 dias, o que define nossa janela de retorno',
          'Migração entre ambientes — podem migrar de uma sala para outra pelo rodapé, especialmente sob estresse químico',
        ],
      },
      closingParagraphs: [
        'Por tudo isso, nosso protocolo é multi-etapas: pulverização residual + vapor a alta temperatura (mata ovos e adultos por contato) + pó dessecante em frestas + retorno obrigatório. Resultado: 2 a 3 aplicações em 30 a 45 dias com eliminação completa.',
      ],
    },
    {
      title: 'Como preparar o ambiente antes da aplicação',
      paragraphs: [
        'Sucesso do tratamento depende da preparação prévia. Entregamos checklist detalhado ao cliente, mas em linhas gerais:',
      ],
      list: {
        items: [
          'Aspirar minuciosamente colchões, cabeceiras, sofás e rodapés (descartar o saco do aspirador em saco lacrado imediatamente)',
          'Lavar TODOS os tecidos (roupas de cama, cortinas, roupas no armário, capas) em água quente acima de 60°C',
          'Itens não laváveis: colocar em secadora por 30 minutos em temperatura alta, ou em sacos pretos ao sol forte por 4-6 horas',
          'Esvaziar gavetas, criados-mudos e armários próximos à cama',
          'Afastar móveis das paredes pelo menos 20cm pra acesso técnico',
          'Remover quadros e objetos das paredes do quarto afetado',
          'Aspirar ralos, frestas em rodapés e tomadas (com adaptador)',
          'Selar saída do aspirador e descartar em saco lacrado FORA da residência',
        ],
      },
      closingParagraphs: [
        'Atendemos hotéis, pousadas e motéis com discrição absoluta — protocolo executado fora do horário comercial, equipe sem identificação visual e cuidado redobrado com a reputação do estabelecimento. Histórico de infestação não fica registrado em laudos sem autorização do cliente.',
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

  'dedetizacao-em-londrina': [
    {
      title: 'As pragas urbanas que combatemos',
      paragraphs: [
        'Dedetização é o termo genérico que cobre o controle de praticamente qualquer praga urbana. Em mais de 40 anos atendendo Londrina, montamos protocolos específicos para cada uma.',
      ],
      list: {
        items: [
          'Baratas — de cozinha (Blatella germânica) e americanas (Periplaneta americana)',
          'Ratos e roedores — rato de telhado, ratazana e camundongo',
          'Cupins — de madeira seca e subterrâneos',
          'Formigas — doméstica, faraó, lava-pé, cortadeiras',
          'Escorpiões — Tityus serrulatus (amarelo) e Tityus bahiensis (marrom)',
          'Aranhas — incluindo armadeira e marrom (peçonhentas)',
          'Pulgas e carrapatos — em residências, sítios e canis',
          'Percevejos de cama — em colchões, estofados e hotéis',
          'Moscas, mosquitos e pernilongos',
          'Pombos e morcegos — manejo ecológico conforme normas ambientais',
          'Pragas específicas como traças, lacraias, tatuzinhos e outros invertebrados',
        ],
      },
      closingParagraphs: [
        'Cada praga exige produto, dosagem e técnica diferente. Identificar corretamente a espécie é metade do trabalho — o resto é aplicar o protocolo certo.',
      ],
    },
    {
      title: 'Como escolhemos a técnica certa para cada caso',
      paragraphs: [
        'Não existe "uma" dedetização — existem várias técnicas, escolhidas conforme a praga, o ambiente e a sensibilidade do local. A escolha errada significa baixa eficácia, risco desnecessário ou desconforto pros ocupantes.',
      ],
      list: {
        items: [
          'Gel inseticida — pontos discretos em cozinhas e ambientes sensíveis, sem cheiro e sem necessidade de evacuar o espaço',
          'Pulverização residual — produto líquido aplicado em rodapés, frestas e abrigos, com efeito de longa duração',
          'Polvilhamento — pó inseticida em locais secos e de difícil acesso (forros, frestas, caixas elétricas)',
          'Atomização (UBV — Ultra Baixo Volume) — partículas microscópicas que cobrem grandes áreas, ideal para galpões e ambientes amplos',
          'Termonebulização — fumaça inseticida penetrante, para áreas externas e estruturas com muitos esconderijos',
          'Porta-iscas lacrados — controle de roedores com segurança total para crianças e pets',
          'Barreira química no solo — para cupim subterrâneo e prevenção em obras novas',
          'Manejo ecológico — desalojamento e exclusão para morcegos e pombos, conforme legislação ambiental',
        ],
      },
      closingParagraphs: [
        'Combinações são comuns: uma residência com baratas e formigas pode receber gel em cozinha + pulverização em ralos + iscas externas — tudo em uma visita.',
      ],
    },
    {
      title: 'A diferença que 40 anos fazem na prática',
      paragraphs: [
        'Tradição em controle de pragas não é apenas tempo de mercado — é o conhecimento técnico acumulado que separa um serviço eficaz de uma simples aplicação de inseticida.',
      ],
      list: {
        items: [
          'Equipe técnica própria — sem terceirização, com treinamento contínuo em produtos e técnicas',
          'Credenciamento ANVISA, IAP e SESA — em conformidade com a Resolução SESA 1153/2024 e RDC 622/2022',
          'Produtos sempre registrados — usamos apenas inseticidas com registro no Ministério da Saúde, com laudo entregue ao cliente',
          'Identificação correta de espécies — diagnóstico técnico antes da aplicação, não "pulveriza e reza"',
          'GAT — Garantia de Assistência Técnica escrita em todo serviço, com retornos sem custo dentro do prazo',
          'Histórico de clientes — milhares de residências, condomínios, indústrias e empresas atendidos em Londrina e região',
          'Equipamentos modernos — atualizamos constantemente os equipamentos de aplicação para garantir eficácia e segurança',
        ],
      },
    },
    {
      title: 'Onde fazemos dedetização',
      paragraphs: [
        'Atendemos todos os tipos de ambiente em Londrina e em todo o Paraná. Para cada perfil, um protocolo adequado.',
      ],
      list: {
        items: [
          'Residências (casas, apartamentos, sobrados)',
          'Condomínios verticais e horizontais — áreas comuns, garagens, salões',
          'Comércios em geral — lojas, escritórios, salões',
          'Restaurantes, lanchonetes e padarias — com atendimento fora do horário comercial',
          'Hotéis, pousadas e motéis — com discrição',
          'Indústrias e galpões — alimentícia, farmacêutica, logística',
          'Hospitais, clínicas e laboratórios — com produtos compatíveis',
          'Escolas, creches e universidades',
          'Sítios, chácaras e propriedades rurais',
        ],
      },
      closingParagraphs: [
        'Para estabelecimentos com fiscalização sanitária frequente (alimentos, saúde, hotelaria), recomendamos contrato CIPV — programa contínuo que substitui dedetizações pontuais com atendimento programado e documentação completa para auditorias.',
      ],
    },
  ],

  'desinsetizacao': [
    {
      title: 'O que é desinsetização e quais insetos ela cobre',
      paragraphs: [
        'Desinsetização é o termo técnico usado para o combate direto a insetos urbanos — uma das três grandes vertentes do controle de pragas (junto com desratização e desinfecção). Engloba dezenas de espécies que afetam residências, comércios e indústrias diariamente.',
      ],
      list: {
        items: [
          'Insetos rasteiros — baratas (de cozinha e americanas), formigas, lacraias, percevejos e tatuzinhos',
          'Insetos voadores — moscas (domésticas e varejeiras), mosquitos (Aedes, Culex), pernilongos, mosquitinhos de fruta (Drosophila), borrachudos',
          'Pragas associadas a tecidos e papel — traças, mariposas e besouros que atacam roupas e livros',
          'Parasitas externos — pulgas (que infestam ambientes além dos animais)',
          'Insetos sociais com colônias — abelhas (com manejo cuidadoso), vespas e marimbondos em casos de risco',
          'Insetos de estoque — caruncho do feijão, gorgulho do milho e outras pragas de despensa',
        ],
      },
      closingParagraphs: [
        'Cada um desses insetos requer técnica diferente, produto diferente e abordagem diferente. Uma pulverização que funciona contra mosquito não tem efeito sobre baratas em frestas. Por isso a primeira etapa do nosso trabalho é sempre identificar a espécie corretamente.',
      ],
    },
    {
      title: 'As cinco técnicas de aplicação que usamos',
      paragraphs: [
        'Não existe uma "única forma" de fazer desinsetização. Dependendo do inseto, do ambiente e da sensibilidade dos ocupantes, escolhemos uma técnica ou combinação delas. Conhecer cada uma ajuda a entender por que o controle profissional é diferente do inseticida de mercado.',
      ],
      list: {
        items: [
          'Pulverização residual — produto líquido aplicado em frestas, rodapés, atrás de móveis e pontos de passagem. Forma película invisível que mata por contato. Eficaz contra baratas, aranhas, escorpiões. Duração: 3-6 meses',
          'Gel inseticida — gotas microscópicas em pontos discretos. Atrai o inseto, que come e leva pra colônia. Eficaz contra baratas e formigas. Sem cheiro, sem evacuar o ambiente, seguro em cozinhas em uso',
          'Polvilhamento — pó inseticida aplicado em locais secos de difícil acesso (forros, frestas profundas, caixas elétricas, vãos estruturais). Eficaz contra baratas e traças escondidas',
          'Atomização UBV (Ultra Baixo Volume) — produto líquido transformado em névoa de partículas microscópicas que cobre grandes áreas. Ideal para galpões, armazéns e ambientes amplos. Eficaz contra insetos voadores',
          'Termonebulização — fumaça inseticida penetrante, criada por aquecimento. Atinge frestas e cavidades impossíveis por outras técnicas. Usada em áreas externas e estruturas com muitos esconderijos',
        ],
      },
      closingParagraphs: [
        'Combinações são a norma, não exceção. Uma residência com baratas, formigas e moscas pode receber gel em cozinha + pulverização em ralos e rodapés + orientação preventiva — tudo em uma única visita.',
      ],
    },
    {
      title: 'Por que a identificação correta do inseto faz toda diferença',
      paragraphs: [
        'Aplicar produto sem saber qual inseto está infestando é como tomar antibiótico sem diagnóstico. Funciona às vezes, mas é desperdício na maioria. Cada espécie exige protocolo específico.',
      ],
      list: {
        items: [
          'Atratividade do produto varia por espécie — gel doce funciona para formiga-doceira mas é ignorado por formiga lava-pé. Inseticida para baratas não tem efeito sobre mosquitos',
          'Esconderijos variam — barata de cozinha vive em frestas internas. Barata de esgoto vive em galerias externas. Tratar uma como se fosse a outra falha',
          'Ciclo de vida define janela de retorno — percevejos exigem retorno em 14-21 dias por causa da eclosão dos ovos. Baratas têm garantia de 3-6 meses. Aplicar a mesma frequência pra todos é ineficiente',
          'Sensibilidade ao produto varia — populações resistentes existem. Diagnóstico permite escolher o princípio ativo certo, não o que "geralmente funciona"',
          'Sintomas e sinais ajudam a identificar — fezes, exuvias, ovotecas, padrão de picada, horário de aparecimento. Um técnico treinado lê todos esses sinais antes de aplicar nada',
          'Tratamento errado pode piorar — algumas espécies (formiga-faraó) se fragmentam sob estresse químico, multiplicando colônias quando o inseticida é mal escolhido',
        ],
      },
    },
    {
      title: 'Onde fazemos desinsetização',
      paragraphs: [
        'Atendemos qualquer ambiente, com protocolo adaptado ao perfil de uso e à sensibilidade dos ocupantes.',
      ],
      list: {
        items: [
          'Residências (casas, apartamentos, sobrados) — produtos antialérgicos disponíveis',
          'Restaurantes, lanchonetes e padarias — atendimento fora do horário comercial',
          'Hospitais, clínicas e laboratórios — protocolo hospitalar com gel inseticida',
          'Escolas, creches e universidades — atendimento em períodos sem aula',
          'Hotéis, pousadas e motéis — discrição absoluta',
          'Indústrias e galpões — integrado ao programa CIPV quando há fiscalização sanitária',
          'Escritórios e ambientes corporativos — aplicação fora do expediente',
          'Condomínios — áreas comuns e atendimento individual a unidades',
        ],
      },
      closingParagraphs: [
        'Todos os serviços incluem GAT — Garantia de Assistência Técnica com laudo escrito dos produtos utilizados, suas concentrações e registros nos órgãos competentes (ANVISA, IAP, SESA). Sem garantia escrita, não é serviço profissional.',
      ],
    },
  ],

  'dedetizacao-de-carrapatos': [
    {
      title: 'Espécies de carrapato e doenças que transmitem',
      paragraphs: [
        'O carrapato não é só um incômodo pro cachorro coçar — é um dos principais vetores de doenças zoonóticas (que passam de animal pra humano) no Brasil. Três espécies concentram quase todos os atendimentos urbanos.',
      ],
      list: {
        items: [
          'Carrapato-estrela (Amblyomma sclupturatum e similares) — espécie comum em áreas com cavalo, capivara e gado. Principal vetor da febre maculosa brasileira, doença grave que pode ser fatal sem tratamento rápido. Comum em sítios, chácaras, parques e propriedades rurais',
          'Carrapato do cachorro (Rhipicephalus sanguineus) — espécie urbana, especialista em cães. Mais comum nas cidades, transmite erliquiose canina (causa anemia e baixa imunidade no animal) e babesiose. Vive em frestas de muros, casinhas, canis e cantos da casa',
          'Carrapato-bovino (Rhipicephalus microplus) — específico de bovinos, mas pode parasitar outros mamíferos. Mais comum em sítios e fazendas com gado próximo',
        ],
      },
      closingParagraphs: [
        'Em humanos, as principais doenças transmitidas são: febre maculosa (a mais grave, com mortalidade alta sem diagnóstico precoce), doença de Lyme (rara no Brasil mas registrada), e febre Q. Em qualquer caso de picada com sintomas (febre, dor de cabeça intensa, manchas vermelhas), procure pronto-socorro mencionando o contato com carrapato.',
      ],
    },
    {
      title: 'Por que tratar só o cachorro não resolve',
      paragraphs: [
        'Quando o veterinário aplica antipulgas/anticarrapatos no cachorro, ele protege o ANIMAL — mas não elimina os carrapatos do ambiente. E o motivo é estatístico:',
      ],
      list: {
        items: [
          '90% da população de carrapato está no AMBIENTE, não no animal — em muros, frestas, casinhas, canis, cantos de quintal e vegetação',
          'O carrapato passa só uma parte da vida no hospedeiro — sobe pra se alimentar de sangue, depois desce e completa o ciclo no ambiente',
          'Fêmeas adultas se alimentam, descem, escondem-se em frestas e depositam até 4.000 ovos por postura — sem tratamento ambiental, todos esses ovos vão eclodir',
          'Ovos sobrevivem semanas a meses no ambiente sem hospedeiro — esperando a próxima oportunidade',
          'Antipulga no cachorro mata os que sobem nele — mas continua sobrando milhares no quintal pra subir de novo',
          'Sem controle ambiental + tratamento do animal, o ciclo se reconstrói em poucas semanas',
        ],
      },
      closingParagraphs: [
        'Por isso o nosso protocolo SEMPRE inclui orientação para o tratamento simultâneo do animal pelo veterinário — só o controle ambiental sem proteger o pet também não dura, porque o cachorro carrega novos do passeio. A combinação dos dois é o que resolve.',
      ],
    },
    {
      title: 'Como controlamos carrapatos no ambiente',
      paragraphs: [
        'O carrapato vive em frestas, vegetação, casinhas e cantos abrigados. O controle exige atingir esses pontos específicos com produto residual que persiste no ambiente.',
      ],
      list: {
        items: [
          'Vistoria detalhada — identificamos focos críticos: muros e paredes com frestas, casinhas e abrigos do animal, vegetação rasteira em áreas onde o pet circula, cantos protegidos do quintal, depósitos e galpões',
          'Pulverização residual em pontos estratégicos — produto acaricida de longa duração aplicado nas zonas de abrigo. Não pulverizamos área inteira: focamos onde os carrapatos realmente estão',
          'Tratamento de casinhas e abrigos de animais — atenção máxima nesse ponto, é o "ninho" da infestação',
          'Aplicação em frestas de muro e divisas — local clássico de postura de ovos',
          'Segunda aplicação obrigatória em 14-21 dias — quebra o ciclo de eclosão dos ovos que sobreviveram à primeira aplicação. Sem retorno, infestação volta',
          'Produto com baixo impacto para pets após carência — após 4 a 6 horas (com o produto seco), animais podem voltar ao quintal com segurança',
          'Orientação para tratamento simultâneo no veterinário — antipulgas tópico/oral no animal pra evitar que ele traga novos carrapatos dos passeios',
        ],
      },
    },
    {
      title: 'Onde fazemos controle de carrapatos',
      paragraphs: [
        'Atendemos qualquer ambiente com presença ou risco de carrapato.',
      ],
      list: {
        items: [
          'Residências com cães — quintais, casinhas, áreas de circulação do pet',
          'Apartamentos com áreas comuns para pets — playgrounds caninos em condomínios',
          'Canis profissionais e hotéis para animais — controle de carrapato é exigência sanitária',
          'Pet shops com banho e tosa — produtos seguros para o trânsito de animais',
          'Sítios e chácaras — atenção especial pra carrapato-estrela e febre maculosa',
          'Haras e estábulos — áreas com cavalos',
          'Propriedades rurais com gado — combate ao carrapato bovino',
          'Áreas de passagem de capivaras — risco amplificado de febre maculosa',
          'Parques e clubes com público familiar e pets',
        ],
      },
      closingParagraphs: [
        'Para residências e canis com histórico recorrente, recomendamos contrato trimestral com vistoria e reaplicação programada. Custo é baixo e elimina o "ciclo de chamados" que muitos clientes vivem.',
      ],
    },
  ],

  'dedetizacao-de-aranhas': [
    {
      title: 'As três aranhas peçonhentas que preocupam no Brasil',
      paragraphs: [
        'Existem mais de 4 mil espécies de aranha no Brasil, a maioria absolutamente inofensiva e até benéfica (predadora natural de insetos). Mas três espécies concentram quase todos os acidentes graves — e duas delas são comuns na região de Londrina.',
      ],
      list: {
        items: [
          'Aranha-marrom (Loxosceles) — a mais perigosa do Sul do Brasil. Pequena (tamanho de moeda de R$1 com pernas), cor marrom-claro a marrom-escuro, com mancha em formato de violino no cefalotórax. Vive escondida atrás de móveis, em entulhos, dentro de roupas guardadas e calçados. Picada inicialmente indolor, mas o veneno causa necrose tecidual progressiva — pode levar à perda de tecido em casos graves.',
          'Aranha armadeira (Phoneutria) — grande (até 15cm com as pernas), cor castanho-amarelado. Postura agressiva característica (eleva as pernas dianteiras como "armadura"). Comum em jardins, montes de lenha, bananeiras, garagens. Picada extremamente dolorosa, com efeitos neurológicos e cardíacos. Pode ser fatal em crianças.',
          'Viúva-negra (Latrodectus) — pequena, preta brilhante com mancha vermelha em forma de ampulheta no abdome. Menos comum em ambiente residencial, mais em construções rurais e jardins de áreas verdes. Veneno neurotóxico, causando dores intensas e espasmos musculares.',
        ],
      },
      closingParagraphs: [
        'Em qualquer caso de picada suspeita: vá imediatamente ao pronto-socorro. Se possível, leve a aranha (mesmo morta) para identificação correta da espécie — o soro antiaracnídico é específico por gênero e o tempo é crítico, especialmente para armadeira e viúva-negra.',
      ],
    },
    {
      title: 'Por que aranhas aparecem dentro de casa',
      paragraphs: [
        'Aranhas não invadem residências por acaso. Elas seguem dois recursos fundamentais: abrigo e comida. Eliminar esses dois fatores resolve o problema na raiz.',
      ],
      list: {
        items: [
          'Procuram abrigos escuros e silenciosos — atrás de móveis, dentro de armários pouco usados, no fundo de gavetas, em quadros, em rodapés com fresta, em sótãos, garagens',
          'Caçam outros insetos — onde tem mosca, mosquito, mariposa, traça ou baratinha, tem aranha. Controlar outros insetos da casa reduz drasticamente a população de aranhas',
          'Aproveitam acúmulos de entulho — caixas de papelão guardadas, sapatos amontoados, livros empilhados, montes de roupa. Quanto mais bagunça, mais aranhas',
          'Sobem por encanamentos e ralos — algumas espécies aproveitam tubulações secas ou abandonadas pra circular',
          'Entram por janelas e portas — especialmente à noite, atraídas pela luz que atrai insetos voadores',
          'Reproduzem-se em ovotecas ocultas — uma fêmea pode produzir centenas de ovos em um único saco. Eliminar adultos sem destruir os ovos é trabalho pela metade',
        ],
      },
    },
    {
      title: 'Como nosso protocolo elimina aranhas adultas e ovos',
      paragraphs: [
        'Aranha não come isca como barata ou formiga — então gel inseticida não funciona. O controle é feito por contato: o produto residual aplicado nas superfícies onde elas circulam.',
      ],
      list: {
        items: [
          'Inspeção minuciosa — procuramos abrigos ativos em rodapés, atrás de móveis, em entulhos, em quadros, em cantos altos. Identificamos a espécie pelos sinais (teia, tipo de ootéca, exuvias)',
          'Pulverização residual em pontos estratégicos — produto de longa duração aplicado em superfícies de passagem, abrigos identificados, frestas e pontos altos. Aranhas circulam, tocam no produto, morrem',
          'Tratamento direto de ootécas — quando localizadas, recebem aplicação direta para eliminar os ovos antes da eclosão',
          'Eliminação simultânea das presas — pulverizamos também contra os insetos que as aranhas comem (baratinhas, traças, moscas, mariposas). Sem presa, aranha não permanece',
          'Vedação de pontos de entrada — orientamos sobre vedação de frestas em janelas, portas e tubulações para reduzir entrada externa',
          'Orientação preventiva ao morador — organização de armários, descarte de entulhos, sacudir roupas e calçados antes do uso (especialmente em áreas com histórico de aranha-marrom)',
        ],
      },
      closingParagraphs: [
        'Para residências com histórico de aranha-marrom (especialmente em casas antigas ou com depósitos), recomendamos contrato preventivo semestral. O custo é baixo comparado ao risco de um acidente grave com criança ou idoso.',
      ],
    },
    {
      title: 'Onde fazemos controle de aranhas',
      paragraphs: [
        'Atendemos qualquer ambiente com presença ou risco de aranhas, com atenção especial a locais com crianças, idosos e pessoas com sensibilidade ao veneno.',
      ],
      list: {
        items: [
          'Residências (especialmente casas antigas com porões, garagens e entulhos)',
          'Apartamentos com sótãos, depósitos ou áreas de serviço',
          'Condomínios — garagens, áreas externas, escadas e depósitos',
          'Comércios e escritórios — atrás de móveis, em depósitos, em arquivos antigos',
          'Galpões industriais — áreas com pouca movimentação, depósitos de produtos',
          'Escolas, creches e universidades — atenção especial pelo risco a crianças',
          'Sítios, chácaras e propriedades rurais — risco aumentado por proximidade com áreas verdes',
          'Construções abandonadas ou em obras paradas',
        ],
      },
    },
  ],

  'dedetizacao-de-formigas': [
    {
      title: 'As principais espécies de formiga urbana',
      paragraphs: [
        'Existem dezenas de espécies de formiga em ambiente urbano brasileiro, mas cinco concentram quase todos os casos que atendemos. Cada uma tem preferência alimentar diferente — e isso muda completamente a isca a ser usada.',
      ],
      list: {
        items: [
          'Formiga doceira (Monomorium pharaonis e similares) — pequenas, cor castanho-claro, atraídas por açúcar e açúcares em geral. Aparecem em cozinhas, formando trilhas finas. Fazem ninhos dentro de paredes, atrás de quadros e em pontos quentes da casa',
          'Formiga-faraó (Monomorium pharaonis) — uma das mais perigosas. Minúscula (1,5-2mm), amarelada, vetor de infecções hospitalares. Faz ninhos em qualquer cavidade quente (tomadas, eletrônicos, paredes vazadas). Praga gravíssima em hospitais e clínicas',
          'Formiga louca (Paratrechina longicornis) — médio porte, escura, movimentos erráticos e velozes (daí o nome). Onívora, mas atraída por proteína e alimentos oleosos. Comum em jardins e áreas externas',
          'Formiga lava-pé (Solenopsis invicta e geminata) — vermelha, ferrão venenoso que causa dor intensa e bolhas. Constrói formigueiros de terra em quintais e jardins. Agressiva quando o ninho é perturbado',
          'Formiga cortadeira (Atta e Acromyrmex) — grandes, cabeça larga. Cortam pedaços de folhas e os carregam para o formigueiro. Devastadoras em jardins, hortas e pomares — uma colônia pode desfolhar uma árvore em poucos dias',
        ],
      },
      closingParagraphs: [
        'Aplicar isca proteica para formiga doceira não funciona — ela ignora. Aplicar isca doce para formiga lava-pé também não funciona. Por isso a identificação correta é o primeiro passo do nosso protocolo.',
      ],
    },
    {
      title: 'Por que matar as formigas visíveis nunca resolve',
      paragraphs: [
        'A formiga que você vê na pia é apenas a operária — uma de milhares ou centenas de milhares de operárias da mesma colônia. Matar essas operárias com inseticida tem três efeitos contraproducentes:',
      ],
      list: {
        items: [
          'A rainha continua produzindo — pode botar 200-400 ovos por dia, gerando novas operárias em 30-50 dias. A colônia se reconstrói rapidamente',
          'As formigas se dispersam — algumas espécies (formiga-faraó especialmente) se "fragmentam" sob estresse químico, criando colônias-satélite em outros pontos da casa. Você espalha o problema em vez de eliminá-lo',
          'Você cria barreira de cadáveres — formigas mortas viram repelente para outras formigas em curto prazo, mas não eliminam o ninho. A trilha apenas se desvia',
          'Inseticidas residuais matam predadores naturais — aranhas e outros insetos que comeriam formigas. Médio prazo, a infestação pode piorar',
          'Não atinge o ninho — o ninho geralmente está dentro de paredes, sob pisos, em tomadas ou pontos quentes. Inseticida pulverizado no ambiente não chega lá',
        ],
      },
    },
    {
      title: 'Como o gel iscas funciona — o método correto',
      paragraphs: [
        'O gel inseticida para formigas é uma das maiores conquistas técnicas do controle de pragas modernas. Em vez de matar a operária imediatamente, ele faz algo muito mais eficaz: usa a própria colônia contra ela mesma.',
      ],
      list: {
        items: [
          'Aplicação em gotas minúsculas — em trilhas, pontos de entrada e proximidades do ninho. Discreto, sem cheiro, sem necessidade de evacuar o ambiente',
          'Atratividade específica — o gel é formulado para o paladar da espécie (doce, oleoso ou proteico). Operárias preferem o gel ao alimento normal',
          'Efeito retardado — princípio ativo age lentamente. Operária come o gel e volta ao ninho antes de morrer',
          'Compartilhamento (trofalaxia) — formigas se alimentam mutuamente pela boca. A operária que comeu gel alimenta dezenas de outras antes de morrer, inclusive a rainha',
          'Eliminação progressiva — em 7 a 14 dias, a colônia inteira é eliminada de dentro pra fora, sem precisar saber onde está o ninho',
          'Sem dispersão — colônia é eliminada antes de conseguir fragmentar. Especialmente crítico contra formiga-faraó',
        ],
      },
      closingParagraphs: [
        'Para formigas cortadeiras em jardins, usamos isca granulada específica — formulada com folhas atrativas e princípio ativo de absorção lenta. Em casos de formigueiros muito grandes, complementamos com aplicação direta na entrada do formigueiro.',
      ],
    },
    {
      title: 'Onde fazemos controle de formigas',
      paragraphs: [
        'Atendemos qualquer ambiente com infestação ou histórico de aparecimento.',
      ],
      list: {
        items: [
          'Residências — cozinhas, despensas, banheiros e áreas externas',
          'Restaurantes e padarias — atendimento sem precisar fechar o estabelecimento',
          'Hospitais, clínicas e laboratórios — atenção máxima a formiga-faraó (vetor de infecção hospitalar)',
          'Escolas, creches e universidades — produtos seguros para crianças, aplicação em pontos inacessíveis',
          'Indústrias alimentícias — controle integrado de formigas dentro do programa CIPV',
          'Hotéis e pousadas — discrição absoluta no atendimento',
          'Jardins, pomares e sítios — controle de formigas cortadeiras (problemão pra quem planta)',
          'Condomínios — áreas comuns, jardins e ninhos em paredes externas',
        ],
      },
      closingParagraphs: [
        'Garantia escrita em todos os serviços. Para infestações recorrentes, oferecemos contrato preventivo trimestral com vistoria e reaplicação programada.',
      ],
    },
  ],

  'dedetizacao-de-baratas': [
    {
      title: 'As duas espécies de barata urbana no Brasil',
      paragraphs: [
        'Combater barata sem saber qual espécie está infestando é como tomar remédio sem diagnóstico. As duas espécies que dominam o cenário urbano brasileiro têm comportamentos completamente diferentes — e técnicas de controle distintas.',
      ],
      list: {
        items: [
          'Blatella germanica (barata alemã ou barata de cozinha) — pequena (1-1,5 cm), cor castanho-claro, gosta de ambientes quentes e úmidos. Vive em cozinhas, eletrodomésticos, atrás de geladeiras, fogões, dentro de armários, frestas em azulejo. Reprodução acelerada: uma única fêmea pode gerar 30 mil descendentes em um ano se não controlada.',
          'Periplaneta americana (barata voadora ou de esgoto) — grande (3-4 cm), cor avermelhada, voa em dias quentes. Vive em redes de esgoto, caixas de gordura, ralos, porões e tubulações. Sobe pelos ralos durante a noite. É a barata "que aparece no banheiro" — geralmente não tem ninho dentro da casa, está em trânsito pelo sistema de esgoto.',
        ],
      },
      closingParagraphs: [
        'Diagnóstico errado leva a tratamento errado: aplicar gel onde aparecem baratas americanas (que vêm de fora) não resolve, porque a colônia está no esgoto. Por isso a primeira etapa do nosso protocolo é sempre a identificação correta da espécie.',
      ],
    },
    {
      title: 'Por que baratas são tão difíceis de eliminar com produtos comuns',
      paragraphs: [
        'Inseticida de supermercado mata as baratas visíveis mas não resolve a infestação. Entender por que ajuda a valorizar o controle profissional.',
      ],
      list: {
        items: [
          'Resistência química — populações urbanas desenvolveram tolerância a piretróides e outros princípios ativos comuns em inseticidas domésticos',
          'Esconderijos múltiplos — vivem em frestas e cavidades dentro de paredes, eletrodomésticos e tubulações. Pulverização de superfície atinge só 10-20% da colônia',
          'Ootecas (cápsulas de ovos) — fêmeas carregam ou depositam ootecas que resistem a inseticidas. Quando os ovos eclodem, a colônia se reconstrói',
          'Comportamento noturno e cauteloso — saem só quando tudo está parado e escuro. Quem você vê é minoria — pra cada barata vista, há dezenas escondidas',
          'Reprodução acelerada — Blatella germanica gera nova geração a cada 60 dias. Sem controle, infestação dobra a cada dois meses',
          'Onivoria extrema — comem qualquer coisa orgânica: alimentos, papelão, couro, cabelo, livros, até outros insetos mortos. Eliminar comida visível não as elimina',
        ],
      },
    },
    {
      title: 'Por que o gel inseticida revolucionou o controle de baratas',
      paragraphs: [
        'Até os anos 2000, controle de barata significava esvaziar armários, sair de casa por dias e voltar a um ambiente com cheiro forte de inseticida. Hoje, o gel mudou completamente o jogo.',
      ],
      list: {
        items: [
          'Aplicação discreta em pontos minúsculos — gotas do tamanho de uma cabeça de alfinete em frestas, atrás de eletrodomésticos e em cantos de armários',
          'Sem cheiro, sem fumaça, sem necessidade de evacuar o ambiente — pode ser aplicado em cozinhas em uso, restaurantes em operação, hospitais',
          'Atrai as baratas em vez de afastar — elas comem o gel, voltam pra colônia e morrem lá. Outras baratas comem o cadáver e morrem também (efeito dominó)',
          'Atinge a colônia inteira — incluindo as fêmeas com ovotecas e os indivíduos que nunca saíram do esconderijo',
          'Segurança hospitalar — produto com toxicidade baixíssima para mamíferos. Aprovado para uso em ambientes alimentícios e hospitalares',
          'Eficácia comprovada — eliminação de até 95% da colônia em 7 a 14 dias após a aplicação',
        ],
      },
      closingParagraphs: [
        'Para baratas americanas (de esgoto), o gel sozinho não resolve — é necessário tratamento complementar com pulverização em ralos, caixas de gordura e áreas externas. Por isso nosso protocolo combina gel + pulverização seletiva conforme o caso.',
      ],
    },
    {
      title: 'Onde fazemos controle de baratas',
      paragraphs: [
        'Atendemos qualquer ambiente, com protocolo adaptado ao perfil. A periodicidade varia conforme o uso e a exigência regulatória.',
      ],
      list: {
        items: [
          'Residências — recomendamos dedetização a cada 3 meses (preventiva) ou conforme aparecimento',
          'Restaurantes, padarias, lanchonetes — periodicidade mínima MENSAL por exigência da RDC 622/22 da ANVISA',
          'Supermercados e mercados — controle integrado com porta-iscas em áreas externas',
          'Hospitais, clínicas e laboratórios — protocolo hospitalar com gel inseticida exclusivamente',
          'Hotéis, pousadas e motéis — atendimento discreto fora do horário comercial',
          'Indústrias alimentícias — programa CIPV com documentação para auditorias',
          'Escolas, creches e universidades — atendimento em períodos sem aula',
          'Condomínios — áreas comuns (garagem, lixeiras, salões, áreas externas)',
        ],
      },
      closingParagraphs: [
        'Garantia escrita de 3 a 6 meses em residências e comércios. Para estabelecimentos com fiscalização sanitária, recomendamos contrato CIPV que cobre baratas e demais pragas de forma contínua.',
      ],
    },
  ],

  'sanitizacao-de-ambientes-londrina': [
    {
      title: 'A diferença entre limpeza, higienização e sanitização',
      paragraphs: [
        'Esses três termos costumam ser usados como sinônimos no dia a dia, mas tecnicamente são processos diferentes. Entender a distinção ajuda a saber quando contratar cada um.',
      ],
      list: {
        items: [
          'Limpeza — remoção de sujeira visível (poeira, resíduos, manchas) usando água, sabão e produtos comuns. Deixa o ambiente esteticamente limpo, mas não elimina patógenos.',
          'Higienização — limpeza profunda com produtos específicos que reduzem a carga microbiana. Mata parte dos microorganismos, mas não tem eficácia comprovada contra vírus e bactérias resistentes.',
          'Sanitização — eliminação de agentes patogênicos (vírus, bactérias, fungos, ácaros) usando produtos com registro hospitalar e equipamento específico (atomizador ou nebulizador). É o nível mais alto de descontaminação possível em ambiente urbano.',
        ],
      },
      closingParagraphs: [
        'Limpeza você faz toda semana com sua equipe. Higienização você contrata mensalmente. Sanitização é o serviço técnico que entra quando há necessidade de eliminação garantida de patógenos — após casos confirmados de doenças, em ambientes com imunossuprimidos, em estabelecimentos com público sensível ou para conformidade sanitária.',
      ],
    },
    {
      title: 'Patógenos que a sanitização elimina',
      paragraphs: [
        'Nossos produtos têm eficácia comprovada contra um espectro amplo de microorganismos causadores de doenças. A aplicação por atomização ou nebulização garante cobertura de superfícies altas, frestas e áreas difíceis de alcançar com pano comum.',
      ],
      list: {
        items: [
          'Vírus respiratórios — coronavírus (incluindo SARS-CoV-2), influenza, parainfluenza, vírus sincicial respiratório (VSR)',
          'Vírus gastrointestinais — rotavírus, norovírus (causadores de viroses)',
          'Bactérias — estafilococos, estreptococos, E. coli, Salmonella, Pseudomonas',
          'Bactérias resistentes — incluindo Staphylococcus aureus resistente à meticilina (MRSA)',
          'Fungos e bolores — Aspergillus, Candida, Penicillium',
          'Ácaros — incluindo o ácaro do pó (Dermatophagoides), principal causador de alergias respiratórias em casa',
          'Esporos — formas resistentes de fungos e bactérias em ambientes úmidos',
        ],
      },
      closingParagraphs: [
        'A escolha do produto e da técnica é feita conforme o objetivo: pra ambiente após Covid, usamos foco em coronavírus; pra creche, foco em vírus gastrointestinais e respiratórios; pra alérgicos, foco em ácaros e fungos.',
      ],
    },
    {
      title: 'Quando vale a pena fazer sanitização',
      paragraphs: [
        'Sanitização não substitui limpeza diária — complementa quando há indicação técnica específica. Algumas situações que justificam fortemente o serviço:',
      ],
      list: {
        items: [
          'Após casos confirmados de Covid, gripe forte, viroses ou outras doenças infecciosas no ambiente',
          'Em residências com pessoas imunossuprimidas (quimioterapia, pós-transplante, doenças autoimunes)',
          'Periodicamente em ambientes com idosos, bebês ou crianças com saúde frágil',
          'Em escritórios e empresas após retorno de surto entre funcionários',
          'Em clínicas, consultórios médicos, odontológicos e veterinários — rotina mensal',
          'Em academias, estúdios de pilates e ambientes com transpiração intensa',
          'Em veículos após transporte de pessoas doentes (táxi, Uber, ambulâncias, vans)',
          'Em escolas, creches e universidades — geralmente em períodos de férias e após picos sazonais',
          'Em ambientes com mofo ou bolor visível (combinado com tratamento de causa)',
        ],
      },
    },
    {
      title: 'Onde fazemos sanitização em Londrina e região',
      paragraphs: [
        'Atendemos qualquer ambiente fechado, desde os mais simples até os mais técnicos. Adaptamos produto e equipamento conforme o local.',
      ],
      list: {
        items: [
          'Escritórios, salas comerciais e coworkings',
          'Clínicas, consultórios, hospitais e laboratórios',
          'Escolas, creches, universidades e cursinhos',
          'Academias, estúdios e centros esportivos',
          'Restaurantes, lanchonetes e padarias (combinado com CIPV)',
          'Hotéis, pousadas e motéis',
          'Residências (especialmente com imunossuprimidos ou após viroses)',
          'Veículos (carros particulares, táxis, frota corporativa, ambulâncias, ônibus)',
          'Auditórios, salões de eventos e ambientes corporativos',
          'Áreas comuns de condomínios — academias, salões, brinquedotecas',
        ],
      },
      closingParagraphs: [
        'A aplicação é rápida (geralmente 30 minutos a 1 hora por ambiente) e o local fica liberado para uso em 1 a 2 horas após o serviço. Entregamos certificado de sanitização válido para apresentação à vigilância sanitária ou comprovação corporativa.',
      ],
    },
  ],

  'dac-divisao-de-atendimento-a-condominios': [
    {
      title: 'Por que condomínios precisam de programa próprio',
      paragraphs: [
        'Condomínio não é uma residência grande — é um sistema complexo com áreas compartilhadas, fluxos de pessoas, regulamentação específica e responsabilidade jurídica do síndico. Por isso o controle de pragas em condomínio merece estrutura própria.',
      ],
      list: {
        items: [
          'Áreas comuns múltiplas — garagem, salão de festas, áreas verdes, lixeiras, playground, piscina, churrasqueira, salas de máquinas',
          'Caixas d\'água compartilhadas — obrigação semestral de limpeza conforme ANVISA',
          'Fluxo constante de pessoas e bagagens — moradores, prestadores, mudanças, hóspedes (vetor de entrada de pragas)',
          'Reservatórios e cisternas — atrativos para roedores e insetos sem manutenção',
          'Lixo orgânico em grandes volumes — fonte de alimento concentrada para pragas',
          'Responsabilidade legal do síndico — obrigação de manter o condomínio em conformidade sanitária',
          'Necessidade de prestação de contas — moradores cobram transparência em assembleia',
          'Vulnerabilidade compartilhada — uma unidade infestada pode contaminar vizinhas por tubulações e frestas',
        ],
      },
    },
    {
      title: 'O que a DAC inclui no contrato anual',
      paragraphs: [
        'Nosso contrato DAC é desenhado para ser o "controle total" do condomínio — sem precisar contratar várias empresas para diferentes serviços.',
      ],
      list: {
        items: [
          'Dedetização periódica das áreas comuns (garagem, salão, áreas externas)',
          'Desratização contínua com porta-iscas lacrados em áreas externas e técnicas',
          'Limpeza e desinfecção semestral de caixas d\'água e cisternas (conforme ANVISA)',
          'Análise físico-química e microbiológica da água após higienização',
          'Controle de pombos quando necessário (espículas, telas, manejo)',
          'Manejo de morcegos em forros e telhados (quando há colônia identificada)',
          'Cronograma fixo de visitas técnicas (geralmente trimestrais ou semestrais)',
          'Atendimento emergencial via WhatsApp — pra casos urgentes entre visitas, sem custo adicional',
          'Comunicação direta com síndico ou administradora',
          'Equipe identificada com crachá, uniforme e cadastro prévio na portaria',
        ],
      },
      closingParagraphs: [
        'Para condomínios com restaurantes, padarias ou áreas comerciais nos andares térreos, oferecemos também o CIPV (Controle Integrado de Pragas e Vetores) integrado ao contrato, atendendo a RDC 622/2022 da ANVISA.',
      ],
    },
    {
      title: 'Documentação técnica que entregamos pro síndico',
      paragraphs: [
        'Síndico precisa prestar contas em assembleia e estar coberto juridicamente em caso de fiscalização sanitária. Por isso entregamos pacote documental completo a cada serviço.',
      ],
      list: {
        items: [
          'Laudo técnico assinado por responsável habilitado (CRQ)',
          'Certificado de execução de serviço (válido para apresentação à vigilância sanitária)',
          'Relatório de visita técnica com fotos do antes/depois quando aplicável',
          'Mapa de pontos de monitoramento (porta-iscas, armadilhas) atualizado',
          'Lista de produtos utilizados com concentrações, registros ANVISA e fichas técnicas',
          'Análise físico-química e microbiológica da água após higienização de caixas',
          'Relatórios consolidados anuais para apresentação em AGO/AGE',
          'Cronograma de manutenção do ano em curso e do próximo ano',
        ],
      },
      closingParagraphs: [
        'O síndico pode anexar essa documentação à prestação de contas anual, demonstrando que o condomínio está em conformidade legal e que a verba destinada ao controle de pragas é bem aplicada.',
      ],
    },
    {
      title: 'Tipos de condomínios que atendemos',
      paragraphs: [
        'Atendemos qualquer porte e configuração, com contrato adaptado à realidade de cada empreendimento.',
      ],
      list: {
        items: [
          'Edifícios residenciais pequenos (até 20 unidades)',
          'Edifícios residenciais médios e grandes (20 a 200+ unidades)',
          'Condomínios horizontais — casas em loteamentos fechados',
          'Condomínios mistos — com lojas, escritórios ou restaurantes no térreo',
          'Condomínios de alto padrão — com infraestrutura completa (academia, spa, salão gourmet)',
          'Edifícios comerciais — salas, escritórios, consultórios',
          'Centros empresariais e flat-services',
          'Empreendimentos novos — atendimento desde a entrega das chaves',
        ],
      },
      closingParagraphs: [
        'Vistoria inicial é GRATUITA e sem compromisso. Após visita técnica entregamos proposta personalizada com escopo, cronograma e investimento — você apresenta em assembleia para aprovação dos condôminos.',
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
