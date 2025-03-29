import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ColorChangeDirective } from './drectives/color-change.directive';
import { SignalsExampleComponent } from './signals-example/signals-example.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';
import { WordCounterPipe } from './pipes/word-counter.pipe';
import { CommonModule } from '@angular/common';
import { ApplyBorderDirective } from './drectives/apply-border.directive';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [
    ColorChangeDirective,
    ApplyBorderDirective,
    SignalsExampleComponent,
    RxjsExampleComponent,
    WordCounterPipe,
    CommonModule,
    ChildComponent,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  today = new Date();
  isAuthenticated = signal(false);
  data ='vamshi'
  title = 'practice-csr';
  userList = ['vamshi', 'rajesh', 'suresh', 'ramesh'];
  ngOnInit() {
    setTimeout(() => {
      this.isAuthenticated.set(true);
    }, 5000);
  }

  childData(event: string){
    this.data = event
  }
}
