import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { InspectService } from '../../services/inspect.service';
import { ScrollSpyService } from '../../services/scroll-spy.service';
import { ThemeToggleComponent } from '../../../shared/components/theme-toggle/theme-toggle.component';
import { InspectTargetDirective } from '../../../shared/directives/inspect-target.directive';

interface NavItem {
  readonly id: string;
  readonly label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ThemeToggleComponent, InspectTargetDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly scrollSpy = inject(ScrollSpyService);
  protected readonly inspect = inject(InspectService);

  protected readonly navItems: readonly NavItem[] = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'contact', label: 'Contact' },
  ];
}
