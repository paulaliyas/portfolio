import { Award, Certification } from '../models/certification.model';

export const CERTIFICATIONS: readonly Certification[] = [
  { name: 'MongoDB Foundation', issuer: 'MongoDB' },
  { name: 'Node.js Foundation', issuer: 'TCS' },
  { name: 'Agile Way of Working', issuer: 'TCS' },
  { name: 'Generative AI Training', issuer: 'TCS' },
  { name: 'React.js Training', issuer: 'TCS' },
];

export const AWARDS: readonly Award[] = [
  { name: 'TCS Innovation Award' },
  { name: 'Star of the Month' },
  { name: 'Star Award' },
  { name: 'Service and Commitment Award' },
  { name: 'Applause Award' },
];
