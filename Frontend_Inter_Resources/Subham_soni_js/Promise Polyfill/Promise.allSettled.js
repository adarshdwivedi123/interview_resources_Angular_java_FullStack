//Promise.settled
//It will wait  for all the promises to be settled irresctive  of resolve and reject
//it will give all the results  in array  irrespective of whether it is resolve or rejcted.


const p1=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('fail'),3000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=> reject('fail'),2000);
});
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=> reject('fail'),1000);
});

//strore in same result array
//useCase add here
//aff filter and add product list 

Promise.meraAllSet = (promiseArray)=>{
    const result=[];
    return new Promise((resolve,reject)=>{
        promiseArray.forEach((pro,i) =>{
            Promise.resolve(pro).then((response)=>{
                //here we create object ond push int it
                result[i].push({
                    status:'fullfilled',
                    value:response
                });
            }).catch((err)=>{
                result[i].push({
                    status:'rejected',
                    reason:err
                });
                //finally always run
            }).finally(()=>{
                if(result.length === promiseArray.length){
                    resolve(result); 
                }
            });
        });
    })
};


//////////////////Another way better way doubt in eqql we use  why not push

Promise.myAll=(arrayOfPromise)=>{
    const result=[];
    return new Promise((resolve,reject)=>{
        
        // let counter =0;
        arrayOfPromise.forEach((pro,i) =>{
            pro.then((response)=>{
                result[i]=({
                    status:'fullfilled',
                    value:response
                });
            }).catch((err)=>{
                result[i]=({
                      status:'rejected',
                        reason:err      
                })
                
              
            }).finally(()=>{
            if(result.length === arrayOfPromise.length){
                    resolve(result); 
                }
        });
            
        })
      
    });
}

//try with simple for loop

Promise.mySettled = (arrayOfPromsie)=>{
    return new Promise((resolve,reject)=>{
        const result=[];
        for(let i=0;i<arrayOfPromsie.length;i++)
        {
            arrayOfPromsie[i].then(data =>{
                result[i]=({
                    status:'fullfilled',
                    data:data
                });
            }).catch((err)=>{
                result[i]=({
                    status:'rejected',
                    reason:err
                })
            }).finally(() =>{
                //ye dkehi bhool javo ge
                if(result.length === arrayOfPromsie.length)
                {
                    resolve(result);
                }
            })
        }
    })
}




//////////




Promise.meraAllSet([p1,p2,p3]).then(res =>{
 console.log(res);
}).catch(e =>{
console.log(e); 
});