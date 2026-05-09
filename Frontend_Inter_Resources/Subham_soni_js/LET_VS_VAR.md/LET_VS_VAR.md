// JS engine sees this like:

let a;   // declared but not initialized (TDZ phase)
console.log(a); // ❌ error (can't access before initialization)

Why error happens
Variables declared with let are hoisted (moved to top internally)
BUT they are not initialized immediately

👉 The time between hoisting and initialization is called:

➡️ Temporal Dead Zone (TDZ)

During this time, accessing the variable gives an error.

--------------------------------------------------------



console.log(a);
var a;

👉 Output:

undefined
Why?
var is hoisted and initialized with undefined
let is hoisted but NOT initialized