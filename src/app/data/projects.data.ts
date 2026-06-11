import { Project } from '../models/project.model';

export const PROJECT_FILTERS: readonly string[] = [
  'All',
  'Angular',
  'Next.js',
  'TypeScript',
  'AI',
  'RxJS',
];

export const PROJECTS: readonly Project[] = [
  {
    id: 'social-insurance-platform',
    title: 'National Social Insurance Platform',
    tagline: 'Client-facing enterprise Angular at national scale',
    description:
      'Feature development on a large social insurance platform: a dynamic forms engine, rule-driven UIs, card-based dashboards and hierarchical tree structures.',
    stack: ['Angular 13–17', 'TypeScript', 'RxJS', 'SCSS', 'REST APIs'],
    tags: ['Angular', 'TypeScript', 'RxJS'],
    links: [],
    badge: 'Enterprise · NDA',
  },
  {
    id: 'raseed',
    title: 'Raseed',
    tagline: 'Personal finance tracking with AI categorisation',
    description:
      'A finance web app that parses bank statements, reconciles shared expenses with Splitwise and categorises spending using the Claude API — built end to end as a side project.',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Turso SQLite', 'Claude API'],
    tags: ['Next.js', 'TypeScript', 'AI'],
    links: [
      { label: 'GitHub', url: 'https://github.com/paulaliyas/raseed' },
      { label: 'Live demo', url: 'https://raseed-view.vercel.app/' },
    ],
  },
  {
    id: 'styleiq',
    title: 'StyleIQ',
    tagline: 'AI-powered fashion and shopping assistant',
    description:
      'A fashion app with body-measurement input and virtual try-on, planned and built in phases. Explores how AI can make online shopping decisions less of a guess.',
    stack: ['Next.js', 'TypeScript', 'AI vision'],
    tags: ['Next.js', 'TypeScript', 'AI'],
    links: [{ label: 'GitHub', url: 'https://github.com/paulalyias/styleiq' }],
    badge: 'In progress',
  },
  {
    id: 'this-portfolio',
    title: 'This Portfolio',
    tagline: 'Angular 17 + signals, inspecting itself',
    description:
      'The site you are reading — standalone components, signals everywhere, OnPush, deferred sections and an inspect mode that exposes its own component tree. Press “i”.',
    stack: ['Angular 17', 'Signals', 'SCSS', 'View Transitions'],
    tags: ['Angular', 'TypeScript'],
    links: [{ label: 'How it is built', url: '/colophon' }],
  },
];
