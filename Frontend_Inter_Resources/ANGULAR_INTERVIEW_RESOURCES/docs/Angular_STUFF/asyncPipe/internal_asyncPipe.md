async Pipe — Angular Terms Explained

Step by Step Flow

Step 1 — Component Loads
typescript@Component({
  template: `<p>{{ data$ | async }}</p>`
})
export class MyComponent {
  data$ = this.http.get('/api/users'); // Observable
}

When component loads, Angular sees async pipe in template


Step 2 — transform() gets called
typescript// Angular calls this automatically
transform(observable$) {
  // first time → subscribe
  this._subscription = observable$.subscribe()
}

Angular calls transform() every time CD runs
First time it sees the Observable → it subscribes


Step 3 — Data Emits
typescriptobservable$.subscribe(value => {
  this._latestValue = value;  // stores new value
  this._ref.markForCheck();   // tells Angular "hey! update the view"
})

When Observable emits data:

Stores the latest value
Calls markForCheck() to trigger Change Detection



Step 4 — Change Detection Runs
markForCheck() called
        ↓
Angular CD runs
        ↓
transform() called again
        ↓
returns _latestValue
        ↓
Template updates ✅

Step 5 — Component Destroys
typescriptngOnDestroy() {
  this._subscription.unsubscribe(); // auto cleanup
}

When component is destroyed
async pipe calls unsubscribe() automatically
No memory leak ✅


Full Picture
Component Init
      ↓
transform() called → subscribe()
      ↓
Observable emits value
      ↓
_latestValue = newValue
      ↓
markForCheck() → CD runs
      ↓
transform() returns _latestValue
      ↓
View updates
      ↓
Component destroyed
      ↓
unsubscribe() → cleanup