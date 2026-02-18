//  N = 5, array[] = {1,2,3,4,5}
// Output:2,3,4,5,1



function leftShift(arr){
    
    v=arr.length-1;
    for(let i=1;i<arr.length;i++){
        var p=arr[0];
        //first index pe daal rha hu  ;i=1  and i-1=>1-1 => 0
         temp[i-1]=arr[i];
    }
    temp[v]= p;
    console.log(temp);

}

arr=[1,2,3,4,5];
temp=[];
let p=leftShift(arr)
console.log(p);

//Optimial Approach
