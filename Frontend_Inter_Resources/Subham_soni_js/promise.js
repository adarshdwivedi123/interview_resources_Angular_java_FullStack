//#)PolyFill for promsie.all
//Promise.all  it will call the api  parallely.it will wait for all of them finish give the result
//in form  of array

 const promise1=new Promise((resolve,reject)=>{
     resolve("hi");
     
});
const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("TID FAiled");
    },1000);
});
// const promise3=new Promise((resolve,reject)=>{
//      resolve("hello");
     
// })


//it will take array of promises
Promise.myAll=(arrayOfPromise)=>{
    return new Promise((resolve,reject)=>{
        const results =[];
        //this counter we use here to check how promises are there
        let counter=0;
        for(let i=0;i<arrayOfPromise.length;i++){
            arrayOfPromise[i].then(data =>{
                //we need to push into array
                results[i]=data
                counter++;
                if(counter == arrayOfPromise.length)
                {
                         resolve(results);    
                }
            }).catch(e =>{
                //in case of rejction we directly need send a rejection
                reject(e)
                
            })
        }
    })
}

Promise.myAll([promise1,promise2])
.then(result =>console.log(result))
.catch(e=> console.log(e));



/////////////////

//Promise.settled
//It will wait  for all the promises to be settled irresctive  of resolve and reject
//it will give all the results  in array  irrespective of whether it is resolve or rejcted.

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('hi succes'),3000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=> reject('h2 succes'),2000);
});
const p3=new Promise((resolve,reject)=>{
    setTimeout(()=> reject('h3 succes'),1000);
});
Promise.allSettled = function (promises) {
let mappedPromises = promises.map((p) => {
 return p
   .then((value) => {
     return {
       status: 'fulfilled',
       value,
     };
   })
   .catch((reason) => {
     return {
       status: 'rejected',
       reason,
     };
   });
});
return Promise.all(mappedPromises);
};

Promise.allSettled([p1,p2,p3]).then(res =>{
 console.log(res);
}).catch(e =>{
console.log(e); 
});






Any
//In case of any any of the promsie are resolve  that will return insantaly it 
// will not wait for other promise
//if we have promsie reoslve an drejcted  it will isntantially   reoslve value  give instead of reject value
// if all rejected  then we get errorin catch blaock


 const promise1=new Promise((resolve,reject)=>{
     reject("h2");
     
     
});
const promise2=new Promise((resolve,reject)=>{
    reject("hi");
     
});
// const promise3=new Promise((resolve,reject)=>{
//      resolve("hello");
     
// })





Promise.myAny=(arrayOfPromise)=>{
    return new Promise((resolve,reject)=>{
        let counter=0;
        for(let i=0;i<arrayOfPromise.length;i++)
        {
            arrayOfPromise[i].then(data =>{
                resolve(data);
            }).catch(e=>{
                counter++;
                if(counter ==arrayOfPromise.length )
                reject(new AggregateError(e,"All Promises were  rejected"))
            })
        }
    })
}

Promise.myAny([promise1,promise2])
.then(result =>console.log(result))
.catch(e=> console.log(e));








///////////race////

//race
//=> what are the promise first resolve  that will display
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
     let counter=0;
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












//this syntax take moere time becoa it handling error in second bloack 
//but it is taking in same bloack
// Promise.race([promise1,promise2,promise3])
// .then(result =>console.log(result))
// .catch(e=> console.log(e));


//o
//or  both are same only difference in 


// Promise.race([promsie1,promise2,promise3])
// .then(data => console.log(data),(e)=> console.error(e))


///

Promise.myRace=(arrayOfPromises) =>{
    return new Promise((resolve,reject)=>{
        for(let i=0;i<arrayOfPromises.length;i++){
        Promise.resolve(arrayOfPromises[i])
            .then(data =>resolve(data),(e) =>reject(e))
        }
        
    })
}

Promise.myRace([promise1,promise2,promise3])
.then(result =>console.log(result))
.catch(e=> console.log(e));




////PolyFIll iterative way


function flattenIterative(arr) {
  const flattened = [];
  const stack = [...arr];
 console.log("sstack dekho"+stack)
  while (stack.length) {
      
    const current = stack.pop();
    console.log("current"+current);
    if (Array.isArray(current)) {
      console.log("stack"+current);  
      stack.push(...current);
      console.log("stack push",stack);
      
    } else {
        
      flattened.unshift(current);
      console.log("flattend"+current)
      
    }
  }

  return flattened;
}

// Example usage:
const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, 9],11,12,13];
const flattenedIterative = flattenIterative(nestedArray);
console.log("Flattened using iterative approach:", flattenedIterative);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

