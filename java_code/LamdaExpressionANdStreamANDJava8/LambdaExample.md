package com.adarsh;

interface MathemticalInterface {
    int operate(int a, int b);
}

class SumOperation implements MathemticalInterface {

    public int operate(int a, int b) {
        return a + b;
    }

}

class MultiplyOperation implements MathemticalInterface {

    public int operate(int a, int b) {
        return a * b;
    }

}

class DivideOperation implements MathemticalInterface {

    public int operate(int a, int b) {
        return a / b;
    }

}

public class LambdaExample {


    private static int calculate(int a, int b, MathemticalInterface interface1) {
        return interface1.operate(a, b);
    }


    public static void main(String[] args) {
        MathemticalInterface sumOperation = new SumOperation();
        int sum = calculate(5, 3, sumOperation);
//		

//		int sum = calculate(5, 3, (a, b) -> a + b);
//		System.out.println("Sum: " + sum);
//
//		int product = calculate(5, 3, (a, b) -> a * b);
//		System.out.println("Product: " + product);
//
//		int divide = calculate(5, 3, (a, b) -> a / b);
//		System.out.println("Divide: " + divide);
    }

}

-----------------------------------------------------------------

#)What are Method References?
A method reference is a shorthand or compact way to write lambda expressions that call an existing method.

✅ Syntax:
ClassName::methodName


🧩 Types of Method References:
Reference to a static method → ClassName::staticMethod
Reference to an instance method → object::instanceMethod
Reference to a constructor → ClassName::new

✅ Example:

import java.util.Arrays;
import java.util.List;

public class MethodReferenceExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Adarsh", "Ravi", "Sami");
        
        // Using lambda
        names.forEach(name -> System.out.println(name));

        // Using method reference
        names.forEach(System.out::println);
    }
}

----------------------------------------------------------------------
#) What are Lambda Expressions?

Lambda expressions are anonymous functions (functions without a name) introduced in
 Java 8 to make code shorter and more expressive — mainly for use with functional interfaces.
 1)without name
 2)Without modifier
 3)without return type

✅ Syntax:
(parameters) -> expression

#)without lambda 
public void sum(int a ,int b)
{
    sop(a+b);
}

-----------------
public int m1(String s)
{
    return s.length();
}
--------------

#)withLambda 
(int a , int b) ->{sop(a+b)}

1)single line ignore this brackets
() -> sop("hello")

-------------------------
(stirng s) -> {return s.length();}


2)if u have one line no need of retun type also
(stirng s) -> s.length();

3)if we have one argument  no need of mention type
s -> s.length();

--------------------------
(parameters) -> expression

parameters → input to the function
-> → separates parameters from the body
expression → what the function does








------------------------------------------------------------------------
Can you give an example of Lambda Expression?

✅ Example 1: Comparator with Lambda

import java.util.*;

public class LambdaExample {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Banana", "Apple", "Mango");

        // Lambda expression for sorting
        Collections.sort(list, (a, b) -> a.compareTo(b));

        list.forEach(System.out::println);
    }
}


---------------------------------------------------------------------------------
ask in interview
✅ Example 2: Functional Interface
functional interfaces — interfaces that have exactly one abstract method.
Functional interfaces are primarily used with lambda expressions
EX : below code we have  to use  annotation(@FunctionalInterface) then we adding two abstract it give compile time error
if we use two abstract method ti will compile time error

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

Shorter

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

Predicate<T> is a functional interface that represents a boolean-valued function of one argument.

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