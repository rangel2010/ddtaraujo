export const siteConfig = {
  name: 'Araújo Dedetizadora',
  fullName: 'Araújo Controle de Pragas e Vetores',
  description:
    'Dedetizadora em Londrina há mais de 40 anos. Controle de pragas urbanas com garantia: baratas, ratos, cupins, escorpiões, morcegos, pombos e mais. Atendimento residencial, comercial, industrial e condomínios.',
  shortDescription:
    'Dedetização em Londrina e todo o Paraná. Controle de pragas com garantia há mais de 40 anos.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ddtaraujo.com.br',
  phone: process.env.NEXT_PUBLIC_PHONE || '4333391295',
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '(43) 3339-1295',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '5543999763797',
  whatsappDisplay:
    process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || '(43) 99976-3797',
  email:
    process.env.NEXT_PUBLIC_EMAIL || 'araujocontroledepragas@outlook.com',
  address: {
    street: 'Rua Cristiano Machado, n° 333',
    neighborhood: 'Campo Belo',
    city: 'Londrina',
    state: 'PR',
    zip: '86062-000',
    country: 'BR',
  },
  social: {
    facebook: 'https://www.facebook.com/DDTAraujo/',
    instagram: 'https://www.instagram.com/dedetizadoralondrinaaraujo/',
  },
  business: {
    foundedYear: 1985,
    yearsOfExperience: 40,
    serviceArea: 'Londrina e todo o Paraná',
    license: 'Credenciado ANVISA, IAP, SESA (Res. 1153/2024 e 622/2022)',
  },
  hours: {
    weekday: '08:00 - 18:00',
    saturday: '08:00 - 12:00',
    sunday: 'Fechado (atendimento emergencial via WhatsApp)',
  },
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const phoneLink = `tel:+55${siteConfig.phone}`;
