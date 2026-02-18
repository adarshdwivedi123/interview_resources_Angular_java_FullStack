
#)RxJS (Reactive Extensions for JavaScript) is a library used in Angular to work with async data streams such as:

API calls
User events (click, scroll, type)
Timers
WebSockets
Real-time data

----------------------------------------------------
#)Why Angular uses RxJS everywhere?

Because Angular itself is reactive:

HttpClient returns Observable

FormControl.valueChanges returns Observable

Router events → Observable

@Output EventEmitter uses RxJS

WebSocket → Observable

Infinite scroll / live search → RxJS

----------------------------------------------------------------
#)Operators (VERY IMPORTANT)

Operators modify, filter, transform, combine, or control data.

⚡ Types of Operators:

Creation operators: of, from, interval, timer

Transformation: map, switchMap, concatMap, mergeMap

Filtering: filter, debounceTime, distinctUntilChanged

Combination: forkJoin, combineLatest, zip

Utility: tap, delay, retry, catchError

Operators work like water filters → data goes in, gets transformed, and comes out.

--------------------------------------------------------------------------------
 Operators

What is pipe() used for?

👉 Combine multiple operators
👉 Example:

obs.pipe(
  map(),
  filter(),
  switchMap()
)
---------------------------------------------------------------------

 #)of() is a creation operator in RxJS that creates an Observable from the values you pass.

 To convert normal values → Observable
Angular ecosystem heavily uses Observables.
If you have normal data, of() makes it compatible with RxJS pipelines.

------------------------------------------------------------------
tap() — side effects
tap(v => console.log("value: ", v))


Use case:
✔ Debug logs
✔ Trigger analytics
✔ Trigger toast

Interview:

“tap is for debugging, does NOT change the data.”
--------------------------------------------------


#What is from() in RxJS?
from array and promise convert into obserbale 

👉 Converts array, promise, string into a stream
👉 Emits each item separately

--------------------------------------------------
✔ To create mock API data

 1. map
 if we have strema of data then we can use pip and map rxjs operator but we arenot
 able to use  map.
Transform data.
map(value => value * 2)

2. filter

Filter values.
filter(value => value % 2 === 0)

3. switchMap
(swiath map we use for serrch vle me)
“Pehla request complete hua ya nahi… koi farq nahi.
Naya request aate hi purana request CANCEL ho jata hai.”

When a new value comes in → cancel the previous inner observable
Cancels previous request and starts new one. 
Used in: Search box, live typing, auto-suggest
New search request cancels old ones.


-------------------------------------------------
What happens here?
User types "A" → API call
Then types "Ab" → previous API cancels
Then types "Abc" → again cancel previous

------------------------------------------------------------------

#)mergeMap
if we want to call multipl api paralley thne jo api call complete hota jaye ga usak ka result dil
dikhte ja reh hai...rather than pura pi compplete hi jaye tb  final result kre ye fork joion
me htoa hai
if we want to multiple api call paralley  without waiting for previous ones to finish.
then we have to use mergeMap
best for independent or parallel API calls.

✔ Notifications
✔ Chat messages
✔ Parallel API calls



----------------------------------------------------------------
concatMap() — strict order execution
suppose we have two api once first api call is done then second is calling 
What it does
this.apiService.getUser().pipe(
  concatMap((user: any) => {
    return this.apiService.getUserPosts(user.id);  // 2nd API depends on 1st API
  })
)
.subscribe(result => {
  console.log("User's Posts:", result);
});


Runs API calls one by one
Maintains order
Next observable waits for previous to finish


Like people in a line at a counter.
Next person waits until previous finishes.


------------------------------------------------------------------------
exhaustMap() — (exhaust )
exhaustMap executes only the first call and ignores all other calls until the current one completes.
Why is exhaustMap used? (Real Developer Reason)
✔ Prevent double API calls
✔ Prevent double click on Login / Submit
✔ Protect server from extra requests
✔ Ensure only 1 active request at a time
✔ Ignore rapid repeated triggers


---------------------------------------------------------------
LOGIN BUTTON
Problem:

User clicks "Login" button 5 times quickly → 5 API calls 😱

Solution:

Use exhaustMap to allow only the first execution until it completes.

fromEvent(this.loginBtn.nativeElement, 'click').pipe(
  exhaustMap(() => this.api.login())
)
.subscribe(result => console.log("Logged In:", result));
----------------------------------------------------------------



ignore new requests until current completes
What it does

Accepts first request

Ignores rest until completed

-----------------------------------------------------------------------


distinctUntilChanged() — prevent duplicate emissions
search$.pipe(
  distinctUntilChanged()
)

Use Case:
abc abc
for exmaple adrsh given inpur api call
again input adarsh then api claled nhi hoga

✔ Do not hit API repeatedly with same input
✔ Dropdown selection change detection

-----------------------------------------------------------------------------------

combineLatest() — latest values of all streams
“Give me the latest value from A and the latest value from B, whenever either changes.”
Example:
combineLatest([
  form.name.valueChanges,
  form.email.valueChanges
])


combineLatest() do ya zyada Observables ka latest value lekar ek combined output deta hai.

👉 Jab bhi kisi Observable ka naya value aata hai → combined result emit hota hai.

BUT
Ye tab tak kuch emit nahi karta jab tak saare Observables ne at least ek value emit na kar di ho.


Use case:
✔ Disable submit until ALL fields valid

---------------------------------------------------------------------


forkJoin() — all observables complete, then emit
forkJoin({
  user: this.api.getUser(),
  orders: this.api.getOrders()
})


Use case:
✔ Load initial page data
✔ Multiple parallel API calls

Interview:

“forkJoin is like Promise.all. Emits once when all complete.”

------------------------------------------------------------------------
retry() — retry on failure
this.api.get().pipe(
  retry(3)
)


Use Case:
✔ Network retry
✔ Intermittent backend failure


----------------------------------------------------------------------
. What is subscribe() used for?

👉 To start listening to observable
👉 Without subscribe → nothing happens


-----------------------------------------------------------

Operator	Behavior	Use case
switchMap	cancels previous	search
mergeMap	runs parallel	chat, notifications
concatMap	sequential	payment, queue
exhaustMap	ignore new till complete	login button


-------------------------------------------
. What is debounceTime() used for?

👉 Wait for user to stop typing
👉 Prevent API spam


--------------------
What is error handling in RxJS?

Operators:
✔ catchError
✔ retry
✔ retryWhen
-----------------------------------------------
How do you avoid memory leaks with RxJS?

✔ use async pipe
✔ use takeUntil
✔ use shareReplay
✔ unsubscribe manually
--------------
mergeMap → Many outputs

Runs one API call for each value

All API calls run in parallel

You get multiple results, one-by-one

👉 Used when you have many items and want to call API for each.
Example: For every user ID, call API.

✔ forkJoin → One final output

Runs multiple APIs together
Waits for all APIs to finish
Gives ONE final combined result

👉 Used when loading page data (user + orders + settings together).


---------------------------------------------------------------------
mergeMap

Input:

[1, 2, 3]


Calls API 3 times → gives 3 outputs:

result1
result2
result3
-----------------------------------------------------------

🔹 forkJoin

Calls 3 APIs → outputs one final result:

{ api1: ..., api2: ..., api3: ... }


