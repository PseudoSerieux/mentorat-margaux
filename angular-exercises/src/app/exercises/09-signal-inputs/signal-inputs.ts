// Exercise 9 — Signal Inputs & Outputs (Angular 17+)
// input() / output() are the modern signal-based replacement for @Input / @Output.
// input.required<T>() → required prop (compile error if not passed, like React prop-types)
// input<T>(defaultValue) → optional prop with fallback
// output<T>() → typed event emitter
// model<T>() → two-way binding (replaces @Input + @Output('nameChange') pattern)
//
// Key difference from @Input: input() returns a Signal, so you READ it with name().
// This means the value is reactive — computed() and effect() can depend on it.

import { Component, signal } from '@angular/core';
import { GreetingCard } from './greeting-card';

@Component({
  selector: 'app-signal-inputs',
  imports: [
    GreetingCard,
    // TODO 7: GreetingCard is already imported — add it to the template below
  ],
  templateUrl: './signal-inputs.html',
  styleUrl: './signal-inputs.scss',
})
export class SignalInputs {
  names = signal(['Alice', 'Bob', 'Carol']);
  dismissed = signal<string[]>([]);

  onDismiss(name: string) {
    // TODO 8: Remove 'name' from the names signal
    // Hint: this.names.update(list => list.filter(n => n !== name));
    // Also add name to the dismissed list
  }
}
