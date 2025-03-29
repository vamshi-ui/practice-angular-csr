import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appCapitalize]',
})
export class CapitalizeDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input')
  onInputChange() {
    this.el.nativeElement.value =
      this.el.nativeElement.value.charAt(0).toUpperCase() +
      this.el.nativeElement.value.slice(1);
  }
}
