
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
   
    for(var i=0,j=s.length-1;i<j; i++,j--)
    {
        let temp=s[j];
        s[j]=s[i];
        s[i]=temp;
               
    }
    return s;
    
};
s = ['h','e','l','l','o']
//Another way
var reverseString = function(s) {
  return s.split('').reverse().join('');
};


//Another way
//using destructing

var reverseString = function(s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    [s[i], s[j]] = [s[j], s[i]]; // ✅ swap
  }
  return s;
};

//akssyan sain code

//Swap Two Numbers Using Destructuring (Best Way)
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10


/////////