@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(
    private el: ElementRef,      // reference to the DOM element
    private renderer: Renderer2  // safely manipulate DOM
  ) {}

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background', 'yellow');
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background');
  }
}


------------------------------------------------------------------------
Q1. What is ElementRef and why should you be careful with it?
Expected Answer:

// ElementRef gives direct access to DOM element
constructor(private el: ElementRef) {}

// Direct DOM manipulation — BAD ❌
this.el.nativeElement.style.color = 'red';

// Why bad?
// 1. Breaks Server Side Rendering (SSR)
// 2. Security risk — XSS attacks
// 3. Tightly couples to browser DOM

// Always use Renderer2 instead — GOOD ✅
constructor(
  private el: ElementRef,
  private renderer: Renderer2
) {}

this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
------------------------------------------------------------------------

. What is Renderer2 and what methods does it have?
Expected Answer:
typescript// Renderer2 — safe, platform-independent DOM manipulation

this.renderer.setStyle(el, 'color', 'red');        // set CSS style
this.renderer.removeStyle(el, 'color');             // remove CSS style
this.renderer.addClass(el, 'active');               // add CSS class
this.renderer.removeClass(el, 'active');            // remove CSS class
this.renderer.setAttribute(el, 'disabled', 'true');// set attribute
this.renderer.removeAttribute(el, 'disabled');      // remove attribute
this.renderer.setProperty(el, 'value', 'hello');   // set property
this.renderer.listen(el, 'click', handler);         // add event listener
this.renderer.createElement('div');                 // create element
this.renderer.appendChild(parent, child);           // append element


----------------------------------------------------------------------

Q3. What is @HostListener and @HostBinding?
Expected Answer:


// @HostListener — listens to events on the HOST element
@HostListener('click') onClick() {
  console.log('element clicked!');
}

@HostListener('mouseenter', ['$event']) onEnter(event: MouseEvent) {
  console.log(event.target);
}

// @HostBinding — binds a property to the HOST element
@HostBinding('style.color') textColor = 'black';
@HostBinding('class.active') isActive = false;
@HostBinding('attr.disabled') isDisabled = false;

// Example together
@HostBinding('style.backgroundColor') bgColor = 'white';

@HostListener('mouseenter') onEnter() {
  this.bgColor = 'yellow';   // changes host element background
}

@HostListener('mouseleave') onLeave() {
  this.bgColor = 'white';
}

