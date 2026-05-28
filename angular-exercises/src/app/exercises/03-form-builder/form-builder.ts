// Exercise 3 — Typed FormBuilder & Reactive Forms
// Reactive forms are Angular's answer to controlled forms in React.
// FormBuilder is a helper service that creates FormGroups and FormControls.
// Since Angular 14, forms are strictly typed — no more `any` value types.
// Use `inject(FormBuilder)` (exercise 8 sneak peek!) to get the service.

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// TODO 1: Import JsonPipe from '@angular/common' to debug form values

@Component({
  selector: 'app-form-builder',
  imports: [
    ReactiveFormsModule,
    // TODO 2: Add JsonPipe
  ],
  templateUrl: './form-builder.html',
  styleUrl: './form-builder.scss',
})
export class FormBuilderExercise {
  private fb = inject(FormBuilder);

  // TODO 3: Create a 'loginForm' FormGroup using this.fb.group({})
  // It should have:
  //   - email: ['', [Validators.required, Validators.email]]
  //   - password: ['', [Validators.required, Validators.minLength(6)]]
  //
  // Hint: FormGroup type is inferred automatically from the shape you pass in

  // TODO 4: Create an 'onSubmit()' method that logs the form value
  // Use: console.log(this.loginForm.value)
  // Check this.loginForm.valid before processing
}
