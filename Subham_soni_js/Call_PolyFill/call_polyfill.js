//Call apply and bind are three methods in js that are used to work with fucnitons
// The call(), apply() and bind() methods are used for function borrowing in JavaScript. 
// It means that by using them, we can use the methods of one object into
// a different object without having to make a copy of that method and maintain
//  it in two separate places.


const person = {
    fullName(city,country){
        console.log(this.first+" "+this.last,city,
        country)
        //this function we are using in p1
    }
}
    const p1 ={first:"Adarsh",last:"Dwivedi"}
    person.fullName.call(p1,"Mumabi","India");




// without call apply and bind we can do this na?
// yes we can do this with Object.assign()
// Now you have 50 different objects:

// p1, p2, p3 ... p50


// You do NOT want to copy fullName into all objects.

// ✔ Solution:
// fullName.call(p1);
// fullName.call(p2);
// fullName.call(p3);


// 🔥 Saves memory
// 🔥 No code duplication
// 🔥 Reusable logic



//Whenever we want one object’s function to be used by another object


let car1={
    color:"Red",
    company:"Ferrari",
    // fn:function(currency,price){
    //     console.log(this.color);
    //     console.log(this.company);
    //     }
    }
    
    function purchaseCar(currency,price){
    console.log(this.color);
    console.log(this.company);
    }

// apply
// person.fullName.apply(p1, ["Mumbai", "India"]);

//Example:2
//here sameFunction we are able to  to use inside the both object
let name={
    firstName:'Akshay',
    lastName:'Saini',
    
}
 let  printFullName=function(){
        console.log(this.firstName + " "+ this.lastName);
    }
    //call ke andar  phele method hota hai this ko point krta hai
    printFullName.call(name);


//using call method we can borrow funciton and used in other object
let name2={
    firstName:'Sachin',
    lastName:'Tendulkar',
}
    printFullName.call(name2);addEventListener

    
    //Its belong to funtion prototype  thast why start funciton
    //it take two parameter first is contenxt  
    // other is args  so we don't know how many parameter take rest operator we pass in
    //becoz every js function can we acces  method like call apply and bind
    //so that why it  start with function
    
    //ISka ake vedio dekho
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



    ////////////////Bst Example of Call 
    
let detail={
    name:'adarsh',
     age:24,
     //here we are adding one key
    //  fn:printFullName //asise aye ga jb iske andar reh ga tbhi hm acces kr skte hai  this.name
}
//so every time hmko new funciton na bnaa pde isse liye hm seperate kr de reh  agr without call mehtod agar use kre ge to
// fir  resuabilty hm loge aise define kr ke use kr skte hai
let detail2={
    name:'ajju',
     age:24,
     //here we are adding one key
    //  fn:printFullName //asise aye ga jb iske andar reh ga tbhi hm acces kr skte hai  this.name
}
printFullName=function(){
    console.log(this.name + " name is " +this.age);
}

//call apply and bind is a  can acces by a funciton so we are startin with function
Function.prototype.myCall=function(context={} ,...args)
{

    if( typeof this!== 'function')
    {
        throw new Error('this is not a funciton');
    }
    context.fn=this;
    console.log(context);
    context.fn(...args);
}
//agar fn dale ge upar tbhi ye acces kr paye ga 
printFullName.myCall(detail);
    