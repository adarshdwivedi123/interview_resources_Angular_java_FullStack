#)Define Constructor

#)A constructor is a special method  that having same name as a class name
#)constructor is  used to initialize objects in java.
constructor is called when object is created.
#)constructor does not have any return type even void .
#)we can use modifer  public ,private ,defualt ,protected.

#)We have two types of constructors 
Default Constructor 
Parameterized Constructor 
Signature : public classname(


-------------------------------------------------------------------------------
#)Can a constructor be private?”

✅ You can say:
Yes. A private constructor is used when we want to restrict instantiation(Object creation) from outside the class — commonly used in Singleton Design Pattern and Static Utility classes (like Math or Collections).

Example public class Singleton {
    private static Singleton instance;

    private Singleton() {
        System.out.println("Private constructor called");
    }

    public static Singleton getInstance() {
        if (instance == null)
            instance = new Singleton();
        return instance;
    }
}

public class Test {
    public static void main(String[] args) {
        // Singleton s = new Singleton(); ❌ Not allowed
        Singleton s = Singleton.getInstance(); // ✅ Allowed via static method
    }
}


-------------------------------------------------------------------------------
#)How to call a superclass constructor?
You call a superclass constructor using the keyword super() inside the subclass constructor.
It must be the first statement in the subclass constructor.


class Animal {
    Animal(String name) {
        System.out.println("Animal constructor called: " + name);
    }
}

class Dog extends Animal {
    Dog(String name) {
        super(name); // calling parent (Animal) constructor
        System.out.println("Dog constructor called");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog("Bruno");
    }
}

🔹 Key Points

super() must be the first line in the subclass constructor.
Otherwise, you’ll get a compilation error.

If you don’t explicitly call super(),
Java automatically calls the default (no-arg) constructor of the superclass.

You can also pass parameters to super() to call a specific superclass constructor.


 #)Can a constructor be called directly from a method?

No, a constructor cannot be called directly from a method because it’s not a normal method.
However, you can create a new object inside the method using new, which will automatically call the constructor.


#)Is a super class constructor called even when there is no explicit call from a sub class constructor?
Yes, the superclass constructor is always called —
even if you don’t explicitly call it from the subclass constructor.

🔸 How it works:
If you don’t write super() explicitly,
Java automatically adds a default call to super() as the first statement in the subclass constructor.


class Parent {
    Parent() {
        System.out.println("Parent constructor");
    }
}

class Child extends Parent {
    Child() {
        // super();  ← This is automatically inserted by the compiler
        System.out.println("Child constructor");
    }
}

public class Main {
    public static void main(String[] args) {
        Child c = new Child();
    }
}


Output:

Parent constructor
Child constructor
---------------------------------------------------------------

✅ Even though we didn’t write super(),
the Parent constructor was still called automatically.

🔹 Important Rules:

If the parent class has a no-argument constructor,
the compiler automatically calls it.

If the parent class does not have a no-argument constructor,
then you must explicitly call a parameterized constructor using super(args) —
otherwise, you’ll get a compile-time error.

🔸 Example with parameterized constructor:
class Parent {
    Parent(String name) {
        System.out.println("Parent constructor: " + name);
    }
}

class Child extends Parent {
    Child() {
        // super(); // ❌ Error: there’s no default constructor in Parent
        super("Adarsh"); // ✅ Must call explicitly
        System.out.println("Child constructor");
    }
}

public class Main {
    public static void main(String[] args) {
        new Child();
    }
}


🧾 Output:

Parent constructor: Adarsh
Child constructor
---------------------------------------
can we make constructor static()
staric keyword belong to class not obejct
it give compile time error



--------------**********Varible that can be used in construcotr---------------------
**************************************************************************
------------------------------------------------------------------------------------
1) Public Constructor
Use Case:

When you want the class to be instantiable from anywhere.

Example:
public class Car {
    public Car() {
        System.out.println("Public Constructor");
    }
}

Where used:

Normal classes used by other packages

Utility classes that need to be created freely

✅ 2) Private Constructor
Use Case:

When you want to restrict object creation from outside the class.

Used in:
✔ Singleton Pattern
✔ Factory pattern (with static methods)
✔ Utility classes (Math, Collections)
✔ To prevent inheritance
Example (Singleton):
public class Singleton {
    private static Singleton instance = new Singleton();

    private Singleton() {
        System.out.println("Private Constructor");
    }

    public static Singleton getInstance() {
        return instance;
    }
}


👉 This ensures only one object can be created.

Example (Utility Class):
public class Utils {
    private Utils() {}  // prevent object creation
}

✅ 3) Protected Constructor
Use Case:

When you want the class to be instantiated only by:
Child classes (subclasses)

Same package classes

Example:
public class Animal {
    protected Animal() {
        System.out.println("Protected Constructor");
    }
}

class Dog extends Animal {
    Dog() {
        super();  // allowed
    }
}

Where used:

When designing a base class framework
When object creation is allowed only for inheriting classes

🎯 Summary Table
Constructor Type