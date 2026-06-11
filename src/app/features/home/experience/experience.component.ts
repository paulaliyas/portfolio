import { ChangeDetectionStrategy, Component } from '@angular/core';

import { EXPERIENCE } from '../../../data/experience.data';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { InspectTargetDirective } from '../../../shared/directives/inspect-target.directive';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SectionDirective } from '../../../shared/directives/section.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeaderComponent, InspectTargetDirective, RevealDirective, SectionDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  protected readonly entries = EXPERIENCE;
}
