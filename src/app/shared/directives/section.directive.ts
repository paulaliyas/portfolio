import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

import { ScrollSpyService } from '../../core/services/scroll-spy.service';

/** Registers the host section with the scroll spy for nav highlighting. */
@Directive({
  selector: '[appSection]',
  standalone: true,
})
export class SectionDirective implements OnInit, OnDestroy {
  @Input({ alias: 'appSection', required: true }) sectionId!: string;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly scrollSpy = inject(ScrollSpyService);

  ngOnInit(): void {
    this.scrollSpy.observe(this.host.nativeElement, this.sectionId);
  }

  ngOnDestroy(): void {
    this.scrollSpy.unobserve(this.host.nativeElement);
  }
}
