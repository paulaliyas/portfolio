import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProjectsStateService } from '../../../core/services/projects-state.service';
import { ChipComponent } from '../../../shared/components/chip/chip.component';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { InspectTargetDirective } from '../../../shared/directives/inspect-target.directive';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SectionDirective } from '../../../shared/directives/section.directive';
import { TiltDirective } from '../../../shared/directives/tilt.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    RouterLink,
    SectionHeaderComponent,
    ChipComponent,
    InspectTargetDirective,
    RevealDirective,
    SectionDirective,
    TiltDirective,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly state = inject(ProjectsStateService);
}
