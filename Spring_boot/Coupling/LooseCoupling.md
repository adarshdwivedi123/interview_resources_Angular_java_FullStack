#)LooseCoupling
Classes should depend on interfaces, not concrete implementations.
So if one class changes, other classes should NOT break.


#)Why Loose Coupling?
Because it gives:

✔ Easy to test
✔ Easy to replace implementations
✔ Flexible & maintainable
✔ Follows SOLID principles (especially D → Dependency Inversion)



-------------------------------------------------------------------------------

LOOSELY COUPLED EXAMPLE (Using Interface + @Autowired)
Step 1: Create an interface
public interface Payment {
    void doPayment();
}
-------------------------------------------------------

Step 2: Implement the interface
@Component
public class DebitCard implements Payment {
    public void doPayment() {
        System.out.println("Payment using Debit Card");
    }
}

@Component
public class CreditCard implements Payment {
    public void doPayment() {
        System.out.println("Payment using Credit Card");
    }
}

---------------------------------------------
Step 3: Inject using @Autowired + @Qualifier
@Service
public class PaymentService {

    @Autowired
    @Qualifier("creditCard")   // choose implementation
    private Payment payment;

    public void pay() {
        payment.doPayment();
    }
}

👉 What happened here?

✔ We depend on Payment interface, not DebitCard/CreditCard
✔ Easy to switch implementations
✔ Spring decides which object to inject → LOOSE COUPLING achieved
