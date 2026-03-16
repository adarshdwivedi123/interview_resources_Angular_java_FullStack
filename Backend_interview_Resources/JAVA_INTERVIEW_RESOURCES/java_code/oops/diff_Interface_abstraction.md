when to use abstract class and interface?

Abstract class is used when we want to share common behavior among classes, while an interface is used when we want different classes to implement the same method.


Example: Animal

All animals can:
eat
sleep
But sound is different.


abstract class Animal {

    void eat(){
        System.out.println("Animal eats");
    }

    abstract void sound();

}

Example class:

class Dog extends Animal {

    void sound(){
        System.out.println("Dog barks");
    }
}

----------------------------------------------------
interface
Example: Payment system

All payment types must implement pay().
interface Payment {

    void pay();

}

Implementation:

class CreditCard implements Payment {

    public void pay(){
        System.out.println("Payment by card");
    }

}

class UPI implements Payment {

    public void pay(){
        System.out.println("Payment by UPI");
    }

}