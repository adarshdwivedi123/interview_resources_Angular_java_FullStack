
const p1=new Promise((resolve,reject)=>{
    setTimeout(() =>reject("p1 succes"),1000);
    
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(() =>reject("p2  Succes"),5000);
    
});
const p3=new Promise((resolve,reject)=>{
    setTimeout(() =>reject("p3 succes"),2000);
    
});
Promise.any([p1,p2,p3]).then(res =>{
    console.log(res);
}).catch(e=>{
    console.error(e);
    console.log(e.errors)
});


