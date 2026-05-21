equals() checks actual content/value.
"== is an operator that compares references

“== compares object references,
 while equals() compares object values/content.”
 
String a = new String("Hello");
String b = new String("Hello");

System.out.println(a.equals(b)); //true
System.out.println(a == b);   false


========================================
String s1 = "hello";
String s2 = "hello";

String s3 = new String("hello");
String s4 = new String("hello");

System.out.println(s1 == s2);         // true  (string pool)
System.out.println(s3 == s4);         // false (new objects)
System.out.println(s1 == s3);         // false (pool vs heap)

System.out.println(s1.equals(s2));    // true
System.out.println(s3.equals(s4));    // true
System.out.println(s1.equals(s3));    // true
========================================
String a = "Java";
String b = "Java";
System.out.println(a == b);
Output:

true

Because Java stores string literals in the String Pool.
Both references point to same memory.


====================================================================



== compares memory/address.
.equals() compares values.



🔸 1. What is equals() in Java?
The equals() method is defined in the java.lang.Object class,
 which is the parent of all Java classes. It is used to compare two objects for logical equality, 
 rather than reference equality.

 #)What is equals() in Java?
The equals() method is used to compare two objects in Java to check if they are “equal” in content (not memory).

Example
 String s1 = new String("Adarsh");
        String s2 = new String("Adarsh");

        String s3 ="Adarsh";
        String s4 ="Adarsh";
        System.out.println(s1 == s2);      // false (different memory)
        System.out.println(s3 == s4);      // (different memory)true
        System.out.println(s1.equals(s2));


#)30 . What are the important things to consider when implementing equals method?
When overriding equals(), always check for null, type, and compare only important fields that define equality.
and always override hashCode() along with it.


#)What is hashCode()?
It returns an integer value (the hash code) that represents the memory address or identity of an object in a simplified way.
Its main use is in hash-based collections like HashMap, HashSet, and HashTable.

