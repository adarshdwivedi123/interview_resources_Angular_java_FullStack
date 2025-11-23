->We use spring framework to instantiate benas and wire dependcies
@Autowired

`
Q)What is Dependency Injection in Spring Boot?
#)Dependency Injection (DI) is a design pattern where Spring creates and provides the required objects (dependencies) to your class automatically, instead of we creating them manually using new.

`
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

-------------------------------------------------------------------------------


1. Autowiring By Type (MOST COMMON)

Spring looks for a bean based on class type.

✅ Example
@Service
public class PaymentService {}

@Service
public class OrderService {

    @Autowired   // injects bean of type PaymentService
    private PaymentService paymentService;
}


✅ Works because only one PaymentService bean exists.
❌ If two beans have same type → ambiguity.

✅ Most commonly used autowiring mechanism.

✅ 2. Autowiring By Name

Spring injects the bean whose name matches the variable name.

✅ Example
@Service("paypalService")
public class PaypalPaymentService implements PaymentService {}

@Service
public class OrderService {

    @Autowired
    private PaymentService paypalService; // variable name matches bean name
}


✅ Works only because variable name = bean name
❌ Not recommended — too fragile, depends on variable naming

✅ 3. Constructor Injection (RECOMMENDED)

Spring injects dependency through constructor.
We prefer cosntructor di injection becoz it is  immutablr inn
it claery highlight ur code have too much dependecy and need to refactor it.
setter injection it is changing the state.

✅ Example
@Service
public class OrderService {

    private final PaymentService paymentService;

    @Autowired
    public OrderService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }
}


✅ Best practice
✅ Mandatory dependency
✅ Easy for unit testing
✅ Supports immutability
✅ Works without @Autowired if only one constructor exists in the class

Used in real projects? → YES ✔ (recommended by industry)

✅ 4. Field Injection

Uses @Autowired directly on fields.

✅ Example
@Service
public class OrderService {

    @Autowired
    private PaymentService paymentService;
}


✅ Simple
❌ Not recommended
❌ Hard to unit test
❌ Uses reflection
❌ Cannot mark fields as final

Used in real projects? → Sometimes, but NOT a good practice

✅ 5. Setter Injection

Dependency is injected through setter method.

✅ Example
@Service
public class OrderService {

    private PaymentService paymentService;

    @Autowired
    public void setPaymentService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }
}


✅ Optional dependencies
✅ Useful when dependency can change
❌ Not ideal for required dependencies








---------------------------------------------------------------------------------
Why do we need DI?
Loose coupling – classes depend on interfaces, not concrete classes.
Easy to test – you can inject mock objects.
Reusable code – no tight bonding between objects.
Cleaner, maintainable code – no new keywords everywhere.
Spring manages the object lifecycle.



