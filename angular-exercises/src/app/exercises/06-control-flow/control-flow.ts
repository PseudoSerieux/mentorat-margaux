// Exercise 6 — New Control Flow Syntax (Angular 17+)
// Angular 17 replaced structural directives with built-in control flow:
//   *ngIf   → @if / @else
//   *ngFor  → @for (requires 'track')
//   *ngSwitch → @switch / @case / @default
// No imports needed — control flow is part of the template compiler.
// React equivalent: JSX conditionals / .map(). Vue equivalent: v-if / v-for.

import { Component, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  category: 'electronics' | 'clothing' | 'food';
  inStock: boolean;
}

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.scss',
})
export class ControlFlow {
  products: Product[] = [
    { id: 1, name: 'Laptop',    category: 'electronics', inStock: true  },
    { id: 2, name: 'T-Shirt',   category: 'clothing',    inStock: false },
    { id: 3, name: 'Apple',     category: 'food',        inStock: true  },
    { id: 4, name: 'Headphones',category: 'electronics', inStock: true  },
    { id: 5, name: 'Jeans',     category: 'clothing',    inStock: true  },
  ];

  selected = signal<Product | null>(null);

  select(product: Product) {
    this.selected.set(product);
  }

  clear() {
    this.selected.set(null);
  }
}
