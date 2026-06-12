
// Suppose, there are N-X zeros and X non-zero elements in the array. We will first copy those 
//X non-zero elements from the original array to a temporary array. 
// Then, we will copy the elements from the temporary array one by one and fill the first X places of the original array. 
// The last N-X places of the original array will be then filled with zero. Now, our task is completed.

//non zero element ko hmne ake temporarry  array me dala hai

//

let arr = [1, 0, 3, 0, 5, 0, 6];

let left = 0;  // 👆 points to zero
let right = 1; // 👆 points to non zero

while (right < arr.length) {

    if (arr[left] === 0 && arr[right] !== 0) {
        // swap
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right++;
    } else if (arr[left] !== 0) {
        left++;
        right++;
    } else {
        right++;
    }

}

console.log(arr); // [1, 3, 5, 6, 0, 0, 0]
temp=[];
function  swapKaro(arr){
    for( let i=0;i<arr.length;i++)
    {
        if(arr[i]!=0)
        {
            temp.push(arr[i]);
        }
        
        
    }
    for(i=0;i<temp.length;i++)
    {
        arr[i]=temp[i];
    }
    //jo empty space hai usme hm zero daal reh hai
    for(j=temp.length;i<arr.length;i++)
    {
        arr[i]=0;
    }
    
    console.log(arr);
    
}
arr=[1 ,0 ,2 ,3 ,0 ,4 ,0 ,1];
p=swapKaro(arr);


//isko try kro  filte use kt ke 

function moveZeroToLast(arr) {
    let newArrWithZero = []
    let newArrWithNotZero = []

    for (let data of arr) {
        if (data !== 0) {
            newArrWithNotZero.push(data)
        }
        else {
            newArrWithZero.push(data)
        }
    }
    return [...newArrWithNotZero, ...newArrWithZero]
}

// console.log(moveZeroToLast([0,1,0,3,12]));
//Two pointer in plcare
o(n)

function moveZeroes(arr){

  let j = 0;

  for(let i = 0; i < arr.length; i++){

    if(arr[i] !== 0){

      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      j++;
    }

  }

  return arr;
}

let arr = [0,1,0,3,12];

console.log(moveZeroes(arr));