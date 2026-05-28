in case of seconfd repereating  repalce with $ not able to answer in capgeimin
//let str = "Hello world";
//ouptut="Hel$o w$r$d"

let str = "Hello world";
let result = "";

for (let i = 0; i < str.length; i++) {
    let found = false;
    for (let j = 0; j < i; j++) {
        //thsi liop unseratnc properly

        if (str[i] == str[j]) {
            found = true;
            break;
        }
    }
    if (found) {
        result += '$';
    } else {
        result += str[i];
    }
}

console.log(result);

------------------------------------------------------------------------------------
//includes() removes the need for inner loop in many cases.
using include funcion
let str = "Hello world";
let result = "";

for (let i = 0; i < str.length; i++) {

    if (result.includes(str[i])) {
        result += '$';
    } else {
        result += str[i];
    }
}

console.log(result);

--------------------------------------------------

with one loop hashmap

let str = "Hello world";
let result = "";
let obj = {};

for (let i = 0; i < str.length; i++) {

    if (obj[str[i]]) {
        result += '$';
    } else {
        result += str[i];
        obj[str[i]] = true;
    }
}

console.log(result);