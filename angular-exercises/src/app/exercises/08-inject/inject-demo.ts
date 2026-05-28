// Exercise 8 — inject() Function (Angular 14+)
// inject() replaces constructor-based dependency injection.
// It can be called at the field level (no constructor needed),
// inside factory functions, and in functional guards/resolvers.
// React equivalent: useContext(). Vue: inject() from Composition API.
//
// inject() also unlocks takeUntilDestroyed() — an RxJS operator that
// automatically unsubscribes observables when the component is destroyed.
// No more ngOnDestroy + Subject boilerplate.

import { Component, inject, signal, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-inject-demo',
  imports: [],
  templateUrl: './inject-demo.html',
  styleUrl: './inject-demo.scss',
})
export class InjectDemo implements OnInit {
  // TODO 1: Inject the Title service at field level (no constructor):
  // private titleService = inject(Title);

  // TODO 2: Inject the DOCUMENT token from '@angular/common':
  // private document = inject(DOCUMENT);

  tick = signal(0);

  constructor() {
    // TODO 3: Subscribe to interval(1000) here using takeUntilDestroyed()
    // This auto-unsubscribes when the component is destroyed — no OnDestroy needed!
    //
    // interval(1000)
    //   .pipe(takeUntilDestroyed())
    //   .subscribe(n => this.tick.set(n));
  }

  ngOnInit() {
    // TODO 4: Set the page title using this.titleService.setTitle('Exercise 8 — inject()');
    // Open the browser tab to verify it changed!
  }
}
