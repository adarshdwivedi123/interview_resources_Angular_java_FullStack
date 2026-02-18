//#)PolyFill for promsie.all
//Promise.all  it will call the api  parallely.it will wait for all of them finish give the result
//in form  of array
//in cases of succes when all primse are resolve then  it print sucees all of 
//Failure  :if any of the promise is rejected then directly it will throw an //error
//most frquenlty ask


const p1=new Promise((resolve,reject)=>{
    resolve('succes');
});


const p2=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('success'),5000);
});

const p3=10;
// const promise3=new Promise((resolve,reject)=>{
//      resolve("hello");
    
// })


//it will take array of promises
///How it works?
//input is array of promsie
//promise.all  method return  promise  handle in  then and  catch block
//array of  promises so need to iterate on that
//it return array of result so need to store in results of all promises.
//so here 10 is not promise so we directly bind  in promise(ITs means we are making as a promise if it is not promise);

Note :Promsie is not part of prototype
//for each lga loe
Promise.myAll=(arrayOfPromise)=>{
    return new Promise((resolve,reject)=>{
        const results=[];
        let counter=0;
        for(let i=0;i<arrayOfPromise.length;i++)
        {
            Promise.resolve(arrayOfPromise[i]).then(data =>{
                //when it resolve then we need to push in result array  in smae array so  that no confusion is there order of promise and resposne
                results[i]=data;
                counter++;
                //using counter we know our promises are resolve.
                if(counter == arrayOfPromise.length)
                {
                    resolve(results);   
                }
            }).catch(e =>{
                //in case of promise rejection we direclty sending rejection we
                //are not sending rejection array
                 reject(e);
            })
        }
    })
}



Promise.myAll([p1,p2,p3])
.then(result =>console.log(result))
.catch(e=> console.log(e));
