
#)StringBuffer Class
-> StringBuffer class is used to create a mutable string object. It means, it
can be changed after it is created.
-> StringBuffer class is used when we have to make lot of modifications to
our string.
-> It is also thread safe i.e multiple threads cannot access it
simultaneously


#)StringBuilder class
-> StringBuilder is identical to StringBuffer except for one important
difference that it is not synchronized, which means it is not thread safe.
-> StringBuilder also used for creating string object that is mutable and non synchronized.


Note:
-> When we want a mutable String without thread-safety then
StringBuilder should be used
-> When we want a mutable String with thread-safety then StringBuffer
should be used
-> When we want an Immutable object then String should be used.


---------------------------------------------------------------------------

#)What is StringBuilder?

StringBuilder is a mutable sequence of characters.

Unlike String, you can modify the contents (append, insert, delete, etc.) without creating new objects.

It’s not thread-safe, meaning if multiple threads access and modify the same StringBuilder object without synchronization, 
it can lead to unpredictable results or data corruption.

s
public class ThreadUnsafeExample {
    public static void main(String[] args) {
        StringBuilder sharedBuilder = new StringBuilder("Hello");

        Runnable task = () -> {
            sharedBuilder.append(" World");
            System.out.println(sharedBuilder.toString());
        };

        Thread t1 = new Thread(task);
        Thread t2 = new Thread(task);

        t1.start();
        t2.start();
    }
}


----------------------------------------------------------------------

