import type { ProjectCardItem } from './projectTypes';

/** Accordion section on the site (client / program owner is not your employer). */
export type ProfessionalEngagement = {
  id: string;
  title: string;
  /** Client / program owner (not employer) */
  owner: string;
  dateRange: string;
  bullets: string[];
  /** Technologies and platforms for this engagement */
  stack: string[];
};

/**
 * Public-facing summaries — align with resume, reviews, and LinkedIn.
 * Covax Ontario excluded per site requirements.
 */
export const PROFESSIONAL_ENGAGEMENTS: ProfessionalEngagement[] = [
  {
    id: 'gc-benefits-modernization',
    title: 'Government of Canada Benefits Delivery Modernization',
    owner: 'Federal Government of Canada (ESDC)',
    dateRange: '2025 – Present',
    bullets: [
      'Designed and built core front-end components, shared modules, and SCSS frameworks deployed site-wide, aligned with client design systems, accessibility requirements, and government UI standards.',
      'Delivered high-visibility features on tight timelines — including a site-wide header and styling library in under three days — and presented outcomes to the broader development team.',
      'Acted as front-end subject matter expert for React and SCSS architecture, implementation, and best practices; mentored peers and client developers through reviews, pairing, and onboarding.',
    ],
    stack: ['React', 'SCSS', 'Accessibility (WCAG)', 'Government of Canada UI guidelines', 'Curam'],
  },
  {
    id: 'bell-crave-expansion',
    title: 'Bell Media — Crave expansion',
    owner: 'Bell Media',
    dateRange: '2024 – 2025',
    bullets: [
      'Engineered scalable metadata and processing pipelines for partner feeds (Google, Apple, Amazon, Roku, LG, Samsung), improving reliability, bulk-load performance, and reuse across a multi-developer team.',
      'Streamlined cloud architectures using AWS (S3, EKS/Kubernetes, MSK/Kafka, Lambda, Step Functions) to move workloads from on-prem patterns and deliver large volumes of media metadata to streaming platforms.',
      'Built universal-search and feed-processing solutions end-to-end in aggressive sprint cycles; partnered with QA on data integrity from MongoDB through Lambdas into DocumentDB.',
    ],
    stack: [
      'Java',
      'Spring Boot',
      'AWS (S3, ECS/EKS, Lambda, MSK/Kafka, Step Functions)',
      'MongoDB',
      'DocumentDB',
      'XML / JSON',
      'New Relic',
    ],
  },
  {
    id: 'rcmp-firearms-digitization',
    title: 'RCMP — Canadian firearms registration digitization',
    owner: 'Royal Canadian Mounted Police',
    dateRange: '2023 – 2024',
    bullets: [
      'Delivered new application streams, secure two-way messaging, dashboards, and validation for federal licensing workflows serving a very large Canadian user base.',
      'Led accessibility (WCAG 2.0 / AODA) and front-end quality: full compliance across 40+ pages within a month, zero submission failures at go-live, and alignment with GCWeb / WET.',
      'Ran daily peer reviews for a nine-person dev team; owned major dashboard and landing experiences (120+ story points); presented sprint demos to 30+ stakeholders including senior client leadership.',
    ],
    stack: [
      'Microsoft Power Apps',
      'Microsoft Power Pages',
      'Microsoft Dataverse',
      'JavaScript',
      'Liquid',
      'HTML / CSS',
      'WCAG / AODA',
      'GCWeb / WET',
    ],
  },
  {
    id: 'ontario-covid-portal',
    title: 'Ministry of Health Ontario — COVID-19 digital services',
    owner: 'Ministry of Health Ontario',
    dateRange: '2021 – 2023',
    bullets: [
      'Shipped features, fixes, and performance work on booking and vaccine-certificate services used by millions of Ontarians, including days with 10M+ users.',
      'Introduced a Jest-based testing scaffold that raised regression coverage to roughly 90–95% from a standing start.',
      'Prototyped a progressive web app (PWA) and improved vaccine-passport PDF generation for throughput and PDF accessibility (e.g. PAC3-oriented checks).',
    ],
    stack: ['JavaScript', 'Handlebars', 'Bootstrap', 'AWS', 'PDFKit', 'Jest', 'PWA', 'REST / API design'],
  },
];

/** Legacy tile/modal grid — empty until you restore `FeaturedWorkSection` on the home page. */
export const PROFESSIONAL_ITEMS: ProjectCardItem[] = [];
