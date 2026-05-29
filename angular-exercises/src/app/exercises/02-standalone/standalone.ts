import { JsonPipe, DatePipe } from '@angular/common';
// Exercise 2 — Standalone Components
// Angular 15+ components are standalone by default: no NgModule required.
// Unlike Vue SFCs (always self-contained) or React (no concept),
// Angular used to need NgModule to declare components before using them.
// Now: each import you need goes directly into imports[] of @Component.

import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone',
  imports: [
    JsonPipe,
    DatePipe,
    // Every pipe/directive/component used in the template MUST be listed here
  ],
  templateUrl: './standalone.html',
  styleUrl: './standalone.scss',
})
export class Standalone {
  title = 'Standalone Component Exercise';
  today = new Date();
  user = {
    name: 'Jean Paul',
    age: 30,
    city: 'Mérignac sisi'
  };
}
