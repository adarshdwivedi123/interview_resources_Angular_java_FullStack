function printArray(arr,n,d)
{
    let p = 1;
        while (p <= d) {
            let last = arr[0];
            for (let i = 0; i < n; i++) {
                arr[i-1] = arr[i];
            }
            arr[n - 1] = last;
            p++;
        }
 
        for (let i = 0; i < n; i++) {
            console.log(arr[i] + " ");
        }
}
let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
[3,4,5,6,7,1,2];
let n = arr.length;
let d=2; //number of times rotating the array

// Function calling
printArray(arr, n,d);
https://www.geeksforgeeks.org/array-rotation/

//contributed by keerthikarathan123

//optimal approch dekhi

