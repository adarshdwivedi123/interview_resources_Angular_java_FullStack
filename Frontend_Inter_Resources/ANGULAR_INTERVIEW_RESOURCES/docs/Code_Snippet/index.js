// // //1
// // // let number=0;
// // // console.log(number++);   //0 prit n1
// // // console.log(++number);  //2
// // // console.log(number); //2

// // //in case of strict mode we need to declare variable
// // function  getAge(){
// //     'use strict';
// //     age=21;
// //     console.log(age);
    
// // }
// // getAge();
// // //Error is 
// // ///correct is 
// // function  getAge(){
// //     'use strict';
// //      var age=21;
// //     console.log(age);
    
// // }
// // getAge();
// // //output is 21


// // //How long is cool_secret accessible 
// // //session storage is close as long as we close the  broweser
// // sessionStorage.setItem("cool_secret",123);

// // //Local stoarag  we can use till 30 days 



// // // contimue means it will skip that part
// // for(i=1;i<5;i++)
// // {
// //         if(i==3)
// //           continue;
// //         console.log(i);
// // }


// //bubbling and capturing
// <div onclick="console.log('first div')">
//     <div  onclick="console.log('second div')">
//                 <button onclick="console.log('button')">
//                   Click
//                 </button>
//     </div>

// </div>
    



//     //call and bind  imp

//     const person={name:"Lydia"};
//     function sayHi(age){
//         return `${this.name} is ${age}`;
//     }
//     console.log(sayHi.call(person,21));   //ouptur 21 
//     console.log(sayHi.bind(person,21)); // it will print function


// /////////////////////////////////////////////////////// diffeerence berween call and bind 

// const person={name:"Lydia"};
// function sayHi(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person,21));
//   let binds= sayHi.bind(person,21);  
//  console.log(binds());  // then it will print 


//  //or we can write tin this wa also
//  const person={name:"Lydia"};
// function sayHi(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person,21));
// console.log(sayHi.bind(person,21)());


// ///
// function sayHi(){
//     return (() => 0)();
//     //so here arrow 
// }
// console.log(typeof sayHi());



// ////////////////////////
// function sayHi(){
//     return () => 0;
//     //so here arrow 
// }
// console.log(sayHi());
// //it give  ouput function


// //
// console.log(typeof typeof 1);
// //ouput function 


// const  numbers=[1,2,3];
// numbers[9]=11;
// console.log(numbers);
// //output  --->node /tmp/kmdV9JmFcx.js
// //[ 1, 2, 3, <6 empty items>, 11 ]



// //Everything is js is a primititve or js.


// // console.log();



// //what is  seTtimeout ?



// let data=3+ 4+ '5';
// console.log(data)
// //75
// console.log( typeof data)
// //if we are adding one more number to string that wil give output  strign



// console.log(typeof 3 +4 + '5');
// // output is number     45  
// //type of it gives number becox it take 3  as number

// //if we  here + made postive 
// console.log(3 + 4 + +'5');
// o/p is => numer


	// let user = {
	// 	name: "GFG",
	// 	gfg1:() => {
	// 		console.log("hello " + this.name); // no 'this' binding here
	// 	},
	// 	gfg2(){ 
	// 		console.log("Welcome to " + this.name); // 'this' binding works here
	// 	}
	// };
    
	// user.gfg1();
	// user.gfg2();

// window.fistName='jack';
// const person={
//     firstName:'john',
//     fullName:()=>{
//         return `${this.fistName}`
//     }
// }

// console.log(person.fullName());

const add =(x,y) =>{
    console.log(arguments);
    return x+y;
}
add(10,15)






