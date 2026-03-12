
function countNegativeNumber(arr){
    count=0;
    for(let i=0 ;i<arr.length;i++)
    {
        if(arr[i]<0)
        {
            count++;
        }
    }
    console.log(count);

}



arr=[2,-6,4,8,1,-9];
countNegativeNumber(arr);