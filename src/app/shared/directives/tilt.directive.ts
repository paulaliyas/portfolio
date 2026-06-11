import { Directive, ElementRef, NgZone, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Tactile 3D tilt on pointer hover. Disabled on touch devices and for
 * users who prefer reduced motion. Runs outside Angular's zone so pointer
 * tracking never triggers change detection.
 */
@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class TiltDirective implements OnInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private cleanup: (() => void) | null = null;

  ngOnInit(): void {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reducedMotion) {
      return;
    }

    const node = this.host.nativeElement;
    node.classList.add('tilt');

    this.zone.runOutsideAngular(() => {
      const onMove = (event: PointerEvent): void => {
        const rect = node.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        node.style.setProperty('--tilt-x', `${(-y * 6).toFixed(2)}deg`);
        node.style.setProperty('--tilt-y', `${(x * 8).toFixed(2)}deg`);
      };
      const onLeave = (): void => {
        node.style.setProperty('--tilt-x', '0deg');
        node.style.setProperty('--tilt-y', '0deg');
      };

      node.addEventListener('pointermove', onMove);
      node.addEventListener('pointerleave', onLeave);
      this.cleanup = () => {
        node.removeEventListener('pointermove', onMove);
        node.removeEventListener('pointerleave', onLeave);
      };
    });
  }

  ngOnDestroy(): void {
    this.cleanup?.();
  }
}
