//Brute Force Approach

 //not working chek
function missingNumber(a,N){
  //storing the frequqncy
  for(let i=0 ;i<=N;i++)
  {
      //falg  variable to check if an elment exists
      let flag=0;
 //search the element using linear search
  for(let j=0;i<=N-1;j++)
  {
      if(arr[j] === i)
      //if i is present in the array
      {
          flag =1;
          break;
      }
  }
  }
}
const N = 5;
const a = [1,2,4, 5];
const ans = missingNumber(a, N);
console.log("The missing number is:", ans);





//Using the hashing technique, we will store the frequency of each element of the given array. 
//Now, the number( i.e. between 1 to N) for which the frequency will be 0, will be returned.

Approach:
// The algorithm steps are as follows:

//The range of the number is 1 to N. So, we need a hash array of size N+1 (as we want to store the frequency of N as well).
//Now, for each element in the given array, we will store the frequency in the hash array.
//After that, for each number between 1 to N, we will check the frequencies. And for any number, if the frequency is 0, we will return it.
//////////////

 
function missingNumber(a,N){
  const hash= new Array(N+1).fill(0);
  
  //storing the frequqncy
  for(let i=0 ;i<N-1;i++)
  {
      hash[a[i]]++;
  }
  
  //checking the frquency for number 1 to N
  for(let i=1;i<=N;i++)
  {
      if(hash[i] === 0)
      {
        //jis index pe nhi mile ga vhi return kr denge
          return i
      }
  }
}

const N = 5;
const a = [1, 2, 4, 5];
const ans = missingNumber(a, N);
console.log("The missing number is:", ans);


/////////////////

//Second Approach
function missingNumber(a, N) {
    // Summation of first N numbers:
    const summation = (N * (N + 1)) / 2;
  
    // Summation of all array elements:
    let s2 = 0;
    for (let i = 0; i < N - 1; i++) {
      s2 += a[i];
    }
  
    const missingNum = summation - s2;
    return missingNum;
  }
  
  function main() {
    const N = 5;
    const a = [1, 2, 4, 5];
    const ans = missingNumber(a, N);
    console.log("The missing number is:", ans);
  }
  
  main();
  
  
  //One MOre Optimal Approach using Xor CHeck