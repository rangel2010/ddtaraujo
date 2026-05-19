// Fotos de capa por serviço — Unsplash License (uso comercial livre)
// Mapeamento separado de lib/services.ts para reduzir risco de edição.

export type ServiceCover = {
  image: string;
  alt: string;
  credit: { name: string; url: string };
};

const baseParams = '?auto=format&fit=crop&w=1600&q=80';

export const serviceCovers: Record<string, ServiceCover> = {
  'dedetizacao-em-londrina': {
    image: `https://images.unsplash.com/photo-1747659629851-a92bd71149f6${baseParams}`,
    alt: 'Pessoa segurando equipamento profissional de pulverização',
    credit: { name: 'MESTO Sprayers', url: 'https://unsplash.com/@mesto_sprayers' },
  },
  'controle-de-pragas-em-londrina': {
    image: `https://images.unsplash.com/photo-1515263487990-61b07816b324${baseParams}`,
    alt: 'Edifício comercial moderno em perspectiva',
    credit: { name: 'Luke van Zyl', url: 'https://unsplash.com/@lukevz' },
  },
  'desinsetizacao': {
    image: `https://images.unsplash.com/photo-1567479403609-5711aa5e0ef6${baseParams}`,
    alt: 'Macro de barata sobre superfície de madeira',
    credit: { name: 'Robert Thiemann', url: 'https://unsplash.com/@rthiemann' },
  },
  'desratizacao': {
    image: `https://images.unsplash.com/photo-1575378064390-5a323bbac5d7${baseParams}`,
    alt: 'Rato em close-up com foco seletivo',
    credit: { name: 'Svetozar Cenisev', url: 'https://unsplash.com/@cenisev' },
  },
  'descupinizacao': {
    image: `https://images.unsplash.com/photo-1562123404-528b41e573a0${baseParams}`,
    alt: 'Madeira com furos causados por cupins',
    credit: { name: 'Roberto Carlos Román Don', url: 'https://unsplash.com/@srcharls' },
  },
  'controle-de-morcegos-em-londrina': {
    image: `https://images.unsplash.com/photo-1685096137221-2be0f743dba4${baseParams}`,
    alt: 'Morcego pendurado em rocha de caverna',
    credit: { name: 'Ferran Ventura', url: 'https://unsplash.com/@ferranventura' },
  },
  'controle-de-pombos-em-londrina': {
    image: 'https://images.unsplash.com/photo-1723302642167-5b1ea8a4dc75?auto=format&fit=crop&w=1600&h=900&q=80&crop=focalpoint&fp-x=0.5&fp-y=0.5',
    alt: 'Pombo urbano em close-up',
    credit: { name: 'Ilie Barna', url: 'https://unsplash.com/@mechaowlstudios' },
  },
  'dedetizacao-de-baratas': {
    image: `https://images.unsplash.com/photo-1567479403609-5711aa5e0ef6${baseParams}`,
    alt: 'Barata marrom e preta em close-up',
    credit: { name: 'Robert Thiemann', url: 'https://unsplash.com/@rthiemann' },
  },
  'dedetizacao-para-escorpioes-em-londrina': {
    image: `https://images.unsplash.com/photo-1727527056819-04bc5ac49bb8${baseParams}`,
    alt: 'Escorpião sobre superfície de madeira',
    credit: { name: 'Andrey Tikhonovskiy', url: 'https://unsplash.com/@anritikhon' },
  },
  'dedetizacao-de-carrapatos': {
    image: `https://images.unsplash.com/photo-1629533827249-4e5f77a9877c${baseParams}`,
    alt: 'Carrapato sobre dedo humano em macro',
    credit: { name: 'Erik Karits', url: 'https://unsplash.com/@erik_karits' },
  },
  'dedetizacao-de-aranhas': {
    image: `https://images.unsplash.com/photo-1634176104523-d03aaf0364db${baseParams}`,
    alt: 'Aranha em teia, macro fotografia',
    credit: { name: 'Silvestre Leon', url: 'https://unsplash.com/@silver26class' },
  },
  'dedetizacao-de-formigas': {
    image: `https://images.unsplash.com/photo-1579278084099-e7593776949e${baseParams}`,
    alt: 'Macro fotografia de formiga vermelha sobre rocha',
    credit: { name: 'Wolfgang Hasselmann', url: 'https://unsplash.com/@wolfgang_hasselmann' },
  },
  'dedetizacao-de-percevejos-em-londrina': {
    image: `https://images.unsplash.com/photo-1727198634627-645ef5356455${baseParams}`,
    alt: 'Percevejo em close-up',
    credit: { name: 'matheus ferreira', url: 'https://unsplash.com/@tazdmfotos' },
  },
  'limpeza-de-caixas-de-agua-em-londrina': {
    image: `https://images.unsplash.com/photo-1555701307-06299b158245${baseParams}`,
    alt: 'Reservatório de água branco em telhado',
    credit: { name: 'Chandler Cruttenden', url: 'https://unsplash.com/@chanphoto' },
  },
  'sanitizacao-de-ambientes-londrina': {
    image: `https://images.unsplash.com/flagged/photo-1573722398482-f0853718ba49${baseParams}`,
    alt: 'Profissional uniformizado realizando pulverização',
    credit: { name: 'Ibadah Mimpi', url: 'https://unsplash.com/@ibadahmimpi' },
  },
  'dac-divisao-de-atendimento-a-condominios': {
    image: `https://images.unsplash.com/photo-1545324418-cc1a3fa10c00${baseParams}`,
    alt: 'Prédio residencial em perspectiva de baixo para cima',
    credit: { name: 'Marlene Céline Nordvik', url: 'https://unsplash.com/@zarlinaa' },
  },
};

// Fallback genérico caso algum slug futuro não tenha foto mapeada
export const fallbackCover: ServiceCover = {
  image: `https://images.unsplash.com/photo-1747659629851-a92bd71149f6${baseParams}`,
  alt: 'Equipamento profissional de controle de pragas',
  credit: { name: 'MESTO Sprayers', url: 'https://unsplash.com/@mesto_sprayers' },
};
