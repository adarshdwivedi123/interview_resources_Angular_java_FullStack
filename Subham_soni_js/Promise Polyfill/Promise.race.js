///////////race////

//race
//=>  the promise first resolve  that will display irespective of reoslve or reject
//promises that taken least time settle first
//what are thoingd settle first we recevived in console

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('hi succes'),3000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('h2 succes'),2000);
});
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=> reject('h3 succes'),1000);
});
Promise.myRace=(arrayOfPromise)=>{
 return new Promise((resolve,reject)=>{
     for(let i=0;i<arrayOfPromise.length;i++)
     {
         Promise.resolve(arrayOfPromise[i])
         .then(data =>resolve(data))
         .catch(e => reject(e))
     }
 })
}

Promise.myRace([p1,p2,p3]).then(res =>{
 console.log(res);
}).catch(e =>{
console.log(e); 
});


