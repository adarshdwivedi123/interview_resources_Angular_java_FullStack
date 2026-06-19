
let str="Hello this is adarsh";
data= str.split(' ')
.map(word =>word.split('')  //each word ko kran hai to  map arrayme //me le aya 
.reverse()
.join(''))
.join(' ')

console.log(data);


------------------------------------------
usign spread operatot
let str = "Hello world";

let result = str
  .split(' ')
  .map(word => [...word].reverse().join(''))
  .join(' ');

console.log(result);


//phele ake loop traverse kr lo.
//ake word pe loop chalvo
str="Hello this is a adarsh";
let result="";
 let =reverEachWord=str.split(" ");
 for(let word of reverEachWord)
 {
     wordRev ="";
    for(let i= word.length-1;i>=0;i-- )
    {
        wordRev=wordRev+word[i];
    }
    //console.log(wordRev);
    result=result+wordRev+" ";  //idha dhyan do
 }
 ------------------------------
 //phele ake loop traverse kr lo.  without Slit


 let str = "I Love JavaScript";

let word = "";
let result = "";

for (let i = 0; i <= str.length; i++) {

    if (str[i] === " " || i === str.length) {

        for (let j = word.length - 1; j >= 0; j--) {
            result += word[j];
        }

        result += " ";
        word = "";

    } else {
        word += str[i];
    }
}

console.log(result.trim());