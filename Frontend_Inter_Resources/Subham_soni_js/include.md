If you mean includes() in JavaScript, here's how it works.

1. includes() with String

Checks whether a string contains another string.

const str = "Hello World";

console.log(str.includes("World")); // true
console.log(str.includes("Hello")); // true
console.log(str.includes("Java"));  // false
2. includes() with Array

Checks whether an array contains a specific value.

const arr = [10, 20, 30, 40];

console.log(arr.includes(20)); // true
console.log(arr.includes(50)); // false
3. Case Sensitive
const str = "Adarsh";

console.log(str.includes("Ada")); // true
console.log(str.includes("ada")); // false
4. Start Searching from an Index
const str = "JavaScript";

console.log(str.includes("Script", 4)); // true
console.log(str.includes("Java", 1));   // false
5. Interview Example
const fruits = ["apple", "banana", "mango"];

if (fruits.includes("banana")) {
    console.log("Found");
} else {
    console.log("Not Found");
}
Syntax
string.includes(searchValue, startIndex);

array.includes(element, startIndex);
Time Complexity
String includes() → O(n)
Array includes() → O(n)

It searches sequentially until it finds the element or reaches the end.

If you meant include in Angular, C/C++ #include, or something else, let me know.