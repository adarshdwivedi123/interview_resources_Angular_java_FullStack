// Flatten array without using  Array.isArray() method

stack = []
function flattenArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            flattenArray(arr[i], stack);
        } else {
            stack.push(arr[i]);
        }
    }
    return stack;
}

console.log(flattenArray(arr));

////////////////////////////////////////////////

// const  str = "aabbcccddddacccb";
//output : a2b2c3d4a1c3b1

// let data = str.split("").reduce((acc, intial)=>{
//     // if(acc[intial])
    
//     if(acc[intial] == undefined && acc[intial])
//     {
//       acc[intial] =1;   
//     }
//     else
//     {
        
//       acc[intial] +=1; 
//     }
//     return acc;
    
// },{});

// console.log(data);


console.log(NaN === NaN)


//////////////
var x=10;
function sum(){
    console.log(x)
    var x=20;
    
}

sum();