

logic 
// 1) first dono array ko concat kardo
// 2) then usko set me daal do 
// 3) then set ko array me convert karlo 
// 4) then usko sort karlo
function union(arr1 ,arr2){
 let combined =arr1.concat(arr2);
 //or   this line can be written in this way also
  //let combined =[...arr1 ,...arr2];
 let unique =new Set(combined);
 return Array.from(unique);
    
}
let arr1 = [1,2,3,4];
let arr2 = [3,4,5,6];

console.log(union(arr1, arr2));



// second way
function union(arr1 ,arr2){
let result=[];
for(let num  of arr1){
    if(!result.includes(num)){
        result.push(num);
    }    
}
for(let num of arr2){
    if(!result.includes(num)){
        result.push(num);
    }
}
    return result;
}
// let arr1 = [1,2,3,4];
// let arr2 = [3,4,5,6];

console.log(union(arr1, arr2));

//Dry RUn
// Step 4 — Example

// Suppose:

// result = [1,2,3]
// num = 2

// Check:

// result.includes(2) → true
// !true → false

// So the if block will NOT run.





function unionArray(arr1,arr2)
{
    const union=[];
    let set=new Set();
    for(i=0;i<arr1.length;i++)
    {
        set.add(arr1[i])
    }
    for(i=0;i<arr2.length;i++)
    {
        set.add(arr2[i])
    }
    console.log(Array.from(set));

    for(i=0;i<set;i++)
    {
        
      union.push(set[i]);
    }
    // for(i=0;i<union.length;i++)
    // {
    console.log(union)
   
    
    // console.log(set);
}


arr1 = [1,2,3,4,5,6,7,8,9,10];
arr2 = [2,3,4,4,5,11,12];
unionArray(arr1,arr2)
// console.log(p);