TODAY
//in cases of succes when all primse are resolve then  it print sucees all of //thenm
//Failure  :if any of the promise is rejected then directly it will throw an //error



let p1=new Promise((resolve,reject)=>{
    reject('succes');
});


let p2=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('success'),5000);
});

let p3=new Promise((resolve,reject)=>{
    reject('succes');
});


Promise.all([p1,p2,p3]).then(res=>{
    console.log(res);
})


////
Polyfill code EgdeCaseds

//in cases of succes when all primse are resolve then  it print sucees all of //thenm
//Failure  :if any of the promise is rejected then directly it will throw an //error



const p1=new Promise((resolve,reject)=>{
    resolve('succes');
});


const p2=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve('success'),5000);
});

const p3=10;
//input is array of promsie
//promise.all  method return  promise  handle in  then and  catch block
//array of  promises so need to iterate on that
//it return array of result so need to store in results of all promises.
//so here 10 is not promise so we directly bind  in promise(ITs means we are making as a promise if it is not promise);
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
                 reject(e)
            })
        }
    })
}

Promise.myAll([p1,p2,p3]).then(res=>{
    console.log(res);
})

////
/////////////Promsie.Any//////////////////\\\\\\\\

//In case of any any of the promsie are resolve  that will return insantaly it 
// will not wait for other promise
//if we have promsie reoslve an drejcted  it will isntantially   reoslve value  give instead of reject value
// if all rejected  then we get error in catch blaock




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



///////////////////////////////////////////////////////////////////////////////////////////////////
p1  -> 3s
p2  -> 1s
p3 -> 2s

#)IN case Of Resolve.
after 3s it will print all the value.
promise.api will make all api is calling parallely but "it will wait for all of them to finish then give result in form of array" 
result[ val,val2,val3]

#Rejected
p1-> 3s
p2->1s  Rejected
p3->2s

As soon as any of the promise is rejected  it will thrown an error.
Promise.all  get rejected  as soon as any promsie is get rejected.
After 1s p2 is  thrown error it will not wait for other promsier to complete(It will be not wait for other promise )
if one fail it will quickly give result.
After 2s it supppose it rejcted after no one is resolve

the is same errroe give by put


#)promise.allSettled
IF we do paraller api call once fail other will display then we use this

Resolved
	p1->  3s
        p2->  1s
        p3-> 2s
after 3s it will print  value
        [val,val2,val3]

Rejected:
	p1->  3s  
        p2->  1s    rejected 
        p3-> 2s

   it will wait for all promise to complete  after 3s we will give result 
  irespective succes and failure it will give val result.
 [val.val2,val3]  => output wil be array of three number.





#)Promise.race

p1->  3s
p2-> 1s
p3-> 2s

Resolved
it is simsilar to race jo jeete ga vhi phele
It will give the value of first settled promsie
after 1s   it will give val of p2 .


Rejected:
p1->  3s
p2-> 1s
p3-> 2s (Rejected)
What if first promise is rejcted  
Error will thrown  (p3) 



It is very much similar to race
Promise.any

p1 -> 3s
p2 -> 1s   suscces
p3 ->2s
Here we wait first promise  to be succed.

it will return (val2)

Rejected

p1 -> 3s
p2 -> 1s Rejected   
p3 ->2s


//////////////////////////////////////



const p1=new Promise((resolve,reject)=>{
    setTimeout(() =>resolve("p1 succes"),3000);
    
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(() =>resolve("p2 succes"),1000);
    
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(() =>resolve("p2 succes"),2000);
    
})
Promise.all([p1,p2,p3]).then(res =>{
    console.log(res);
})

output is [succes,success,success];


Reject case 
if any of the promises fail then first settle the reject cases

const p1=new Promise((resolve,reject)=>{
    setTimeout(() =>resolve("p1 succes"),3000);
    
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(() =>reject("fail"),1000);
    
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(() =>resolve("p2 succes"),2000);
    
})
Promise.all([p1,p2,p3]).then(res =>{
    console.log(res);
}).catch(e=>{
    console.error(e)
});
/////////////////////////////
Promise.all settled

const p1=new Promise((resolve,reject)=>{
    setTimeout(() =>resolve("p1 succes"),3000);
    
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(() =>resolve("p2 succes"),1000);
    
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(() =>resolve("p3 succes"),2000);
    
})
Promise.allSettled([p1,p2,p3]).then(res =>{
    console.log(res);
}).catch(e=>{
    console.error(e)
});




ankit.surana@servicenow.com

/////////
prptype and protype inhertance 




//
https://github.com/priya42bagde/JavaScriptCodingInterviewQuestions/blob/master/js%20codes.docx








