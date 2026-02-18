
// An anagram of a string is another string that contains the same characters, 
// only the order of characters can be different.

function reverseString(str1,str2)
{
    //split kr ke array me change kr denege
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

//another way