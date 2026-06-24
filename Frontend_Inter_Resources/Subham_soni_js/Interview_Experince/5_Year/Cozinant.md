I rejected here Because i am not able  write intercepto code  clear L1 round in L2 round got rejcted.

<p >hello</p>
how to ACCES TO  p using custom directive


<p appHighlight>Hello</p>
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    console.log(this.element.nativeElement); // <p>Hello</p>

    this.element.nativeElement.style.color = 'red';
    this.element.nativeElement.style.fontWeight = 'bold';
  }
}