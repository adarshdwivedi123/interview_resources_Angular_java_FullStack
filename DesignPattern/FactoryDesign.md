#)What is the Factory Design Pattern?

The Factory Design Pattern is a Creational Design Pattern that provides an interface or method to create objects in a superclass, but allows subclasses or logic to decide which class to instantiate.

In simple terms:
👉 Instead of creating objects using new, you let a factory class or method handle the creation.

🎯 Why We Use Factory Pattern

✅ To hide object creation logic
✅ To achieve loose coupling
✅ To follow the Open/Closed Principle (OCP) — add new types without modifying existing code
✅ To centralize and standardize object creation

--------------------------------------------------------------------------

Why It’s Called a “Factory Method”

It’s called a Factory Method because:
👉 it’s a method that acts like a factory — i.e., it creates and returns objects instead of you creating them directly using the new keyword.

So, the “factory” part means it produces objects,
and the “method” part means the creation happens inside a method, not a class constructor.



------------------------------------------------------------------------------------


🏗️ Example: Shape Factory

Let’s take a simple real-life example.

1️⃣ Create an Interface
public interface Shape {
    void draw();
}
--------------------------------------------------------------------

2️⃣ Create Implementing Classes
public class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing a Circle");
    }
}

public class Rectangle implements Shape {
    public void draw() {
        System.out.println("Drawing a Rectangle");
    }
}
-------------------------------------------------------------------------
3️⃣ Create the Factory Class
public class ShapeFactory {

    // Factory method
    public Shape getShape(String shapeType) {
        if (shapeType == null) return null;

        if (shapeType.equalsIgnoreCase("CIRCLE")) {
            return new Circle();
        } else if (shapeType.equalsIgnoreCase("RECTANGLE")) {
            return new Rectangle();
        }

        return null;
    }
}
---------------------------------------------------------------------------

4️⃣ Use Factory in Main Class
public class Main {
    public static void main(String[] args) {
        ShapeFactory factory = new ShapeFactory();

        Shape shape1 = factory.getShape("CIRCLE");
        shape1.draw();

        Shape shape2 = factory.getShape("RECTANGLE");
        shape2.draw();
    }
}

✅ Output:
Drawing a Circle
Drawing a Rectangle

-----------------------------------------------------------------------------------
🧩 How It Works

The client (Main) doesn’t know which class is being created.
The factory (ShapeFactory) decides which object to return.
If a new shape (like Triangle) is added, you only update the factory, not the client code.

------------------------------------------------------------------------------------
💬 How to Explain in Interview
Here’s how you can say it 👇

The Factory Design Pattern is used to create objects without exposing the object creation logic to the client.
Instead of writing new in the client, we delegate the creation to a Factory class.

It promotes loose coupling, follows the Open/Closed Principle, and makes the code easy to maintain.

For example, if I have a ShapeFactory, I can ask it for a Circle or a Rectangle without knowing the exact class name.

---------------------------------------------------------
When to Use

When you have multiple subclasses and need to decide which one to create at runtime.

When you want to centralize object creation in one place.

When you want to reduce coupling between client and concrete classes.

----------------------------------------------------------------
#)why we need factory desing pattern?
#)We need the Factory Method pattern to avoid using new everywhere, and to make our code flexible, maintainable, and loosely coupled