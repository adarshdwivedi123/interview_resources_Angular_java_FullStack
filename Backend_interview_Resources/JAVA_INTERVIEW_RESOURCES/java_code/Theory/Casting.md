13. What is Casting in Java?
✅ Definition:

Casting in Java means converting one data type into another type.
It helps you assign a value of one type to a variable of another type.
It can be between primitive types or between objects in an inheritance relationship
There are two main types:


Implicit Casting (Widening) — done automatically

Explicit Casting (Narrowing) — done manually by the programmer

////
/// 
 14️⃣ What is Implicit Casting (Widening Casting)?

Definition:

Implicit casting happens automatically when a smaller data type is converted into a larger data type.
No explicit code is needed — it’s done by the compiler.

int num = 10;
double value = num; // implicit casting (int → double)
Happens automatically because there’s no data loss (double can hold int values safely).

Also known as widening conversion




/////////
/// 15️⃣ What is Explicit Casting (Narrowing Casting)?

Definition:

Explicit casting means manually converting one data type into another using a cast operator ( ).
It’s required when converting from a larger type to a smaller type, because data might be lost.

double value = 10.99;
int num = (int) value; // explicit casting (double → int)
System.out.println(num); // Output: 10
We used (int) to explicitly tell the compiler to convert.

Also called narrowing conversion because we’re going from a larger to a smaller range type.