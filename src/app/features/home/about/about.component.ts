import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROFILE } from '../../../data/profile.data';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { InspectTargetDirective } from '../../../shared/directives/inspect-target.directive';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SectionDirective } from '../../../shared/directives/section.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent, InspectTargetDirective, RevealDirective, SectionDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly profile = PROFILE;
}
