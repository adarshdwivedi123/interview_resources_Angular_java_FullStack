#)What is a Deadlock?
💬 Simple Explanation:

#)A deadlock occurs when two or more threads are blocked forever, each waiting for a resource held by the other.
Neither thread can proceed, and the program is stuck.

Key Points:

Happens in multi-threading when threads lock resources in different orders.

Usually involves synchronized blocks/methods.

✅ Example of Deadlock
class Resource {
    String name;
    Resource(String name) { this.name = name; }
}

public class DeadlockExample {
    public static void main(String[] args) {
        Resource r1 = new Resource("R1");
        Resource r2 = new Resource("R2");

        // Thread 1 tries to lock r1 then r2
        Thread t1 = new Thread(() -> {
            synchronized (r1) {
                System.out.println("Thread-1 locked R1");
                try { Thread.sleep(500); } catch (InterruptedException e) {}
                synchronized (r2) {
                    System.out.println("Thread-1 locked R2");
                }
            }
        });

        // Thread 2 tries to lock r2 then r1
        Thread t2 = new Thread(() -> {
            synchronized (r2) {
                System.out.println("Thread-2 locked R2");
                try { Thread.sleep(500); } catch (InterruptedException e) {}
                synchronized (r1) {
                    System.out.println("Thread-2 locked R1");
                }
            }
        });

        t1.start();
        t2.start();
    }
}


Output Example (may freeze due to deadlock):

Thread-1 locked R1
Thread-2 locked R2
// Program stuck here (both threads waiting for each other)