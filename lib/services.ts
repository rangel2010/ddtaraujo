export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'insetos' | 'roedores' | 'aves-morcegos' | 'higienizacao' | 'programas';
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
      headline: 'Dedetização em Londrina com Garantia',
      subheadline:
        'Mais de 40 anos eliminando pragas em residências, empresas, indústrias e condomínios em toda a região.',
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
          'Sim. Utilizamos produtos registrados na ANVISA e indicamos o tempo de reentrada após cada aplicação (geralmente 2 a 4 horas). Para casos sensíveis, oferecemos produtos antialérgicos e inodoros.',
      },
      {
        question: 'Quanto tempo dura o efeito da dedetização?',
        answer:
          'Todos os nossos serviços têm garantia por escrito, conforme a praga e o ambiente. Em programas contínuos (CIPV) o controle é permanente, com visitas periódicas.',
      },
      {
        question: 'Preciso sair de casa durante o serviço?',
        answer:
          'Recomendamos que pessoas e pets fiquem fora do ambiente durante a aplicação e por algumas horas após, dependendo do produto utilizado. Nosso técnico orientará você no dia.',
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
      'Desinsetização profissional em Londrina contra baratas, formigas, pulgas, moscas e outros insetos. Garantia escrita e produtos seguros para família e pets.',
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
    ],
  },
  {
    slug: 'controle-de-morcegos-em-londrina',
    title: 'Controle de Morcegos',
    shortTitle: 'Controle de Morcegos',
    category: 'aves-morcegos',
    icon: 'moon',
    metaTitle: 'Controle de Morcegos em Londrina | Manejo Ecológico | Araújo',
    metaDescription:
      'Controle e desalojamento de morcegos em Londrina de forma ecológica e legal. Equipe treinada, manejo sem matar os animais e vedação de pontos de abrigo.',
    keywords: [
      'controle de morcegos londrina',
      'desalojamento de morcegos londrina',
      'morcegos no telhado londrina',
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
      'Equipe treinada com vacinação antirrábica em dia',
      'Vedação definitiva de pontos de abrigo',
      'Limpeza e desinfecção do local',
      'Orientação sobre prevenção de raiva',
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
          'Pode transmitir, sim. Por isso é fundamental que o manejo seja feito por equipe treinada e vacinada. Se você foi mordido ou teve contato direto, procure imediatamente um posto de saúde.',
      },
    ],
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
    metaTitle: 'Limpeza de Caixa d\'Água em Londrina | Araújo DDT',
    metaDescription:
      'Limpeza e desinfecção de caixas d\'água e cisternas em Londrina conforme recomendação ANVISA (a cada 6 meses). Emissão de certificado.',
    keywords: [
      'limpeza de caixa d\'água londrina',
      'limpeza de cisterna londrina',
      'higienização caixa de água londrina',
    ],
    hero: {
      headline: 'Limpeza de Caixas de Água e Cisternas',
      subheadline:
        'A ANVISA recomenda limpeza a cada 6 meses. Fazemos com certificado e produtos próprios para água potável.',
    },
    intro:
      'A água que abastece sua casa ou empresa passa pela caixa — e ela acumula sedimentos, biofilme e até insetos. A ANVISA recomenda limpeza e desinfecção a cada 6 meses. Fazemos o serviço completo com produtos sanitizantes próprios para água potável e emissão de certificado.',
    benefits: [
      'Esvaziamento, raspagem, lavagem e desinfecção',
      'Produtos próprios para água potável',
      'Certificado de higienização',
      'Atendimento a condomínios e empresas',
      'Verificação de integridade da caixa e tampa',
    ],
    process: [
      {
        title: 'Esvaziamento',
        description: 'Reservamos a água final para sua casa.',
      },
      {
        title: 'Raspagem e lavagem',
        description: 'Remoção de sedimentos e biofilme.',
      },
      {
        title: 'Desinfecção',
        description: 'Aplicação de sanitizante e enxágue.',
      },
      {
        title: 'Certificado',
        description: 'Documento válido com data e responsável técnico.',
      },
    ],
    faqs: [
      {
        question: 'Vou ficar sem água durante o serviço?',
        answer:
          'Por algumas horas, sim — pelo tempo de esvaziar, limpar e encher novamente (em média 3 a 4 horas).',
      },
      {
        question: 'O certificado vale para condomínio?',
        answer:
          'Sim. Emitimos certificado válido para apresentação a vigilância sanitária, síndicos e auditorias.',
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
];

export const servicesBySlug = Object.fromEntries(
  services.map((s) => [s.slug, s])
);

export const categoryLabels: Record<Service['category'], string> = {
  insetos: 'Insetos',
  roedores: 'Roedores',
  'aves-morcegos': 'Aves e Morcegos',
  higienizacao: 'Higienização',
  programas: 'Programas e Contratos',
};
