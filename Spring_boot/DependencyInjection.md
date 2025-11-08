->We use spring framework to instantiate benas and wire dependcies
@Autowired


Q)What is Dependency Injection in Spring Boot?
#)Dependency Injection (DI) is a design pattern where Spring creates and provides the required objects (dependencies) to your class automatically, instead of you creating them manually using new.


----------------------------------------------------------------------------------------------
“Dependency Injection in Spring Boot is a technique where Spring creates and provides the required objects to our classes. It removes the need for manual object creation and helps maintain loose coupling. Spring manages these objects in the IOC container, and dependencies are injected using constructor, setter, or field injection. Constructor injection is considered the best practice.”

---------------------------------------------------------------------------------------

👉 In simple words:
Spring creates objects for you and connects them together.


----------------------------------------------------------------------------------
✅ Types of Dependency Injection
✅ 1. Constructor Injection (Best Practice)

Spring injects the dependency through the constructor.
✅ 2. Setter Injection

Spring injects dependency using setter methods.
✅ 3. Field Injection (Not recommended)
Injecting directly into the variable.







---------------------------------------------------------------------------------
Why do we need DI?
Loose coupling – classes depend on interfaces, not concrete classes.
Easy to test – you can inject mock objects.
Reusable code – no tight bonding between objects.
Cleaner, maintainable code – no new keywords everywhere.
Spring manages the object lifecycle.
