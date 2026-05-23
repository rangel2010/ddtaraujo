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
  /** Se true, fixa o artigo na primeira posição da listagem (independente da data). */
  featured?: boolean;
  content: BlogContent[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'como-saber-se-tem-cupim-em-casa-5-sinais',
    title: 'Como saber se tem cupim em casa? 5 sinais antes que seja tarde',
    date: '2026-05-15',
    category: 'Cupins',
    excerpt:
      'Cupins agem em silêncio: quando aparecem, o estrago já é grande. Veja os 5 sinais que indicam infestação e o que fazer ao identificar.',
    metaTitle: 'Como saber se tem cupim em casa? 5 sinais | Araújo',
    metaDescription:
      'Cupins agem em silêncio. Veja os 5 sinais que indicam infestação de cupim em casa: pó, furos, madeira oca, asas descartadas e túneis de terra.',
    readingMinutes: 2,
    coverImage: '/blog/como-saber-se-tem-cupim-em-casa-5-sinais.jpg',
    coverAlt: 'Madeira com furos causados por cupins',
    coverCredit: { name: 'Roberto Carlos Román Don', url: 'https://unsplash.com/@srcharls' },
    content: [
      {
        type: 'p',
        text: 'Cupins são uma das pragas urbanas mais traiçoeiras: trabalham em silêncio, dentro da madeira, e quando a infestação fica visível o estrago já está avançado. Móveis, rodapés, batentes, vigas e até portas podem virar uma casca oca por dentro sem que ninguém perceba.',
      },
      {
        type: 'p',
        text: 'A boa notícia é que existem sinais claros que indicam a presença deles. Quanto mais cedo identificar, mais barato e simples é o tratamento. Conheça os 5 principais:',
      },
      { type: 'h2', text: '1. Pó ou serragem próximo a móveis' },
      {
        type: 'p',
        text: 'O resíduo que se acumula no chão perto de móveis, batentes, janelas ou rodapés é o sinal mais clássico — especialmente o cupim de madeira seca, que expele pelotas pequenas (parecidas com grãos de café moído ou serragem fina). Se você varre e o pó volta a aparecer no mesmo lugar dias depois, há infestação ativa.',
      },
      { type: 'h2', text: '2. Pequenos furos na madeira' },
      {
        type: 'p',
        text: 'Furinhos circulares de 1 a 3 milímetros em móveis, vigas ou batentes são pontos de saída onde o cupim expele o pó. Eles costumam aparecer em sequência, alinhados pela superfície. Não confunda com furos de prego antigos — cupim faz furos com bordas limpas e tamanho uniforme.',
      },
      { type: 'h2', text: '3. Madeira oca ao bater' },
      {
        type: 'p',
        text: 'Bata levemente em batentes, rodapés e móveis com o dedo ou um lápis. Madeira saudável tem som maciço. Madeira com cupim soa "oca", "vazia", às vezes com leve ruído de papelão. Esse teste rápido funciona muito bem em casas que você suspeita estarem infestadas.',
      },
      { type: 'h2', text: '4. Asas descartadas perto de janelas e portas' },
      {
        type: 'p',
        text: 'Uma vez por ano, geralmente após chuvas de verão, os cupins fazem a revoada: alados saem do ninho em busca de parceiros e novos locais. Depois do voo, perdem as asas e fundam novas colônias. Se você encontrar asas espalhadas perto de janelas, portas ou luminárias, é sinal de colônia ativa por perto.',
      },
      { type: 'h2', text: '5. Túneis de terra em paredes ou estruturas' },
      {
        type: 'p',
        text: 'Esse é o sinal do cupim subterrâneo (mais agressivo). Eles constroem túneis de barro do solo até as estruturas de madeira da casa — você vê linhas marrons subindo por fundações, paredes externas, pilares de garagem. Em obras novas, esse é o cupim que pode comprometer vigas estruturais em pouco tempo.',
      },
      { type: 'h2', text: 'Cupim de madeira seca x cupim subterrâneo' },
      {
        type: 'p',
        text: 'Saber qual é a espécie muda o tratamento. O cupim de madeira seca vive dentro da própria madeira infestada — móveis, batentes, portas. Forma colônias menores, e o tratamento é focal (injeção de cupinicida nos pontos infestados). O cupim subterrâneo vive no solo e ataca a casa pela base — colônias gigantes, tratamento envolve barreira química no solo.',
      },
      { type: 'h2', text: 'O que fazer ao identificar' },
      {
        type: 'ul',
        items: [
          'NÃO tente exterminar sozinho com inseticida comum — só mata os visíveis e espalha a colônia',
          'Não fure ou desmonte os pontos infestados (atrapalha a vistoria técnica)',
          'Marque os locais onde viu os sinais (foto ajuda)',
          'Chame uma empresa especializada para vistoria — o diagnóstico correto da espécie é o que define o tratamento',
        ],
      },
      {
        type: 'p',
        text: 'A Araújo faz vistoria técnica gratuita de cupins em Londrina e região. Identifica a espécie, mapeia a infestação e propõe o tratamento adequado — com garantia escrita.',
      },
    ],
  },
  {
    slug: '5-sinais-de-que-sua-casa-tem-ratos',
    title: '5 sinais de que sua casa tem ratos (mesmo sem ver nenhum)',
    date: '2026-05-10',
    category: 'Roedores',
    excerpt:
      'Ratos são noturnos e cautelosos — você raramente vê um, mas eles deixam pistas claras. Saiba os 5 sinais antes que a infestação se espalhe.',
    metaTitle: '5 Sinais de Ratos em Casa | Como Identificar | Araújo',
    metaDescription:
      'Ratos são noturnos e cautelosos. Veja os 5 sinais principais: fezes, roeduras, barulhos no forro, marcas de gordura e odor. Saiba o que fazer.',
    readingMinutes: 2,
    coverImage: '/blog/5-sinais-de-que-sua-casa-tem-ratos.jpg',
    coverAlt: 'Rato em close-up sobre superfície de madeira',
    coverCredit: { name: 'Alexander Crawley', url: 'https://unsplash.com/@xander_crawley' },
    content: [
      {
        type: 'p',
        text: 'Ratos sabem se esconder. São animais predominantemente noturnos, cautelosos e adaptados a viver perto de humanos sem serem percebidos. Quando alguém finalmente vê um durante o dia, geralmente é porque a colônia já está grande — ratos saem em horário visível só quando há tantos competindo por comida que alguns têm que arriscar.',
      },
      {
        type: 'p',
        text: 'A boa notícia é que mesmo sem ver os animais, dá pra identificar a infestação por pistas que eles deixam. Quanto antes você reconhecer os sinais, mais fácil é controlar. Veja os 5 principais:',
      },
      { type: 'h2', text: '1. Fezes espalhadas pelo ambiente' },
      {
        type: 'p',
        text: 'É o sinal mais inequívoco. As fezes ficam em locais por onde passam — atrás de eletrodomésticos, dentro de gavetas pouco usadas, em despensas, próximas a fontes de comida. A forma ajuda a identificar a espécie: ratazana (rato de esgoto) deixa fezes em forma de cápsula com pontas arredondadas; rato de telhado deixa fezes mais finas e pontiagudas; camundongo deixa fezes muito pequenas (3-6mm), parecidas com grãos de arroz pretos.',
      },
      { type: 'h2', text: '2. Roeduras em embalagens, fios e madeira' },
      {
        type: 'p',
        text: 'Ratos precisam roer constantemente porque seus dentes nunca param de crescer. Embalagens de plástico com buracos circulares, sacos de ração ou alimentos com rasgos típicos, fios elétricos com a capa mordida (perigo de incêndio), batentes de madeira com marcas — todos são sinais clássicos. Em comércios, conferir periodicamente caixas de papelão e embalagens é hábito que evita prejuízo.',
      },
      { type: 'h2', text: '3. Barulhos no forro à noite' },
      {
        type: 'p',
        text: 'Sons de corrida, arranhões, "pulos" no forro durante a madrugada são típicos de rato de telhado (Rattus rattus), espécie que prefere áreas altas: forros, sótãos, vigas. Se você escuta barulho mas não vê o animal, provavelmente está lidando com essa espécie. Em casas próximas a árvores grandes ou ligações com prédios vizinhos, o telhado é rota natural.',
      },
      { type: 'h2', text: '4. Marcas escuras nas paredes (trilhas de gordura)' },
      {
        type: 'p',
        text: 'Ratos passam sempre pelas mesmas rotas, encostando o corpo nas paredes. A pelagem solta gordura e sujeira que vai marcando o caminho — você vê linhas escuras, meio amarronzadas, em rodapés, cantos de parede, frestas de armário. Quanto mais nítidas as marcas, mais tempo a passagem é usada. Isso ajuda a empresa de controle a posicionar iscas e armadilhas nos pontos certos.',
      },
      { type: 'h2', text: '5. Odor característico em locais fechados' },
      {
        type: 'p',
        text: 'Onde há colônia ativa, há odor — um cheiro azedo, amoniacal, vindo da urina acumulada. É mais perceptível em ambientes fechados (despensas, garagens, espaços entre paredes). Se você abre um armário ou despensa e sente um cheiro forte que não consegue identificar, vale considerar a possibilidade de infestação.',
      },
      { type: 'h2', text: 'O que fazer ao identificar' },
      {
        type: 'ul',
        items: [
          'NÃO use raticidas comuns sem proteção — risco pra crianças e pets',
          'Não jogue isca solta no ambiente — ratos podem morrer dentro de paredes e gerar mau cheiro intenso',
          'Vede frestas evidentes (entradas de cano, ralos sem proteção), mas não tente fechar tudo de vez (rato encurralado fica mais agressivo)',
          'Elimine fontes de alimento: lixo bem fechado, ração de pet recolhida à noite, sobras de comida limpas',
          'Chame uma empresa especializada — o controle profissional usa porta-iscas lacrados (seguros para crianças e pets) e iscas com efeito retardado que fazem o rato sair pra morrer fora do ambiente',
        ],
      },
      {
        type: 'p',
        text: 'A Araújo faz desratização em residências, comércios e indústrias em Londrina e região com produtos registrados na ANVISA, porta-iscas lacrados e monitoramento periódico. Garantia escrita com retornos.',
      },
    ],
  },
  {
    slug: 'por-que-empresas-precisam-cipv-controle-integrado-de-pragas',
    title: 'Por que indústrias, hospitais e restaurantes precisam de CIPV (e dedetização pontual não basta)',
    date: '2026-05-05',
    category: 'Programa Empresarial',
    excerpt:
      'Dedetização pontual resolve quando aparece. Mas pra empresas com fiscalização sanitária, o CIPV é exigência por lei — entenda a diferença.',
    metaTitle: 'Por que empresas precisam de CIPV | Araújo Dedetizadora',
    metaDescription:
      'CIPV é o programa contínuo de controle de pragas exigido pela ANVISA para indústrias, hospitais e restaurantes. Entenda a diferença para dedetização pontual.',
    readingMinutes: 3,
    coverImage: '/blog/por-que-empresas-precisam-cipv-controle-integrado-de-pragas.jpg',
    coverAlt: 'Edifício comercial moderno em perspectiva',
    coverCredit: { name: 'Luke van Zyl', url: 'https://unsplash.com/@lukevz' },
    content: [
      {
        type: 'p',
        text: 'Existem duas formas muito diferentes de fazer controle de pragas: a **pontual** (chama quando aparece o problema, resolve, vai embora) e a **contínua** (visitas programadas, monitoramento, documentação técnica). Pra uma residência, a pontual é o normal. Pra empresas com fiscalização sanitária, a contínua não é opção — é exigência.',
      },
      { type: 'h2', text: 'O que é CIPV?' },
      {
        type: 'p',
        text: 'CIPV é a sigla de **Controle Integrado de Pragas e Vetores**. É o nome técnico do programa contínuo de controle, baseado em monitoramento, prevenção e ação corretiva — em vez de "matar quando aparecer". A operação é regulamentada pela RDC 622/2022 da ANVISA e pela Resolução SESA 1153/2024 (no Paraná).',
      },
      { type: 'h2', text: 'Diferença na prática: pontual x CIPV' },
      {
        type: 'p',
        text: 'A dedetização pontual é reativa. Aparece barata na cozinha do restaurante → chama dedetizadora → aplica produto → resolve. Quando volta a aparecer, repete o ciclo.',
      },
      {
        type: 'p',
        text: 'O CIPV é preventivo. A equipe vai periodicamente (semanal, quinzenal ou mensal, conforme o segmento) e:',
      },
      {
        type: 'ul',
        items: [
          'Inspeciona todos os pontos críticos do estabelecimento',
          'Mantém porta-iscas lacrados, armadilhas luminosas e dispositivos de monitoramento',
          'Registra a atividade observada (consumo de isca, captura, sinais de pragas)',
          'Atualiza um mapa técnico dos pontos de controle',
          'Identifica e elimina as causas (entradas, fontes de alimento, abrigos) antes que vire infestação',
          'Emite relatório a cada visita pra prestação de contas e auditoria',
        ],
      },
      {
        type: 'p',
        text: 'A grande diferença é a postura: em vez de remediar problemas que apareceram, o CIPV impede que apareçam.',
      },
      { type: 'h2', text: 'Quem é obrigado a ter CIPV?' },
      {
        type: 'p',
        text: 'Por exigência da ANVISA e vigilâncias sanitárias estaduais/municipais, precisam manter programa contínuo de controle de pragas:',
      },
      {
        type: 'ul',
        items: [
          'Indústrias alimentícias (frigoríficos, panificadoras, fábricas de alimentos)',
          'Hospitais, clínicas e laboratórios',
          'Restaurantes, lanchonetes, hotéis e pousadas',
          'Supermercados e mercados',
          'Escolas e creches',
          'Empresas com certificações de qualidade (ISO 22000, BRC, FSSC 22000, HACCP)',
          'Indústria farmacêutica e cosmética',
        ],
      },
      {
        type: 'p',
        text: 'Pra esses segmentos, a fiscalização sanitária verifica a existência do programa, a frequência das visitas e os relatórios técnicos. Empresa flagrada sem CIPV ativo pode ser autuada e, em casos graves, ter o alvará suspenso.',
      },
      { type: 'h2', text: 'O que está incluído no contrato' },
      {
        type: 'ul',
        items: [
          'Diagnóstico inicial completo do estabelecimento',
          'Mapa de pontos de controle (armadilhas, porta-iscas, sensores)',
          'Visitas técnicas com periodicidade definida em contrato',
          'Aplicação de produtos só quando necessária e em pontos específicos',
          'Laudos técnicos e relatórios para auditoria interna e externa',
          'Documentação compatível com exigências de ANVISA, BRC, ISO 22000 e FSSC 22000',
          'Atendimento emergencial entre visitas (sem custo adicional, conforme contrato)',
          'Treinamento da equipe interna sobre prevenção',
        ],
      },
      { type: 'h2', text: 'Vantagens pro síndico ou gerente' },
      {
        type: 'p',
        text: 'Além da conformidade legal, manter CIPV ativo gera benefícios práticos: reduz drasticamente o risco de surto de pragas em momento crítico (data de auditoria, fiscalização surpresa, recebimento de cliente importante); diminui a perda de produtos por contaminação ou roedores; economiza em comparação a dedetizações pontuais frequentes; e gera documentação organizada que vale ouro em assembleia de condomínio ou prestação de contas pra matriz.',
      },
      {
        type: 'p',
        text: 'A Araújo opera CIPV em indústrias, hospitais, hotéis e supermercados de Londrina e região há mais de 40 anos. Equipe técnica dedicada, documentação completa para todas as certificações sanitárias e atendimento emergencial sem custo adicional. Solicite uma vistoria inicial gratuita pra montar a proposta sob medida.',
      },
    ],
  },
  {
    slug: 'por-que-aparecem-escorpioes-em-casa-como-agir',
    title: 'Por que escorpiões aparecem em casa e o que fazer (especialmente com crianças)',
    date: '2026-04-20',
    category: 'Escorpiões',
    excerpt:
      'Em Londrina, o escorpião amarelo virou problema urbano. Saiba por que aparecem, sintomas da picada, primeiros socorros e como prevenir antes que aconteça.',
    metaTitle: 'Escorpiões em Casa: por que aparecem e como agir | Araújo',
    metaDescription:
      'Por que escorpiões aparecem em casa em Londrina, sintomas da picada, primeiros socorros e prevenção. Guia completo para proteger sua família.',
    readingMinutes: 3,
    coverImage: '/blog/por-que-aparecem-escorpioes-em-casa-como-agir.jpg',
    coverAlt: 'Escorpião sobre superfície de madeira',
    coverCredit: { name: 'Andrey Tikhonovskiy', url: 'https://unsplash.com/@anritikhon' },
    content: [
      {
        type: 'p',
        text: 'Em Londrina e em todo o Paraná, o escorpião amarelo (Tityus serrulatus) deixou de ser problema de campo e virou questão urbana. Aparece em residências, escolas, condomínios e empresas — e o número de acidentes cresce todo ano, especialmente em meses quentes e úmidos.',
      },
      {
        type: 'p',
        text: 'A picada é grave em qualquer pessoa, mas em crianças pequenas, idosos e cardiopatas o risco é potencialmente fatal. A boa notícia é que, com algumas medidas práticas, dá pra reduzir drasticamente a chance de ter um desses bichos em casa.',
      },
      { type: 'h2', text: 'Por que estão aparecendo cada vez mais?' },
      {
        type: 'p',
        text: 'Três fatores se combinaram nas últimas décadas: urbanização desordenada (esgoto exposto, terrenos baldios com entulho); aumento da população de baratas urbanas (que são o alimento principal dos escorpiões); e a alta capacidade reprodutiva do Tityus serrulatus, que se reproduz por partenogênese — a fêmea gera filhotes sem precisar de macho. Resultado: uma única fêmea em ambiente favorável vira colônia em pouco tempo.',
      },
      { type: 'h2', text: 'Onde costumam se esconder' },
      {
        type: 'ul',
        items: [
          'Ralos internos e externos sem proteção',
          'Caixas de gordura e redes de esgoto',
          'Terrenos vizinhos com entulho, lixo ou materiais de construção',
          'Jardins com pedras, telhas empilhadas ou madeira armazenada',
          'Frestas em paredes, batentes, telhas e atrás de rodapés',
          'Calhas entupidas e telhados com folhas acumuladas',
          'Casas próximas a fundos de vale, córregos ou áreas verdes',
          'Garagens, lavanderias e áreas externas pouco iluminadas',
        ],
      },
      { type: 'h2', text: 'Sintomas da picada — atenção redobrada com crianças' },
      {
        type: 'p',
        text: 'A picada do escorpião amarelo causa dor intensa imediata, formigamento e inchaço no local. Em casos moderados, vêm sudorese, taquicardia, náuseas e vômitos. Em crianças e idosos, o veneno tem efeito proporcionalmente maior — pode evoluir pra complicações neurológicas e cardíacas em poucas horas. Casos graves não tratados rapidamente podem ser fatais.',
      },
      { type: 'h2', text: 'O que fazer em caso de picada' },
      {
        type: 'ul',
        items: [
          'Vá IMEDIATAMENTE ao pronto-socorro — não espere os sintomas piorarem',
          'Se possível, leve o animal (mesmo morto) para identificação correta da espécie',
          'NÃO faça torniquete, sucção, corte ou aplique substâncias caseiras',
          'Lave o local da picada com água e sabão',
          'Mantenha a pessoa calma e em repouso',
          'Em crianças, a urgência é ainda maior — quanto menor o peso, mais grave a reação ao veneno',
        ],
      },
      {
        type: 'p',
        text: 'O tratamento envolve soro antiescorpiônico quando indicado pelo médico. A maioria dos casos atendidos rapidamente evolui bem, mas o tempo é crítico.',
      },
      { type: 'h2', text: 'Como prevenir no dia a dia' },
      {
        type: 'ul',
        items: [
          'Mantenha todos os ralos com proteção (tela fina ou abafador)',
          'Elimine entulhos, materiais de construção e madeira armazenada no quintal',
          'Corte grama regularmente e pode arbustos próximos à casa',
          'Vede frestas em paredes, batentes, telhas e rodapés',
          'Não acumule lixo encostado em paredes externas',
          'Sacuda roupas, toalhas e lençóis antes do uso (especialmente os guardados há tempo)',
          'Bata calçados de cabeça pra baixo antes de calçar',
          'Não ande descalço em garagens, quintais ou áreas externas, principalmente à noite',
          'Mantenha sapatos longe da parede e fora do alcance fácil quando guardados',
        ],
      },
      { type: 'h2', text: 'Por que o controle profissional faz diferença' },
      {
        type: 'p',
        text: 'Matar um escorpião que apareceu não resolve — eles vêm de fora (esgoto, terrenos vizinhos, frestas estruturais). O controle profissional usa pulverização residual em pontos de acesso, inspeciona abrigos potenciais, orienta sobre vedação estrutural e — talvez o mais importante — ataca a cadeia alimentar. Sem barata pra comer, escorpião não permanece.',
      },
      { type: 'h2', text: 'Dica de quem já fez isso milhares de vezes' },
      {
        type: 'p',
        text: 'Se você está pensando em controle de escorpiões, aqui vai um conselho prático: combine com dedetização de baratas no mesmo serviço. Escorpião se alimenta principalmente de barata — sem fonte de comida, ele não tem motivo pra permanecer no ambiente. Tratar só os escorpiões e esquecer das baratas é deixar a porta entreaberta pro problema voltar. No nosso orçamento, esse combo da mesma família (insetos + aracnídeos) costuma render condições especiais. Vale considerar.',
      },
      {
        type: 'p',
        text: 'A Araújo faz controle de escorpiões em residências, condomínios e empresas em Londrina e região — atendimento emergencial em casos de avistamento, garantia escrita e protocolo integrado pra eliminar tanto os escorpiões quanto o que os atrai.',
      },
    ],
  },
  {
    slug: 'caixa-dagua-quanto-tempo-limpar-anvisa',
    title: 'De quanto em quanto tempo limpar a caixa d\'água? O que a ANVISA exige',
    date: '2026-04-08',
    category: 'Higienização',
    excerpt:
      'Muita gente acha que a água tratada dispensa limpar a caixa. Erro. A ANVISA recomenda limpeza semestral — entenda o porquê.',
    metaTitle: 'Limpeza de Caixa d\'Água: prazo ANVISA | Araújo Dedetizadora',
    metaDescription:
      'A ANVISA recomenda limpeza e desinfecção de caixas d\'água a cada 6 meses. Saiba o que se acumula, os riscos e como funciona o serviço profissional.',
    readingMinutes: 2,
    coverImage: '/blog/caixa-dagua-quanto-tempo-limpar-anvisa.jpg',
    coverAlt: 'Close-up em tons azuis com bolhas e encanamento — vista que remete ao interior de um reservatório de água',
    coverCredit: { name: 'Dynamic Wang', url: 'https://unsplash.com/@dynamicwang' },
    content: [
      {
        type: 'p',
        text: 'Uma dúvida muito comum: "a água que chega pela companhia de saneamento já é tratada — por que preciso limpar a caixa d\'água?". A resposta é direta: porque entre o tratamento da SANEPAR (ou outra concessionária) e o copo que você bebe, a água passa por um reservatório que acumula sedimentos, biofilme e às vezes até insetos.',
      },
      { type: 'h2', text: 'A ANVISA recomenda a cada 6 meses' },
      {
        type: 'p',
        text: 'A Agência Nacional de Vigilância Sanitária estabelece que reservatórios de água destinados ao consumo humano devem ser limpos e desinfetados a cada 6 meses (limpeza semestral). Esse prazo é a referência técnica usada por vigilâncias sanitárias municipais e estaduais. Para estabelecimentos comerciais e condomínios, a periodicidade é fiscalizada — limpeza vencida pode resultar em autuação.',
      },
      { type: 'h2', text: 'O que se acumula numa caixa d\'água' },
      {
        type: 'ul',
        items: [
          'Sedimentos minerais (lodo no fundo, vindos da tubulação)',
          'Biofilme nas paredes (filme orgânico onde bactérias se proliferam)',
          'Resíduos da própria estrutura da caixa quando antiga',
          'Insetos e até pequenos animais quando a tampa não veda bem',
          'Folhas e poeira da rua quando há frestas',
        ],
      },
      { type: 'h2', text: 'Riscos à saúde quando não limpa' },
      {
        type: 'p',
        text: 'A água do reservatório sujo pode transmitir doenças gastrointestinais (diarreia, vômito, infecções intestinais), problemas de pele (dermatites, micoses), além de potencializar contaminação por bactérias como E. coli e Salmonella. Em crianças, idosos e pessoas imunossuprimidas, o risco é maior.',
      },
      { type: 'h2', text: 'Como funciona o serviço profissional' },
      {
        type: 'ul',
        items: [
          'Esvaziamento da caixa (reservando água final para uso temporário)',
          'Raspagem e remoção mecânica de sedimentos e biofilme',
          'Lavagem completa das paredes internas e tampa',
          'Aplicação de sanitizante próprio para água potável',
          'Enxágue final e enchimento',
          'Emissão de certificado de higienização com data e responsável técnico',
        ],
      },
      {
        type: 'p',
        text: 'O serviço completo leva em torno de 3 a 4 horas — durante esse período, o ponto de água da casa fica indisponível. Por isso é bom agendar em horário de menor uso.',
      },
      { type: 'h2', text: 'Para condomínios e empresas: é obrigatório' },
      {
        type: 'p',
        text: 'Síndicos precisam manter cronograma de limpeza e apresentar certificado nas assembleias. Restaurantes, hospitais, escolas e qualquer estabelecimento que serve água ao público tem fiscalização da vigilância sanitária. Manter a periodicidade evita multas e protege a saúde dos usuários.',
      },
      {
        type: 'p',
        text: 'A Araújo faz a limpeza completa de caixas d\'água e cisternas em Londrina e região, com produtos próprios para água potável e emissão de certificado válido para vigilância sanitária.',
      },
    ],
  },
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
    coverImage: '/blog/morcegos-em-londrina-riscos-leis-e-como-resolver-definitivamente.jpg',
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
        text: 'Se você precisa de controle de morcegos em Londrina ou região, entre em contato para uma avaliação técnica. A Araújo possui equipe treinada, com vacinação antirrábica em dia, e segue rigorosamente os protocolos ambientais.',
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
    coverImage: '/blog/problemas-com-pulgas.jpg',
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
        text: 'A Araújo elimina pulgas em ambientes residenciais, sítios e canis com produtos seguros para pets após o período de carência. Faça seu orçamento sem compromisso.',
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
    coverImage: '/blog/problemas-com-formigas.jpg',
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
        text: 'Proteja seu ambiente. Realize seu orçamento com a Araújo — controle profissional de formigas em Londrina e todo o Paraná.',
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
    featured: true,
    coverImage: '/blog/dedetizadora-londrina-controle-especializado-de-pragas.jpg',
    coverAlt: 'Pessoa segurando equipamento profissional de pulverização',
    coverCredit: { name: 'MESTO Sprayers', url: 'https://unsplash.com/@mesto_sprayers' },
    content: [
      {
        type: 'p',
        text: 'A Araújo é uma empresa especializada no controle profissional de pragas há mais de 40 anos, com técnicos qualificados e comprometidos. Atendemos residências, comércios, indústrias e condomínios em Londrina e em todo o Paraná.',
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
