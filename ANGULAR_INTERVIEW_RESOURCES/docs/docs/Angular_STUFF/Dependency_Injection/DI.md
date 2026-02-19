DI
#)DI in angular  is a deisgn pattern where rather  than creating object manually inside a
componenet .angualr create and provide the required dependecy.

Ex:
a component need a services ->angular  automatically inject the services into the component via
constructor.


#)Why DI is used and benfit?
1)Reusability – same service can be used by many components
2)Maintainability – code becomes clean and modular
3)Loose coupling – component are not depend  on services ,if we replace a service
component code stay same.
4)angualr create one instance shared services  in all over component.
5)Testability – easy to mock services




#)DI Hierarchy in Angular
There are two main injector levels:

-----------------------------------------------------------
1. Root Injector
Services provided at root level are available everywhere.

Example: providedIn: 'root'


------------------------------------------------------
2. Component Injector
Service provided inside a component is limited to that component and its children.

Example:

@Component({
  selector: 'app-test',
  providers: [UserService]
})
This creates a new instance of UserService only for this component.
------------------------------------------------------------------------------

#)What is a Provider?
Answer:
A Provider tells Angular HOW to create and deliver a dependency (service) when a component or another service needed.

Define
A provider tells Angular how to create an instance of a service when a component or another service needed.


----------------------------------------------------------------------
#)What happens when a service is provided in both root and component?
Answer:
Component-level provider wins. Angular uses the instance from the closest injector.



How does Angular know which service to inject?

Answer:
By type matching inside the constructor:

constructor(private userService: UserService) {}


Can a service depend on another service?

Answer:
Yes. This is called Nested Dependency Injection.

Example:

constructor(private api: ApiService, private auth: AuthService) {}


Angular manages all nested dependencies automatically.
---------------------------------------------------------------
✅ What is @Injectable() in Angular?
@Injectable() is a decorator in Angular that marks a class as eligible for Dependency Injection (DI).
Without @Injectable(), Angular cannot inject dependencies inside the service.
Error: Can't resolve all parameters for UserService


-----------------------------------------------------------------------------------
Types of DI Providers in Angular 17

Angular 17 still uses the same DI provider system, but with improved structure.

1️⃣ providedIn: 'root'

Global singleton service.
Created once, shared across the app.

@Injectable({ providedIn: 'root' })
export class UserService {}
----------------------------------------------------

2️⃣ providedIn: 'any'

New instance for every lazy-loaded module.

@Injectable({ providedIn: 'any' })


3️⃣ Component-level provider

New instance every time component is created.

@Component({
  providers: [UserService]
})

4️⃣ Standalone DI (Angular 17, functional)
bootstrapApplication(AppComponent, {
  providers: [UserService]
});

-------------------------------------------------------------------




How Angular uses @Injectable() internally (Important for interview)

Angular scans your service class

Finds the @Injectable() decorator

Reads metadata:

constructor parameters

dependencies

provider scope

Registers the service with the DI container

Creates an instance only when needed

Injects it into components/services automatically



------------------------------------------------
DI Hierarchy (Very Important for Interview)

Angular DI follows tree hierarchy:

Root Injector
  ├── Module Injector
  │      └── Component Injector
  │              └── Child Component Injector


✔ If Angular doesn’t find a provider in the component →
It moves upward (component → module → root)

✔ If not found even in root →
Angular throws NullInjectorError



------------------------------
Hierarchy Order (Bottom → Top)
Child Component Injector  
    ↑  
Parent Component Injector  
    ↑  
Module Injector (Feature / Lazy module)  
    ↑  
Root Injector  
    ↑  
NullInjectorError (if still not found)




When a service is requested using inject() or constructor DI, Angular first looks at the component injector, then moves to the parent component injector, then module injector, and finally the root injector.

Wherever Angular finds the service first, that instance is used.
If none of the injectors contain a provider, Angular throws a NullInjectorError.



-----------------------------------------------------------------
Best one
Angular uses hierarchical dependency injection where injectors are arranged in a tree structure.
When Angular injects a service, it first checks the current component injector.
If not found, it checks the parent injector.
If still not found, it checks the root injector.
If not found anywhere, Angular throws an error.

This shows you understand hierarchical lookup.

--------------------------------------------------------------------------------------------
Angular uses hierarchical dependency injection where injectors are arranged in a tree structure.
Angular first looks for a dependency in the current injector, then in parent injectors, and finally in the root injector.
Services provided in root are singletons, while services provided in components create new instances scoped to that component.


-----------------------------------------------------------------------------------
How Angular actually makes it Singleton (Simple Logic)

Angular has a Dependency Injection (DI) container.

Think of it like:

When first component asks for the service → Angular creates it.

When second component asks → Angular checks:
“Do I already have this service?”
✔ Yes → Give the same instance
✖ No → Create only once

Because the service is already stored in DI container, Angular never creates a second copy.