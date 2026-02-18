let obj={};
function  frequeny(arr)
{
    arr.forEach((x)=>{
       if(obj[x] == undefined)
       {
           obj[x]=1;
       }
       else{
           obj[x]++;
       }
    });
    
    
    console.log(obj);
    
}
arr=[1,2,1,2,1,2,3,1,3,4,3,4];
frequeny(arr);



/// try with reduce



//Dry run


let obj={};
function  frequeny(arr)
{
    arr.forEach((x)=>{
        console.log("intial"+x);
       if(obj[x] == undefined)
       {
           console.log(obj[x]);
           obj[x]=1;
       }
       else{
        //   console.log("first =>"+x+" "+obj[x]);
        console.log(obj[x]);
           obj[x]=obj[x]+1;
           // key 1 => 2
           //  3
           
          console.log("second "+obj[x]);
          console.log("THired"+JSON.stringify(obj[x]));
          console.log("===============")
       }
    });
    
    
    console.log(obj);
    
}
arr=[1,2,1,2,1,2,3,1,3,4,3,4];
frequeny(arr);


/////////////////////////////////////////


let obj={};
function  frequeny(arr)
{
    arr.forEach((x)=>{
      //kwy  nhi hai isliye undefiend  a rha hai  first time
       if(obj[x] == undefined)
       {
           obj[x]=1;
       }
       else{
           obj[x]=obj[x]+1;
       }
    });
    return obj
    console.log(obj);
}
arr=[1,2,1,2,1,2,3,1,3,4,3,4];
 let data=frequeny(arr);
 console.log(data);
 let arr1=[];
 
 
for(newData in data)
 {
     arr1.push({
         'key':newData,
         'count':data[newData] 
     })
    //  console.log(newData);
 }
 console.log(arr1);
 

// [{
//     key 1
//     count '4'
    
// }]

// undefined
// {'1':4 , '2':3,'3':3,'4':2}
// let obj1={};
// obj1[1]=2;
//  obj1[1]=obj1[1]+1;
// console.log(obj1[1]);

