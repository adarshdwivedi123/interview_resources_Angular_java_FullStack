"Both Promise and async/await are used to handle asynchronous operations in JavaScript, like API calls or HTTP requests."

define
1)We handle it using .then() and .catch()."



------------------asynchronus--------------
Deine
1)
2)It makes asynchronous code look synchronous and improves readability."
"3)We use await to pause execution until the Promise resolves.

Async/await is a cleaner syntax built on top of Promises that makes code look synchronous and easier to read. It also improves error handling using try-catch. I



#)Differnce
"In Promise, we use chaining with then and catch, which can become complex when multiple async operations are involved. With async/await, the same logic is written in a synchronous style using try-catch, making the code easier to read, maintain, and debug."
  



------------------------------------------------------------------------
🎯 Direct Comparison
Promise (Chaining)
getUser()
  .then(user => getOrders(user))
  .then(data => console.log(data))
  .catch(err => console.log(err));

👉 Flow:

Jumping .then → then → then
Hard to trace
async/await (Clean flow)
try {
  const user = await getUser();
  const data = await getOrders(user);
  console.log(data);
} catch (err) {
  console.log(err);
}

👉 Flow:

Step 1 → Step 2 → Step 3 (clear)