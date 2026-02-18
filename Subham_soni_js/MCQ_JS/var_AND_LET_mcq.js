Temporal Dead Zone

//time between  declationn and intialization of let and const  variable (i.e varaible are in scope but they are not declare)
//const and let are hoisted in Temporal dead zone

// var with setTimeout
// let with setTimeout

//variable shadowing  in js
function test() {
    let a = 'Hello';

//incase of let it should be not accessible outside of the block
//
    if (true) {
        let  a = 'Bye';  
        console.log(a); 
    }

    console.log(a);
}

test();


/// in case of var 

function test() {
    var a = 'Hello';
    // in case of var  it will not  treated like a blaock 
    if (true) {
        var  a = 'Bye';  
        console.log(a); 
    }

    console.log(a);
}

test();
//ByE
//ByE

#3

function test() {
    var  a = 'Hello';
    
    //incase of let it should be not accessible outside of the block
    // becoz it is treasted  like block
    //
        if (true) {
            let  a = 'Bye';  
            console.log(a); 
        }
    
        console.log(a);
    }
    
    test();


 #4
 //var is not  treated inside the block
 var  a = 'Bye';  
SyntaxError: Identifier 'a' has already been declared
 function test() {
    let  a = 'Hello';
    
        if (true) {
            var  a = 'Bye';  
            console.log(a); 
        }
    
        console.log(a);
    }
    
    test();
       
    

//////////////
//shaowing let varible by  var it will give shadowing error
function test(){
    var a ="Hello";
    let b = "Bye";
    if(true)
    {
        let a ="hi";
        var b ="Goodbye";
        console.log(a);
        console.log(b); //b is already been dec;ared becoz illegal shaoowing
    }
}
test();



let and const cannot declare in same scope

#3
// this type come under shadowing 
let a 
{
    let a;
}


#4
Declartion Mcq
In case of let and var if we declare in this way it is fine
var a;
let B;

in  case of const we need to intialize with some value
const a; 

//redeclatrion possibel in both let and var  but not possibnle in const

let and var 

function abc(){
    console.log(a);
    
    var a=10;
}
abc();
output :undefined
//////////////////////////////////////////

function abc(){
    console.log(a ,b,c);
    
    var a=10;
    let b=20;
    const c=30;
}
abc();



////////////////////////////// using var variable ///
for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, 2000);
  }


  output print 6  5 time

  //using let variable

  for (let i = 1; i <= 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, 2000);
  }
  ////////////////
  #)How to empty an array in javascript?
  1. array=[]
  2. array.length=0
  3. array.splice(0, arr.length)
  4. while(array.length){
    array.pop()
    }

    ///
    How would you check if a number is a integer or decimal?
   number % 1 === 0 //true


   18. 4 ways of styling:
    - Inline styling
    - External styling
    - Style component
    - Module styling- This will help when we have a same class name for more than 2 classes then it will not allow to override the class properties to all the classes.



    Babel: It transpile or compiel the code into js code.


    Object.freeze(): Object.freeze() making the object properties immutable.

  








