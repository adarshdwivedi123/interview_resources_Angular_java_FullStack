
Step 1  →  request goes out with access token
Step 2  →  server returns 401 — token expired
Step 3  →  catchError catches 401 — calls handleRefresh
Step 4  →  check isRefreshing — prevent duplicate refresh
Step 5  →  call POST /api/auth/refresh with refresh token
Step 6a →  success — save new token — unblock waiting requests
Step 6b →  failed  — reset state — logout — go to login
Step 7  →  retry original request with new token
Step 8  →  user gets response — never knew it happened

Infinite loop prevention:
  Fix 1 →  /api/auth/refresh in PUBLIC_URLS
  Fix 2 →  refreshAttempts counter — max 1
  Fix 3 →  resetState() called always
  =============================================
Say in interview — "The key to production 401 handling is three things — isRefreshing flag to prevent duplicate refresh calls, refreshAttempts counter to prevent infinite loop, and refresh URL in PUBLIC_URLS so interceptor never catches refresh endpoint itself


===========================================
```markdown
// shared state
let isRefreshing    = false;
let refreshAttempts = 0;
const MAX_ATTEMPTS  = 1;
const tokenSubject  = new BehaviorSubject<string | null>(null);

const PUBLIC_URLS   = [
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/refresh',      // ← critical — prevents loop
];

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  // step 1 — skip public URLs
  const isPublic = PUBLIC_URLS.some(u => req.url.includes(u));
  if (isPublic) return next(req);

  // step 2 — attach token
  const authReq = attachToken(req, auth.getAccessToken());

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {

      // step 3 — only handle 401
      if (error.status !== 401) {
        return throwError(() => error);
      }

      // step 4 — check max attempts
      if (refreshAttempts >= MAX_ATTEMPTS) {
        resetState();
        auth.logout();
        return throwError(() => error);
      }

      // step 5 — handle refresh
      return handleRefresh(req, next, auth);
    })
  );
};

function handleRefresh(req: any, next: any, auth: AuthService) {

  if (!isRefreshing) {
    // first 401 — start refresh
    isRefreshing = true;
    refreshAttempts++;
    tokenSubject.next(null);

    return auth.refreshToken().pipe(
      switchMap((res: any) => {
        // success
        resetState();
        auth.saveAccessToken(res.accessToken);
        tokenSubject.next(res.accessToken);
        return next(attachToken(req, res.accessToken));
      }),
      catchError(err => {
        // failed
        resetState();
        auth.logout();
        return throwError(() => err);
      })
    );
  }

  // other 401s — wait for new token
  return tokenSubject.pipe(
    filter(t => t !== null),
    take(1),
    switchMap(t => next(attachToken(req, t!)))
  );
}

function attachToken(req: any, token: string | null) {
  if (!token) return req;
  return req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });
}

function resetState() {
  isRefreshing    = false;
  refreshAttempts = 0;
  tokenSubject.next(null);
}

=================================================Explamantion below




  =========================================

// ============================================
// AUTH INTERCEPTOR — FULL REVISION NOTES
// ============================================
// PURPOSE:
// 1. Attach Bearer token to every request
// 2. If 401 → call refresh token API
// 3. Retry original request with new token
// 4. Prevent infinite loop
// 5. Handle multiple 401s at same time
// ============================================

import {
  HttpInterceptorFn,
  HttpErrorResponse
} from '@angular/common/http';
import { inject }          from '@angular/core';
import {
  catchError,
  switchMap,
  throwError,
  BehaviorSubject,
  filter,
  take
} from 'rxjs';
import { AuthService }     from '../services/auth.service';

// ============================================
// SHARED STATE — outside interceptor
// WHY outside? — survives between requests
// WHY not in service? — interceptor is function
// ============================================

let isRefreshing    = false;
// WHY? — prevents calling refresh API multiple times
// when 3 requests fail at same time
// only FIRST request calls refresh
// others WAIT

let refreshAttempts = 0;
// WHY? — counts how many times refresh was tried
// max 1 attempt — prevents infinite loop

const MAX_ATTEMPTS  = 1;
// WHY 1? — if refresh fails once → logout
// no point retrying refresh again

const tokenSubject  = new BehaviorSubject<string | null>(null);
// WHY BehaviorSubject? — queues waiting requests
// null  = refresh in progress → wait
// token = refresh done        → retry with this token

// ============================================
// PUBLIC URLS — skip token for these
// MOST IMPORTANT — /api/auth/refresh MUST be here
// WHY? — if refresh returns 401
//         interceptor catches it again
//         tries to refresh again → INFINITE LOOP
//         adding to PUBLIC_URLS breaks the loop
// ============================================

const PUBLIC_URLS = [
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/refresh',   // ← CRITICAL — prevents loop
  '/api/auth/forgot-password',
];

// ============================================
// MAIN INTERCEPTOR
// ============================================

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  // GUARD 1 — skip public URLs
  // login and register don't need token
  const isPublic = PUBLIC_URLS.some(u => req.url.includes(u));
  if (isPublic) return next(req);

  // attach token to every request
  // WHY clone? — HttpRequest is immutable
  //              cannot modify directly
  //              must clone + set header
  const authReq = attachToken(req, auth.getAccessToken());

  return next(authReq).pipe(

    catchError((error: HttpErrorResponse) => {

      // GUARD 2 — only handle 401
      // 400, 403, 500 → pass to error interceptor
      if (error.status !== 401) {
        return throwError(() => error);
      }

      // GUARD 3 — check max attempts
      // if already tried once → logout immediately
      // WHY? — prevents infinite refresh loop
      if (refreshAttempts >= MAX_ATTEMPTS) {
        resetState();
        auth.logout();
        return throwError(() => error);
      }

      // ALL GUARDS PASSED → call refresh
      return handleRefresh(req, next, auth);
    })
  );
};

// ============================================
// HANDLE REFRESH
// TWO CASES:
// Case 1 — first 401  → start refresh
// Case 2 — other 401s → wait for new token
// ============================================

function handleRefresh(
  req:  any,
  next: any,
  auth: AuthService
) {

  // ── CASE 1 — first request to fail ─────────
  if (!isRefreshing) {
    isRefreshing = true;     // lock — others will wait
    refreshAttempts++;       // track attempts
    tokenSubject.next(null); // null = refresh in progress

    return auth.refreshToken().pipe(
    //           ↑
    //  calls POST /api/auth/refresh
    //  sends refresh token to server
    //  gets new access token back

      switchMap((res: any) => {
        // ✅ refresh SUCCESS

        resetState();                       // unlock
        auth.saveAccessToken(res.accessToken); // save new token
        tokenSubject.next(res.accessToken);    // unblock waiting requests

        // retry ORIGINAL failed request with NEW token
        return next(attachToken(req, res.accessToken));
      }),

      catchError(err => {
        // ❌ refresh FAILED
        // refresh token also expired or invalid

        resetState();   // unlock — MUST always reset
        auth.logout();  // clear tokens + go to login
        return throwError(() => err);
      })
    );
  }

  // ── CASE 2 — other requests wait ───────────
  // isRefreshing is true — refresh already running
  // wait for tokenSubject to emit new token
  return tokenSubject.pipe(
    filter(t => t !== null), // wait until token is not null
    take(1),                 // take only once — unsubscribe after
    switchMap(t =>
      next(attachToken(req, t!)) // retry with new token
    )
  );
}

// ============================================
// HELPER — attach token to request
// WHY clone? — request is immutable
//              req.clone copies everything
//              headers.set adds Authorization
// ============================================

function attachToken(req: any, token: string | null) {
  if (!token) return req; // no token → send as is

  return req.clone({
    headers: req.headers.set(
      'Authorization', `Bearer ${token}`
    )
  });
}

// ============================================
// HELPER — reset shared state
// WHY separate function? — called in 3 places
//   1. refresh success
//   2. refresh failed
//   3. max attempts reached
// MUST always reset — if not reset:
//   isRefreshing stuck as true → all future
//   requests wait forever ❌
// ============================================

function resetState() {
  isRefreshing    = false; // unlock
  refreshAttempts = 0;     // reset counter
  tokenSubject.next(null); // reset subject
}

// ============================================
// REGISTER IN app.config.ts
// ORDER MATTERS:
//   1. correlationInterceptor — add request ID
//   2. authInterceptor        — add token + refresh
//   3. errorInterceptor       — handle errors
// ============================================

// provideHttpClient(
//   withFetch(),
//   withInterceptors([
//     correlationInterceptor,
//     authInterceptor,
//     errorInterceptor
//   ])
// )

// ============================================
// WHAT PREVENTS INFINITE LOOP — 3 THINGS
// ============================================

// 1. PUBLIC_URLS has /api/auth/refresh
//    → refresh endpoint never intercepted
//    → if refresh returns 401 → skipped ✅

// 2. refreshAttempts counter
//    → max 1 attempt
//    → after 1 fail → logout immediately ✅

// 3. resetState() called everywhere
//    → isRefreshing never stuck as true
//    → tokenSubject always resets ✅

// ============================================
// QUICK REVISION — ONE LINE EACH
// ============================================

// isRefreshing        → prevents multiple refresh calls
// refreshAttempts     → prevents infinite loop
// tokenSubject(null)  → blocks other requests while refreshing
// tokenSubject(token) → unblocks others with new token
// PUBLIC_URLS         → skip refresh endpoint itself
// attachToken()       → clone + add Authorization header
// resetState()        → always unlock after success or fail
// auth.logout()       → clear tokens + navigate to login
// filter(t=>t!==null) → wait until refresh is done
// take(1)             → take new token only once
// switchMap           → retry original request

// ============================================
// INTERVIEW ONE LINER
// ============================================
// "When 401 received, catchError triggers handleRefresh.
//  isRefreshing flag ensures only first request calls
//  refresh API. Others wait on BehaviorSubject.
//  refreshAttempts counter prevents infinite loop.
//  refresh URL in PUBLIC_URLS prevents interceptor
//  from catching refresh endpoint itself.
//  resetState() always called so flags never get stuck."
// ============================================

-------------------Po
// auth.interceptor.ts — PRODUCTION READY
import {
  HttpInterceptorFn,
  HttpErrorResponse
} from '@angular/common/http';
import { inject } from '@angular/core';
import {
  catchError,
  switchMap,
  throwError,
  BehaviorSubject,
  filter,
  take
} from 'rxjs';
import { AuthService } from '../services/auth.service';

// ── shared state ────────────────────────────────
let isRefreshing    = false;
let refreshAttempts = 0;                          // ← track attempts
const MAX_REFRESH_ATTEMPTS = 1;                   // ← max 1 attempt only
const tokenSubject  = new BehaviorSubject<string | null>(null);

// ── public URLs — skip token ────────────────────
const PUBLIC_URLS = [
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/refresh',        // ← MUST be here — prevent loop
  '/api/auth/forgot-password',
];

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  // skip public URLs — prevents refresh API looping
  const isPublic = PUBLIC_URLS
    .some(url => req.url.includes(url));
  if (isPublic) return next(req);

  // attach token
  const authReq = attachToken(req, auth.getAccessToken());

  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {

      // only handle 401
      if (error.status !== 401) {
        return throwError(() => error);
      }

      // ── STOP infinite loop ────────────────────
      // if refresh already attempted max times → logout
      if (refreshAttempts >= MAX_REFRESH_ATTEMPTS) {
        resetRefreshState();
        auth.logout();
        return throwError(() => error);
      }

      return handleRefresh(req, next, auth);
    })
  );
};

// ── attach token ────────────────────────────────
function attachToken(req: any, token: string | null) {
  if (!token) return req;
  return req.clone({
    headers: req.headers.set(
      'Authorization', `Bearer ${token}`
    )
  });
}

// ── reset state — call this always ─────────────
function resetRefreshState() {
  isRefreshing    = false;
  refreshAttempts = 0;
  tokenSubject.next(null);
}

// ── handle refresh ──────────────────────────────
function handleRefresh(req: any, next: any, auth: AuthService) {

  // CASE 1 — first request to fail
  if (!isRefreshing) {
    isRefreshing = true;
    refreshAttempts++;                    // ← increment attempts
    tokenSubject.next(null);             // block other requests

    return auth.refreshToken().pipe(

      switchMap((res: any) => {
        // success — reset and unblock
        resetRefreshState();
        auth.saveAccessToken(res.accessToken);
        tokenSubject.next(res.accessToken);

        // retry original request with new token
        return next(attachToken(req, res.accessToken));
      }),

      catchError(err => {
        // refresh failed — logout
        resetRefreshState();
        auth.logout();
        return throwError(() => err);
      })
    );
  }

  // CASE 2 — other requests wait for token
  return tokenSubject.pipe(
    filter(token => token !== null),
    take(1),
    switchMap(token =>
      next(attachToken(req, token!))
    )
  );
}

=================================
Level 1 — Basic (say first always)
"I use HTTP Interceptor to attach Bearer token
 to every outgoing request automatically.
 If 401 comes I call refresh token API
 and retry the original request."
Level 2 — Add This if They Seem Interested
"The challenge is when multiple APIs fail
 with 401 at the same time.
 I use isRefreshing flag to ensure
 only one refresh call happens.
 Others wait using BehaviorSubject."
Level 3 — Add This for Senior Roles
"To prevent infinite loop I do three things —
 refresh URL in PUBLIC_URLS,
 refreshAttempts counter with max 1,
 and resetState() called in all paths.