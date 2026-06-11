import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Proficiency meter. The fill animates from 0 to its value when an ancestor
 * with the appReveal directive gains the .is-revealed class — pure CSS.
 */
@Component({
  selector: 'app-skill-meter',
  standalone: true,
  templateUrl: './skill-meter.component.html',
  styleUrl: './skill-meter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillMeterComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) level!: number;
}
