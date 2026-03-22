vector
“Vector is a List implementation that is synchronized (thread-safe).”

1)Maintains order ✅
2)Allows duplicates ✅
3)Thread-safe (synchronized) ✅
Vector is similar to ArrayList but synchronized

Vector<String> list = new Vector<>();
list.add("A");
list.add("B");
list.add("A");

System.out.println(list);