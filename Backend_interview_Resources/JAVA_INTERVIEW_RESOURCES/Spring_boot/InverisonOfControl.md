IoC Container = Spring’s “object manager”.
It is responsible for:

✅ Creating objects (beans)
✅ Injecting dependencies
✅ Managing bean lifecycle
✅ Giving you the object when needed'

#)Def
A bean is an object created and managed by the Spring IoC Container.
#)The IoC container is responsible for creating beans, injecting dependencies, and managing their lifecycle. Instead of the developer creating objects manually, Spring creates and provides them — this is called Inversion of Control.

or
ioc means you don't create object manually -spring created manges them for you

Exmpale 
service class se inject krta hu controllet me
component bne ke service class me inject krte hai 


-------------------------------------
1. Component (Engine)

Used for common logic.

import org.springframework.stereotype.Component;

@Component
public class Engine {

    public String startEngine() {
        return "Engine started successfully";
    }
}


✅ Reusable
✅ Stateless
✅ Real production code uses Components for utilities, helpers, etc.

✅ 2. Service (CarService)

Handles business logic, depends on Engine.

import org.springframework.stereotype.Service;

@Service
public class CarService {

    private final Engine engine;

    public CarService(Engine engine) {   // constructor injection
        this.engine = engine;
    }

    public String driveCar() {
        return engine.startEngine() + " → Car is driving";
    }
}


✅ Constructor injection (production standard)
✅ Service contains business rules
-----------------------------------------------------------

#)ApplationContext?
using xml
using @Configuration
A big container (box) where Spring keeps all the objects you need.

Simple Example

When you write:

@Service
public class EmailService {}

Spring automatically creates an object:

EmailService emailService = new EmailService();


and stores it in the ApplicationContext.

Later, when another class needs EmailService:

@Autowired
private EmailService emailService;


Spring takes the object from ApplicationContext and gives it to you.
------------------------------------