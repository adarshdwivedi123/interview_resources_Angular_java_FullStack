How you resolve production issues?


1. Angular Architecture
Explain the architecture of an Angular application.


Explain Angular Signals. How are they different from RxJS Observables?

You migrated an application from Angular 7 → Angular 17.
What challenges can occur during migration?
1)Why we do migration just update with latedt angular 
2)this is very samll project  around 5 to 6 compoentn  when i start migraied i ahve two optin
either i have to migrate 7 to 8 and 8 to 9 this way  but as dicussed with teammates
and i prefer to create a new project  and put all the compoent and in that project directly intillay
we face compatibalit issue in library .
on checking wioth andgulkar 17 compatibulty install the require libtray

Explain Angular Change Detection.
Difference between:

Default

OnPush

You handled 1 lakh notifications using Infinite Scroll.
How did you optimize performance?

Explain Lazy Loading in Angular.

---------------------------------------------------------------
What are Angular Interceptors?
How did you implement JWT authentication using interceptors?

we implment jwt  to secure our api and use interceptor to  avoid modify request each api call 

#)
After the user logs in, the backend generates a JWT token and sends it to the Angular application. We store that token in session storeg (bevoz localstorgae possiblut of xss attack). Then we create an HTTP interceptor in Angular. This interceptor runs before every API request and automatically adds the token in the Authorization header. Because of this, all secure APIs receive the token without manually adding it every time. On the backend side, Spring Boot checks the token and if it is valid, the request is allowed.
----------------------------------------------------------------------------------------
We want  create gloabl interceptor so that logic retain in one palce we can reuse code
It improves code maintainability because common logic is written in one place instead of repeating in every API call.

-----------------------------------------------------------------------
“Where should we store JWT token?”
Options:

Storage	Risk
localStorage	XSS risk
sessionStorage	safer
HTTP-only cookies	most secure

Best answer:

For better security, JWT tokens should ideally be stored in HTTP-only cookies to prevent XSS attacks.




------------------------------------------------------------------------





-------------------------------
Difference between:
router.navigate()
routerLink
--------------------------------------

Explain Angular lifecycle hooks:

ngOnInit

ngAfterViewInit

ngOnDestroy

How would you build a reusable table component in Angular?

How do you optimize Angular performance in production?

2. RxJS / JavaScript

Difference between:

switchMap
mergeMap
concatMap

Explain the JavaScript Event Loop.

Explain Shallow Copy vs Deep Copy with example.

What is a Closure in JavaScript?

Difference between:

Promise
Observable

Explain Debounce vs Throttle with real use case.

3. Spring Boot / Backend

Difference between:

@Controller
@RestController

Explain JWT Authentication flow in Spring Boot.

What is @ControllerAdvice?

Difference between:

JPA
Hibernate
Spring Data JPA

How do you design scalable REST APIs?

4. Real-Time Systems (Based on Your WebSocket Work)

How does WebSocket work?

Difference between:

WebSocket
Polling
Long Polling

How would you design a real-time notification system?
------------------------------------------------------------------
5. System Design (Important for 5 Years Experience)

Design a Video Consultation System like Tele-MANAS.

How would you build a notification system for 1 lakh users?

How would you scale REST APIs for high traffic?

6. Non-Technical / HR Questions

Tell me about yourself.

Explain the most challenging problem you solved in your project.

Why do you want to change your current job?

How do you handle tight deadlines?

Where do you see yourself in 5 years?
---------------------------------------------------
Scenario Based Questions

24.
Your Angular application API is called multiple times unexpectedly.
How will you debug it?

25.
Your page load time is 8 seconds.
What steps will you take to improve performance?