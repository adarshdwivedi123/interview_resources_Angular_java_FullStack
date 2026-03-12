

function unionArray(arr1,arr2)
{
    const union=[];
    let set=new Set();
    for(i=0;i<arr1.length;i++)
    {
        set.add(arr1[i])
    }
    for(i=0;i<arr2.length;i++)
    {
        set.add(arr2[i])
    }
    console.log(Array.from(set));

    for(i=0;i<set;i++)
    {
        
      union.push(set[i]);
    }
    // for(i=0;i<union.length;i++)
    // {
    console.log(union)
   
    
    // console.log(set);
}


arr1 = [1,2,3,4,5,6,7,8,9,10];
arr2 = [2,3,4,4,5,11,12];
unionArray(arr1,arr2)
// console.log(p);


