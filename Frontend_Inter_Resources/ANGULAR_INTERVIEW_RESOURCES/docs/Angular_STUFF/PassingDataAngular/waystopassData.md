if their is  parent child relationship.
1)Input (Using property binding)
2)outputevent baded emiiter)



===================================================
input and output using  property binding passing data

Child Component
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ name }}</p>`
})
export class ChildComponent {
  @Input() name!: string;
}



Parent HTML
<app-child [name]="'Adarsh'"></app-child>
===============================================
#)Output
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendData()">Send</button>`
})
export class ChildComponent {

  @Output() notify = new EventEmitter<string>();

  sendData() {
    this.notify.emit('Hello Parent');
  }
}

Parent
<app-child (notify)="receiveData($event)"></app-child>
Parent TS
receiveData(data: string) {
  console.log(data);
}
==================================================
3)Subject and behaveiour subject
4)Router Communication
Use when:
✔ Navigate between pages
✔ Pass small data
5)@ViewChild
It gives reference of child component / DOM element inside parent
6)Content Projection (ng-content)
It allows you to pass HTML from parent → child component
✅ Use when:
✔ Reusable UI components
✔ Dynamic content inside component
7)signals 
