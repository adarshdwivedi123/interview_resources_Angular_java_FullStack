#)What is ExecutorService?

1)In Java, the ExecutorService is used to manage and control multiple threads easily.
Instead of creating and starting threads manually, we just  create a thread pool and submit tasks to the ExecutorService, and it takes care of creating, running, and reusing threads for us.


For example, suppose I have 5 tasks to run.
Normally, I would create 5 threads manually — but with ExecutorService, I can create a thread pool of 2 or 3 threads and submit all 5 tasks.
The ExecutorService will automatically run 2–3 tasks at a time and reuse those threads for the remaining tasks.

-----------------------------------------------------------------------------------
Why use it?

Avoid manual thread creation.

Automatically reuse threads (better performance).

Easier to shut down and manage threads.

Handles asynchronous task execution.

----------------------------------------------------------------------------------------
#)Whats exactly concurrency ?
Concurrency is the ability of a system to manage multiple tasks simultaneously. It is essential for improving the performance and responsiveness of the system.

------------------------------------------------------------------------------------------

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorExample {
    public static void main(String[] args) {
        // Create a thread pool with 2 threads
        ExecutorService executor = Executors.newFixedThreadPool(2);

        // Submit tasks to the executor
        for (int i = 1; i <= 5; i++) {
            int taskId = i;
            executor.submit(() -> {
                System.out.println("Task " + taskId + " executed by " + Thread.currentThread().getName());
            });
        }

        // Shutdown the executor after tasks complete
        executor.shutdown();
    }
}

Task 1 executed by pool-1-thread-1
Task 2 executed by pool-1-thread-2
Task 3 executed by pool-1-thread-1
...

----------------------------------------------------------------

#)Explain different ways of creating executor services
“There are mainly four types of ExecutorServices:
1)FixedThreadPool → fixed number of threads
2)CachedThreadPool → creates new threads as needed
3)SingleThreadExecutor → runs tasks one by one
4)ScheduledThreadPool → runs tasks after delay or periodically”

------------------------------------------------------------------------
1️⃣ Fixed Thread Pool

Used when you want a fixed number of threads to run tasks.

✅ Example:

ExecutorService executor = Executors.newFixedThreadPool(3);
🟢 This will create 3 threads — if more tasks come, they’ll wait until a thread becomes free.
--------------------------------------------
📘 Use Case: When you know how many tasks will run at once (e.g., 3 background jobs).

🔹 2️⃣ Cached Thread Pool

Used when you have many short-lived tasks.
-----------------------------------

✅ Example:

ExecutorService executor = Executors.newCachedThreadPool();


🟢 This creates new threads as needed and reuses old ones when available.

📘 Use Case: When you have many small tasks that execute quickly (like handling client requests).

🔹 3️⃣ Single Thread Executor

Used when you want only one thread to execute all tasks sequentially (one by one).
--------------------------------------------------------------------------------------

✅ Example:

ExecutorService executor = Executors.newSingleThreadExecutor();


🟢 Only one thread runs — tasks are queued and executed one after another.

📘 Use Case: When you want tasks to execute in order (e.g., writing logs).

🔹 4️⃣ Scheduled Thread Pool

Used when you want to run tasks after a delay or periodically (like a timer).

-------------------------------------------------------------------------------------
✅ Example:

ScheduledExecutorService executor = Executors.newScheduledThreadPool(2);


🟢 You can schedule tasks using:

executor.schedule(() -> System.out.println("Task executed"), 5, TimeUnit.SECONDS);


📘 Use Case: For periodic jobs like sending emails or refreshing data every few minutes.

-------------------------------------------------------------------------
#) How do you check whether an executionservice task executed successfully?

When we submit a task to an ExecutorService, it returns a Future object.
We can use this Future to check whether the task was completed successfully, failed, or was cancelled.

“We can check if an ExecutorService task completed successfully by using the Future object returned by submit(). If future.isDone() is true and no exception occurs in future.get(), the task ran successfully.”

import java.util.concurrent.*;

public class CheckTaskStatusExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newSingleThreadExecutor();

        // Submit a task
        Future<String> future = executor.submit(() -> {
            Thread.sleep(1000);
            return "Task Completed Successfully!";
        });

        try {
            // Check if task is done
            if (!future.isDone()) {
                System.out.println("Task is still running...");
            }

            // Get the result (waits until task finishes)
            String result = future.get();
            System.out.println(result);  // ✅ Success output

        } catch (InterruptedException | ExecutionException e) {
            System.out.println("Task failed: " + e.getMessage());
        } finally {
            executor.shutdown();
        }
    }
}

---------------------------------------------------------------

#)What is Callable?

Callable is an interface in Java that is similar to Runnable, but it can return a result and throw a checked exception.

Simple Interview Answer:
“Callable is similar to Runnable but can return a result and throw a checked exception.
We execute a Callable by submitting it to an ExecutorService using the submit() method, which returns a Future object.
We can then call future.get() to get the result once the task finishes.”

🔹 Example One-liner for Interview:

“Callable returns a value, Runnable doesn’t.
We run Callable using executor.submit(callable) and get the result using future.get().”



import java.util.concurrent.*;

public class CallableExample {
    public static void main(String[] args) throws Exception {
        // Create ExecutorService
        ExecutorService executor = Executors.newSingleThreadExecutor();

        // Create a Callable task
        Callable<String> task = () -> {
            Thread.sleep(1000);
            return "Task Completed by " + Thread.currentThread().getName();
        };

        // Submit Callable to ExecutorService
        Future<String> future = executor.submit(task);

        // Get the result
        String result = future.get(); // waits for task to finish
        System.out.println(result);

        // Shutdown executor
        executor.shutdown();
    }
}





-----------------------------------------------------------------------------------------
🔹 Key Differences between Runnable and Callable
Feature 	    Runnable	                        Callable
Return value	No (void)	                        Yes (returns a value)
Exception	    Cannot throw checked exceptions 	Can throw checked exceptions
Method name	    run()	                            call()

