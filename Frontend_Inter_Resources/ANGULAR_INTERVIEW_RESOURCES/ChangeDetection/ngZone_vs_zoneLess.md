 Angualr 21  featue  by default Zonlkess featue


#)“NgZone is angualr service  that usses zone.js allows Angular to automatically run change detection whenever an async task completes.
In simple words:
Whenever async work finishes, Angular automatically updates the UI
API call
setTimeout
click event
promise
interval




Problem it so lves
Without NgZone, Angular would not know when async task completed.
#)How will Angular know UI needs update?
👉 NgZone detects this async completion and runs change detection.

Disadvnteg
Angular starts checking many components
This can   performance issues in large apps.

#)HOw on push problem solve?
How OnPush solves this

With OnPush:

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})
unnecessary component checks
Angular checks component only when needed

now on push check only when their is input or state change unnessary it will not check the compoent
1) @Input() reference changes
@Input() user: any;
If parent sends new object reference → component updates.
2) event happens inside component
(click)="save()"
3) observable emits using async pipe
{{ user$ | async }}
4) manual trigger
this.cdr.markForCheck();
=-----------------------------------
#)Now if changeDetectio is already their why signla cam?
OnPush

Agar component me 10 bindings hain:

<h1>{{ name }}</h1>
<p>{{ count }}</p>
<p>{{ age }}</p>

Agar count change hua, Angular pura component bindings check karega.

in case of signal only count vli line update hogyi baki kuch touch nhi hoga variebale.


------------------------------------------------------
“Traditionally Angular uses NgZone and Zone.js to automatically run change detection whenever async tasks happen.

But Angular 17+ introduces zone-less mode, where Angular no longer depends on Zone.js.
Instead, it uses signals and explicit change detection for better performance, lower overhead, and simpler debugging.”


-------------------------------------------------------------------
#)zoneLess
“Zone-less Angular uses Signals instead of Zone.js for change detection, giving better performance and more predictable UI updates.”


#)What is Zone-less Angular? (Simple Start)

Zone-less Angular means:
👉 Angular runs without Zone.js
👉 Angular does NOT automatically detect async events anymore
👉 Angular updates UI through signals instead of zones

In other words:
Zone-less Angular replaces automatic, global change detection with a faster, predictable, lightweight system.


#)ZONE.js problem caused

This caused:
❌ Slow performance
❌ Too many change detection cycles
❌ High CPU usage on large apps
❌ Complex debugging
❌ Slower mobile performance
❌ Heavy overhead

Zone-less removes all these problems.


-----------------------------------------------
#)How Zone-less Angular works instead

Zone-less Angular uses:
✔ Signals

A reactive system that tells Angular exactly when data changes.
✔ Manual change detection triggers
No global watching of browser APIs.
✔ Component-level update control
Only the components that change get updated.
✔ New hydration + SSR system
Works perfectly without zones.
✔ Angular’s new reactivity model
More like React’s fine-grained updates.

For Example

#)With Zone.js (old)
setTimeout(() => {
  this.name = 'Adarsh';
});
Angular automatically runs change detection.

---------------------------------------------------------------------
#)Without Zone.js (zone-less)
You use signals:
name = signal('Adarsh');

setTimeout(() => {
  this.name.set('New Name');
});

update happens automatically — no zones required.


