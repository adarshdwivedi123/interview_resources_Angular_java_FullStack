#)A bean = an object created by Spring
bean is an objet that spring manges.

#)when we  create a class:

@Service
public class EmailService {}

Now Spring will automatically create an object like:
-----------------------------------------------------------------
EmailService emailService = new EmailService();


But you don’t write this, Spring writes it internally.

✅ Bean = object managed by Spring.
✅ Spring creates it, injects it, destroys it.



-----------------------------Spring bean Life Cycle-----------

Bean Life Cycle means – how a bean is created, initialized, used, and destroyed by Spring.
We can use @PostConstruct for initialization and @PreDestroy for destruction.”

Spring manages the complete life of a bean:

Bean Instantiation → Spring creates object

Dependency Injection → Spring injects dependencies

Initialization → Spring calls init methods

Bean is Ready to Use

Destruction → Spring calls destroy methods before shutdown


---------------------------------------------------------
@Component
public class MyBean {

    public MyBean() {
        System.out.println("1. Bean Object Created");
    }

    @PostConstruct
    public void init() {
        System.out.println("2. Bean Initialized");
    }

    @PreDestroy
    public void destroy() {
        System.out.println("3. Bean Destroyed");
    }
}


