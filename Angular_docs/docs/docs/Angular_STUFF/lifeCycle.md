23. **What is the difference between `ngOnChanges()` and `ngDoCheck()`?**
— `ngOnChanges()` is called when an input property changes.
— `ngDoCheck()` is called during every change detection run, even if there are no changes.



#)ngDoCheck()
Runs on every change detection cycle.
Use only when you need custom change detection (rare).
✔ Used to detect changes Angular may not automatically detect.




#)THis is related to content
content refer to  the external content injected into this component
using content projection.
it is way to pass the html form parent to child component. child compont dispalay 
use <ng-conten></ng-content>

----------------------------------------------------


When does it run?

✔ Runs once after the component receives content from its parent
✔ Used only when you use content projection (<ng-content>)
✔ Happens before ngAfterViewInit
--------------------------------------------

1)ngAfterContentInit()


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