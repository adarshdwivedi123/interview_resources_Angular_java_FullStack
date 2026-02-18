Input:
arr[] = {1,2,-4,-5}, N = 4
Output:
1 -4 2 -5

Explanation: 

Positive elements = 1,2
Negative elements = -4,-5
To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5

//even we are putting 2*

function RearrangebySign(A) {
    // Define 2 arrays, one for storing positive 
 // and other for negative elements of the array.
    let pos=[];
    let neg=[];

   for ( i = 0; i < A.length; i++) {
       if(A[i]>0)
       {
           pos.push(A[i]);
       }
       else
       {
           neg.push(A[i]);
       }
   }
   // Positives on even indices, negatives on odd.
   for(let i=0;i<A.length/2;i++)    //length/2 kyu 
   {
       A[2*i]=pos[i];
       A[2*i+1]=neg[i];
   }

   return A;
}


   arr = [1, 2, -4, -5];
    maxPro = RearrangebySign(arr);
   console.log("Max profit is: "+maxPro)


   //Array ko Zero se fill kr diya
//    In this optimal approach, we will try to solve the problem in a single pass and try to arrange the array elements in the correct order in that pass only.
// We know that the resultant array must start from a positive element so we initialize the positive index as 0 and negative index as 1 and start traversing the array such that whenever we see the first positive element, it occupies the space at 0 and then posIndex increases by 2 (alternate places).
// Similarly, when we encounter the first negative element, it occupies the position at index 1, and then each time we find a negative number, we put it on the negIndex and it increments by 2.
// When both the negIndex and posIndex exceed the size of the array, we see that the whole array is now rearranged alternatively according to the sign.






function RearrangebySign(A) {
    // Define an array for storing the answer separately.
  
     let ans=new Array(A).fill(0);
     
      // Positive elements start from 0 and negative from 1.
     let posIndex=0,negIndex =1;
     
    for ( i = 0; i < A.length; i++) {
        // Fill negative elements in odd indices and increment by 2.
        if(A[i]<0)
        {
            ans[negIndex]=A[i];
            //kyu ki alternate dalan  hai isliye aisa hoga
            negIndex+=2;
        }
        // Fill positive elements in even indices and increment by 2.
        else
        {
            ans[posIndex]=A[i];
            posIndex+=2;
        }
    }
    return ans;
    
}

 
    arr = [1, 2, -4, -5];
     maxPro = RearrangebySign(arr);
    console.log("Max profit is: "+maxPro)



//variety 2
//The leftover elements should be placed at the very end in the same order as in array A.

//Input:
// arr[] = {1,2,-4,-5,3,4}, N = 6
// //Output:
// 1 -4 2 -5 3 4




