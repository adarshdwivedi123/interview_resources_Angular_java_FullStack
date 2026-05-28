//string ko array me convert krne ke liye hum split method ka use karte hai,
str('')  //charcter  ko array me convert kr dega;
str().split('')  //string ko array me convert kr dega;

join('')  // array to string m convert kre ga


//Reverse every wordl
str ="hello world";
let data =str.split(' ').reverse().join(' ');
console.log(data);



-------------------------------------------------Without Function


// let str = "Hello world";
// let result = "";
// let words = str.split(' ');

// for (let i = words.length - 1; i >= 0; i--) {
//     result =result+ words[i] + " ";
//     console.log(result)
// }

// console.log(result.trim());



=================================================================

split() and join() are opposite operations.

split() → string to array
join() → array to string
split('')

Splits every character.

let str = "Hello";

console.log(str.split(''));

Output:

['H', 'e', 'l', 'l', 'o']
split(' ')

Splits by space.

let str = "Hello world";

console.log(str.split(' '));

Output:

['Hello', 'world']
join('')

Joins array without space.

let arr = ['H', 'e', 'l', 'l', 'o'];

console.log(arr.join(''));

Output:

Hello
join(' ')

Joins array with spaces.

let arr = ['Hello', 'world'];

console.log(arr.join(' '));

Output:

Hello world


----------------------------------