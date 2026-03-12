
let obj={};
function  frequeny(arr)
{
    arr.forEach((x)=>{
        //every time obj[x] cehck krt ahai key present hai ki nhi 
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
 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


///Other Way (Isse hm find ker skte hai kitne number character repeat kr reh hai )
function countCharacter(str) {
    let charCount = {};
    for (let s of str) {
            charCount[s] = (charCount[s] || 0) + 1
        
    }
    return charCount
}

// console.log("cc",countCharacter("my name is bittu"));

(charCount[s] || 0) uses the logical OR (||) operator to set the count to 0 if s is not already a key in charCount. Otherwise, it uses the current count.