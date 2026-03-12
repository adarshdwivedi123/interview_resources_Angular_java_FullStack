#)Wrapper Classes:

Wrapper classes in Java are used to convert primitive types into objects.
They are useful when working with Collections, since collections store only objects.

For example, int becomes Integer, double becomes Double.
Java also provides autoboxing and unboxing to automatically handle this conversion.”


List of Wrapper Classes
Primitive Type	Wrapper Class
byte	Byte
short	Short
int	Integer
long	Long
float	Float
double	Double
char	Character
boolean	Boolean

1)AutoBoxing → automatically converting primitive → object
int x = 5;
Integer y = x; // autoboxing

2)UnBoxing → automatically converting object → primitive
Integer a = 10;
int b = a; // unboxing
#). Why do we need Wrapper classes in Java?
Wrapper classes provide a way to use primitive data types (int, char, etc.) as objects.
This is important because many Java frameworks and libraries, such as Collections, work only with objects and not with primitive types.



#)Many Java frameworks and APIs (like Collections, Generics, etc.) work only with objects, not primitive types.
List<int> list = new ArrayList<>();   // ❌ Not allowed
List<Integer> list = new ArrayList<>(); // ✅ Works fine

#)2. For Autoboxing and Unboxing
Wrapper classes allow automatic conversion between primitives and their wrapper objects.

int a = 10;
Integer b = a;   // Autoboxing (int → Integer)
int c = b;       // Unboxing (Integer → int)
So you don’t need to manually convert types anymore.



3. To use utility methods in Wrapper classes
Wrapper classes provide helpful methods for conversions and parsing.
✅ Example:
int num = Integer.parseInt("123"); // Convert String to int
String str = Integer.toString(456); // Convert int to String


4. To store null values
Primitive types cannot be null, but wrapper objects can.
✅ Example:
Integer age = null; // valid
int age = null;     // ❌ error




#)What are the different ways of creating Wrapper Class instances in Java?
There are three main ways to create wrapper class objects for primitive types.

Before Java 9, you could create wrapper objects using constructors, 
but this approach is deprecated because it always creates a new object (less efficient).

1. Using Constructor
   ✅ Example:
   Integer intObj = new Integer(5);
   Double doubleObj = new Double(5.5);

2. Using valueOf() Method (Preferred Way)
    The valueOf() method is the recommended and efficient way to create wrapper instances.
    It uses caching for frequently used values (like Integer values from -128 to +127).
    
    Using Static Factory Methods
   ✅ Example:
   Integer intObj = Integer.valueOf(5);
   Double doubleObj = Double.valueOf(5.5);
  👉 This is memory-efficient because it may return a cached object instead of creating a new one.

Introduced in Java 5, autoboxing automatically converts primitives to wrapper objects.
3. Using Autoboxing
   ✅ Example:
   int primitiveInt = 10;
   Integer wrapperInt = primitiveInt; // Autoboxing
   This is the most common and clean approach in modern Java code.
   You can also create wrapper objects from String inputs using valueOf() or parseXXX() methods.
✅ Example:
Integer i4 = Integer.valueOf("100");   // Wrapper object
int num = Integer.parseInt("100");   


////////////////////////////////////////
#)What is Integer Caching in Java?
✅ Answer:

Java caches Integer objects in the range -128 to +127 to save memory and improve performance.
So if you create two Integer objects with values in this range, they point to the same memory reference.

🔹 Example:
Integer a = 100;
Integer b = 100;
System.out.println(a == b); // true (same cached object)

Integer x = 200;
Integer y = 200;
System.out.println(x == y); // false (different objects)
200 is outside the cache range (which is only -128 to +127).

-------------------------------------------------------------------------------------------------
Advantagr Of autoboxing

//////////////////////////////////////
/// Advantages of Autoboxing:

Simplifies code:
You don’t need to manually convert between primitives and wrapper classes using methods like Integer.valueOf() or intValue().
→ Less boilerplate, cleaner code.

List<Integer> list = new ArrayList<>();
list.add(10); // autoboxing automatically converts int to Integer


#)Makes use of Collections and Generics:
Java Collections (like ArrayList, HashMap) can only store objects, not primitives.
Autoboxing lets us easily use primitive values with these classes.

List<Double> marks = new ArrayList<>();
marks.add(85.5); // double → Double automatically


#)Improves readability and maintainability:
Since the conversions happen automatically, the code looks cleaner and is easier to maintain.

Smooth integration with APIs:
When working with frameworks or APIs that expect objects, autoboxing allows seamless integration between primitives and objects without extra conversion code.




or
////////////////////////////////
1. Simplifies Code (Less Boilerplate)
Before Java 5, you had to manually convert primitives to objects.

int a = 10;
Integer b = Integer.valueOf(a);
With Autoboxing:
java
Copy code
Integer b = a; // automatically converted
➡️ Cleaner, shorter, and more readable code.

////////////////////////////////////////////////////////////////////////////////////////////
/// 2. Easy Use with Collections and Generics

Collections like ArrayList, HashMap, etc., cannot store primitive types — only objects.

✅ With Autoboxing:

List<Integer> list = new ArrayList<>();
list.add(10); // Automatically converts int → Integer
int num = list.get(0); // Unboxing (Integer → int)
➡️ Makes it easy to work with collections of primitive values.
///////////////////////

🟩 3. Improves Code Readability and Maintenance

Developers can focus on logic instead of worrying about conversions between primitives and wrappers.

✅ Example:

Map<Integer, String> map = new HashMap<>();
map.put(1, "Adarsh"); // int automatically boxed to Integer
/////////////////////////////////////////////////////////////////////////////////////

🟩 4. Integrates Primitives and Objects Seamlessly
Autoboxing allows primitives to work smoothly with Java’s object-oriented features,
such as method overloading, polymorphism, and APIs expecting objects.

✅ Example:

Integer result = add(5, 10); // int values boxed automatically

public static Integer add(Integer a, Integer b) {
    return a + b; // unboxed, added, and re-boxed automatically
}
///////////////////////////////////////////////////////////////////////////////
🟩 5. Useful in Frameworks (like Spring, Hibernate, etc.)

Many frameworks depend on object types rather than primitives,
so autoboxing makes them easier to integrate without manual conversion.