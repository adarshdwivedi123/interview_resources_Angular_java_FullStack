Types of Subjects:

Subject
BehaviorSubject (stores last value)
ReplaySubject (stores history)
AsyncSubject (emits last value on complete)


------------------------------------------------------------------------------
#)ReplaySubject
ReplaySubject is an RxJS Subject that stores past values and replays them to new subscribers.

It basically acts like a video replay → when someone joins late, they still get the past important events.

--------------------
1)ReplaySubject keeps a memory of past emitted values.
2)You control how many values to remember using a buffer size.
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