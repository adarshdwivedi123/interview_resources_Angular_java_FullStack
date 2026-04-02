#)Abstract class in TypeScript kya hota hai?

Simple line:

Abstract class ek base class hoti hai jiska object directly nahi bana sakte, aur isko common logic share karne ke liye use karte hain.

Matlab:
common methods parent me
specific methods child m

------------------------------------------------------------------------
✅ Base abstract class
export abstract class BaseComponent {
  isLoading = false;
  errorMessage = '';

  showLoader() {
    this.isLoading = true;
  }

  hideLoader() {
    this.isLoading = false;
  }

  abstract fetchData(): void;
}
✅ Child component
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <p *ngIf="isLoading">Loading...</p>
  `
})
export class UserComponent extends BaseComponent implements OnInit {

  ngOnInit() {
    this.fetchData();
  }

  fetchData(): void {
    this.showLoader();

    setTimeout(() => {
      console.log('Users loaded');
      this.hideLoader();
    }, 2000);
  }
}

Yahan child component ko fetchData() implement karna mandatory hai ✅