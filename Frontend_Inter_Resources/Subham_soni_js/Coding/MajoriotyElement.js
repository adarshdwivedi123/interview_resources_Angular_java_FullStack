//We will run a loop that will select the elements of the array one by one.
// Now, for each element, we will run another loop and count its occurrence in the given array.
// If any element occurs more than the floor of (N/2), we will simply return it.
// function check(arr)
{
    n=arr.length;
    newArr=n/2;
    // count=0;
    // arr.sort();
    for(let i=0;i<arr.length;i++)
    {
        count=0
        for(let j=0;j<arr.length;j++)
        {
            if(arr[i] == arr[j])
            {
                count++;
            }
            
        }
        //ya pe n/2 ke equal check krna tha to agar bda huva to iska mtlb repeat hai
        if(count > Math.floor(newArr))
        {
            //return arr[i]; either return kr do
            //ya fir ake varible me le kar use loop ke bhat print kro
            var p= arr[i];
        }
    }
    console.log(p);
}



arr=[2,2,1,1,1,2,2];
p=check(arr)
console.log(p)



///
//Moore’s Voting Algorithm: