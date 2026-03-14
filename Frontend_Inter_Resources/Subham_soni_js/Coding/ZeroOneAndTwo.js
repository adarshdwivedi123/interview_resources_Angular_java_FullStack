//Brute approach directly sort it will be arrange inoreder 0 1 and 2

//

//Approach 1 (Counting Method – Easy)

//Count number of 0s, 1s, 2s
//Fill array again

function sort012(arr){
    let zero = 0;
  let one = 0;
  let two = 0;
  for(let i=0 ;i<arr.length;i++)
  {
    if(arr[i]==0)
    {
        
        zero++;
    }
    else if(arr[i] ==1)
    {
        one++;
    }
    else{
        two++;
    }
  }
  //here we are fililing in the array 
  i=0;
  for(let j=0 ;j<zero;j++)
  {
          arr[i]=0;
          i++;
      
  }
  for(let j=0 ;j<two ;j++)
  {
          arr[i]=1;
          i++;
      
  }
   for(let j=0 ;j<one ;j++)
  {
          arr[i]=2;
          i++;
      
  }
  
  return arr;
    
}

arr=[2,0,1,2,1,0]
let p= sort012(arr);
console.log(p);


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