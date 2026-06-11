import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';

/**
 * Marks an element as visible in inspect mode. The overlay itself is pure
 * CSS driven by the data-inspect attribute — zero runtime cost when off.
 */
@Directive({
  selector: '[appInspectTarget]',
  standalone: true,
})
export class InspectTargetDirective implements OnInit {
  @Input({ alias: 'appInspectTarget', required: true }) selectorName!: string;
  @Input() inspectMeta = 'standalone · OnPush';

  private readonly host = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const node = this.host.nativeElement;
    node.setAttribute('data-inspect', `<${this.selectorName}> · ${this.inspectMeta}`);
    node.classList.add('inspect-target');
  }
}
