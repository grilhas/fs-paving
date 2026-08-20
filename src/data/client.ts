// ===== SITE CONSTANTS =====
export const SITE = {
  title: 'FS Paving | Calçada Portuguesa, Pavê e Lancis no Algarve',
  tagline: 'Especialistas em pavimentações no Algarve, com mais de 18 anos de experiência',
  description:
    'A FS Paving assenta calçada portuguesa, pavê e lancis em moradias, condomínios e espaços públicos em todo o Algarve. Mais de 18 anos de experiência. Orçamentos gratuitos.',
  // TODO: substituir pelo domínio real quando estiver registado
  url: 'https://fspaving.example',
  author: 'FS Paving',
  locale: 'pt-PT',
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
  name: 'FS Paving',
  shortName: 'FS Paving',
  descriptor: 'Especialistas em Pavimentações',
  // Do perfil de Instagram: "Mais de 18 anos de experiência"
  yearsExperience: 18,
  // TODO: dados de contacto por confirmar. O perfil de Instagram não mostra
  // telefone, email nem morada, por isso estes valores são placeholders e NÃO
  // devem ir para produção (aparecem no header, footer, contactos e schema).
  email: 'geral@fspaving.example',
  phoneForTel: '+351900000000',
  phoneFormatted: '+351 900 000 000',
  logo: '/assets/favicons/favicon.svg',
  address: {
    // TODO: confirmar a base. O perfil indica apenas "Algarve e Arredores", sem
    // concelho, por isso a morada fica ao nível de distrito até haver confirmação.
    lineOne: 'Algarve',
    lineTwo: '',
    city: 'Albufeira',
    state: 'Faro',
    zip: '',
    mapLink: 'https://maps.google.com/?q=Algarve+Portugal',
  },
  hours: {
    // TODO: confirmar horários com o cliente
    display: 'Segunda a sábado: 08:00 às 18:30',
    opens: '08:00',
    closes: '18:30',
    days: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  },
  serviceArea: [
    'Albufeira, Faro',
    'Vilamoura, Faro',
    'Loulé, Faro',
    'Faro, Faro',
    'Lagos, Faro',
    'Portimão, Faro',
  ],
  // As bandeiras do perfil (PT, ES, DE, BE) indicam as nacionalidades atendidas.
  // TODO: confirmar qual a língua da bandeira belga (neerlandês ou francês) antes
  // de a acrescentar aqui.
  languages: ['Português', 'Espanhol', 'Alemão'],
  payments: ['Dinheiro', 'Transferência bancária', 'MB WAY'],
  socials: {
    facebook: '',
    instagram: 'https://www.instagram.com/fspaving/',
    googleBusiness: '',
  },
};

// ===== SEO DEFAULTS =====
export const SEO = {
  title: SITE.title,
  description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
  locale: 'pt_PT',
  image: '/assets/social.jpg',
};
