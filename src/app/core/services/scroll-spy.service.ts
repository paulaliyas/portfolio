import { Injectable, signal } from '@angular/core';

/**
 * Tracks which page section is in view using a single shared
 * IntersectionObserver. Sections register via the SectionDirective.
 */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  readonly activeSection = signal<string>('hero');

  private observer: IntersectionObserver | null = null;

  observe(element: HTMLElement, id: string): void {
    element.dataset['sectionId'] = id;
    this.ensureObserver().observe(element);
  }

  unobserve(element: HTMLElement): void {
    this.observer?.unobserve(element);
  }

  private ensureObserver(): IntersectionObserver {
    if (!this.observer) {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const sectionId = (entry.target as HTMLElement).dataset['sectionId'];
              if (sectionId) {
                this.activeSection.set(sectionId);
              }
            }
          }
        },
        { rootMargin: '-40% 0px -55% 0px' },
      );
    }
    return this.observer;
  }
}
