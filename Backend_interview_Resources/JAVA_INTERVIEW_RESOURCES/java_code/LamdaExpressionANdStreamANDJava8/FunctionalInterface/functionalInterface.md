
---------------------------------------------------------------------------------
ask in interview capgemin
✅ Example 2: Functional Interface
functional interfaces — interfaces that have exactly one abstract method.
Functional interfaces are primarily used with lambda expressions
EX : below code we have  to use  annotation(@FunctionalInterface) then we adding two abstract it give compile time error
if we use two abstract method ti will compile time error
#)Functional interface + lambda makes code shorter.

Your Original Code
interface Inter {
    void m1();
}

class A implements Inter {
    public void m1() {
        System.out.println("Hello world");
    }
}

public class Test {
    public static void main(String[] args) {
        A a = new A();
        a.m1();
    }
}

✅ Replacing the Class with a Lambda Expression

Since Inter has only one abstract method (m1()), it is a functional interface — so you can replace the entire class A with a lambda.

Here’s the equivalent code without the class:

@FunctionalInterface   //(it is opitional but recomemed)
interface Inter {
    void m1();
}

public class Test {
    public static void main(String[] args) {
        Inter i = () -> System.out.println("Hello world");
        i.m1();
    }
}


That’s it! 🎯
No need for the class A anymore — the lambda provides the implementation directly for m1().

🧠 How It Works

When you write:

Inter i = () -> System.out.println("Hello world");


Java internally creates an object similar to:

Inter i = new Inter() {
    public void m1() {
        System.out.println("Hello world");
    }
};


But the lambda syntax is:
Shorte
More readable

Generated more efficiently at runtime

🔹 Comparison
Style	Code	Verbose?
Class-based	class A implements Inter { ... }	✅ Yes
Anonymous class	Inter i = new Inter() { ... };	⚠️ Less verbose
Lambda	Inter i = () -> ...;	✅ Cleanest & modern
💡 Bonus Example (with Parameters)
@FunctionalInterface
interface Printer {
    void print(String msg);
}

public class Test {
    public static void main(String[] args) {
        Printer p = message -> System.out.println("Message: " + message);
        p.print("Hello Lambda!");
    }
}


#)Built-in Functional Interfaces

Java provides:
Predicate
Function
Consumer
Supplier

Used in streams.


-------------------------------------------------------------------------------
216. Relationship between Lambda Expression and Functional Interfaces

Lambda expressions can only be used with functional interfaces — interfaces that have exactly one abstract method.

✅ Example:

@FunctionalInterface
interface Calculator {
    int add(int a, int b);
}

public class Test {
    public static void main(String[] args) {
        Calculator c = (a, b) -> a + b;
        System.out.println(c.add(5, 10));
    }
}


📘 Explanation:

Calculator has one abstract method → it’s a functional interface.

The lambda (a, b) -> a + b provides the method’s implementation.

🧠 Remember:

Every lambda corresponds to a functional interface.

Built-in functional interfaces exist in java.util.function package.

--------------------------------------------------------------------------------


217. What is a Predicate?
1)“Predicate is a functional interface that takes one input and returns a boolean (true/false).”
2)Predicate = condition check (true or false)

✅ Method:
boolean test(T t);
✅ Example:

import java.util.function.Predicate;

public class PredicateExample {
    public static void main(String[] args) {
        Predicate<Integer> isEven = n -> n % 2 == 0;
        System.out.println(isEven.test(10)); // true
        System.out.println(isEven.test(7));  // false
    }
}


List<Integer> list = Arrays.asList(1, 2, 3, 4);

list.stream()
    .filter(x -> x % 2 == 0) // Predicate
    .forEach(System.out::println);


📘 Usage: Often used in filter() with streams.
---------------------------------------------------------------------------




📘 Usage: Used in map() operations in streams.
---------------------------------------------------------------------------------

219. What is a Consumer?

Consumer<T> is a functional interface that accepts a value (T) and returns nothing (void).

✅ Method:

void accept(T t);


✅ Example:

import java.util.function.Consumer;

public class ConsumerExample {
    public static void main(String[] args) {
        Consumer<String> printName = name -> System.out.println("Hello, " + name);
        printName.accept("Adarsh");
    }
}

-------------`

📘 Usage: Commonly used with forEach() in streams.
-----------------------------------------------------------------

220. Can you give examples of functional interfaces with multiple arguments?

✅ Examples:

Interface	Package	Description	Method
BiFunction<T, U, R>	java.util.function	Takes 2 arguments and returns a result	R apply(T t, U u)
BiConsumer<T, U>	java.util.function	Takes 2 arguments and returns nothing	void accept(T t, U u)
BiPredicate<T, U>	java.util.function	Takes 2 arguments and returns a boolean	boolean test(T t, U u)