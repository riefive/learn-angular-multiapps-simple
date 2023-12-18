import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective {

  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    nativeElement.style.backgroundColor = 'yellow';
  }

}
