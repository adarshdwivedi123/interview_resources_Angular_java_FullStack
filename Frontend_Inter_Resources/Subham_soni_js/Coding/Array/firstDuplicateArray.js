[1,2,2,5,5];
//output is 2




//FIrst letter caption  in a string each letter is captioa;

let str = "hello world from javascript";

    let result =str.split(" ")
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(" ");
 

console.log(result);


//without function
//logic
//first character of string and first character after space is capital
//rest of character is small
let str = "hello world from javascript";
let result = "";

for(let i = 0; i < str.length; i++) {
    if(i === 0) {
        result += str[i].toUpperCase();  // first char of string
    } else if(str[i - 1] === " ") {
        result += str[i].toUpperCase();  // first char after space
    } else {
        result += str[i];  // rest of characters
    }
}

console.log(result);
// Output: Hello World From Javascript