//Ask in pubmatics
//this is very pure lgic
let arr = [2, 4, 3, 6, 3, 2, 5, 5];

for (let i = 0; i < arr.length; i++) {

    let count = 0;

    for (let j = 0; j < arr.length; j++) {

        if (arr[i] === arr[j]) {
            count++;
        }

    }

    if (count === 1) {
        console.log(arr[i]);
    }
}
//if count ==2  match then print repeated number

//#) hashMap
//using XOR
