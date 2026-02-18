//JS Does Shallow copy by for Non Primitive Type


#)Defination

shallow copy we are doing with spread operator  if we change in orginal  object it will reflect in
shallow copy becoz they share same memory address.

or
if we change in copy object it will reflect in orgianlOBJect

//Shallow copying can be more efficient in terms of performance, 
//but may result in unexpected behavior if changes to a copied object affect the original object.
//becoz their memmory reference is same.
//Explanaination:



// Deep copying ensures that changes to a copied object do not affect the original object,
// but may be more expensive in terms of performance.


// so here js shallow copy  for object data type
    // change in copy object  effect in orginal object also


//shallow copy we have to do in 4 ways
------------------------------------------------------------
//1)using spread
  
let orignalObj ={
  name:"Ajay",
  address:{ city:"Delhi"}
};

let shallowCopy ={...orignalObj};  //here we are  doing shallow copy
originalObj.address.city='Mumbai';//changing in original object 
console.log(shallowCopy.address.city);  //orginalobjec change ho gya







 //2)Object .assign()
const car = {
  brand: "BMW",
  engine: { type: "V8" }
};

const carCopy = Object.assign({}, car);

carCopy.engine.type = "V6";

console.log(car.engine.type); // ❌ V6



//3)Array slice()
Example
const arr = [[1, 2], [3, 4]];

const arrCopy = arr.slice();

arrCopy[0][0] = 99;

console.log(arr[0][0]); // ❌ 99


// 4️⃣ Array.from()
Example
const marks = [[50, 60], [70, 80]];

const marksCopy = Array.from(marks);

marksCopy[1][1] = 100;

console.log(marks[1][1]); // ❌ 100


-----------------------
this.users = [...this.users]; // shallow copy
✔ Used when:

Updating lists in UI