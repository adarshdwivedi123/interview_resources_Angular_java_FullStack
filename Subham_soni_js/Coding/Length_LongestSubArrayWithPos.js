//subArry =>contigious part of the subarray
//find the length of lonest subarray
function sum(arr,N){
    max=-1
    let len=0;
for(i=0;i<arr.length;i++)
{
    sum=0;
    //in subarray j will start from first index
        for(j=i;j<arr.length;j++)
        {
            // console.log(arr[i]+","+arr[j]);
            sum=sum+arr[j];
            if(sum == N)
            {
               var p=j-i+1;
               if(p>len)
                {
                    len=p
                      
                }
                //or   directly use this;
              //len= Math.max(len,j-i+1);   
            }
            
        }   
}
console.log(len);

}
// Find length of longest continuous subarray whose sum = k.

arr=[2,3,5,1,9];
N=10;
sum(arr,N);


//optimal Approach give using Two Pinter