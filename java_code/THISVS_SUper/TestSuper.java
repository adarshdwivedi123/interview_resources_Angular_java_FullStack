package THISVS_SUper;
// #)super refers to parent class object.

// #)super() calls parent constructor, must be first statement.

// #)super.method() calls parent class method.

// #)super.variable accesses parent class variable.


1️⃣ Using super to call parent class constructor

You can use super() to call the parent class constructor.

Must be the first statement in the subclass constructor.

class Vehicle {
    Vehicle() {
        System.out.println("Vehicle constructor called");
    }
}

class Car extends Vehicle {
    Car() {
        super();  // Calls Vehicle constructor
        System.out.println("Car constructor called");
    }
}

public class TestSuper {
    public static void main(String[] args) {
        Car c = new Car();
    }
}

Vehicle constructor called
Car constructor called
////////////////////////////////////////////////////////////////////
//2️⃣ Using super to access parent class method
class Vehicle {
    void start() {
        System.out.println("Vehicle is starting");
    }
}

class Car extends Vehicle {
    void start() {
        super.start(); // Calls Vehicle's start()
        System.out.println("Car is starting");
    }
}

public class TestSuper {
    public static void main(String[] args) {
        Car c = new Car();
        c.start();
    }
}

output
Vehicle is starting
Car is starting
//////////////////////////////////////////////////////////////////////////
//3️⃣ Using super to access parent class variables
class Vehicle {
    String color = "White";
}

class Car extends Vehicle {
    String color = "Red";

    void displayColor() {
        System.out.println("Car color: " + color);       // Red
        System.out.println("Vehicle color: " + super.color); // White
    }
}

public class TestSuper {
    public static void main(String[] args) {
        Car c = new Car();
        c.displayColor();
    }
}
#output
Car color: Red
Vehicle color: White
