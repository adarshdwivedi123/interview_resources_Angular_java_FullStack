#)What is a Default Method?

A default method is a method in an interface that has a method body (implementation).
It is defined using the default keyword.


interface MyInterface {
    void show(); // abstract method

    default void display() {
        System.out.println("This is a default method");
    }
}

---------------------------------------------------------------------------------------

#)Why Default Methods Were Introduced

Before Java 8:

Interfaces could only contain abstract methods.

If you added a new method to an existing interface, all implementing classes would break — because they’d need to implement that new method.

After Java 8:

You can add new methods with default implementations to interfaces without breaking existing code.

👉 Backward compatibility was the main reason!

🧠 How It Works
-----------------------------------------------------------------------------------------------
Example:

interface MyInterface {
    void show();

    default void log() {
        System.out.println("Logging from default method");
    }
}

class A implements MyInterface {
    public void show() {
        System.out.println("Showing from class A");
    }
}

public class Test {
    public static void main(String[] args) {
        A obj = new A();
        obj.show();   // from class A
        obj.log();    // from interface default method
    }
}


Output:

Showing from class A
Logging from default method


