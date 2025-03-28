import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appColorChange]',
})
export class ColorChangeDirective {
  @HostBinding('style.background-color') color = 'white';
  constructor() {}

  @HostListener('mouseover')
  changeColor() {
    this.color = 'red';
  }

  @HostListener('mouseleave')
  bgWhite() {
    this.color = 'white';
  }

  @HostListener('click')
  onClick() {
    console.log('clicked');
  }
}
