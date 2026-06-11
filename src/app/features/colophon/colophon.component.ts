import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { InspectTargetDirective } from '../../shared/directives/inspect-target.directive';

@Component({
  selector: 'app-colophon',
  standalone: true,
  imports: [RouterLink, InspectTargetDirective],
  templateUrl: './colophon.component.html',
  styleUrl: './colophon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColophonComponent {}
