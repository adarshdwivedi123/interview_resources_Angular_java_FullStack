    //number of elements in the array
    function sumOfAllArray(arr, n) {
    if(n <= 0){
        return 0;               
    }   
    return arr[n-1] + sumOfAllArray(arr, n-1);
}       
console.log(sumOfAllArray([1,2,3,4,5], 5)); // Output: 15
// Explanation:
// sumOfAllArray([1,2,3,4,5], 5)        
// 5 + sumOfAllArray([1,2,3,4,5], 4)
// 5 + 4 + sumOfAllArray([1,2,3,4,5], 3)
// 5 + 4 + 3 + sumOfAllArray([1,2,3,4,5], 2)
// 5 + 4 + 3 + 2 + sumOfAllArray([1,2,3,4,5], 1)
// 5 + 4 + 3 + 2 + 1 + sumOfAllArray([1,2,3,4,5], 0)
// 5 + 4 + 3 + 2 + 1 + 0 = 15
// Explanation: