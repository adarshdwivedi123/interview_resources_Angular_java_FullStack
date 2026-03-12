// //stack  se aek ake value niklte ja reh hai push krte ja reh hai 
// //dusre array me

var arr=[1,2,[3,4,5],6,[7,8,[9,10,11]],12,13];

function flattenIterative(arr){
stack=arr;
flattend=[];

while(stack.length){
    let current=stack.pop();
    console.log(current);
    
    if(Array.isArray(current))
    {
        //jb array reh ga to  usse spread kro doe array me
        stack.push(...current);
    }
    else
    {
        flattend.unshift(current);
    }
    
}
      return flattend;
    
    

}
const p=flattenIterative(arr);
console.log(p);


// 2nd Option 
// let arr = [1, 2, [3, 4, 5], 6, [7, 8, [9, 10, 11]], 12, 13];
// let output = [];

// function flattenArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             flattenArray(arr[i]);
//         } else {
//             output.push(arr[i]);
//         }
//     }
//     return output;
// }

// console.log(flattenArray(arr));



  
//   // Example usage:
//   const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, 9],11,12,13];
//   const flattenedIterative = flattenIterative(nestedArray);
//   console.log("Flattened using iterative approach:", flattenedIterative);

// Array.prototype.myReduce=function(cb,initialValue){
//     let temp=[];
//     var accumulator= initialValue;
//     for(let i=0;i<this.length;i++)
//         {
//             accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];

             
//         }
//         return accumulator;
// };
// const nums=[1,2,3,4];
// const  sum= nums.myReduce((acc,curr)=>{
//     return acc+curr;
// },0);
// console.log(sum);


// arr=[1,2,3]


// const fn=(e)=>{
//     console.log(e*2);
// }
// arr.map(fn);



Array.prototype.myMap=function(cb){
    let temp=[];
    console.log(this);
    for(let i=0;i<this.length;i++)
        {
                temp.push(cb(this[i],i,this));
        }
        
        return temp;
};

arr=[1,2,3]
const fn=(e)=>{
    return e*2;
}
p=arr.myMap(fn);
console.log(p);
