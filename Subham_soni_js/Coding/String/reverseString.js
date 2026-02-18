
//reverse string using some funciton
function reverseString(str)
{
    let p=str.split('').reverse().join('');
    console.log(p);
}


str="adarsh";
reverseString(str)


//////////////////////////////// reverse String\\\\\\\\\\\\\\\

function reverseString(str)
{
    revString=""
    // let p=str.split('');
    p= str.length;
    console.log(p);
    for(let i=str.length-1;i>=0;i--)
    {
       revString+=str[i];
    }
    console.log(revString);
}


str="adarsh";
reverseString(str)


///
//Algorithm to Reverse a String in Place in js
//Here is a simple example to reverse characters in String by using two pointer technique. This is an in-place algorithm because it doesn't allocate any extra array, it just uses the two integer variables to hold positions from start and end.
function reverseString(str1,str2)
{
    p1=str1.split('').sort().join();
    p2=str2.split('').sort().join();
    // for(let i=str.length;i>=0;i--)
    // {
    //   revString+=str[i];
    // }
    // console.log(revString);
    if(p1 === p2)
    {
        console.log('it is anagram');
    }
    else{
        console.log('Is is not anagram');
    }
}
str1="adarsh";
str2="hsradaa";

reverseString(str1,str2);




