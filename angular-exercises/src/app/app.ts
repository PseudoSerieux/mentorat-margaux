import { Component, signal } from '@angular/core';
import { Standalone } from './exercises/02-standalone/standalone';
import { FormBuilderExercise } from './exercises/03-form-builder/form-builder';
import { Signals } from './exercises/04-signals/signals';
import { VirtualScroll } from './exercises/05-virtual-scroll/virtual-scroll';
import { ControlFlow } from './exercises/06-control-flow/control-flow';
import { DeferDemo } from './exercises/07-defer/defer-demo';
import { InjectDemo } from './exercises/08-inject/inject-demo';
import { SignalInputs } from './exercises/09-signal-inputs/signal-inputs';
import { OptimizedImageExercise } from './exercises/10-optimized-image/optimized-image';

const exercises = [
  { id: 1,  label: '01 — Angular CLI',          note: 'See src/app/exercises/01-cli-basics/README.md' },
  { id: 2,  label: '02 — Standalone Components' },
  { id: 3,  label: '03 — FormBuilder'           },
  { id: 4,  label: '04 — Signals'               },
  { id: 5,  label: '05 — Virtual Scroll'        },
  { id: 6,  label: '06 — Control Flow'          },
  { id: 7,  label: '07 — @defer'                },
  { id: 8,  label: '08 — inject()'              },
  { id: 9,  label: '09 — Signal Inputs'         },
  { id: 10, label: '10 — NgOptimizedImage'      },
] as const;

@Component({
  selector: 'app-root',
  imports: [
    Standalone, FormBuilderExercise, Signals, VirtualScroll,
    ControlFlow, DeferDemo, InjectDemo, SignalInputs, OptimizedImageExercise,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  exercises = exercises;
  active = signal(1);

  select(id: number) {
    this.active.set(id);
  }
}
