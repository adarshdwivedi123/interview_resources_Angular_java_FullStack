//REcursion
//flatten array convert into array not string 
// object flatten

var arr=[1,2,[3,4,5],6,[7,8,[9,10,11]],12,13];


let output=[];
function flatten(arr){
    for(let i=0;i<arr.length;i++)
        {
            if(Array.isArray(arr[i])){
                flatten(arr[i]);
            }
            else{
                output.push(arr[i]);

            }
        }
        return output;
}
console.log(flatten(arr[i]));

// const newObj={}
// const getFlattenObj=(obj)=>{
//     Object.keys(obj).forEach(key =>{
//         if(typeof obj[key] == "object" &&  !Array.isArray(obj[key]))
//             {
//                 getFlattenObj(obj[key])
//             }
//             else{
//                     newObjt[key]=obj[key];
//             }
//     })
// }


// getFlattenObj(obj)
// console.log(newObj)////


//using foreach 
var arr=[1,2,[3,4,5],6,[7,8,[9,10,11]],12,13];




flattend=[];
function flattendArray(arr){
    arr.forEach(data =>{
          if(Array.isArray(data))
        {
            flattendArray(data);
        }
        else{
            flattend.push(data);
        }
        
    });
  
    return flattend;
    
    
    
}
let p=flattendArray(arr);
console.log(p);
