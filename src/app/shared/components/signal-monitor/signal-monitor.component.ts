import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { InspectService } from '../../../core/services/inspect.service';
import { ProjectsStateService } from '../../../core/services/projects-state.service';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';
import { ThemeService } from '../../../core/services/theme.service';

/**
 * DevTools-style panel shown in inspect mode. Every value here is a live
 * Angular signal — interact with the page and watch them update.
 */
@Component({
  selector: 'app-signal-monitor',
  standalone: true,
  templateUrl: './signal-monitor.component.html',
  styleUrl: './signal-monitor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalMonitorComponent {
  protected readonly theme = inject(ThemeService);
  protected readonly scrollSpy = inject(ScrollSpyService);
  protected readonly projects = inject(ProjectsStateService);
  protected readonly inspect = inject(InspectService);
}
