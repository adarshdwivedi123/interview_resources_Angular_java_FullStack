// Input: nums = [3, 0, 1]
// Output: 2
 
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8

// sum=n=n(n+1)/2
// n=3 it will 6-4=2


// function missingNumber(nums,n){
//      n.length;
//      let totolSum=n*(n+1)/2;
//     let sum=0;
//     for(let i=0;i<nums.length;i++)
//     {
//         sum=sum+nums[i];
//     }
    
//     let result=totolSum-sum;
//     console.log(result);
    
// }
// nums = [4, 1,2];
// missingNumber(nums,n);


///

// 
// let p=[1,2,3,4,1,1,2,3,3,4,4,4,4,2,3,1,3,3];
//  output: [{key: 1, count: 4 }, {key: 2, count: 3 }, {key: 3, count:  6}, {key: 4, count:  5}];


// function keyCount(nums){
    // count=0;
//   let num =Array.fill(0);
//     for(let i=0 ;i<nums.length;i++)
//     {
        
//     }
//   temp =[];
//   nums.filter((data)=>{
       
       
//   });
   

    
// }
// nums = [1,2,3,4,1,1,2,3,3,4,4,4,4,2,3,1,3,3];
// keyCount(nums)


// ///hashMAp
// // [4,4,,]
// 1 1 2 2 3 3 





// Input: '19-July-2024'


// 1 + 9 + 0 +7 + 2+ 0+ 2+ 4 

// output: 25


function sumDate(num){
    
    
   
}
str='19-July-2024'
let p= new Date(str);
 console.log(p.getMonth()+1, p.getFullYear());

  sumDate(p);

//soltion is 

let obj={};
function  frequeny(arr)
{
    arr.forEach((x)=>{
      //kwy  nhi hai isliye undefiend  a rha hai  first time
       if(obj[x] == undefined)
       {
           obj[x]=1;
       }
       else{
           obj[x]=obj[x]+1;
       }
    });
    return obj
    console.log(obj);
}
str="my name is bittu";
 let data=frequeny(str);
 console.log(data);
 let arr1=[];
 
 
for(newData in data)
 {
     arr1.push({
         'key':newData,
         'count':data[newData] 
     })
    //  console.log(newData);
 }
 console.log(arr1);
 


// {'1':4 , '2':3,'3':3,'4':2}
// let obj1={};
// obj1[1]=2;
//  obj1[1]=obj1[1]+1;
// console.log(obj1[1]);
//UYsing Reduce Method
const data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

// // reduce function  take two method    one is accumultro isme  hm iempty  //object pas kiye hai
// //phele ake empty array bna lo
// // fir check kro  iusme 
const reducer = (accumulator, item) => {
    console.log(accumulator);
  if (accumulator[item]  == undefined) {
      //ye value ko increment  krta hu
      accumulator[item] = 1;
    
  } else {
    accumulator[item] += 1;
  }
  return accumulator;
};

// // Use reduce to count frequencies
const frequency = data.reduce(reducer, {});

console.log(frequency);


// let obj1={};
// obj1[1]=2;
//  obj1[1]=obj1[1]+1;
// console.log(obj1);



 




