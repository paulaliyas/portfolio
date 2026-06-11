import { Profile } from '../models/profile.model';

export const PROFILE: Profile = {
  name: 'Paul Alias',
  role: 'Senior Angular Developer',
  company: 'Tata Consultancy Services',
  location: 'Kochi, Kerala, India',
  valueProposition:
    'I build enterprise-grade Angular — dynamic forms, rule engines and card UIs that hold up in front of millions of real users.',
  bio: [
    'I am a Systems Engineer at TCS with around 5.5 years of frontend experience, most of it deep inside Angular — from v11 all the way to v17, signals included.',
    'My day job is client-facing enterprise work on a large national social insurance platform: dynamic form engines, rule-driven UIs and hierarchical tree structures. After hours I ship personal products with Next.js and the Claude API.',
  ],
  careerStart: new Date('2020-11-26T00:00:00'),
  currentlyLearning: 'Flutter',
  email: 'paulalias25@gmail.com',
  resumeUrl: 'assets/Paul_Alias_Resume.pdf',
  socials: [
    { label: 'GitHub', url: 'https://github.com/paulaliyas' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/paul-alias-0301031a1/' },
  ],
};

/** Fractional years elapsed since a given date — drives the live hero counter. */
export function yearsSince(date: Date): number {
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
  return (Date.now() - date.getTime()) / msPerYear;
}
