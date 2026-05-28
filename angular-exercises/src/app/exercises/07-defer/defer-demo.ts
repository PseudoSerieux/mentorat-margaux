// Exercise 7 — Deferred Loading (@defer, Angular 17+)
// @defer lazy-loads a part of the template (and its component dependencies)
// only when a trigger condition is met. No code splitting config needed.
// React equivalent: React.lazy() + Suspense. Vue: defineAsyncComponent().
//
// Triggers:
//   @defer (on idle)        → when browser is idle
//   @defer (on viewport)    → when element enters the viewport
//   @defer (on interaction) → on first click/focus on the placeholder
//   @defer (on timer(2s))   → after a delay
//   @defer (when condition) → when a boolean expression turns true
//
// Blocks:
//   @placeholder  → shown before the trigger fires
//   @loading      → shown while the chunk is loading
//   @error        → shown if loading fails

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-defer-demo',
  imports: [],
  templateUrl: './defer-demo.html',
  styleUrl: './defer-demo.scss',
})
export class DeferDemo {
  showHeavy = signal(false);

  load() {
    this.showHeavy.set(true);
  }
}
