when to use abstract class and interface?

Abstract class is used when we want to share common behavior among classes, while an interface is used when we want different classes to implement the same method.



---------------------------------------------------------------------------
1. Diff between abstract class and interface
Ans. Abstract class can have both abstract and non-abstract methods, while interface can only have abstract methods.
Abstract class can have constructor, fields, and methods, while interface cannot have any of these.

A class can extend only one abstract class, but can implement multiple interfaces.

Abstract classes are used to define a common behavior among subclasses, while interfaces are used to define a contract for classes to implement.

Example: Abstract class 'Shape' with abstract method 'calculateArea', Interface 'Drawable' with method 'draw'.
--------------------------------------------------------------------------------


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