
let p1=new Promise((resolve,reject)=>{
    resolve('succes');
});


let p2=new Promise((resolve,reject)=>{
     resolve('success');
});
0
let p3=new Promise((resolve,reject)=>{
    resolve('succes');
});


Promise.all([p1,p2,p3]).then(res=>{
    console.log(res);
})