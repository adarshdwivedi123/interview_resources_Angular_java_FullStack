// Call Apply and Bind

// The call(), apply() and bind() methods are used for function borrowing in JavaScript. 
// It means that by using them, we can use the methods of one object o2n 
// a different object without having to make a copy of that method and maintain
//  it in two separate places.

var obj={ name:"Piyush"};
function sayHello(age){
return "Hello"+ this.name;
}
//here this  call is used to point current object  i.e var obj
console.log(sayHello.call(obj,24));

// Only differnece it is point as an array
//Apply
var obj={ name:"Piyush"};
function sayHello(age,face){
return "Hello"+ this.name +age +face;
}
//here this  call is used to point current object
console.log(sayHello.apply(obj,[24,'Adarsh']));

//in this way we can reuse that

var obj={ name:"Piyush"};
function sayHello(age,face){
return "Hello"+ this.name +age +face;
}
//using that we can resuabblw  that
const bindFunc =sayHello.bind(obj);
console.log(bindFunc(24,"SE"));
console.log(bindFunc(69,"Youtrbuer"));

////////////////////////////
  
//Polyfill for  call method

let car1={
color:"Red",
company:"Ferrari",
}

function purchaseCar(currency,price){
console.log(this.color);
console.log(this.company);
}

//Its belong to funtion prototype 
//it take two parameter first is contenxt  
// other is args  so we don't know how many parameter take rest operator we pass in


Function.prototype.mycall =function(context ={} ,...args){
//check for aedgecase mycall is funcion or not
if(typeof this!== 'function'){
throw new Error(this+"IT is not callable");
}
//here we create a new funciton and insert a function  here this represnt  purhcase car
context.fn=this;
context.fn(...args);

};
purchaseCar.call(car1,"t" ,50000);


///Polyfill for apply
let car2={
color:"Red",
company:"Ferrari",
}

function purchaseCar(currency,price){

console.log(this.color+ currency);
console.log(this.company+price);


}
//this talke argument  as an array
//we need while passing argumwnt user is provide an array or not
Function.prototype.myApply =function(context ={} ,args=[]){
//cehck for aedgecase mycall is funcion or not
if(typeof this!== 'function'){
throw new Error(this+"IT is not callable");
}
//we need to check in case user have not provided in form of array then  we need  check that one
if(!Array.isArray(args))
{
throw new TypeError("CreateListFromArrayLike Called on");
}
context.fn=this;
context.fn(...args);

};
purchaseCar.myApply(car2,["t" ,50000]);



//PolyFIll For Bind

let car2={
    color:"Red",
    company:"Ferrari",
    }
    
    function purchaseCar(currency,price){
    
    console.log(this.color+ currency);
    console.log(this.company+price);
    
    
    }
    const newFunc=purchaseCar.bind(car2);
console.log(newFunc());

//it will returun funciton will paramter of color and company


///Polyfill for Bind
let car2={
    color:"Red",
    company:"Ferrari",
    }
    
    function purchaseCar(currency,price){
    
    console.log(this.color+ currency);
    console.log(this.company+price);
    
    
    }
    //this talke argument  as an array
    //we need while passing argumwnt user is provide an array or not
    Function.prototype.myBind =function(context ={} ,...args){
    //cehck for aedgecase mycall is funcion or not
    if(typeof this!== 'function'){
    throw new Error(this+"Cannot be bound as it is  not callable");
    }
    
    context.fn=this;
    //return fucniton when we directly call 
    return function (...newArgs){
        return context.fn(...args,...newArgs);
    }
    
    
    };
    //we cannot providr argument here or in  next line we can provide both ways it same
    const newFunc=purchaseCar.myBind(car2,"$4",5000);
    console.log(newFunc());
    
    
    

//Diffenrece  between  apply and bind




