What is Thread?
#)A thread is the smallest unit of execution within  in a program.
#)When you run a Java program, there is at least one thread —
the main thread, which executes your main() method.
#)Every program starts with at least one thread — called the main thread — but you can create additional threads to run tasks concurrently.


Why do we need threads?
1. Concurrency (Doing multiple tasks at once)
Threads let a program perform multiple operations simultaneously.
Example:

A web browser can:
Download files (thread 1)
Render the web page (thread 2)
Handle user input (thread 3)
Without threads, each of those tasks would have to wait for the previous one to finish.

------------------------------------------------------------------------------------
2. Improved Responsiveness

Threads keep applications responsive.
Example:
In a game or GUI app, if a long operation (like saving a file) runs on the main thread, the app might “freeze.”

By moving that operation to another thread, the UI remains responsive to user actions.

------------------------------------------------------------------------------------------
3. Better CPU Utilization

Modern CPUs have multiple cores.
Threads allow programs to use multiple cores effectively, running different threads on different cores for true parallelism and faster performance.

---------------------------------------------------------------------------------------------
187 . How do you create a thread by extending thread class?
188 . How do you create a thread by implementing runnable interface?

----------------------------------------------------------------------------------


#)Two ways to crete thread 
1)By Extending thread class
2)By Implmenting the runnable interfaces.

187. How do you create a thread by extending the Thread class?

✅ Explanation:
You can create a thread by extending the Thread class and overriding the run() method.
The run() method contains the code that will execute in the new thread.

✅ Example:

class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running: " + Thread.currentThread().getName());
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start(); // starts the thread (calls run() internally)
    }
}


📘 Key Point:

Always call start(), not run().

start() creates a new thread and calls run() internally.
-------------------------------------------------------------------------------
188. How do you create a thread by implementing the Runnable interface?

✅ Explanation:
Instead of extending Thread, you can implement the Runnable interface.
This is preferred when your class already extends another class (since Java doesn’t support multiple inheritance).

✅ Example:

class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Thread running: " + Thread.currentThread().getName());
    }
}

public class RunnableExample {
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable());
        t1.start();
    }
}
Here in above program we runnable interface ke andar start method hai nhi .that why  i also create thread and t1.start() .becoz therad ke andar start() methoid  hai


📘 Preferred way: Using Runnable because it provides better design flexibility.
----------------------------------------------------------------------------------------
189. How do you run a thread in Java?

✅ Explanation:
A thread is started by calling the start() method, not run().

✅ Example:

MyThread t1 = new MyThread();
t1.start();  // Correct way — starts a new thread


❌ Incorrect:

t1.run();  


----------------------------------------------------------------------
Important Thread Methods in Java
1️⃣ start()

Purpose: Starts the thread and calls its run() method internally.

Thread t = new Thread(() -> System.out.println("Thread running"));
t.start(); // NOT t.run()


💡 Note: Always use start(), not run(). Calling run() directly executes in the same thread.

2️⃣ run()

Purpose: Contains the code executed by the thread.
Called automatically by start().

Thread t = new Thread(() -> System.out.println("Inside run"));
t.start(); // run() is executed internally

3️⃣ join()

Purpose: Makes the current thread wait until the target thread finishes.

t.join(); // Main thread waits for t to complete

4️⃣ sleep(long millis)

Purpose: Pauses the current thread for the specified milliseconds.

Thread.sleep(1000); // pauses thread for 1 second


💡 Note: sleep() does not release any locks.

5️⃣ yield()

Purpose: Suggests to the thread scheduler that the current thread is willing to pause and let other threads execute.

Thread.yield();


💡 Note: It’s just a hint — the scheduler may ignore it.

------------------------------------------------------



Thread.yield()
💬 Purpose (Simple Explanation):

yield() is a static method of the Thread class that tells the thread scheduler:
“I am willing to pause and let other threads of the same priority run.”

It does not guarantee that the current thread will pause.

It’s just a hint to the scheduler.

The thread may continue immediately if no other threads are ready.

✅ Example: Using yield()
class YieldExample {
    public static void main(String[] args) {
        Runnable task = () -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println(Thread.currentThread().getName() + " : " + i);
                
                // Suggest to scheduler to give other threads a chance
                Thread.yield();
            }
        };

        Thread t1 = new Thread(task, "Thread-1");
        Thread t2 = new Thread(task, "Thread-2");

        t1.start();
        t2.start();
    }
}


-------------------------------------------------------

6️⃣ setPriority(int p) / getPriority()

Purpose: Sets or gets the thread’s priority (1 to 10).

