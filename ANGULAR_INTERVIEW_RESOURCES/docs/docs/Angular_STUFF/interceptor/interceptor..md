
#)Definiton
“Interceptor is a service that intercepts all HTTP requests/responses.
I use it for adding JWT token, global error handling, logging, modifying headers, and showing loaders.
It improves code maintainability because common logic is written in one place instead of repeating in every API call.


-------------------------------------------------------------
What is req.clone() and why do we need it?
Because HttpRequest is immutable (cannot be changed).
To modify headers or body, we must clone it using .clone() and return the modified request.

6️⃣ How do you add JWT token using Interceptor?
const token = localStorage.getItem('token');

const modifiedReq = req.clone({
  setHeaders: { Authorization: `Bearer ${token}` }
});

----------------------------------------------------

7️⃣ How do you handle errors in an interceptor?
return next.handle(req).pipe(
  catchError(err => {
    if (err.status === 401) {
      // refresh token / logout
    }
    return throwError(() => err);
  })
)

-------------------------------------------------
Does interceptor run for every HTTP request?

Yes — every request passing through Angular's HttpClient triggers it.

Unless you manually bypass it (rare).
------------------------------------------------------

1️⃣3️⃣ How do you skip an interceptor for a specific request?

You typically set a custom header:

const req = http.get(url, { headers: { skip: 'true' }});

if (req.headers.has('skip')) {
  return next.handle(req);
}

------------------------------
What is HttpInterceptor in Angular 15 vs Angular 16+?

Angular 16 introduced functional interceptors:

export const authInterceptor = (req, next) => {
  const modified = req.clone({
    setHeaders: { Authorization: 'Bearer token' }
  });

  return next(modified);
};
--------------------------------------
Return type of interceptor

“The return type of the intercept() method is Observable<HttpEvent<any>>,
because Angular processes HTTP requests as an observable stream and every interceptor must return 
 same stream so the next interceptor or HttpClient can continue the chain.”





-----------------------------------------------------------------
⭐ ✔ CLASS-BASED INTERCEPTOR (Old, Traditional)
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modified = req.clone({
      setHeaders: { Authorization: "Bearer token" }
    });
    return next.handle(modified);
  }
}
-------------------------------------------------------------------

✔ Characteristics:

Uses a class

Must implement HttpInterceptor
Needs to be provided using HTTP_INTERCEPTORS
Uses dependency injection inside constructor
Very verbose
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
];

--------------------------------------------------
Why Angular Moved to Functional Interceptors?

Because class-based interceptors have drawbacks:

❌ More boilerplate
❌ Harder to tree-shake
❌ More DI complexity


----------------------------------------------------------------------

⭐ ✔ FUNCTIONAL INTERCEPTOR (New, Modern)
export const authInterceptor = (req: HttpRequest<any>, next: HttpHandlerFn) => {

  const modified = req.clone({
    setHeaders: { Authorization: "Bearer token" }
  });

  return next(modified);
};

-------------------------------------------------------------------------------
✔ Characteristics:

Plain function (no class)
Simpler to write
Cleaner DI
Faster tree-shaking
Recommended for new Angular versions
Added using provideHttpClient(withInterceptors())
--------------------------------------------------------------------------------------------
Example:
provideHttpClient(
  withInterceptors([authInterceptor])
);


---------------------------------------------
What is Interceptor Chaining?

In Angular, you can register multiple HTTP interceptors.

When multiple interceptors exist:

👉 They execute in a chain (one after another)


