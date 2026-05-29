// Child component for Exercise 9 — used by SignalInputs parent.
// input() replaces @Input() decorator. output() replaces @Output() + EventEmitter.
// model() is a two-way binding signal (like Vue's v-model).

import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-greeting-card',
  imports: [],
  template: `
    <div class="card">
      <!-- TODO 4: Display the name input signal: {{ name() }} -->
      <h3>Hello, {{ name() }}</h3>

      <!-- TODO 5: Display the greeting input (with default value) -->
      <p>{{ greeting() }}</p>

      <!-- TODO 6: Wire the button to emit the 'dismissed' output -->
      <button (click)="dismissed.emit()">Dismiss</button>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ccc; border-radius: 8px; padding: 16px; margin: 8px 0; }
  `],
})
export class GreetingCard {
  // TODO 1: Replace with input.required<string>()
  name = input.required<string>();

  // TODO 2: Replace with input('Welcome!')
  greeting = input('Welcome!');

  // TODO 3: declared as stub — output<void>() is the real syntax
  dismissed = output<void>();
}
