//remove the dup[licate]
//[1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]
//i need  to retutn unique array
//two piunter approach work when array is sorred
temp=[];
 function removeDuplicate(arr){
     
     arr.filter((arr)=>{
         arr.indexOf
     })
     
 }

arr=[1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
removeDuplicate(arr);

//remove duplicate using set
function removeDuplicate(arr){
    let data=new Set(arr)
    let newData= Array.from(data);
    console.log(newData);
    
}





//indexOf return fitrs index of the element in the array if it is present,
//  else it returns -1. So, if the index of the current element is equal to the current index,
//  it means that this is the first occurrence of the element in the array, 
// and we can include it in the result. If not,
//  it means that this element has already been included in the result, and we can skip it.      
arr=[1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
let data =arr.filter((item,index)=>{
    return arr.indexOf(item) === index;
})
console.log(data);



----------------------------------------











Using HashMap (Manual Way – Interview Friendly)
function removeDuplicates(arr) {
    let map = {};
    let result = [];

    for (let num of arr) {
        if (!map[num]) {
            map[num] = true;
            result.push(num);
        }
    }

    return result;
}

console.log(removeDuplicates(arr));




----------------------




arr=[1,2,2,4,4,5,5];
let p=removeDuplicate(arr);


let x = false; 
let y = "0"; 
let z = 0; 
  
console.log(x == y);  //true
console.log(x == z);//tru

z.index(1000); what is significant of that?
So z-index: 1000 would appear on top of a z-index 999 . Doing z-index: 1001 is an an attempt to appear "on top" of a item with z-index: 1000.



//using has map 
//Take a hash map, which will store all the elements which have appeared before.
//Traverse the array.
//Check if the element is present in the hash map.
//If yes, continue traversing the array.
//Else Print the element.

function removeDups(arr,n){
    let map= new Map();
     for(let i=0;i<n;i++)
     {
      //using get  check wether element is prenst in array or njo   
       // Print the element if it is not
             // there in the hash map
         if(map.get(arr[i]) == null)
         {
             console.log(arr[i]);
         }
         //add item  in set
         map.set(arr[i],1);
     //   console.log(map);
     }
 }
 
 let arr=[1, 2, 5, 1, 7,-4, 2, 4, 2 ];
 let n = arr.length;
 removeDups(arr, n);

//3way using two pinter
 ///function removeDuplicates(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

const arr = [1, 1, 2, 2, 2, 3, 3];
const k = removeDuplicates(arr);

console.log("The array after removing duplicate elements is:");
for (let i = 0; i < k; i++) {
  console.log(arr[i]);
}

//using filter we can do that  see this imfrotn on intervire 
  
//return keyword ka lafda hai dekho yha

let arr = ["apple", "mango", "apple",
  "orange", "mango", "mango"];

function removeDuplicates(arr) {
return arr.filter((item,
index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));


///////////////////// we can writei in thsi way   return huuta ke ake  avrible store kr lo

let arr = ["apple", "mango", "apple",
  "orange", "mango", "mango"];

function removeDuplicates(arr) {
 var p=arr.filter((item,index)=>{
    return arr.indexOf(item)  === index
})
console.log(p);
}

console.log(removeDuplicates(arr));


///////// removeduplicate
let arr = ["apple", "mango",
  "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
let unique = [];
arr.forEach(element => {
if (!unique.includes(element)) {
    unique.push(element);
}
});
return unique;
}
console.log(removeDuplicates(arr));
