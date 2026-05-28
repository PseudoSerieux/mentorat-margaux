# Angular Exercises

> **Target:** Web developer familiar with React or Vue — learning Angular 15+ modern APIs.
> **Run the app:** `ng serve` → open http://localhost:4200

Each exercise has a numbered component in `src/app/exercises/`. The app sidebar lets you switch between them.
Open the `.ts` + `.html` files and complete the `// TODO` markers in order.

---

## Exercise 1 — Angular CLI

**File:** `src/app/exercises/01-cli-basics/README.md`

The CLI is Angular's primary tool — not just for scaffolding but for the entire project lifecycle. Open the README in that folder and follow the steps in your terminal. There's nothing to implement in the browser for this one.

**Key commands:**
```bash
ng new <name>           # create project
ng generate component   # scaffold a component (alias: ng g c)
ng generate service     # scaffold a service
ng serve                # dev server with hot reload
ng build                # production build
ng add <package>        # install + auto-configure a library
```

---

## Exercise 2 — Standalone Components

**Files:** `src/app/exercises/02-standalone/standalone.ts` + `standalone.html`

**Concept**

In Angular 15+, every component is standalone by default — no `NgModule` needed. Instead of declaring components in a module and importing that module, you declare every dependency directly in the component's own `imports[]` array.

Think of it like React: each component file is self-contained. The difference is that Angular has explicit `imports[]` — if a pipe, directive, or child component isn't listed there, you can't use it in the template.

**Steps**

1. Import `JsonPipe` and `DatePipe` from `'@angular/common'`
2. Add them to the `imports: []` array in `@Component`
3. Add a `today = new Date()` property
4. Add a `user` object with `name`, `age`, and `city` fields
5. In the template, display `today` using `{{ today | date:'longDate' }}`
6. Display `user` using `{{ user | json }}`
7. Try different `DatePipe` format strings: `'short'`, `'medium'`, `'EEEE, MMM d'`

<details>
<summary>Hint — imports array</summary>

```typescript
import { JsonPipe, DatePipe } from '@angular/common';

@Component({
  imports: [JsonPipe, DatePipe],
  ...
})
```
</details>

**Validation:** Page shows a formatted date and the JSON of your user object.

---

## Exercise 3 — Typed FormBuilder & Reactive Forms

**Files:** `src/app/exercises/03-form-builder/form-builder.ts` + `form-builder.html`

**Concept**

Reactive forms are Angular's equivalent of controlled forms in React. A `FormGroup` holds the form state; `FormControl` holds each field's value and validation state. Since Angular 14, everything is fully typed — no more `form.value` returning `any`.

`FormBuilder` is a helper service that reduces the boilerplate of creating `FormGroup`/`FormControl` by hand.

**Steps**

1. Import `JsonPipe` from `'@angular/common'` and add to `imports[]`
2. Create `loginForm` using `this.fb.group({})` with `email` and `password` controls
3. Add `Validators.required` + `Validators.email` to email; `Validators.required` + `Validators.minLength(6)` to password
4. Implement `onSubmit()` — log `this.loginForm.value` only if `this.loginForm.valid`
5. In the template: add `[formGroup]="loginForm"` and `(ngSubmit)="onSubmit()"` to `<form>`
6. Add `formControlName="email"` and `formControlName="password"` to the inputs
7. Show a validation error message when email is invalid and touched
8. Disable the submit button when `loginForm.invalid`
9. Show `{{ loginForm.value | json }}` and `{{ loginForm.status }}` for debugging

<details>
<summary>Hint — creating the form</summary>

```typescript
loginForm = this.fb.group({
  email:    ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]],
});
```
</details>

<details>
<summary>Hint — validation error in template</summary>

```html
@if (loginForm.get('email')?.invalid && loginForm.get('email')?.touched) {
  <span class="error">Valid email required</span>
}
```
</details>

**Validation:** Form shows live status (INVALID/VALID), submit button disables when invalid, console logs the value on valid submit.

---

## Exercise 4 — Signals

**Files:** `src/app/exercises/04-signals/signals.ts` + `signals.html`

**Concept**

Signals are Angular 16's reactive primitive. Unlike `useState` in React (which re-renders the whole component), signals are fine-grained: only the exact DOM nodes that read a signal update when it changes.

