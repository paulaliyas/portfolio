export interface SocialLink {
  readonly label: string;
  readonly url: string;
}

export interface Profile {
  readonly name: string;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly valueProposition: string;
  readonly bio: readonly string[];
  readonly careerStart: Date;
  readonly currentlyLearning: string;
  readonly email: string;
  readonly resumeUrl: string;
  readonly socials: readonly SocialLink[];
}
