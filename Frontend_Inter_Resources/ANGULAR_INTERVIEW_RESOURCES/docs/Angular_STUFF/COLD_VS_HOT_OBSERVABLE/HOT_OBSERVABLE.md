Hot Observable 🔥 (already running)

👉 Definition:
A Hot Observable produces values regardless of subscription.
#)All subscribers share the same execution
#)hot is multicast.”
Example:
Mouse events (fromEvent)
WebSocket
Subject / BehaviorSubject
====================================================

All subscribers share the same data stream

💻 Example (Subject)
import { Subject } from 'rxjs';

const subject = new Subject();

subject.subscribe(data => console.log('A:', data));
subject.subscribe(data => console.log('B:', data));

subject.next(1);

👉 Result:

Both A & B receive same value

========================================================
“By default, Observables in RxJS are unicast, meaning each subscription creates a new execution. However, they can be made multicast using Subjects or operators like shareReplay.”

===================================================================
Observable is unicast 
Unicast Observable: Each subscriber gets its own execution and data stream. Angular HttpClient Observables are unicast by default.


Multicast Observable: Multiple subscribers share the same execution and data stream. This can be achieved using operators like share() or shareReplay(). This helps avoid duplicate API calls and improves performance.

