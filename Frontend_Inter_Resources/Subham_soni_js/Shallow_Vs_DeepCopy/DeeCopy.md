//Primitive are immutuable and its always create deep copy
//#Because of primitive type it always create deep copy
//#)Note:shallow copy and deep copy  we are using with array and object only 
DeFintion

deep copy if we change in orginal  object it willnever  reflect in
shallowCpy  becoz that shared differnet memory address.
//deep copy means if we change in copy variable it never reflected into
// orginal once becoz that shared differnet memory address.
//In deep copy new memory allocated to copied variable
//So change in copied variable never reflect in orginal variable

let originalValue=10;
let copiedValue=originalValue;

console.log(originalValue);
console.log(copiedValue);
copiedValue=20;
console.log(originalValue);
console.log(copiedValue);

//////////////////////////////////////////

// #method available  in deep copy of objects
// #assing  deep copu
// #json.strinfy() copy the object

---------------------------------------------------------



let orginalObj={
    name:'Adarsh',
    address:{
        city:"Delhi"
    }
};


let shallowCopy ={...orginalObj};
let deepCopy =JSON.parse(JSON.stringify(orginalObj));
shallowCopy.address.city='Mumbai';//cahneg  in shallow copy doesn't affect the orginal one
//deepCopy.address.city='Mumbai';  //chaneg in  deepCopy doesnot affect the orginal one

console.log(orginalObj);
console.log(deepCopy)




///#1
//JSON.stringify not enough of cabale to copy a function so we  can use JSON.stringify
 //to create a deep copy  when object don't  have funciton type it won't work

//Here also original Value is not changed
let originalValue={
    name:'john',
    age:20
  
    };
    let copiedValue=JSON.parse(JSON.stringify(originalValue));
    
    console.log(originalValue);
    console.log(copiedValue);
    
    copiedValue.name="hero";
    console.log(copiedValue);
    console.log(originalValue);

    /////////////////#2//////
    Disadvantage  when we have function  in our object
    JSON.stringify not copy the object accurately.

let originalValue={
    name:'john',
    age:20,
    getName:function(){
    return this.name;
    }
    
    }
    let copiedValue=JSON.parse(JSON.stringify(originalValue));
    
    console.log(originalValue);
    console.log(copiedValue);
    
    copiedValue.name ='Peter';
    console.log(copiedValue);
    console.log(copiedValue);



    
//#)
structuredClone() (BEST)
Example
const order = {
  id: 1,
  item: { name: "Laptop" }
};

const orderCopy = structuredClone(order);

orderCopy.item.name = "Mobile";

console.log(order.item.name); // ✅ Laptop



    
    
    
    ---------------------------
    Edit / Cancel scenarios (VERY COMMON)
this.originalData = structuredClone(apiData);
this.editData = structuredClone(apiData);
    

    
    
    
    
    
    
    






// const person ={
//     name:'Happy',
//     age:30,
//     address:{
//     city:'Delhi',
//     country:'India'
//     }
//     };
//     const shallowCopy=Object.assign({},person);
//     shallowCopy.address.city='Mumbai';
//     console.log(person.address.city);
//     console.log(shallowCopy.address.city);
//     console.log(person);
    //see prblm is orginal value of city is also modified that is not expexcted
    //becoz we cannot the original value of object
    //shallow copy prblm with nested object