t.setPriority(Thread.MAX_PRIORITY);
System.out.println(t.getPriority());


💡 Note: Priority is just a hint to the scheduler, not guaranteed execution order.

7️⃣ isAlive()

Purpose: Checks whether the thread is still running.

System.out.println(t.isAlive()); // true if thread has started and not finished

8️⃣ interrupt() / isInterrupted()

Purpose: Interrupts a thread or checks if it has been interrupted.

t.interrupt();          // send interrupt signal
System.out.println(t.isInterrupted()); // check if interrupted


💡 Note: Often used to stop a thread gracefully.

----------------------------------------------------------------------------
#)Important Methods in Java for Inter-Thread Communication
💬 Simple Explanation:

Inter-thread communication is when threads coordinate with each other by sending signals about resource availability.
It helps avoid busy waiting and improves efficiency.


#)Thease Method are uswd in inter thread communciationa

1. wait()
💬 Simple Explanation:

Makes the current thread wait until another thread signals it.

Must be called inside a synchronized block.

Thread releases the lock on the object while waiting.

🧩 2. notify()
💬 Simple Explanation:

Wakes up one thread that is waiting on the same object.

The awakened thread will resume execution after it reacquires the lock.

🧩 3. notifyAll()
💬 Simple Explanation:

Wakes up all threads that are waiting on the same object.

Threads compete to acquire the lock and continue execution one by one.

Interview Line:

“Threads communicate using wait(), notify(), and notifyAll().
wait() makes a thread wait, notify() wakes up one waiting thread, and notifyAll() wakes all waiting threads. They must be used inside a synchronized block.”


-------------------------------------------------------------------------------

Example: Producer-Consumer (Simple Version)
class SharedResource {
    int data;
    boolean available = false;

    // Producer puts data
    synchronized void produce(int value) {
        while (available) {
            try { wait(); } catch (InterruptedException e) {}
        }
        data = value;
        available = true;
        System.out.println("Produced: " + data);
        notify(); // wake up consumer
    }

    // Consumer gets data
    synchronized int consume() {
        while (!available) {
            try { wait(); } catch (InterruptedException e) {}
        }
        available = false;
        System.out.println("Consumed: " + data);
        notify(); // wake up producer
        return data;
    }
}

public class WaitNotifyExample {
    public static void main(String[] args) {
        SharedResource resource = new SharedResource();

        // Producer Thread
        Thread producer = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                resource.produce(i);
            }
        });

        // Consumer Thread
        Thread consumer = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                resource.consume();
            }
        });

        producer.start();
        consumer.start();
    }
}

🧠 Explanation:

wait()

If the producer finds available = true (consumer hasn’t consumed yet), it waits and releases the lock.

Same for consumer if available = false.

notify()

After producing, the producer calls notify() to wake up the consumer.

After consuming, the consumer calls notify() to wake up the producer.

notifyAll() (if used instead of notify())

Wakes up all threads waiting on the object.

Useful if multiple producers or consumers are waiting.

---------------------------------
Example: Producer-Consumer (Simple Version)
class SharedResource {
    int data;
    boolean available = false;

    // Producer puts data
    synchronized void produce(int value) {
        while (available) {
            try { wait(); } catch (InterruptedException e) {}
        }
        data = value;
        available = true;
        System.out.println("Produced: " + data);
        notify(); // wake up consumer
    }

    // Consumer gets data
    synchronized int consume() {
        while (!available) {
            try { wait(); } catch (InterruptedException e) {}
        }
        available = false;
        System.out.println("Consumed: " + data);
        notify(); // wake up producer
        return data;
    }
}

public class WaitNotifyExample {
    public static void main(String[] args) {
        SharedResource resource = new SharedResource();

        // Producer Thread
        Thread producer = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                resource.produce(i);
            }
        });

        // Consumer Thread
        Thread consumer = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                resource.consume();
            }
        });

        producer.start();
        consumer.start();
    }
}

🧠 Explanation:

wait()

If the producer finds available = true (consumer hasn’t consumed yet), it waits and releases the lock.

Same for consumer if available = false.

notify()

After producing, the producer calls notify() to wake up the consumer.

After consuming, the consumer calls notify() to wake up the producer.

notifyAll() (if used instead of notify())

Wakes up all threads waiting on the object.

Useful if multiple producers or consumers are waiting.

💡 Interview Line (Simple):

“wait() makes a thread pause and release the lock until another thread signals it.
notify() wakes up one waiting thread, and notifyAll() wakes up all waiting threads. They must be used inside a synchronized block.”