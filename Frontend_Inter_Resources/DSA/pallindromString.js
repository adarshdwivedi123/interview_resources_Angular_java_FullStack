Way 1 — Using Reverse (Easiest)
javascriptfunction isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

console.log(isPalindrome('madam'));   // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello'));   // false

----------------------------------------
function isPalindrome(str) {
  let left  = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;   // mismatch found
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome('madam'));   // true
console.log(isPalindrome('hello'));   // false
---------------------------------------------







function isPalindrome(str) {
  let left  = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;   // mismatch found
    }
    left++;
    right--;
  }
  return true;
}

let pallinfrom  = isPalindrome('madams');   
if(pallinfrom)
{
    console.log("yes");
}
else{
    
    console.log("Not palindrm")
}





===============================


function getPalindromes(words) {
  let result = [];

  words.forEach(str => {
    let left  = 0;
    let right = str.length - 1;
    let isPalin = true;

    while (left < right) {
      if (str[left] !== str[right]) {
        isPalin = false;
        break;
      }
      left++;
      right--;
    }

    if (isPalin) {
      result.push(str);   // only push palindromes
    }
  });

  return result;
}

let words = ['madam', 'hello', 'racecar', 'world', 'level'];
console.log(getPalindromes(words));
// ['madam', 'racecar', 'level']