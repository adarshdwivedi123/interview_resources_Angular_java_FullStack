Types of Subjects:

Subject
BehaviorSubject (stores last value)
 AsyncSubject (emits last value on complete)
==============================================================================
BehaviorSubject are Multicast.Both Subject and BehaviorSubject are Multicast.
NOTE:All subscribers get the same value.

mnulticast
const subject = new Subject<number>();
subject.subscribe(val => console.log('A:', val));
subject.subscribe(val => console.log('B:', val));

subject.next(Math.random());
// A: 0.123
// B: 0.123 — same value, shared!


Unicast   
Each subscriber gets its own execution.
const obs$ = new Observable(observer => {
  observer.next(Math.random()); // runs separately for each subscriber
});

obs$.subscribe(val => console.log('A:', val)); // A: 0.123
obs$.subscribe(val => console.log('B:', val)); // B: 0.456 — different value!

------------------------------------------------------------------------------
#)ReplaySubject
(REplay tb kre ga jb past value store ka)
ReplaySubject is an RxJS Subject that stores past values and replays them to new subscribers.

It basically acts like a video replay → when someone joins late, they still get the past important events.

--------------------
1)ReplaySubject keeps a memory of past emitted values.
2)WE CAN control how many values to remember using a buffer size.
const sub = new ReplaySubject(2); 



----------------------------------------------------------

2. AsyncSubject
Definition (Simple)

AsyncSubject sends only the last emitted value, and only after complete() is called.


import { AsyncSubject } from 'rxjs';

const as = new AsyncSubject();

as.next(10);
as.next(20);
as.next(30);

as.subscribe(val => console.log("Subscriber A:", val));

as.complete();
Output
Subscriber A: 30