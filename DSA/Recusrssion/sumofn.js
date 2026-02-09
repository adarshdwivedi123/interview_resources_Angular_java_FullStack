function sumOfN(n) {
    if(n == 0){
        return 0;
    }
    return n + sumOfN(n-1);
}
console.log(sumOfN(5)); // Output: 15
// 5 + sumOfN(4)
// 5 + 4 + sumOfN(3)
// 5 + 4 + 3 + sumOfN(2)
// 5 + 4 + 3 + 2 + sumOfN(1)
// 5 + 4 + 3 + 2 + 1 + sumOfN(0)
// 5 + 4 + 3 + 2 + 1 + 0 = 15

//one to n