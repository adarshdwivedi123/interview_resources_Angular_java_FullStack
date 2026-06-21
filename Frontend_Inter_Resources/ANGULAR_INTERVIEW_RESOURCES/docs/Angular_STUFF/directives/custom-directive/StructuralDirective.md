
#)Struttutr rember for sturture directive?
@Directive({ 
  selector: '[appX]', // used as attribute on HTML element
 standalone: true    // no need to declare in NgModule
 })
 //[appX] in square brackets means it's an attribute selector
export class XDirective {
  constructor(
    private tpl: TemplateRef<unknown>,
    private vc: ViewContainerRef
  ) {}

  @Input() set appX(value: any) {
    // logic here
  }
}
Holds a reference to the HTML template
Think of it as the blueprint of the DOM block
The content is not rendered yet — just stored
<unknown> means the context type is not strictly typed here

--------------------------------------------------------------------
ViewContainerRef
typescriptprivate vc: ViewContainerRef

This is the place in the DOM where content gets inserted
You use it to create or destroy views dynamically
this.vc.createEmbeddedView(this.tpl)  // renders the template
this.vc.clear()                        // removes it from DOM




------------------------------------
. @Input() set appX(value: any)
typescript@Input() set appX(value: any) {
  // logic here
}

This is a setter — runs every time the input value changes
Input name matches the directive selector appX
value is whatever you pass from HTML

----------------------------------------------------------------------

SUMMARY
{
  "Angular Structural Directive Cheatsheet": {
    "prefix": "directive-cheat",
    "body": [
      "// ============================================",
      "// STRUCTURAL DIRECTIVE SUMMARY",
      "// ============================================",
      "// @Directive        → Decorator      → Marks class as directive",
      "// selector:'[appX]' → Attr selector  → Used as *appX in HTML",
      "// standalone: true  → Config         → No NgModule needed",
      "// TemplateRef        → Blueprint      → Holds the HTML template",
      "// ViewContainerRef   → Container      → Renders/removes template in DOM",
      "// @Input() set appX  → Setter         → Triggers logic on value change",
      "// ============================================",
      "@Directive({",
      "  selector: '[app${1:Name}]',",
      "  standalone: true",
      "})",
      "export class ${1:Name}Directive {",
      "  constructor(",
      "    private tpl: TemplateRef<unknown>,",
      "    private vc: ViewContainerRef",
      "  ) {}",
      "",
      "  @Input() set app${1:Name}(value: any) {",
      "    this.vc.clear();",
      "    if (value) {",
      "      this.vc.createEmbeddedView(this.tpl);",
      "    }",
      "  }",
      "}"
    ],
    "description": "Custom structural directive with cheatsheet comments"
  }
}


==================================
typescript/*
  REMEMBER:
  TemplateRef      = Blueprint  (holds template, not rendered yet)
  ViewContainerRef = Container  (renders/removes from DOM)
  @Input() setter  = runs every time value changes
*/


What is TemplateRef and ViewContainerRef?

Q3. Why do we use * before directive name?
Practice Answer:
html<!-- What you write -->
<p *appX="true">Hello</p>

<!-- What Angular converts it to internally -->
<ng-template [appX]="true">
  <p>Hello</p>
</ng-template>


*NgIF directive

@Directive({
  selector: '[appIf]',
  standalone: true
})
export class AppIfDirective {
  constructor(
    private tpl: TemplateRef<unknown>,
    private vc: ViewContainerRef
  ) {}

  @Input() set appIf(condition: boolean) {
    this.vc.clear();  //hide 
    if (condition) {
      this.vc.createEmbeddedView(this.tpl);  // ✅ SHOW
    }
  }
}


. Build *appRole directive
typescript// Show content only if user role matches
// Usage:  *appRole="'admin'



Q7. What happens if you don't inject TemplateRef?
typescript// If you remove TemplateRef from constructor:
constructor(private vc: ViewContainerRef) {}

// Then try:
this.vc.createEmbeddedView(???)  // ❌ nothing to render!

You NEED TemplateRef to know what to renders

Q8. Can you use a structural directive on a component?
html<!-- YES, you can! -->
<app-dashboard *appIf="isAdmin"></app-dashboard>

<!-- Angular expands to -->
<ng-template [appIf]="isAdmin">
  <app-dashboard></app-dashboard>
</ng-template>
========================================================
Category 2 — Performance Questions
Q6. What is the performance problem with this code?
typescript@Input() set appIf(condition: boolean) {
  this.vc.clear();
  if (condition) {
    this.vc.createEmbeddedView(this.tpl);  // creates new every time!
  }
}
Expected Answer:
typescript// Problem — destroys and recreates DOM every time value changes
// true → false → true = 2 DOM creations

// Solution — cache the view reference
private viewRef: EmbeddedViewRef<unknown> | null = null;

@Input() set appIf(condition: boolean) {
  if (condition && !this.viewRef) {
    this.viewRef = this.vc.createEmbeddedView(this.tpl); // create once
  } else if (!condition && this.viewRef) {
    this.viewRef.destroy();   // or vc.clear()
    this.viewRef = null;
  }
}



Structural Directive  →  changes DOM (adds/removes elements)
                      →  uses * prefix
                      →  needs TemplateRef + ViewContainerRef

Attribute Directive   →  changes appearance / behavior
                      →  no * prefix
                      →  uses ElementRef, Renderer2, HostListener