23. **What is the difference between `ngOnChanges()` and `ngDoCheck()`?**
— `ngOnChanges()` is called when an input property changes.
— `ngDoCheck()` is called during every change detection run, even if there are no changes.



#)ngDoCheck()
What is ngDoCheck()? (Very Simple Explanation)

ngDoCheck() runs again and again to check if something changed in your component that Angular cannot detect automatically.
Angular detects changes only when:
Value changes
Object reference changes
But Angular does not detect when you change something inside an object.
---------------------------------------------------------------------------
STEP 1 — Parent Component (parent.component.ts)
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>

    <button (click)="changeName()">Change Name</button>

    <app-child [user]="user"></app-child>
  `
})
export class ParentComponent {
  user = { name: 'Adarsh' };

  changeName() {
    this.user.name = 'Ajju';  // 👈 Only property is updated (Angular won’t detect)
  }
}

✔ Parent has an object
✔ Parent changes internal value
✔ Angular does NOT detect it normally

🟦 STEP 2 — Child Component (child.component.ts)
import { Component, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>Child Component</h3>
    <p>User Name: {{ user.name }}</p>
  `
})
export class ChildComponent implements DoCheck {

  @Input() user: any;
  previousName = '';

  ngDoCheck() {
    if (this.user.name !== this.previousName) {
      console.log('Name changed:', this.previousName, '→', this.user.name);

      this.previousName = this.user.name; // update old value
    }
  }
}





---------------------------------------------------------------------------



Runs on every change detection cycle.
Used to detect custom changes that Angular cannot check automatically
✔ Helpful for checking deep object changes, array mutations, or manual change detection
✔ Used to detect changes Angular may not automatically detect.




#)THis is related to content
content refer to  the external content injected into this component
using content projection.
it is way to pass the html form parent to child component. child compont dispalay 
use <ng-conten></ng-content>


<ng-content>
If we want to pass HTML from a parent to a child component, we use ng-content.



<div class="box">
  <h3>Child Component</h3>
  <ng-content></ng-content>
</div>

✔ ng-content is a placeholder
✔ Parent content will come here

🔹 Step 2: Parent Component (parent.component.html)
<app-child>
  <p>This text comes from the Parent.</p>
</app-child>

<!-- Mulilple content projecitn -->

<div class="card">
  <header class="card-header">
    <ng-content select="[header]"></ng-content>
  </header>

  <section class="card-body">
    <ng-content></ng-content> 
  </section>

  <footer class="card-footer">
    <ng-content select="[footer]"></ng-content>
  </footer>
</div>

------------------------------------------------------------

<app-child>

  <h2 header>Welcome Adarsh</h2>

  <p>This is the main content coming from parent.</p>

  <button footer>Logout</button>

</app-child>


----------------------------------------------------


When does it run?

✔ Runs once after the component receives content from its parent
✔ Used only when you use content projection (<ng-content>)
✔ Happens before ngAfterViewInit
--------------------------------------------

1)ngAfterContentInit()


final Defintion
this life cycyle hooks  run only one time after content sent from
 parent to child (via ng-content) now content is avaible for accesss.


--------------------------------------------------------------
 Why can’t we access ng-content in ngOnInit()?

Because of timing.

Very simple:

1️⃣ Child component is created first
2️⃣ Then ngOnInit() runs
3️⃣ After that, Angular inserts the parent’s content into <ng-content>

So when ngOnInit() runs →
👉 the parent content is NOT inserted yet
👉 so you cannot access it

-----------------------------------------------



first
Content projection means:
Parent sends HTML/content Child component displays it using <ng-content>

second
if we want to handle whatever  content we are projected   here   in tempolate file we ahve to make sure content is properly intialized then we have to to acces that context usinfg ngAfterContextIni()
it is accesible in sdie ngAfterContentInit()

to callsomething once aftet all of the content as been intialized

Definition
#)ngAfterContentInit will run once after the first ngDoCheck().
When the child component receives content from its parent, Angular calls ngAfterContentInit().

Differnce between ngAfterContentInit()  and ngAfterContentChecked

-----------------------------------------------------------------
#)Why do we use ngAfterContentInit()?

Because before this hook runs:
❌ The content from parent is NOT yet available inside the child.
After this hook:
✔ The content is available
✔ You can access it using @ContentChild

------------------------------------------------------------

2)ngAfterContentChecked()
Runs again and again whenever Angular checks the projected content (ng-content) inside the child.

This means:

✔ Runs AFTER ngAfterContentInit()
✔ Runs on every change detection cycle
✔ Runs whenever the parent changes the projected content
✔ Runs many times (not once)
-------------------------------------------------------
2)ngAfterContentChecked()
"ngAfterContentChecked() is called every time Angular checks the projected content (content passed inside <ng-content>).
1)AfterContentChecked is the life cycle hook that  angular calls during every chaneg detection cycle after angular
complete the checking of the content fit changes 

2)THis hook fires after ngDoCheck & AfterContentInit.



------------------------------------------------------------------------------------
#)This is relate to view
view refer to template of the component.


---------------------------------------------------------


ngAfterViewInit
it will fire only one simielar to ngContentInti
called only one time during first changing state
"ngAfterViewInit() runs after Angular initializes the component’s view and child views.



ngAfterViewInit() is an Angular lifecycle hook that runs once, right after:

✅ The component’s view is fully initialized
✅ The template is rendered for the first time
✅ All @ViewChild and @ViewChildren references are available


--------------------------------------------------------------


Why do we need ngAfterViewInit()?

Before Angular renders the view, you cannot access:

DOM elements

Template references (#ref)

Child components

ViewChild variables

These become available only after the view loads,

--------------------------------------------------------------


ngAfterViewChecked
similar tong


Common Mistake Developers Make

❌ Trying to use ViewChild inside ngOnInit()

ngOnInit() {
  console.log(this.myDiv); // undefined !!
}


✔ Angular has NOT created view yet
✔ Must use ngAfterViewInit()

--------------------------------------------
"ngAfterViewInit() is a lifecycle hook that executes once after Angular fully initializes the component’s view. At this point, the DOM, template, and all @ViewChild or @ViewChildren elements are available.
I use it when I need to access or manipulate the DOM, focus an input, initialize a chart, or call methods of child components. It cannot be used in ngOnInit because the view is not yet ready."
-------------------------------------------------------------------------