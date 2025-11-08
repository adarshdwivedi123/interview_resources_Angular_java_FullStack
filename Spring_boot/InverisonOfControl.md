IoC Container = Spring’s “object manager”.
It is responsible for:

✅ Creating objects (beans)
✅ Injecting dependencies
✅ Managing bean lifecycle
✅ Giving you the object when needed'

#)Def
A bean is an object created and managed by the Spring IoC Container.
The IoC container is responsible for creating beans, injecting dependencies, and managing their lifecycle. Instead of the developer creating objects manually, Spring creates and provides them — this is called Inversion of Control.


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