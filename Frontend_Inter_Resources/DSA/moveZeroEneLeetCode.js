// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// xample 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

//we need two pointer
//x contain the pos where we need to fill next non zero element
//
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    x=0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i] !== 0)
        {
                nums[x]=nums[i];
                x++;
        }
    }
      for(let i=x;i<nums.length;i++)
    {
        nums[i]=0;
    }
    return nums;

    
};
//TImeCOmplexity
//O(n)
//SpaceCOmplexity
//O(1)
//ES6
var moveZeroes = function(nums) {
    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[x], nums[i]] = [nums[i], nums[x]]; // ES6 swap
            x++;
        }
    }
};
//anohter way
//“I use a two-pointer approach and swap non-zero elements forward in a single pass.”
var moveZeroes = function(nums) {
    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // swap nums[i] and nums[x]
            let temp = nums[i];
            nums[i] = nums[x];
            nums[x] = temp;

            x++;
        }
    }
};


