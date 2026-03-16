
Definition of Callback Function:``
A callback function is a function that is passed as an argument to another function and executed later.



Higher Order Function → Takes or returns a function
Callback Function → The function passed to it
//Cal/Back Function:

//a callback function is a js  function passed an argument to another function.
//name is callback becoz it  is callback later



function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

Here:

multiplier() → Higher Order Function

Because it returns another function

//Exmaple setimout


function add(x,y){
    return x+y;
}

let a=3,b=5;

let result=add(a,b);
console.log(result);

function display(x,y,operation){
    var result=operation(x,y);
    console.log(result);
}
display(10,5,add);