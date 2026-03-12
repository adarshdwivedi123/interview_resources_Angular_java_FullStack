//logic  for map
//Alway return a new array
//logic for loop

Array.prototype.myMap=function(cb){
    let temp=[];
    console.log(this);
    for(let i=0;i<this.length;i++) //this.length represnt  Array above 
        {
                temp.push(cb(this[i],i,this));
                //value
                //index
                //complete array
        }
        
        return temp;
};

arr=[1,2,3]
const fn=(e)=>{
    return e*2;
}
arr.myMap(fn);






///reduce

Array.prototype.myReduce=function(cb,initialValue){
    let temp=[];
    var accumulator= initialValue;
    for(let i=0;i<this.length;i++)
        {
            accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];

             
        }
        return accumulator;
};

arr=[1,2,3];
const fn1=(acc,curr)=>{
    return acc+sum;
}
const  sum= nums.myReduce(fn1,0);




///easy   ////////////


Array.prototype.myReduce=function(cb,initialValue){
    let temp=[];
    var accumulator= initialValue;
    for(let i=0;i<this.length;i++)
        {
            accumulator=accumulator?cb(accumulator,this[i],i,this):this[i];

             
        }
        return accumulator;
};
const nums=[1,2,3,4];
const  sum= nums.myReduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(sum);

