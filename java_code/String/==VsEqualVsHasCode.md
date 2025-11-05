🔸 1. What is equals() in Java?
The equals() method is defined in the java.lang.Object class,
 which is the parent of all Java classes. It is used to compare two objects for logical equality, 
 rather than reference equality.

 #)What is equals() in Java?
The equals() method is used to compare two objects in Java to check if they are “equal” in content (not memory).

Example
String s1 = new String("Adarsh");
String s2 = new String("Adarsh");

System.out.println(s1 == s2);      // false (different memory)
System.out.println(s1.equals(s2)); // true (same content)



#)30 . What are the important things to consider when implementing equals method?
When overriding equals(), always check for null, type, and compare only important fields that define equality.
and always override hashCode() along with it.


#)What is hashCode()?
It returns an integer value (the hash code) that represents the memory address or identity of an object in a simplified way.
Its main use is in hash-based collections like HashMap, HashSet, and HashTable.

