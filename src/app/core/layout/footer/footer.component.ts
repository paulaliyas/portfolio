import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROFILE } from '../../../data/profile.data';
import { ThemeToggleComponent } from '../../../shared/components/theme-toggle/theme-toggle.component';
import { InspectTargetDirective } from '../../../shared/directives/inspect-target.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, ThemeToggleComponent, InspectTargetDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
