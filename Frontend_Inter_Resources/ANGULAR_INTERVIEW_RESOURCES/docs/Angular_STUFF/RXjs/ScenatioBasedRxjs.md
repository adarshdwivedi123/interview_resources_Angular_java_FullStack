#)SwitchMap:
SwitchMap: Always Switch to  Obserbale cancel previous inner onservable.
Naya request aate hi purana request CANCEL ho jata hai.”
or
When a new value comes in → cancel the previous inner observable
1. Search API:
The user is typing in a search box. Every keystroke changes the input.
ngOnInit() {
  this.searchCtrl.valueChanges.pipe(
    debounceTime(400),          // wait 400ms
    distinctUntilChanged(),     // skip same value
    switchMap(val =>
      this.http.get(`/api/search?q=${val}`)
    )
  ).subscribe(results => {
    this.results = results;
  });
}
Example:

A
An
Ang
Angu
Angular

If we call the API for every character:

A  -> API
An -> API
Ang -> API
Angu -> API
Angular -> API

That's 5 API calls, which wastes bandwidth and server resources.
It emits a value only if it is different from the previous value.
or 
 if value is same as previous —
 prevents unnecessary API calls"

Solution
search.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(value => this.http.get(`/search?q=${value}`))
)
Why debounceTime()?

It waits until the user stops typing.

Example:
A
An
Ang
(wait 300ms)

Only one API call
Why distinctUntilChanged()?

Suppose the user searches:

Angular
Angular
Angular

Without it:

API
API
API

With it:

Only one API call
Why switchMap()?
Imagine:
Search Angular
↓
API takes 5 sec
Before it finishes, the user searches:
Angular 17
Now there are two requests.
Without switchMap:
Request 1 finishes later
Old result displayed
Wrong data
With switchMap:
Old request cancelled
Only latest request executes
This is exactly why search boxes use switchMap.

-------------------------------------------------------------------------------
exhaustMap
#)"If one API call is in progress, ignore all new requests until it finishes."
private submit$ = new Subject<void>();

ngOnInit() {
  this.submit$.pipe(
    exhaustMap(() => this.auth.login(this.form.value))
  ).subscribe({
    next:  () => this.router.navigate(['/dashboard']),
    error: () => this.error = 'Login failed'
  });
}

Exmaple Login Button
Scenario
User clicks Login five times.
Click
Click
Click
Click
Click

Without RxJS:
5 Login APIs
Server gets:
POST /login
POST /login
POST /login
POST /login
POST /login

Very bad.
Solution
click$.pipe(
  exhaustMap(() => login())
)
Why exhaustMap()?

It says:

First request starts
↓
Ignore every click
↓
First request finishes
↓
Accept next click
Timeline
Click ✔
Click ❌
Click ❌
Click ❌
Completed
Click ✔
Perfect for:

Login
Payment
OTP Verification
------------------------------------------------------------------------------------------------
#)Concat Map
3. Save Form
Scenario
  status = '';
  files  = ['file1.pdf', 'file2.pdf', 'file3.pdf'];
  constructor(private http: HttpClient) {}
  uploadAll() {
    from(this.files).pipe(
      concatMap(file =>              // one by one
        this.http.post('/api/upload', { file })
      )

    ).subscribe({
      next:     res  => this.status = `Uploaded!`,
      error:    err  => this.status = `Failed!`,
      complete: ()   => this.status = `All done!`
    });
  }
}

// file1 uploads first
// file2 waits → then uploads
// file3 waits → then uploads
// ORDER maintained ✅


One Line to Say
"concatMap waits for each request
 to finish before starting the next —
 order is always maintained"



You have three APIs.
Save User
↓
Save Address
↓
Save Documents
Address cannot be saved before User.

Wrong approach
mergeMap()

Execution

User
Address
Documents
All start together.
Sometimes Address finishes first.

Wrong order.

Correct
concatMap()

