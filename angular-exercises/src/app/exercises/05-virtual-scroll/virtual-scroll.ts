// Exercise 5 — Virtual Scroll (CDK)
// VirtualScroll renders only the visible items in a long list.
// Without it: 10 000 DOM nodes → slow. With it: ~10 DOM nodes → fast.
// This is Angular CDK's answer to react-window / vue-virtual-scroller.
// Import: ScrollingModule from '@angular/cdk/scrolling'

import { Component } from '@angular/core';
// TODO 1: Import ScrollingModule from '@angular/cdk/scrolling'

@Component({
  selector: 'app-virtual-scroll',
  imports: [
    // TODO 2: Add ScrollingModule here
  ],
  templateUrl: './virtual-scroll.html',
  styleUrl: './virtual-scroll.scss',
})
export class VirtualScroll {
  // TODO 3: Replace this stub with 10 000 items
  // Quick way: items = Array.from({ length: 10_000 }, (_, i) => `Item #${i + 1}`);
  items: string[] = ['Item #1', 'Item #2', 'Item #3'];

  // TODO 4 (bonus): Add a 'trackByItem' function for better performance
  // trackByItem = (index: number, item: string) => item;
}
