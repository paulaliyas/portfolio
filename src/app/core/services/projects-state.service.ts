import { Injectable, computed, signal } from '@angular/core';

import { PROJECTS, PROJECT_FILTERS } from '../../data/projects.data';
import { Project } from '../../models/project.model';

/**
 * Signal-driven project filtering. Lives in a root service so the inspect
 * mode signal monitor can read the same state the Projects section renders.
 */
@Injectable({ providedIn: 'root' })
export class ProjectsStateService {
  readonly filters = PROJECT_FILTERS;
  readonly filter = signal<string>('All');

  readonly filtered = computed<readonly Project[]>(() => {
    const active = this.filter();
    return active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(active));
  });
}
