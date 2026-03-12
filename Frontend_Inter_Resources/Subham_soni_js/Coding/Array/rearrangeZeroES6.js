//Becoz  of this question impetus me nhi huva

function rearrangeZeros(arr, addZeroFirst) {
    // Filter out zeros and non-zeros
    const zeros = arr.filter(num => num === 0);
    const nonZeros = arr.filter(num => num !== 0);

    // Rearrange based on addZeroFirst flag
    return addZeroFirst ? [...zeros, ...nonZeros] : [...nonZeros, ...zeros];
}

const arr = [2, 4, 4, 6, 3, 0, 9, 8, 0, 7, 24, 43, 0];

console.log(rearrangeZeros(arr, true));  // Zeros first
console.log(rearrangeZeros(arr, false)); // Zeros last



//////////////////////////////
function rearrangeZeros(arr, addZeroFirst){

    const zeros =arr.filter(num => num === 0)
    const nonZeros =arr.filter(num => num! ==0)

    return addZeroFirst ?[...zeros  , nonZeros]:[...nonZeros ,... zeros];
}