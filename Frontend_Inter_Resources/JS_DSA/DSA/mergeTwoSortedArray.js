//Brute Force Approach to merge two sorted arrays and return a sorted array
function mergeArray(arr1, arr2) {
  const arrNew = [];

  // ✅ Push first array
  for (let i = 0; i < arr1.length; i++) {
    arrNew.push(arr1[i]);
  }

  // ✅ Push second array
  for (let j = 0; j < arr2.length; j++) {
    arrNew.push(arr2[j]);
  }

  console.log(arrNew);
  return arrNew;
}

const arr = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

mergeArray(arr, arr2);




//Another way to merge two sorted arrays and return a sorted array`



function mergerArray(arr1, arr2 ){
//     arrNew=[];
// for(let i=0; i< arr1.length+arr2.length; i++){
//     arrNew.push(arr1[i]);
// }
// for(let j=arrNew.length-1; j< (arr1.length + arr2.length); j++){
//     console.log('print',arrNew.length);
//         arrNew.push(arr2[j]);
//     }
//     console.log(arrNew);
const arrNew = [...arr1, ...arr2];
console.log(arrNew);
 console.log(arrNew.sort((a,b) => a-b) );


}


arr=[1,3,5,7]
arr2=[7,2,4,6,8]
mergerArray(arr,arr2);



//LeetCode Soluition approach 2
//arrya ka  copy bna ke rkh liaya hao
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


var merge = function(nums1, m, nums2, n) {
    let nums1Copy =nums1.slice(0,m);
    let p1=0;
    let p2=0;
    for(let i=0;i<m+n ;i++)
    {
        if(p2>=n || (p1 <m && nums1Copy[p1] <nums2[p2])){
            nums1[i]=nums1Copy[p1];
            p1++;

        }
        else{
            nums1[i]=nums2[p2];
            p2++;
        }
    }
    
};

//o(n+m)
//extra space
//thtird approach3
//fill the array in revers order

arr=[1,3,5,7]
arr2=[7,2,4,6,8]