what is role and responsibilty?

LifeCycle hook
closure
Es6 new featr
Optimization in angular



Reactive form
On submit in db
Clear the form onclick
--------------------------------------------------------------------
ReactiveFormModule in  moduel

<form [formGroup]="loginForm">
  <label>First Name</label>
  <input type="text" formControlName="firstName" />

  <label>Last Name</label>
  <input type="text" formControlName="lastName" />

  <label>Address</label>
  <input type="text" formControlName="address" />

  <button (click)="onSubmit()">Login</button>
</form>
-------------------------------------------------------
TS

 loginForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.intializeForm();
  }

  intializeForm() {
    this.loginForm = this.fb.group({
      firstName: ['', Validators.required],   //maine glat kiya tha ['' ,Validators.required];
      lastName: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let firstName = this.loginForm.get('firstName');
      let lastName = this.loginForm.get('lastName');
      let address = this.loginForm.get('address');
    }
  }