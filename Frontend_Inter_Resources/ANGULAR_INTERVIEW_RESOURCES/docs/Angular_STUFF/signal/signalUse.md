1) Step 1 — Create Role Service
role.service.ts

import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  // Store current role
  userRole = signal<string>('USER');
  =>it automatically recalculates when dependent signals change.
  this.userRole()
Whenever userRole changes:
computed automatically runs again
and recalculates value.

  // Computed signal for admin check 
  Notice: computed() only calculates a value.
  isAdmin = computed(() => {
    return this.userRole() === 'ADMIN';
  });

  // Change role dynamically
  setRole(role: string): void {
    this.userRole.set(role);
  }

}
---------------------------------------------------------------
Step 2 — Component
dashboard.component.ts
import { Component } from '@angular/core';
import { RoleService } from './role.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  constructor(
    public roleService: RoleService
  ) {}

  makeAdmin(): void {

    this.roleService.setRole('ADMIN');

  }

  makeUser(): void {

    this.roleService.setRole('USER');

  }

}
Step 3 — HTML
dashboard.component.html
<h2>
  Current Role:
  {{ roleService.userRole() }}
</h2>

<button (click)="makeAdmin()">
  Admin Login
</button>

<button (click)="makeUser()">
  User Login
</button>

<hr>

<div *ngIf="roleService.isAdmin()">

  <h3>Admin Panel</h3>

  <button>
    Delete User
  </button>

</div>

<div *ngIf="!roleService.isAdmin()">

  <h3>User Dashboard</h3>

</div>
How It Works
Initial State
USER

Shows:

User Dashboard
When Admin Login Clicked
this.roleService.setRole('ADMIN');

Signal updates automatically.

UI automatically changes:

Admin Panel

No:

subscribe()
BehaviorSubject
manual change detection
Why Signals Are Better
RxJS Old Way	Signals
BehaviorSubject	signal()
subscribe()	direct access
more boilerplate	cleaner
manual unsubscribe	not needed
Real Production Usage




========================================================================

Explanation
Signal
userRole = signal<string>('USER');

Stores reactive state.

Default role:

USER
Read Signal Value
this.userRole()

Signals are accessed like functions.

Update Signal
this.userRole.set('ADMIN');

Updates value automatically.

Computed Signal
isAdmin = computed(() => {
   return this.userRole() === 'ADMIN';
});

Automatically recalculates when role changes.
================================================


================================================================


In Angular, we can handle role-based functionality using Signals by storing the current user role inside a signal.

Based on the role value such as ADMIN or USER, we can conditionally show menus, buttons, pages, or features in the UI using *ngIf.

When the role changes, the signal automatically updates the UI without needing manual subscriptions, making the code cleaner and easier to maintain