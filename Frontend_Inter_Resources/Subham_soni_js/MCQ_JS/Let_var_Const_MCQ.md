Q1. (Medium)
javascriptconsole.log(x);
var x = 5;
A) 5   B) undefined ✅   C) ReferenceError   D) null
var is hoisted and initialized as undefined. Declaration moves to top, assignment stays in place.

Q2. (Hard)
javascriptconsole.log(x);
let x = 5;
A) 5   B) undefined   C) ReferenceError ✅   D) null
let is hoisted but sits in the Temporal Dead Zone (TDZ) — accessing before declaration throws ReferenceError.

Q3. (Hard)
javascriptvar x = 1;
function foo() {
  console.log(x);
  var x = 2;
}
foo();
A) 1   B) 2   C) undefined ✅   D) ReferenceError
Inside foo(), the local var x is hoisted. console.log sees local x which is undefined at that point.

Q4. (Medium)
javascriptconst a = 5;      a = 10;         // Option A
const b = {};     b.name = 'x';   // Option B
const c = [];     c.push(1);      // Option C
A) Option A only ✅   B) Option B   C) Option C   D) All three
const prevents reassignment of the binding, not mutation. B and C mutate the value — totally fine.

Q5. (Hard)
javascriptfor (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
A) 0 1 2   B) 3 3 3 ✅   C) 0 0 0   D) undefined
var is function-scoped — all 3 callbacks share the same i. By the time they run, loop ended and i = 3.

Q6. (Medium)
javascriptfor (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
A) 0 1 2 ✅   B) 3 3 3   C) 0 0 0   D) ReferenceError
let creates a new binding per iteration. Each callback closes over its own copy of i.

Q7. (Easy)
javascriptlet x = 10;
let x = 20;
console.log(x);
A) 20   B) 10   C) SyntaxError ✅   D) undefined
let and const don't allow redeclaration in the same scope. var does.

Q8. (Hard)
javascriptlet x = 'global';
{
  console.log(x);
  let x = 'block';
}
A) global   B) block   C) undefined   D) ReferenceError ✅
The inner let x creates a new binding. console.log is inside the TDZ of the inner x — throws ReferenceError, not 'global'.

Q9. (Medium)
javascriptfunction test() {
  if (true) {
    var a = 'hello';
    let b = 'world';
  }
  console.log(a);
  console.log(b);
}
test();
A) hello, world   B) hello, ReferenceError ✅   C) undefined, world   D) ReferenceError, ReferenceError
var a leaks out of the if block (function-scoped). let b is destroyed after the block — ReferenceError.

Q10. (Medium)
javascriptconst obj = { a: 1 };
Object.freeze(obj);
obj.a = 99;
console.log(obj.a);
A) 99   B) 1 ✅   C) undefined   D) TypeError
Object.freeze() makes the object immutable. Assignment silently fails in non-strict mode, throws TypeError in strict mode.

Q11. (Easy)
javascriptfunction outer() {
  if (true) {
    var x = 10;
  }
  console.log(x);
}
outer();
A) ReferenceError   B) 10 ✅   C) undefined   D) null
var is function-scoped, ignores block boundaries like if, for, while.

Q12. (Hard)
javascriptvar a = 1;
let b = 2;
console.log(window.a); // browser
console.log(window.b); // browser
A) 1, 2   B) 1, undefined ✅   C) undefined, 2   D) undefined, undefined
Global var becomes a property of window. Global let/const do NOT attach to window.

Q13. (Easy)
javascriptconst arr = [1, 2, 3];
arr = [4, 5, 6];
A) arr = [4,5,6]   B) TypeError ✅   C) SyntaxError   D) arr = [1,2,3,4,5,6]
const prevents reassigning the binding. Pointing arr to a new array is reassignment — TypeError.

Q14. (Medium)
javascriptlet x = 10;
{
  let x = 20;
  {
    let x = 30;
    console.log(x);
  }
  console.log(x);
}
console.log(x);
A) 30, 20, 10 ✅   B) 10, 20, 30   C) 30, 30, 30   D) 10, 10, 10
Each let x creates an independent binding in its own block. Each scope sees only its own x.

Q15. (Hard)
What is the Temporal Dead Zone (TDZ)?
A) Time between tab close and reopening
B) The zone where let/const exist but can't be accessed before declaration ✅
C) A scope where var variables are deleted
D) Period after a variable is garbage collected
TDZ is the period from block start to the let/const declaration line. Variable is hoisted but any access throws ReferenceError.
