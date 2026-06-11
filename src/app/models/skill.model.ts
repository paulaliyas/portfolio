export interface Skill {
  readonly name: string;
  /** Proficiency from 0–100, rendered by the skill meter. */
  readonly level: number;
}

export interface SkillCategory {
  readonly title: string;
  readonly note?: string;
  readonly skills: readonly Skill[];
}
