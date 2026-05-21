#)“Reactive Forms in Angular use FormControl, FormGroup, and FormArray to build forms entirely in TypeScript.
#)Reactive we use when we want to complex form with dynnamics filed.

#)They are scalable, testable, and perfect for complex enterprise forms with dynamic fields, 
 


 --------------------------------------------------------
 1. FormControl
➤ Represents a single input 
name = new FormControl('Adarsh');
This creates one input control with value "Adarsh".
<input [formControl]="name">

----------------------------------------------------
2.FormGroup
A collection of multiple FormControls is called formGroup
Used for forms with multiple fields.

#)TS
loginForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
});

#)HTML
loginForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
});

3)FormArray
➤ A dynamic list of FormControls or FormGroups
Used when number of fields is NOT fixed.
used when the number of form fields can grow or shrink.



---------------------------------------------------------------------

Q1. What are valueChanges & statusChanges?

valueChanges → emits whenever value changes.
Used for dynamic validation, auto-save, filtering, search box.

this.form.valueChanges.subscribe(val => console.log(val));

statusChanges → emits when status changes: VALID, INVALID, PENDING.
this.form.statusChanges.subscribe(status => console.log(status));



#)What is updateOn: ‘blur’ | ‘change’ | ‘submit’?

Controls when validations should run:

email = new FormControl('', {
  validators: [Validators.email],
  updateOn: 'blur'
});


'change' → validation on every key press


  age: 25,
  city: 'Bangalore'
});
➡ Works perfectly because all controls are matched.

❌ Wrong usage (missing "city")
form.setValue({
  name: 'Adarsh',
  age: 25
});



#)PatchValue
(p for partial updates)
form = new FormGroup({
  name: new FormControl(''),
  age: new FormControl(''),
  city: new FormControl('')
});
✔ Partial update (only updating city)
form.patchValue({
  city: 'Delhi'
});


s for sab updaate kr doe
setValue :if we want to update  the entire form then we have to use setValue  .
If any field is missing, Angular throws an error.
structure is missmatch then give issues.
patchValue:if we want to update  only one few fileds or patrial updates


“setValue() updates the entire form and requires every form control to be provided. If any field is missing, Angular throws an error.
patchValue() allows partial updates and only touches the fields you provide, ignoring missing ones.
In real projects, I use setValue() to load complete API data and patchValue() to update specific fields like city or phone.



--------------------=======================================================
In Angular, when we create forms using Reactive Forms, code becomes long and repetitive.

❌ Without FormBuilder
this.loginForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl('')
});

👉 Problem:

Too much typing
Hard to manage in large forms
Not clean


===========================================================================================
Q6. What is FormBuilder and why we use it?
1)with the help  form builder we can write  the code in cleaner and in shorter way.

2)FormBuilder is a service provided by Angular’s Reactive Forms module that helps you create form controls, form groups, and form arrays easily with less boilerplate code.

3)Instead of manually creating FormControl, FormGroup, and FormArray, FormBuilder gives shortcut methods

Cleaner, shorter code.
Without FormBuilder:

new FormGroup({
  name: new FormControl('')
});

With FormBuilder:
this.fb.group({
  name: ['']
});

-----------------------------------------------------
2. What is FormBuilder? (Simple Meaning)

👉 FormBuilder = Shortcut tool to create forms easily

It helps you:
Create form faster
Write less code
Keep code clean


------------------------------------
. What is FormArray and why used?

(VERY common question)

Used for dynamic forms where number of fields is unknown.

---------------------------------------------------
. How do you handle conditional validation?
if (this.form.get('isMarried')?.value) {
  this.form.get('spouseName')?.addValidators(Validators.required);
} else {
  this.form.get('spouseName')?.clearValidators();
}

-------------------------------------------
9. How would you reset form and clear validation state?
this.form.reset();
this.form.markAsPristine();
this.form.markAsUntouched();


------------------------------------------------------------
Difference between reactive & template-driven forms



Explain valueChanges vs statusChanges

Custom validators (sync & async)

“Sync validators return an error object or null instantly.
Async validators return an Observable, usually used for server-side validation like checking if email already exists.”

#)How to create dynamic forms
we need to create formArray

--------------------------------------------------------------------------------
#)How to disable/enable controls dynamically
We can disable or enable controls dynamically using the disable() and enable() methods on FormControl, FormGroup, or FormArray.

setValue vs patchValue

How Angular handles form immutability

How validation works internally

updateOn: change, blur, submit

How to handle nested FormGroups

How to validate FormArray elements

Write code: password & confirm password validation

How to unsubscribe from valueChanges
Why do we need to unsubscribe? (Simple English)

Because:

valueChanges returns an Observable

If we don’t unsubscribe:
✔ It keeps running
✔ Causes memory leaks
✔ Multiple subscriptions get created
✔ Form becomes slow

How to create reusable custom validator functions

--------------------------------------------------------------------------------------------

1)“Template-driven forms are simple and driven by HTML using ngModel. Angular builds the form controls automatically, but they are harder to test and not suitable for dynamic/complex forms.
Use template-driven form when:

1)form is simple
2)login
  contact us
  feedback form
3)less validation is needed
 required
 email
 min length
4)form fields are fixed
5)no dynamic fields
6)quick development is needed
  less code
  easy to implement
---------------------------------------------------------------------------------------
🎯 When to use Reactive Form

Use reactive form when:

1)form is complex
 registration
 onboarding
 profile update
  multi-step form
2)dynamic fields are required
  fields show/hide based on user input
3)custom validation is needed
  password and confirm password match
  date validation
  age validation
4)better control is needed
form value
form status
error handling
5)unit testing is important
6)future changes are expected


Reactive forms are model-driven, created in TypeScript using FormControl, FormGroup, and FormArray. They are more scalable, testable, and ideal for complex forms with validations, dynamic fields, and API integration.”
I prefer reactive forms because they offer better control over form state, validation, dynamic form generation, custom validators, and unit testing.