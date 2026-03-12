//“We initialize max with -Infinity so that it works correctly even when the array contains all negative numbers.”

// function secondLargest(arr){
// firstLargest=-Infinity
// secondLargest=-Infinity
// for(let i=0 ;i<arr.length;i++)
// {
//     if(arr[i] <firstLargest)
//     {
//         firstLargest=arr[i];
//     }
    
// }
//  console.log("firstLargest"+firstLargest);
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i] <secondLargest && arr[i] !== firstLargest )
//     {
//         secondLargest=arr[i];
//     }
    
// }
// console.log("secondLargest"+secondLargest);

// }


// arr=[4,9,0,2,8,7,20,100];
// secondLargest(arr);


// Optimal
//#)Corner Cases
// if(arr[i]>firstLargest)
// {
//     secondLargest=firstLargest;
//     firstLargest=arr[i];
// }
// else if(arr[i]>secondLargest)
// {
//     secondLargest=arr[i];
// }

//optimal


function findSecondValues(arr){

    // Step 1: Smallest
    let smallest = Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }

    // Step 2: Second Smallest
    let secondSmallest = Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < secondSmallest && arr[i] !== smallest){
            secondSmallest = arr[i];
        }
    }

    // Step 3: Largest
    let largest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }

    // Step 4: Second Largest
    let secondLargest = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i];
        }
    }

    return { secondSmallest, secondLargest };
}

console.log(findSecondValues([5, 1, 9, 2, 7]));
//-----------------------------------------------------------
//Optimal apparoch


function secondLargestOptiomal(arr){
    firstLargest= -Infinity
    secondLargest= -Infinity
    for(let i=0 ;i<arr.length;i++)
    {
        if(arr[i]>firstLargest)
        {
            secondLargest=firstLargest;
            firstLargest =arr[i];
        }
        else if(arr[i] > secondLargest && arr[i] != firstLargest) //repear hanlde 
        {
            secondLargest=arr[i];
        }
    }
    console.log(secondLargest);
}

arr=[4,9,20,100 ,100];
secondLargestOptiomal(arr);



