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

------------------------------------------------------------
 Benfit of lambda
 1)Less Code, More Readability
 2)Better for Streams API
 3)Helps in Functional Programming (Java 8+)
Lambdas allow Java to behave like modern functional languages.
Example:
list.forEach(item -> System.out.println(item));

✔ No loops
✔ No iterator
✔ Clean and functional
 3)Eliminates Boilerplate Code
 4)Easy to Use With Functional Interfaces   
 Comparator<Integer> c = (a, b) -> a.compareTo(b);

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

