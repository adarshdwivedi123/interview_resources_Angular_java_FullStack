//why we are using closure?
//Closure provides a means to encapsulate data within functions, allowing for controlled access to that data while keeping it hidden from the outside scope. This concept is crucial for maintaining data integrity, preventing unintended modifications, and creating more modular and organised code.



why should use
Because closures allow a function to remember data even after the outer function is finished.

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
Output:

4
4
4

Using closure fix:
for (var i = 1; i <= 3; i++) {
  (function(i){
    setTimeout(() => console.log(i), 1000);
  })(i);
}
Output:

1
2
3
-------------------------------------------------------------------
BENEFITS of Closures (Super Simple)
✅ 1. Closures give us PRIVATE VARIABLES

JavaScript has no private keyword (before ES6),
so closures act as real private data.

Example:

function counter() {
  let count = 0;  // PRIVATE

  return function() {
    count++;
    console.log(count);
  }
}

const c = counter();
c(); // 1
c(); // 2


👉 count is safe
👉 No other code can change it
👉 Only your function can access it
🔥 Used in real apps for security & encapsulation
------------------------------------------------------------------

✅ 2. Closures store previous values (memory)
function greet(name) {
  return function() {
    console.log("Hello " + name);
  };
}


Even if greet is finished,
the inner function remembers "Adarsh".

🔥 Useful for reusable functions
🔥 Useful for chat apps, form memory, caching
--------------------------------------------------------------------------

✅ 3. Closures help in callbacks, timeouts, events

Example:

function show(i) {
  setTimeout(() => console.log(i), 1000);
}

show(5);


👉 Even after 1 second,
i is still remembered.

🔥 Used heavily in Angular for async code / timers.

--------------------------------------------------------------------------

✅ 4. Closures allow function factories

Example:

function multiply(x) {
  return function(y) {
    return x * y;
  }
}

const double = multiply(2);
double(10); // 20


🔥 Used for creating reusable functions
🔥 Useful in Angular services & utilities
----------------------------------------------------------------------------

✅ 5. Closures reduce GLOBAL VARIABLES

Global variables = bugs, conflicts, memory leaks.

Closures allow this:

function myModule() {
  let data = 10;
  return {
    get: () => data,
    set: (v) => data = v
  }
}


🔥 Clean
🔥 Safe
🔥 Module pattern uses closures

⭐ WHEN should we use Closures?
1️⃣ When you want private variables

counters

tokens

session data

feature flags

2️⃣ When you need function to remember something

Like:

User name