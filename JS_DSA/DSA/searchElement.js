function SearchElement(arr){
    for(let i=0 ;i<arr.length;i++)
    {
        if(arr[i] ==n)
        {
            return i;
        }
    }
    return -1;



    
}

arr=[1,5,9,10];
n=5;
let element=SearchElement(arr);
console.log(element);



