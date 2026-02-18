arr = [1,2,3,4,5,6] , target = 7 //true is its 
//       i<=j
// output = [[1,6], [2,5],[3,4]]

// while(i<=j)
// {
//     sum =i+j;
//     if()
// }

// stic 350px
// arr[100];
// 1  --10 
// 11 ti 20
// two button nexx and previsou

//using two for loop
 sums=7;
function sum(arr){
   
    for(i=0;i<arr.length;i++)
    {
            for(j=i+1;j<arr.length;j++)
            {
                  if(sums ==arr[i]+arr[j])
                  console.log(arr[i]+""+arr[j]);
            }
    }
    
}
sum(arr)

////Two pinter
arr = [1,2,3,4,5,6]
total=7;

function sum(arr)
{
    start=0;
    end= arr.length;
    while(start<=end)
    {
        sum=arr[start]+arr[end]
        if(total== sum)
        {
            start++;
            end--;
            console.log("["+arr[start]+","+arr[end]+"]")
        
        }
        //phele sum chota hi check kro fir bda 
        //agar sum chota rha left side aye aga
        else if(sum<total)
        {
            start++;
        }
        else
        {
            //agar  sum bda ho to rigth side se minus krte rahi
          end--;
            
        }
          
    }
    
    
}
newArray=[]
sum(arr)

//////////
///sara kehel sum ka hai sum chota hai  to left side me aye ga
//sum bda huva to right--

function sumSort(arr){
    arr.sort((a,b)=>a-b);
    
    let left=0;
    let sum=0;
    target=14;
    let right=arr.length;
    while(left<right)
    {
            sum =arr[left]+arr[right];
            if(sum == target)
            {
             console.log(arr[left]+""+arr[right]); 
             break;
            }
            else if(sum <target){
                //left--
                left++;
            }
            else{
                right--;
            }     
    }
    
}

arr=[2, 6, 8, 5,11];
sumSort(arr);


//One more variation IF tweo sum  exit return true or return false








    
      

