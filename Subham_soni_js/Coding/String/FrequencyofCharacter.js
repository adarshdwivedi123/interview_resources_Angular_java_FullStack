//in case string first need convert into strin

const str2 = " this is javascript code and you have to find max character";
function findNumberOfChar(str) {
    let str1 = str.split("");
    let charCount = {};

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if (char !== ' ') {
            //ye dekho logic  ya per differnce a rh ahai
            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }
    }
    return charCount;

}

console.log(findNumberOfChar(str2))
//Another way ask
Short circuit 

function countCharacter(str) {
    let charCount = {};
    for (let s of str) {
        if (s !== " ") {
            charCount[s] = (charCount[s] || 0) + 1
        }
    }
    return charCount
}

console.log("cc",countCharacter("my name is bittu"));