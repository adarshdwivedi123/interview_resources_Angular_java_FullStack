#)Define Constructor

#)A constructor is a special method used to initialize objects in java.
#)use constructors to initialize all variables in the class when an object is created. As and when an object  
is created it is initialized automatically with the help of constructor in java. 

#)We have two types of constructors 
Default Constructor 
Parameterized Constructor 
Signature : public classname(


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