import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { counterReducer } from '../store/counter/counter.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ count: counterReducer }), // Provide store directly in the standalone app
  ]
}).catch(err => console.error(err));
