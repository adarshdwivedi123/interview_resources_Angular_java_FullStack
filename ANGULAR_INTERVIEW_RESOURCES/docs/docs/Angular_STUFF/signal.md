A signal is like a special variable that automatically updates the UI when the value changes.


1)Signals are a new Angular feature used for reactive data.
2)They store a value, and whenever this value changes, Angular updates the UI automatically.
3)They don’t need subscriptions, they improve performance, and they make code simple.
4)We can use signal(), computed(), and effect() to manage UI data in a very clean way.”



#)Why Angular Introduced Signals?
Interviewers ask this!
Simple answer:
Signals make Angular:
Faster
Simpler
No need for change detection everywhere
Less code
No manual unsubscribe
Better performance

----------------------------------------------------
2️⃣ How do you create a signal?
name = signal('Adarsh');

3️⃣ How do you read a signal?
name();

4️⃣ How do you change a signal value?
name.set('Dwivedi');


-----------------------------------------
How to read update 


Mutate arrays/objects
items.update(list => [...list, 'new item']);



----------------------
computed() — most important

Used to create a value from other signals.

Example:

first = signal('Adarsh');
last = signal('Dwivedi');

fullName = computed(() => first() + ' ' + last());


If first or last changes → fullName auto updates.

---------------
. effect() — runs code automatically

Runs code when any signal it uses changes.

name = signal('Adarsh');

effect(() => {
  console.log("Value changed:", name());
});


---------------------------------------
Using signals with Forms

Convert form control to signals:

firstName = toSignal(form.controls.firstName.valueChanges, { initialValue: '' });


Then use:

fullName = computed(() => firstName() + ' ' + lastName());


--------------------------------------------------
When to use Signals vs RxJS
Use Signals for:

UI state

Form values

Component data

Simple logic

Use RxJS for:

Streams (click, scroll, websocket)

API calls

Debounce, merge, switchMap

------------------------------------------------------
Signals in Templates
<p>{{ username() }}</p>

You don’t need async pipe.

-----------------------------------------------
Signals in Components (real use)
Parent → Child
@Input() username!: Signal<string>;

Service (global state)
@Injectable({ providedIn: 'root' })
class UserStore {
  username = signal('');
}

-----------------------------------
Convert observable to signal
name = toSignal(api.getName(), { initialValue: '' });


--------------------------------------------------------------------------------
10. Common Interview Questions (Simple Answers)
Q1. What is a signal?

A reactive value that updates the UI automatically.

Q2. What is a computed signal?

A signal built from other signals.

Q3. What is effect?

A function that runs automatically when signals change.

Q4. How are signals different from observables?

Signals are simple, UI-based, no subscription needed.
Observables are powerful for streams but more complex.

Q5. Does Angular still support RxJS?

Yes, both signals and RxJS work together.

Q6. Do signals need unsubscribe?

No, Angular handles it automatically.

Q7. How do you share signals between components?

Using a service OR @Input.

Q8. Does a computed signal allow writing?

No, computed is read-only.

Q9. What happens if you update signals inside computed?

Not allowed — computed must be pure.

Q10. Can effects run in loops?

They run by themselves whenever signals change


------------------------------------------------------------

1. HOW TO READ A SIGNAL
👉 Use parentheses ()
name = signal('Adarsh');

console.log(name());   // reading the value

Simple meaning:

Reading means getting the value inside the signal.
------------------------------------------------------------------
🔵 2. HOW TO SET A SIGNAL VALUE
👉 Use .set(newValue)
name.set('Dwivedi');

Simple meaning:

set() replaces the old value.
Old value is removed → New value comes.

Example:

Before: "Adarsh"

set("Ajju")

After: "Ajju"

-------------------------------------------------
🔵 3. HOW TO UPDATE A SIGNAL VALUE
👉 Use .update(oldValue => newValue)
count.update(c => c + 1);

Simple meaning:

update() changes the value based on the old value.

Example:

Old: 3

update(c => c + 1)

New: 4

----------------------------------------------------
Example 1: Read
console.log(name());  


Means: “Give me the value.”
------------------------------------------------------------------
✔ Example 2: Set
name.set('Adarsh');


Means: “Put this new value.”
--------------------------------------------------------------------
✔ Example 3: Update
count.update(c => c + 1);


Means: “Take old value and modify it.”



--------------------------------------------------------------------------
#)What are signals in Angular and how do they differ from RxJS observables?
signal are synrchonus in angular
Perfect for component state
Simple value tracking
No unsubscribe needed



rxjs are asychronous 
API calls (HttpClient returns Observable)
WebSocket data stream
Real-time values
RxJS operators like mergeMap, switchMap