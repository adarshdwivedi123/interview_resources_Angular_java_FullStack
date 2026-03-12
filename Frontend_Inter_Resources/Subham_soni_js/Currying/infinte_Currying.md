//👉 Converting a function with multiple arguments
// into a chain of single-argument functions.

Example:

// Normal function:
function add(a, b, c) {
  return a + b + c;
}

// Curried version:
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}


--------------------------------------



function sum(a){
    return function(b)
    {
        if(!b)
            //b ko aglai value mile gi nhi to hm return a kr dnege 
        {
            return a;
        }
        return sum(a+b);
    }
    
}


let p=sum(2)(3)(5)(6)(7)();
console.log(p)


becoz of closure it remiber the 

when  we convert  this type of normal function into another  
funciton is called fucniton currying

//f(a,b)  vs f(a)(b)
function f(a,b){
    console.log(a,b);
}


//normal currying  copy here
Currying is a function programming concept that involves transforming  a fucniton  that takes
multiarugument  into a sequence  of a function that  each take single argument.Currying


//#)Benfit

1. To create reusable functions (biggest benefit)
Example:
function multiply(x) {
  return function(y) {
    return x * y;
  };
}


Create reusable multipliers:

const double = multiply(2);
const triple = multiply(3);

double(10); // 20
triple(10); // 30

2)
Cleaner & more readable function composition
3)7️⃣ reduces code duplication (DRY)s