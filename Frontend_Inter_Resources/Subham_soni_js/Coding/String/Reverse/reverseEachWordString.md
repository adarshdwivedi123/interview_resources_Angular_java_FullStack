
let str="Hello this is adarsh";
data= str.split(' ')
.map(word =>word.split('')  //each word ko kran hai to  map arrayme //me le aya 
.reverse()
.join(''))
.join(' ')

console.log(data);


------------------------------------------
usign spread operatot
let str = "Hello world";

let result = str
  .split(' ')
  .map(word => [...word].reverse().join(''))
  .join(' ');

console.log(result);