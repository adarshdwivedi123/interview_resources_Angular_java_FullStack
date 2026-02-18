function findUnique(arr)
{
    
    for(let i=0;i<arr.length;i++)
    {
        count =0;
        const num =arr[i];
            for(j=0;j<arr.length;j++)
            {
                if(arr[j] == num)
                {
                    count++;
                }
            }
            if(count == 1)
            console.log(num);
            // +return num;
    }
    // console.log(count);
}

arr=[4,1,2,1,2];
p=findUnique(arr)
console.log(p);

output //=>4


//optimail using Xor


// To find unique values from 2 arrays and keep into one array.
function uniqueElements(arr1,arr2){
   let arr =[...arr1,...arr2];
   let array =[...new Set(arr)]
   console.log(array)
}
uniqueElements([1,2,3,4,4],[2,3,4,5,6])