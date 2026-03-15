1. Filter Even Numbers from List
Question

Find even numbers from a list using Stream.

import java.util.*;

class Test {
    public static void main(String[] args) {

        List<Integer> list = Arrays.asList(1,2,3,4,5,6);

        list.stream()
            .filter(n -> n % 2 == 0)
            .forEach(System.out::println);
    }
}

Output

2
4
6
2. Square of Each Number
Question

Print square of numbers using map().

import java.util.*;

class Test {
    public static void main(String[] args) {

        List<Integer> list = Arrays.asList(1,2,3,4);

        list.stream()
            .map(n -> n*n)
            .forEach(System.out::println);
    }
}

Output

1
4
9
16
3. Remove Duplicate Elements
Question

Remove duplicates from list.

import java.util.*;

class Test {
    public static void main(String[] args) {

        List<Integer> list = Arrays.asList(1,2,2,3,3,4);

        list.stream()
            .distinct()
            .forEach(System.out::println);
    }
}

Output

1
2
3
4
4. Sort Numbers
Question

Sort list using Stream.

import java.util.*;

class Test {
    public static void main(String[] args) {

        List<Integer> list = Arrays.asList(5,3,1,4,2);

        list.stream()
            .sorted()
            .forEach(System.out::println);
    }
}

Output

1
2
3
4
5
5. Find Maximum Number
Question

Find maximum element from list.

import java.util.*;

class Test {
    public static void main(String[] args) {

        List<Integer> list = Arrays.asList(10,20,5,40,15);

        int max = list.stream()
                      .max(Integer::compare)
                      .get();

        System.out.println(max);
    }
}

Output

40
Important Stream Methods (Interview)
Method	Use
filter()	Filter data
map()	Transform data
distinct()	Remove duplicates
sorted()	Sort elements
collect()	Convert to list
count()	Count elements
max()	Maximum element
min()	Minimum element
Very Common Interview Question

Find sum of numbers using stream

List<Integer> list = Arrays.asList(1,2,3,4);

int sum = list.stream()
              .reduce(0, Integer::sum);

System.out.println(sum);

Output

10

If you want, I can also show 10 advanced Java Stream interview questions like:

Group employees by department

Find second highest number

Count frequency of characters

Find longest string

These are very frequently asked in 3–5 year experience interviews.

yes

Great 👍 Here are 10 advanced Java Stream interview questions with simple examples. These are often asked in 3–5 years experience interviews.

1. Find Second Highest Number
import java.util.*;

class Test {
    public static void main(String[] args) {

        List<Integer> list = Arrays.asList(10,20,30,40,50);

        int secondHighest = list.stream()
                .sorted(Comparator.reverseOrder())
                .skip(1)
                .findFirst()
                .get();

        System.out.println(secondHighest);
    }
}

Output

40
2. Count Frequency of Characters
import java.util.*;
import java.util.stream.*;

class Test {
    public static void main(String[] args) {

        String str = "hello";

        Map<Character, Long> map =
                str.chars()
                .mapToObj(c -> (char)c)
                .collect(Collectors.groupingBy(
                        c -> c,
                        Collectors.counting()
                ));

        System.out.println(map);
    }
}

Output

{h=1, e=1, l=2, o=1}
3. Find Longest String
List<String> list = Arrays.asList("java","springboot","api","microservice");

String longest = list.stream()
        .max(Comparator.comparing(String::length))
        .get();

System.out.println(longest);

Output

microservice
4. Convert List to Map
List<String> list = Arrays.asList("A","B","C");

Map<String,Integer> map =
        list.stream()
        .collect(Collectors.toMap(
                s -> s,
                s -> s.length()
        ));

System.out.println(map);

Output

{A=1, B=1, C=1}
5. Group Employees by Department
Map<String, List<Employee>> map =
employees.stream()
        .collect(Collectors.groupingBy(Employee::getDepartment));

Output example

IT -> [emp1, emp2]
HR -> [emp3]
6. Find Duplicate Elements
List<Integer> list = Arrays.asList(1,2,3,2,4,1,5);

Set<Integer> set = new HashSet<>();

list.stream()
    .filter(n -> !set.add(n))
    .forEach(System.out::println);

Output

2
1
7. Find First Non-Repeating Character
String str = "swiss";

Character ch = str.chars()
        .mapToObj(c -> (char)c)
        .collect(Collectors.groupingBy(
                c -> c,
                LinkedHashMap::new,
                Collectors.counting()))
        .entrySet()
        .stream()
        .filter(e -> e.getValue() == 1)
        .findFirst()
        .get()
        .getKey();

System.out.println(ch);

Output

w
8. Join Strings
List<String> list = Arrays.asList("Java","Spring","Boot");

String result = list.stream()
        .collect(Collectors.joining(", "));

System.out.println(result);

Output

Java, Spring, Boot
9. Find Sum of Numbers
List<Integer> list = Arrays.asList(1,2,3,4,5);

int sum = list.stream()
        .mapToInt(Integer::intValue)
        .sum();

System.out.println(sum);

Output

15
10. Partition Numbers (Even / Odd)
List<Integer> list = Arrays.asList(1,2,3,4,5,6);

Map<Boolean, List<Integer>> map =
list.stream()
    .collect(Collectors.partitioningBy(n -> n % 2 == 0));

System.out.println(map);

Output

true -> [2,4,6]
false -> [1,3,5]
Very Important Stream Interview Methods
Method	Purpose
filter()	Filter elements
map()	Transform elements
sorted()	Sort
distinct()	Remove duplicates
reduce()	Combine elements
collect()	Convert stream to collection
groupingBy()	Group elements
partitioningBy()	Split data

✅ Interview Tip for You (Adarsh):
If interviewer asks Java Stream question, always think in this order:

Collection
   ↓
stream()
   ↓
filter / map / sorted
   ↓
collect / forEach / reduce
