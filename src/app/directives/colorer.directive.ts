import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[colorer]'
})
export class ColorerDirective {

  constructor(e1: ElementRef) {
    e1.nativeElement.style.color = 'red';
  }

}
