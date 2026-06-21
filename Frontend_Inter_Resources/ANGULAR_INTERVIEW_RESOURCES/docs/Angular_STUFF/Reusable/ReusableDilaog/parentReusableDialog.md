// app.component.ts
import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogComponent],
  template: `
    <!-- Trigger Button -->
    <button (click)="showDialog = true">
      Delete User
    </button>

    <!-- Dialog Usage -->
    <app-dialog
      [isOpen]="showDialog"
      title="Confirm Delete"
      confirmLabel="Yes Delete"
      cancelLabel="No Cancel"
      (confirmed)="onConfirm()"
      (cancelled)="onCancel()"
      (closed)="showDialog = false">

      <!-- This goes inside <ng-content> -->
      <p>Are you sure you want to delete this user?</p>
      <p style="color:red; font-size:13px">
        This action cannot be undone.
      </p>

    </app-dialog>
  `
})
export class AppComponent {
  showDialog = false;

  onConfirm() {
    console.log('Confirmed!');
    this.showDialog = false;
  }

  onCancel() {
    console.log('Cancelled!');
    this.showDialog = false;
  }
}



Key Points to Say in Interview
✅ "I used ng-content so body can be anything"
✅ "isOpen is controlled by parent — not inside dialog"
✅ "Events go up via @Output — parent decides what to do"
✅ "standalone: true — no NgModule needed"
✅ "Backdrop click closes the dialog"
✅ "Can extend with headerColor, width, closeOnBackdrop"