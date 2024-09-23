import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../store/counter/counter.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  template: `
   
   <div class="container">
      <h1>Counter App with NgRx</h1>
      <h2>{{ count$ | async }}</h2>

      <button (click)="increment()" class="btn btn-primary">Increment</button>
      <button (click)="decrement()" class="btn btn-danger">Decrement</button>
      <button (click)="reset()" class="btn btn-secondary">Reset</button>
  </div>

  `,
  styles: [],
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    // Select the counter state
    this.count$ = this.store.select('count');
  }

  // Dispatch the increment action
  increment() {
    this.store.dispatch(increment());
  }

  // Dispatch the decrement action
  decrement() {
    this.store.dispatch(decrement());
  }

  // Dispatch the reset action
  reset() {
    this.store.dispatch(reset());
  }
}
