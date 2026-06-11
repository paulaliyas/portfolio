import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AWARDS, CERTIFICATIONS } from '../../../data/certifications.data';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { InspectTargetDirective } from '../../../shared/directives/inspect-target.directive';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SectionDirective } from '../../../shared/directives/section.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [SectionHeaderComponent, InspectTargetDirective, RevealDirective, SectionDirective],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificationsComponent {
  protected readonly certifications = CERTIFICATIONS;
  protected readonly awards = AWARDS;
}