Execution
User ✔
↓
Address ✔
↓
Documents ✔
Each waits for the previous one.
Why concatMap()?
Maintains order.

Used for:

Checkout
Registration
Multi-step Forms
----------------------------------------------------------
4. Dashboard APIs ForkJOIN()
ngOnInit() {
  forkJoin({
    profile:      this.api.profile(),
    reports:      this.api.reports(),
    notification: this.api.notifications(),
    settings:     this.api.settings()

  }).subscribe(({ profile, reports, notification, settings }) => {
    this.profile      = profile;
    this.reports      = reports;
    this.notification = notification;
    this.settings     = settings;
  });
}


Scenario
Dashboard needs
Profile
Orders
Notifications
Settings
All are independent.

Wrong
Profile
↓
Orders
↓
Notifications
↓
Settings
Takes
1 sec
+
1 sec
+
1 sec
+
1 sec
=
4 sec
Correct
forkJoin()

Execution
Profile
Orders
Notifications
Settings

↓

Run together
Time
1 sec only
Why forkJoin()?
Runs all APIs simultaneously.
Returns data after every API completes.
---------------------------------------------------------------------------
5. One API Fails

ngOnInit() {
  forkJoin({

    profile: this.api.profile().pipe(
      catchError(() => of(null))   // object → null
    ),

    reports: this.api.reports().pipe(
      catchError(() => of([]))     // array → []
    ),

    notification: this.api.notifications().pipe(
      catchError(() => of([]))     // array → []
    )

  }).subscribe(({ profile, reports, notification }) => {
    this.profile      = profile;
    this.reports      = reports;
    this.notification = notification;
  });
}

Suppose
Profile ✔
Orders ✔
Settings ❌
Without error handling

forkJoin()

↓

Entire observable fails
No data shown.
Solution
catchError(() => of(null))
Now
Profile ✔
Orders ✔
Settings null
Dashboard still works.
Why?
One API should not break the entire page.

6. Auto Refresh Dashboard

Scenario
Dashboard should refresh every
30 seconds
Example
Stock Market
CPU Usage
Live Monitoring
Solution
timer(0,30000).pipe(
switchMap(()=>getDashboard())
)

Why timer()?
Immediately call API
↓
30 sec
↓
30 sec
↓
30 sec
Keeps refreshing automatically.
---------------------------------------------------------

7. Duplicate Search


export class DashboardComponent implements OnInit, OnDestroy {

  ngOnInit() {
    interval(30000).pipe(
      startWith(0),
      switchMap(() => this.fetchData()),  // clean separation
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.data      = data;
      this.isLoading = false;
    });
  }

  // ── fetch only if url exists ────────────
  private fetchData() {

    // no url → skip API call
    if (!this.apiUrl) {
      console.warn('No endpoint provided');
      return of(null);
    }

    // url exists → call API
    return this.http.get(this.apiUrl).pipe(
      catchError(() => of(null))
    );
  }

}
User types
Angular
Angular
Angular
Should API be called?
No.
Solution
distinctUntilChanged()

Without it
API
API
API
With it
API
Only once.
--------------------------------------------------

8. User Stops Typing

Suppose user types

A
An
Ang
Angular
Every letter generates an event.
Without debounce
4 API calls
With
debounceTime(300)
Wait
300 ms
↓
One API call
Improves performance.
--------------------------------------------------------------------
9. User + Permission
combineLatest = whenever ANY one emits
                combine ALL latest values
                and emit together

  we have three  observable if any one emot then combine all latest  vlaue and emdit together              
