import { Component } from '@angular/core';
import { CapitalizeDirective } from '../drectives/capitalize.directive';
import { BehaviorSubject, debounceTime, from, interval, of, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rxjs-example',
  imports: [CapitalizeDirective, CommonModule],
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.scss',
})
export class RxjsExampleComponent {
  sampleObs$ = of(1, 2, 3);
  timer$ = interval(2000);
  count = 0;
  searchData$ = new BehaviorSubject('');
  apiData$ = of([1,2,3])

  constructor() {
    this.timer$.subscribe(() => {
      this.count++;
      this.sampleObs$ = of(this.count);
    });

    this.searchData$.pipe(debounceTime(500)).pipe(switchMap((searchText:any)=>{
      console.log(searchText)
      return this.apiData$
    })).subscribe({
      next: console.log,
    });
  }

  onSearch(event: any) {
    this.searchData$.next(event.target.value);
  }
}
