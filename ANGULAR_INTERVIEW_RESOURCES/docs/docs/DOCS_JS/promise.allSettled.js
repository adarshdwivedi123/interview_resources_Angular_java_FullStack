
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('succes')},3000)
});


let p2=new Promise((resolve,reject)=>{
     setTimeout(()=>{resolve('succes')},1000)
});

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('succes')},2000)
});

// Promise.myAll=(arrayOfPromise)=>{
//     return new Promise((resolve,reject)=>{
//         const results=[];
//         let counter=0;
//         for(let i=0;i<arrayOfPromise.length;i++)
//         {
//             Promise.resolve(arrayOfPromise[i]).then(data =>{
//                 //when it resolve then we need to push in result array  in smae array so  that no confusion is there order of promise and resposne
//                 results[i]=data;
//                 counter++;
//                 //using counter we know our promises are resolve.
//                 if(counter == arrayOfPromise.length)
//                 {
//                     resolve(results);   
//                 }
//             }).catch(e =>{
//                 //in case of promise rejection we direclty sending rejection we
//                 //are not sending rejection array
//                  reject(e)
//             })
//         }
//     })
// }



Promise.allSettled([p1,p2,p3]).then(res=>{
    console.log(res);
})