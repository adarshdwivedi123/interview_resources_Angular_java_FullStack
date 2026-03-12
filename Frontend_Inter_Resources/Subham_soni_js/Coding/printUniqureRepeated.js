//print unqiue thast is not repeated
//Pubmatcis me nhi huva tha 

let a=[1,4,2,5,8,1,2,8];
let obj={};
a.forEach((x)=>{
    if(obj[x] === undefined)
    {
        obj[x]=1;
    }
    else{
        obj[x]++;
        
    }
    
})
console.log(obj);

let res=Object.keys(obj).forEach((val)=>{
    if(obj[val] ==1)
    {
        console.log(val);
    }
    
    


})


//ye questioin dekho 