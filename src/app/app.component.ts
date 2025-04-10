import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  signal,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ColorChangeDirective } from './drectives/color-change.directive';
import { SignalsExampleComponent } from './signals-example/signals-example.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';
import { WordCounterPipe } from './pipes/word-counter.pipe';
import { CommonModule } from '@angular/common';
import { ApplyBorderDirective } from './drectives/apply-border.directive';
import { ChildComponent } from './child/child.component';
import { FormsExampleComponent } from "./forms-example/forms-example.component";

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
    RouterLink,
    FormsExampleComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('box') box!: ElementRef;
  @ViewChild('box1') box1!: ElementRef;
  today = new Date();
  isAuthenticated = signal(false);
  data = 'vamshi';
  title = 'practice-csr';
  userList = ['vamshi', 'rajesh', 'suresh', 'ramesh'];
  ngOnInit() {
    setTimeout(() => {
      this.isAuthenticated.set(true);
    }, 5000);

    console.log(this.reverseString('str: string'));
    console.log(this.firstUniqueChar('star: string'));
    console.log(this.isAnagram('listen', 'silent'));
    console.log(this.flatten([1, [2, [3, [4]], 5]]));
    console.log(this.longestWord('The quick brown fox jumped'));
    console.log(this.countElements(['a', 'b', 'a', 'c', 'b']));
    console.log(this.removeDuplicates(['a', 'b', 'a', 'c', 'b']));
  }

  ngAfterViewInit() {
    this.box.nativeElement.value = 'vamshi bandela';
    this.box1.nativeElement.innerText = 'vamshi bandela';
    this.box.nativeElement.style.border = '2px solid red';
  }

  childData(event: string) {
    this.data = event;
  }

  reverseString(str: string) {
    return str.split('').reverse().join('');
  }

  // Input: "aabbcde"
  // Output: "c"
  firstUniqueChar(str: string) {
    // your code here
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
        return str[i];
      }
    }
    return null;
  }

  // Input: "listen", "silent"
  // Output: true

  isAnagram(str1: string, str2: string) {
    // your code here
    if (str1.length !== str2.length) return false;

    for (let i = 0; i < str1.length; i++) {
      if (!str2.includes(str1[i])) {
        return false;
      }
    }

    return true;
  }

  // Input: [1, [2, [3, [4]], 5]]
  // Output: [1, 2, 3, 4, 5]

  flatten(arr: any[]) {
    // your code here
    let flat: any[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flat = [...flat, ...this.flatten(arr[i])];
      } else {
        flat.push(arr[i]);
      }
    }

    return flat;
  }

  // Input: ['a', 'b', 'a', 'c', 'b']
  // Output: { a: 2, b: 2, c: 1 }

  countElements(arr: any[]) {
    // your code here
    const obj: any = {};
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
        continue;
      } else {
        obj[arr[i]] = arr.filter((data) => data == arr[i]).length;
      }
    }

    return obj;
  }

  longestWord(sentence: string) {
    // your code here

    const words = sentence.split(' ');
    let longWord = '';
    for (let i = 0; i < words.length; i++) {
      longWord.length < words[i].length ? (longWord = words[i]) : null;
    }

    return longWord;
  }

  // Input: [1, 2, 2, 3, 4, 4, 5]
  // Output: [1, 2, 3, 4, 5]

  removeDuplicates(arr: any) {
    // your code here
    let filteredArr: any = [];
    for (let i = 0; i < arr.length; i++) {
      if (!filteredArr.includes(arr[i])) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }

  debounce(fn: any, delay: any) {
    // returns a debounced version of fn
    let timeOut: any;

    return function () {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        fn();
      }, delay);
    };
  }

  @HostListener('document:click')
  onResize() {
    console.log('resize');
  }

  @HostBinding('style.backgroundColor') color = 'pink';
}
