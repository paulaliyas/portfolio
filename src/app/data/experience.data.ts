import { ExperienceEntry } from '../models/experience.model';

export const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    role: 'Senior Angular Developer · TCS',
    period: '2024 — Present',
    summary:
      'Client-facing feature work on a national social insurance platform, plus React/Next.js initiatives.',
    highlights: [
      'Built component sandboxes with smart/dumb architecture for faster delivery',
      'Integrated analytics tooling into a React/Next.js project',
      'Figma-to-code workflows with AI-assisted development',
    ],
  },
  {
    role: 'Angular Developer · TCS',
    period: '2022 — 2024',
    summary:
      'Owned complex UI subsystems: dynamic forms, rule engines and data-dense card layouts.',
    highlights: [
      'Designed a configuration-driven dynamic forms engine',
      'Implemented rule-engine-driven conditional UIs',
      'Built hierarchical tree structures for large datasets',
      'Drove Angular version upgrades across major releases',
    ],
  },
  {
    role: 'Systems Engineer · TCS',
    period: '2020 — 2022',
    summary:
      'Joined TCS and built frontend foundations on Angular 11 with REST-heavy integrations.',
    highlights: [
      'Shipped reusable, accessible UI components',
      'REST API integration with typed models and interceptors',
      'Earned Star of the Month within the first account',
    ],
  },
];
