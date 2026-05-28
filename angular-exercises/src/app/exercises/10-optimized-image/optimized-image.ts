// Exercise 10 — NgOptimizedImage (Angular 15+)
// Drop-in replacement for <img> that enforces image performance best practices:
//   - Lazy loading by default (loading="lazy")
//   - Prevents layout shift by requiring width + height
//   - Warns if LCP image lacks priority attribute
//   - Generates srcset automatically for responsive images
//   - Works with image CDNs (Imgix, Cloudinary, Cloudflare…) via loaders
//
// React equivalent: next/image. No built-in equivalent in Vue.

import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-optimized-image',
  imports: [NgOptimizedImage],
  templateUrl: './optimized-image.html',
  styleUrl: './optimized-image.scss',
})
export class OptimizedImageExercise {
  // Public domain images from picsum.photos — safe to use for demos
  images = [
    { src: 'https://picsum.photos/seed/angular/800/400', alt: 'Angular landscape',  w: 800, h: 400 },
    { src: 'https://picsum.photos/seed/signals/800/400', alt: 'Signals landscape',  w: 800, h: 400 },
    { src: 'https://picsum.photos/seed/forms/800/400',   alt: 'Forms landscape',    w: 800, h: 400 },
  ];
}
