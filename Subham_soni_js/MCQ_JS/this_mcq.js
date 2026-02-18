//#Def
//This Refer to an  object
//THe value of this depends  on how the fucntion is invoked

//Behaviour of this is a funciton  this refer to window Object
//behaviour of this in a object this refer to the object

//Arrow function don't have a defined this .Instead they tret 
//it as a variable and they try to get  the value lexically means  (inherit from parent scope)


//write others


const  person ={
    name:"Vedant",
    getName:()=>{
        return `${this.name} is my name`
    },
};
console.log(person.getName());



// “Arrow functions don’t bind this.
// They capture this from the outer scope.
// That’s why we shouldn’t use arrow functions as object methods when we need to access object properties.”
//undefined is my name


// IN case of function
const person = {
  name: "Vedant",
  getName() {
    return `${this.name} is my name`;
  },
};

console.log(person.getName());
➡️ Here this refers to the object (person), so it works.



// ------------------------------------------------------------
// Example 1: Arrow function INSIDE a normal function
const person = {
  name: "Adarsh",
  getName: function () {
    const inner = () => {
      return this.name;
    };
    return inner();
  }
};

console.log(person.getName());

// ✔️ Output:
Adarsh

// 👉 Why?

// getName() is a normal function, so this = person

// The arrow function inner() inherits that same this

// Therefore, this.name = "Adarsh"

// Interview line:

// “Here the arrow function takes this from the surrounding normal method.”

✔️ Example 2: Arrow function inside a constructor (common interview question)
function User(name) {
  this.name = name;

  this.showName = () => {
    console.log(this.name);
  };
}

const u = new User("Vedant");
u.showName();

✔️ Output:
Vedant

👉 Why?

Inside constructor:

this refers to the new object u

Arrow function inherits that same this

So this.name works correctly

Interview line:

“Arrow functions are useful inside constructors because they keep the correct this.”

✔️ Example 3: Compare Arrow vs Normal inside setTimeout()
❌ Normal function loses this
const obj = {
  value: 100,
  show() {
    setTimeout(function () {
      console.log(this.value);
    }, 1000);
  }
};

obj.show();

Output:
undefined

👉 Why?

function() inside setTimeout changes this to global object.

✔️ Arrow function keeps this
const obj = {
  value: 100,
  show() {
    setTimeout(() => {
      console.log(this.value);
    }, 1000);
  }
};

obj.show();

Output:
100

👉 Why?

Arrow function inherits this from show(), which is obj.

Interview line:

“Arrow functions don’t change this, so inside callbacks like setTimeout, they keep the parent this.”

//-------------------------------------------------------------------------
⭐ Question 1:
❓ Why does this behave differently in arrow functions vs normal functions?
✔️ Interview Explanation

Arrow functions do not have their own this.
They capture (inherit) this from where they are defined, not from where they are called.

Normal functions bind this based on who calls the function.

✔️ Example
var name = "GLOBAL";

const person = {
  name: "Adarsh",
  getName: () => {
    return this.name;
  },
};

console.log(person.getName());

❌ Output:
GLOBAL

✔️ Why?

Arrow function inherits this from the global scope

So this.name = "GLOBAL"

Not "Adarsh"

✔️ Interview Answer (Say this)

“Arrow functions use lexical this.
In an object method, they inherit this from the outer/global scope, so they don’t point to the object.
That’s why we should not use arrow functions for object methods.”

⭐ Question 2:
❓ When should we use arrow functions?
✔️ Perfect Use Case: Callbacks

Arrow functions keep the parent this.

✔️ Example
const obj = {
  value: 50,
  print() {
    setTimeout(() => {
      console.log(this.value);
    }, 1000);
  }
};

obj.print();

✔️ Output:
50

Why?

Arrow function inherits this from print(), which refers to obj.

✔️ Interview Answer

“I use arrow functions when I want to inherit the outer this, especially in callbacks like setTimeout, promises, .map(), .filter(), etc.”

⭐ Question 3:
❓ Why can't an arrow function be used as a constructor?
✔️ Explanation

Arrow functions don’t have:

their own this

their own prototype

Therefore, they cannot create new objects with new.

✔️ Example
const User = () => {};
const u = new User();   // ❌ Error

❌ Output:
TypeError: User is not a constructor

✔️ Correct way
function User(name) {
  this.name = name;
}

const u = new User("Vedant");

✔️ Interview Answer

“Arrow functions do not have a this binding or prototype.
Because a constructor requires its own this to create a new instance, arrow functions cannot be used as constructors.”
