Ganda intervuew  gya bhut jda
--------------------------------
var b = 20;
let a = 10;

console.log(a); // 10
console.log(b); // 20


outout


==============================
ReferenceError: Cannot access 'a' before initialization
🧠 Explanation:
let a is hoisted but not initialized → it’s in the Temporal Dead Zone (TDZ).

console.log(a);
console.log(b);
let a = 10;
var b = 20;


--------------------------------------------------

box model
css Specifity
inline >class>ID which have more 
---------------------------

js 
clsoire
event loop
debounce and closure
--------------------
js
expalin  signal

--------------------------------
very poor not able to explain in cocept properly


---------------------------------------------------
Even though let is hoisted, it is placed in the Temporal Dead Zone (TDZ).

That means:

console.log(a); // ❌ Error
let a = 10;

👉 You cannot access a before the line where it’s declared.

🔥 Compare with var
console.log(x); // ✅ undefined
var x = 5;
var → hoisted and initialized with undefined
let → hoisted but NOT initialized


