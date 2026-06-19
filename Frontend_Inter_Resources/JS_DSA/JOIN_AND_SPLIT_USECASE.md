//string ko array me convert krne ke liye hum split method ka use karte hai,
str('')  //charcter  ko array me convert kr dega;
str().split('')  //string ko array me convert kr dega;

join('')  // array to string m convert kre ga
string to array

//string ko array me convert krne ke liye hum split method ka use karte hai,
str('')  //charcter  ko array me convert kr dega;
str().split('')  //string ko array me convert kr dega;

join('')  // array to string m convert kre ga


let reverString="Adarsh";
  let str=reverString.split("")
for(let i=0 ,j=str.length-1;i<j;i++,j--)
{
     let temp =str[i];
     str[i]=str[j];
     str[j]=temp
}
console.log(str.join(""));