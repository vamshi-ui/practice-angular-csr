import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals-example',
  imports: [],
  templateUrl: './signals-example.component.html',
  styleUrl: './signals-example.component.scss'
})
export class SignalsExampleComponent {
  counter = signal(0);
  customSignal = computed(()=> this.counter() % 2 == 0 ? 'even' : 'odd')
  increment(){
    this.counter.update(count => count+1)
  }
  decrement(){
    this.counter.update(count => count-1)
  }
}
