n R*R B T
Thread LifeCycle
A thread life cycle means the different stages a thread goes through — from creation to completion.

Thread  test1 =new Thread(); jb ye lin leikhte
1)New /born stage     ///When the thread is created but not started (new Thread())
2) t1.start();
Ready or runnable stage me hot ahai
3)Runnning   When the thread is ready to run or runnin

4)if run completed 
then thread  dead oh jata  hai.
--------------------------------------------------------
1. New (Born State)
When a thread object is created but not yet started.
It hasn’t begun executing the run() method yet.

🧩 Example:
Thread t = new Thread();
At this point, the thread is New.
----------------------------------------------------------
🏁 2. Runnable (Ready to Run)

When you call start(), the thread becomes runnable.
It’s ready to run, waiting for CPU time.
The thread scheduler decides when it actually runs.

🧩 Example:
t.start();
Now the thread is in the Runnable state.
-----------------------------------------------------
⚙️ 3. Running

When the thread is actually executing its run() method.
CPU has picked it to execute.

🧩 Example:
public void run() {
    System.out.println("Thread is running...");
}

Now it’s in Running state.
--------------------------------------------------------

⏸️ 4. Blocked / Waiting / Sleeping

A thread goes into this state when:
It’s waiting for another thread to complete (join()), or
It’s sleeping for a few seconds (sleep()), or
It’s blocked while waiting for I/O or a lock.
🧩 Example:
Thread.sleep(1000); // Thread is sleeping (temporarily inactive)
During this time, it temporarily stops executing.
-------------------------------------------------------------------------

🏁 5. Terminated (Dead)
Once the run() method completes, the thread is terminated.
It cannot be restarted again.
🧩 Example:
System.out.println("Thread finished its work.");
Now the thread is dead — end of its life cycle.