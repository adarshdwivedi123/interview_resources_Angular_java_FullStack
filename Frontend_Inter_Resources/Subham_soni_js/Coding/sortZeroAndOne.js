
//first using loop  count the zero
//
//phele  loop chla ke count nikal loe
//i=0 to i=count tk loop chla ke  zero assign kr  doe
//count se length tk me 1 assign kr doe

count=0;
 function sortFunc(arr){
    
    for(i=0;i<arr.length;i++)
    {
        if(arr[i] ==0)
        count++;
    }
    
    for(i=0;i<count;i++)
    {
       arr[i]=0;
        
    }
    
    for(i=count;i<arr.length;i++)
    {
        arr[i]=1;
    }
    
    for(i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
    
}

let arr = [ 0, 1, 0, 1, 1, 1 ];
sortFunc(arr);

//optimal approach
//Es6
//swap vle sre kro 
function sort01(arr){
    let left = 0, right = arr.length - 1;

    while(left < right){
        if(arr[left] === 0){
            left++;
        } else { 
            // arr[left] === 1 → swap with right
            [arr[left], arr[right]] = [arr[right], arr[left]];
            right--;
        }
    }
    return arr;
}

console.log(sort01([1,0,1,0,0,1]));