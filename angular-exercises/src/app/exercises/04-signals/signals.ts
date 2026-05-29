// Exercise 4 — Signals
// Signals are Angular's reactive primitive (Angular 16+).
// Think of them like Vue's ref() or React's useState() — but fine-grained:
// only the parts of the template that READ the signal re-render when it changes.
// signal()   → writable reactive value
// computed() → derived read-only value (like Vue's computed / React useMemo)
// effect()   → side effect that runs when signals it reads change (like useEffect)

import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals {
  // TODO 1: Replace this stub with signal(0)
  count = signal(0);

  // TODO 2: Create a `doubled` computed signal that returns count() * 2
  // Syntax: doubled = computed(() => this.count() * 2);
  doubled = computed(() => this.count() * 2);

  // TODO 3: Create a `isEven` computed signal (boolean)
  isEven = computed(() => this.count() % 2 === 0);

  // TODO 4: In the constructor, add an effect() that console.log('Count changed:', this.count())
  // Note: effects run once immediately, then again every time a signal they read changes

  constructor() {
    // TODO 4 goes here
    effect(() => {
      console.log('Count changed:', this.count());
    });
  }

  // TODO 5: implement using this.count.update(c => c + 1)
  increment() {
    this?.count.update(c => c + 1);
  }

  // TODO 6: implement using this.count.update(c => c - 1)
  decrement() {
    this.count.update(c => c - 1);
  }
  // TODO 7: implement using this.count.set(0)
  reset() {
    this.count.set(0);
  }
}
