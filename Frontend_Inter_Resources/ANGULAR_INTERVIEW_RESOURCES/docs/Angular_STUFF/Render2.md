“Renderer2 is used in Angular to safely manipulate the DOM in a platform-independent way.
Instead of using document or element.style, Renderer2 allows Angular to update the DOM in a secure and predictable way that also works with SSR and different rendering environments.”



#)Why Angular gives Renderer2 instead of direct DOM?
Because direct DOM access:
❌ breaks in SSR (Server-Side Rendering)
❌ breaks in Web Workers
❌ is unsafe (XSS attacks)
❌ may not work in different platforms

Renderer2 ensures your code runs everywhere.


------------------------------------------------------------------------
#)Why Renderer2 is safer than direct DOM?

Direct DOM:
element.style.color = 'red';
document.querySelector(...)

--------------------------------------------------------------

Problems:
Browser-only
Not safe for SSR
Not safe for hydration


Security issues
Renderer2:
✔ Works in browser
✔ Works in SSR
✔ Works in Web Workers
✔ Prevents XSS risks
✔ Recommended by Angular team

------------------------------------------------------------------

constructor(private renderer: Renderer2) {}
Add a class
this.renderer.addClass(element, 'active');
Remove a class
this.renderer.removeClass(element, 'active');
Set style
this.renderer.setStyle(element, 'color', 'red');
