# Exercise 1 — Angular CLI

## Concept

The Angular CLI (`ng`) is the primary tool for scaffolding, building, and running Angular projects. It's similar to Vue CLI or Create React App, but much more powerful — it handles code generation, builds, testing, and more throughout the entire project lifecycle.

## Prerequisites

```bash
npm install -g @angular/cli
ng version   # verify installation
```

## Goals

- Understand the most useful `ng` commands
- Generate components, services, and pipes using schematics
- Read and understand the generated output

---

## Step-by-step

### 1. Explore the project

```bash
ng version                    # show CLI + Angular package versions
cat angular.json              # build config — builders, assets, styles, etc.
```

### 2. Generate a component

Run this from the `angular-exercises/` root:

```bash
ng generate component exercises/01-cli-basics/hello --skip-tests --flat
# Short form:
ng g c exercises/01-cli-basics/hello --skip-tests --flat
```

Open the created `hello.ts`. Notice:
- `standalone: true` (no NgModule)
- `selector: 'app-hello'`
- Linked HTML and SCSS files

### 3. Generate a service

```bash
ng g service exercises/01-cli-basics/counter --skip-tests --flat
```

Open `counter.service.ts`. Notice `@Injectable({ providedIn: 'root' })` — this makes it a singleton available app-wide without any module config.

### 4. Generate a pipe

```bash
ng g pipe exercises/01-cli-basics/shout --skip-tests --flat
```

Open `shout.pipe.ts`. Implement it:

```typescript
transform(value: string): string {
  return value.toUpperCase() + '!!!';
}
```

### 5. Build for production

```bash
ng build                      # output in dist/
ng build --configuration=production  # explicit prod config
```

### 6. Useful flags to know

| Flag | Effect |
|------|--------|
| `--skip-tests` | Don't generate `.spec.ts` files |
| `--flat` | Put file in the target folder, no subfolder |
| `--inline-template` | Template in the `.ts` file (no `.html`) |
| `--dry-run` | Preview what would be generated without writing |

```bash
# Always preview first with --dry-run:
ng g c my-component --dry-run
```

### 7. Schematics

`ng add` installs a library AND runs its schematic to configure your project:

```bash
ng add @angular/material   # adds Material, configures theme, updates app
```

---

## Validation

- `ng serve` → browser opens, hot-reloads on file save
- Generated files appear in `src/app/exercises/01-cli-basics/`
- `ng build` completes with 0 errors
