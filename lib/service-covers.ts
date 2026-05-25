// Fotos de capa por serviço — Unsplash License (uso comercial livre)
// Arquivos salvos localmente em /public/services/ para melhor performance,
// otimização automática pelo Next.js e independência do CDN da Unsplash.

export type ServiceCover = {
  image: string;
  alt: string;
  credit: { name: string; url: string };
};

export const serviceCovers: Record<string, ServiceCover> = {
  'dedetizacao-em-londrina': {
    image: '/services/dedetizacao-em-londrina.png',
    alt: 'Profissional Araújo com EPI completo aplicando dedetização em sofá residencial',
    credit: { name: 'Araújo', url: '#' },
  },
  'controle-de-pragas-em-londrina': {
    image: '/services/controle-de-pragas-em-londrina.jpg',
    alt: 'Edifício comercial moderno em perspectiva',
    credit: { name: 'Luke van Zyl', url: 'https://unsplash.com/@lukevz' },
  },
  'desinsetizacao': {
    image: '/services/desinsetizacao.png',
    alt: 'Equipe Araújo com EPI aplicando desinsetização em armazém comercial',
    credit: { name: 'Araújo', url: '#' },
  },
  'desratizacao': {
    image: '/services/desratizacao.jpg',
    alt: 'Rato em close-up com foco seletivo',
    credit: { name: 'Svetozar Cenisev', url: 'https://unsplash.com/@cenisev' },
  },
  'descupinizacao': {
    image: '/services/descupinizacao.jpg',
    alt: 'Madeira com furos causados por cupins',
    credit: { name: 'Roberto Carlos Román Don', url: 'https://unsplash.com/@srcharls' },
  },
  'controle-de-morcegos-em-londrina': {
    image: '/services/controle-de-morcegos-em-londrina.png',
    alt: 'Morcego em voo com asas abertas',
    credit: { name: 'Araújo', url: '#' },
  },
  'controle-de-pombos-em-londrina': {
    image: '/services/controle-de-pombos-em-londrina.jpg',
    alt: 'Pombo urbano em close-up',
    credit: { name: 'Ilie Barna', url: 'https://unsplash.com/@mechaowlstudios' },
  },
  'dedetizacao-de-baratas': {
    image: '/services/dedetizacao-de-baratas.png',
    alt: 'Duas baratas em close sobre superfície clara',
    credit: { name: 'Araújo', url: '#' },
  },
  'dedetizacao-para-escorpioes-em-londrina': {
    image: '/services/dedetizacao-para-escorpioes-em-londrina.jpg',
    alt: 'Escorpião sobre superfície de madeira',
    credit: { name: 'Andrey Tikhonovskiy', url: 'https://unsplash.com/@anritikhon' },
  },
  'dedetizacao-de-carrapatos': {
    image: '/services/dedetizacao-de-carrapatos.jpg',
    alt: 'Carrapato sobre dedo humano em macro',
    credit: { name: 'Erik Karits', url: 'https://unsplash.com/@erik_karits' },
  },
  'dedetizacao-de-aranhas': {
    image: '/services/dedetizacao-de-aranhas.jpg',
    alt: 'Aranha em teia, macro fotografia',
    credit: { name: 'Silvestre Leon', url: 'https://unsplash.com/@silver26class' },
  },
  'dedetizacao-de-formigas': {
    image: '/services/dedetizacao-de-formigas.jpg',
    alt: 'Macro fotografia de formiga vermelha sobre rocha',
    credit: { name: 'Wolfgang Hasselmann', url: 'https://unsplash.com/@wolfgang_hasselmann' },
  },
  'dedetizacao-de-percevejos-em-londrina': {
    image: '/services/dedetizacao-de-percevejos-em-londrina.webp',
    alt: 'Colônia de percevejos-de-cama (Cimex lectularius) sobre tecido',
    credit: { name: 'mkmult', url: 'https://www.freepik.com' },
  },
  'limpeza-de-caixas-de-agua-em-londrina': {
    image: '/services/limpeza-de-caixas-de-agua-em-londrina.png',
    alt: 'Cisternas azuis ao ar livre em ambiente industrial',
    credit: { name: 'Araújo', url: '#' },
  },
  'sanitizacao-de-ambientes-londrina': {
    image: '/services/sanitizacao-de-ambientes-londrina.jpg',
    alt: 'Profissional com máscara e luvas higienizando ambiente interno',
    credit: { name: 'Toon Lambrechts', url: 'https://unsplash.com/@mycellhub' },
  },
  'dac-divisao-de-atendimento-a-condominios': {
    image: '/services/dac-divisao-de-atendimento-a-condominios.jpg',
    alt: 'Prédio residencial em perspectiva de baixo para cima',
    credit: { name: 'Marlene Céline Nordvik', url: 'https://unsplash.com/@zarlinaa' },
  },
  'higienizacao-de-bebedouros-em-londrina': {
    image: '/services/higienizacao-de-bebedouros-em-londrina.png',
    alt: 'Bebedouro escolar de aço inox em parede com listras',
    credit: { name: 'Araújo', url: '#' },
  },
};

// Fallback genérico caso algum slug futuro não tenha foto mapeada
export const fallbackCover: ServiceCover = {
  image: '/services/dedetizacao-em-londrina.png',
  alt: 'Profissional Araújo aplicando dedetização',
  credit: { name: 'Araújo', url: '#' },
};
