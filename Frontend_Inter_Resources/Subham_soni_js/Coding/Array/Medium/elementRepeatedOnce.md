
//number that is not repeating
let arr = [1, 2, 3, 4, 4, 5, 5];
let notRepeated = [];

for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    if (count === 1) {
        notRepeated.push(arr[i]);
    }
}

console.log(notRepeated); // [1, 2, 3]