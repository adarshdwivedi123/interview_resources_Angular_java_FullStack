
//sort an array mai ye bhi nhi kr paya tha  dekho isko using js  

let arr = [0,1,4,5,2,22,12];
//  arr.sort((a,b)=>{
//      return a-b ;
//  })
//  console.log(arr);
 
// 0 1 2 4 5

//isse method  me  repeat kr rha tha 
function sortArray(arr){
    for(let i=0 ;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i] >arr[j])
            {
                //swap 
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
                
                
            }
        }
    }
    
    for(let i=0 ;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
    
}
sortArray(arr)


//Angualr life cycle
//jot vs ait
//services




///Sort using destrctuing   wrong one
const arr1=[1,3,4,5,6,8];
function sortArray(arr){
    for(let i=0 ;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i] >arr[j])
            {
                //swap 
              [arr[i], arr[j]] = [arr[j], arr[i]];

            }
        }
    }
    
    for(let i=0 ;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
    
}
sortArray(arr1 )