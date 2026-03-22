which one is best  option,using hashMap inside Collection.synchronizedMap() or
concurrentHashMap()?

--------------------------------------------------------------------------
ConcurrentHashMap is better option?

Becoz Collection.synchronizedMap() locks the entire map when one thread used it .other threads must
wait .slower when many threads are working

whereas CouncurrentHashMap allows muliple threads to work at the same time.Locks only a smart part internally not the whole map.