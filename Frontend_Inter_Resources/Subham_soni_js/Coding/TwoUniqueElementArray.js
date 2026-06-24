//First I count how many times each number appears using an object. 
// Then I check which numbers appear only once and return them.


function twoUniqueElement(arr){
    let count={};
    let result =[];
    
    //count how  many times each number appeares
    for(let num of arr)
    {
        if(count[num])
        {
            count[num]+=1;
        }
        else{
            count[num]=1;
        }
    }
    console.log(count);
    for(let num in count){
        if(count[num] === 1){
            //convert into number thast why we use this 
            result.push(Number(num));       
     }
    }
    return result;
}

arr=[1,2,2,1,3,4,4,5];
let p=twoUniqueElement(arr);
console.log(p);


