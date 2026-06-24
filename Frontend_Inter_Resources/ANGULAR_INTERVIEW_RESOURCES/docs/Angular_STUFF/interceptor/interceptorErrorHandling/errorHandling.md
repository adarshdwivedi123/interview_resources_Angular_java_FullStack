import {
  HttpInterceptorFn,
  HttpErrorResponse
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toast  = inject(ToastService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      // get error message
      const message = getErrorMessage(error);

      switch (error.status) {

        case 0:
          // no internet / server down
          toast.error('No internet connection');
          break;

        case 400:
          // validation error from server
          toast.error(message || 'Invalid request');
          break;

        case 401:
          // token expired
          toast.error('Session expired. Please login again');
          localStorage.clear();
          router.navigate(['/login']);
          break;

        case 403:
          // no permission
          toast.error('You do not have permission');
          router.navigate(['/forbidden']);
          break;

        case 404:
          // resource not found
          toast.error('Resource not found');
          break;

        case 422:
          // unprocessable entity
          toast.error(message || 'Validation failed');
          break;

        case 500:
          // server error
          toast.error('Server error. Please try again later');
          break;

        case 503:
          // service unavailable
          toast.error('Service unavailable. Please try again later');
          break;

        default:
          toast.error('Something went wrong');
          break;
      }

      // always throw error so component can also handle if needed
      return throwError(() => error);
    })
  );
};

// helper — extract message from error response
function getErrorMessage(error: HttpErrorResponse): string {
  if (error.error?.message) return error.error.message;
  if (error.error?.errors)  return error.error.errors[0];
  if (error.message)        return error.message;
  return 'Something went wrong';
}


-------------------------------------------------------------------
@Injectable({ providedIn: 'root' })
export class ToastService {
  private toasts: any[] = [];

  success(message: string) {
    this.show(message, 'success');
  }

  error(message: string) {
    this.show(message, 'error');
  }

  warning(message: string) {
    this.show(message, 'warning');
  }

  private show(message: string, type: string) {
    this.toasts.push({ message, type });
    setTimeout(() => this.toasts.shift(), 3000);
  }
}


---------------------------------------------------------------
// error.interceptor.ts — handles errors
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // handle errors here
      return throwError(() => error);
    })
  );
};
---------------------------------------------------------
      withInterceptors([
        authInterceptor,   // runs first — adds token
        errorInterceptor   // runs second — handles errors
      ])
    )