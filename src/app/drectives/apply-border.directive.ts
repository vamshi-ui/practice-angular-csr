import { Directive, HostBinding, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appApplyBorder]',
})
export class ApplyBorderDirective {
  @Input('data-status') data: any;
  @HostBinding('style.border') border = '';
  constructor() {}
  updateBorder() {
    switch (this.data) {
      case 'success':
        this.border = '2px solid green';
        break;
      case 'error':
        this.border = '2px solid  red';
        break;
      default:
        this.border = '';
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateBorder();
  }
}
