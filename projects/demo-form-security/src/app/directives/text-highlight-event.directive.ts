import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextHighlightEvent]'
})
export class TextHighlightEventDirective {
  private isRender: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.SetHighlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.SetHighlight('');
  }

  private SetHighlight(color: string) {
    if (!this.isRender) {
      this.el.nativeElement.style.backgroundColor = color;
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
    }
  }
}
