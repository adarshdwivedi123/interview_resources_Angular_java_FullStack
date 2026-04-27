Deloitte me nhi bta paya tha?
which one is best  option,using hashMap inside Collection.synchronizedMap() or
concurrentHashMap()?

--------------------------------------------------------------------------
ConcurrentHashMap is better option?

1)synchronizedMap

👉 “It makes a normal map thread-safe by using one lock, so only one thread can use it at a time.”

Synchronized" usually means you're locking access to a resource so only one thread can use it at a time—this could be done with a synchronized method or block,

2)Becoz Collection.synchronizedMap() locks the entire map when one thread used it .other threads must
wait .slower when many threads are working
Suppose 3 threads are working:
Thread T1 → put("A", 1)
Thread T2 → get("A")
Thread T3 → put("B", 2)

👉 What happens?

T1 starts → 🔒 locks full map
T2 tries → ❌ waits
T3 tries → ❌ waits

👉 Only one thread works at a time

💥 Slow performance


----------------------------------------------------------------------------------------------------
ConcurrentHashMap

👉 “It is a thread-safe map where multiple threads can work at the same time, so it is faster and better for performance.”
whereas CouncurrentHashMap allows muliple threads to work at the same time.Locks only a smart part internally not the whole map.


or
A concurrent collection, like ConcurrentHashMap, is designed for multiple threads to work at the same time. It uses fine-grained locking or other techniques so multiple threads can read and write in parallel.


Example
“synchronizedMap is like a single-door room — only one person can enter at a time.
ConcurrentHashMap is like a building with multiple rooms — many people can work simultaneously.”

🔥 Interviewers LOVE this explanation.



“Also, ConcurrentHashMap does not allow null keys/values to avoid ambiguity in concurrent scenarios.”