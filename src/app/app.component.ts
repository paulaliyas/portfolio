import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

import { FooterComponent } from './core/layout/footer/footer.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { InspectService } from './core/services/inspect.service';
import { SignalMonitorComponent } from './shared/components/signal-monitor/signal-monitor.component';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SignalMonitorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown)': 'onKeydown($event)',
  },
})
export class AppComponent {
  protected readonly inspect = inject(InspectService);

  constructor() {
    inject(Router)
      .events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        window.gtag?.('event', 'page_view', {
          page_path: e.urlAfterRedirects,
          page_location: window.location.href,
          page_title: document.title,
        });
      });
  }

  protected onKeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement | null;
    if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
      return;
    }
    if (event.key.toLowerCase() === 'i' && !event.metaKey && !event.ctrlKey && !event.altKey) {
      this.inspect.toggle();
    }
  }
}
