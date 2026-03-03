//Brute approach directly sort it will be arrange inoreder 0 1 and 2

//
function countVar(arr)
{
    let c0=c1=c2=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==0)
        {
            c0++;
        }
        else if(arr[i] ==1){
            c1++;
            
        }
        else{
            c2++;
        }
    }
    for(i=0;i<c0;i++)
    {
        arr[i]=0;
    }
    for(i=c0;i<c1;i++)
    {
        arr[i]=1;
    }
    for(i=c2;i<arr.length;i++)
    {
        arr[i]=2;
    }
    for(i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
    
}

arr=[0, 2, 1, 2, 0, 1];
countVar(arr);



/////////////////////////////////////////////////
Optimal Approach using
// Best Method → Dutch National Flag Algorithm
// If arr[mid] == 0 → swap with low → low++, mid++

// If arr[mid] == 1 → mid++

// If arr[mid] == 2 → swap with high → high--

using kadane algorithm
ye teen pointer le lo issi ko arrange kro
mid and hight array of iterate kr ge
low =mid=0
high=2
threee condition 

mid =0
swap karo low and mid ko mid ++ low++
mid =1 Mid++
mid =2
swap mid and high  and high--(See here caref high-- hona chayoye)
-----
function sort012(arr){
    let low = 0, mid = 0, high = arr.length - 1;

    while(mid <= high){
        if(arr[mid] === 0){
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        }
        else if(arr[mid] === 1){
            mid++;
        }
        else { // arr[mid] === 2
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }

    return arr;
}

console.log(sort012([2,0,1,2,0,1]));