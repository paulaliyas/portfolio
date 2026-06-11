import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROFILE, yearsSince } from '../../../data/profile.data';
import { InspectTargetDirective } from '../../../shared/directives/inspect-target.directive';
import { SectionDirective } from '../../../shared/directives/section.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [DecimalPipe, RouterLink, InspectTargetDirective, SectionDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit {
  protected readonly profile = PROFILE;

  /** Live experience counter — a real signal, counted up on first paint. */
  protected readonly years = signal(0);

  ngOnInit(): void {
    const target = yearsSince(this.profile.careerStart);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.years.set(target);
      return;
    }

    const duration = 1400;
    const start = performance.now();
    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

    const tick = (now: number): void => {
      const progress = Math.min((now - start) / duration, 1);
      this.years.set(target * easeOutCubic(progress));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  }
}
