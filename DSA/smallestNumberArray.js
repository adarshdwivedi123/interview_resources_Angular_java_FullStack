
function smallestNumber(arr){
    num =Infinity;
for(let i=0 ;i<arr.length;i++)
{
    if(arr[i]< num)
    {
        num =arr[i];
    }
}
console.log(num);
}



arr=[2,4,-2,1,-10,5];
smallestNumber(arr);