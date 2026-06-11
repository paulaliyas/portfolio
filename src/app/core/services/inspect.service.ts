import { Injectable, effect, signal } from '@angular/core';

/**
 * Inspect mode — the portfolio's signature feature. When enabled, component
 * boundaries are outlined with their selector names (CSS-only overlay) and a
 * live signal monitor appears, DevTools-style.
 */
@Injectable({ providedIn: 'root' })
export class InspectService {
  readonly enabled = signal(false);

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('inspect-on', this.enabled());
    });
  }

  toggle(): void {
    this.enabled.update((value) => !value);
  }
}
