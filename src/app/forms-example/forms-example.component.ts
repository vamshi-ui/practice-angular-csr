import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-forms-example',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forms-example.component.html',
  styleUrl: './forms-example.component.scss',
})
export class FormsExampleComponent {
  fb = inject(FormBuilder);
  passwordtype = signal('password');
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, this.passwordValidator]],
  });

  constructor() {}

  togglePassword() {
    this.passwordtype.update((data) =>
      data == 'password' ? 'text' : 'password'
    );
  }

  submit() {
    console.log(this.form.value);
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) return null;

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const minLength = value.length >= 8;

    const passwordValid =
      hasUpperCase && hasLowerCase && hasNumber && hasSpecial && minLength;

    return !passwordValid
      ? {
          passwordStrength: {
            hasUpperCase,
            hasLowerCase,
            hasNumber,
            hasSpecial,
            minLength,
          },
        }
      : null;
  }
}
