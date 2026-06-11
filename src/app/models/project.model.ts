export interface ProjectLink {
  readonly label: string;
  readonly url: string;
}

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly tagline: string;
  readonly description: string;
  readonly stack: readonly string[];
  readonly tags: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly badge?: string;
}
