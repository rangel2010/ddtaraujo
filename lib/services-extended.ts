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
        'A Araújo Dedetizadora realiza o controle de morcegos respeitando as diretrizes ambientais e utilizando métodos apropriados para o desalojamento seguro das colônias. O objetivo do serviço é afastar os morcegos da estrutura sem causar danos aos animais, garantindo também a segurança dos moradores ou ocupantes do imóvel.',
      ],
    },
    {
      title: 'Onde atendemos',
      paragraphs: [
        'A Araújo Dedetizadora atende Londrina e todo o estado do Paraná com serviços especializados de controle de morcegos e desalojamento de colônias. Nossa equipe realiza avaliação técnica do local para identificar o tipo de infestação e definir a melhor solução para cada caso. Atendemos:',
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
};
