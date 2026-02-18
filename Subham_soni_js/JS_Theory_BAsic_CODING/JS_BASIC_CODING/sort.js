// The sort() method sorts the elements of an array.

// The sort() method sorts the elements as strings in alphabetical and ascending order.


// Sort method  use with string 


///
const arr=[1,8,7,6,5];
p=arr.sort((a,b)=> a-b);
console.log(p);

//other way


var temp;
for(let i=0 ;i<arr.length;i++)
{
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
               temp=arr[i];
               arr[i]=arr[j];
               arr[j]=temp;
        }
    }
}
console.log(arr);

