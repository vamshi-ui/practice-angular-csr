import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorChangeDirective } from './drectives/color-change.directive';
import { SignalsExampleComponent } from "./signals-example/signals-example.component";

@Component({
  selector: 'app-root',
  imports: [ColorChangeDirective, SignalsExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practice-csr';
}
