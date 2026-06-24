// environments/environment.ts
export const environment = {
  production:  false,
  apiUrl:      'http://localhost:3000',
  version:     '1.0.0',
  logErrors:   false,
  logUrl:      '/api/logs/error',
};

// environments/environment.prod.ts
export const environment = {
  production:  true,
  apiUrl:      'https://api.myapp.com',
  version:     '1.0.0',
  logErrors:   true,
  logUrl:      '/api/logs/error',
};


-----------------------------------------------------
Step 2 — Toast Service (Signals)

// core/services/toast.service.ts
import {
  Injectable,
  signal,
  computed
} from '@angular/core';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id:        number;
  message:   string;
  type:      ToastType;
  duration:  number;
}

@Injectable({ providedIn: 'root' })
export class ToastService {

  // signal — reactive state
  private _toasts = signal<Toast[]>([]);

  // public read only
  toasts = computed(() => this._toasts());

  private counter = 0;

  success(msg: string, duration = 4000) {
    this.add(msg, 'success', duration);
  }

  error(msg: string, duration = 5000) {
    this.add(msg, 'error', duration);
  }

  warning(msg: string, duration = 4000) {
    this.add(msg, 'warning', duration);
  }

  info(msg: string, duration = 3000) {
    this.add(msg, 'info', duration);
  }

  remove(id: number) {
    this._toasts.update(t => t.filter(x => x.id !== id));
  }

  private add(message: string, type: ToastType, duration: number) {

    // prevent duplicate toasts
    const exists = this._toasts()
      .some(t => t.message === message && t.type === type);
    if (exists) return;

    const id = ++this.counter;
    this._toasts.update(t => [...t, { id, message, type, duration }]);

    // auto remove
    setTimeout(() => this.remove(id), duration);
  }
}

-----------------------------------------------------------