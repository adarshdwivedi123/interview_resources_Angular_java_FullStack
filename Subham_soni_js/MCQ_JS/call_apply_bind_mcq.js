//#1
// var obj={name:"Piyush"};

// function sayHello(){
//     console.log(this);
//      return "Hello" +this.name;

// }
// console.log(sayHello());
//Hello Print 

//#2
//So how we can call sayHello function inside this object(i.e is obj)
// var obj={name:"Piyush"};

// function sayHello(){
//      return "Hello" +this.name;
// }
// console.log(sayHello.call(obj));
//So here we can do this with call
//#3
//PAssing argument
// var obj={name:"Piyush"};

// function sayHello(age){
//      return "Hello" +this.name +"is"+age;
// }
// console.log(sayHello.call(obj,24));

//Apply 
//apply works simply to argument we here  pass an aarray
//#4
// var obj={name:"Piyush"};

// function sayHello(age,profession){
//      return "Hello" +this.name +"is"+age +profession;
// }
// console.log(sayHello.apply(obj,24,"software ENginner"));

//Give this  error//TypeError: CreateListFromArrayLike called on non-object

//#5
//convert into this
// var obj={name:"Piyush"};

// function sayHello(age,profession){
//      return "Hello" +this.name +"is"+age +profession;
// }
// console.log(sayHello.apply(obj,[24,"software ENginner"]));

// //#6
// var obj={name:"Piyush"};

// function sayHello(age,profession){
//      return "Hello" +this.name +"is"+age +profession;
// }
// const bindFunc=sayHello.bind(obj,[24,"software ENginner"])
// console.log(bindFunc); //it will return  whole function
// console.log(bindFunc(24,"Software Enginner")); //here we can reuse
// console.log(bindFunc(69,"Software Enginner")); //we can call mutliple time


//#MCQ START FROM HERE
// const person ={name:'Piyush'};

// function sayHi(age){
//     return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person,24));
// console.log(sayHi.bind(person,42));

////
// const age=10; // this is for confusing
// var person={
//     name:'Piyush',
//     age:20,
//     getAge:function(){
//         return this.age;
//     },
// };
// var person2={age:24};
// //becoz in call we are calling person2  that  why it refer person2 
// person.getAge.call(person2); //24


//#2
var status ="T";

setTimeout(()=>{
    const status ="F";
    
    const data={
        
     status :"FINside",
     
        getStatus(){
            return this.status; //here this [point to gobla objet it not point to funiton setTimeout is funciton     
           },
    }

console.log(data.getStatus());
console.log(data.getStatus.call(this));
},0);

//#3
//call printAnimals such thast is prints all the animal  in objects

//anss loop chle ke 
const animals =[
  {species:"Lion",name:"King"},
  {species:"Lion",name:"King"}
];

function printAnimals(i){
    this.print = function(){
        console.log("#" +i + " " + this.species +": "+this.name);
    }
}
for(let i=0;i<animals.length;i++)
{
    //  this.print(animals);
    printAnimals.call(animals[i],i);
}


///Append an array to another array
const array =["a","b"];
const elements =[0,1,2];






