//  data={
//     name:'adrsh',
//     age:24,
//     country:'india',
//     college:'united',
//     married:'No',
//  }
//  let   {name,age,{country ,college,married}}  = data;

// var data =[1,2,3];
// let [newdata]=data;

// Input 
// 'abcbcac' 
// outp
// {a:2, b: 2, c: 3}

// const str='abcbcac';
//  let newData = str.reduce((acc, intialValue)=>{
//       if()
//       {
           
//       }
//       else{
           
//       }
       
//   },{})

// let data=new Promise((resolve,reject)=>{
//     let x=4;
//     if(x==4)
//     {
//         resolve('succes');
//     }
//     else{
//         reject('reject')
//     }
// })
// console.log(data);


// arr=[1,2,3,4,2,3,5];
// let data =new Set(arr);
// console.log(Array.from(data));
// this and $,scope
//this & $.scope


// <div>

#)Object and array destrcting
Set dupicate element remove





From a chracter find the repeat
#Find the repeat 
Input  let data='accbbdd';
{ a: 1, c: 2, b: 2, d: 2 }

let data='accbbdd';
let p=data.split("");
const db= p.reduce((acc,initalValue)=>{
    
    if(acc[initalValue] == undefined){
         acc[initalValue]=1
    }
    else{
        acc[initalValue]+=1;
    }
    return acc;
    
},{});

console.log(db);

//From a string find the repeeeeeea

let data='This is adarsj dwivedi';
let p=data.split("");
const db= p.reduce((acc,initalValue)=>{
    
  
    if(acc[initalValue] == undefined){
         acc[initalValue]=1
    }
    else{
        acc[initalValue]+=1;
    }
    
    return acc;
    
},{});

console.log(db);


 
    