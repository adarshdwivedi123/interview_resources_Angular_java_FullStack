wat are the operatim```ons that can be performed on arrays in JavaScript?ons that can be performed on arrays in JavaScript?

In JavaScript, arrays are versatile data structures that allow you to store and manipulate collections of data. Here are some common operations that can be performed on arrays:
1. Creation: You can create arrays using array literals or the Array constructor.
   Example: 
   let arr = [1, 2, 3];
   let arr2 = new Array(4, 5, 6);   


   DO the questio insert into first last and middle



---------------------------------------------------------------------
What are some common methods associated with arrays?
JavaScript provides various methods to manipulate arrays. Here are a few:

push() – Adds one or more elements to the end of an array.
pop() – Removes the last element from an array.
shift() – Removes the first element from an array.
unshift() – Adds one or more elements to the beginning of an array.
map() – Creates a new array with the results of calling a provided function on every element in the calling array.
filter() – Creates a new array with all elements that pass the test implemented by the provided function.
reduce() – Executes a reducer function on each element of the array, resulting in a single output value.


let arr = [10, 20, 40, 50];

// Insert 30 at index 2
arr.splice(2, 0, 30);

console.log(arr);
// [10, 20, 30, 40, 50]
Explain to interviewer:
“splice(2, 0, 30) means:

Go to index 2

Delete 0 items

Insert 30 there”
    