| Angular | React | Vue |
|---------|-------|-----|
| `signal(0)` | `useState(0)` | `ref(0)` |
| `computed(() => x())` | `useMemo(() => x, [x])` | `computed(() => x.value)` |
| `effect(() => ...)` | `useEffect(() => ..., [x])` | `watchEffect(() => ...)` |

Reading a signal: `count()` — call it like a function.  
Writing: `count.set(5)` or `count.update(c => c + 1)`.

**Steps**

1. Replace the stub `count` with `signal(0)` (it's already there — look at how it's used)
2. Add `doubled = computed(() => this.count() * 2)`
3. Add `isEven = computed(() => this.count() % 2 === 0)`
4. In the constructor, add `effect(() => console.log('Count:', this.count()))`
5. Implement `increment()` using `this.count.update(c => c + 1)`
6. Implement `decrement()` using `this.count.update(c => c - 1)`
7. Implement `reset()` using `this.count.set(0)`
8. In the template, display `count()`, `doubled()`, and show "Even"/"Odd" using `@if`

<details>
<summary>Hint — reading signals in templates</summary>

```html
<p>Count: {{ count() }}</p>
<p>Doubled: {{ doubled() }}</p>
@if (isEven()) {
  <span>Even</span>
} @else {
  <span>Odd</span>
}
```
</details>

**Validation:** Counter increments/decrements. Console logs on every change. "Even"/"Odd" toggles correctly.

---

## Exercise 5 — Virtual Scroll (CDK)

**Files:** `src/app/exercises/05-virtual-scroll/virtual-scroll.ts` + `virtual-scroll.html`

**Concept**

`CdkVirtualScrollViewport` renders only the visible rows of a list, recycling DOM nodes as you scroll. Without it, 10 000 `<div>` nodes exist in the DOM at once. With it, only ~10 do.

React equivalent: `react-window`. No built-in equivalent in Vue.

**Steps**

