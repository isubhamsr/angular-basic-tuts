import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  elemet:ElementRef
  constructor(elemet:ElementRef) { 
    this.elemet = elemet
  }

  @HostBinding("style.backgroundColor")
  bdColor = "blue"
  
  
    @HostListener("mouseenter")
    changeFontSize(){
      this.elemet.nativeElement.style.fontSize = "50px"
    }
  
    @HostListener("mouseleave")
    resetFontSize(){
      this.elemet.nativeElement.style.fontSize = "30px"
    }
}
