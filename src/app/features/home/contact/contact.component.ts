import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { PROFILE } from '../../../data/profile.data';
import { SectionHeaderComponent } from '../../../shared/components/section-header/section-header.component';
import { InspectTargetDirective } from '../../../shared/directives/inspect-target.directive';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SectionDirective } from '../../../shared/directives/section.directive';

type SubmitStatus = 'idle' | 'sent';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SectionHeaderComponent,
    InspectTargetDirective,
    RevealDirective,
    SectionDirective,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly profile = PROFILE;
  protected readonly status = signal<SubmitStatus>('idle');

  /** Strictly typed reactive form — no template-driven forms here. */
  protected readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.form.getRawValue();
    const subject = `Portfolio contact from ${name}`;
    const body = `${message}\n\n— ${name} <${email}>`;
    const mailto =
      `mailto:${this.profile.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    this.status.set('sent');
    this.form.reset();
  }

  protected showError(controlName: 'name' | 'email' | 'message'): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }
}
