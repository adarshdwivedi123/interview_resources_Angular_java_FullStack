
//Def A pure  is a fucntions that  always  produce the same ouput for the same input

//pure function cannot  modift the state

//Pure functions cannot have side effect.

function add(a,b){
    return a+b;
}
//it will give same  output  no  matter how many times we call

console.log(add(3,5));
console.log(add(3,5));










//A pure Funcitons is a function that always produce  the same output for the same input.
//Pure function give same output whenever we pass same input this is not [ure //fucntion
//Their is set of rule is defined for pure funciton
//pure function cannot modify the  gloable varibale 
//pure function cannot manipulate dom   if cunction is doing dom manipulate
// thast is also not a pure funciton
//pure function not use conxole becoz  console is external js api

//Pure 

// //message is getting changed
// let message = "Good Morning";

// const greeting =(name) =>{
//     return  `${message} Hey ${name}`
// }
// console.log(greeting('Nisha'));

// message="Good Evening";
// console.log(greeting('Nisha'));



//pure function is js

// const greeting =(name)=>{

//console.log(impure(20));
//convert into pure u need to takse as input
function pure(x,y){
  
    return x+y;    
}
console.log(pure(10,20));

//can i take al impure fucniton topure function
//yes
//becoz it will improve program readbilty
//tesability
//debuggin as well






