import type { ProjectCardItem } from './projectTypes';

/**
 * Consultant / client work — replace titles and copy with your real engagements.
 * Omit visitUrl/repoUrl on modal data when there is nothing public to link.
 *
 * Section UI is currently a “coming soon” placeholder; restore the array below
 * and switch HomePage back to `<FeaturedWorkSection … items={PROFESSIONAL_ITEMS} />`.
 */
export const PROFESSIONAL_ITEMS: ProjectCardItem[] = [];

/*
export const PROFESSIONAL_ITEMS: ProjectCardItem[] = [
  {
    id: 'prof-enterprise-app',
    category: 'Full-stack consulting',
    title: 'Enterprise customer & operations platform',
    cardImage: '/assets/computer.svg',
    cardImageAlt: '',
    aosDelay: 150,
    modal: {
      heading: 'Enterprise platform',
      image: '/assets/computer.svg',
      imageAlt: '',
      paragraphs: [
        'Led front-end architecture and delivery for a large customer-facing workflow app for a regulated-industry client. Work spanned React, TypeScript, API integration, accessibility reviews, and CI-friendly release practices.',
        'Specific stack, screenshots, and client name are under NDA — happy to discuss the engagement in general terms in an interview or call.',
      ],
    },
  },
  {
    id: 'prof-api-integration',
    category: 'Integration & APIs',
    title: 'Service modernization & third-party integrations',
    cardImage: '/assets/map.svg',
    cardImageAlt: '',
    aosDelay: 300,
    modal: {
      heading: 'APIs & integrations',
      image: '/assets/map.svg',
      imageAlt: '',
      paragraphs: [
        'Consulted on extending legacy systems with new REST services, auth patterns, and partner integrations. Focus on clear contracts, error handling, and documentation so multiple vendor teams could ship in parallel.',
        'Engagement details are confidential; I can speak to technologies and patterns without naming the client.',
      ],
    },
  },
  {
    id: 'prof-design-system',
    category: 'UI systems',
    title: 'Shared component library & design system adoption',
    cardImage: '/assets/dots-bg.svg',
    cardImageAlt: '',
    aosDelay: 450,
    modal: {
      heading: 'Design system rollout',
      image: '/assets/dots-bg.svg',
      imageAlt: '',
      paragraphs: [
        'Partnered with design and several product squads to introduce a reusable component library (React + TypeScript), Storybook, and governance for versioning and breaking changes.',
        'Reduced duplicate UI implementations and improved consistency across internal tools and customer-facing surfaces.',
      ],
    },
  },
];
*/
