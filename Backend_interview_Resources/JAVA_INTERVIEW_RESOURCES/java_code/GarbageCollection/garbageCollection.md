#)Garbage collection?

->In java, garbage means unreferenced objects.

->In Java, Garbage Collection (GC) is the process of automatically freeing up memory 
    by removing objects that are  not referenced by any variable
->Helps prevent memory leaks.

 ->Best practices include 
 1)nullifying references, 
 2)avoiding unnecessary objects,
 3)try-with-resources, 
4)and monitoring memory usage.”

#)How can be object unReferenced?
1) By nulling a reference:
Employee e=new Employee();  
e=null;  

2) By assigning a reference to another:
Employee e1=new Employee();  
Employee e2=new Employee();  
e1=e2;//now the first object referred by e1 is available for garbage collection  

3) By anonymous object:
new Employee();  

An object without any reference variable.
That means you create the object using new keyword but do NOT store it in a variable.

⭐ Simple Example
new Employee().display();


Here:

new Employee() → object created

.display() → method called

No reference variable like Employee e = ... → so it is an anonymous object


---------------------------------------




#)“Garbage Collection is JVM’s automatic memory management process that removes unreachable objects.
It runs when objects are no longer referenced or memory is low.


#)Aim of Garbage
Collection is to Keep as much of heap available (free) for the program as possible. JVM removes objects
on the heap which no longer have references from the heap.

---------------------------------------------------------
#)When is Garbage Collection Run?

GC is automatic and JVM decides when to run it, usually:

When the JVM needs memory for new objects.
When objects are no longer referenced.

Low memory situations (heap space is running out).

You cannot predict the exact time — System.gc() is just a suggestion, not a guarantee.

--------------------------------------------------------------------------------------------------
121. Best Practices on Garbage Collection

Here are interview-friendly best practices:

#)Null references when done
obj = null; // Makes object eligible for GC

#)Avoid creating unnecessary objects
#)Reuse objects where possible to reduce GC load.
#)Use local variables
Objects in method scope are automatically eligible when method ends.
#)Use try-with-resources for I/O objects

Automatically closes resources and makes them eligible for GC faster.

Avoid overriding finalize() unnecessarily

It slows GC. Use AutoCloseable or try-with-resources.

Monitor memory usage

Use profiling tools like VisualVM, JConsole, or JProfiler.

Use appropriate data structures

Large collections with unnecessary references prevent GC.

------------------------------------------------------------------------------

GC identifies which objects are reachable and which are not reachable.

Reachable → keep
Not reachable → delete

2️⃣ Deletion / Sweeping

GC removes the unreachable objects from heap memory.

---------------------------------------------------------------------------------------

#)What	are	Initialization	Blocks?
Initialization Blocks - Code which runs when an object is created or a class is loaded

There are two types of Initialization Blocks
Static Initializer: Code that runs when a class is loaded.
Instance Initializer: Code that runs when a new object is created.
---------------------------------------------------------------------------------
What are Initialization Blocks?

Initialization blocks in Java are blocks of code inside a class that are used to initialize data members.
They come in two types:

Static Initialization Block (Static Initializer)

Instance Initialization Block (Instance Initializer)

✅ They help perform initialization outside of constructors.

⚙️ 123. What is a Static Initializer?

A static initializer block (or static block) runs once, when the class is loaded into memory by the JVM.

Used for:

Initializing static variables

Performing one-time setup (like database config, constants, etc.)

🔹 Example:
class StaticExample {
    static int count;

    static {
        count = 100;
        System.out.println("Static block executed. Count = " + count);
    }

    public static void main(String[] args) {
        System.out.println("Main method executed");
    }
}


Output:

Static block executed. Count = 100
Main method executed


✅ Key Points:

Runs before main() and only once per class.

Can only access static members directly.

⚙️ 124. What is an Instance Initializer Block?

An instance initializer block (IIB) is a block of code that runs every time an object is created, before the constructor is executed.

Used for:

Common initialization logic shared by all constructors.

Useful when multiple constructors exist and share some setup code.

🔹 Example:
class InstanceExample {
    {
        System.out.println("Instance initializer block executed");
    }

    InstanceExample() {
        System.out.println("Constructor executed");
    }

    public static void main(String[] args) {
        InstanceExample obj1 = new InstanceExample();
        InstanceExample obj2 = new InstanceExample();
    }
}


Output:

Instance initializer block executed
Constructor executed
Instance initializer block executed
Constructor executed


✅ Explanation:

The instance block runs each time an object is created.

It runs before the constructor.

🧠 Order of Execution (Very Common Interview Question)

When you run a Java class:

Static blocks → run once when class loads.

Main method → runs next.

Instance block(s) → run every time an object is created.

Constructor → runs after instance block.

🔹 Example Showing Order
class OrderDemo {
    static {
        System.out.println("1️⃣ Static block");
    }

    {
        System.out.println("2️⃣ Instance block");
    }

    OrderDemo() {
        System.out.println("3️⃣ Constructor");
    }

    public static void main(String[] args) {
        System.out.println("➡ Main method");
        new OrderDemo();
        new OrderDemo();
    }
}


Output:

1️⃣ Static block
➡ Main method
2️⃣ Instance block
3️⃣ Constructor
2️⃣ Instance block
3️⃣ Constructor


✅ Explanation:

Static block → executes once when the class is loaded.

Instance block → executes before constructor each time an object is created.




-----------------------------------------------------------------------------
Interview One-Liner Answers

Initialization blocks: Code blocks used to initialize variables (static or instance).

Static initializer: Runs once when the class is loaded; used for static variable initialization.

Instance initializer block: Runs every time an object is created; used for object setup before the constructor.


---------------------------------------------------------------------------
What is Tokenizing?

Tokenizing means breaking a string into smaller parts called “tokens” based on a delimiter (like space, comma, tab, etc.).

Each token is a meaningful piece of data — for example, a word, number, or symbol.
import java.util.StringTokenizer;

public class TokenExample {
    public static void main(String[] args) {
        String str = "Java is fun to learn";
        
        // Tokenize using space as delimiter
        StringTokenizer st = new StringTokenizer(str, " ");
        
        while (st.hasMoreTokens()) {
            System.out.println(st.nextToken());
        }
    }
}
