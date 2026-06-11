import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SKILLS } from '../../../data/skills.data';
import { SkillCategory } from '../../../models/skill.model';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { SkillMeterComponent } from '../../../shared/components/skill-meter/skill-meter.component';
import { InspectTargetDirective } from '../../../shared/directives/inspect-target.directive';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SectionDirective } from '../../../shared/directives/section.directive';

/**
 * Reusable, data-driven skills grid: pass any SkillCategory[] via the
 * categories input, or let it default to the portfolio data.
 */
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SectionHeaderComponent,
    SkillMeterComponent,
    InspectTargetDirective,
    RevealDirective,
    SectionDirective,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  @Input() categories: readonly SkillCategory[] = SKILLS;
}
