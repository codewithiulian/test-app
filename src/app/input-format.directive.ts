import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    switch (this.format) {
      case 'uppercase':
        this.el.nativeElement.value = value.toUpperCase();
        break;
      case 'lowercase':
        this.el.nativeElement.value = value.toLowerCase();
        break;
      default:
        break;
    }
    
  }

}
