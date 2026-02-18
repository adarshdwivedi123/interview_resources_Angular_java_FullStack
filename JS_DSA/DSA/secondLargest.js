

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