1. Import `ScrollingModule` from `'@angular/cdk/scrolling'` and add to `imports[]`
2. Replace the stub `items` array with 10 000 strings:
   ```typescript
   items = Array.from({ length: 10_000 }, (_, i) => `Item #${i + 1}`);
   ```
3. Replace the `<ul>` in the template with:
   ```html
   <cdk-virtual-scroll-viewport itemSize="48" style="height: 400px;">
     <div *cdkVirtualFor="let item of items" class="item" style="height:48px; padding:12px;">
       {{ item }}
     </div>
   </cdk-virtual-scroll-viewport>
   ```
4. Open DevTools → Elements tab → scroll the list — watch the DOM node count stay constant

<details>
<summary>Hint — itemSize</summary>

`itemSize` must match the actual rendered height of each row in pixels. If rows are 48px tall, use `itemSize="48"`. Mismatched values cause scroll glitches.
</details>

**Validation:** List shows 10 000 items, scrolls smoothly, and the Elements panel shows only ~10 row elements.

---

## Exercise 6 — New Control Flow (@if, @for, @switch)

**Files:** `src/app/exercises/06-control-flow/control-flow.ts` + `control-flow.html`

**Concept**

Angular 17 replaced structural directives with built-in control flow syntax. No imports needed — it's part of the compiler.

| Old (still works) | New |
|-------------------|-----|
| `*ngIf="x"` | `@if (x) { }` |
| `*ngIf="x; else tmpl"` | `@if (x) { } @else { }` |
| `*ngFor="let x of list"` | `@for (x of list; track x.id) { }` |
| `[ngSwitch]` + `*ngSwitchCase` | `@switch (x) { @case (y) { } }` |

`track` in `@for` is **required** — it's like React's `key` prop. Use a unique field like `id`.

**Steps**

1. Add a `@for (product of products; track product.id)` loop in the template
2. Display each product's name with a `(click)="select(product)"` button
3. Use `@if` / `@else` to show a "✓ In stock" or "Out of stock" badge per product
4. Use `@switch (product.category)` to show an emoji: `💻` electronics, `👕` clothing, `🍎` food
5. Add an `@empty` block inside the `@for` for when the list is empty
6. Outside the loop, use `@if (selected())` to show the selected product's details

<details>
<summary>Hint — full @for structure</summary>

```html
@for (product of products; track product.id) {
  <div (click)="select(product)">
    @switch (product.category) {
      @case ('electronics') { 💻 }
      @case ('clothing')    { 👕 }
      @case ('food')        { 🍎 }
    }
    {{ product.name }}
    @if (product.inStock) { <span>✓</span> } @else { <span>Out of stock</span> }
  </div>
} @empty {
  <p>No products.</p>
}
```
</details>

**Validation:** List renders all 5 products with emoji and stock badge. Clicking a product shows its details below.

---

## Exercise 7 — Deferred Loading (@defer)

**Files:** `src/app/exercises/07-defer/defer-demo.ts` + `defer-demo.html`

**Concept**

`@defer` lazy-loads a chunk of template (and any component imports it uses) only when a trigger fires. The browser downloads that JS only when needed — zero config required.

React equivalent: `React.lazy()` + `<Suspense>`. Vue: `defineAsyncComponent()`.

**Trigger options:**
- `@defer (on idle)` — when browser is idle (default)
- `@defer (on viewport)` — when the placeholder enters the viewport
- `@defer (on interaction)` — on first click or focus on the placeholder
- `@defer (on timer(2s))` — after a delay
- `@defer (when condition)` — when a boolean expression is true

**Steps**

1. Add an `@defer (on interaction)` block with `@placeholder`, `@loading`, and `@error` sub-blocks
2. The placeholder should be a button: "Click to load content"
3. The loading block: "Loading..." (add `minimum 500ms` to prevent flash)
4. The deferred content: any `<div>` with a success message
5. Add a second `@defer (on viewport)` block below — use a tall placeholder so you have to scroll to trigger it
6. Bonus: wire the existing "Load (when trigger)" button to use `@defer (when showHeavy())`

<details>
<summary>Hint — full @defer structure</summary>

```html
@defer (on interaction) {
  <div>Heavy content loaded! 🎉</div>
} @placeholder {
  <button>Click to load</button>
} @loading (minimum 500ms) {
  <p>Loading...</p>
} @error {
  <p>Failed to load.</p>
}
```
</details>

**Validation:** Placeholder shows initially. Clicking loads the content. Network tab shows no extra chunk (content is inline here), but in a real app with component imports, you'd see a separate chunk load.

---

## Exercise 8 — inject() Function

**Files:** `src/app/exercises/08-inject/inject-demo.ts` + `inject-demo.html`

**Concept**

`inject()` replaces constructor-based DI. You can call it at the field level — no constructor needed. It also works inside factory functions, functional guards, and resolvers.

```typescript
// Old way
constructor(private router: Router) {}

// New way
private router = inject(Router);
```

`takeUntilDestroyed()` pairs with `inject()` to auto-unsubscribe RxJS observables when the component is destroyed — no `Subject` + `takeUntil` boilerplate.

**Steps**

1. Uncomment `private titleService = inject(Title)` (import `Title` from `'@angular/platform-browser'`)
2. Uncomment `private document = inject(DOCUMENT)` (import `DOCUMENT` from `'@angular/common'`)
3. In the constructor, subscribe to `interval(1000).pipe(takeUntilDestroyed())` and call `this.tick.set(n)`
4. In `ngOnInit`, call `this.titleService.setTitle('Exercise 8 — inject()')`
5. In the template, display `tick()` — it should count up every second
6. Bonus: display `titleService.getTitle()` by storing it in a `computed()` signal

<details>
<summary>Hint — takeUntilDestroyed</summary>

```typescript
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

constructor() {
  interval(1000)
    .pipe(takeUntilDestroyed())
    .subscribe(n => this.tick.set(n));
}
```

`takeUntilDestroyed()` must be called in an injection context (constructor or field initializer).
</details>

**Validation:** Counter ticks every second. Browser tab title changes to "Exercise 8 — inject()". No memory leaks — navigate away and back; the old interval stops.

---

## Exercise 9 — Signal Inputs & Outputs

**Files:** `src/app/exercises/09-signal-inputs/signal-inputs.ts` + `greeting-card.ts`

**Concept**

`input()` and `output()` are the modern replacements for `@Input()` and `@Output()`. The key difference: `input()` returns a **Signal**, so it's reactive and can be used in `computed()` and `effect()`.

```typescript
// Old
@Input() name: string = '';
@Output() dismissed = new EventEmitter<void>();

