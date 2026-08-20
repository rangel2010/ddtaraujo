export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'insetos' | 'roedores' | 'aves-morcegos' | 'higienizacao' | 'desentupimento' | 'programas';
  icon: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    headline: string;
    subheadline: string;
  };
  intro: string;
  benefits: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  /** Link para um artigo do blog relacionado (slug em /blog/[slug]) */
  relatedPost?: { slug: string; label: string };
};

export const services: Service[] = [
  {
    slug: 'dedetizacao-em-londrina',
    title: 'Dedetização em Londrina',
    shortTitle: 'Dedetização Geral',
    category: 'programas',
    icon: 'shield',
    metaTitle: 'Dedetização em Londrina | Araújo DDT | Orçamento Grátis',
    metaDescription:
      'Dedetização em Londrina com garantia há mais de 40 anos. Eliminamos baratas, ratos, cupins, escorpiões e mais. Solicite orçamento grátis pelo WhatsApp.',
    keywords: [
      'dedetização em londrina',
      'dedetizadora londrina',
      'controle de pragas londrina',
      'empresa de dedetização londrina',
    ],
    hero: {
      headline: 'Dedetização em Londrina e todo o Paraná',
      subheadline:
        'Mais de 40 anos eliminando pragas em residências, empresas, indústrias e condomínios em Londrina e todo o Paraná, com garantia escrita.',
    },
    intro:
      'A Araújo é referência em dedetização em Londrina há mais de 4 décadas. Atendemos residências, comércios, indústrias e condomínios com técnicos qualificados, produtos registrados na ANVISA e total compromisso com a segurança da sua família e funcionários. Cada serviço é precedido de inspeção técnica e plano de ação personalizado.',
    benefits: [
      'Garantia escrita em todos os serviços',
      'Técnicos certificados e equipados',
      'Produtos antialérgicos e inodoros disponíveis',
      'Atendimento residencial, comercial e industrial',
      'Emissão de certificado para vigilância sanitária',
      'Orçamento gratuito sem compromisso',
    ],
    process: [
      {
        title: 'Inspeção técnica',
        description:
          'Identificamos as pragas presentes, focos de infestação e pontos críticos do ambiente.',
      },
      {
        title: 'Plano de ação',
        description:
          'Definimos os produtos, técnicas e cronograma adequados ao seu caso específico.',
      },
      {
        title: 'Aplicação',
        description:
          'Executamos com EPIs, produtos registrados e técnicas seguras para pessoas e pets.',
      },
      {
        title: 'Acompanhamento',
        description:
          'Garantia escrita com retornos preventivos. Você não fica sozinho depois do serviço.',
      },
    ],
    faqs: [
      {
        question: 'A dedetização é segura para crianças e animais de estimação?',
        answer:
          'Sim. Utilizamos produtos registrados na ANVISA e nossa equipe orienta individualmente sobre o tempo de reentrada após cada aplicação. Para casos sensíveis, oferecemos produtos antialérgicos e inodoros.',
      },
      {
        question: 'Quanto tempo dura o efeito da dedetização?',
        answer:
          'Todos os nossos serviços têm garantia por escrito, conforme a praga e o ambiente. Em programas contínuos (CIPV) o controle é permanente, com visitas periódicas.',
      },
      {
        question: 'Preciso sair de casa durante o serviço?',
        answer:
          'Recomendamos que pessoas e pets fiquem fora do ambiente durante a aplicação. Nosso técnico orientará individualmente sobre o tempo necessário após cada serviço.',
      },
      {
        question: 'Vocês emitem certificado para vigilância sanitária?',
        answer:
          'Sim. Emitimos certificado válido para apresentação à vigilância sanitária e outros órgãos reguladores, tanto para empresas quanto condomínios.',
      },
    ],
  },
  {
    slug: 'controle-de-pragas-em-londrina',
    title: 'CIPV - Controle Integrado de Pragas e Vetores',
    shortTitle: 'CIPV - Controle Integrado',
    category: 'programas',
    icon: 'clipboard-check',
    metaTitle: 'CIPV - Controle Integrado de Pragas em Londrina | Araújo DDT',
    metaDescription:
      'Programa CIPV para indústrias, hospitais e empresas em Londrina. Controle integrado de pragas e vetores com monitoramento contínuo e documentação completa.',
    keywords: [
      'cipv londrina',
      'controle integrado de pragas londrina',
      'mip londrina',
      'controle de pragas industrial londrina',
    ],
    hero: {
      headline: 'CIPV — Controle Integrado de Pragas e Vetores',
      subheadline:
        'Programa contínuo para indústrias, hospitais, hotéis e empresas com alto fluxo de pessoas, baseado nas melhores práticas internacionais.',
    },
    intro:
      'O Controle Integrado de Pragas e Vetores (CIPV ou MIP) é um programa contínuo de prevenção e controle, indicado para indústrias alimentícias, hospitais, hotéis, supermercados e qualquer estabelecimento com requisitos sanitários rigorosos. Diferente da dedetização pontual, o CIPV envolve monitoramento permanente, registros detalhados e ações corretivas baseadas em dados.',
    benefits: [
      'Monitoramento mensal ou quinzenal',
      'Mapa de pontos de controle e armadilhas',
      'Relatórios técnicos para auditorias',
      'Conformidade com ANVISA, vigilância sanitária e ISO',
      'Redução do uso de produtos químicos',
      'Equipe dedicada por contrato',
    ],
    process: [
      {
        title: 'Diagnóstico inicial',
        description:
          'Mapeamento completo do estabelecimento, identificação de pontos críticos e histórico de infestações.',
      },
      {
        title: 'Implantação',
        description:
          'Instalação de iscas, armadilhas luminosas, porta-iscas externos e pontos de monitoramento.',
      },
      {
        title: 'Monitoramento contínuo',
        description:
          'Visitas periódicas com inspeção, troca de iscas, registros fotográficos e medições.',
      },
      {
        title: 'Relatórios e auditoria',
        description:
          'Documentação completa para auditorias internas, ANVISA, BRC, ISO 22000 e clientes corporativos.',
      },
    ],
    faqs: [
      {
        question: 'Qual a diferença entre dedetização e CIPV?',
        answer:
          'Dedetização é uma ação pontual para eliminar uma praga específica. CIPV é um programa contínuo de prevenção, monitoramento e controle, com documentação técnica completa — exigido pela maioria das certificações sanitárias.',
      },
      {
        question: 'Que tipo de empresa precisa de CIPV?',
        answer:
          'Indústrias de alimentos, farmacêuticas, hospitais, clínicas, hotéis, restaurantes, supermercados, escolas e qualquer estabelecimento com público sensível ou exigência de certificação sanitária.',
      },
      {
        question: 'Vocês emitem laudos para auditoria?',
        answer:
          'Sim. Todos os relatórios seguem padrão técnico aceito por ANVISA, vigilância sanitária, BRC, ISO 22000, FSSC 22000 e demais certificações.',
      },
      {
        question: 'Que documentação técnica vocês entregam no contrato CIPV?',
        answer:
          'Laudos técnicos, certificados, relatórios de visita, mapa de monitoramento, registro dos produtos utilizados (com concentrações e registros nos órgãos competentes), manuais de procedimentos e manuais de qualidade. Tudo organizado para auditorias internas e externas.',
      },
    ],
  },
  {
    slug: 'desinsetizacao',
    title: 'Desinsetização',
    shortTitle: 'Desinsetização',
    category: 'insetos',
    icon: 'bug',
    metaTitle: 'Desinsetização em Londrina | Araújo Dedetizadora',
    metaDescription:
      'Desinsetização profissional em Londrina contra baratas, formigas, pulgas, moscas e outros insetos. Garantia escrita e produtos sem cheiro, seguros para família, pets, idosos e crianças.',
    keywords: [
      'desinsetização londrina',
      'controle de insetos londrina',
      'eliminação de insetos londrina',
    ],
    hero: {
      headline: 'Desinsetização em Londrina',
      subheadline:
        'Combate especializado a insetos urbanos com produtos registrados e técnicas seguras.',
    },
    intro:
      'Desinsetização é o combate direto a insetos como baratas, formigas, pulgas, moscas, mosquitos, traças e pernilongos. Utilizamos técnicas combinadas — pulverização, gel, polvilhamento e termonebulização — escolhidas conforme o inseto, o ambiente e a sensibilidade dos ocupantes.',
    benefits: [
      'Diagnóstico do tipo de inseto e foco de infestação',
      'Produtos antialérgicos disponíveis sob demanda',
      'Aplicação com gel em ambientes sensíveis (cozinhas, restaurantes)',
      'GAT — Garantia de Assistência Técnica com laudo dos produtos utilizados',
      'Sem necessidade de remover móveis em boa parte dos casos',
    ],
    process: [
      {
        title: 'Identificação do inseto',
        description: 'Cada espécie exige um produto e técnica específicos.',
      },
      {
        title: 'Escolha da técnica',
        description:
          'Pulverização, gel, atomização ou termonebulização conforme o ambiente.',
      },
      {
        title: 'Aplicação segura',
        description: 'EPIs, produtos registrados e orientação pós-serviço.',
      },
    ],
    faqs: [
      {
        question: 'Quais insetos vocês combatem?',
        answer:
          'Baratas (de cozinha e americanas), formigas, pulgas, moscas, mosquitos, traças, pernilongos, percevejos, lacraias e mais. Atendemos qualquer infestação urbana.',
      },
      {
        question: 'Preciso esvaziar armários para a aplicação?',
        answer:
          'Em casos de infestação de baratas em cozinhas, recomendamos esvaziar armários da pia. Para outros casos, normalmente não é necessário. Nosso técnico orienta antes do serviço.',
      },
    ],
  },
  {
    slug: 'desratizacao',
    title: 'Desratização',
    shortTitle: 'Desratização',
    category: 'roedores',
    icon: 'rat',
    metaTitle: 'Desratização em Londrina | Controle de Ratos | Araújo DDT',
    metaDescription:
      'Desratização em Londrina com iscas seguras, porta-iscas lacrados e monitoramento. Eliminamos ratos, ratazanas e camundongos com garantia.',
    keywords: [
      'desratização londrina',
      'controle de ratos londrina',
      'eliminação de ratos londrina',
      'dedetização de ratos londrina',
    ],
    hero: {
      headline: 'Desratização em Londrina',
      subheadline:
        'Controle de ratos, ratazanas e camundongos com iscas em porta-iscas lacrados e monitoramento periódico.',
    },
    intro:
      'Ratos transmitem leptospirose, hantavirose, salmonelose e roem fiações causando incêndios. Nossa desratização combina iscas raticidas em porta-iscas lacrados (seguros para crianças e pets), vedação de pontos de entrada e monitoramento periódico até a eliminação completa da colônia.',
    benefits: [
      'Porta-iscas lacrados — seguros para crianças e pets',
      'Mapeamento de pontos de entrada e correção',
      'Iscas anticoagulantes de última geração',
      'Garantia escrita com retornos',
      'Atendimento de emergência',
    ],
    process: [
      {
        title: 'Inspeção',
        description:
          'Identificamos espécies (rato de telhado, ratazana ou camundongo), tocas e rotas.',
      },
      {
        title: 'Instalação de porta-iscas',
        description:
          'Pontos estratégicos com iscas lacradas e identificadas, conforme normas.',
      },
      {
        title: 'Bloqueio de entradas',
        description:
          'Orientação ou execução do fechamento de frestas, ralos e tubulações.',
      },
      {
        title: 'Retornos',
        description: 'Visitas para verificar consumo, repor iscas e ajustar.',
      },
    ],
    faqs: [
      {
        question: 'As iscas são perigosas para meu cachorro?',
        answer:
          'Não, pois são instaladas dentro de porta-iscas lacrados, com chave, em locais inacessíveis a pets e crianças. Esse é o padrão exigido pela ANVISA.',
      },
      {
        question: 'O rato morre dentro de casa? Vai cheirar?',
        answer:
          'As iscas modernas têm efeito retardado e ação mumificadora — o rato busca água fora do ambiente e o odor é mínimo. Em estruturas antigas pode ocorrer, e oferecemos protocolo de neutralização.',
      },
      {
        question: 'Quais as espécies de rato mais comuns em Londrina?',
        answer:
          'Três espécies dominam o cenário urbano: rato de telhado (Rattus rattus) — corpo esguio, hábil escalador, vive em forros e sótãos; ratazana ou rato de esgoto (Rattus norvegicus) — corpo robusto, escavadora, prefere tocas no solo próximo a córregos e lixões; e o camundongo (Mus musculus) — pequeno, faz ninho em gavetas e armários pouco usados. Cada espécie pede uma estratégia diferente.',
      },
      {
        question: 'Quais doenças os ratos transmitem?',
        answer:
          'Leptospirose, salmonelose, hantavirose, tifo murino, febre da mordedura do rato e outras. Além disso, contaminam alimentos, roem fiações elétricas (risco de incêndio) e danificam estoques e estruturas.',
      },
    ],
  },
  {
    slug: 'descupinizacao',
    title: 'Descupinização',
    shortTitle: 'Descupinização',
    category: 'insetos',
    icon: 'tree',
    metaTitle: 'Descupinização em Londrina | Dedetização de Cupins | Araújo',
    metaDescription:
      'Descupinização em Londrina para cupins de madeira seca e de solo. Tratamento curativo e preventivo com garantia por escrito.',
    keywords: [
      'descupinização londrina',
      'dedetização de cupins londrina',
      'controle de cupins londrina',
      'eliminação de cupins londrina',
      'cupim de madeira seca',
      'cupim subterrâneo',
      'barreira química contra cupim',
      'tratamento de cupim em obra',
    ],
    hero: {
      headline: 'Descupinização em Londrina',
      subheadline:
        'Tratamento curativo e preventivo para cupins de madeira seca e cupins subterrâneos, com garantia estendida.',
    },
    intro:
      'Cupins causam prejuízos silenciosos: comprometem estruturas, móveis e até documentos. Identificamos a espécie (cupim de madeira seca ou cupim subterrâneo), aplicamos tratamento específico e oferecemos contratos preventivos para construções novas ou imóveis em risco.',
    benefits: [
      'Identificação correta da espécie de cupim',
      'Tratamento curativo de móveis e estruturas',
      'Barreira química preventiva no solo',
      'Garantia escrita estendida em contratos preventivos',
      'Atendimento a obras em construção',
    ],
    process: [
      {
        title: 'Vistoria detalhada',
        description:
          'Localizamos focos ativos, ninhos e identificamos a espécie.',
      },
      {
        title: 'Tratamento curativo',
        description:
          'Injeção em madeira, pulverização e iscas conforme o caso.',
      },
      {
        title: 'Barreira preventiva',
        description:
          'Aplicação de inseticida no solo ou nas estruturas para impedir nova infestação.',
      },
    ],
    faqs: [
      {
        question: 'É possível eliminar cupins sem destruir os móveis?',
        answer:
          'Na maioria dos casos sim. Usamos injeção pontual nos pontos de saída do cupim, aplicação de gel e produtos transmissíveis pela colônia.',
      },
      {
        question: 'O que é a barreira química preventiva?',
        answer:
          'É um tratamento aplicado no solo (em construções) ou ao redor das estruturas que impede o cupim subterrâneo de chegar à madeira. Em obras novas, é o investimento mais econômico contra cupim.',
      },
      {
        question: 'Como saber se tenho cupim em casa?',
        answer:
          'Os principais sinais são: pó ou resíduos parecidos com serragem próximos a móveis e batentes; pequenos furos na madeira; madeira que soa "oca" ao ser batida; asas descartadas perto de janelas e portas (revoada); e túneis de terra subindo por paredes (cupim subterrâneo). Ao primeiro sinal, vale fazer vistoria — o cupim age em silêncio.',
      },
      {
        question: 'Os cupins podem voltar depois do tratamento?',
        answer:
          'Se o tratamento for feito corretamente e a barreira preventiva for aplicada, a chance de retorno é baixa. Por isso recomendamos contratos preventivos, que incluem revisões periódicas e garantia escrita estendida.',
      },
      {
        question: 'Vocês atendem obras em construção?',
        answer:
          'Sim. A aplicação de barreira química no solo durante a obra (antes do contrapiso) é o momento ideal e mais econômico para prevenir cupim subterrâneo, e é o que garante a garantia escrita estendida.',
      },
      {
        question: 'A descupinização tem garantia?',
        answer:
          'Sim. Em contratos preventivos com barreira química, oferecemos garantia escrita estendida. Em tratamentos curativos, o prazo de garantia é definido conforme a espécie identificada e o tipo de tratamento aplicado.',
      },
      {
        question: 'Vale a pena investir em descupinização preventiva?',
        answer:
          'Sim. O custo da barreira química preventiva é muito menor do que o de um tratamento estrutural depois que a infestação já compromete vigas, móveis ou a estrutura do imóvel. É a forma mais econômica de evitar prejuízos maiores no futuro.',
      },
    ],
    relatedPost: {
      slug: 'como-saber-se-tem-cupim-em-casa-5-sinais',
      label: 'Como saber se tem cupim em casa? 5 sinais antes que seja tarde',
    },
  },
  {
    slug: 'controle-de-morcegos-em-londrina',
    title: 'Controle de Morcegos',
    shortTitle: 'Controle de Morcegos',
    category: 'aves-morcegos',
    icon: 'moon',
    metaTitle: 'Controle de Morcegos em Londrina | Empresa Especializada | Araújo Dedetizadora',
    metaDescription:
      'Empresa especializada em controle e remoção de morcegos em Londrina há 40 anos. Manejo ecológico, vedação definitiva e desinfecção. Equipe com vacinação antirrábica. Ligue: (43) 3339-1295.',
    keywords: [
      'controle de morcegos londrina',
      'controle de morcegos em londrina',
      'remoção de morcegos londrina',
      'remoção de morcegos em londrina',
      'empresa especializada em morcegos',
      'empresa especializada em morcegos londrina',
      'empresa para tirar morcegos londrina',
      'desalojamento de morcegos londrina',
      'morcegos no telhado londrina',
      'tirar morcego do telhado londrina',
      'morcegos no forro',
      'como tirar morcego do telhado',
      'dedetizadora para morcegos londrina',
      'dedetização de morcegos londrina',
      'manejo de morcegos londrina',
      'morcego transmite raiva londrina',
    ],
    hero: {
      headline: 'Controle de Morcegos em Londrina',
      subheadline:
        'Manejo ecológico, sem matar os animais. Desalojamento, vedação de abrigos e protocolo de raiva.',
    },
    intro:
      'Morcegos são protegidos por lei e fundamentais para o equilíbrio ecológico — mas podem transmitir raiva e ocupar telhados, forros e galerias. Nosso protocolo de manejo respeita a legislação ambiental: desalojamos os animais sem matá-los e vedamos os pontos de abrigo para que não retornem.',
    benefits: [
      'Manejo legal e ecológico (sem matar os animais)',
      'Vedação definitiva de pontos de abrigo',
      'Limpeza e desinfecção do local',
      'Equipe com vacinação antirrábica em dia',
      'Laudo técnico e certificado após o serviço',
      'Orientação completa sobre prevenção de raiva',
    ],
    process: [
      {
        title: 'Inspeção',
        description: 'Localizamos abrigos, contamos a colônia e mapeamos rotas de saída.',
      },
      {
        title: 'Desalojamento',
        description:
          'Aplicamos técnicas de exclusão que permitem a saída mas impedem o retorno.',
      },
      {
        title: 'Vedação',
        description: 'Fechamos frestas, telhas soltas e respiros.',
      },
      {
        title: 'Desinfecção',
        description: 'Limpeza do local com produtos específicos.',
      },
    ],
    faqs: [
      {
        question: 'É permitido matar morcegos?',
        answer:
          'Não. Morcegos são protegidos pela legislação ambiental brasileira. Por isso usamos exclusivamente técnicas de manejo e desalojamento.',
      },
      {
        question: 'Morcego transmite raiva?',
        answer:
          'Pode transmitir, sim. Por isso é fundamental que o manejo seja feito por equipe treinada. Se você foi mordido ou teve contato direto, procure imediatamente um posto de saúde.',
      },
      {
        question: 'Quanto tempo demora o serviço de remoção de morcegos?',
        answer:
          'Depende do tamanho da colônia e da estrutura do imóvel, mas a maioria dos serviços é concluída em uma única visita, entre o desalojamento e a vedação dos pontos de abrigo.',
      },
      {
        question: 'Os morcegos podem voltar depois do desalojamento?',
        answer:
          'Se todos os pontos de entrada forem corretamente vedados, a chance de retorno é muito baixa. Por isso a etapa de vedação é tão importante quanto o desalojamento em si.',
      },
      {
        question: 'Tenho morcegos no forro ou no telhado, é normal?',
        answer:
          'É uma situação comum em cidades do Paraná, principalmente em telhados com telhas soltas, forros antigos ou frestas próximas a calhas. O ideal é agir rápido: quanto maior a colônia, mais trabalhoso é o manejo.',
      },
      {
        question: 'Vocês atendem emergências com morcegos dentro de casa?',
        answer:
          'Sim. Se um morcego entrou na sua casa ou estabelecimento, entre em contato que priorizamos esses casos para um atendimento rápido.',
      },
      {
        question: 'Vocês atendem outras cidades do Paraná além de Londrina?',
        answer:
          'Sim. Além de Londrina, atendemos cidades da região e outras localidades do Paraná. Entre em contato para confirmar o atendimento na sua cidade.',
      },
      {
        question: 'Quanto custa o controle de morcegos em Londrina?',
        answer:
          'O valor varia conforme o tamanho da colônia, o tipo de imóvel e o acesso ao local. Residências pequenas com poucas entradas têm um serviço mais simples; galpões industriais ou telhados extensos exigem mais etapas. Solicite um orçamento gratuito pelo WhatsApp ou telefone — fazemos avaliação técnica sem compromisso.',
      },
      {
        question: 'Como saber se tenho morcegos no telhado ou forro?',
        answer:
          'Os sinais mais comuns são: barulho no telhado à noite ou ao entardecer, manchas escuras próximas a frestas e telhas, fezes acumuladas no chão ou nas paredes, odor forte no ambiente e visualização de morcegos saindo ao anoitecer. Se perceber qualquer um desses sinais, entre em contato para uma vistoria técnica gratuita.',
      },
    ],
    relatedPost: {
      slug: 'morcegos-em-londrina-riscos-leis-e-como-resolver-definitivamente',
      label: 'Controle de Morcegos em Londrina: riscos, leis e como resolver definitivamente',
    },
  },
  {
    slug: 'controle-de-pombos-em-londrina',
    title: 'Manejo de Pombos',
    shortTitle: 'Manejo de Pombos',
    category: 'aves-morcegos',
    icon: 'bird',
    metaTitle: 'Controle de Pombos em Londrina | Espantar Pombos | Araújo',
    metaDescription:
      'Controle e manejo de pombos em Londrina com espículas, telas e ultrassom. Soluções permanentes para fachadas, telhados e condomínios.',
    keywords: [
      'controle de pombos londrina',
      'espantar pombos londrina',
      'manejo de pombos londrina',
      'espículas para pombos londrina',
    ],
    hero: {
      headline: 'Manejo de Pombos em Londrina',
      subheadline:
        'Afastamento permanente de pombos com espículas, telas e ultrassom — sem agredir os animais.',
    },
    intro:
      'Pombos transmitem doenças (criptococose, histoplasmose, salmonelose), sujam fachadas e entopem calhas. Trabalhamos com soluções de exclusão mecânica que tornam o local inóspito para pousar e nidificar, sem matar os animais.',
    benefits: [
      'Instalação profissional de espículas anti-pouso',
      'Redes e telas para vãos e platibandas',
      'Dispositivos ultrassônicos e visuais',
      'Limpeza e desinfecção de fezes acumuladas',
      'Garantia por escrito conforme a solução',
    ],
    process: [
      {
        title: 'Avaliação técnica',
        description: 'Visita ao local, medições e proposta da melhor solução.',
      },
      {
        title: 'Limpeza prévia',
        description: 'Remoção e desinfecção de fezes e ninhos antigos.',
      },
      {
        title: 'Instalação',
        description: 'Espículas, redes ou repelentes conforme o projeto.',
      },
    ],
    faqs: [
      {
        question: 'As espículas machucam os pombos?',
        answer:
          'Não. Elas apenas impedem o pouso. Os pombos passam a procurar outro local. É a solução padrão recomendada por programas de manejo de fauna urbana.',
      },
      {
        question: 'Quanto tempo dura a instalação?',
        answer:
          'Espículas e redes profissionais têm garantia por escrito conforme a solução instalada. A vida útil real costuma ser longa com manutenção adequada.',
      },
      {
        question: 'Quais doenças os pombos transmitem?',
        answer:
          'Os principais riscos são: criptococose (fungo presente nas fezes), histoplasmose (doença respiratória por inalação de esporos das fezes secas) e salmonelose (bactéria por contaminação ambiental). Além disso, os pombos carregam parasitas — carrapatos, pulgas, ácaros e piolhos — que migram para o ambiente quando o ninho é abandonado.',
      },
    ],
  },
  {
    slug: 'dedetizacao-de-baratas',
    title: 'Dedetização de Baratas',
    shortTitle: 'Dedetização de Baratas',
    category: 'insetos',
    icon: 'bug',
    metaTitle: 'Dedetização de Baratas em Londrina | Gel e Pulverização | Araújo',
    metaDescription:
      'Dedetização de baratas em Londrina com gel inseticida e pulverização. Eliminamos baratas de cozinha e americanas em residências e comércios.',
    keywords: [
      'dedetização de baratas londrina',
      'eliminar baratas londrina',
      'controle de baratas londrina',
      'baratas de cozinha londrina',
    ],
    hero: {
      headline: 'Dedetização de Baratas em Londrina',
      subheadline:
        'Eliminamos baratas de cozinha e americanas com gel inseticida e pulverização seletiva. Sem cheiro forte e sem precisar sair de casa em boa parte dos casos.',
    },
    intro:
      'Baratas contaminam alimentos e transmitem doenças graves como furunculose, lepra, tuberculose, poliomielite e diarreia. As duas espécies mais comuns no Brasil são a Periplaneta americana (barata voadora ou de esgoto, encontrada em redes de esgoto, caixas de gordura e tubulações) e a Blatella germânica (barata alemã, predominante em cozinhas, eletrodomésticos e frestas). Atacamos a infestação combinando gel inseticida de ação prolongada e baixa toxicidade com pulverização nos focos e bloqueio de pontos de entrada. Para residências, recomenda-se dedetização a cada 3 meses; para comércios, a RDC 622/22 da ANVISA exige periodicidade mensal.',
    benefits: [
      'Gel inseticida inodoro — pode aplicar em cozinhas em uso',
      'Eliminação de até 95% da colônia em 7 a 14 dias',
      'Identificação correta da espécie',
      'Garantia por escrito',
      'Orientação para evitar reinfestação',
    ],
    process: [
      {
        title: 'Identificação',
        description: 'Determinamos a espécie e a origem da infestação.',
      },
      {
        title: 'Aplicação de gel',
        description: 'Pontos estratégicos em armários, eletrodomésticos e frestas.',
      },
      {
        title: 'Pulverização complementar',
        description: 'Em ralos, caixas de inspeção e áreas externas.',
      },
    ],
    faqs: [
      {
        question: 'Por que tenho baratas mesmo limpando tudo?',
        answer:
          'Baratas vêm de ralos, frestas, do vizinho ou em compras (caixas de papelão). Higiene ajuda, mas só a dedetização profissional elimina a colônia.',
      },
      {
        question: 'O gel é seguro para crianças e pets?',
        answer:
          'Sim. É aplicado em pontos inacessíveis (atrás de eletrodomésticos, dentro de frestas) e tem baixíssima toxicidade. É o método mais usado em restaurantes e hospitais.',
      },
    ],
  },
  {
    slug: 'dedetizacao-para-escorpioes-em-londrina',
    title: 'Dedetização de Escorpiões',
    shortTitle: 'Dedetização de Escorpiões',
    category: 'insetos',
    icon: 'alert-triangle',
    metaTitle: 'Dedetização de Escorpiões em Londrina | Araújo DDT',
    metaDescription:
      'Controle de escorpiões em Londrina com técnicas seguras e eficazes. Atendimento emergencial. Risco real — não espere acidente acontecer.',
    keywords: [
      'dedetização de escorpiões londrina',
      'controle de escorpião londrina',
      'escorpião amarelo londrina',
      'eliminar escorpião londrina',
    ],
    hero: {
      headline: 'Dedetização de Escorpiões em Londrina',
      subheadline:
        'Escorpião amarelo é risco real, especialmente para crianças. Atendimento emergencial com técnicas comprovadas.',
    },
    intro:
      'O escorpião amarelo (Tityus serrulatus) é responsável pela maioria dos acidentes graves no Brasil, sendo especialmente perigoso para crianças. Faz reprodução por partenogênese (sem macho), o que acelera a infestação. Combatemos com pulverização seletiva, eliminação de abrigos e controle de baratas (alimento principal).',
    benefits: [
      'Atendimento emergencial em casos de avistamento',
      'Pulverização seletiva em pontos críticos',
      'Eliminação simultânea de baratas (presa do escorpião)',
      'Orientação para bloqueio de entradas',
      'Garantia escrita',
    ],
    process: [
      {
        title: 'Inspeção de abrigos',
        description: 'Ralos, calhas, terrenos, pilhas de entulho, etc.',
      },
      {
        title: 'Pulverização',
        description: 'Produto residual em pontos críticos.',
      },
      {
        title: 'Controle de baratas',
        description: 'Sem alimento, o escorpião não permanece.',
      },
    ],
    faqs: [
      {
        question: 'Vi um escorpião em casa, é grave?',
        answer:
          'Sim, é grave. Onde aparece um, geralmente há outros escondidos. Solicite atendimento imediato. Em caso de picada, vá direto ao pronto-socorro.',
      },
      {
        question: 'Como evitar escorpiões em casa?',
        answer:
          'Mantenha ralos com proteção (tela ou abafador), elimine entulhos e pilhas no quintal, bloqueie frestas e elimine baratas (alimento principal).',
      },
      {
        question: 'Onde os escorpiões costumam se esconder?',
        answer:
          'Terrenos baldios com lixo acumulado, quintais com materiais de construção, caixas de gordura, redes de esgoto, jardins com pedras e entulhos, ralos internos e externos, áreas próximas a fundos de vale e condomínios com falhas estruturais. Recomendamos sacudir roupas e calçados antes do uso quando há histórico na região.',
      },
    ],
  },
  {
    slug: 'dedetizacao-de-carrapatos',
    title: 'Dedetização de Carrapatos',
    shortTitle: 'Dedetização de Carrapatos',
    category: 'insetos',
    icon: 'bug',
    metaTitle: 'Dedetização de Carrapatos em Londrina | Araújo DDT',
    metaDescription:
      'Controle de carrapatos em Londrina para residências, sítios e canis. Eliminamos carrapato-estrela e do cachorro com segurança para pets.',
    keywords: [
      'dedetização de carrapatos londrina',
      'controle de carrapato londrina',
      'carrapato no quintal londrina',
    ],
    hero: {
      headline: 'Dedetização de Carrapatos em Londrina',
      subheadline:
        'Eliminação de carrapatos em quintais, canis e áreas externas com produtos seguros para pets após o período de carência.',
    },
    intro:
      'Carrapatos transmitem doenças graves (febre maculosa, erliquiose, doença de Lyme) e podem se estabelecer em quintais, canis, sítios e parques. Tratamos o ambiente, não apenas o animal — pulverizando áreas externas, frestas e abrigos.',
    benefits: [
      'Tratamento ambiental — onde o animal não alcança',
      'Produtos com baixo impacto para pets após carência',
      'Atendimento a sítios, canis e haras',
      'Orientação sobre tratamento simultâneo do animal',
    ],
    process: [
      {
        title: 'Vistoria',
        description: 'Identificamos focos: muros, frestas, vegetação, casinhas.',
      },
      {
        title: 'Pulverização',
        description: 'Produto residual em áreas críticas.',
      },
      {
        title: 'Retorno',
        description: 'Segunda aplicação para quebrar o ciclo (ovos).',
      },
    ],
    faqs: [
      {
        question: 'Tratar só o cachorro resolve?',
        answer:
          'Não. 90% dos carrapatos estão no ambiente, não no animal. Sem tratar o ambiente, o cachorro será reinfestado.',
      },
      {
        question: 'Meu cachorro pode voltar ao quintal depois da aplicação?',
        answer:
          'Sim, após o período de carência (geralmente 4 a 6 horas, com o produto seco). Nosso técnico orienta no dia.',
      },
    ],
  },
  {
    slug: 'dedetizacao-de-aranhas',
    title: 'Dedetização de Aranhas',
    shortTitle: 'Dedetização de Aranhas',
    category: 'insetos',
    icon: 'bug',
    metaTitle: 'Dedetização de Aranhas em Londrina | Araújo DDT',
    metaDescription:
      'Controle de aranhas em Londrina, incluindo aranha-marrom. Eliminação de abrigos e prevenção. Risco real — atenda emergências com a Araújo.',
    keywords: [
      'dedetização de aranhas londrina',
      'aranha marrom londrina',
      'controle de aranhas londrina',
    ],
    hero: {
      headline: 'Dedetização de Aranhas em Londrina',
      subheadline:
        'Controle de aranhas comuns e da temida aranha-marrom (Loxosceles), com tratamento de abrigos e prevenção.',
    },
    intro:
      'A aranha-marrom é responsável pela maioria dos acidentes aracnídeos graves no Sul do Brasil. Vive escondida atrás de móveis, em entulhos e em roupas guardadas. Nosso protocolo elimina aranhas adultas e ovos, com pulverização em pontos estratégicos.',
    benefits: [
      'Tratamento específico para aranha-marrom',
      'Pulverização em rodapés, atrás de móveis e galerias',
      'Eliminação simultânea de presas (baratinhas, traças)',
      'Orientação sobre prevenção',
    ],
    process: [
      {
        title: 'Inspeção',
        description: 'Procuramos abrigos: rodapés, quadros, atrás de armários, entulhos.',
      },
      {
        title: 'Pulverização',
        description: 'Produto residual de longa duração.',
      },
      {
        title: 'Eliminação de presas',
        description: 'Sem comida, a aranha não permanece.',
      },
    ],
    faqs: [
      {
        question: 'Como identificar uma aranha-marrom?',
        answer:
          'Tamanho de uma moeda de R$1 (com pernas), cor marrom-claro a marrom-escuro, com mancha em formato de violino no cefalotórax. Se encontrar, não toque — chame imediatamente.',
      },
      {
        question: 'Em caso de picada, o que fazer?',
        answer:
          'Vá imediatamente ao pronto-socorro. Se possível, leve a aranha (mesmo morta) para identificação. O soro é eficaz nas primeiras horas.',
      },
    ],
  },
  {
    slug: 'dedetizacao-de-formigas',
    title: 'Dedetização de Formigas',
    shortTitle: 'Dedetização de Formigas',
    category: 'insetos',
    icon: 'bug',
    metaTitle: 'Dedetização de Formigas em Londrina | Araújo DDT',
    metaDescription:
      'Controle de formigas em Londrina com gel iscas que eliminam toda a colônia. Funciona para formiga doméstica, lava-pé e cortadeiras.',
    keywords: [
      'dedetização de formigas londrina',
      'eliminar formigas londrina',
      'controle de formigas londrina',
    ],
    hero: {
      headline: 'Dedetização de Formigas em Londrina',
      subheadline:
        'Eliminação completa da colônia com gel iscas — não só das formigas que você vê.',
    },
    intro:
      'Formigas passam por lugares totalmente sujos — caixas de gordura, esgotos, ralos e lixos — e são vetores de doenças graves como tuberculose e lepra, sendo causadoras de grande parte das infecções hospitalares. Algumas espécies ainda mordem, causam alergia e fazem ninhos dentro de paredes e armários, comprometendo a estrutura. Matar as formigas visíveis não resolve: a rainha continua produzindo. Usamos gel iscas atrativas que as operárias levam para o ninho, eliminando a colônia inteira em 7 a 14 dias. Funciona para formiga doméstica, formiga louca, lava-pé e cortadeiras.',
    benefits: [
      'Elimina a colônia toda (incluindo a rainha)',
      'Gel inodoro e seguro em cozinhas',
      'Identificação da espécie para tratamento certo',
      'Sem necessidade de sair de casa',
    ],
    process: [
      {
        title: 'Identificação',
        description:
          'Cada formiga requer atrativo específico — doce, oleoso ou proteico.',
      },
      {
        title: 'Aplicação de gel',
        description: 'Trilhas e pontos de passagem.',
      },
      {
        title: 'Acompanhamento',
        description: 'Verificamos eliminação completa.',
      },
    ],
    faqs: [
      {
        question: 'Por que não posso matar as formigas com inseticida comum?',
        answer:
          'Você mata as visíveis, mas a rainha continua. Pior: as formigas se dispersam e criam novos ninhos. O gel é levado para a colônia e elimina tudo.',
      },
    ],
  },
  {
    slug: 'dedetizacao-de-percevejos-em-londrina',
    title: 'Dedetização de Percevejos',
    shortTitle: 'Dedetização de Percevejos',
    category: 'insetos',
    icon: 'bug',
    metaTitle: 'Dedetização de Percevejos em Londrina | Araújo DDT',
    metaDescription:
      'Dedetização de percevejos de cama em Londrina com tratamento térmico e pulverização. Atendimento a hotéis, pousadas e residências.',
    keywords: [
      'dedetização de percevejos londrina',
      'percevejo de cama londrina',
      'controle de percevejos londrina',
    ],
    hero: {
      headline: 'Dedetização de Percevejos em Londrina',
      subheadline:
        'Eliminação completa de percevejos de cama em residências, hotéis e pousadas com protocolo rigoroso.',
    },
    intro:
      'O percevejo de cama (Cimex lectularius) é uma das pragas mais difíceis de eliminar. Esconde-se em colchões, cabeceiras, rodapés e tomadas. Nosso protocolo combina pulverização, vaporização térmica e retorno obrigatório para quebrar o ciclo (ovos).',
    benefits: [
      'Protocolo de retorno incluso (ciclo de ovos)',
      'Tratamento de colchões, cabeceiras, rodapés e estofados',
      'Atendimento sigiloso a hotéis e pousadas',
      'Orientação detalhada de preparação',
    ],
    process: [
      {
        title: 'Inspeção minuciosa',
        description: 'Identificamos focos (manchas, casca, ovos).',
      },
      {
        title: 'Tratamento combinado',
        description: 'Pulverização + vapor + pó dessecante em frestas.',
      },
      {
        title: 'Retorno obrigatório',
        description:
          'Em 14 a 21 dias para eliminar ninfas recém-eclodidas.',
      },
    ],
    faqs: [
      {
        question: 'Preciso jogar fora o colchão?',
        answer:
          'Não necessariamente. Em boa parte dos casos, o colchão é tratado e mantido. Em infestações severas, recomendamos a troca.',
      },
      {
        question: 'Quanto tempo demora para eliminar?',
        answer:
          'Com nosso protocolo (2 a 3 aplicações), a infestação é eliminada em 30 a 45 dias. Sem retorno, ovos eclodem e a infestação recomeça.',
      },
    ],
  },
  {
    slug: 'limpeza-de-caixas-de-agua-em-londrina',
    title: 'Limpeza de Caixas de Água',
    shortTitle: 'Limpeza de Caixas',
    category: 'higienizacao',
    icon: 'droplet',
    metaTitle: 'Limpeza de Caixa d\'Água em Londrina | Higienização com Certificado | Araújo DDT',
    metaDescription:
      'Limpeza e higienização de caixas d\'água e cisternas em Londrina. Serviço conforme Portaria MS 888/2021 (ANVISA), com certificado, laudo técnico e fotos. Orçamento grátis.',
    keywords: [
      'limpeza de caixa d\'água londrina',
      'limpeza caixa dagua londrina',
      'higienização caixa de água londrina',
      'higienização de caixa d\'água londrina',
      'limpeza de cisterna londrina',
      'serviço de limpeza caixa d\'água londrina',
      'limpar caixa d água londrina',
      'empresa limpeza caixa d água londrina',
    ],
    hero: {
      headline: 'Limpeza de Caixas de Água e Cisternas em Londrina',
      subheadline:
        'Higienização completa conforme Portaria MS 888/2021 (ANVISA). Certificado, laudo técnico e registro fotográfico do antes e depois.',
    },
    intro:
      'A água que abastece sua casa ou empresa passa pela caixa d\'água — e mesmo que pareça limpa, ela acumula sedimentos, biofilme, ferrugem e outros contaminantes ao longo do tempo. O Ministério da Saúde recomenda limpeza e desinfecção do reservatório a cada 6 meses, ou antes desse prazo quando houver suspeita de contaminação, entrada de animais ou alteração da qualidade da água. Sem manutenção regular, a água pode apresentar alteração de sabor, odor, cor e contaminação microbiológica invisível ao olho nu. A Araújo realiza limpeza e desinfecção de caixas d\'água e cisternas em Londrina com produtos sanitizantes registrados para água potável, emissão de certificado e registro fotográfico do antes e depois.',
    benefits: [
      'Esvaziamento, raspagem, lavagem e desinfecção completa',
      'Produtos registrados para água potável (ANVISA)',
      'Certificado de higienização com fotos do antes e depois',
      'Laudo técnico assinado pelo responsável',
      'Atendimento a condomínios, empresas e residências',
      'Verificação de integridade da caixa e da tampa',
    ],
    process: [
      {
        title: 'Esvaziamento',
        description: 'Esvaziamos o reservatório preservando abastecimento mínimo da casa durante o serviço.',
      },
      {
        title: 'Raspagem e lavagem',
        description: 'Removemos sedimentos, biofilme, ferrugem e resíduos orgânicos das paredes e fundo.',
      },
      {
        title: 'Desinfecção',
        description: 'Aplicamos sanitizante registrado para água potável com tempo de contato adequado e enxágue completo.',
      },
      {
        title: 'Certificado e laudo',
        description: 'Emitimos certificado com data, responsável técnico, fotos e próxima higienização recomendada.',
      },
    ],
    faqs: [
      {
        question: 'Vou ficar sem água durante o serviço?',
        answer:
          'Na maioria dos casos, não — ou por pouquíssimo tempo. Em residências com reservatório suficiente, você nem percebe. Quando é necessário esvaziar completamente, a pausa é breve. Nosso técnico avalia a situação no local antes de começar e avisa com antecedência se houver qualquer necessidade de interrupção.',
      },
      {
        question: 'O certificado vale para condomínio e vigilância sanitária?',
        answer:
          'Sim. Emitimos certificado válido para apresentação a vigilância sanitária, síndicos e auditorias. O documento contém data, volume do reservatório, procedimento executado, produtos utilizados e assinatura do responsável técnico.',
      },
      {
        question: 'Com que frequência devo fazer a higienização da caixa d\'água?',
        answer:
          'O Ministério da Saúde recomenda limpeza e desinfecção do reservatório a cada 6 meses, prazo adotado pelas vigilâncias sanitárias de todo o Brasil. Em condomínios com alta demanda, escolas ou clínicas — onde a qualidade da água é crítica — recomenda-se a cada 3 meses. Mesmo quando a água parece limpa, sedimentos e biofilme se formam de forma invisível e podem comprometer a saúde dos moradores.',
      },
      {
        question: 'Como saber se minha caixa d\'água precisa de limpeza?',
        answer:
          'Os sinais mais comuns são: gosto ou cheiro diferente na água (tipo mofo ou terra), coloração levemente amarelada ou turva, sensação de partículas ao beber, presença de insetos ou fezes de pombos próximos à tampa, ou simplesmente ter passado mais de 6 meses desde a última higienização. Se você nunca fez ou não lembra quando foi, é hora de agendar.',
      },
      {
        question: 'Quanto custa a limpeza de caixa d\'água em Londrina?',
        answer:
          'O valor varia conforme o volume do reservatório, o tipo de material (polietileno, fibra de vidro, alvenaria), a altura de instalação e o acesso. Uma caixa residencial padrão (500L a 1.000L) tem serviço mais simples; condomínios com reservatórios de 5.000L ou mais exigem mais tempo e equipe. Solicite orçamento gratuito pelo WhatsApp — avaliamos sem compromisso e com resposta rápida.',
      },
      {
        question: 'Precisam esvaziar a caixa antes de chamar vocês?',
        answer:
          'Não. O esvaziamento já faz parte do nosso processo. Basta garantir acesso à caixa e ter reserva mínima de água para o período da higienização. Informamos com antecedência o tempo estimado sem fornecimento.',
      },
      {
        question: 'A higienização serve também para cisternas?',
        answer:
          'Sim. Realizamos higienização de cisternas residenciais e industriais, além de caixas d\'água de todos os materiais: polietileno, fibra de vidro, amianto (com protocolo específico) e alvenaria. Cada tipo tem suas particularidades e o técnico adapta o procedimento.',
      },
      {
        question: 'A água fica segura para consumo logo após a limpeza?',
        answer:
          'Sim. Após a desinfecção, realizamos enxágue completo com água limpa. Só liberamos o reservatório quando confirmamos que não há resíduo de sanitizante. Os produtos utilizados são registrados para uso em água potável e seguros para consumo imediato após o procedimento.',
      },
    ],
  },
  {
    slug: 'sanitizacao-de-ambientes-londrina',
    title: 'Sanitização de Ambientes',
    shortTitle: 'Sanitização',
    category: 'higienizacao',
    icon: 'spray',
    metaTitle: 'Sanitização de Ambientes em Londrina | Araújo DDT',
    metaDescription:
      'Sanitização de ambientes em Londrina contra vírus, bactérias, fungos e ácaros. Para escritórios, clínicas, escolas, veículos e residências.',
    keywords: [
      'sanitização de ambientes londrina',
      'desinfecção de ambientes londrina',
      'higienização de ambientes londrina',
    ],
    hero: {
      headline: 'Sanitização de Ambientes em Londrina',
      subheadline:
        'Eliminação de vírus, bactérias, fungos e ácaros com produtos hospitalares aplicados por atomização ou nebulização.',
    },
    intro:
      'Sanitização vai além da limpeza: elimina agentes patogênicos (vírus, bactérias, fungos e ácaros) que causam doenças infecciosas e respiratórias. Previne o contágio por gripe, pneumonia, tuberculose e Covid-19, além de combater processos alérgicos como rinite, asma e bronquite. Indicada para escritórios, clínicas, escolas, academias, veículos, residências de imunossuprimidos e qualquer ambiente fechado com circulação de pessoas — quanto maior o fluxo, maior deve ser a frequência.',
    benefits: [
      'Produtos com registro hospitalar',
      'Atomização ou nebulização (cobre superfícies altas)',
      'Sem necessidade de retirar móveis',
      'Reentrada rápida (1 a 2 horas)',
      'Certificado de sanitização',
    ],
    process: [
      {
        title: 'Preparação',
        description: 'Cobrimos eletrônicos sensíveis e alimentos.',
      },
      {
        title: 'Aplicação',
        description: 'Atomização em todas as superfícies.',
      },
      {
        title: 'Reentrada',
        description: 'Liberação do ambiente após tempo de contato.',
      },
    ],
    faqs: [
      {
        question: 'Sanitização funciona contra Covid e gripe?',
        answer:
          'Sim. Usamos produtos com eficácia comprovada contra coronavírus, influenza e demais vírus respiratórios.',
      },
      {
        question: 'Quanto tempo dura o efeito?',
        answer:
          'A sanitização elimina os patógenos presentes no momento. Em ambientes de alto fluxo, recomenda-se repetição mensal ou após casos confirmados.',
      },
    ],
  },
  {
    slug: 'higienizacao-de-bebedouros-em-londrina',
    title: 'Higienização de Bebedouros em Londrina',
    shortTitle: 'Higienização de Bebedouros',
    category: 'higienizacao',
    icon: 'dispenser',
    metaTitle: 'Higienização de Bebedouros em Londrina | Araújo DDT',
    metaDescription:
      'Higienização e limpeza profissional de bebedouros e purificadores em Londrina. Desinfecção interna, sanitização externa e troca de filtros — escritórios, escolas, indústrias e clínicas.',
    keywords: [
      'higienização de bebedouros londrina',
      'limpeza de bebedouro londrina',
      'troca de filtro bebedouro londrina',
      'sanitização de purificadores londrina',
    ],
    hero: {
      headline: 'Higienização de Bebedouros e Purificadores',
      subheadline:
        'Limpeza interna profunda, desinfecção das superfícies e troca dos filtros — água potável e segura para o seu time, alunos ou clientes.',
    },
    intro:
      'Bebedouros e purificadores acumulam biofilme, fungos e bactérias dentro dos reservatórios, mangueiras e bicos de saída — mesmo quando parecem limpos por fora. A higienização profissional combina três etapas: limpeza interna do reservatório, sanitização externa das superfícies de contato (bicos, botões, bandejas) e troca dos filtros conforme a recomendação do fabricante. Recomendada a cada 6 meses em ambientes residenciais e a cada 3 meses em escritórios, escolas, clínicas e indústrias com alto fluxo de uso.',
    benefits: [
      'Limpeza e desinfecção interna do reservatório',
      'Sanitização externa de bicos, botões e bandejas',
      'Troca de filtros (refis originais ou compatíveis)',
      'Produtos sem cheiro residual e atóxicos após enxágue',
      'Certificado de higienização para vigilância sanitária',
      'Atende escritórios, escolas, clínicas, academias e indústrias',
    ],
    process: [
      {
        title: 'Diagnóstico',
        description: 'Identificamos o modelo do bebedouro/purificador e o tipo de filtro compatível.',
      },
      {
        title: 'Desmontagem e limpeza interna',
        description: 'Reservatório, mangueiras e bicos passam por limpeza com produto sanitizante e enxágue completo.',
      },
      {
        title: 'Troca do filtro',
        description: 'Substituição do refi pelo modelo original ou compatível, conforme especificação do fabricante.',
      },
      {
        title: 'Sanitização externa',
        description: 'Botões, bandejas e superfícies de contato recebem desinfecção com produto de uso alimentar.',
      },
      {
        title: 'Certificado',
        description: 'Emitimos comprovante com data, próxima troca recomendada e assinatura do técnico.',
      },
    ],
    faqs: [
      {
        question: 'Com que frequência o bebedouro precisa ser higienizado?',
        answer:
          'Recomendamos a cada 6 meses em residências e a cada 3 meses em ambientes coletivos (escritórios, escolas, academias, clínicas). A frequência pode ser maior em locais com mais de 50 usuários diários.',
      },
      {
        question: 'A troca do filtro está incluída no serviço?',
        answer:
          'Sim. Já trazemos o filtro compatível com o seu modelo. Trabalhamos com refis originais e compatíveis certificados pelo INMETRO.',
      },
      {
        question: 'Vocês emitem certificado?',
        answer:
          'Sim. Emitimos certificado de higienização com data, próxima troca recomendada e assinatura do técnico responsável — válido para vigilância sanitária, auditorias e visitas de NR/SESMT.',
      },
      {
        question: 'Atendem contratos para várias unidades?',
        answer:
          'Sim. Atendemos redes de lojas, escolas, escritórios e indústrias com cronograma fixo de higienização para todas as unidades, com relatório consolidado por filial.',
      },
    ],
  },
  {
    slug: 'dac-divisao-de-atendimento-a-condominios',
    title: 'DAC — Divisão de Atendimento a Condomínios',
    shortTitle: 'Atendimento a Condomínios',
    category: 'programas',
    icon: 'building',
    metaTitle: 'Controle de Pragas para Condomínios em Londrina | DAC | Araújo',
    metaDescription:
      'Divisão exclusiva de atendimento a condomínios em Londrina. Contratos personalizados, atendimento emergencial e documentação para AGE/AGO.',
    keywords: [
      'controle de pragas condomínio londrina',
      'dedetização condomínio londrina',
      'empresa de dedetização para condomínios londrina',
    ],
    hero: {
      headline: 'Atendimento Especializado para Condomínios',
      subheadline:
        'Divisão dedicada aos síndicos: contratos sob medida, atendimento emergencial e documentação completa para prestação de contas.',
    },
    intro:
      'Condomínios têm necessidades específicas: áreas comuns, garagem, jardins, caixas d\'água, monitoramento de pragas e documentação para a assembleia. Nossa DAC oferece contratos personalizados com cronograma anual, equipe dedicada e relatórios técnicos para o síndico apresentar nas reuniões.',
    benefits: [
      'Contrato anual com cronograma de visitas',
      'Atendimento emergencial via WhatsApp',
      'Relatórios técnicos para AGO/AGE',
      'Inclui dedetização, desratização, limpeza de caixas e análise físico-química e microbiológica de água',
      'Empresa com Alvará de Funcionamento, Licença CEVS e CRQ',
      'Comunicação direta com síndico ou administradora',
    ],
    process: [
      {
        title: 'Vistoria inicial',
        description: 'Mapeamento do condomínio e proposta personalizada.',
      },
      {
        title: 'Contrato anual',
        description: 'Cronograma fixo de manutenção preventiva.',
      },
      {
        title: 'Execução periódica',
        description: 'Visitas técnicas, registros e relatórios.',
      },
      {
        title: 'Suporte ao síndico',
        description: 'Documentação para reuniões e atendimento de emergências.',
      },
    ],
    faqs: [
      {
        question: 'Vocês atendem condomínios de qualquer porte?',
        answer:
          'Sim. Atendemos desde edifícios residenciais pequenos a grandes condomínios horizontais e comerciais.',
      },
      {
        question: 'Cobram visita para fazer orçamento?',
        answer:
          'Não. A vistoria e o orçamento são gratuitos para condomínios.',
      },
      {
        question: 'O que o síndico precisa verificar ao contratar uma dedetizadora?',
        answer:
          'Três documentos são essenciais: Alvará de Funcionamento (prefeitura), Licença CEVS (Cadastro Estadual de Vigilância Sanitária) e licença do CRQ (Conselho Regional de Química), que garante o uso de produtos e métodos dentro da lei. A Araújo possui todas e fornece cópias mediante solicitação.',
      },
    ],
  },
  {
    slug: 'hidrojateamento-em-londrina',
    title: 'Hidrojateamento de Alta Pressão',
    shortTitle: 'Hidrojateamento',
    category: 'desentupimento',
    icon: 'water-jet',
    metaTitle: 'Hidrojateamento em Londrina | Alta Pressão | Araújo DDT',
    metaDescription:
      'Hidrojateamento de alta pressão em Londrina para desobstrução de tubulações, redes coletoras e limpeza de superfícies. Equipamento profissional e atendimento emergencial.',
    keywords: [
      'hidrojateamento londrina',
      'hidrojateamento de alta pressão londrina',
      'desobstrução de tubulação londrina',
      'limpeza de tubulação alta pressão londrina',
      'hidrojato londrina',
    ],
    hero: {
      headline: 'Hidrojateamento de Alta Pressão em Londrina',
      subheadline:
        'Água pressurizada por motobombas e bicos rotativos para desobstruir tubulações, redes coletoras e limpar superfícies — sem quebrar piso nem parede.',
    },
    intro:
      'O Hidrojateamento de Alta Pressão utiliza água pressurizada por motobombas e bicos rotativos acoplados a lanças ou mangueiras. É indicado para desobstrução de tubulações, limpeza de redes coletoras, caixas de gordura, galerias pluviais e higienização de superfícies. Por trabalhar apenas com água, dispensa produtos químicos agressivos, não danifica a tubulação e remove gordura, raízes, incrustações e resíduos que a desobstrução mecânica comum não alcança.',
    benefits: [
      'Desobstrução sem quebrar piso, parede ou tubulação',
      'Remove gordura, incrustações, raízes e resíduos sólidos',
      'Limpeza feita apenas com água, sem produto químico agressivo',
      'Pressão regulável conforme o material e o diâmetro do tubo',
      'Atende residências, comércios, indústrias e condomínios',
      'Atendimento emergencial e orçamento sem compromisso',
    ],
    process: [
      {
        title: 'Diagnóstico da rede',
        description:
          'Identificamos o ponto da obstrução, o material e o diâmetro da tubulação para definir a pressão correta.',
      },
      {
        title: 'Posicionamento do equipamento',
        description:
          'Instalamos a motobomba e escolhemos o bico rotativo adequado ao serviço — desobstrução ou limpeza de superfície.',
      },
      {
        title: 'Jateamento',
        description:
          'A água pressurizada percorre a tubulação rompendo a obstrução e arrastando gordura, lodo e incrustações até a saída.',
      },
      {
        title: 'Teste de vazão',
        description:
          'Conferimos o escoamento livre e orientamos sobre a manutenção preventiva da rede.',
      },
    ],
    faqs: [
      {
        question: 'O hidrojateamento pode danificar minha tubulação?',
        answer:
          'Não, quando executado por equipe técnica. A pressão é regulada conforme o material e o diâmetro do tubo (PVC, ferro fundido, concreto). Por isso o diagnóstico prévio é obrigatório no nosso protocolo.',
      },
      {
        question: 'Qual a diferença entre hidrojateamento e desentupimento comum?',
        answer:
          'O desentupimento mecânico abre uma passagem no ponto obstruído. O hidrojateamento limpa a tubulação inteira, removendo a camada de gordura e incrustação aderida à parede do tubo. Por isso o resultado dura muito mais e reduz a chance de entupir de novo.',
      },
      {
        question: 'Para que mais serve o hidrojateamento além de tubulação?',
        answer:
          'Também usamos para limpeza de superfícies: pisos industriais, pátios, calçadas, fachadas, tanques, caixas de gordura, galerias pluviais e remoção de resíduos incrustados em estruturas.',
      },
      {
        question: 'Precisa quebrar piso ou parede?',
        answer:
          'Na grande maioria dos casos, não. O jato entra pela própria rede — caixa de inspeção, ralo ou ponto de acesso — e atua de dentro da tubulação.',
      },
    ],
  },
  {
    slug: 'desentupimento-em-londrina',
    title: 'Desentupimento em Londrina',
    shortTitle: 'Desentupimentos',
    category: 'desentupimento',
    icon: 'plunger',
    metaTitle: 'Desentupimento em Londrina | Pia, Ralo e Vaso | Araújo',
    metaDescription:
      'Desentupimento em Londrina de pias, ralos, vasos sanitários, caixas de gordura e redes coletoras. Equipamento profissional, sem quebra-quebra e com garantia.',
    keywords: [
      'desentupimento londrina',
      'desentupidora londrina',
      'desentupimento de tubulação londrina',
      'desentupimento de pia londrina',
      'desentupimento de vaso sanitário londrina',
      'desentupimento de caixa de gordura londrina',
    ],
    hero: {
      headline: 'Desentupimento em Londrina',
      subheadline:
        'Pias, ralos, vasos sanitários, caixas de gordura e redes coletoras desobstruídos com equipamento profissional, sem quebrar piso ou parede.',
    },
    intro:
      'O serviço de desentupimento consiste na remoção de obstruções em encanamentos, pias, ralos, vasos sanitários e redes coletoras. Utilizamos equipamentos específicos para restaurar o fluxo normal e evitar danos maiores ao sistema hidráulico. Entupimento não se resolve sozinho: quanto mais tempo a água fica represada, maior o risco de refluxo, mau cheiro, infiltração e proliferação de baratas e ratos que sobem pela tubulação.',
    benefits: [
      'Desobstrução sem quebrar piso, parede ou tubulação',
      'Pias, ralos, vasos, caixas de gordura, colunas e tubulações em geral',
      'Equipamentos rotativos e hidrojateamento conforme o caso',
      'Atendimento emergencial para refluxo e transbordamento',
      'Residências, comércios, indústrias e condomínios',
      'Orientação para evitar reincidência e garantia do serviço',
    ],
    process: [
      {
        title: 'Avaliação do entupimento',
        description:
          'Localizamos o ponto obstruído e identificamos a causa: gordura, cabelo, raiz, resíduo sólido ou trecho danificado.',
      },
      {
        title: 'Escolha da técnica',
        description:
          'Equipamento rotativo, sonda ou hidrojateamento de alta pressão, conforme o tipo e a localização da obstrução.',
      },
      {
        title: 'Desobstrução',
        description:
          'Removemos o bloqueio e liberamos a passagem sem danificar a tubulação.',
      },
      {
        title: 'Teste e orientação',
        description:
          'Testamos o escoamento e orientamos sobre limpeza preventiva da caixa de gordura e uso correto da rede.',
      },
    ],
    faqs: [
      {
        question: 'Precisa quebrar piso ou parede para desentupir?',
        answer:
          'Na grande maioria dos atendimentos, não. Trabalhamos pelos pontos de acesso da própria rede (ralos, caixas de inspeção, vaso sanitário). A quebra só entra em cena quando há tubulação rompida ou colapsada, e sempre com autorização prévia do cliente.',
      },
      {
        question: 'Vocês atendem emergência?',
        answer:
          'Sim. Refluxo de água servida e entupimento em comércio não esperam. Chame pelo WhatsApp que priorizamos o atendimento.',
      },
      {
        question: 'Produto desentupidor de supermercado resolve?',
        answer:
          'Raramente, e pode piorar. A soda cáustica endurece a gordura em trechos mais adiante da tubulação e ainda ataca tubos e vedações antigas. O desentupimento mecânico ou por hidrojateamento remove a obstrução de fato.',
      },
      {
        question: 'Por que a pia entope sempre no mesmo lugar?',
        answer:
          'Geralmente porque existe uma camada de gordura acumulada na parede do tubo, que reduz o diâmetro útil. O desentupimento pontual abre uma passagem, mas a camada continua ali. Nesses casos indicamos o hidrojateamento, que limpa a tubulação inteira.',
      },
      {
        question: 'Entupimento tem relação com barata e rato?',
        answer:
          'Sim. Tubulação obstruída e caixa de gordura suja são rota e abrigo de baratas americanas e roedores. Por isso muitos clientes contratam desentupimento junto com a dedetização: resolve a origem, não só o sintoma.',
      },
    ],
  },
];

export const servicesBySlug = Object.fromEntries(
  services.map((s) => [s.slug, s])
);

export const categoryLabels: Record<Service['category'], string> = {
  insetos: 'Insetos',
  roedores: 'Roedores',
  'aves-morcegos': 'Aves e Morcegos',
  higienizacao: 'Higienização',
  desentupimento: 'Desentupimento e Hidrojateamento',
  programas: 'Programas e Contratos',
};
