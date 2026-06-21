// dialog.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Backdrop -->
    <div class="backdrop" *ngIf="isOpen" (click)="close()"></div>

    <!-- Box -->
    <div class="box" *ngIf="isOpen">

      <!-- Header -->
      <div class="header">
        <h3>{{ title }}</h3>
        <button (click)="close()">✕</button>
      </div>

      <!-- Body — flexible content -->
      <div class="body">
        <ng-content></ng-content>
      </div>

      <!-- Footer -->
      <div class="footer">
        <button class="cancel"  (click)="onCancel()">{{ cancelLabel }}</button>
        <button class="confirm" (click)="onConfirm()">{{ confirmLabel }}</button>
      </div>

    </div>
  `,
  styles: [`
    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      z-index: 100;
    }
    .box {
      position: fixed;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      width: 420px;
      border-radius: 8px;
      z-index: 101;
      box-shadow: 0 8px 30px rgba(0,0,0,0.2);
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      background: #1F4E79;
      border-radius: 8px 8px 0 0;
    }
    .header h3 { margin: 0; color: white; font-size: 16px; }
    .header button {
      background: none; border: none;
      color: white; font-size: 18px; cursor: pointer;
    }
    .body { padding: 20px; color: #333; }
    .footer {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding: 12px 20px;
      border-top: 1px solid #eee;
    }
    .cancel {
      padding: 8px 18px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      cursor: pointer;
    }
    .confirm {
      padding: 8px 18px;
      border: none;
      border-radius: 4px;
      background: #1F4E79;
      color: white;
      cursor: pointer;
    }
    .confirm:hover { opacity: 0.85; }
    .cancel:hover  { background: #f5f5f5; }
  `]
})
export class DialogComponent {

  // ── Inputs ──────────────────
  @Input() isOpen       = false;
  @Input() title        = 'Dialog';
  @Input() confirmLabel = 'Confirm';
  @Input() cancelLabel  = 'Cancel';

  // ── Outputs ─────────────────
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();
  @Output() closed    = new EventEmitter<void>();

  // ── Methods ─────────────────
  onConfirm() {
    this.confirmed.emit();
    this.closed.emit();
  }

  onCancel() {
    this.cancelled.emit();
    this.closed.emit();
  }

  close() {
    this.closed.emit();
  }
}