// New
name = input.required<string>();   // required — compile error if not passed
greeting = input('Welcome!');      // optional with default
dismissed = output<void>();        // typed emitter
```

`model()` enables two-way binding (replaces the `@Input() + @Output('nameChange')` pattern).

**Steps**

In `greeting-card.ts`:
1. Replace the stub `name` with `name = input.required<string>()`
2. Replace the stub `greeting` with `greeting = input('Welcome!')`
3. The stub `dismissed` is already correct — keep it
4. Update the template to display `name()` and `greeting()` (called as functions)
5. Wire the Dismiss button to `dismissed.emit()`

In `signal-inputs.ts`:
6. Implement `onDismiss(name)` — filter the name out of `names` signal and add to `dismissed`

In `signal-inputs.html`:
7. Add `@for` loop rendering `<app-greeting-card>` with `[name]="name"` and `(dismissed)="onDismiss(name)"`

<details>
<summary>Hint — parent template</summary>

```html
@for (name of names(); track name) {
  <app-greeting-card
    [name]="name"
    greeting="Good to see you!"
    (dismissed)="onDismiss(name)"
  />
}
```
</details>

**Validation:** Three greeting cards render. Clicking Dismiss removes that card. The "Dismissed:" list updates.

---

## Exercise 10 — NgOptimizedImage

**Files:** `src/app/exercises/10-optimized-image/optimized-image.ts` + `optimized-image.html`

**Concept**

`NgOptimizedImage` (Angular 15+) is a drop-in replacement for `<img>` that enforces image performance best practices automatically:

- Lazy loading by default (`loading="lazy"`)
- Requires `width` + `height` to prevent layout shift (CLS)
- Warns in dev if the LCP image is missing `priority` (which adds a `<link rel="preload">`)
- Auto-generates `srcset` for responsive images
- Works with image CDN loaders (Cloudinary, Imgix, etc.)

React equivalent: `next/image`. No built-in equivalent in Vue.

`NgOptimizedImage` is already imported in the component — `imports: [NgOptimizedImage]`.

**Steps**

1. Replace `src="..."` with `ngSrc="..."` on each image
2. Add `width` and `height` attributes (required — use values from the `image` object)
3. Add `priority` attribute to the **first** image only: `[priority]="first"` (use `$first` from `@for`)
4. Open DevTools → Network → filter "Img": non-priority images load lazily
5. Open DevTools → Elements → check `<head>`: first image gets a `<link rel="preload">`

<details>
<summary>Hint — NgOptimizedImage in @for</summary>

```html
@for (image of images; track image.src; let first = $first) {
  <img
    [ngSrc]="image.src"
    [alt]="image.alt"
    [width]="image.w"
    [height]="image.h"
    [priority]="first"
    style="max-width: 100%; display: block; margin: 8px 0;"
  />
}
```
</details>

**Validation:** Images load lazily (visible in Network tab). First image has `<link rel="preload">` in `<head>`. No console warnings about missing width/height.

---

## Quick Reference — Angular 15+ Cheat Sheet

```typescript
// Standalone component
@Component({ standalone: true, imports: [OtherComponent, SomePipe], ... })

// Signals
count = signal(0);
doubled = computed(() => this.count() * 2);
effect(() => console.log(this.count()));
this.count.set(5);
this.count.update(c => c + 1);

// Typed form
loginForm = inject(FormBuilder).group({
  email: ['', [Validators.required, Validators.email]],
});

// inject() DI
private http = inject(HttpClient);

// Signal inputs / outputs
name = input.required<string>();
label = input('default');
clicked = output<void>();
value = model(0); // two-way binding

// takeUntilDestroyed (no OnDestroy needed)
interval(1000).pipe(takeUntilDestroyed()).subscribe(...);
```

```html
<!-- Control flow -->
@if (condition) { ... } @else { ... }
@for (item of list; track item.id) { ... } @empty { ... }
@switch (val) { @case ('a') { ... } @default { ... } }

<!-- Deferred loading -->
@defer (on viewport) { <heavy-component /> }
@placeholder { <div>Scroll to load</div> }
@loading (minimum 300ms) { <spinner /> }

<!-- Optimized image -->
<img ngSrc="photo.jpg" width="800" height="400" priority />
```
