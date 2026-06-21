//here we can use two pointers
// Without sort → random order → two pointer won't work
//[-3, -1, 2, 3, 1]  ← can't use two pointer here

//After sort  → ordered → two pointer works perfectly
//[-3, -1, 1, 2, 3]  ✅
// sum TOO BIG   → kill the big side   → right--
// sum TOO SMALL → kill the small side → left++

//output [-4,4]
//To find a first pair whose sum is zero using indexing //Firstly do a sort here
function getSumPairZero(array)
{
  let left = 0;
  let right = array.length-1;
  while(left<right)
  {
    sum = array[left]+array[right]
    if(sum===0){
       return [array[left],array[right]]
    }else if(sum>0){
      right--;
    }else{
      left++;
    }
  }
}
const result = getSumPairZero([-5,-4,-3,-2,-1,0,2,4,6,8])
console.log(result)