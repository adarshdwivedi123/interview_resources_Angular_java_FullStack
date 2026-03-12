/////////////Promsie.Any//////////////////\\\\\\\\

//In case of Promise.any any of the promsie are resolve  that will return insantaly it 
// will not wait for other promise
//if we have promsie reoslve an rejcted  it will isntantially   reoslve value 
// give instead of reject value
// if all rejected  then we get error in catch blaock


//or better
//Promise.any  wait for first settle or resolve or succes
//in case of rejected it will give aggreagrated error in form of array




const p1=new Promise((resolve,reject)=>{
    resolve('rejct');
});


const p2=new Promise((resolve,reject)=>{
    setTimeout(()=> reject('success2'),10000);
});

const p3=new Promise((resolve,reject)=>{
    reject('succes')
});

Promise.myAny=(arrayOfPromise)=>{
    return new Promise((resolve,reject)=>{
        let counter=0;
        for(let i=0;i<arrayOfPromise.length;i++){
            arrayOfPromise[i].then(data =>{
                resolve(data);
            }).catch(e =>{
                counter++;
                //this well check when all promises are rejected then will give  error
                // this is imp to understand here
                if(counter == arrayOfPromise.length)
                 reject(new AggregateError(e,"All Promsises were rejected"))
            })
        }
            
        
    })
}





Promise.myAny([p1,p2,p3])
.then(res=>{
    console.log(res);
})


