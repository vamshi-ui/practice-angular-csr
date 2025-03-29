import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  displayData = input('', { transform: this.transformString });
  inputValue = signal('');
  onSubmit = output<string>()


  ngOnChanges() {
    this.inputValue.set(this.displayData());
  }

  transformString(value: string | undefined): string {
    return value?.trim()?.toUpperCase() ?? '';
  }

  onInputChange(event: any) {
    this.inputValue.set(this.transformString(event.target.value));
  }

  submit(){
    this.onSubmit.emit(this.inputValue())
  }
}
