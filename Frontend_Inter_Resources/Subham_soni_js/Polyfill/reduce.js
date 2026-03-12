//intial value can be provided
// Reduc the value to a prativular element at each  step with the results from previus step
// logic of the for loop
// always get a previous value on which next computaion  ti be performed (accumulator)
//if intial value not provided then start from first va
Array.prototype.myReduce=function(cb,initialValue){
    let temp=[];
    var accumulator= initialValue;
    for(let i=0;i<this.length;i++)
        {
            // accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];
            accumulator=cb(accumulator,this[i],i,this);


             
        }
        return accumulator;
};
const nums=[1,2,3,4];
const  sum= nums.myReduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(sum);



///updated
Array.prototype.myReduce=function(cb,initialValue){
    let temp=[];
    var accumulator= initialValue;
    for(let i=0;i<this.length;i++)
        {
            //this code work even if intial value we are ot passing 
            
            accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];
            // if we pass not passing intial vlaue if give  issue 
            
            // accumulator=cb(accumulator,this[i],i,this);


             
        }
        return accumulator;
};
const nums=[1,2,3,4];
const  sum= nums.myReduce((acc,curr)=>{
    return acc+curr;
});
console.log(sum);