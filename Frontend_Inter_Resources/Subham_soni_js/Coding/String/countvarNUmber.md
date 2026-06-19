logic
count  var first 
//else var +number add krte javo make sure count=1  
becoz agal vla bhi count=1 se start krna hai
const str = "aabbcccddddacccb";

let result = "";
let count = 1;

for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i + 1]) {
        count++;
    } else {
        result += str[i] + count;
        count = 1;
    }
}

console.log(result);



Whenever the interviewer asks:

Compress a string
Count consecutive characters
Encode repeated characters
Remove consecutive duplicates
Run-length encoding

Think of this template:

let count = 1;

for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i + 1]) {
        count++;
    } else {
        // Process the current group
        count = 1;
    }
}