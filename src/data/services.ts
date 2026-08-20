// Fonte única de verdade para os 6 serviços da FS Paving.
// Usado por: overview de serviços na homepage, todas as páginas dinâmicas de
// localidade ([city].astro), navegação e footer.

import calcadaImg from '@assets/images/pavimentos/calcada-onda.jpg';
import paveImg from '@assets/images/pavimentos/pave-blocos.jpg';
import lancisImg from '@assets/images/pavimentos/lancil-e-pave.jpg';
import acessosImg from '@assets/images/pavimentos/calcada-cubos.jpg';
import piscinasImg from '@assets/images/pavimentos/calcada-bicolor.jpg';
import reparacaoImg from '@assets/images/pavimentos/calcada-cubos-detalhe.jpg';

export type ServiceSummary = {
  slug: string;
  title: string;
  /**
   * Rótulo curto para os cartões estreitos (carrossel da homepage, grelha das
   * páginas de localidade), onde o título completo não cabe na largura de um
   * cartão. Omitir quando o título já cabe.
   */
  shortTitle?: string;
  href: string;
  image: ImageMetadata;
  tagline: string;
  description: string;
};

export const SERVICES: ServiceSummary[] = [
  {
    slug: 'calcada-portuguesa',
    title: 'Calçada Portuguesa',
    href: '/services/calcada-portuguesa/',
    image: calcadaImg,
    tagline: 'Cubos assentados à mão, com padrão desenhado ao espaço.',
    description:
      'Assentamento de calçada portuguesa em cubo de calcário e basalto, do pavimento corrido ao padrão desenhado. Base compactada, cubos assentados à mão e junta cheia com areia, para o pavimento travar e durar.',
  },
  {
    slug: 'pave-e-pavimento-em-blocos',
    title: 'Pavê e Pavimento em Blocos',
    shortTitle: 'Pavê e Blocos',
    href: '/services/pave-e-pavimento-em-blocos/',
    image: paveImg,
    tagline: 'Blocos travados para acessos que aguentam carro todos os dias.',
    description:
      'Aplicação de pavê e pavimento em blocos de betão, em fiada travada ou espinha, para acessos, entradas de garagem e zonas de circulação. Resistente ao peso de viaturas e simples de reparar ponto por ponto.',
  },
  {
    slug: 'lancis-e-guias',
    title: 'Lancis e Guias',
    href: '/services/lancis-e-guias/',
    image: lancisImg,
    tagline: 'O remate que impede o pavimento de abrir com o tempo.',
    description:
      'Assentamento de lancis, guias e cordões em betão ou pedra, para delimitar passeios, canteiros e acessos. É o remate que segura o pavimento pelos lados e evita que os cubos comecem a soltar-se nas bordaduras.',
  },
  {
    slug: 'acessos-entradas-e-estacionamentos',
    title: 'Acessos, Entradas e Estacionamentos',
    // "Estacionamentos" nao cabe na largura de um cartao e quebrava a meio da
    // palavra ("ESTACIONAME NTOS"). O titulo completo continua nas paginas.
    shortTitle: 'Acessos e Entradas',
    href: '/services/acessos-entradas-e-estacionamentos/',
    image: acessosImg,
    tagline: 'Entradas de moradia e estacionamentos, com escoamento pensado.',
    description:
      'Entradas de garagem, caminhos de acesso e zonas de estacionamento em calçada ou pavê, com pendentes calculadas para a água escoar para onde deve e não para a porta de casa.',
  },
  {
    slug: 'envolventes-de-piscina-e-terracos',
    title: 'Envolventes de Piscina e Terraços',
    shortTitle: 'Piscinas e Terraços',
    href: '/services/envolventes-de-piscina-e-terracos/',
    image: piscinasImg,
    tagline: 'Pedra que não queima ao sol nem escorrega quando está molhada.',
    description:
      'Pavimentos em volta de piscinas, terraços e zonas de lazer, com escolha de pedra que se mantém pisável ao sol do Algarve e com acabamento antiderrapante nas zonas que estão sempre molhadas.',
  },
  {
    slug: 'reparacao-e-reassentamento-de-calcada',
    title: 'Reparação e Reassentamento de Calçada',
    shortTitle: 'Reparação de Calçada',
    href: '/services/reparacao-e-reassentamento-de-calcada/',
    image: reparacaoImg,
    tagline: 'Zonas afundadas e cubos soltos, sem levantar o pavimento todo.',
    description:
      'Reparação de calçada com zonas afundadas, cubos soltos ou raízes a levantar a pedra. Levantamos apenas a área afetada, corrigimos a base e reassentamos os cubos existentes sempre que estão em condições.',
  },
];
