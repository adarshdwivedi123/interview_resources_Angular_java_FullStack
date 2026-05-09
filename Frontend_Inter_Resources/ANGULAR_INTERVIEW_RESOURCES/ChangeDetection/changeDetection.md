#)HOw change detection work?

In Angular, Change Detection is the process Angular uses to check whether data in your component has changed and update the UI automatically.

name = 'Adarsh';
<h1>{{ name }}</h1>
this.name = 'Ajju';

Angular automatically updates UI:
<h1>Ajju</h1>
👉 This automatic checking/updating is called Change Detection.
----------------------------------------------------
How Angular Change Detection Works Internally

Angular uses:

1. Zone.js

click events
setTimeout
API calls
promises
input typing


-----------------------------------------
Change Detection Cycle

Whenever an event happens:

Event Triggered
      ↓
Zone.js detects it
      ↓
Angular runs change detection
      ↓
Checks all bindings
      ↓
Updates DOM where values changed



#)Default Change Detection Strategy
By default Angular uses:
ChangeDetectionStrategy.Default

Meaning:

👉 Angular checks the entire component tree frequently.

Even small changes trigger checks.


-------------------------------------------------
Real Production Example

Suppose you have:
Dashboard
1000 table rows
Charts
API polling

If Angular checks everything every time:

❌ Performance becomes slow.


-------------------------------------------
Most Important Interview Question
Why UI sometimes not updating in OnPush?

Because Angular checks reference, not deep object mutation.

  changeDetection: ChangeDetectionStrategy.OnPush
--------------------------------------------------------

  <div>
  {{ user$ | async | json }}
</div>

Even with OnPush:

✅ UI updates automatically

Because async pipe internally calls:

markForCheck()

-----------------------------------------------
Manual Trigger Example
constructor(private cd: ChangeDetectorRef) {}

updateData() {
   this.user.name = 'Ajju';

   this.cd.detectChanges();
}



