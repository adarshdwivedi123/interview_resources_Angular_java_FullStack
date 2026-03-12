
//first check where no depenecys tasr first
 
 
//  function schduleTask(tasks){
//      for(let i=0;i<tasks.length;i++)
//      {
//           if(task.id === task.dependencies)
//           {
               
//           }
//      }
     
     
//  }
//  const tasks = [
//   { id: 'a', description: 'Task A', dependencies: ['b', 'c'] },
//   { id: 'b', description: 'Task B', dependencies: ['c'] },
//   { id: 'c', description: 'Task C', dependencies: [] },
//   { id: 'd', description: 'Task D', dependencies: ['a', 'c'] }
// ];
//  schduleTask(tasks);
 
 
 //output
// The function scheduleTasks(tasks) should return:
// ['c', 'b', 'a', 'd']

 //wap secondest higest number in  from array
 
 
//  0/p=> 20

function secondHighest(arr){
    let maxs=arr[0];
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]> maxs)
        {
            maxs = arr[i]
        }
        
    }
    // console.log(maxs);
    for(let j=1;j<arr.length;j++)
    {
        if(( arr[j]> maxs) && (arr[j]<maxs))
        {
            maxs=arr[j];
        }
    }
    console.log(maxs)
    
    
}
arr=[10,20,40,5,2];
secondHighest(arr);


The required alt attribute specifies an alternate text for an image, if the image cannot be displayed.

 
13 to 14
migration issue kya kya aye hai


 how to //implemnt  pagination using o
 offset and 

how to add filter in specfic column
define compoent



/////////////////
How to handle merge conflict
//where u  have used closure in ur project 



////
// const obj = {
// a: null,
// b: false,
// c: true,
// d: 0,
// e: 1,
// f: '',
// g: 'a',
// h: [null, false, '', true, 1, 'a'],
// i: { j: 0, k: false, l: 'a' }
// }

//find the valida
// {"c":true,"e":1,"g":"a","h":[true,1,"a"],"i":{"l":"a"}}


//javascript is easy
//occurence of each character

// empty ibje
// for  of loop string 
//check first  place in one varible 
// first character kry  
//count 
// key exist inside ibject ciunt incerase

// function occurenceCHaracter(str){
//   obj ={}
  
//  for(let data of str)
//  {
//       if(obj[data])
//       {
          
//       obj++;   
//       }
//       else{
//           obj['key']= data;
          
//       }
//  }
//  console.log(obj);
   
    
// }
// str="javascript is easy";
// occurenceCHaracter(str)

Array.isArray()


const obj = {
a: null,
b: false,
c: true,
d: 0,
e: 1,
f: '',
g: 'a',
h: [null, false, '', true, 1, 'a'],
i: { j: 0, k: false, l: 'a' }
}


{"c":true,"e":1,"g":"a","h":[true,1,"a"],"i":{"l":"a"}}

#)validatore like setclear  method 
#)if we want  to add validators in some  form control and in other if we don't want to add then how cna we do that?


use setValue() when we want to mandatorily fill all the controls of the form, and we use patchValue() when we want to fill only partial controls of the form.

https://medium.com/@bhagirathsinhmakwana2001/angular-reactive-forms-set-value-and-patch-value-functions-c123705562f4#:~:text=setValue()%20and%20patchValue(),differs%20in%20using%20both%20functions.&text=setValue()%20function%20is%20used,value%20of%20reactive%20form%20controls.


/////////////////
https://testbook.com/interview/javascript-object-interview-questions


//bookit interview expeeirnce
//decorator in angular
//lifecycel hook
//which is safe method is passing the from one componet to other component
//typescript suppoet method overloading and overridng   typescipr suuport  inhertitance 
//passing the data from one compoentnt to other  
//How two compoent is ccommincate with each other if they are nom parent childe rlationship? ask in many company
// div have three color after 2 second  it give three color
//using pipe how to  find the odd number from array .array conssite of 20 number 
//arr=[{name: "Alice", age: 20}, {name: "Max", age: 21}, {name: "Jane", age: 20}];
//outpur obje return {age:20},{age:21}
//call apply and bind diffrenece  dekho( )


// let name ={
//     age:24,
//     city:'Alld',
// }
// detail=function(loc,midd){
//     console.log(this.age +loc+" loc is"+midd);
//     console.log(this.city);
// }
//  detail.call(name,['alld','guddu']);



// arr=[{name: "Alice", age: 20}, {name: "Max", age: 21}, {name: "Jane", age: 20}];
// output
// {age:20}
// {age:21}
// obj={};
// arr.forEach((data)=>{
//     console.log(data);
//     for(let x in data)
//     {
//           if(obj[x] == undefined)
//           {
//               obj[x]='age';
//           }
//     }
//     // console.log(data);
//     //   if(obj[data] ==  undefined)
//     //   {
//     //       obj[data]='age';
          
//     //   }
//     //   else{
//     //       obj[data]=obj[data]+1;
//     //   }
// });
// console.log(obj);






const input = [
    // { Bittu: "sample 1", data: "Data1" },
    // { Bittu: "sample 1", data: "Data1" },
    // { B: "sample 2", data: "Data2" },
    // { key: "sample 1", data: "Data1" },
    // { key: "sample 3", data: "Data1" },
    // { key: "sample 4", data: "Data1" }
    {name :'adarsh',city:'banglore'},
    {name :'bity',city:'banglore'},
    {name :'priyansh',city:'banglore'},
    {name :'rohan',city:'pune'},
    {name :'adi',city:'pune'}
    
];

// OUTPUT   

//   {  
//     "sample 1": [  { "key": "sample 1", "data": "Data1" },
//                     { "key": "sample 1", "data": "Data1" },
//                     { "key": "sample 1", "data": "Data1" } 
//                 ],
//     "sample 2": [ { "key": "sample 2", "data": "Data2" } ],
//     "sample 3": [ { "key": "sample 3", "data": "Data1" } ],
//     "sample 4": [ { "key": "sample 4", "data": "Data1" } ]
//   }



/////////////////////////////
const input = [
    {name :'adarsh',city:'banglore'},
    {name :'bity',city:'banglore'},
    {name :'priyansh',city:'banglore'},
    {name :'rohan',city:'pune'},
    {name :'adi',city:'pune'}
];

function groupByKey(arr)
{
 let result ={};
 arr.forEach(element  =>{
   
    // console.log(element);
  	if(result[element.city])
	{
           result[element.city].push(element);
           console.log(result);
           
	}
  else{
      console.log("element2 "+JSON.stringify([element]));
           result[element.city] =[element]
           console.log("result second"+JSON.stringify(result));
	}
});
 return result;
}


console.log(groupByKey(input));



///
When you make a controller in AngularJS, you pass the $scope object as an argument:
