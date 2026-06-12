//Find first repeating character with its index from an array

function firstRepeatingIndex(arr){
  let count = {};
  for(let i=0;i<arr.length; i++){
      if(count[arr[i]])
      {
        console.log("character", arr[i])
        console.log("index", count[arr[i]])
        return count[arr[i]] //if exist
      }
      else
      {
        count[arr[i]]=i //if not exist keep at count
      }
      console.log("count", count) 
    }
  return count   
}
firstRepeatingIndex([1,0,2,3,4,4,5,7,7])




//firs repeated in index
arr=[1,2,2,3,3,4];
let firstRepeated=-1;
for(let i=0;i<arr.length;i++)
{
    count=0;
    for(let j=0;j<arr.length;j++)
    {
        if(arr[i]==arr[j]){
            count++;
        }
    }
    if(count >1)
    {
        firstRepeated=arr[i];
        break;
        
    }
}
console.log(firstRepeated);



/////////////////////////////////////////////////NOw first repeating character with its index
let str = "hello world";
let firstRepeat = "";

for (let i = 0; i < str.length; i++) {
    let count = 0;

    for (let j = 0; j < str.length; j++) {
        if (str[i] === str[j]) {
            count++;
        }
    }

    if (count > 1) {
        firstRepeat = str[i];
        break;  // stop at first repeating character
    }
}

console.log(firstRepeat); // "l"