import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}
  @Input()
  appInputFormat: string;

  @HostListener('focus')
  onFocus(): void {
    console.log('focus');
  }

  @HostListener('blur')
  onBlur(): void {
    console.log('blur');
    const value: string = this.el.nativeElement.value;
    if (this.appInputFormat === 'lowercase') {
      this.el.nativeElement.value = value.toLowerCase();
    } else {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
}
