// Exercise 2 — Standalone Components
// Angular 15+ components are standalone by default: no NgModule required.
// Unlike Vue SFCs (always self-contained) or React (no concept),
// Angular used to need NgModule to declare components before using them.
// Now: each import you need goes directly into imports[] of @Component.

import { Component } from '@angular/core';
// TODO 1: Import JsonPipe from '@angular/common'
// TODO 2: Import DatePipe from '@angular/common'

@Component({
  selector: 'app-standalone',
  imports: [
    // TODO 3: Add JsonPipe and DatePipe here
    // Every pipe/directive/component used in the template MUST be listed here
  ],
  templateUrl: './standalone.html',
  styleUrl: './standalone.scss',
})
export class Standalone {
  title = 'Standalone Component Exercise';
  // TODO 4: Add a 'today' property set to new Date()
  // TODO 5: Add a 'user' object with name, age, and city fields
}
