//Cal/Back Function:

//a callback function is a js  function passed an argument to another function.
//name is callback becoz it  is callback later

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