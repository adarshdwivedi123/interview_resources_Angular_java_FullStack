  
// // // based on this array.. make a function with two parameters , array and flag . if flag is true , then collect and show all zeros in the start if flag is false then collect and show all zeros in the last.

// // //in case true= ooo in start
// // //in case of false  000 in last



// // function  test(arr,flag){
// //     // for(let i=0;i<arr.length;i++)
// //     // {
// //     //     temp=[];
// //     //     if(flag)
// //     //     {
// //     //         if(arr[i] !=0)
// //     //         {
// //     //           temp.push(arr[i])         
// //     //         }
// //     //         for(j=0;j<arr.length;j++)
// //     //         {
// //     //             arr[j]=0;
// //     //         }
// //     //         for(j=)
            
            
// //     //     }
// //     //     else
// //     //     {
            
// //     //     }
// // zeroData=arr.map((data,flag)=>{
// //         return data == 0
        
// //     })
// // }
    
// // }
// // let arr = [2, 4, 4, 6,3, 0,9, 8,0,7, 24, 43, 0];
// // flag=true;
// // test(arr,flag)

// Write a function that takes a string and returns a new string with all the vowels removed.
// string: iloveangular => lvnglr

// function checkVowel(str){
//       let data=str.split("");
//       let temp=[];
//       for(let i=0;i<data.length;i++)
//       {
//           if(data[i] == 'a' || data[i] == 'e' || data[i] =='i'|| data[i] == 'o' || data[i] =='u')
//           {
//               //i++;
//               continue;
//           }
//           else{
//               temp.push(data[i]);
//           }
          
//       }
//       return temp;
//     //   console.log(data);
    
// }

// str="iloveangular"
// newData=checkVowel(str);

//  console.log(newData.join(""));



// //binarto decima
// @Component({
//     selector:decToBin
    
     
    
// })

// decToBIn implemnt piprttans

// trnsfom(value,...args)
// {
    
// }

//Solve above with es6


// How to align content in center of screen using flex.?

// .content{
//     display:flex;
//     flex-wrap:center;
// }
//how they have improve  performance of angular application 14 to 17
//latest featue in angular
//resolver
//div in center
//Dependemcu inejction
//custom pipe create (biary to decimal)(Interviwer is able to create i will give this question to him)
//psuedo elment and pusedo class
//oops knowledge  
//ES6



//review
//basic  html and css 
//Es6 problem
////solution try with 
arr=[2, 4, 4,6,3, 0,9, 8,0,7, 24, 43, 0]
function checkAlgo(arr,boolean){
p=arr.filter((data)=>{
     return data == 0
});

if(p == true)
    {
            
    }
    
else{
    
 }    

    
}


boolean=true
checkAlgo(arr,boolean)


//////////

// function checkAlgo(arr,boolean){
// p=arr.filter((data)=>{
//      return data == 0;
// });

// // if(boolean)
// // {
    
// //   p.unshift(arr);
// //   console.log(p);
    
// // }
// // else{
    
// // }

// // return  p;

// // }

// boolean=true
// arr=[2, 4, 4,6,3, 0,9, 8,0,7, 24, 43, 0]
// p=checkAlgo(arr,boolean)
// console.log(p);


function rearrangeZeros(arr, addZeroFirst) {
    // Filter out zeros and non-zeros
    const zeros = arr.filter(num => num === 0);
    const nonZeros = arr.filter(num => num !== 0);

    // Rearrange based on addZeroFirst flag
    return addZeroFirst ? [...zeros, ...nonZeros] : [...nonZeros, ...zeros];
}

const arr = [2, 4, 4, 6, 3, 0, 9, 8, 0, 7, 24, 43, 0];

console.log(rearrangeZeros(arr, true));  // Zeros first
console.log(rearrangeZeros(arr, false)); // Zeros last








/////////////////////////////

function reArrange(arr)
{
    zero=[];
    nonZero=[];
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i] ==0)
            {
                    zero.push(arr[i]);         
            }
            else{
                nonZero.push(arr[i]);
            }
            
            
        }
        let sum=[...zero, ...nonZero];
        console.log(sum);
}    



arr=[1,2,3,4,0,5,0,0,6,7];
reArrange(arr,true);






//remove the vowel and   return a new string
