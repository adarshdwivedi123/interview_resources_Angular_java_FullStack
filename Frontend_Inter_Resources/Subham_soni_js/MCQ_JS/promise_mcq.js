//.then method is run in case of succes only

var p =new Promise((resolve,reject)=>{
    let x=4;
    if(x ==4)
    resolve("excuted and resoloved");
    else
    {
        reject('rejected');
    }
});
p.then(()=>{
    console.log('hi Succes');
}).catch(()=>{
    console.log('error');
})
///////////////////////////////////////

//Here All of the catch is giving issue  why all catch giving issue
//#1
var p =new Promise((resolve,reject)=>{
    reject(Error('The Fails'))
});

p.catch(error => console.log(error.message))
p.catch(error => console.log(error.message))
p.catch(error => console.log(error.message))


//#2
var p =new Promise((resolve,reject)=>{
    reject(Error('The Fails'))
});
.catch(error => console.log(error.message)) //The Fails
.then(error => console.log(error))  //it is giving undefined

//#3
new Promise((resolve,reject) =>{
    resolve('Succes')
})
.then(()=>{
    throw Error('Oh Succes') //this throw error
})
.catch(error =>{
    return "actually that worked"   //catch will return that error that will  print  in  .then
})
.then(message =>console.log(message))


//#3
Promise.resolve('Succes')
.then(data =>{
    return data.toUpperCase()
})
.then(data =>{
    console.log(data)
})

//#4

Promise.resolve('Success')
.then(()=>{
    throw Error('oh noes')
})
.catch(error =>{
    return 'actually, that worked'
})
.then(data =>{
    throw Error('The fails!')
})
.catch(error => console.log(error.message));


////////////////////////////////////////////////////////
//here we are simply passing the data
const p=new Promise(res => res(2));
p.then(v =>{
    console.log(v);
    return v*2;
})
.then(v =>{
    console.log(v);
    return v*2;
})
//finally not taken  any parameter
//it will not return any thing
// so it will print undefined
.finally(v =>{
    console.log(v,'finally');
    return v*2;
}); 
.then(v =>{
    console.log(v)
});