ngOnInit() {
  const name$   = of('Adarsh');
  const age$    = of(25);
  const city$   = of('Chennai');

  combineLatest([name$, age$, city$])
    .subscribe(([name, age, city]) => {
      console.log(name, age, city);
      // Adarsh 25 Chennai
    });
}
#2)ngOnInit() {
  combineLatest([
    this.country.valueChanges.pipe(startWith('all')),
    this.state.valueChanges.pipe(startWith('all'))

  ]).subscribe(([country, state]) => {
    this.filtered = this.users.filter(user =>
      (country === 'all' || user.country === country) &&
      (state   === 'all' || user.state   === state)
    );
  });
}
-----------------------------------------------
"I have two dropdowns —
 country and state.

 When user selects country
 combineLatest fires with
 latest country AND state values.

 Same when state changes.
 --------------------------------------


Dashboard requires
User
AND
Permission
Need both.
Solution
combineLatest()
Output
User
Permission
↓
Display Page
If Permission changes
New Output
If User changes
New Output
Why?
Always gives latest values.
----------------------------------------------------------------------------------
MargeMap:RUn the all the api paralley order is not maintain
10. Upload Files

ngOnInit() {
    const ids = [1, 2, 3];

    from(ids).pipe(
      mergeMap(id =>
        this.http.get(`/api/user/${id}`)
      )
    ).subscribe((user: any) => {
      this.users.push(user);
    });
  }
}

User uploads

file1
file2
file3
Every upload should happen.
Solution
mergeMap()
Execution
Upload1
Upload2
Upload3
All together.
Why?
No cancellation.
No waiting.
Every request is important.
-------------------------------------------------------------------------------
11. Memory Leak

Suppose component destroyed.
Subscription still running.
API
↓
Observable
↓
Destroyed Component
Still listening.
Memory leak.
Solution
takeUntilDestroyed()
When component destroyed
Subscription ends automatically
-----------------------------------------------------------------------------------------
12. Retry API

API call fails
→ retry automatically
→ try again N times
→ if still fails → throw error
----------------------------------
this.http.get('/api/users').pipe(
  retry(3)   // retry 3 times if fails
).subscribe({
  next:  data => this.users = data,
  error: err  => console.log('Failed after 3 retries')
});

Network fails.
Try 1 ❌
Try 2 ❌
Try 3 ✔
Without retry
Show Error
With
retry(3)

Automatically retries.
Very useful for unstable internet.
-----------------------------------------------------------------------------------------------

13. Cache API

shareReplay =>Prevent duplicate APO calls

// multiple components subscribe to same API
// without shareReplay → API called multiple times ❌
// with shareReplay    → API called once → shared ✅

private users$ = this.http.get('/api/users').pipe(
  shareReplay(1)   // ← call once → share with all
);

getUsers() {
  return this.users$;
}

// Component A subscribes → API called
// Component B subscribes → gets cached result ✅
// API called only ONCE ✅

Navbar
Sidebar
Dashboard
All need
User API
Without cache
API
API
API
Three requests.
Solution
shareReplay(1)
Execution
API
↓
Cache
↓
Navbar
Sidebar
Dashboard
Only one API call.
----------------------------------------------------------------------
14. Loader

Need

Show Loader

↓

Call API

↓

Hide Loader

If success

Hide Loader.

If error

Hide Loader.

Solution

finalize()

Because

Success ✔

↓

Runs

Error ❌

↓

Also Runs

Perfect place to stop loading indicators.
--------------------------------------------------------------------------------------
15. Logged-in User

Login component
User logs in
Navbar
Sidebar
Dashboard
Need latest user.
Solution
BehaviorSubject
Flow
Login
↓
BehaviorSubject
↓
Navbar
↓
Sidebar
↓
Dashboard
Whenever
next(user)

All components receive the updated value instantly.
------------------------------------------------------

-----------------------------------------------------------


Search input same value    →    distinctUntilChanged
Button double click        →    exhaustMap
Simple form submit         →    isLoading flag
Same API many components   →    shareReplay(1)
Old request not needed     →    switchMap
Same data avoid re-fetch   →    Cache Map


-------------------------------------
This Way ti beed ti write

Def
Exmaple
Prokject me how we use RealLife