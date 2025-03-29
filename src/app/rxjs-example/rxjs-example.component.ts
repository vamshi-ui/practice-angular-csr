import { Component } from '@angular/core';
import { CapitalizeDirective } from '../drectives/capitalize.directive';

@Component({
  selector: 'app-rxjs-example',
  imports: [CapitalizeDirective],
  templateUrl: './rxjs-example.component.html',
  styleUrl: './rxjs-example.component.scss'
})
export class RxjsExampleComponent {

}
