[1,2,2,5,5];
//output is 2




//FIrst letter caption  in a string each letter is captioa;

let str = "hello world from javascript";

    let result =str.split(" ")
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(" ");
 

console.log(result);