
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
