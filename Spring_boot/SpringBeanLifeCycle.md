👉 A bean = an object created by Spring
You create a class:

@Service
public class EmailService {}

Now Spring will automatically create an object like:
-----------------------------------------------------------------
EmailService emailService = new EmailService();


But you don’t write this, Spring writes it internally.

✅ Bean = object managed by Spring.
✅ Spring creates it, injects it, destroys it.

