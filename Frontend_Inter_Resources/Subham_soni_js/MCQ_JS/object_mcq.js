const user ={
    name:'RoadSide Coder',
    age:24,
};

//ptint
console.log(user.name);

//modify Object
user.name='Adarsh'
console.log(user);

//delete obejct
delete user.age;
console.log(user);


mcq2
//so delete keyword we use delete from object not from  locla variabel
const  func =(function (a) {
    delete a;
    return a;
})(5);
console.log(func);
//////////////////
//acces   porperty
#MCq3
const user ={
    name:'RoadSide Coder',
    age:24,
    "Like this vedio":true,
};
//how to acces  and add above property in obejct

console.log(user["Like this vedio"]);


#mcq4
//////////////////////////////////////
// const user ={
//     name:'RoadSide Coder',
//     age:24,
//     "Like this vedio":true,
// };
// //how to acces  and add above property in obejct

// console.log(user["Like this vedio"]);


//#mcq
//How to add dynamics key and value in Object
//to add dynmics proprty we should simmply wrap in dynamics property
// const property= "firstName"
// const name="Adarsh Dwivedi"
// const user={
//     [property]:name,
// };
// console.log(user.firstName);

//itreate over each of the key and get the valuee
// const user ={
//     name:'Raod Sider',
//     age:24,
//     isTotallyAwesome:true,
// };

// for(key in user)
// {
//      //console.log(key)//it will print all  the key
//      //console.log(user[key]);
// }

//Two key with same name
//  const user ={
//      name:'Raod Sider',
//      age:24,
//      name:"ajju"
//  };
//  //first key repalce with  last one
//  console.log(user)


//Create a fucntion  multiplyby two that  multiples all numeic property
// values of nums by 2

// let nums={
//     a:100,
//     b:200,
//     title:'My Nums'
// }


// function doubleNumber(num){
//     for(key in num){
//         if(typeof num[key] === "number")
//         {
//             console.log(num[key]*=2);
//         }
//     }
// }
// doubleNumber(nums);



//vvIm   ye deiscusse kro
// const a={};
// const b={key:'b'};
// const c={key:'c'};

// a[b]=123;
// a[c]=456;

// console.log(a[b]);
//456





//Json.stringify and json.object
//json.stringify convert into  store in local storage 

// convet object into string
// convet string into object json.parse

//spread all  this operator inside arrayv
console.log([..."Lydia"])



const user={name:"Lydia",age:21};
const admin={name:true,  ...user};

console.log(admin);
//{ name: 'Lydia', age: 21 }

//////////////////



const settings={
    username:"Piyush",
    level:19,
    health:90,
    
};


const data =JSON.stringify(settings,["level","health"]);
console.log(data);



/// see
// const shape={
//     radius:10,
//     diameter(){
//         return  this.radius*2;  //20
//     },
//     perimeter() =>  2*Math.PI this.radius,   // it refer to global object it will NAN
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());


//////////////////

// let user={
//     name:"Piyush",
//     age:24,
// };

// const{name}=user;
// console.log(name); 
//Piyush


///
let user={
    name:"Piyush",
    age:24,
};
const name="RoadSide Coder";

const{name:myName}=user;   //we can rename like thiss
console.log(myName);

////////////
// let user={
//     name:"Piyush",
//     age:24,
//     fullName:{
//         first:"Piyush",
//         last:"Agarawal",
//     },
// };
// //futher destrcting in  fullname ke andar
// const{fullName:{first}}=user;   //we can rename like thiss
// console.log(first);


//args should be last argument
function getItems(fruitList,favoriteFruit, ...args){
    return [...fruitList,...args, favoriteFruit];
}
console.log(getItems(["banana","apple"],"Pear","orange"));

//object refernce 

let c={greeting:"Hey"};

let d;
d=c; 
//here we passing refercenc to  so if any change in c and d it will effect both
c.greeting ="Hello";
console.log(d.greeting); 

/// in  both case it is givrn false
//beoz both are point to different object  are only equal when they
//are referencing a particualar area in this memeory
console.log({a:1}  == {a:1});   // both are point to diifeernt object
console.log({a:1}  === {a:1});

Both comparisons will output false because the objects being compared are different instances,
 even though they have the same content. In JavaScript, 
 object comparisons by reference mean that two objects are only considered equal if they reference the same memory location.

let person ={name:"Lydia"};
const members=[person];  //this line add members[0]
person=null;
//person.name=null; //then it will null
console.log(members);

//////// thing

function  changeAgeAndReference(person){
    person.age=25;
    person={
         name:"John",
         age:50,
    };
    return person;
}
const personObj1={
    name:'Alex',
    age:30,
}
// const person2=changeAgeAndReferences(personObj1);
// console.log(personObj1);
// console.log(personObj2);


/// ////// shallow copy and deep copy
//shallow copy =>   copy object to another object
//one oibject hold to refernce of other object is called shallow copy
//completely clone object into another variable  that is called
//deep copy

//spread and rest pratise kro
let user={
    name:"RoadSide Coder",
    age:24,
};
//clone im
const objclone=Object.assign({},user);
console.log(objclone);

const objClon2=JSON.parse(JSON.stringify(user))
console.log(objClon2);

const objClon3={...user};
console.log(objClon3);


const 






const obj1 = {first: 20, second: 30, first: 50};
console.log(obj1);

When an object is passed with duplicate keys, the value of the key will be replaced by the last value of that key used in the declaration.


function test(...args) {
    console.log(typeof args);
   }
   test(12);


   //The …args parameter allows us to collect all remaining arguments into an array, and in Javascript typeof an array is an object.





///
var a = 1;  
var b = 0;  
while (a <= 3)  
{  
   a++;  
   b += a * 2;  
   print(b);
}



///
To dlete the property of an object
let student ={
  name : "priya",
  age: 20,
  city: "pune"
}
delete student.age;
console.log(student)
OR
delete student['name']
console.log(student)






