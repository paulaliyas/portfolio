import { SkillCategory } from '../models/skill.model';

export const SKILLS: readonly SkillCategory[] = [
  {
    title: 'Frontend',
    note: 'Where I live',
    skills: [
      { name: 'Angular (v11–v17)', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'RxJS', level: 88 },
      { name: 'SCSS / CSS architecture', level: 90 },
      { name: 'React / Next.js', level: 80 },
    ],
  },
  {
    title: 'Backend',
    note: 'Enough to be dangerous',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'MongoDB', level: 72 },
      { name: 'REST API design & integration', level: 85 },
    ],
  },
  {
    title: 'Tools & Practice',
    note: 'How the work ships',
    skills: [
      { name: 'Git & code review', level: 88 },
      { name: 'Figma-to-code workflows', level: 82 },
      { name: 'AI-assisted development (Claude Code)', level: 85 },
      { name: 'Agile delivery', level: 86 },
    ],
  },
  {
    title: 'Learning',
    note: 'Currently in progress',
    skills: [
      { name: 'Flutter', level: 35 },
      { name: 'Dart', level: 30 },
    ],
  },
];
